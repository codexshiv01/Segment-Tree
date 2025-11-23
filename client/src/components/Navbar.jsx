import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'DSA', href: '#dsa' },
        { name: 'HLD', href: '#hld' },
        { name: 'LLD', href: '#lld' },
        { name: 'Frontend', href: '#frontend' },
        { name: 'AI Mock Interview', href: '#mock-interview' },
        { name: 'DB Design', href: '#db-design' },
        { name: 'CS Fundamentals', href: '#cs-fundamentals' },
        { name: 'Course', href: '#course' },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group">
                        <div className="relative">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                                Segment Tree
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-slate-700 hover:text-primary font-medium text-sm transition-all duration-200 rounded-lg hover:bg-slate-50 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                </a>
                            ))}
                            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm hover:scale-105">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-50 focus:outline-none transition-all duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-50 font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
