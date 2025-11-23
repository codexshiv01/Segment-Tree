import React from 'react';
import {
    Database, Server, Smartphone, Globe, Layers, HardDrive, Cloud, Shield, Radio,
    Activity, Plus, Search, Bell, Cpu, Share2, FileJson, Box
} from 'lucide-react';

const TopComponentBar = ({ onAddCustomNode }) => {
    const onDragStart = (event, nodeType, label) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/label', label);
        event.dataTransfer.effectAllowed = 'move';
    };

    const components = [
        { type: 'client', label: 'Client', icon: Smartphone },
        { type: 'dns', label: 'DNS', icon: Globe },
        { type: 'cdn', label: 'CDN', icon: Globe },
        { type: 'loadBalancer', label: 'Load Balancer', icon: Activity },
        { type: 'apiGateway', label: 'API Gateway', icon: Cloud },
        { type: 'nginx', label: 'Nginx', icon: Server },
        { type: 'server', label: 'Server', icon: Server },
        { type: 'microservice', label: 'Microservice', icon: Box },
        { type: 'k8s', label: 'K8s', icon: Box },
        { type: 'worker', label: 'Worker', icon: Cpu },
        { type: 'database', label: 'Database', icon: Database },
        { type: 'postgres', label: 'PostgreSQL', icon: Database },
        { type: 'mongo', label: 'MongoDB', icon: Database },
        { type: 'cache', label: 'Cache', icon: Layers },
        { type: 'redis', label: 'Redis', icon: Layers },
        { type: 'queue', label: 'Queue', icon: Radio },
        { type: 'rabbitmq', label: 'RabbitMQ', icon: Radio },
        { type: 'kafka', label: 'Kafka', icon: Share2 },
        { type: 'pubsub', label: 'Pub/Sub', icon: Share2 },
        { type: 'storage', label: 'Storage', icon: HardDrive },
        { type: 's3', label: 'S3', icon: HardDrive },
        { type: 'blobStorage', label: 'Blob Storage', icon: FileJson },
        { type: 'search', label: 'Search', icon: Search },
        { type: 'notification', label: 'Notification', icon: Bell },
        { type: 'firewall', label: 'Firewall', icon: Shield },
    ];

    return (
        <div className="h-20 bg-white border-b border-slate-200 flex items-center px-4 shadow-sm z-20">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-2 flex-1 mr-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {components.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center min-w-[72px] h-[60px] rounded-xl hover:bg-slate-50 cursor-grab active:cursor-grabbing border border-transparent hover:border-slate-200 transition-all group select-none"
                        onDragStart={(event) => onDragStart(event, item.type, item.label)}
                        draggable
                        title={item.label}
                    >
                        <item.icon size={20} className="text-slate-500 group-hover:text-primary mb-1.5 transition-colors" />
                        <span className="text-[10px] font-medium text-slate-600 group-hover:text-slate-900 leading-none text-center px-1">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="w-px h-10 bg-slate-200 mx-2" />

            {/* Custom Node Button */}
            <button
                onClick={onAddCustomNode}
                className="flex flex-col items-center justify-center min-w-[72px] h-[60px] rounded-xl hover:bg-primary/5 cursor-pointer border border-dashed border-slate-300 hover:border-primary transition-all group"
                title="Add Custom Component"
            >
                <Plus size={20} className="text-slate-400 group-hover:text-primary mb-1.5" />
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-primary leading-none">Custom</span>
            </button>
        </div>
    );
};

export default TopComponentBar;
