import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Award, TrendingUp, Shield, Zap, CheckCircle, AlertCircle, Lightbulb, Layers } from 'lucide-react';

const HldFeedback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const feedback = location.state?.feedback;
    const problemSlug = location.state?.problemSlug;

    if (!feedback) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">No Feedback Available</h2>
                    <Link to="/hld" className="text-primary hover:underline">
                        Back to Problems
                    </Link>
                </div>
            </div>
        );
    }

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreBg = (score) => {
        if (score >= 80) return 'bg-green-50 border-green-200';
        if (score >= 60) return 'bg-yellow-50 border-yellow-200';
        return 'bg-red-50 border-red-200';
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                    >
                        <ChevronLeft size={20} />
                        <span className="font-medium">Back to Workspace</span>
                    </button>
                    <h1 className="text-xl font-bold text-slate-900">AI Design Evaluation</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Overall Score Card */}
                <div className={`rounded-2xl border-2 p-8 mb-8 ${getScoreBg(feedback.score)}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Award className={getScoreColor(feedback.score)} size={32} />
                                <h2 className="text-3xl font-bold text-slate-900">Overall Score</h2>
                            </div>
                            <p className="text-slate-600 text-lg max-w-3xl">{feedback.summary}</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-6xl font-black ${getScoreColor(feedback.score)}`}>
                                {feedback.score}
                            </div>
                            <div className="text-sm text-slate-500 font-medium mt-1">out of 100</div>
                        </div>
                    </div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <TrendingUp className="text-blue-600" size={24} />
                            <h3 className="font-bold text-slate-900">Scalability</h3>
                        </div>
                        <div className="text-4xl font-black text-blue-600 mb-2">{feedback.scalability_score}</div>
                        <div className="text-sm text-slate-500">How well it scales</div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <Shield className="text-green-600" size={24} />
                            <h3 className="font-bold text-slate-900">Reliability</h3>
                        </div>
                        <div className="text-4xl font-black text-green-600 mb-2">{feedback.reliability_score}</div>
                        <div className="text-sm text-slate-500">Fault tolerance & uptime</div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <Zap className="text-yellow-600" size={24} />
                            <h3 className="font-bold text-slate-900">Performance</h3>
                        </div>
                        <div className="text-4xl font-black text-yellow-600 mb-2">{feedback.performance_score}</div>
                        <div className="text-sm text-slate-500">Speed & efficiency</div>
                    </div>
                </div>

                {/* Detailed Analysis */}
                {feedback.detailed_analysis && (
                    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Layers className="text-primary" size={28} />
                            Detailed Analysis
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
                            {feedback.detailed_analysis}
                        </div>
                    </div>
                )}

                {/* Key Concepts Section - NEW */}
                {feedback.key_concepts && feedback.key_concepts.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="text-amber-500" size={24} />
                            <h2 className="text-2xl font-bold text-slate-900">Key Concepts to Learn</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {feedback.key_concepts.map((item, index) => (
                                <div key={index} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                    <h4 className="font-bold text-amber-800 mb-2">{item.concept}</h4>
                                    <p className="text-slate-700 text-sm leading-relaxed">{item.explanation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Strengths */}
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={28} />
                        Strengths
                    </h2>
                    <div className="space-y-4">
                        {(feedback.strengths || []).map((strength, idx) => (
                            <div key={idx} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                {typeof strength === 'string' ? (
                                    <p className="text-slate-700">{strength}</p>
                                ) : (
                                    <>
                                        <h3 className="font-bold text-green-900 mb-1">{strength.point}</h3>
                                        <p className="text-slate-700">{strength.explanation}</p>
                                    </>
                                )}
                            </div>
                        ))}
                        {(!feedback.strengths || feedback.strengths.length === 0) && (
                            <p className="text-slate-500 italic">No specific strengths identified.</p>
                        )}
                    </div>
                </div>

                {/* Weaknesses */}
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <AlertCircle className="text-orange-600" size={28} />
                        Areas for Improvement
                    </h2>
                    <div className="space-y-4">
                        {(feedback.weaknesses || []).map((weakness, idx) => (
                            <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                {typeof weakness === 'string' ? (
                                    <p className="text-slate-700">{weakness}</p>
                                ) : (
                                    <>
                                        <h3 className="font-bold text-orange-900 mb-1">{weakness.point}</h3>
                                        <p className="text-slate-700">{weakness.explanation}</p>
                                    </>
                                )}
                            </div>
                        ))}
                        {(!feedback.weaknesses || feedback.weaknesses.length === 0) && (
                            <p className="text-slate-500 italic">No specific areas for improvement identified.</p>
                        )}
                    </div>
                </div>

                {/* Suggestions */}
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Lightbulb className="text-blue-600" size={28} />
                        Recommendations
                    </h2>
                    <div className="space-y-6">
                        {(feedback.suggestions || []).map((suggestion, idx) => (
                            <div key={idx} className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                {typeof suggestion === 'string' ? (
                                    <p className="text-slate-700">{suggestion}</p>
                                ) : (
                                    <>
                                        <h3 className="font-bold text-blue-900 mb-2 text-lg">{suggestion.recommendation}</h3>
                                        <p className="text-slate-700 mb-2"><strong>Why:</strong> {suggestion.rationale}</p>
                                        {suggestion.example && (
                                            <div className="bg-white p-3 rounded border border-blue-200 mt-3">
                                                <p className="text-sm text-slate-600"><strong>Example:</strong> {suggestion.example}</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        {(!feedback.suggestions || feedback.suggestions.length === 0) && (
                            <p className="text-slate-500 italic">No specific recommendations provided.</p>
                        )}
                    </div>
                </div>

                {/* Component Analysis */}
                {feedback.component_analysis && feedback.component_analysis.length > 0 && (
                    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Component Analysis</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {feedback.component_analysis.map((comp, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2">{comp.component}</h3>
                                    <p className="text-sm text-slate-600">{comp.assessment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Missing Components */}
                {feedback.missing_components && feedback.missing_components.length > 0 && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
                        <h2 className="text-xl font-bold text-red-900 mb-4">Missing Critical Components</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {feedback.missing_components.map((comp, idx) => (
                                <li key={idx} className="text-red-800">{comp}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Calculation Feedback */}
                {feedback.calculation_feedback && (
                    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Calculation Assessment</h2>
                        <p className="text-slate-700 leading-relaxed">{feedback.calculation_feedback}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HldFeedback;
