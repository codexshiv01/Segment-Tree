import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        { name: 'HLD', href: '/hld', isRouterLink: true },
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
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
                        <div className="relative">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                                Segment Tree
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            link.isRouterLink ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative px-4 py-2 text-slate-700 hover:text-primary font-medium text-sm transition-all duration-200 rounded-lg hover:bg-slate-50 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-slate-700 hover:text-primary font-medium text-sm transition-all duration-200 rounded-lg hover:bg-slate-50 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                </a>
                            )
                        ))}
                        <Link to="/register" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm hover:scale-105">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile/Hamburger Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-50 transition-all focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-6 bg-white border-t border-slate-100 shadow-lg space-y-2">
                    {navLinks.map((link) => (
                        link.isRouterLink ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-100">
                        <Link
                            to="/register"
                            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
