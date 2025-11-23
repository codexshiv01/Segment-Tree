import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Code, Cpu, Globe } from 'lucide-react';
import heroTreeModern from '../assets/hero_tree_modern.png';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroTreeModern}
                    alt="Background Pattern"
                    className="w-full h-full object-cover opacity-[0.15] scale-110 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-50/50 to-slate-50" />
            </div>

            {/* Enhanced Parallax Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float-delayed" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] animate-float" />

                {/* Floating Tech Icons scattered in background */}
                <div className="absolute top-20 left-[10%] text-primary/20 animate-float">
                    <Cpu size={48} />
                </div>
                <div className="absolute bottom-40 right-[10%] text-secondary/20 animate-float-delayed">
                    <Database size={48} />
                </div>
                <div className="absolute top-1/3 right-[20%] text-accent/20 animate-float" style={{ animationDelay: '2s' }}>
                    <Globe size={32} />
                </div>
                <div className="absolute bottom-1/4 left-[15%] text-blue-500/20 animate-float-delayed" style={{ animationDelay: '1s' }}>
                    <Code size={40} />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full mb-8 shadow-sm">
                    <span className="text-sm font-semibold text-primary tracking-wide uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Ace Your Next Interview
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                    Grow Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                        Engineering Career
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                    Master System Design, DSA, and Machine Coding with the industry's most advanced AI-powered preparation platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link to="/register" className="px-12 py-6 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12 -translate-x-full" />
                        Start Learning Free
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-4 text-sm text-slate-500">
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
                    <p className="font-medium">Trusted by engineers from Google, Meta, Amazon</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
