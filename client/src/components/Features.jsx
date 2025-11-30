import React from 'react';
import { BookOpen, Code, Cpu, Database, Layout, MessageSquare, Monitor, Server, ArrowUpRight } from 'lucide-react';

const features = [
    {
        icon: Server,
        title: "HLD & LLD",
        desc: "Master High-Level and Low-Level Design with interactive diagrams and AI feedback.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50",
        colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
        icon: MessageSquare,
        title: "AI Mock Interviews",
        desc: "Practice DSA and System Design interviews with our advanced AI interviewer.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Code,
        title: "DSA Questions",
        desc: "Curated list of company-wise DSA questions with optimized solutions.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "group-hover:border-green-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Layout,
        title: "Frontend Machine Coding",
        desc: "Build real-world UI components and get instant feedback on best practices.",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "group-hover:border-pink-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Database,
        title: "DB Design",
        desc: "Deep dive into database internals, schema design, and query optimization.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: BookOpen,
        title: "CS Fundamentals",
        desc: "Comprehensive courses on OS, DBMS, and Computer Networks.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "group-hover:border-indigo-500/50",
        colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
        icon: Monitor,
        title: "System Design Course",
        desc: "Structured learning path from basic concepts to complex distributed systems.",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "group-hover:border-teal-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Cpu,
        title: "AI Performance Analysis",
        desc: "Get detailed insights into your code performance and time complexity.",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "group-hover:border-red-500/50",
        colSpan: "md:col-span-1 lg:col-span-1"
    }
];

const Features = () => {
    return (
        <div className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Crack the Interview</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A complete ecosystem designed to prepare you for every round of technical interviews, from coding rounds to system design deep dives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.colSpan} group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden ${feature.border}`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon size={28} className={feature.color} />
                                    </div>
                                    <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
