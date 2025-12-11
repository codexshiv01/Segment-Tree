import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Camera, AlertCircle, Shield, Monitor, FileText, ArrowRight } from 'lucide-react';

const AssessmentInstructions = ({ assessment, onStart, onEnableCamera, stream, cameraError }) => {
    const [agreed, setAgreed] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    const isReady = agreed && stream;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Instructions */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">{assessment.title}</h1>
                        <p className="text-slate-600">Please read the instructions carefully before starting.</p>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto pr-2 max-h-[500px]">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                <Monitor size={20} className="text-blue-600" />
                                Environment Rules
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm ml-1">
                                <li>The assessment will run in <strong>Full Screen</strong> mode.</li>
                                <li>Exiting full screen may be recorded as a violation.</li>
                                <li>Do not switch tabs or windows during the test.</li>
                                <li>Ensure you have a stable internet connection.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                <Shield size={20} className="text-blue-600" />
                                Proctoring & Privacy
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm ml-1">
                                <li><strong>Webcam access is mandatory</strong> for this assessment.</li>
                                <li>Your video feed will be monitored for proctoring purposes.</li>
                                <li>Ensure your face is clearly visible within the frame.</li>
                                <li>No other person should be present in the room.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                <FileText size={20} className="text-blue-600" />
                                Assessment Format
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm ml-1">
                                <li><strong>Duration:</strong> {assessment.duration} minutes.</li>
                                <li><strong>Problems:</strong> {assessment.problems.length} coding problems.</li>
                                <li>You can solve problems in any order.</li>
                                <li>Click "Submit Assessment" to finish early.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 hover:border-blue-400"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <CheckCircle size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                            </div>
                            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors select-none">
                                I have read and understood the instructions. I agree to the proctoring terms and environment rules.
                            </span>
                        </label>
                    </div>
                </div>

                {/* Right Side: Camera Check & Action */}
                <div className="md:w-2/5 bg-slate-50 p-8 md:p-10 flex flex-col border-l border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Camera size={20} className="text-blue-600" />
                        System Check
                    </h3>

                    <div className="flex-1 flex flex-col gap-6">
                        {/* Camera Preview Box */}
                        <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden border-2 border-slate-300 flex items-center justify-center shadow-inner">
                            {stream ? (
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
                                />
                            ) : (
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Camera size={24} className="text-slate-500" />
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium">Camera feed inactive</p>
                                </div>
                            )}

                            {/* Status Badge */}
                            <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-sm ${stream ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                                }`}>
                                <div className={`w-2 h-2 rounded-full ${stream ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
                                {stream ? 'Camera Active' : 'Camera Off'}
                            </div>
                        </div>

                        {/* Camera Error Message */}
                        {cameraError && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                                <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                                <p className="text-xs text-red-700">{cameraError}</p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-auto space-y-3">
                            {!stream ? (
                                <button
                                    onClick={onEnableCamera}
                                    className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Camera size={18} />
                                    Enable Camera
                                </button>
                            ) : (
                                <div className="flex items-center justify-center gap-2 text-green-600 font-medium py-2 bg-green-50 rounded-xl border border-green-200">
                                    <CheckCircle size={18} />
                                    System Ready
                                </div>
                            )}

                            <button
                                onClick={onStart}
                                disabled={!isReady}
                                className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                Start Assessment
                                <ArrowRight size={18} />
                            </button>

                            {!isReady && (
                                <p className="text-xs text-center text-slate-400">
                                    {!stream ? "Enable camera to proceed" : "Accept instructions to proceed"}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentInstructions;
