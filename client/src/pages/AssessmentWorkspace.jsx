import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, Send, ChevronLeft, Clock, CheckCircle, XCircle, AlertCircle, Terminal, FileText } from 'lucide-react';
import APIService from '../services/api';
import { useAuth } from '../context/AuthContext';

const AssessmentWorkspace = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [assessment, setAssessment] = useState(null);
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [language, setLanguage] = useState('javascript');
    const [code, setCode] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [testResults, setTestResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('description');
    const [showResults, setShowResults] = useState(false);
    const [codeMap, setCodeMap] = useState({});
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [submittedProblems, setSubmittedProblems] = useState(new Set());
    const [showSubmitProblemModal, setShowSubmitProblemModal] = useState(false);

    // Timer states
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        loadAssessment();
    }, [id]);

    // Timer effect
    useEffect(() => {
        if (assessment && !startTime) {
            setStartTime(Date.now());
            setTimeRemaining(assessment.duration * 60);
        }

        if (timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        handleAutoSubmit();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [assessment, timeRemaining]);

    useEffect(() => {
        if (assessment) {
            const problem = assessment.problems[currentProblemIndex];
            const savedCode = codeMap[`${problem.id}-${language}`];
            if (savedCode) {
                setCode(savedCode);
            } else {
                setCode(problem.starterCode[language] || '');
            }
            setTestResults(null);
            setError(null);
            setShowResults(false);
        }
    }, [currentProblemIndex, language, assessment]);

    const loadAssessment = async () => {
        try {
            const data = await APIService.getDsaAssessment(id);
            if (data.assessment) {
                setAssessment(data.assessment);
                const initialMap = {};
                data.assessment.problems.forEach(p => {
                    Object.keys(p.starterCode).forEach(lang => {
                        initialMap[`${p.id}-${lang}`] = p.starterCode[lang];
                    });
                });
                setCodeMap(initialMap);
            }
        } catch (error) {
            console.error('Failed to load assessment:', error);
            setError('Failed to load assessment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCodeChange = (value) => {
        setCode(value);
        const problem = assessment.problems[currentProblemIndex];
        setCodeMap(prev => ({
            ...prev,
            [`${problem.id}-${language}`]: value
        }));
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setTestResults(null);
        setError(null);
        setShowResults(true);

        const problem = assessment.problems[currentProblemIndex];

        try {
            const result = await APIService.runDsaCode(localStorage.getItem('token'), {
                language,
                code,
                problemId: problem.id
            });

            if (result.error) {
                setError(result.error);
            } else {
                setTestResults(result);
            }
        } catch (error) {
            console.error('Run code error:', error);
            setError('Failed to run code. Please check your connection and try again.');
        } finally {
            setIsRunning(false);
        }
    };

    const handleSubmitProblem = () => {
        setShowSubmitProblemModal(true);
    };

    const confirmSubmitProblem = () => {
        const problem = assessment.problems[currentProblemIndex];
        setSubmittedProblems(prev => new Set([...prev, problem.id]));
        setShowSubmitProblemModal(false);

        // Move to next problem if available
        if (currentProblemIndex < assessment.problems.length - 1) {
            setCurrentProblemIndex(currentProblemIndex + 1);
        }
    };

    const handleSubmitAssessment = () => {
        setShowSubmitModal(true);
    };

    const handleAutoSubmit = () => {
        confirmSubmit(true);
    };

    const confirmSubmit = (isAutoSubmit = false) => {
        const timeTaken = Math.floor((Date.now() - startTime) / 1000);
        const submissionData = {
            assessmentId: id,
            assessmentTitle: assessment.title,
            totalProblems: assessment.problems.length,
            solvedProblems: submittedProblems.size,
            timeTaken,
            totalTime: assessment.duration * 60,
            isAutoSubmit,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('lastSubmission', JSON.stringify(submissionData));
        setShowSubmitModal(false);
        navigate('/assessment-submitted');
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getTimerColor = () => {
        if (timeRemaining > 300) return 'text-slate-700';
        if (timeRemaining > 60) return 'text-yellow-600';
        return 'text-red-600 animate-pulse';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading assessment...</p>
                </div>
            </div>
        );
    }

    if (!assessment) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <p className="text-slate-800 text-lg font-semibold">Assessment not found</p>
                    <button onClick={() => navigate('/dsa')} className="mt-4 text-blue-600 hover:underline">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const currentProblem = assessment.problems[currentProblemIndex];
    const passedCount = testResults?.results?.filter(r => r.passed).length || 0;
    const totalCount = testResults?.results?.length || 0;

    return (
        <div className="h-screen flex flex-col bg-white">
            {/* Header */}
            <header className="h-14 bg-white border-b-2 border-slate-200 flex items-center justify-between px-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/dsa')}
                        className="text-slate-600 hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <div>
                        <h1 className="font-bold text-slate-900">{assessment.title}</h1>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <Clock size={12} />
                            <span className={`font-semibold ${getTimerColor()}`}>
                                {formatTime(timeRemaining)} remaining
                            </span>
                            <span className="text-slate-400">|</span>
                            <span className="text-green-600 font-semibold">
                                {submittedProblems.size}/{assessment.problems.length} solved
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Problem Navigation */}
                    <div className="flex gap-2">
                        {assessment.problems.map((prob, idx) => {
                            const isSubmitted = submittedProblems.has(prob.id);
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentProblemIndex(idx)}
                                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all shadow-sm relative ${currentProblemIndex === idx
                                        ? isSubmitted
                                            ? 'bg-green-600 text-white shadow-green-200 ring-2 ring-green-400'
                                            : 'bg-blue-600 text-white shadow-blue-200'
                                        : isSubmitted
                                            ? 'bg-green-100 text-green-700 border-2 border-green-300'
                                            : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
                                        }`}
                                >
                                    {idx + 1}
                                    {isSubmitted && (
                                        <CheckCircle
                                            size={12}
                                            className="absolute -top-1 -right-1 bg-white rounded-full text-green-600"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Submit Assessment Button */}
                    <button
                        onClick={handleSubmitAssessment}
                        className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        Submit Assessment
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel - Problem Description */}
                <div className="w-[45%] flex flex-col bg-slate-50 border-r-2 border-slate-200">
                    <div className="bg-white border-b border-slate-200">
                        <div className="flex gap-1 px-4 pt-3">
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${activeTab === 'description'
                                    ? 'bg-slate-50 text-blue-600 border-t-2 border-x-2 border-blue-600'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                <FileText size={16} className="inline mr-1.5" />
                                Description
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="max-w-3xl">
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <h2 className="text-2xl font-bold text-slate-900">{currentProblem.title}</h2>
                                    {submittedProblems.has(currentProblem.id) && (
                                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-300">
                                            <CheckCircle size={14} />
                                            Submitted
                                        </span>
                                    )}
                                </div>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{currentProblem.description}</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h3 className="text-lg font-semibold text-slate-900">Examples:</h3>
                                {currentProblem.examples.map((example, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-5 border-2 border-slate-200 shadow-sm">
                                        <h4 className="font-semibold text-slate-900 mb-3">Example {idx + 1}</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="text-xs font-semibold text-slate-500 uppercase mb-1.5">Input:</div>
                                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                    <code className="text-sm text-slate-800 font-mono">{example.input}</code>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-slate-500 uppercase mb-1.5">Output:</div>
                                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                    <code className="text-sm text-slate-800 font-mono">{example.output}</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                </div >

                {/* Right Panel - Code Editor */}
                < div className="w-[55%] flex flex-col bg-white" >
                    <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="px-3 py-1.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="cpp">C++</option>
                            <option value="java">Java</option>
                        </select>

                        <div className="flex gap-2">
                            <button
                                onClick={handleRunCode}
                                disabled={isRunning}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg text-sm font-semibold shadow-md transition-all disabled:cursor-not-allowed"
                            >
                                {isRunning ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Running...
                                    </>
                                ) : (
                                    <>
                                        <Play size={16} />
                                        Run Code
                                    </>
                                )}
                            </button>

                            <button
                                onClick={handleSubmitProblem}
                                disabled={submittedProblems.has(currentProblem.id)}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white rounded-lg text-sm font-semibold shadow-md transition-all disabled:cursor-not-allowed"
                            >
                                {submittedProblems.has(currentProblem.id) ? (
                                    <>
                                        <CheckCircle size={16} />
                                        Submitted
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Submit Problem
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`${showResults ? 'h-[55%]' : 'flex-1'} bg-white`}>
                        <Editor
                            height="100%"
                            language={language === 'cpp' ? 'cpp' : language}
                            theme="light"
                            value={code}
                            onChange={handleCodeChange}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                padding: { top: 16, bottom: 16 },
                                lineNumbers: 'on',
                                folding: true,
                                scrollbar: {
                                    vertical: 'auto',
                                    horizontal: 'auto'
                                }
                            }}
                        />
                    </div>

                    {
                        showResults && (
                            <div className="h-[45%] border-t-2 border-slate-200 flex flex-col bg-slate-50">
                                <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Terminal size={18} className="text-slate-600" />
                                        <span className="font-semibold text-slate-900">Test Results</span>
                                    </div>
                                    <button
                                        onClick={() => setShowResults(false)}
                                        className="text-slate-500 hover:text-slate-700 px-2 py-1 hover:bg-slate-100 rounded"
                                    >
                                        <XCircle size={18} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4">
                                    {isRunning && (
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                                            <p className="text-slate-600 font-medium">Executing test cases...</p>
                                        </div>
                                    )}

                                    {error && !isRunning && (
                                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <XCircle size={20} className="text-red-600" />
                                                <span className="text-red-900 font-bold">Runtime Error</span>
                                            </div>
                                            <pre className="text-red-800 text-sm font-mono whitespace-pre-wrap bg-red-100 p-3 rounded-lg border border-red-200">{error}</pre>
                                        </div>
                                    )}

                                    {testResults && !isRunning && (
                                        <div className="space-y-4">
                                            <div className={`p-4 rounded-xl border-2 ${passedCount === totalCount
                                                ? 'bg-green-50 border-green-300'
                                                : 'bg-yellow-50 border-yellow-300'
                                                }`}>
                                                <div className="flex items-center gap-3">
                                                    {passedCount === totalCount ? (
                                                        <CheckCircle size={24} className="text-green-600" />
                                                    ) : (
                                                        <AlertCircle size={24} className="text-yellow-600" />
                                                    )}
                                                    <div>
                                                        <div className={`text-lg font-bold ${passedCount === totalCount ? 'text-green-900' : 'text-yellow-900'
                                                            }`}>
                                                            {passedCount === totalCount ? 'All Tests Passed!' : `${passedCount} / ${totalCount} Tests Passed`}
                                                        </div>
                                                        <div className="text-sm text-slate-600">
                                                            {passedCount === totalCount
                                                                ? 'Great job! Your solution works correctly.'
                                                                : 'Some test cases failed. Review the details below.'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {testResults.results.map((result, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`rounded-xl border-2 p-4 ${result.passed
                                                            ? 'bg-green-50 border-green-200'
                                                            : 'bg-red-50 border-red-200'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                {result.passed ? (
                                                                    <CheckCircle size={18} className="text-green-600" />
                                                                ) : (
                                                                    <XCircle size={18} className="text-red-600" />
                                                                )}
                                                                <span className={`text-sm font-bold ${result.passed ? 'text-green-900' : 'text-red-900'
                                                                    }`}>
                                                                    Test Case {idx + 1}
                                                                </span>
                                                            </div>
                                                            <span className={`text-xs font-semibold px-2 py-1 rounded ${result.passed
                                                                ? 'bg-green-200 text-green-800'
                                                                : 'bg-red-200 text-red-800'
                                                                }`}>
                                                                {result.passed ? 'PASSED' : 'FAILED'}
                                                            </span>
                                                        </div>

                                                        {!result.passed && (
                                                            <div className="space-y-2 ml-6 mt-3">
                                                                <div>
                                                                    <div className="text-xs font-semibold text-slate-600 mb-1">Input:</div>
                                                                    <div className="bg-white p-2 rounded border border-red-200 font-mono text-sm text-slate-800">
                                                                        {result.input}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xs font-semibold text-slate-600 mb-1">Your Output:</div>
                                                                    <div className="bg-white p-2 rounded border border-red-200 font-mono text-sm text-red-700">
                                                                        {result.actualOutput}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xs font-semibold text-slate-600 mb-1">Expected Output:</div>
                                                                    <div className="bg-white p-2 rounded border border-green-200 font-mono text-sm text-green-700">
                                                                        {result.expectedOutput}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    }
                </div >
            </div >

            {/* Submit Problem Modal */}
            {
                showSubmitProblemModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Problem?</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Are you sure you want to submit your solution for <strong>{currentProblem.title}</strong>?
                            </p>
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mb-6">
                                <p className="text-blue-800 text-sm font-medium">
                                    💡 You can still modify and resubmit before ending the assessment.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowSubmitProblemModal(false)}
                                    className="flex-1 px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmSubmitProblem}
                                    className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-md transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Submit Assessment Modal */}
            {
                showSubmitModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Assessment?</h3>
                            <p className="text-slate-600 mb-2 leading-relaxed">
                                Are you sure you want to submit this assessment?
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4 mb-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Problems Solved:</span>
                                    <span className="font-semibold text-green-600">{submittedProblems.size} / {assessment.problems.length}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Time Remaining:</span>
                                    <span className="font-semibold text-slate-700">{formatTime(timeRemaining)}</span>
                                </div>
                            </div>
                            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 mb-6">
                                <p className="text-yellow-800 text-sm font-medium">
                                    ⚠️ Once submitted, you won't be able to make any changes.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowSubmitModal(false)}
                                    className="flex-1 px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => confirmSubmit(false)}
                                    className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-md transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default AssessmentWorkspace;
