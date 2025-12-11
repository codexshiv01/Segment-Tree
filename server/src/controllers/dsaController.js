import { dsaData } from '../data/dsaData.js';
import JudgeService from '../services/judgeService.js';

export const getCompanies = (req, res) => {
    try {
        const companies = dsaData.companies.map(c => ({
            id: c.id,
            name: c.name,
            logo: c.logo,
            description: c.description,
            assessmentCount: c.assessments.length,
            assessments: c.assessments.map(a => ({
                id: a.id,
                title: a.title,
                duration: a.duration,
                problems: a.problems.map(p => ({
                    id: p.id,
                    title: p.title,
                    difficulty: p.difficulty
                }))
            }))
        }));
        res.json({ companies });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
};

export const getAssessment = (req, res) => {
    try {
        const { id } = req.params;
        let foundAssessment = null;

        for (const company of dsaData.companies) {
            const assessment = company.assessments.find(a => a.id === id);
            if (assessment) {
                foundAssessment = assessment;
                break;
            }
        }

        if (!foundAssessment) {
            return res.status(404).json({ error: 'Assessment not found' });
        }

        // Sanitize problems (remove testCases and driverCode)
        const sanitizedProblems = foundAssessment.problems.map(p => ({
            id: p.id,
            title: p.title,
            difficulty: p.difficulty,
            description: p.description,
            examples: p.examples,
            starterCode: p.starterCode
        }));

        res.json({
            assessment: {
                id: foundAssessment.id,
                title: foundAssessment.title,
                duration: foundAssessment.duration,
                problems: sanitizedProblems
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch assessment' });
    }
};

export const runCode = async (req, res) => {
    try {
        const { language, code, problemId } = req.body;

        if (!language || !code || !problemId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await JudgeService.runCode({ language, code, problemId });
        res.json(result);
    } catch (error) {
        console.error('Run code error:', error);
        res.status(500).json({ error: 'Server error running code' });
    }
};
