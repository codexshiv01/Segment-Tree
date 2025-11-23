import pool from '../config/database.js';

class HldProblem {
    static async create({ title, slug, description, difficulty, companies, functional_requirements, non_functional_requirements, expected_components }) {
        const query = `
            INSERT INTO hld_problems (title, slug, description, difficulty, companies, functional_requirements, non_functional_requirements, expected_components)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
        `;
        const values = [title, slug, description, difficulty, companies, functional_requirements, non_functional_requirements, expected_components];
        const { rows } = await pool.query(query, values);
        return rows[0];
    }

    static async findAll() {
        const query = 'SELECT id, title, slug, description, difficulty, companies FROM hld_problems ORDER BY id ASC';
        const { rows } = await pool.query(query);
        return rows;
    }

    static async findBySlug(slug) {
        const query = 'SELECT * FROM hld_problems WHERE slug = $1';
        const { rows } = await pool.query(query, [slug]);
        return rows[0];
    }

    static async findById(id) {
        const query = 'SELECT * FROM hld_problems WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }

    static async seed(problems) {
        for (const problem of problems) {
            const existing = await this.findBySlug(problem.slug);
            if (!existing) {
                await this.create(problem);
                console.log(`Seeded HLD problem: ${problem.title}`);
            }
        }
    }

    static async getComments(slug) {
        const query = `
            SELECT c.*, u.name as user_name, u.email as user_email
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.problem_slug = $1
            ORDER BY c.created_at DESC
        `;
        const { rows } = await pool.query(query, [slug]);
        return rows;
    }

    static async addComment({ problemSlug, userId, content }) {
        const query = `
            INSERT INTO comments (problem_slug, user_id, content)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const { rows } = await pool.query(query, [problemSlug, userId, content]);

        const newComment = rows[0];
        const userQuery = 'SELECT name, email FROM users WHERE id = $1';
        const userResult = await pool.query(userQuery, [userId]);

        return {
            ...newComment,
            user_name: userResult.rows[0].name,
            user_email: userResult.rows[0].email
        };
    }

    static async getDiscussions(slug) {
        const query = `
            SELECT d.*, u.name as user_name, u.email as user_email,
            (SELECT COUNT(*) FROM comments c WHERE c.problem_slug = d.id::text) as reply_count
            FROM hld_discussions d
            JOIN users u ON d.user_id = u.id
            WHERE d.problem_slug = $1
            ORDER BY d.created_at DESC
        `;
        const { rows } = await pool.query(query, [slug]);
        return rows;
    }

    static async createDiscussion({ problemSlug, userId, title, content }) {
        const query = `
            INSERT INTO hld_discussions (problem_slug, user_id, title, content)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const { rows } = await pool.query(query, [problemSlug, userId, title, content]);

        const newDiscussion = rows[0];
        const userQuery = 'SELECT name, email FROM users WHERE id = $1';
        const userResult = await pool.query(userQuery, [userId]);

        return {
            ...newDiscussion,
            user_name: userResult.rows[0].name,
            user_email: userResult.rows[0].email
        };
    }

    static async getDiscussionById(id) {
        const query = `
            SELECT d.*, u.name as user_name, u.email as user_email
            FROM hld_discussions d
            JOIN users u ON d.user_id = u.id
            WHERE d.id = $1
        `;
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
}

export default HldProblem;
