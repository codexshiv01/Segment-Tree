import React, { useState } from 'react';
import { Folder, FolderOpen, FileCode, ChevronRight, ChevronDown, FilePlus, FolderPlus, Trash2, Code2 } from 'lucide-react';

const FileExplorer = ({ files, activeFile, onFileClick, onFileCreate, onFolderCreate, onDelete }) => {
    const [expandedFolders, setExpandedFolders] = useState(['root']);
    const [newItemName, setNewItemName] = useState('');
    const [isCreating, setIsCreating] = useState(null);

    const toggleFolder = (path) => {
        setExpandedFolders(prev =>
            prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
        );
    };

    const buildTree = (flatFiles) => {
        const tree = {};
        Object.keys(flatFiles).sort().forEach(path => {
            const parts = path.split('/');
            let currentLevel = tree;
            parts.forEach((part, index) => {
                const isFile = index === parts.length - 1;
                if (!currentLevel[part]) {
                    currentLevel[part] = isFile ? { type: 'file', path } : { type: 'folder', children: {}, path: parts.slice(0, index + 1).join('/') };
                }
                if (!isFile) {
                    currentLevel = currentLevel[part].children;
                }
            });
        });
        return tree;
    };

    const tree = buildTree(files);

    const handleCreate = () => {
        if (!newItemName) return;

        let path = isCreating.parentPath ? `${isCreating.parentPath}/` : '';
        path += newItemName;

        if (isCreating.type === 'file') {
            if (!path.endsWith('.java')) path += '.java';
            onFileCreate(path);
        } else {
            onFolderCreate(path);
        }

        setIsCreating(null);
        setNewItemName('');
        if (isCreating.parentPath && !expandedFolders.includes(isCreating.parentPath)) {
            setExpandedFolders(prev => [...prev, isCreating.parentPath]);
        }
    };

    const renderTree = (node, pathPrefix = '') => {
        return Object.entries(node).map(([name, item]) => {
            const isFolder = item.type === 'folder';
            const fullPath = item.path || name;

            if (isFolder) {
                const isExpanded = expandedFolders.includes(fullPath);
                return (
                    <div key={fullPath}>
                        <div
                            className="flex items-center gap-2 px-3 py-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] cursor-pointer rounded-md mx-2 my-0.5 group transition-all"
                            onClick={(e) => { e.stopPropagation(); toggleFolder(fullPath); }}
                        >
                            <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </span>
                            <span className="text-amber-500/80 group-hover:text-amber-400 transition-colors">
                                {isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />}
                            </span>
                            <span className="truncate text-sm font-medium">{name}</span>

                            <div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsCreating({ type: 'file', parentPath: fullPath }); setExpandedFolders(prev => [...prev, fullPath]); }}
                                    className="p-1.5 hover:bg-blue-500/20 hover:text-blue-400 rounded transition-all"
                                    title="New File"
                                >
                                    <FilePlus size={13} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsCreating({ type: 'folder', parentPath: fullPath }); setExpandedFolders(prev => [...prev, fullPath]); }}
                                    className="p-1.5 hover:bg-amber-500/20 hover:text-amber-400 rounded transition-all"
                                    title="New Folder"
                                >
                                    <FolderPlus size={13} />
                                </button>
                            </div>
                        </div>
                        {isExpanded && (
                            <div className="ml-4 border-l border-white/5 pl-1">
                                {isCreating?.parentPath === fullPath && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] rounded-lg mx-2 my-1 border border-blue-500/30 shadow-sm">
                                        {isCreating.type === 'folder' ? <Folder size={14} className="text-amber-500" /> : <FileCode size={14} className="text-blue-400" />}
                                        <input
                                            autoFocus
                                            type="text"
                                            value={newItemName}
                                            onChange={(e) => setNewItemName(e.target.value)}
                                            onBlur={() => setIsCreating(null)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                                            className="bg-transparent border-none outline-none text-white w-full h-5 text-sm font-normal focus:ring-0 placeholder:text-slate-600"
                                            placeholder={isCreating.type === 'folder' ? 'Folder name' : 'filename.java'}
                                        />
                                    </div>
                                )}
                                {renderTree(item.children, fullPath)}
                            </div>
                        )}
                    </div>
                );
            } else {
                const isActive = activeFile === item.path;
                const isJava = name.endsWith('.java');

                return (
                    <div
                        key={item.path}
                        onClick={() => onFileClick(item.path)}
                        className={`group flex items-center justify-between px-3 py-1.5 cursor-pointer transition-all rounded-md mx-2 my-0.5 ${isActive
                                ? 'bg-blue-500/15 text-white border border-blue-500/30 shadow-sm'
                                : 'border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                            }`}
                    >
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-3.5" />
                            {isJava ? (
                                <Code2 size={15} className={isActive ? 'text-orange-400' : 'text-slate-500 group-hover:text-orange-400 transition-colors'} />
                            ) : (
                                <FileCode size={15} className={isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400 transition-colors'} />
                            )}
                            <span className="truncate text-sm font-medium tracking-tight">{name}</span>
                        </div>
                        {name !== 'Main.java' && (
                            <button
                                onClick={(e) => { e.stopPropagation(); onDelete(item.path); }}
                                className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-rose-500/20 hover:text-rose-400 rounded transition-all"
                            >
                                <Trash2 size={12} />
                            </button>
                        )}
                    </div>
                );
            }
        });
    };

    return (
        <div className="h-full bg-slate-900/50 backdrop-blur-sm flex flex-col font-sans select-none">
            {/* Header */}
            <div className="px-3 py-3 flex items-center justify-between bg-slate-900/80 backdrop-blur-sm border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Folder size={14} className="text-amber-500/80" />
                    <span className="font-semibold text-xs text-slate-300 uppercase tracking-wider">Explorer</span>
                </div>
                <div className="flex gap-1">
                    <button
                        onClick={() => setIsCreating({ type: 'file', parentPath: '' })}
                        className="p-1.5 hover:bg-blue-500/20 hover:text-blue-400 rounded text-slate-500 transition-all"
                        title="New File"
                    >
                        <FilePlus size={15} />
                    </button>
                    <button
                        onClick={() => setIsCreating({ type: 'folder', parentPath: '' })}
                        className="p-1.5 hover:bg-amber-500/20 hover:text-amber-400 rounded text-slate-500 transition-all"
                        title="New Folder"
                    >
                        <FolderPlus size={15} />
                    </button>
                </div>
            </div>

            {/* Tree */}
            <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                {isCreating && !isCreating.parentPath && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] rounded-lg mx-2 mb-2 border border-blue-500/30 shadow-sm">
                        {isCreating.type === 'folder' ? <Folder size={14} className="text-amber-500" /> : <FileCode size={14} className="text-blue-400" />}
                        <input
                            autoFocus
                            type="text"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                            onBlur={() => setIsCreating(null)}
                            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                            className="bg-transparent border-none outline-none text-white w-full h-5 text-sm font-normal focus:ring-0 placeholder:text-slate-600"
                            placeholder={isCreating.type === 'folder' ? 'Folder name' : 'filename.java'}
                        />
                    </div>
                )}
                {renderTree(tree)}
            </div>
        </div>
    );
};

export default FileExplorer;
