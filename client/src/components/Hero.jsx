import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, ChevronLeft, ChevronRight, Terminal, Network, Shield, Layout, Cpu, Server, Layers } from 'lucide-react';

const slides = [
    {
        id: 'dsa',
        title: "Master Technical Interviews",
        subtitle: "The most advanced AI-powered preparation platform. Practice context-aware DSA problems that adapt to your skill level.",
        gradient: "from-blue-600 via-indigo-500 to-violet-500",
        bgGlow: "bg-blue-500/20",
        icon: Terminal,
        cta: "Start Coding",
        link: "/dsa",
        visual: (
            <div className="relative w-full h-[420px] bg-slate-900 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden group">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-3 font-mono text-sm leading-relaxed">
                    <div className="text-slate-500">// Optimized Two Sum Solution</div>
                    <div className="text-purple-400">const <span className="text-blue-400">twoSum</span> = (nums, target) =&gt; {'{'}</div>
                    <div className="pl-4 text-slate-300">const map = new <span className="text-yellow-400">Map</span>();</div>
                    <div className="pl-4 text-pink-400">for <span className="text-slate-300">(let i = 0; i &lt; nums.length; i++) {'{'}</span></div>
                    <div className="pl-8 text-slate-300">const complement = target - nums[i];</div>
                    <div className="pl-8 text-slate-300">if (map.has(complement)) {'{'}</div>
                    <div className="pl-12 text-emerald-400">return [map.get(complement), i];</div>
                    <div className="pl-8 text-slate-300">{'}'}</div>
                    <div className="pl-8 text-slate-300">map.set(nums[i], i);</div>
                    <div className="pl-4 text-slate-300">{'}'}</div>
                    <div className="text-purple-400">{'}'};</div>
                </div>
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur-md px-4 py-3 rounded-xl border border-emerald-500/30 shadow-xl animate-float-delayed">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <div>
                            <div className="text-xs font-bold text-emerald-400">Runtime: 52ms</div>
                            <div className="text-[10px] text-slate-400">Beats 99.8% of users</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'hld',
        title: "Ace System Design",
        subtitle: "Master HLD & LLD with interactive diagrams. Design scalable systems like Netflix, Uber, and WhatsApp from scratch.",
        gradient: "from-emerald-400 via-teal-500 to-cyan-500",
        bgGlow: "bg-emerald-500/20",
        icon: Network,
        cta: "Explore Methodologies",
        link: "/hld",
        visual: (
            <div className="relative w-full h-[420px] bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900" />

                {/* Architecture Nodes */}
                <div className="relative z-10 w-full max-w-sm">
                    <div className="flex justify-center mb-8">
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 w-24 text-center shadow-lg">
                            <Globe className="mx-auto text-blue-400 mb-1" size={20} />
                            <div className="text-[10px] text-slate-400 font-bold">Clients</div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-8 relative">
                        {/* Connection Lines */}
                        <div className="absolute top-[-32px] left-1/2 w-0.5 h-8 bg-slate-700 -translate-x-1/2" />
                        <div className="bg-slate-800 p-3 rounded-lg border border-emerald-500/50 ring-2 ring-emerald-500/20 w-32 text-center shadow-lg bg-emerald-900/10">
                            <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center mx-auto mb-1">
                                <Network size={16} className="text-emerald-400" />
                            </div>
                            <div className="text-[10px] text-emerald-400 font-bold">Load Balancer</div>
                        </div>
                        <div className="absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-slate-700 -translate-x-1/2" />
                    </div>

                    <div className="flex justify-between gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex-1 text-center shadow-lg">
                            <Server className="mx-auto text-orange-400 mb-1" size={20} />
                            <div className="text-[10px] text-slate-400">API Gateway</div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex-1 text-center shadow-lg">
                            <Database className="mx-auto text-purple-400 mb-1" size={20} />
                            <div className="text-[10px] text-slate-400">Sharded DB</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'frontend',
        title: "Frontend & Machine Coding",
        subtitle: "Build pixel-perfect UIs. Practice real-world challenges like Infinite Scroll, Carousel, and Kanban Board in React/Vue.",
        gradient: "from-pink-500 via-rose-500 to-yellow-500",
        bgGlow: "bg-pink-500/20",
        icon: Layout,
        cta: "Start Building",
        link: "/frontend",
        visual: (
            <div className="relative w-full h-[420px] bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                <div className="h-8 bg-slate-800 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="ml-2 w-32 h-4 bg-slate-700/50 rounded-full" />
                </div>
                <div className="flex-1 flex overflow-hidden">
                    {/* Code Side */}
                    <div className="w-1/2 border-r border-white/5 p-4 font-mono text-[10px] text-slate-400 leading-loose opacity-80">
                        <div><span className="text-pink-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {'{'}</div>
                        <div className="pl-2"><span className="text-purple-400">const</span> [count, setCount] = <span className="text-blue-400">useState</span>(0);</div>
                        <div className="pl-2">return (</div>
                        <div className="pl-4 text-emerald-300">&lt;div className="card"&gt;</div>
                        <div className="pl-6 text-emerald-300">&lt;h1&gt;<span className="text-white">Counter</span>&lt;/h1&gt;</div>
                        <div className="pl-6 text-emerald-300">&lt;button onClick=...&gt;</div>
                        <div className="pl-8 text-white">{'{'}count{'}'}</div>
                        <div className="pl-6 text-emerald-300">&lt;/button&gt;</div>
                        <div className="pl-4 text-emerald-300">&lt;/div&gt;</div>
                        <div className="pl-2">);</div>
                        <div>{'}'}</div>
                    </div>
                    {/* Preview Side */}
                    <div className="w-1/2 p-4 flex items-center justify-center bg-slate-950">
                        <div className="w-full aspect-square bg-slate-900 rounded-lg border border-slate-800 p-4 flex flex-col items-center justify-center gap-3 shadow-inner">
                            <div className="text-lg font-bold text-white">Counter</div>
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">42</div>
                            <div className="px-4 py-1.5 bg-slate-800 rounded text-xs text-slate-400 border border-slate-700 hover:border-pink-500/50 transition-colors cursor-pointer">Increment +</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'cs',
        title: "CS Fundamentals",
        subtitle: "Solidify your core knowledge. Quizzes & flashcards on OS, DBMS, Networking, and OOPS concepts.",
        gradient: "from-cyan-400 via-blue-500 to-indigo-500",
        bgGlow: "bg-cyan-500/20",
        icon: Cpu,
        cta: "Start Quiz",
        link: "/cs-fundamentals",
        visual: (
            <div className="relative w-full h-[420px] bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-sm">
                    {/* Quiz Card */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 shadow-lg relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">OS Quiz</span>
                            <span className="text-xs text-slate-400">Q 4/10</span>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-4 leading-relaxed">Which scheduling algorithm yields the minimum average waiting time?</h3>
                        <div className="space-y-2">
                            <div className="p-3 rounded-lg border border-slate-700 bg-slate-700/30 text-xs text-slate-400">Round Robin</div>
                            <div className="p-3 rounded-lg border border-cyan-500/50 bg-cyan-900/20 text-xs text-white flex justify-between items-center ring-1 ring-cyan-500/30">
                                <span>Shortest Job First (SJF)</span>
                                <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                            </div>
                            <div className="p-3 rounded-lg border border-slate-700 bg-slate-700/30 text-xs text-slate-400">FCFS</div>
                        </div>
                    </div>
                    {/* Stack Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 w-[90%] h-full bg-slate-800/50 rounded-xl border border-slate-700/50 -z-10 blur-[1px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 w-[80%] h-full bg-slate-800/30 rounded-xl border border-slate-700/30 -z-20 blur-[2px]" />
                </div>
            </div>
        )
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const activeSlide = slides[currentSlide];

    return (
        <div className="relative min-h-[750px] w-full overflow-hidden bg-slate-950 text-white flex items-center transition-colors duration-1000">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Dynamic Glow Orbs */}
                <div className={`absolute top-0 left-0 w-[600px] h-[600px] ${activeSlide.bgGlow} rounded-full blur-[120px] opacity-20 transition-all duration-1000 transform -translate-x-1/4 -translate-y-1/4`} />
                <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] ${activeSlide.bgGlow} rounded-full blur-[120px] opacity-20 transition-all duration-1000 transform translate-x-1/4 translate-y-1/4`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left: Text Content */}
                    <div className="relative h-[450px] flex items-center">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out px-1 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 translate-y-8 pointer-events-none'
                                    }`}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium w-fit mb-8 text-slate-300">
                                    <slide.icon size={16} className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient}`} />
                                    <span>ScaleMonk Learning</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slide.gradient}`}>
                                        {slide.title}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg font-light">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        to={slide.link}
                                        className={`px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 bg-gradient-to-r ${slide.gradient} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white shadow-xl shadow-slate-950/20`}
                                    >
                                        {slide.cta}
                                        <ArrowRight size={18} />
                                    </Link>
                                    {slide.id === 'dsa' && (
                                        <button className="px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group">
                                            View Roadmap <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual Content */}
                    <div className="relative h-[480px] hidden lg:block perspective-1000">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform origin-center ${index === currentSlide
                                        ? 'opacity-100 rotate-y-0 translate-x-0 scale-100 blur-0'
                                        : index < currentSlide
                                            ? 'opacity-0 -rotate-y-6 -translate-x-20 scale-90 blur-sm'
                                            : 'opacity-0 rotate-y-6 translate-x-20 scale-90 blur-sm'
                                    }`}
                            >
                                {slide.visual}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Controls */}
                <div className="mt-12 lg:mt-0 flex items-center gap-8 border-t border-white/5 pt-8">
                    <div className="flex gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide
                                        ? `w-16 bg-gradient-to-r ${slide.gradient}`
                                        : 'w-2 bg-slate-800 hover:bg-slate-700'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-3 ml-auto text-slate-500 font-mono text-sm">
                        <span>0{currentSlide + 1}</span>
                        <span>/</span>
                        <span>0{slides.length}</span>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-colors active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-colors active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
