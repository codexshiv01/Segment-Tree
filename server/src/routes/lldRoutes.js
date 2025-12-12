import express from 'express';
import { evaluateLld } from '../controllers/lldController.js';

const router = express.Router();

router.post('/evaluate', evaluateLld);

export default router;
