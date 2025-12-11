/**
 * @param {number[]} timestamps
 * @param {number[]} durations
 * @return {number[][]}
 */
function mergeSubtitles(timestamps, durations) {
    // Your code here
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const timestamps = lines[1].split(' ').map(Number);
    const durations = lines[2].split(' ').map(Number);
    console.log(JSON.stringify(mergeSubtitles(timestamps, durations)));
});