import React from 'react';
import { Link } from 'react-router-dom';
import { csFundamentalsData } from '../data/csFundamentalsData';
import { ArrowRight, BookOpen, Trophy } from 'lucide-react';
import Navbar from '../components/Navbar';

const CsFundamentals = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                            CS Fundamentals
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Master the core concepts of Computer Science through interactive quizzes.
                            Test your knowledge in Networks, OS, and Databases.
                        </p>
                    </div>

                    {/* Stats / Info Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Topics</p>
                                <p className="text-2xl font-bold text-slate-800">{csFundamentalsData.length}</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                                <Trophy size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Total Questions</p>
                                <p className="text-2xl font-bold text-slate-800">
                                    {csFundamentalsData.reduce((acc, topic) => acc + topic.questions.length, 0)}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                                <ArrowRight size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Ready to Start?</p>
                                <p className="text-lg font-bold text-slate-800">Select a Topic</p>
                            </div>
                        </div>
                    </div>

                    {/* Topic Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {csFundamentalsData.map((topic) => (
                            <div
                                key={topic.id}
                                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="p-8">
                                    <div className="text-4xl mb-6">{topic.icon}</div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {topic.title}
                                    </h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        {topic.description}
                                    </p>

                                    {topic.questions.length > 0 ? (
                                        <Link
                                            to={`/cs-fundamentals/${topic.id}`}
                                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200 group"
                                        >
                                            Start Quiz
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed"
                                        >
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                                    <span>{topic.questions.length} Questions</span>
                                    <span>Multiple Choice</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CsFundamentals;
