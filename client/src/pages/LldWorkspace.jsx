import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Editor from '@monaco-editor/react';
import { ArrowLeft, Play, Layout, FileText, Loader2, CheckCircle2, AlertCircle, Sparkles, Code, Shield, Target } from 'lucide-react';
import { lldProblems } from '../data/lldProblems';
import FileExplorer from '../components/FileExplorer';

const LldWorkspace = () => {
    const { slug } = useParams();
    const problem = lldProblems.find(p => p.id === (slug || 'parking-lot'));

    const [files, setFiles] = useState(problem?.initialFiles || {});
    const [activeFile, setActiveFile] = useState('Main.java');
    const [evaluating, setEvaluating] = useState(false);
    const [result, setResult] = useState(null);
    const [terminalOpen, setTerminalOpen] = useState(false);

    useEffect(() => {
        if (result) setTerminalOpen(true);
    }, [result]);

    const handleFileCreate = (path) => {
        if (files[path]) return;
        setFiles(prev => ({ ...prev, [path]: path.endsWith('.java') ? `public class ${path.split('/').pop().replace('.java', '')} {\n    \n}` : '' }));
        setActiveFile(path);
    };

    const handleFolderCreate = (path) => {
        const keepPath = `${path}/.keep`;
        if (files[keepPath]) return;
        setFiles(prev => ({ ...prev, [keepPath]: '' }));
    };

    const handleFileDelete = (path) => {
        const newFiles = { ...files };
        delete newFiles[path];
        Object.keys(newFiles).forEach(key => {
            if (key.startsWith(path + '/')) delete newFiles[key];
        });
        setFiles(newFiles);
        if (activeFile === path) {
            const remaining = Object.keys(newFiles).filter(k => !k.endsWith('.keep'));
            if (remaining.length > 0) setActiveFile(remaining[0]);
        }
    };

    const handleCodeChange = (value) => {
        setFiles(prev => ({ ...prev, [activeFile]: value }));
    };

    const handleSubmit = async () => {
        setEvaluating(true);
        setTerminalOpen(true);
        setResult(null);
        try {
            const response = await fetch('http://localhost:5000/api/lld/evaluate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    problemId: problem?.id || 'parking-lot',
                    files
                })
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error(error);
            setResult({ error: "Failed to evaluate. Please try again." });
        } finally {
            setEvaluating(false);
        }
    };

    const getSectionIcon = (title) => {
        if (title.includes('Problem')) return <FileText size={14} className="text-blue-400" />;
        if (title.includes('Functional')) return <Code size={14} className="text-emerald-400" />;
        if (title.includes('Non-Functional')) return <Shield size={14} className="text-purple-400" />;
        if (title.includes('Expectations')) return <Target size={14} className="text-amber-400" />;
        return <Sparkles size={14} className="text-slate-400" />;
    };

    if (!problem) return <div className="p-10 text-white">Problem not found</div>;

    return (
        <div className="h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 flex flex-col overflow-hidden font-sans">
            {/* Header / Toolbar */}
            <header className="h-12 bg-slate-900/80 backdrop-blur-sm border-b border-white/5 flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4">
                    <Link to="/lld" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span className="text-sm font-medium">Exit</span>
                    </Link>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <span className="text-sm font-medium text-white">{problem.title}</span>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={evaluating}
                    className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {evaluating ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}
                    <span>Run & Evaluate</span>
                </button>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                <PanelGroup direction="horizontal">
                    {/* Left Panel: Problem Description */}
                    <Panel defaultSize={35} minSize={20} className="bg-slate-900/50 backdrop-blur-sm border-r border-white/5 flex flex-col">
                        {/* Tabs Header */}
                        <div className="flex items-center gap-1 px-3 py-2.5 border-b border-white/5 bg-gradient-to-r from-slate-900/80 to-slate-900/60">
                            <button className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md shadow-sm">
                                Description
                            </button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-md transition-all">
                                Editorial
                            </button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-md transition-all">
                                Solutions
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="p-6">
                                {/* Title */}
                                <div className="mb-6">
                                    <h1 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                        {problem.title}
                                    </h1>

                                    {/* Meta Row */}
                                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/5">
                                        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold backdrop-blur-sm ${problem.difficulty === 'Easy' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' :
                                                problem.difficulty === 'Medium' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20' :
                                                    'bg-rose-500/15 text-rose-400 border border-rose-500/20'
                                            }`}>
                                            {problem.difficulty}
                                        </span>

                                        {problem.companies && problem.companies.length > 0 && (
                                            <>
                                                <div className="h-3 w-[1px] bg-white/10" />
                                                <div className="flex flex-wrap gap-1.5 items-center">
                                                    {problem.companies.slice(0, 4).map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-medium rounded border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-pointer">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {problem.companies.length > 4 && (
                                                        <span className="text-[10px] text-slate-500">+{problem.companies.length - 4}</span>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Content - Structured Sections */}
                                <div className="space-y-8">
                                    {problem.sections?.map((section, idx) => (
                                        <div key={idx} className="group">
                                            {/* Section Header */}
                                            <div className="flex items-center gap-2 mb-4">
                                                {getSectionIcon(section.title)}
                                                <h2 className="text-base font-semibold text-slate-200">
                                                    {section.title}
                                                </h2>
                                            </div>

                                            {/* Section Content Card */}
                                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4 hover:bg-white/[0.04] transition-colors">
                                                {section.content && (
                                                    <p className="text-sm text-slate-300 leading-7">
                                                        {section.content}
                                                    </p>
                                                )}

                                                {section.items && (
                                                    <div className="space-y-3">
                                                        {section.items.map((item, i) => (
                                                            <div key={i} className="flex gap-3 group/item">
                                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800/50 text-xs text-slate-500 border border-white/5">
                                                                    {i + 1}
                                                                </span>
                                                                <div className="flex-1">
                                                                    <span className="text-slate-200 text-sm font-medium">{item.label}</span>
                                                                    <p className="text-slate-400 text-sm mt-1 leading-6">{item.text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {section.bullets && (
                                                    <ul className="space-y-2.5">
                                                        {section.bullets.map((bullet, i) => (
                                                            <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                                                                <span className="leading-6">{bullet}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Panel>

                    <PanelResizeHandle className="w-1 bg-white/5 hover:bg-blue-500/50 transition-colors" />

                    {/* Right Area: Explorer + Editor + Terminal */}
                    <Panel defaultSize={75}>
                        <PanelGroup direction="horizontal">
                            {/* File Explorer */}
                            <Panel defaultSize={20} minSize={15} maxSize={30} className="bg-slate-900/50 backdrop-blur-sm border-r border-white/5">
                                <FileExplorer
                                    files={files}
                                    activeFile={activeFile}
                                    onFileClick={setActiveFile}
                                    onFileCreate={handleFileCreate}
                                    onFolderCreate={handleFolderCreate}
                                    onDelete={handleFileDelete}
                                />
                            </Panel>

                            <PanelResizeHandle className="w-1 bg-white/5 hover:bg-blue-500/50 transition-colors" />

                            {/* Editor & Terminal */}
                            <Panel defaultSize={80}>
                                <PanelGroup direction="vertical">
                                    <Panel defaultSize={terminalOpen ? 70 : 100} minSize={30}>
                                        <div className="h-full flex flex-col bg-[#1e1e1e]">
                                            {/* Tabs */}
                                            <div className="flex bg-slate-900/80 backdrop-blur-sm border-b border-white/5 overflow-x-auto no-scrollbar">
                                                {Object.keys(files).filter(f => !f.endsWith('.keep')).map(file => (
                                                    <div
                                                        key={file}
                                                        onClick={() => setActiveFile(file)}
                                                        className={`px-4 py-2.5 text-xs border-r border-white/5 cursor-pointer flex items-center gap-2 min-w-fit transition-all ${activeFile === file
                                                                ? 'bg-[#1e1e1e] text-white shadow-lg'
                                                                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                                                            }`}
                                                    >
                                                        <span className={file.endsWith('.java') ? 'text-orange-400' : 'text-blue-400'}>●</span>
                                                        <span className="truncate max-w-[150px] font-medium">{file.split('/').pop()}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Editor */}
                                            <div className="flex-1 relative">
                                                <Editor
                                                    height="100%"
                                                    defaultLanguage="java"
                                                    path={activeFile}
                                                    value={files[activeFile]}
                                                    onChange={handleCodeChange}
                                                    theme="vs-dark"
                                                    options={{
                                                        minimap: { enabled: false },
                                                        fontSize: 14,
                                                        lineNumbers: 'on',
                                                        scrollBeyondLastLine: false,
                                                        automaticLayout: true,
                                                        padding: { top: 16 },
                                                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Panel>

                                    {/* Terminal / Output */}
                                    {terminalOpen && (
                                        <>
                                            <PanelResizeHandle className="h-1 bg-white/5 hover:bg-blue-500/50 transition-colors" />
                                            <Panel defaultSize={30} minSize={10}>
                                                <div className="h-full bg-slate-900/50 backdrop-blur-sm flex flex-col">
                                                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-slate-900/80">
                                                        <div className="flex gap-4 text-xs font-medium">
                                                            <button className="text-white px-2 py-1 bg-white/10 rounded">Output</button>
                                                            <button className="text-slate-500 hover:text-slate-300 transition-colors">Problems</button>
                                                        </div>
                                                        <button onClick={() => setTerminalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                                            <Layout size={14} />
                                                        </button>
                                                    </div>

                                                    <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                                                        {evaluating ? (
                                                            <div className="flex items-center gap-2 text-blue-400">
                                                                <Loader2 size={14} className="animate-spin" />
                                                                Running tests and evaluating design...
                                                            </div>
                                                        ) : result ? (
                                                            <div className="space-y-4">
                                                                <div className="flex items-center gap-2">
                                                                    <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${result.score >= 70 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
                                                                        SCORE: {result.score}/100
                                                                    </div>
                                                                    <span className="text-slate-500">Execution time: 1.2s</span>
                                                                </div>

                                                                {result.error && (
                                                                    <div className="text-rose-400 bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                                                                        Error: {result.error}
                                                                    </div>
                                                                )}

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg">
                                                                        <div className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                                                                            <CheckCircle2 size={14} /> Strengths
                                                                        </div>
                                                                        <ul className="list-none space-y-2 text-slate-300 text-xs">
                                                                            {result.strengths?.map((s, i) => (
                                                                                <li key={i} className="flex gap-2">
                                                                                    <span className="text-emerald-500">✓</span>
                                                                                    <span>{s}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg">
                                                                        <div className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                                                                            <AlertCircle size={14} /> Improvements
                                                                        </div>
                                                                        <ul className="list-none space-y-2 text-slate-300 text-xs">
                                                                            {result.weaknesses?.map((w, i) => (
                                                                                <li key={i} className="flex gap-2">
                                                                                    <span className="text-amber-500">→</span>
                                                                                    <span>{w}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg">
                                                                    <div className="text-slate-300 font-bold mb-2">Feedback</div>
                                                                    <p className="text-slate-400 leading-relaxed whitespace-pre-wrap text-sm">{result.suggestions}</p>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="text-slate-500 italic">Ready to evaluate. Click "Run & Evaluate" to start.</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </Panel>
                                        </>
                                    )}
                                </PanelGroup>
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
};

export default LldWorkspace;
