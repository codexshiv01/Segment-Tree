import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Trophy, ArrowRight, Code2, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import APIService from '../services/api';

const DsaDashboard = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadCompanies();
    }, []);

    const loadCompanies = async () => {
        try {
            const data = await APIService.getDsaCompanies();
            if (data.companies) {
                setCompanies(data.companies);
            }
        } catch (error) {
            console.error('Failed to load companies:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter companies based on search query
    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Company-wise Practice</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mb-8">
                        Prepare for your dream company with real Online Assessment questions.
                        Practice in a realistic environment with our local judge.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search companies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                            />
                        </div>
                        {searchQuery && (
                            <p className="text-slate-500 text-sm mt-2 ml-1">
                                Found {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
                            </p>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : filteredCompanies.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-slate-500 text-xl">
                            {searchQuery ? 'No companies found matching your search.' : 'No companies available.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCompanies.map((company) => (
                            (company.assessments || []).map((assessment) => (
                                <div key={assessment.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                                            <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                            {assessment.problems.length} Problems
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{company.name}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{assessment.title}</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Practice real {company.name} interview questions with our timed assessment platform.</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Clock size={16} className="text-primary" />
                                            <span>{assessment.duration} minutes</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Code2 size={16} className="text-primary" />
                                            <span>{assessment.problems.length} Coding Problems</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Trophy size={16} className="text-primary" />
                                            <span>Auto Judged Results</span>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/dsa/assessment/${assessment.id}`}
                                        className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary transition-colors"
                                    >
                                        Start Assessment
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            ))
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DsaDashboard;
