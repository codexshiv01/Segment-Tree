import express from 'express';
import { getCompanies, getAssessment, runCode } from '../controllers/dsaController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/companies', getCompanies);
router.get('/assessments/:id', getAssessment);
router.post('/run', runCode); // Allow anyone to run code for practice

export default router;
