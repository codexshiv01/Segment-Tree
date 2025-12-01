export const zoomData = {
    id: 'zoom',
    name: 'Zoom',
    logo: 'https://logo.clearbit.com/zoom.us',
    description: 'Practice real Zoom Online Assessment questions.',
    assessments: [{
        id: 'zoom-oa-1',
        title: 'Zoom OA-1',
        duration: 90,
        problems: [{
            id: 'meeting-scheduler',
            title: 'Meeting Room Scheduler',
            difficulty: 'Medium',
            description: `Zoom needs to schedule meetings in available rooms. Given meeting time intervals, find the minimum number of conference rooms required.

You are given:
- intervals: A list of [start, end] times.

Goal: Return the minimum number of rooms required to host all meetings.

Input Format:
- intervals: List of lists [start, end]

Output Format:
- Return an integer.

Constraints:
- 1 <= intervals.length <= 1000
- 0 <= start < end <= 10000`,
            examples: [
                { input: 'intervals = [[0,30],[5,10],[15,20]]', output: '2' },
                { input: 'intervals = [[7,10],[2,4]]', output: '1' }
            ],
            testCases: [
                { input: 'intervals = [[0,30],[5,10],[15,20]]', judgeInput: '3\n0 30\n5 10\n15 20', output: '2' },
                { input: 'intervals = [[7,10],[2,4]]', judgeInput: '2\n7 10\n2 4', output: '1' },
                { input: 'intervals = [[1,5],[2,6],[3,7]]', judgeInput: '3\n1 5\n2 6\n3 7', output: '3' },
                { input: 'intervals = [[1,10],[2,5],[6,9]]', judgeInput: '3\n1 10\n2 5\n6 9', output: '2' },
                { input: 'intervals = [[1,2],[2,3],[3,4]]', judgeInput: '3\n1 2\n2 3\n3 4', output: '1' },
                { input: 'intervals = [[1,5],[5,10],[10,15]]', judgeInput: '3\n1 5\n5 10\n10 15', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    // Your code here
}`,
                python: `def min_meeting_rooms(intervals):
    """
    :type intervals: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minMeetingRooms(vector<vector<int>>& intervals) {
    // Your code here
}`,
                java: `public class Solution {
    public int minMeetingRooms(int[][] intervals) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const intervals = [];\n    for(let i=1; i<=n; i++) intervals.push(lines[i].split(' ').map(Number));\n    console.log(minMeetingRooms(intervals));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nintervals = []\nfor i in range(1, n+1):\n    intervals.append(list(map(int, lines[i].split())))\nprint(min_meeting_rooms(intervals))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minMeetingRooms(vector<vector<int>>& intervals);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> intervals(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> intervals[i][0] >> intervals[i][1];\n    cout << minMeetingRooms(intervals) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] intervals = new int[n][2];\n        for(int i=0; i<n; i++) {\n            intervals[i][0] = sc.nextInt();\n            intervals[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.minMeetingRooms(intervals));\n    }\n}`
            }
        }, {
            id: 'video-stream-quality',
            title: 'Video Stream Quality Adapter',
            difficulty: 'Hard',
            description: `Zoom adjusts video quality based on network bandwidth. Given a list of bandwidth measurements, find the longest continuous period where the bandwidth was above a certain threshold.

You are given:
- bandwidths: A list of integers.
- threshold: The minimum bandwidth for HD quality.

Goal: Return the length of the longest subarray where all elements are greater than or equal to threshold.

Input Format:
- bandwidths: List of integers
- threshold: Integer

Output Format:
- Return an integer.

Constraints:
- 1 <= bandwidths.length <= 10000
- 0 <= bandwidth, threshold <= 1000`,
            examples: [
                { input: 'bandwidths = [10,20,30,5,40,50], threshold = 15', output: '2' },
                { input: 'bandwidths = [5,10,5], threshold = 15', output: '0' }
            ],
            testCases: [
                { input: 'bandwidths = [10,20,30,5,40,50], threshold = 15', judgeInput: '6\n10 20 30 5 40 50\n15', output: '2' },
                { input: 'bandwidths = [5,10,5], threshold = 15', judgeInput: '3\n5 10 5\n15', output: '0' },
                { input: 'bandwidths = [20,20,20], threshold = 15', judgeInput: '3\n20 20 20\n15', output: '3' },
                { input: 'bandwidths = [10,5,10], threshold = 5', judgeInput: '3\n10 5 10\n5', output: '3' },
                { input: 'bandwidths = [10,5,20,30,40,5,50], threshold = 15', judgeInput: '7\n10 5 20 30 40 5 50\n15', output: '3' },
                { input: 'bandwidths = [1,2,3,4,5], threshold = 6', judgeInput: '5\n1 2 3 4 5\n6', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} bandwidths
 * @param {number} threshold
 * @return {number}
 */
function maxHDDuration(bandwidths, threshold) {
    // Your code here
}`,
                python: `def max_hd_duration(bandwidths, threshold):
    """
    :type bandwidths: List[int]
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxHDDuration(vector<int>& bandwidths, int threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxHDDuration(int[] bandwidths, int threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const bandwidths = lines[1].split(' ').map(Number);\n    const threshold = parseInt(lines[2]);\n    console.log(maxHDDuration(bandwidths, threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nbandwidths = list(map(int, lines[1].split()))\nthreshold = int(lines[2])\nprint(max_hd_duration(bandwidths, threshold))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxHDDuration(vector<int>& bandwidths, int threshold);\nint main() {\n    int n, threshold;\n    cin >> n;\n    vector<int> bandwidths(n);\n    for(int i=0; i<n; ++i) cin >> bandwidths[i];\n    cin >> threshold;\n    cout << maxHDDuration(bandwidths, threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] bandwidths = new int[n];\n        for(int i=0; i<n; i++) bandwidths[i] = sc.nextInt();\n        int threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxHDDuration(bandwidths, threshold));\n    }\n}`
            }
        }]
    }]
};
