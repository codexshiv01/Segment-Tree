import React from 'react';
import { Code, Database, Server, Cloud, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Code,
        title: "DSA Fundamentals",
        desc: "Master arrays, trees, graphs, and dynamic programming.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        icon: Database,
        title: "Low Level Design",
        desc: "Learn object-oriented design patterns and schema design.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        link: "/lld"
    },
    {
        icon: Server,
        title: "High Level Design",
        desc: "Scale systems to millions of users. Load balancing, caching, sharding.",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "group-hover:border-pink-500/50"
    },
    {
        icon: Cloud,
        title: "Machine Coding",
        desc: "Build real-world applications like News Feed, Chat App, or Rate Limiter.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/50"
    },
    {
        icon: Trophy,
        title: "Mock Interviews",
        desc: "Practice with AI and peers to refine your communication.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "group-hover:border-green-500/50"
    }
];

const LearningPath = () => {
    return (
        <div className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-800 rounded-full mb-4">
                        <span className="text-sm font-semibold text-slate-400 tracking-wide uppercase">Roadmap</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Senior Engineer</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A structured roadmap designed to take you from coding basics to system design mastery.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/2 animate-shimmer" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <Link key={index} to={step.link || '#'} className="group relative block">
                                <div className={`bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center relative z-10 ${step.border} hover:border-opacity-50 hover:bg-slate-800`}>
                                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white/5`}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>

                                    {/* Mobile Arrow */}
                                    <div className="md:hidden mt-4 text-slate-700">
                                        <ArrowRight size={20} className="transform rotate-90" />
                                    </div>
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-950 z-20 shadow-md group-hover:scale-110 transition-transform group-hover:bg-primary">
                                    {index + 1}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPath;
