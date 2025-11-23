import HldProblem from '../models/HldProblem.js';
import GroqService from '../services/groqService.js';

export const getProblems = async (req, res) => {
    try {
        const problems = await HldProblem.findAll();
        res.json(problems);
    } catch (error) {
        console.error('Get problems error:', error);
        res.status(500).json({ error: 'Server error fetching HLD problems' });
    }
};

export const getProblemBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const problem = await HldProblem.findBySlug(slug);

        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        // Remove expected_components from response to avoid spoilers
        const { expected_components, ...problemData } = problem;
        res.json(problemData);
    } catch (error) {
        console.error('Get problem error:', error);
        res.status(500).json({ error: 'Server error fetching problem details' });
    }
};

export const evaluateDesign = async (req, res) => {
    try {
        const { problemSlug, nodes, edges, calculations, explanation, canvasImage } = req.body;

        if (!problemSlug || !nodes) {
            return res.status(400).json({ error: 'Problem slug and design nodes are required' });
        }

        // Fetch the problem details
        const problem = await HldProblem.findBySlug(problemSlug);

        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        // Prepare user design data
        const userDesign = {
            nodes: nodes || [],
            edges: edges || [],
            calculations: calculations || '',
            explanation: explanation || '',
            canvasImage: canvasImage || null
        };

        // Get AI evaluation from Groq
        const evaluation = await GroqService.evaluateHLDDesign(problem, userDesign);

        res.json(evaluation);
    } catch (error) {
        console.error('HLD Evaluation Error:', error);
        res.status(500).json({
            error: error.message || 'Something went wrong during evaluation',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

export const getComments = async (req, res) => {
    try {
        const { slug } = req.params;
        const comments = await HldProblem.getComments(slug);
        res.json(comments);
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({ error: 'Server error fetching comments' });
    }
};

export const addComment = async (req, res) => {
    try {
        const { slug } = req.params;
        const { content } = req.body;
        const userId = req.user.id;

        if (!content) {
            return res.status(400).json({ error: 'Comment content is required' });
        }

        const comment = await HldProblem.addComment({
            problemSlug: slug,
            userId,
            content
        });

        res.status(201).json(comment);
    } catch (error) {
        console.error('Add comment error:', error);
        res.status(500).json({ error: 'Server error adding comment' });
    }
};

export const getDiscussions = async (req, res) => {
    try {
        const { slug } = req.params;
        const discussions = await HldProblem.getDiscussions(slug);
        res.json(discussions);
    } catch (error) {
        console.error('Get discussions error:', error);
        res.status(500).json({ error: 'Server error fetching discussions' });
    }
};

export const createDiscussion = async (req, res) => {
    try {
        const { slug } = req.params;
        const { title, content } = req.body;
        const userId = req.user.id;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const discussion = await HldProblem.createDiscussion({
            problemSlug: slug,
            userId,
            title,
            content
        });

        res.status(201).json(discussion);
    } catch (error) {
        console.error('Create discussion error:', error);
        res.status(500).json({ error: 'Server error creating discussion' });
    }
};

export const getDiscussionById = async (req, res) => {
    try {
        const { id } = req.params;
        const discussion = await HldProblem.getDiscussionById(id);

        if (!discussion) {
            return res.status(404).json({ error: 'Discussion not found' });
        }

        res.json(discussion);
    } catch (error) {
        console.error('Get discussion error:', error);
        res.status(500).json({ error: 'Server error fetching discussion' });
    }
};
