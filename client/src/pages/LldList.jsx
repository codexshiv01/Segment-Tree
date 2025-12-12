import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, Search, Filter, X } from 'lucide-react';
import { lldProblems } from '../data/lldProblems';
import Navbar from '../components/Navbar';

const LldList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    const companies = useMemo(() => {
        const allCompanies = lldProblems.flatMap(p => p.companies || []);
        return [...new Set(allCompanies)].sort();
    }, []);

    const filteredProblems = useMemo(() => {
        return lldProblems.filter(problem => {
            const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCompany = selectedCompany ? problem.companies?.includes(selectedCompany) : true;
            const matchesDifficulty = selectedDifficulty ? problem.difficulty === selectedDifficulty : true;
            return matchesSearch && matchesCompany && matchesDifficulty;
        });
    }, [searchQuery, selectedCompany, selectedDifficulty]);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'Medium': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'Hard': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
            default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        Low-Level Design Problems
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Practice Object-Oriented Design with our interactive workspace and get AI-powered feedback.
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all text-slate-200 placeholder:text-slate-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        {/* Difficulty Filter */}
                        <div className="relative w-full md:w-40">
                            <select
                                className="w-full pl-4 pr-8 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none appearance-none cursor-pointer transition-all text-slate-300"
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="">Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Company Filter */}
                        {companies.length > 0 && (
                            <div className="relative w-full md:w-64">
                                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                                <select
                                    className="w-full pl-10 pr-8 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none appearance-none cursor-pointer transition-all text-slate-300"
                                    value={selectedCompany}
                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                >
                                    <option value="">All Companies</option>
                                    {companies.map(company => (
                                        <option key={company} value={company}>{company}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {(searchQuery || selectedCompany || selectedDifficulty) && (
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCompany(''); setSelectedDifficulty(''); }}
                                className="p-2.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                                title="Clear filters"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {filteredProblems.length === 0 ? (
                    <div className="text-center py-20 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-white/5 border-dashed">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                            <Search className="text-slate-500" size={32} />
                        </div>
                        <h3 className="text-lg font-medium text-slate-300 mb-1">No problems found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCompany(''); setSelectedDifficulty(''); }}
                            className="mt-4 text-blue-400 font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProblems.map((problem) => (
                            <Link
                                key={problem.id}
                                to={`/lld/${problem.id}`}
                                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(problem.difficulty)}`}>
                                            {problem.difficulty}
                                        </div>
                                        <Code className="text-slate-600 group-hover:text-blue-400 transition-colors" size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {problem.title}
                                    </h3>

                                    {problem.companies && problem.companies.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4 items-center">
                                            {problem.companies.slice(0, 4).map((company, index) => (
                                                <span key={index} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-medium rounded border border-blue-500/20">
                                                    {company}
                                                </span>
                                            ))}
                                            {problem.companies.length > 4 && (
                                                <span className="text-[10px] text-slate-500">+{problem.companies.length - 4}</span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="px-6 py-4 bg-slate-800/30 border-t border-white/5 flex justify-between items-center group-hover:bg-blue-500/10 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 group-hover:text-blue-400">Start Designing</span>
                                    <ArrowRight size={18} className="text-slate-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LldList;
