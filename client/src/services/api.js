const API_URL = 'http://localhost:5000/api';

class APIService {
    static async register(userData) {
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }
            return data;
        } catch (error) {
            console.error('API register error:', error);
            throw error;
        }
    }

    static async login(credentials) {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }
            return data;
        } catch (error) {
            console.error('API login error:', error);
            throw error;
        }
    }

    static async getProfile(token) {
        const response = await fetch(`${API_URL}/auth/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await response.json();
    }

    static async getUserById(userId) {
        const response = await fetch(`${API_URL}/users/${userId}`);
        return await response.json();
    }

    static async updateProfile(userId, token, updates) {
        const response = await fetch(`${API_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updates)
        });
        return await response.json();
    }

    static async getUserActivity(userId, days = 365) {
        const response = await fetch(`${API_URL}/users/${userId}/activity?days=${days}`);
        return await response.json();
    }

    // HLD Methods
    static async getHldProblems() {
        const response = await fetch(`${API_URL}/hld/problems`);
        return await response.json();
    }

    static async getHldProblem(slug) {
        const response = await fetch(`${API_URL}/hld/problems/${slug}`);
        return await response.json();
    }

    static async evaluateDesign(token, data) {
        const response = await fetch(`${API_URL}/hld/evaluate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    static async getHldComments(slug) {
        const response = await fetch(`${API_URL}/hld/problems/${slug}/comments`);
        return await response.json();
    }

    static async addHldComment(slug, token, content) {
        const response = await fetch(`${API_URL}/hld/problems/${slug}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ content })
        });
        return await response.json();
    }

    static async getHldDiscussions(slug) {
        const response = await fetch(`${API_URL}/hld/problems/${slug}/discussions`);
        return await response.json();
    }

    static async createHldDiscussion(slug, token, { title, content }) {
        const response = await fetch(`${API_URL}/hld/problems/${slug}/discussions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, content })
        });
        return await response.json();
    }

    static async getHldDiscussionById(id) {
        const response = await fetch(`${API_URL}/hld/discussions/${id}`);
        return await response.json();
    }
}

export default APIService;
