import pool from '../config/database.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigration() {
    try {
        console.log('🚀 Running database migrations...');

        const files = await fs.readdir(__dirname);
        const sqlFiles = files.filter(f => f.endsWith('.sql')).sort();

        for (const file of sqlFiles) {
            console.log(`Executing migration: ${file}`);
            const migrationPath = join(__dirname, file);
            const sql = await fs.readFile(migrationPath, 'utf8');
            await pool.query(sql);
        }

        console.log('✅ Migrations completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

runMigration();
