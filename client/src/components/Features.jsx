import React from 'react';
import { BookOpen, Code, Cpu, Database, Layout, MessageSquare, Monitor, Server } from 'lucide-react';

const features = [
    {
        icon: Server,
        title: "HLD & LLD",
        desc: "Master High-Level and Low-Level Design with interactive diagrams and AI feedback.",
        color: "text-blue-500"
    },
    {
        icon: MessageSquare,
        title: "AI Mock Interviews",
        desc: "Practice DSA and System Design interviews with our advanced AI interviewer.",
        color: "text-purple-500"
    },
    {
        icon: Code,
        title: "DSA Questions",
        desc: "Curated list of company-wise DSA questions with optimized solutions.",
        color: "text-green-500"
    },
    {
        icon: Layout,
        title: "Frontend Machine Coding",
        desc: "Build real-world UI components and get instant feedback on best practices.",
        color: "text-pink-500"
    },
    {
        icon: Database,
        title: "DB Design",
        desc: "Deep dive into database internals, schema design, and query optimization.",
        color: "text-orange-500"
    },
    {
        icon: BookOpen,
        title: "CS Fundamentals",
        desc: "Comprehensive courses on OS, DBMS, and Computer Networks.",
        color: "text-indigo-500"
    },
    {
        icon: Monitor,
        title: "System Design Course",
        desc: "Structured learning path from basic concepts to complex distributed systems.",
        color: "text-teal-500"
    },
    {
        icon: Cpu,
        title: "AI Performance Analysis",
        desc: "Get detailed insights into your code performance and time complexity.",
        color: "text-red-500"
    }
];

const Features = () => {
    return (
        <div className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Everything You Need to <span className="text-gradient">Crack the Interview</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A complete ecosystem designed to prepare you for every round of technical interviews.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card-dark p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={24} className={feature.color} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
