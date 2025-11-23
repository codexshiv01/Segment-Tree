import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Get user profile error:', error);
        res.status(500).json({ error: 'Server error fetching user profile' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure user can only update their own profile
        if (req.userId !== parseInt(id)) {
            return res.status(403).json({ error: 'Forbidden: Cannot update another user\'s profile' });
        }

        const updatedUser = await User.updateProfile(id, req.body);
        res.json({ user: updatedUser });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ error: 'Server error updating profile' });
    }
};

export const getUserActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const days = req.query.days || 365;

        const activity = await User.getActivityHeatmap(id, days);
        res.json({ activity });
    } catch (error) {
        console.error('Get activity error:', error);
        res.status(500).json({ error: 'Server error fetching activity' });
    }
};
