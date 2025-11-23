import express from 'express';
import { getUserProfile, updateUserProfile, getUserActivity } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', getUserProfile);
router.put('/:id', authenticateToken, updateUserProfile);
router.get('/:id/activity', getUserActivity);

export default router;
