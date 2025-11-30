import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { dsaData } from '../data/dsaData.js';

const execAsync = promisify(exec);
const TEMP_DIR = path.join(process.cwd(), 'temp');

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR);
}

class JudgeService {
    static async runCode({ language, code, problemId }) {
        console.log('[JudgeService] Running code:', { language, problemId, codeLength: code.length });

        const problem = this.findProblem(problemId);
        if (!problem) {
            console.error('[JudgeService] Problem not found:', problemId);
            throw new Error('Problem not found');
        }

        const driverCode = problem.driverCode[language];
        if (!driverCode) {
            console.error('[JudgeService] Language not supported:', language);
            throw new Error(`Language ${language} not supported for this problem`);
        }

        // Create unique directory for this run
        const runId = Date.now() + '_' + Math.random().toString(36).substring(7);
        const runDir = path.join(TEMP_DIR, runId);

        try {
            console.log('[JudgeService] Creating run directory:', runDir);
            if (!fs.existsSync(runDir)) {
                fs.mkdirSync(runDir, { recursive: true });
            }

            const fullCode = this.prepareCode(language, code, driverCode);
            const filename = this.getFilename(language);
            const filePath = path.join(runDir, filename);

            console.log('[JudgeService] Writing code to:', filePath);
            await fs.promises.writeFile(filePath, fullCode);

            // Compile if necessary
            if (language === 'cpp' || language === 'java') {
                console.log('[JudgeService] Compiling:', language);
                await this.compileCode(language, filePath);
            }

            // Run test cases
            console.log('[JudgeService] Running test cases, count:', problem.testCases.length);
            const results = [];
            for (let i = 0; i < problem.testCases.length; i++) {
                const testCase = problem.testCases[i];
                try {
                    console.log(`[JudgeService] Executing test case ${i + 1}`);
                    const output = await this.executeTestCase(language, filePath, testCase.judgeInput);
                    const passed = this.compareOutput(output, testCase.output);
                    results.push({
                        input: testCase.input,
                        expectedOutput: testCase.output,
                        actualOutput: output,
                        passed
                    });
                    console.log(`[JudgeService] Test case ${i + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
                } catch (err) {
                    console.error(`[JudgeService] Test case ${i + 1} error:`, err.message);
                    results.push({
                        input: testCase.input,
                        expectedOutput: testCase.output,
                        actualOutput: err.message,
                        passed: false,
                        error: true
                    });
                }
            }

            console.log('[JudgeService] All test cases completed, passed:', results.filter(r => r.passed).length);
            return { results };

        } catch (error) {
            console.error('[JudgeService] Execution error:', error);
            return { error: error.message };
        } finally {
            console.log('[JudgeService] Cleaning up:', runDir);
            this.cleanup(runDir);
        }
    }

    static findProblem(problemId) {
        for (const company of dsaData.companies) {
            for (const assessment of company.assessments) {
                for (const problem of assessment.problems) {
                    if (problem.id === problemId) return problem;
                }
            }
        }
        return null;
    }

    static prepareCode(language, userCode, driverCode) {
        if (language === 'java') {
            return `${userCode}\n\n${driverCode}`;
        }
        return `${userCode}\n${driverCode}`;
    }

    static getFilename(language) {
        switch (language) {
            case 'javascript': return 'solution.cjs';
            case 'python': return 'solution.py';
            case 'cpp': return 'solution.cpp';
            case 'java': return 'Main.java';
            default: throw new Error('Unsupported language');
        }
    }

    static async compileCode(language, filePath) {
        const dir = path.dirname(filePath);
        if (language === 'cpp') {
            const outPath = filePath.replace('.cpp', process.platform === 'win32' ? '.exe' : '.out');
            await execAsync(`g++ "${filePath}" -o "${outPath}"`, { cwd: dir });
        } else if (language === 'java') {
            await execAsync(`javac "${filePath}"`, { cwd: dir });
        }
    }

    static async executeTestCase(language, filePath, input) {
        let command;
        const timeout = 2000;
        const dir = path.dirname(filePath);

        switch (language) {
            case 'javascript':
                command = `node "${filePath}"`;
                break;
            case 'python':
                command = `python "${filePath}"`;
                break;
            case 'cpp':
                const exePath = filePath.replace('.cpp', process.platform === 'win32' ? '.exe' : '.out');
                command = `"${exePath}"`;
                break;
            case 'java':
                command = `java -cp "${dir}" Main`;
                break;
        }

        return new Promise((resolve, reject) => {
            const child = exec(command, { timeout, cwd: dir }, (error, stdout, stderr) => {
                if (error) {
                    if (error.killed) {
                        reject(new Error('Time Limit Exceeded'));
                    } else {
                        reject(new Error(stderr || error.message));
                    }
                    return;
                }
                resolve(stdout.trim());
            });

            if (child.stdin) {
                child.stdin.write(input);
                child.stdin.end();
            }
        });
    }

    static compareOutput(actual, expected) {
        const cleanActual = actual.replace(/\r\n/g, '\n').trim();
        const cleanExpected = expected.replace(/\r\n/g, '\n').trim();
        return cleanActual === cleanExpected;
    }

    static cleanup(dirPath) {
        try {
            if (fs.existsSync(dirPath)) {
                fs.rmSync(dirPath, { recursive: true, force: true });
            }
        } catch (err) {
            console.error('[JudgeService] Cleanup error:', err);
        }
    }
}

export default JudgeService;
