import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Server, ArrowRight, Search, Filter, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import APIService from '../services/api';

const HldList = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const data = await APIService.getHldProblems();
                setProblems(data);
            } catch (error) {
                console.error('Failed to fetch problems:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, []);

    const companies = useMemo(() => {
        const allCompanies = problems.flatMap(p => p.companies || []);
        return [...new Set(allCompanies)].sort();
    }, [problems]);

    const filteredProblems = useMemo(() => {
        return problems.filter(problem => {
            const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                problem.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCompany = selectedCompany ? problem.companies?.includes(selectedCompany) : true;
            const matchesDifficulty = selectedDifficulty ? problem.difficulty === selectedDifficulty : true;
            return matchesSearch && matchesCompany && matchesDifficulty;
        });
    }, [problems, searchQuery, selectedCompany, selectedDifficulty]);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
            case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">System Design Problems</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Practice High-Level Design (HLD) with our interactive whiteboard and get AI-powered feedback.
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        {/* Difficulty Filter */}
                        <div className="relative w-full md:w-40">
                            <select
                                className="w-full pl-4 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer transition-all text-slate-700"
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="">Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Company Filter */}
                        <div className="relative w-full md:w-64">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                            <select
                                className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer transition-all text-slate-700"
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                            >
                                <option value="">All Companies</option>
                                <option value="Google">Google</option>
                                <option value="Meta">Meta</option>
                                <option value="Amazon">Amazon</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Netflix">Netflix</option>
                                <option value="Uber">Uber</option>
                                <option value="Twitter">Twitter</option>
                                <option value="LinkedIn">LinkedIn</option>
                                {companies.filter(c => !['Google', 'Meta', 'Amazon', 'Microsoft', 'Netflix', 'Uber', 'Twitter', 'LinkedIn'].includes(c)).map(company => (
                                    <option key={company} value={company}>{company}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {(searchQuery || selectedCompany || selectedDifficulty) && (
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCompany(''); setSelectedDifficulty(''); }}
                                className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Clear filters"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <>
                        {filteredProblems.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                                    <Search className="text-slate-400" size={32} />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900 mb-1">No problems found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedCompany(''); setSelectedDifficulty(''); }}
                                    className="mt-4 text-primary font-medium hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {filteredProblems.map((problem) => (
                                    <Link
                                        key={problem.id || problem.slug}
                                        to={`/hld/${problem.slug}`}
                                        className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                    >
                                        <div className="p-6 flex-1">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(problem.difficulty)}`}>
                                                    {problem.difficulty}
                                                </div>
                                                <Server className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                                {problem.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                                {problem.description}
                                            </p>

                                            {problem.companies && problem.companies.length > 0 && (
                                                <div className="flex flex-wrap gap-3 mb-4 items-center">
                                                    {problem.companies.slice(0, 4).map((company, index) => (
                                                        <div key={index} className="relative group/logo" title={company}>
                                                            <img
                                                                src={`https://logo.clearbit.com/${company.toLowerCase().replace(/\s+/g, '')}.com`}
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = `https://ui-avatars.com/api/?name=${company}&background=random&color=fff&size=24`;
                                                                }}
                                                                alt={company}
                                                                className="w-6 h-6 rounded-full object-contain bg-white border border-slate-200 p-0.5"
                                                            />
                                                        </div>
                                                    ))}
                                                    {problem.companies.length > 4 && (
                                                        <span className="text-xs text-slate-400 font-medium">+{problem.companies.length - 4}</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary">Start Design</span>
                                            <ArrowRight size={18} className="text-slate-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default HldList;
