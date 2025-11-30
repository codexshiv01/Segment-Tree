#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Step 1: Sort intervals by start time
        sort(intervals.begin(), intervals.end());

        vector<vector<int>> merged;

        for (auto &interval : intervals) {
            // If merged is empty OR no overlap --> push new interval
            if (merged.empty() || merged.back()[1] < interval[0]) {
                merged.push_back(interval);
            }
            else {
                // Overlap: merge by updating the end time
                merged.back()[1] = max(merged.back()[1], interval[1]);
            }
        }

        return merged;
    }
};


const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);
const intervals = [];
for(let i=1; i<=n; i++) {
    intervals.push(input[i].trim().split(' ').map(Number));
}
const result = merge(intervals);
console.log(JSON.stringify(result));
