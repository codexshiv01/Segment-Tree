import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courseChapters } from '../data/courseData';

const Course = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-b border-slate-200">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <BookOpen size={16} />
                            <span>Complete System Design Course</span>
                        </div>
                        <h1 className="text-5xl font-bold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                            Master System Design
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Learn the fundamentals and advanced concepts of distributed systems, scalability, and architecture design through comprehensive chapters with practice problems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Course Chapters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courseChapters.map((chapter, index) => (
                        <Link
                            key={chapter.id}
                            to={`/course/${chapter.slug}`}
                            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Chapter Number Badge */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>

                            <div className="p-8">
                                {/* Icon */}
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                    {chapter.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {chapter.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 mb-6 line-clamp-2">
                                    {chapter.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>{chapter.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle size={16} />
                                        <span>{chapter.practiceProblems.length} problems</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                                        Start Learning
                                        <ArrowRight size={18} />
                                    </span>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none" />
                        </Link>
                    ))}
                </div>

                {/* Coming Soon Card */}
                <div className="mt-6 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-2">More Chapters Coming Soon!</h3>
                    <p className="text-slate-600">
                        We're constantly adding new content. Stay tuned for advanced topics like Microservices, Security, and Monitoring.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Course;
