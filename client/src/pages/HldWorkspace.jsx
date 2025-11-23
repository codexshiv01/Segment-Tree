import React, { useState, useCallback, useEffect, useRef } from 'react';
import APIService from '../services/api';
import html2canvas from 'html2canvas';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Menu, Play, Save, Info, PanelLeftClose, PanelLeftOpen, GripVertical } from 'lucide-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import CustomNodes from '../components/hld/CustomNodes';
import TopComponentBar from '../components/hld/TopComponentBar';
import Toolbar from '../components/hld/Toolbar';

const nodeTypes = {
    database: CustomNodes.DatabaseNode,
    server: CustomNodes.ServerNode,
    client: CustomNodes.ClientNode,
    loadBalancer: CustomNodes.LoadBalancerNode,
    cache: CustomNodes.CacheNode,
    queue: CustomNodes.QueueNode,
    storage: CustomNodes.StorageNode,
    cdn: CustomNodes.CDNNode,
    firewall: CustomNodes.FirewallNode,
    apiGateway: CustomNodes.APIGatewayNode,
    dns: CustomNodes.DNSNode,
    pubsub: CustomNodes.PubSubNode,
    worker: CustomNodes.WorkerNode,
    microservice: CustomNodes.MicroserviceNode,
    search: CustomNodes.SearchNode,
    notification: CustomNodes.NotificationNode,
    blobStorage: CustomNodes.BlobStorageNode,
    redis: CustomNodes.RedisNode,
    kafka: CustomNodes.KafkaNode,
    rabbitmq: CustomNodes.RabbitMQNode,
    postgres: CustomNodes.PostgresNode,
    mongo: CustomNodes.MongoNode,
    s3: CustomNodes.S3Node,
    k8s: CustomNodes.K8sNode,
    nginx: CustomNodes.NginxNode,
    custom: CustomNodes.ServerNode, // Reusing ServerNode style for custom for now
};

const ResizeHandle = ({ className = "" }) => (
    <PanelResizeHandle className={`w-1.5 bg-slate-100 hover:bg-blue-500 transition-colors flex items-center justify-center group z-50 cursor-col-resize border-x border-slate-200 ${className}`}>
        <div className="h-8 w-0.5 bg-slate-300 rounded-full group-hover:bg-white transition-colors" />
    </PanelResizeHandle>
);

const HldWorkspace = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [problem, setProblem] = useState(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [calculations, setCalculations] = useState('');
    const [explanation, setExplanation] = useState('');
    const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const data = await APIService.getHldProblem(slug);
                setProblem(data);
            } catch (error) {
                console.error('Failed to fetch problem:', error);
            }
        };
        fetchProblem();
    }, [slug]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            const label = event.dataTransfer.getData('application/label');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode = {
                id: `${type}-${nodes.length + 1}`,
                type,
                position,
                data: { label: label || `${type} node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, nodes]
    );

    const handleAddCustomNode = () => {
        const name = prompt("Enter component name:");
        if (name) {
            const newNode = {
                id: `custom-${nodes.length + 1}`,
                type: 'server', // Default to server style
                position: { x: 250, y: 250 },
                data: { label: name },
            };
            setNodes((nds) => nds.concat(newNode));
        }
    };

    const handleRunAnalysis = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please login to get AI feedback');
                return;
            }

            if (nodes.length === 0) {
                alert('Please add some components to your design first');
                return;
            }

            // Capture canvas screenshot for vision model
            let canvasImage = null;
            try {
                const canvasElement = document.querySelector('.react-flow__renderer');
                if (canvasElement) {
                    const canvas = await html2canvas(canvasElement, {
                        backgroundColor: '#f8fafc',
                        scale: 2,
                        logging: false,
                        useCORS: true
                    });
                    canvasImage = canvas.toDataURL('image/png');
                    console.log('Canvas screenshot captured for vision analysis');
                }
            } catch (imgError) {
                console.warn('Could not capture canvas screenshot:', imgError);
            }

            const designData = {
                problemSlug: slug,
                nodes,
                edges,
                calculations,
                explanation,
                canvasImage // Add base64 image
            };

            console.log('Sending design for evaluation...', { ...designData, canvasImage: canvasImage ? 'Image captured' : 'No image' });
            const feedback = await APIService.evaluateDesign(token, designData);

            console.log('AI Feedback received:', feedback);

            // Navigate to feedback page with results
            navigate(`/hld/${slug}/feedback`, {
                state: { feedback, problemSlug: slug }
            });
        } catch (error) {
            console.error('Analysis error:', error);
            if (error.message.includes('token') || error.message.includes('auth') || error.message.includes('401') || error.message.includes('403')) {
                alert('Your session has expired. Please login again.');
                // User requested to keep token in local storage
                // localStorage.removeItem('token');
                // localStorage.removeItem('user');
                navigate('/login');
            } else {
                alert(`Failed to get AI feedback: ${error.message}`);
            }
        }
    };

    return (
        <div className="h-screen flex bg-slate-50 overflow-hidden">
            <PanelGroup direction="horizontal">

                {/* Left Panel - Problem Details */}
                {isLeftPanelOpen && (
                    <>
                        <Panel defaultSize={25} minSize={15} maxSize={40} className="bg-white flex flex-col z-30 shadow-xl h-full">
                            {/* Panel Header */}
                            <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white flex-shrink-0">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <Link to="/hld" className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-md transition-colors" title="Back to Problems">
                                        <ChevronLeft size={20} />
                                    </Link>
                                    <h2 className="font-bold text-slate-800 truncate text-base" title={problem?.title}>
                                        {problem?.title || 'Loading...'}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setIsLeftPanelOpen(false)}
                                    className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                                    title="Collapse Panel"
                                >
                                    <PanelLeftClose size={18} />
                                </button>
                            </div>

                            {/* Panel Content */}
                            <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-slate-200">
                                {problem ? (
                                    <>
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${problem.difficulty === 'Easy' ? 'bg-green-50 text-green-700 border-green-200' :
                                                problem.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                    'bg-red-50 text-red-700 border-red-200'
                                                }`}>
                                                {problem.difficulty}
                                            </span>
                                            {problem.companies && problem.companies.map((company, i) => (
                                                <div key={i} className="relative group/logo" title={company}>
                                                    <img
                                                        src={`https://logo.clearbit.com/${company.toLowerCase().replace(/\s+/g, '')}.com`}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `https://ui-avatars.com/api/?name=${company}&background=random&color=fff&size=16`;
                                                        }}
                                                        alt={company}
                                                        className="w-5 h-5 rounded-full object-contain bg-white border border-slate-200 p-0.5"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="prose prose-sm max-w-none text-slate-600 mb-8">
                                            <p className="leading-relaxed">{problem.description}</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Functional Requirements
                                                </h3>
                                                <ul className="space-y-2">
                                                    {problem.functional_requirements.map((req, i) => (
                                                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                            <span className="text-slate-400 mt-1">•</span>
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Non-Functional Requirements
                                                </h3>
                                                <ul className="space-y-2">
                                                    {problem.non_functional_requirements.map((req, i) => (
                                                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                            <span className="text-slate-400 mt-1">•</span>
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-8 bg-slate-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                                        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                        <div className="h-32 bg-slate-100 rounded w-full mt-8"></div>
                                    </div>
                                )}
                            </div>
                        </Panel>
                        <ResizeHandle />
                    </>
                )}

                {/* Main Workspace Area (Center) */}
                <Panel defaultSize={55} minSize={30} className="flex flex-col min-w-0 h-full relative bg-slate-50">

                    {/* Top Bar Area */}
                    <div className="flex items-center bg-white border-b border-slate-200 z-20 relative">
                        {!isLeftPanelOpen && (
                            <button
                                onClick={() => setIsLeftPanelOpen(true)}
                                className="h-20 w-12 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 border-r border-slate-200 transition-colors"
                                title="Show Problem Details"
                            >
                                <PanelLeftOpen size={24} />
                            </button>
                        )}
                        <div className="flex-1 min-w-0">
                            <TopComponentBar onAddCustomNode={handleAddCustomNode} />
                        </div>
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 h-full relative bg-slate-50" ref={reactFlowInstance}>
                        <Toolbar
                            onStressTest={() => alert('AI Stress Test: Analyzing bottlenecks...')}
                            onExport={() => alert('Exporting design...')}
                            onAutoLayout={() => alert('Auto-layout applied')}
                        />
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <Controls />
                            <MiniMap />
                            <Background variant="dots" gap={12} size={1} />
                        </ReactFlow>
                    </div>
                </Panel>

                <ResizeHandle />

                {/* Right Panel - Analysis Inputs */}
                <Panel defaultSize={20} minSize={15} maxSize={30} className="bg-white flex flex-col z-10 shadow-lg h-full">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Analysis & Math</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
                                Back-of-Envelope Math
                                <Info size={12} className="text-slate-400" />
                            </label>
                            <textarea
                                className="w-full h-40 p-3 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none font-mono bg-slate-50 leading-relaxed"
                                placeholder="e.g., 1M DAU * 10KB = 10GB/day..."
                                value={calculations}
                                onChange={(e) => setCalculations(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2">Design Explanation</label>
                            <textarea
                                className="w-full h-40 p-3 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-slate-50 leading-relaxed"
                                placeholder="Explain your architectural choices..."
                                value={explanation}
                                onChange={(e) => setExplanation(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-100 bg-slate-50">
                        <button
                            onClick={handleRunAnalysis}
                            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            <Play size={16} />
                            Run AI Analysis
                        </button>
                    </div>
                </Panel>
            </PanelGroup>
        </div>
    );
};

export default HldWorkspace;
