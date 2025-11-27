import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Code, Cpu, Globe, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center justify-center pt-16">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500/20 opacity-20 blur-[100px]" />
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/20 opacity-20 blur-[100px]" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-[10%] text-primary/10 animate-float">
                    <Cpu size={64} />
                </div>
                <div className="absolute bottom-40 right-[10%] text-secondary/10 animate-float-delayed">
                    <Database size={64} />
                </div>
                <div className="absolute top-1/3 right-[15%] text-accent/10 animate-float" style={{ animationDelay: '2s' }}>
                    <Globe size={48} />
                </div>
                <div className="absolute bottom-1/4 left-[15%] text-blue-500/10 animate-float-delayed" style={{ animationDelay: '1s' }}>
                    <Code size={56} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default animate-fade-in-up">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                        New: System Design Course Added
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Grow Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                        Engineering Career
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Master System Design, DSA, and Machine Coding with the industry's most advanced AI-powered preparation platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link to="/register" className="px-12 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                            Start Learning Free
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-6 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="flex -space-x-4">
                        {[
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="User"
                                className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-8 text-slate-400 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 10k+ Engineers</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 500+ Companies</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 4.9/5 Rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
