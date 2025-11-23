import React, { useState } from 'react';
import { Database, Server, Smartphone, Globe, Layers, HardDrive, Cloud, Shield, Radio, Activity, Search } from 'lucide-react';

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onDragStart = (event, nodeType, label) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/label', label);
        event.dataTransfer.effectAllowed = 'move';
    };

    const categories = [
        {
            title: "Compute",
            items: [
                { type: 'server', label: 'App Server', icon: Server },
                { type: 'server', label: 'Microservice', icon: Server },
                { type: 'server', label: 'Worker', icon: Server },
            ]
        },
        {
            title: "Storage",
            items: [
                { type: 'database', label: 'SQL DB', icon: Database },
                { type: 'database', label: 'NoSQL DB', icon: Database },
                { type: 'cache', label: 'Redis Cache', icon: Layers },
                { type: 'storage', label: 'S3 Storage', icon: HardDrive },
            ]
        },
        {
            title: "Networking",
            items: [
                { type: 'loadBalancer', label: 'Load Balancer', icon: Activity },
                { type: 'apiGateway', label: 'API Gateway', icon: Cloud },
                { type: 'cdn', label: 'CDN', icon: Globe },
                { type: 'firewall', label: 'Firewall', icon: Shield },
            ]
        },
        {
            title: "Messaging",
            items: [
                { type: 'queue', label: 'Kafka Queue', icon: Radio },
                { type: 'queue', label: 'RabbitMQ', icon: Radio },
            ]
        },
        {
            title: "Client",
            items: [
                { type: 'client', label: 'Mobile App', icon: Smartphone },
                { type: 'client', label: 'Web Browser', icon: Globe },
            ]
        }
    ];

    const filteredCategories = categories.map(cat => ({
        ...cat,
        items: cat.items.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
            <div className="p-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-2">Components</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search components..."
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {filteredCategories.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{category.title}</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {category.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-lg cursor-grab hover:bg-white hover:shadow-md hover:border-primary/30 transition-all group"
                                    onDragStart={(event) => onDragStart(event, item.type, item.label)}
                                    draggable
                                >
                                    <item.icon size={20} className="text-slate-600 group-hover:text-primary mb-2 transition-colors" />
                                    <span className="text-xs font-medium text-slate-700 text-center">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
