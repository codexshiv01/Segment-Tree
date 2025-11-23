import React from 'react';

const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "500+", label: "System Design Problems" },
    { value: "50+", label: "Top Companies Hired" },
    { value: "24/7", label: "AI Interview Availability" }
];

const Stats = () => {
    return (
        <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-slate-900 to-slate-900" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
