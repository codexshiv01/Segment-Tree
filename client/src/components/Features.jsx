import React from 'react';
import { BookOpen, Code, Cpu, Database, Layout, MessageSquare, Monitor, CheckCircle2, ArrowRight, Play, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import dsaFeature from '../assets/dsa-feature.png';

const FeatureSection = ({ title, description, features, icon: Icon, color, align = 'left', link, linkText, visual }) => {
    return (
        <div className="py-32 relative overflow-hidden group first:pt-20">
            {/* Background Gradient */}
            <div className={`absolute top-0 ${align === 'left' ? 'right-0' : 'left-0'} w-2/3 h-full bg-gradient-to-b from-${color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-3xl`} />

            {/* Geometric Shapes */}
            <div className={`absolute top-20 ${align === 'left' ? 'left-10' : 'right-10'} w-96 h-96 bg-${color}-500/5 rounded-full blur-3xl`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Visual Side */}
                    <div className="flex-1 w-full perspective-1000">
                        <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/5 shadow-2xl group-hover:scale-[1.02] group-hover:shadow-${color}-500/20 transition-all duration-700 transform ${align === 'left' ? 'rotate-y-2' : '-rotate-y-2'} group-hover:rotate-0`}>
                            {/* Inner Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-50`} />

                            {/* Grid Pattern Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                            {/* The Visual Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                {visual}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-400 text-sm font-bold tracking-wide uppercase mb-8 shadow-inner shadow-${color}-500/5`}>
                            <Icon size={14} />
                            <span>{title}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-[1.15]">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? `text-transparent bg-clip-text bg-gradient-to-r from-${color}-400 to-${color}-600` : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h2>

                        <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 text-slate-300 group/item">
                                    <div className={`mt-0.5 w-5 h-5 rounded-full bg-${color}-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-${color}-500 group-hover/item:scale-110 transition-all`}>
                                        <CheckCircle2 size={12} className={`text-${color}-500 group-hover/item:text-white transition-colors`} />
                                    </div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {link && (
                            <Link
                                to={link}
                                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-${color}-600 to-${color}-500 hover:from-${color}-500 hover:to-${color}-400 text-white font-bold text-lg shadow-lg shadow-${color}-900/50 hover:shadow-xl hover:shadow-${color}-900/70 hover:-translate-y-1 transition-all duration-300 group/btn`}
                            >
                                {linkText}
                                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <div className="bg-slate-950">
            {/* Section 1: DSA */}
            <FeatureSection
                title="Company-Wise DSA"
                description="Stop grinding random problems. Target your dream job with curated questions actually asked by Google, Amazon, and Microsoft."
                features={[
                    "Target Top 50 Tech Companies",
                    "Detailed Video Editorials",
                    "Time Complexity Analysis",
                    "Integrated Code Editor"
                ]}
                icon={Code}
                color="blue"
                align="left"
                link="/dsa"
                linkText="Start Solving"
                visual={
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <img
                            src={dsaFeature}
                            alt="DSA Platform Interface"
                            className="w-full h-auto object-contain rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                        />
                        {/* Glow effect behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] -z-10" />
                    </div>
                }
            />

            {/* Section 2: System Design */}
            <FeatureSection
                title="System Design"
                description="Master HLD & LLD. Design scalable systems like Netflix or Uber from scratch with our interactive canvas."
                features={[
                    "Interactive Architecture Diagrams",
                    "Real-world Case Studies",
                    "Low-Level Class Diagrams",
                    "Scalability Patterns"
                ]}
                icon={Database}
                color="amber"
                align="right"
                link="/hld"
                linkText="Design Systems"
                visual={
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Diagram Nodes */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-16 h-16 bg-slate-800 rounded-xl border border-amber-500/50 flex items-center justify-center shadow-lg shadow-amber-500/20">
                                    <Users size={24} className="text-amber-500" />
                                </div>
                                <div className="h-0.5 flex-1 bg-slate-700 relative overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full bg-amber-500/50 -translate-x-full animate-[shimmer_2s_infinite]" />
                                </div>
                                <div className="w-20 h-20 bg-slate-800 rounded-full border border-blue-500/50 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                                    <div className="text-center">
                                        <div className="text-[10px] text-blue-400 font-bold">LB</div>
                                    </div>
                                </div>
                                <div className="h-0.5 flex-1 bg-slate-700" />
                                <div className="w-16 h-16 bg-slate-800 rounded-xl border border-green-500/50 flex items-center justify-center shadow-lg shadow-green-500/20">
                                    <Database size={24} className="text-green-500" />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-amber-500/5 blur-3xl -z-10" />
                        </div>
                    </div>
                }
            />

            {/* Section 3: Frontend */}
            <FeatureSection
                title="Frontend Machine Coding"
                description="Build pixel-perfect UI challenges. Practice real-world scenarios like Infinite Scroll and Kanban Boards."
                features={[
                    "React, Vue, & Angular",
                    "Live Preview Environment",
                    "Accessibility Best Practices",
                    "State Management"
                ]}
                icon={Layout}
                color="pink"
                align="left"
                link="#frontend"
                linkText="Build UI"
                visual={
                    <div className="w-full h-full p-6 flex flex-col gap-4">
                        <div className="flex-1 bg-slate-800 rounded-lg border border-slate-700 p-2 flex gap-2 overflow-hidden opacity-50">
                            <div className="w-20 bg-slate-700 rounded h-full" />
                            <div className="flex-1 bg-slate-700 rounded h-full" />
                        </div>
                        <div className="h-32 bg-slate-800 rounded-lg border border-pink-500/30 p-4 flex items-center justify-center relative overflow-hidden">
                            <div className="text-pink-400 font-bold text-xl relative z-10">Live Preview</div>
                            <div className="absolute inset-0 bg-pink-500/10 animate-pulse" />
                        </div>
                    </div>
                }
            />

            {/* Section 4: Video Courses */}
            <FeatureSection
                title="Interactive Courses"
                description="Deep dive into core concepts. High-quality video lessons on OS, Networking, and DBMS with quizzes."
                features={[
                    "HD Video Lessons",
                    "Chapter-wise Progress",
                    "Interactive Notes",
                    "Completion Certificates"
                ]}
                icon={Play}
                color="indigo"
                align="right"
                link="/course"
                linkText="Start Learning"
                visual={
                    <div className="relative w-full h-full flex items-center justify-center group">
                        <div className="w-3/4 aspect-video bg-slate-900 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-slate-900" />
                            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer z-10">
                                <Play size={32} className="text-white fill-white ml-2" />
                            </div>
                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
                                <div className="w-2/3 h-full bg-indigo-500" />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Features;
