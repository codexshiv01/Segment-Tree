import React from 'react';
import { Code, Database, Server, Cloud, Trophy } from 'lucide-react';

const steps = [
    {
        icon: Code,
        title: "DSA Fundamentals",
        desc: "Master arrays, trees, graphs, and dynamic programming.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Database,
        title: "Low Level Design",
        desc: "Learn object-oriented design patterns and schema design.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: Server,
        title: "High Level Design",
        desc: "Scale systems to millions of users. Load balancing, caching, sharding.",
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        icon: Cloud,
        title: "Machine Coding",
        desc: "Build real-world applications like News Feed, Chat App, or Rate Limiter.",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        icon: Trophy,
        title: "Mock Interviews",
        desc: "Practice with AI and peers to refine your communication.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
];

const LearningPath = () => {
    return (
        <div className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Your Path to <span className="text-gradient">Senior Engineer</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A structured roadmap designed to take you from coding basics to system design mastery.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPath;
