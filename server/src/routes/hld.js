import express from 'express';
import { getProblems, getProblemBySlug, evaluateDesign, getComments, addComment, getDiscussions, createDiscussion, getDiscussionById } from '../controllers/hldController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Protected routes
router.post('/evaluate', authenticateToken, evaluateDesign);
router.post('/problems/:slug/comments', authenticateToken, addComment);
router.post('/problems/:slug/discussions', authenticateToken, createDiscussion);

// Public routes (or protected if you prefer)
router.get('/problems', getProblems);
router.get('/problems/:slug', getProblemBySlug);
router.get('/problems/:slug/comments', getComments);
router.get('/problems/:slug/discussions', getDiscussions);
router.get('/discussions/:id', getDiscussionById);

export default router;
