import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Product: ['Features', 'Pricing', 'Testimonials', 'FAQ'],
        Learn: ['Documentation', 'Tutorials', 'Blog', 'Community'],
        Company: ['About', 'Careers', 'Contact', 'Privacy'],
    };

    return (
        <footer className="bg-slate-950 border-t border-white/5 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            ScaleMonk
                        </span>
                        <p className="text-slate-400 mt-4 leading-relaxed max-w-md">
                            The most advanced AI-powered interview preparation platform. Master System Design, DSA, and ace your next interview.
                        </p>
                        <div className="flex items-center gap-2 mt-6 text-slate-400">
                            <Mail size={18} />
                            <a href="mailto:hello@segmenttree.com" className="hover:text-primary transition-colors">
                                hello@segmenttree.com
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold text-white mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-slate-400 hover:text-primary transition-colors duration-200 text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} ScaleMonk. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                            <Github size={22} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                            <Twitter size={22} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
