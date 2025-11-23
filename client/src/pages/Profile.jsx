import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Github, Linkedin, Globe, Calendar, Trophy, Target, Flame } from 'lucide-react';
import APIService from '../services/api';
import ActivityHeatmap from '../components/ActivityHeatmap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProfile();
    }, [id]);

    const loadProfile = async () => {
        try {
            const [userData, activityData] = await Promise.all([
                APIService.getUserById(id),
                APIService.getUserActivity(id)
            ]);

            if (userData.user) setUser(userData.user);
            if (activityData.activity) setActivity(activityData.activity);
        } catch (error) {
            console.error('Failed to load profile:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                    <div className="text-slate-900 text-xl">Loading profile...</div>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                    <div className="text-slate-900 text-xl">User not found</div>
                </div>
            </div>
        );
    }

    const stats = [
        { label: 'Problems Solved', value: user.problems_solved || 0, icon: Target, color: 'text-green-500' },
        { label: 'Easy', value: user.easy_solved || 0, icon: Trophy, color: 'text-blue-500' },
        { label: 'Medium', value: user.medium_solved || 0, icon: Trophy, color: 'text-yellow-500' },
        { label: 'Hard', value: user.hard_solved || 0, icon: Trophy, color: 'text-red-500' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    {user.avatar_url ? (
                                        <img src={user.avatar_url} alt={user.username} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">{user.username[0].toUpperCase()}</span>
                                    )}
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg">
                                #{user.ranking || '???'}
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">{user.full_name || user.username}</h1>
                            <p className="text-slate-600 text-lg mb-4">@{user.username}</p>

                            {user.bio && (
                                <p className="text-slate-700 mb-4 max-w-2xl">{user.bio}</p>
                            )}

                            {/* Skills */}
                            {user.skills && user.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Social Links */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                {user.github_url && (
                                    <a href={user.github_url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                        <Github size={20} />
                                    </a>
                                )}
                                {user.linkedin_url && (
                                    <a href={user.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {user.website_url && (
                                    <a href={user.website_url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                        <Globe size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Stats Card */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Flame className="text-orange-500" />
                                Statistics
                            </h3>
                            <div className="space-y-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <stat.icon size={18} className={stat.color} />
                                            <span className="text-slate-700 text-sm">{stat.label}</span>
                                        </div>
                                        <span className="text-slate-900 font-bold text-lg">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Joined Date */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                <Calendar size={16} />
                                <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Activity */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Activity Heatmap */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Activity Contribution</h3>
                            <ActivityHeatmap activity={activity} />
                        </div>

                        {/* Recent Activity Placeholder */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Submissions</h3>
                            <div className="text-center py-12 text-slate-500">
                                <p>No recent submissions</p>
                                <p className="text-sm mt-2">Start solving problems to see your progress here!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Profile;
