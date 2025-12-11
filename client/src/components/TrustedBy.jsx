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
        <div className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {companies.map((company) => (
                    <div key={company.name} className="bg-white/90 p-4 rounded-xl shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 transform cursor-default">
                        <img
                            src={`https://logo.clearbit.com/${company.domain}`}
                            alt={`${company.name} Logo`}
                            className="h-6 md:h-8 w-auto object-contain"
                            onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=random`
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedBy;
