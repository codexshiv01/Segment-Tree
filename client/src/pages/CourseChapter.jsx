import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, ChevronRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courseChapters } from '../data/courseData';

const CourseChapter = () => {
    const { chapterSlug } = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);

    const chapter = courseChapters.find(c => c.slug === chapterSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapterSlug]);

    if (!chapter) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Chapter not found</h2>
                    <Link to="/course" className="text-primary hover:underline">← Back to Course</Link>
                </div>
            </div>
        );
    }

    const nextChapter = courseChapters.find(c => c.id === chapter.id + 1);
    const prevChapter = courseChapters.find(c => c.id === chapter.id - 1);

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Progress Bar */}
            <div className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/course')}
                        className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Course</span>
                    </button>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Clock size={16} />
                        <span>{chapter.duration}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-32 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <BookOpen size={18} />
                                Contents
                            </h3>
                            <nav className="space-y-2">
                                {chapter.sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        onClick={() => setActiveSection(index)}
                                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${activeSection === index
                                            ? 'bg-primary/10 text-primary font-semibold'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Chapter Header */}
                        <div className="mb-12">
                            <div className="text-5xl mb-4">{chapter.icon}</div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-4">
                                {chapter.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {chapter.description}
                            </p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-16">
                            {chapter.sections.map((section, index) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-32"
                                >
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-primary/20">
                                        {section.title}
                                    </h2>
                                    <div className="prose prose-lg prose-slate max-w-none">
                                        {section.content.split('\n\n').map((paragraph, pIndex) => {
                                            // Handle code blocks
                                            if (paragraph.trim().startsWith('```')) {
                                                const codeMatch = paragraph.match(/```(\w+)?\n([\s\S]+?)```/);
                                                if (codeMatch) {
                                                    return (
                                                        <pre key={pIndex} className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto my-6 border border-slate-700">
                                                            <code className="text-sm font-mono leading-relaxed">
                                                                {codeMatch[2].trim()}
                                                            </code>
                                                        </pre>
                                                    );
                                                }
                                            }

                                            // Handle images
                                            if (paragraph.trim().startsWith('![')) {
                                                const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                                                if (imageMatch) {
                                                    return (
                                                        <figure key={pIndex} className="my-8">
                                                            <img
                                                                src={imageMatch[2]}
                                                                alt={imageMatch[1]}
                                                                className="w-full rounded-xl shadow-lg border border-slate-200"
                                                            />
                                                            <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                                                                {imageMatch[1]}
                                                            </figcaption>
                                                        </figure>
                                                    );
                                                }
                                            }

                                            // Handle headers
                                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                                const headerText = paragraph.slice(2, -2);
                                                return (
                                                    <h3 key={pIndex} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                                                        {headerText}
                                                    </h3>
                                                );
                                            }

                                            // Handle bullet points
                                            if (paragraph.includes('\n- ')) {
                                                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                                                return (
                                                    <ul key={pIndex} className="space-y-2 my-4 ml-6">
                                                        {items.map((item, iIndex) => (
                                                            <li key={iIndex} className="text-slate-700 leading-relaxed flex items-start gap-3">
                                                                <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                                                                <span dangerouslySetInnerHTML={{
                                                                    __html: item.slice(2)
                                                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
                                                                        .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-2 py-0.5 rounded text-sm font-mono text-primary">$1</code>')
                                                                }} />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            }

                                            // Handle tables
                                            if (paragraph.includes('|')) {
                                                const rows = paragraph.trim().split('\n');
                                                if (rows.length > 2) {
                                                    const headers = rows[0].split('|').map(h => h.trim()).filter(Boolean);
                                                    const dataRows = rows.slice(2).map(row =>
                                                        row.split('|').map(cell => cell.trim()).filter(Boolean)
                                                    );

                                                    return (
                                                        <div key={pIndex} className="my-6 overflow-x-auto">
                                                            <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
                                                                <thead className="bg-gradient-to-r from-primary/10 to-secondary/10">
                                                                    <tr>
                                                                        {headers.map((header, hIndex) => (
                                                                            <th key={hIndex} className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-b border-slate-200">
                                                                                {header}
                                                                            </th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white">
                                                                    {dataRows.map((row, rIndex) => (
                                                                        <tr key={rIndex} className="hover:bg-slate-50 transition-colors">
                                                                            {row.map((cell, cIndex) => (
                                                                                <td key={cIndex} className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100">
                                                                                    <span dangerouslySetInnerHTML={{
                                                                                        __html: cell
                                                                                            .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-primary">$1</code>')
                                                                                    }} />
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    );
                                                }
                                            }

                                            // Regular paragraphs with inline formatting
                                            return (
                                                <p
                                                    key={pIndex}
                                                    className="text-lg text-slate-700 leading-relaxed mb-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: paragraph
                                                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
                                                            .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-primary">$1</code>')
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Practice Problems */}
                        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CheckCircle size={24} className="text-primary" />
                                Practice Problems
                            </h2>
                            <p className="text-slate-600 mb-6">
                                Apply what you've learned with these related system design problems:
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {chapter.practiceProblems.map((slug, index) => (
                                    <Link
                                        key={index}
                                        to={`/hld/${slug}`}
                                        className="flex items-center justify-between bg-white rounded-xl p-4 border border-slate-200 hover:border-primary hover:shadow-lg transition-all group"
                                    >
                                        <span className="font-medium text-slate-900 group-hover:text-primary">
                                            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </span>
                                        <ExternalLink size={18} className="text-slate-400 group-hover:text-primary" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
                            {prevChapter ? (
                                <Link
                                    to={`/course/${prevChapter.slug}`}
                                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group"
                                >
                                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    <div>
                                        <div className="text-xs text-slate-500">Previous</div>
                                        <div className="font-semibold">{prevChapter.title}</div>
                                    </div>
                                </Link>
                            ) : <div />}

                            {nextChapter && (
                                <Link
                                    to={`/course/${nextChapter.slug}`}
                                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group text-right"
                                >
                                    <div>
                                        <div className="text-xs text-slate-500">Next</div>
                                        <div className="font-semibold">{nextChapter.title}</div>
                                    </div>
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CourseChapter;
