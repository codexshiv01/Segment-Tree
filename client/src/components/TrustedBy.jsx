import React from 'react';

const companies = [
    { name: 'Google', domain: 'google.com' },
    { name: 'Meta', domain: 'meta.com' },
    { name: 'Amazon', domain: 'amazon.com' },
    { name: 'Netflix', domain: 'netflix.com' },
    { name: 'Microsoft', domain: 'microsoft.com' },
    { name: 'Uber', domain: 'uber.com' },
    { name: 'Airbnb', domain: 'airbnb.com' },
];

const TrustedBy = () => {
    return (
        <div className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <p className="text-center text-sm font-bold text-slate-600 uppercase tracking-widest mb-12">
                    Trusted by engineers at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
                    {companies.map((company) => (
                        <div key={company.name} className="group relative">
                            <img
                                src={`https://logo.clearbit.com/${company.domain}`}
                                alt={`${company.name} Logo`}
                                className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
