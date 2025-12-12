import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
        setProfileOpen(false);
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Online Assessment', href: '/dsa', isRouterLink: true },
        { name: 'Aptitude', href: '/aptitude', isRouterLink: true },
        { name: 'HLD', href: '/hld', isRouterLink: true },
        { name: 'LLD', href: '/lld', isRouterLink: true },
        { name: 'Frontend', href: '#frontend' },
        { name: 'AI Mock Interview', href: '#mock-interview' },
        { name: 'DB Design', href: '#db-design' },
        { name: 'CS Fundamentals', href: '/cs-fundamentals', isRouterLink: true },
        { name: 'Course', href: '/course', isRouterLink: true },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-white/5'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
                        <div className="relative">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                ScaleMonk
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            link.isRouterLink ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                </a>
                            )
                        ))}

                        {user ? (
                            <div className="relative ml-4">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-200"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                                        {user.name ? user.name.charAt(0).toUpperCase() : <User size={16} />}
                                    </div>
                                    <span className="text-sm font-medium text-slate-200 max-w-[100px] truncate hidden md:block">
                                        {user.name || 'User'}
                                    </span>
                                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {profileOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-slate-900 rounded-xl shadow-xl border border-white/10 py-2 animate-fade-in-up origin-top-right">
                                        <div className="px-4 py-3 border-b border-white/5">
                                            <p className="text-sm font-medium text-white truncate">{user.name}</p>
                                            <p className="text-xs text-slate-400 truncate">{user.email}</p>
                                        </div>
                                        <Link
                                            to={`/profile/${user.id}`}
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                                            onClick={() => setProfileOpen(false)}
                                        >
                                            <User size={16} />
                                            Your Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left"
                                        >
                                            <LogOut size={16} />
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/register" className="ml-4 px-6 py-2.5 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-100 transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
                                Get Started
                            </Link>
                        )}
                    </div>

                    {/* Mobile/Hamburger Menu Button */}
                    <div className="xl:hidden flex items-center gap-4">
                        {user && (
                            <Link to={`/profile/${user.id}`} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                                {user.name ? user.name.charAt(0).toUpperCase() : <User size={16} />}
                            </Link>
                        )}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-6 bg-slate-900 border-t border-white/5 shadow-lg space-y-2">
                    {user && (
                        <div className="px-4 py-3 bg-white/5 rounded-lg mb-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                                {user.name ? user.name.charAt(0).toUpperCase() : <User size={20} />}
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-medium text-white truncate">{user.name}</p>
                                <p className="text-xs text-slate-400 truncate">{user.email}</p>
                            </div>
                        </div>
                    )}

                    {navLinks.map((link) => (
                        link.isRouterLink ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        )
                    ))}

                    <div className="pt-4 mt-4 border-t border-white/5">
                        {user ? (
                            <>
                                <Link
                                    to={`/profile/${user.id}`}
                                    className="flex items-center gap-2 w-full px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User size={20} />
                                    Your Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 w-full px-4 py-3 text-base font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-left"
                                >
                                    <LogOut size={20} />
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/register"
                                className="block w-full text-center px-6 py-3 bg-white text-slate-900 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started Free
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
