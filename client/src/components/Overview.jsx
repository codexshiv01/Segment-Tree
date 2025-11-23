import React from 'react';
import { CheckCircle } from 'lucide-react';
import oldHeroImage from '../assets/hero_illustration.png';

const Overview = () => {
    return (
        <div className="py-24 bg-slate-900 relative overflow-hidden text-white">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side (Old Hero Image) */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-50" />
                        <div className="glass-card bg-white/10 border-white/10 rounded-2xl p-4 relative transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src={oldHeroImage}
                                alt="System Design Architecture"
                                className="rounded-xl w-full h-auto shadow-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 animate-float-delayed">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">
                                        98%
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium">Success Rate</p>
                                        <p className="text-white font-bold">In Top Companies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Visual Learning for <br />
                            <span className="text-gradient">Complex Systems</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Stop memorizing and start understanding. Our platform uses interactive visualizations
                            to break down complex distributed systems, data structures, and algorithms into
                            digestible concepts.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Interactive System Design Diagrams',
                                'Real-time Code Execution Environment',
                                'AI-Driven Performance Analysis',
                                'Curated Learning Paths for FAANG'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full">
                                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                                    </div>
                                    <span className="text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Overview;
