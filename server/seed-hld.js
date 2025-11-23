import HldProblem from './src/models/HldProblem.js';
import { hldProblems } from './src/data/hldProblems.js';
import pool from './src/config/database.js';

const seedHldProblems = async () => {
    try {
        console.log('Seeding HLD problems...');
        await HldProblem.seed(hldProblems);
        console.log('Seeding complete!');
    } catch (error) {
        console.error('Seeding error:', error);
    } finally {
        await pool.end();
    }
};

seedHldProblems();
