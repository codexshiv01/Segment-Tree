import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Code, Calendar, Trophy, ArrowRight } from 'lucide-react';

const AssessmentSubmitted = () => {
    const navigate = useNavigate();
    const [submissionData, setSubmissionData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('lastSubmission');
        if (data) {
            setSubmissionData(JSON.parse(data));
        } else {
            // Redirect if no submission data
            navigate('/dsa');
        }
    }, [navigate]);

    if (!submissionData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading...</p>
                </div>
            </div>
        );
    }

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}h ${mins}m ${secs}s`;
        }
        return `${mins}m ${secs}s`;
    };

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                {/* Success Animation */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
                        <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">Assessment Submitted!</h1>
                    <p className="text-lg text-slate-600">
                        {submissionData.isAutoSubmit
                            ? 'Your assessment was automatically submitted when the time expired.'
                            : 'Thank you for completing the assessment.'}
                    </p>
                </div>

                {/* Submission Details Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-4">
                        Submission Details
                    </h2>

                    <div className="space-y-6">
                        {/* Assessment Title */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Code size={24} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                                    Assessment
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    {submissionData.assessmentTitle}
                                </div>
                            </div>
                        </div>

                        {/* Problems Solved */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Trophy size={24} className="text-indigo-600" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                                    Problems Solved
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    {submissionData.solvedProblems} out of {submissionData.totalProblems}
                                </div>
                                {/* Progress Bar */}
                                <div className="mt-2 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${(submissionData.solvedProblems / submissionData.totalProblems) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submission Time */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar size={24} className="text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                                    Submitted On
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    {formatDate(submissionData.timestamp)}
                                </div>
                            </div>
                        </div>

                        {/* Time Taken */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock size={24} className="text-green-600" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                                    Time Taken
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    {formatTime(submissionData.timeTaken)}
                                    <span className="text-sm text-slate-500 font-normal ml-2">
                                        (out of {formatTime(submissionData.totalTime)})
                                    </span>
                                </div>
                                {/* Progress Bar */}
                                <div className="mt-2 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-green-500 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${(submissionData.timeTaken / submissionData.totalTime) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    {submissionData.isAutoSubmit && (
                        <div className="mt-6 pt-6 border-t-2 border-slate-200">
                            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                                <p className="text-yellow-800 font-medium text-sm">
                                    ⏱️ This assessment was automatically submitted because the timer expired.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* What's Next Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">What's Next?</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Your submission has been recorded and will be reviewed</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Results will be available in your dashboard within 24-48 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span>You'll receive an email notification once results are ready</span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/dsa')}
                        className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                        Back to Dashboard
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Footer Note */}
                <p className="text-center text-slate-500 text-sm mt-6">
                    Submission ID: {submissionData.assessmentId || 'N/A'}
                </p>
            </div>
        </div>
    );
};

export default AssessmentSubmitted;
