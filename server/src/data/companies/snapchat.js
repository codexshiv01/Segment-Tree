export const snapchatData = {
    id: 'snapchat',
    name: 'Snapchat',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1024px-Snapchat_logo.svg.png',
    description: 'Practice real Snapchat Online Assessment questions.',
    assessments: [
        {
            id: 'snapchat-oa-1',
            title: 'Snapchat OA-1',
            duration: 90,
            problems: [
                {
                    id: 'snap-streak',
                    title: 'Snap Streak Analyzer',
                    difficulty: 'Medium',
                    description: `Snapchat's engagement team needs to analyze snap streaks between users.

You are given an array 'snaps' where snaps[i] = [user_a, user_b, day] representing a snap sent between users on a specific day.

A streak exists between two users if they exchange snaps for consecutive days. Find the longest streak length in the dataset.

Constraints:
- 1 <= snaps.length <= 10^4
- 1 <= user_id <= 1000
- 1 <= day <= 365`,
                    examples: [
                        {
                            input: 'snaps = [[1,2,1],[2,1,2],[1,2,3],[2,1,4]]',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'snaps = [[1,2,1],[2,1,2],[1,2,3],[2,1,4]]',
                            judgeInput: '4\n1 2 1\n2 1 2\n1 2 3\n2 1 4',
                            output: '4'
                        },
                        {
                            input: 'snaps = [[1,2,1],[1,2,3]]',
                            judgeInput: '2\n1 2 1\n1 2 3',
                            output: '1'
                        },
                        {
                            input: 'snaps = [[1,2,5],[2,1,6],[1,2,7],[2,1,8],[1,2,9]]',
                            judgeInput: '5\n1 2 5\n2 1 6\n1 2 7\n2 1 8\n1 2 9',
                            output: '5'
                        },
                        {
                            input: 'snaps = [[5,10,1],[10,5,2],[5,10,3],[8,9,1],[9,8,2]]',
                            judgeInput: '5\n5 10 1\n10 5 2\n5 10 3\n8 9 1\n9 8 2',
                            output: '3'
                        },
                        {
                            input: 'snaps = [[1,2,1]]',
                            judgeInput: '1\n1 2 1',
                            output: '1'
                        },
                        {
                            input: 'snaps = [[3,4,10],[4,3,11],[3,4,12],[4,3,13],[3,4,14],[4,3,15]]',
                            judgeInput: '6\n3 4 10\n4 3 11\n3 4 12\n4 3 13\n3 4 14\n4 3 15',
                            output: '6'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} snaps
 * @return {number}
 */
function longestStreak(snaps) {
    // Your code here
}`,
                        python: `def longest_streak(snaps):
    """
    :type snaps: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int longestStreak(vector<vector<int>>& snaps) {
    // Your code here
}`,
                        java: `public class Solution {
    public int longestStreak(int[][] snaps) {
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
    const snaps = [];
    for(let i=1; i<=n; i++) {
        snaps.push(lines[i].split(' ').map(Number));
    }
    console.log(longestStreak(snaps));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
snaps = []
for i in range(1, n+1):
    snaps.append(list(map(int, lines[i].split())))
print(longest_streak(snaps))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int longestStreak(vector<vector<int>>& snaps);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> snaps(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        cin >> snaps[i][0] >> snaps[i][1] >> snaps[i][2];
    }
    cout << longestStreak(snaps) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] snaps = new int[n][3];
        for(int i=0; i<n; i++) {
            snaps[i][0] = sc.nextInt();
            snaps[i][1] = sc.nextInt();
            snaps[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.longestStreak(snaps));
    }
}`
                    }
                },
                {
                    id: 'ar-filter-cache',
                    title: 'AR Filter Cache Optimization',
                    difficulty: 'Hard',
                    description: `Snapchat's AR filters need efficient caching to minimize load times.

You are given:
- 'capacity': Maximum cache size
- 'requests': Array of [filter_id, size, priority] representing filter requests

Implement an optimal caching strategy that maximizes the sum of priorities of cached filters while not exceeding capacity.

Return the maximum total priority achievable.

Constraints:
- 1 <= capacity <= 1000
- 1 <= requests.length <= 100
- 1 <= size <= capacity
- 1 <= priority <= 100`,
                    examples: [
                        {
                            input: 'capacity = 10, requests = [[1,4,5],[2,3,4],[3,6,7]]',
                            output: '11'
                        }
                    ],
                    testCases: [
                        {
                            input: 'capacity = 10, requests = [[1,4,5],[2,3,4],[3,6,7]]',
                            judgeInput: '10\n3\n1 4 5\n2 3 4\n3 6 7',
                            output: '11'
                        },
                        {
                            input: 'capacity = 5, requests = [[1,2,3],[2,3,4]]',
                            judgeInput: '5\n2\n1 2 3\n2 3 4',
                            output: '7'
                        },
                        {
                            input: 'capacity = 20, requests = [[1,10,15],[2,8,12],[3,5,8]]',
                            judgeInput: '20\n3\n1 10 15\n2 8 12\n3 5 8',
                            output: '27'
                        },
                        {
                            input: 'capacity = 100, requests = [[1,50,100],[2,50,99]]',
                            judgeInput: '100\n2\n1 50 100\n2 50 99',
                            output: '199'
                        },
                        {
                            input: 'capacity = 15, requests = [[1,5,10],[2,7,15],[3,4,8],[4,3,6]]',
                            judgeInput: '15\n4\n1 5 10\n2 7 15\n3 4 8\n4 3 6',
                            output: '29'
                        },
                        {
                            input: 'capacity = 50, requests = [[1,20,30],[2,10,15],[3,30,40]]',
                            judgeInput: '50\n3\n1 20 30\n2 10 15\n3 30 40',
                            output: '70'
                        },
                        {
                            input: 'capacity = 8, requests = [[1,3,5],[2,4,7],[3,2,4]]',
                            judgeInput: '8\n3\n1 3 5\n2 4 7\n3 2 4',
                            output: '11'
                        },
                        {
                            input: 'capacity = 25, requests = [[1,10,20],[2,15,25],[3,8,18]]',
                            judgeInput: '25\n3\n1 10 20\n2 15 25\n3 8 18',
                            output: '38'
                        },
                        {
                            input: 'capacity = 1, requests = [[1,1,100]]',
                            judgeInput: '1\n1\n1 1 100',
                            output: '100'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} capacity
 * @param {number[][]} requests
 * @return {number}
 */
function maxCachePriority(capacity, requests) {
    // Your code here
}`,
                        python: `def max_cache_priority(capacity, requests):
    """
    :type capacity: int
    :type requests: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxCachePriority(int capacity, vector<vector<int>>& requests) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxCachePriority(int capacity, int[][] requests) {
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
    const capacity = parseInt(lines[0]);
    const n = parseInt(lines[1]);
    const requests = [];
    for(let i=2; i<n+2; i++) {
        requests.push(lines[i].split(' ').map(Number));
    }
    console.log(maxCachePriority(capacity, requests));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
capacity = int(lines[0])
n = int(lines[1])
requests = []
for i in range(2, n+2):
    requests.append(list(map(int, lines[i].split())))
print(max_cache_priority(capacity, requests))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxCachePriority(int capacity, vector<vector<int>>& requests);

int main() {
    int capacity, n;
    cin >> capacity >> n;
    vector<vector<int>> requests(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        cin >> requests[i][0] >> requests[i][1] >> requests[i][2];
    }
    cout << maxCachePriority(capacity, requests) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int capacity = sc.nextInt();
        int n = sc.nextInt();
        int[][] requests = new int[n][3];
        for(int i=0; i<n; i++) {
            requests[i][0] = sc.nextInt();
            requests[i][1] = sc.nextInt();
            requests[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.maxCachePriority(capacity, requests));
    }
}`
                    }
                }
            ]
        }
    ]
};
