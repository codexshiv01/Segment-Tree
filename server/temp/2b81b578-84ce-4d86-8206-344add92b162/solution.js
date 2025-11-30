/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    // Write your code here
    
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const n = parseInt(input[0]);
const intervals = [];
for(let i=1; i<=n; i++) {
    intervals.push(input[i].trim().split(' ').map(Number));
}
const result = merge(intervals);
console.log(JSON.stringify(result));
