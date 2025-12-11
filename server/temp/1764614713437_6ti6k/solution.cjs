/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
    // Your code here
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const points = [];
    for(let i=1; i<=n; i++) {
        points.push(lines[i].split(' ').map(Number));
    }
    const k = parseInt(lines[n+1]);
    console.log(JSON.stringify(kClosest(points, k)));
});