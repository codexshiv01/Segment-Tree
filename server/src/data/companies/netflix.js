export const netflixData = {
    id: 'netflix',
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
    description: 'Practice real Netflix Online Assessment questions.',
    assessments: [
        {
            id: 'netflix-oa-1',
            title: 'Netflix OA-1',
            duration: 90,
            problems: [
                {
                    id: 'content-delivery-bandwidth',
                    title: 'Streaming Bandwidth Optimizer',
                    difficulty: 'Medium',
                    description: `Netflix's Content Delivery Network (CDN) team needs to optimize bandwidth allocation across multiple servers during peak streaming hours.

You are given an array of 'bandwidthRequests' where each element represents the required bandwidth (in Mbps) for serving a specific show to regional data centers. You also have 'k' edge servers available.

Your task is to distribute the shows across the k servers such that the maximum bandwidth load on any single server is minimized.

Return the minimum possible value of the maximum bandwidth load.

Constraints:
- 1 <= k <= bandwidthRequests.length <= 50
- 1 <= bandwidthRequests[i] <= 10^6`,
                    examples: [
                        {
                            input: 'bandwidthRequests = [7,2,5,10,8], k = 2',
                            output: '18'
                        }
                    ],
                    testCases: [
                        {
                            input: 'bandwidthRequests = [7,2,5,10,8], k = 2',
                            judgeInput: '5\n7 2 5 10 8\n2',
                            output: '18'
                        },
                        {
                            input: 'bandwidthRequests = [1,2,3,4,5], k = 2',
                            judgeInput: '5\n1 2 3 4 5\n2',
                            output: '9'
                        },
                        {
                            input: 'bandwidthRequests = [10,20,30,40], k = 3',
                            judgeInput: '4\n10 20 30 40\n3',
                            output: '50'
                        },
                        {
                            input: 'bandwidthRequests = [5,5,5,5,5], k = 1',
                            judgeInput: '5\n5 5 5 5 5\n1',
                            output: '25'
                        },
                        {
                            input: 'bandwidthRequests = [100,200,300], k = 3',
                            judgeInput: '3\n100 200 300\n3',
                            output: '300'
                        },
                        {
                            input: 'bandwidthRequests = [1,2,3,4,5,6,7,8,9], k = 3',
                            judgeInput: '9\n1 2 3 4 5 6 7 8 9\n3',
                            output: '17'
                        },
                        {
                            input: 'bandwidthRequests = [15,10,20], k = 2',
                            judgeInput: '3\n15 10 20\n2',
                            output: '25'
                        },
                        {
                            input: 'bandwidthRequests = [50,50,50,50], k = 2',
                            judgeInput: '4\n50 50 50 50\n2',
                            output: '100'
                        },
                        {
                            input: 'bandwidthRequests = [1000], k = 1',
                            judgeInput: '1\n1000\n1',
                            output: '1000'
                        },
                        {
                            input: 'bandwidthRequests = [3,6,9,12,15,18], k = 4',
                            judgeInput: '6\n3 6 9 12 15 18\n4',
                            output: '21'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} bandwidthRequests
 * @param {number} k
 * @return {number}
 */
function minimizeMaxBandwidth(bandwidthRequests, k) {
    // Your code here
}`,
                        python: `def minimize_max_bandwidth(bandwidth_requests, k):
    """
    :type bandwidth_requests: List[int]
    :type k: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minimizeMaxBandwidth(vector<int>& bandwidthRequests, int k) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minimizeMaxBandwidth(int[] bandwidthRequests, int k) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const bandwidthRequests = lines[1].split(' ').map(Number);
    const k = parseInt(lines[2]);
    console.log(minimizeMaxBandwidth(bandwidthRequests, k));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
bandwidth_requests = list(map(int, lines[1].split()))
k = int(lines[2])
print(minimize_max_bandwidth(bandwidth_requests, k))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minimizeMaxBandwidth(vector<int>& bandwidthRequests, int k);

int main() {
    int n, k;
    cin >> n;
    vector<int> bandwidthRequests(n);
    for(int i=0; i<n; ++i) cin >> bandwidthRequests[i];
    cin >> k;
    cout << minimizeMaxBandwidth(bandwidthRequests, k) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] bandwidthRequests = new int[n];
        for(int i=0; i<n; i++) bandwidthRequests[i] = sc.nextInt();
        int k = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minimizeMaxBandwidth(bandwidthRequests, k));
    }
}`
                    }
                },
                {
                    id: 'recommendation-diversity',
                    title: 'Content Recommendation Diversity',
                    difficulty: 'Medium',
                    description: `Netflix's Recommendation Algorithm team wants to ensure diversity in the content shown to users.

Given an array of content IDs representing shows/movies and an integer 'windowSize', find the maximum number of unique content items in any sliding window of size 'windowSize'.

This helps determine the optimal window for showing diverse recommendations.

Constraints:
- 1 <= contentIds.length <= 10^5
- 1 <= windowSize <= contentIds.length
- 1 <= contentIds[i] <= 10^6`,
                    examples: [
                        {
                            input: 'contentIds = [1,2,1,3,4,2,3], windowSize = 4',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'contentIds = [1,2,1,3,4,2,3], windowSize = 4',
                            judgeInput: '7\n1 2 1 3 4 2 3\n4',
                            output: '4'
                        },
                        {
                            input: 'contentIds = [1,1,1,1,1], windowSize = 3',
                            judgeInput: '5\n1 1 1 1 1\n3',
                            output: '1'
                        },
                        {
                            input: 'contentIds = [1,2,3,4,5], windowSize = 5',
                            judgeInput: '5\n1 2 3 4 5\n5',
                            output: '5'
                        },
                        {
                            input: 'contentIds = [5,3,5,3,5,3], windowSize = 2',
                            judgeInput: '6\n5 3 5 3 5 3\n2',
                            output: '2'
                        },
                        {
                            input: 'contentIds = [10,20,30,10,20,30], windowSize = 3',
                            judgeInput: '6\n10 20 30 10 20 30\n3',
                            output: '3'
                        },
                        {
                            input: 'contentIds = [1,2,3,2,1,2,3], windowSize = 3',
                            judgeInput: '7\n1 2 3 2 1 2 3\n3',
                            output: '3'
                        },
                        {
                            input: 'contentIds = [7,7,7,7], windowSize = 2',
                            judgeInput: '4\n7 7 7 7\n2',
                            output: '1'
                        },
                        {
                            input: 'contentIds = [100,200,100,300,100], windowSize = 3',
                            judgeInput: '5\n100 200 100 300 100\n3',
                            output: '3'
                        },
                        {
                            input: 'contentIds = [1,2,3,4,5,6,7,8,9,10], windowSize = 4',
                            judgeInput: '10\n1 2 3 4 5 6 7 8 9 10\n4',
                            output: '4'
                        },
                        {
                            input: 'contentIds = [50,50,50,100,100,100], windowSize = 3',
                            judgeInput: '6\n50 50 50 100 100 100\n3',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} contentIds
 * @param {number} windowSize
 * @return {number}
 */
function maxDiversity(contentIds, windowSize) {
    // Your code here
}`,
                        python: `def max_diversity(content_ids, window_size):
    """
    :type content_ids: List[int]
    :type window_size: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxDiversity(vector<int>& contentIds, int windowSize) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxDiversity(int[] contentIds, int windowSize) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const contentIds = lines[1].split(' ').map(Number);
    const windowSize = parseInt(lines[2]);
    console.log(maxDiversity(contentIds, windowSize));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
content_ids = list(map(int, lines[1].split()))
window_size = int(lines[2])
print(max_diversity(content_ids, window_size))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxDiversity(vector<int>& contentIds, int windowSize);

int main() {
    int n, windowSize;
    cin >> n;
    vector<int> contentIds(n);
    for(int i=0; i<n; ++i) cin >> contentIds[i];
    cin >> windowSize;
    cout << maxDiversity(contentIds, windowSize) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] contentIds = new int[n];
        for(int i=0; i<n; i++) contentIds[i] = sc.nextInt();
        int windowSize = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxDiversity(contentIds, windowSize));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'netflix-oa-2',
            title: 'Netflix OA-2',
            duration: 75,
            problems: [
                {
                    id: 'subtitle-sync',
                    title: 'Subtitle Timeline Synchronization',
                    difficulty: 'Hard',
                    description: `Netflix's Localization team is working on synchronizing subtitles across multiple language versions.

You are given two arrays:
- 'timestamps': Time markers (in seconds) where subtitle blocks should appear
- 'durations': How long each subtitle should be displayed

Some subtitles overlap, and you need to merge overlapping subtitle blocks to avoid display conflicts.

Return the merged subtitle timelines as an array of [start, end] intervals.

Constraints:
- 1 <= timestamps.length <= 10^4
- timestamps[i] >= 0
- 1 <= durations[i] <= 100`,
                    examples: [
                        {
                            input: 'timestamps = [1,3,8,10], durations = [3,2,2,1]',
                            output: '[[1,4],[8,11]]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'timestamps = [1,3,8,10], durations = [3,2,2,1]',
                            judgeInput: '4\n1 3 8 10\n3 2 2 1',
                            output: '[[1,4],[8,11]]'
                        },
                        {
                            input: 'timestamps = [1,2,3], durations = [1,1,1]',
                            judgeInput: '3\n1 2 3\n1 1 1',
                            output: '[[1,4]]'
                        },
                        {
                            input: 'timestamps = [5,10], durations = [3,2]',
                            judgeInput: '2\n5 10\n3 2',
                            output: '[[5,8],[10,12]]'
                        },
                        {
                            input: 'timestamps = [0,5,10], durations = [5,5,5]',
                            judgeInput: '3\n0 5 10\n5 5 5',
                            output: '[[0,15]]'
                        },
                        {
                            input: 'timestamps = [1], durations = [5]',
                            judgeInput: '1\n1\n5',
                            output: '[[1,6]]'
                        },
                        {
                            input: 'timestamps = [2,4,6,8], durations = [2,2,2,2]',
                            judgeInput: '4\n2 4 6 8\n2 2 2 2',
                            output: '[[2,10]]'
                        },
                        {
                            input: 'timestamps = [0,10,20], durations = [3,3,3]',
                            judgeInput: '3\n0 10 20\n3 3 3',
                            output: '[[0,3],[10,13],[20,23]]'
                        },
                        {
                            input: 'timestamps = [5,6], durations = [2,2]',
                            judgeInput: '2\n5 6\n2 2',
                            output: '[[5,8]]'
                        },
                        {
                            input: 'timestamps = [0,2,4,6,8], durations = [2,2,2,2,2]',
                            judgeInput: '5\n0 2 4 6 8\n2 2 2 2 2',
                            output: '[[0,10]]'
                        },
                        {
                            input: 'timestamps = [10,20,30,40,50], durations = [5,5,5,5,5]',
                            judgeInput: '5\n10 20 30 40 50\n5 5 5 5 5',
                            output: '[[10,15],[20,25],[30,35],[40,45],[50,55]]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} timestamps
 * @param {number[]} durations
 * @return {number[][]}
 */
function mergeSubtitles(timestamps, durations) {
    // Your code here
}`,
                        python: `def merge_subtitles(timestamps, durations):
    """
    :type timestamps: List[int]
    :type durations: List[int]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<vector<int>> mergeSubtitles(vector<int>& timestamps, vector<int>& durations) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[][] mergeSubtitles(int[] timestamps, int[] durations) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const timestamps = lines[1].split(' ').map(Number);
    const durations = lines[2].split(' ').map(Number);
    console.log(JSON.stringify(mergeSubtitles(timestamps, durations)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
timestamps = list(map(int, lines[1].split()))
durations = list(map(int, lines[2].split()))
print(json.dumps(merge_subtitles(timestamps, durations)))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> mergeSubtitles(vector<int>& timestamps, vector<int>& durations);

int main() {
    int n;
    cin >> n;
    vector<int> timestamps(n), durations(n);
    for(int i=0; i<n; ++i) cin >> timestamps[i];
    for(int i=0; i<n; ++i) cin >> durations[i];
    
    auto res = mergeSubtitles(timestamps, durations);
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "[" << res[i][0] << "," << res[i][1] << "]";
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] timestamps = new int[n];
        int[] durations = new int[n];
        for(int i=0; i<n; i++) timestamps[i] = sc.nextInt();
        for(int i=0; i<n; i++) durations[i] = sc.nextInt();
        
        Solution sol = new Solution();
        int[][] res = sol.mergeSubtitles(timestamps, durations);
        System.out.print("[");
        for(int i=0; i<res.length; i++) {
            System.out.print("[" + res[i][0] + "," + res[i][1] + "]");
            if(i < res.length-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                }
            ]
        }
    ]
};
