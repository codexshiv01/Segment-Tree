import pool from '../config/database.js';
import bcrypt from 'bcrypt';

class User {
    static async create({ email, password, username, fullName }) {
        const passwordHash = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (email, password_hash, username, full_name) 
             VALUES ($1, $2, $3, $4) 
             RETURNING id, email, username, full_name, created_at`,
            [email, passwordHash, username, fullName]
        );

        return result.rows[0];
    }

    static async findByEmail(email) {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query(
            'SELECT id, email, username, full_name, avatar_url, bio, skills, github_url, linkedin_url, website_url, problems_solved, easy_solved, medium_solved, hard_solved, ranking, created_at FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async verifyPassword(password, passwordHash) {
        return await bcrypt.compare(password, passwordHash);
    }

    static async updateProfile(id, updates) {
        const { fullName, bio, skills, githubUrl, linkedinUrl, websiteUrl, avatarUrl } = updates;

        const result = await pool.query(
            `UPDATE users 
             SET full_name = COALESCE($2, full_name),
                 bio = COALESCE($3, bio),
                 skills = COALESCE($4, skills),
                 github_url = COALESCE($5, github_url),
                 linkedin_url = COALESCE($6, linkedin_url),
                 website_url = COALESCE($7, website_url),
                 avatar_url = COALESCE($8, avatar_url),
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $1
             RETURNING id, email, username, full_name, avatar_url, bio, skills, github_url, linkedin_url, website_url`,
            [id, fullName, bio, skills, githubUrl, linkedinUrl, websiteUrl, avatarUrl]
        );

        return result.rows[0];
    }

    static async getActivityHeatmap(userId, days = 365) {
        const result = await pool.query(
            `SELECT activity_date, problems_count 
             FROM user_activity 
             WHERE user_id = $1 
             AND activity_date >= CURRENT_DATE - INTERVAL '${days} days'
             ORDER BY activity_date ASC`,
            [userId]
        );
        return result.rows;
    }

    static async recordActivity(userId, problemCount = 1) {
        const today = new Date().toISOString().split('T')[0];

        const result = await pool.query(
            `INSERT INTO user_activity (user_id, activity_date, problems_count)
             VALUES ($1, $2, $3)
             ON CONFLICT (user_id, activity_date)
             DO UPDATE SET problems_count = user_activity.problems_count + $3
             RETURNING *`,
            [userId, today, problemCount]
        );

        return result.rows[0];
    }
}

export default User;
