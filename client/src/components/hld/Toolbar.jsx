import React from 'react';
import { Download, Layout } from 'lucide-react';

const Toolbar = ({ onExport, onAutoLayout }) => {
    return (
        <div className="absolute top-4 right-4 bg-white p-1.5 rounded-lg shadow-md border border-slate-200 flex flex-col gap-2 z-10">
            <button
                onClick={onAutoLayout}
                className="p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md transition-all group relative"
                title="Auto Layout"
            >
                <Layout size={20} />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Auto Layout
                </span>
            </button>

            <button
                onClick={onExport}
                className="p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md transition-all group relative"
                title="Export Image"
            >
                <Download size={20} />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Export
                </span>
            </button>
        </div>
    );
};

export default Toolbar;
