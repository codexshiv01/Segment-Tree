import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import {
    Database, Server, Smartphone, Activity, Layers, Radio,
    HardDrive, Globe, Shield, Cloud, Search, Bell, Cpu,
    Share2, FileJson, Box
} from 'lucide-react';

const BaseNode = ({ data, icon: Icon, color, label }) => (
    <div className={`px-4 py-3 shadow-lg rounded-lg border-2 bg-white min-w-[150px] transition-all hover:shadow-xl ${color}`}>
        <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-slate-400" />
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md ${color.replace('border-', 'bg-').replace('200', '50')} text-slate-700`}>
                <Icon size={20} />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{label}</span>
                <span className="text-sm font-medium text-slate-900">{data.label}</span>
            </div>
        </div>
        <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-slate-400" />
    </div>
);

export const DatabaseNode = memo((props) => <BaseNode {...props} icon={Database} color="border-blue-200" label="Database" />);
export const ServerNode = memo((props) => <BaseNode {...props} icon={Server} color="border-green-200" label="Server" />);
export const ClientNode = memo((props) => <BaseNode {...props} icon={Smartphone} color="border-slate-200" label="Client" />);
export const LoadBalancerNode = memo((props) => <BaseNode {...props} icon={Activity} color="border-purple-200" label="Load Balancer" />);
export const CacheNode = memo((props) => <BaseNode {...props} icon={Layers} color="border-yellow-200" label="Cache" />);
export const QueueNode = memo((props) => <BaseNode {...props} icon={Radio} color="border-pink-200" label="Queue" />);
export const StorageNode = memo((props) => <BaseNode {...props} icon={HardDrive} color="border-indigo-200" label="Storage" />);
export const CDNNode = memo((props) => <BaseNode {...props} icon={Globe} color="border-orange-200" label="CDN" />);
export const FirewallNode = memo((props) => <BaseNode {...props} icon={Shield} color="border-red-200" label="Firewall" />);
export const APIGatewayNode = memo((props) => <BaseNode {...props} icon={Cloud} color="border-cyan-200" label="API Gateway" />);

// New Components
export const DNSNode = memo((props) => <BaseNode {...props} icon={Globe} color="border-sky-200" label="DNS" />);
export const PubSubNode = memo((props) => <BaseNode {...props} icon={Share2} color="border-fuchsia-200" label="Pub/Sub" />);
export const WorkerNode = memo((props) => <BaseNode {...props} icon={Cpu} color="border-lime-200" label="Worker" />);
export const MicroserviceNode = memo((props) => <BaseNode {...props} icon={Box} color="border-emerald-200" label="Microservice" />);
export const SearchNode = memo((props) => <BaseNode {...props} icon={Search} color="border-teal-200" label="Search Engine" />);
export const NotificationNode = memo((props) => <BaseNode {...props} icon={Bell} color="border-rose-200" label="Notification" />);
export const BlobStorageNode = memo((props) => <BaseNode {...props} icon={FileJson} color="border-violet-200" label="Blob Storage" />);

// Specific Tech Components
export const RedisNode = memo((props) => <BaseNode {...props} icon={Layers} color="border-red-200" label="Redis" />);
export const KafkaNode = memo((props) => <BaseNode {...props} icon={Share2} color="border-slate-400" label="Kafka" />);
export const RabbitMQNode = memo((props) => <BaseNode {...props} icon={Radio} color="border-orange-200" label="RabbitMQ" />);
export const PostgresNode = memo((props) => <BaseNode {...props} icon={Database} color="border-blue-300" label="PostgreSQL" />);
export const MongoNode = memo((props) => <BaseNode {...props} icon={Database} color="border-green-300" label="MongoDB" />);
export const S3Node = memo((props) => <BaseNode {...props} icon={HardDrive} color="border-yellow-200" label="S3 Storage" />);
export const K8sNode = memo((props) => <BaseNode {...props} icon={Box} color="border-blue-500" label="Kubernetes" />);
export const NginxNode = memo((props) => <BaseNode {...props} icon={Server} color="border-emerald-400" label="Nginx" />);

const CustomNodes = {
    DatabaseNode,
    ServerNode,
    ClientNode,
    LoadBalancerNode,
    CacheNode,
    QueueNode,
    StorageNode,
    CDNNode,
    FirewallNode,
    APIGatewayNode,
    DNSNode,
    PubSubNode,
    WorkerNode,
    MicroserviceNode,
    SearchNode,
    NotificationNode,
    BlobStorageNode,
    RedisNode,
    KafkaNode,
    RabbitMQNode,
    PostgresNode,
    MongoNode,
    S3Node,
    K8sNode,
    NginxNode
};

export default CustomNodes;
