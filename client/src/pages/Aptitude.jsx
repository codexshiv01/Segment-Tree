import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Aptitude = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Aptitude Practice</h1>
                    <p className="text-slate-600 mb-8">
                        Sharpen your quantitative and logical reasoning skills with our curated aptitude questions.
                        (Coming Soon)
                    </p>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Under Construction</h2>
                        <p className="text-slate-500">
                            We are currently building this module. Check back soon for practice sets on:
                        </p>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="font-medium text-slate-700 block">Quantitative</span>
                                <span className="text-xs text-slate-500">Math & Arithmetic</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="font-medium text-slate-700 block">Logical</span>
                                <span className="text-xs text-slate-500">Reasoning & Puzzles</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="font-medium text-slate-700 block">Verbal</span>
                                <span className="text-xs text-slate-500">English Ability</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Aptitude;
