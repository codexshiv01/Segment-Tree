const fs = require('fs');
const path = require('path');

const files = [
    '../src/data/companies/quadeye.js',
    '../src/data/companies/optiver.js',
    '../src/data/companies/tower_research.js'
];

files.forEach(file => {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    console.log(`--- ${file} ---`);
    const lines = content.split('\n');
    lines.forEach(line => {
        if (line.includes('Input Format') || line.includes('Output Format') || line.includes('Constraints')) {
            console.log(JSON.stringify(line));
        }
    });
});
