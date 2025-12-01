import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, Send, ChevronLeft, Clock, CheckCircle, XCircle, AlertCircle, Terminal, FileText, Camera, Maximize } from 'lucide-react';
import APIService from '../services/api';
import { useAuth } from '../context/AuthContext';
import AssessmentInstructions from '../components/AssessmentInstructions';

const AssessmentWorkspace = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [assessment, setAssessment] = useState(null);
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [language, setLanguage] = useState('cpp');
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
    const [activeTestCase, setActiveTestCase] = useState(0);

    useEffect(() => {
        if (testResults) {
            setActiveTestCase(0);
        }
    }, [testResults]);

    // New State for Real OA Experience
    const [hasStarted, setHasStarted] = useState(false);
    const [stream, setStream] = useState(null);
    const [cameraError, setCameraError] = useState(null);
    const videoRef = useRef(null);

    // Timer states
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        loadAssessment();
    }, [id]);

    // Timer effect
    useEffect(() => {
        if (assessment && hasStarted && !startTime) {
            setStartTime(Date.now());
            setTimeRemaining(assessment.duration * 60);
        }
    }, [assessment, hasStarted, startTime]);

    useEffect(() => {
        if (!hasStarted || !startTime || !assessment) return;

        const totalDuration = assessment.duration * 60;

        // Initial update
        const initialElapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeRemaining(Math.max(0, totalDuration - initialElapsed));

        const timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const remaining = totalDuration - elapsed;

            if (remaining <= 0) {
                setTimeRemaining(0);
                clearInterval(timer);
                handleAutoSubmit();
            } else {
                setTimeRemaining(remaining);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [hasStarted, startTime, assessment]);

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

    const enableCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(mediaStream);
            setCameraError(null);
        } catch (err) {
            console.error("Camera access denied:", err);
            setCameraError("Camera access is required. Please enable permissions.");
        }
    };

    const handleStartAssessment = () => {
        if (!stream) {
            setCameraError("Please enable camera first.");
            return;
        }

        // Request Full Screen
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }

        setHasStarted(true);
    };

    // Cleanup camera on unmount
    useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [stream]);

    // Attach stream to video element when hasStarted becomes true
    useEffect(() => {
        if (hasStarted && videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [hasStarted, stream]);

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
        setIsConsoleOpen(true); // Open console on run

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
        // Exit Full Screen
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error("Error exiting full screen:", err));
        }

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

    // Console state
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const [consoleTab, setConsoleTab] = useState('results'); // 'results', 'output'

    const toggleConsole = () => setIsConsoleOpen(!isConsoleOpen);

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

    if (!hasStarted) {
        return (
            <AssessmentInstructions
                assessment={assessment}
                onStart={handleStartAssessment}
                onEnableCamera={enableCamera}
                stream={stream}
                cameraError={cameraError}
            />
        );
    }

    return (
        <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
            {/* Dark Header */}
            <header className="relative h-14 bg-slate-900 text-white flex items-center justify-between px-4 shadow-md z-20">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                            {assessment.title.charAt(0)}
                        </div>
                        <div>
                            <h1 className="font-bold text-sm leading-tight">{assessment.title}</h1>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <span>{submittedProblems.size}/{assessment.problems.length} Solved</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Central Timer */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 ${timeRemaining < 300 ? 'border-red-500/50' : ''}`}>
                        <Clock size={14} className={timeRemaining < 60 ? 'text-red-500 animate-pulse' : 'text-slate-400'} />
                        <span className={`font-mono font-bold text-lg ${timeRemaining < 60 ? 'text-red-500' : 'text-slate-200'}`}>
                            {formatTime(timeRemaining)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleSubmitAssessment}
                        className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
                    >
                        <span>Finish Assessment</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel - Problem Description */}
                <div className="w-[40%] flex flex-col bg-white border-r border-slate-200 z-10">
                    {/* Problem Navigation Tabs */}
                    <div className="flex overflow-x-auto border-b border-slate-200 scrollbar-hide">
                        {assessment.problems.map((prob, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentProblemIndex(idx)}
                                className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${currentProblemIndex === idx
                                    ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                <span>Problem {idx + 1}</span>
                                {submittedProblems.has(prob.id) && (
                                    <CheckCircle size={14} className="text-green-600" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{currentProblem.title}</h2>

                            <div className="prose prose-slate max-w-none mb-8">
                                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-sans text-base">
                                    {currentProblem.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {currentProblem.examples.map((example, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                        <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Example {idx + 1}
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div>
                                                <div className="text-xs font-semibold text-slate-500 mb-1">Input:</div>
                                                <code className="block bg-white p-2.5 rounded-lg border border-slate-200 text-sm font-mono text-slate-800">
                                                    {example.input}
                                                </code>
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-slate-500 mb-1">Output:</div>
                                                <code className="block bg-white p-2.5 rounded-lg border border-slate-200 text-sm font-mono text-slate-800">
                                                    {example.output}
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Editor & Console */}
                <div className="w-[60%] flex flex-col bg-slate-50 relative">
                    {/* Editor Toolbar */}
                    <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="appearance-none pl-3 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:bg-slate-100"
                                >
                                    <option value="cpp">C++</option>
                                    <option value="java">Java</option>
                                    <option value="python">Python</option>
                                </select>
                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleRunCode}
                                disabled={isRunning}
                                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                                {isRunning ? <div className="w-3 h-3 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" /> : <Play size={14} />}
                                Run
                            </button>
                            <button
                                onClick={handleSubmitProblem}
                                disabled={submittedProblems.has(currentProblem.id)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm ${submittedProblems.has(currentProblem.id)
                                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                            >
                                {submittedProblems.has(currentProblem.id) ? (
                                    <>
                                        <CheckCircle size={14} />
                                        Submitted
                                    </>
                                ) : (
                                    <>
                                        <span>Submit</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 relative pb-10">
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
                                padding: { top: 20, bottom: 20 },
                                lineNumbers: 'on',
                                folding: true,
                                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                fontLigatures: true,
                            }}
                        />
                    </div>

                    {/* Console Panel (Collapsible) */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex flex-col transition-all duration-300 ease-in-out z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] ${isConsoleOpen ? 'h-[40%]' : 'h-10'}`}>
                        {/* Console Header */}
                        <div
                            className="h-10 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                            onClick={toggleConsole}
                        >
                            <div className="flex items-center gap-4 h-full">
                                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                    <Terminal size={14} />
                                    <span>Console</span>
                                </div>
                                {isConsoleOpen && (
                                    <div className="flex h-full" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => setConsoleTab('results')}
                                            className={`px-3 h-full text-xs font-medium border-b-2 transition-colors ${consoleTab === 'results' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                                        >
                                            Test Results
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="text-slate-400">
                                {isConsoleOpen ? <Maximize size={14} className="rotate-180" /> : <Maximize size={14} />}
                            </div>
                        </div>

                        {/* Console Content */}
                        {isConsoleOpen && (
                            <div className="flex-1 overflow-y-auto p-0 bg-white">
                                {isRunning ? (
                                    <div className="flex flex-col items-center justify-center h-full text-slate-500">
                                        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
                                        <span className="text-sm font-medium">Running your code...</span>
                                    </div>
                                ) : error ? (
                                    <div className="p-4">
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800 font-mono whitespace-pre-wrap">
                                            {error}
                                        </div>
                                    </div>
                                ) : testResults ? (
                                    <div className="flex h-full">
                                        {/* Test Case List */}
                                        <div className="w-48 border-r border-slate-200 bg-slate-50 overflow-y-auto">
                                            {testResults.results.map((result, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveTestCase(idx)}
                                                    className={`w-full text-left px-4 py-3 border-b border-slate-100 text-sm font-medium transition-colors flex items-center justify-between hover:bg-white ${activeTestCase === idx ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                                                        } ${result.passed ? 'text-green-700' : 'text-red-700'
                                                        }`}
                                                >
                                                    <span>Case {idx + 1}</span>
                                                    {result.passed ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                                </button>
                                            ))}
                                        </div>
                                        {/* Test Case Details */}
                                        <div className="flex-1 p-6 overflow-y-auto">
                                            {(() => {
                                                const result = testResults.results[activeTestCase];
                                                if (!result) return null;

                                                const isHidden = activeTestCase >= 2 && !result.passed;

                                                return (
                                                    <div className="animate-fadeIn">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <span className={`text-base font-bold ${result.passed ? 'text-green-700' : 'text-red-700'}`}>
                                                                Test Case {activeTestCase + 1}
                                                            </span>
                                                            <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase ${result.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                                }`}>
                                                                {result.passed ? 'Passed' : 'Failed'}
                                                            </span>
                                                        </div>

                                                        {!isHidden ? (
                                                            <div className="space-y-6">
                                                                <div className="grid grid-cols-2 gap-6">
                                                                    <div>
                                                                        <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Input</div>
                                                                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 break-all">
                                                                            {result.input}
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Expected Output</div>
                                                                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 break-all">
                                                                            {result.expectedOutput}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {!result.passed && (
                                                                    <div>
                                                                        <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Your Output</div>
                                                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200 font-mono text-sm text-red-800 break-all">
                                                                            {result.actualOutput}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className="flex flex-col items-center justify-center py-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
                                                                <AlertCircle size={32} className="text-slate-400 mb-3" />
                                                                <h3 className="text-slate-900 font-semibold mb-1">Hidden Test Case</h3>
                                                                <p className="text-slate-500 text-sm">Details are not available for this test case.</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-400">
                                        <Terminal size={32} className="mb-2 opacity-20" />
                                        <p className="text-sm">Run code to see results</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showSubmitProblemModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl transform transition-all scale-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Solution?</h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            Submit <strong>{currentProblem.title}</strong>? You can resubmit later.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowSubmitProblemModal(false)}
                                className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmSubmitProblem}
                                className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-sm transition-colors text-sm"
                            >
                                Confirm Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSubmitModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Finish Assessment?</h3>
                        <p className="text-slate-600 mb-4 text-sm">
                            Are you sure you want to end the test? This action cannot be undone.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3 mb-6 space-y-2 border border-slate-100">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Solved</span>
                                <span className="font-semibold text-slate-900">{submittedProblems.size} / {assessment.problems.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Time Left</span>
                                <span className="font-semibold text-slate-900">{formatTime(timeRemaining)}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowSubmitModal(false)}
                                className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm"
                            >
                                Keep Working
                            </button>
                            <button
                                onClick={() => confirmSubmit(false)}
                                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-sm transition-colors text-sm"
                            >
                                End Test
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Camera Feed */}
            <div className="fixed bottom-4 right-4 w-48 aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-2xl z-50 group transition-transform hover:scale-105">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover transform scale-x-[-1]"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-white tracking-wide">REC</span>
                </div>
            </div>
        </div>
    );
};

export default AssessmentWorkspace;
