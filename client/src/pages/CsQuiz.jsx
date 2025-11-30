import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { csFundamentalsData } from '../data/csFundamentalsData';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, ChevronRight } from 'lucide-react';

const CsQuiz = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();
    const [topicData, setTopicData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

    useEffect(() => {
        const topic = csFundamentalsData.find(t => t.id === topicId);
        if (topic) {
            setTopicData(topic);
        } else {
            navigate('/cs-fundamentals');
        }
    }, [topicId, navigate]);

    useEffect(() => {
        if (showResults || !topicData) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setShowResults(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [showResults, topicData]);

    if (!topicData) return null;

    const currentQuestion = topicData.questions[currentQuestionIndex];
    const totalQuestions = topicData.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (optionIndex) => {
        if (showResults) return;
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRetake = () => {
        setSelectedAnswers({});
        setShowResults(false);
        setCurrentQuestionIndex(0);
        setTimeLeft(600); // Reset timer
    };

    const calculateScore = () => {
        let correct = 0;
        topicData.questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    if (showResults) {
        const score = calculateScore();
        const percentage = Math.round((score / totalQuestions) * 100);

        return (
            <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="p-8 text-center border-b border-slate-100">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Results</h2>
                            <p className="text-slate-600">You scored {score} out of {totalQuestions}</p>

                            <div className="mt-8 relative inline-flex items-center justify-center">
                                <svg className="w-32 h-32 transform -rotate-90">
                                    <circle
                                        className="text-slate-100"
                                        strokeWidth="8"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="58"
                                        cx="64"
                                        cy="64"
                                    />
                                    <circle
                                        className={percentage >= 70 ? "text-green-500" : percentage >= 40 ? "text-yellow-500" : "text-red-500"}
                                        strokeWidth="8"
                                        strokeDasharray={365}
                                        strokeDashoffset={365 - (365 * percentage) / 100}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="58"
                                        cx="64"
                                        cy="64"
                                    />
                                </svg>
                                <span className="absolute text-3xl font-bold text-slate-800">{percentage}%</span>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50 space-y-8">
                            {topicData.questions.map((q, index) => {
                                const userAnswer = selectedAnswers[index];
                                const isCorrect = userAnswer === q.correctAnswer;

                                return (
                                    <div key={q.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex items-start space-x-3 mb-4">
                                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-sm">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-lg font-medium text-slate-900 pt-1">{q.question}</h3>
                                        </div>

                                        <div className="space-y-3 ml-11">
                                            {q.options.map((option, optIndex) => {
                                                let optionClass = "p-3 rounded-lg border text-sm font-medium flex justify-between items-center ";

                                                if (optIndex === q.correctAnswer) {
                                                    optionClass += "bg-green-50 border-green-200 text-green-700";
                                                } else if (optIndex === userAnswer && !isCorrect) {
                                                    optionClass += "bg-red-50 border-red-200 text-red-700";
                                                } else {
                                                    optionClass += "bg-white border-slate-200 text-slate-500 opacity-60";
                                                }

                                                return (
                                                    <div key={optIndex} className={optionClass}>
                                                        <span>{option}</span>
                                                        {optIndex === q.correctAnswer && <CheckCircle size={18} />}
                                                        {optIndex === userAnswer && !isCorrect && <XCircle size={18} />}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-4 ml-11 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                            <p className="text-sm text-blue-800">
                                                <span className="font-bold">Explanation:</span> {q.explanation}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="p-6 border-t border-slate-100 bg-white flex justify-between items-center sticky bottom-0">
                            <Link
                                to="/cs-fundamentals"
                                className="flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Topics
                            </Link>
                            <button
                                onClick={handleRetake}
                                className="flex items-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                <RefreshCw size={20} className="mr-2" />
                                Retake Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        to="/cs-fundamentals"
                        className="flex items-center text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className={`text-lg font-mono font-bold ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
                            {formatTime(timeLeft)}
                        </div>
                        <div className="text-sm font-medium text-slate-500">
                            Question {currentQuestionIndex + 1} of {totalQuestions}
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-snug">
                            {currentQuestion.question}
                        </h2>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${selectedAnswers[currentQuestionIndex] === index
                                            ? 'border-primary bg-primary/5 text-primary font-medium shadow-md'
                                            : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50 text-slate-600'
                                        }`}
                                >
                                    <span>{option}</span>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAnswers[currentQuestionIndex] === index
                                            ? 'border-primary bg-primary'
                                            : 'border-slate-300 group-hover:border-primary/50'
                                        }`}>
                                        {selectedAnswers[currentQuestionIndex] === index && (
                                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                        <button
                            onClick={handleNext}
                            disabled={selectedAnswers[currentQuestionIndex] === undefined}
                            className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all duration-200 ${selectedAnswers[currentQuestionIndex] !== undefined
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                        >
                            {currentQuestionIndex === totalQuestions - 1 ? 'Submit Quiz' : 'Next Question'}
                            <ChevronRight size={20} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CsQuiz;
