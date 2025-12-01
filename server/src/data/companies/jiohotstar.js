export const jiohotstarData = {
    id: 'jiohotstar',
    name: 'JioHotstar',
    logo: 'https://logo.clearbit.com/hotstar.com',
    description: 'Practice real JioHotstar Online Assessment questions.',
    assessments: [{
        id: 'jiohotstar-oa-1',
        title: 'JioHotstar OA-1',
        duration: 90,
        problems: [{
            id: 'stream-quality',
            title: 'Adaptive Stream Quality',
            difficulty: 'Medium',
            description: `Select best video quality based on bandwidth.

You are given:
- bandwidth: Available bandwidth (kbps)
- qualities: List of [quality_p, required_bandwidth] (e.g., [1080, 5000])

Goal: Select the highest quality_p where required_bandwidth <= bandwidth. If none fit, return 0.

Input Format:
- bandwidth: Integer
- qualities: List of lists [p, bw]

Output Format:
- Return an integer (quality_p)

Constraints:
- 1 <= qualities.length <= 10
- 1 <= bandwidth <= 100000`,
            examples: [
                { input: 'bandwidth = 6000, qualities = [[1080,5000],[720,3000],[480,1000]]', output: '1080' },
                { input: 'bandwidth = 500, qualities = [[1080,5000],[720,3000]]', output: '0' }
            ],
            testCases: [
                { input: 'bandwidth = 6000, qualities = [[1080,5000],[720,3000],[480,1000]]', judgeInput: '6000\n3\n1080 5000\n720 3000\n480 1000', output: '1080' },
                { input: 'bandwidth = 500, qualities = [[1080,5000],[720,3000]]', judgeInput: '500\n2\n1080 5000\n720 3000', output: '0' },
                { input: 'bandwidth = 4000, qualities = [[1080,5000],[720,3000],[480,1000]]', judgeInput: '4000\n3\n1080 5000\n720 3000\n480 1000', output: '720' },
                { input: 'bandwidth = 10000, qualities = [[4000,15000],[1080,5000]]', judgeInput: '10000\n2\n4000 15000\n1080 5000', output: '1080' },
                { input: 'bandwidth = 2000, qualities = [[720,3000],[480,1500],[360,800]]', judgeInput: '2000\n3\n720 3000\n480 1500\n360 800', output: '480' },
                { input: 'bandwidth = 100, qualities = [[360,500]]', judgeInput: '100\n1\n360 500', output: '0' },
                { input: 'bandwidth = 5000, qualities = [[1080,5000]]', judgeInput: '5000\n1\n1080 5000', output: '1080' },
                { input: 'bandwidth = 8000, qualities = [[4000,8000],[1080,4000]]', judgeInput: '8000\n2\n4000 8000\n1080 4000', output: '4000' },
                { input: 'bandwidth = 2500, qualities = [[1080,4000],[720,2000],[480,1000]]', judgeInput: '2500\n3\n1080 4000\n720 2000\n480 1000', output: '720' },
                { input: 'bandwidth = 15000, qualities = [[8000,20000],[4000,10000]]', judgeInput: '15000\n2\n8000 20000\n4000 10000', output: '4000' },
                { input: 'bandwidth = 900, qualities = [[480,1000],[360,500]]', judgeInput: '900\n2\n480 1000\n360 500', output: '360' },
                { input: 'bandwidth = 3000, qualities = [[720,3001],[480,1000]]', judgeInput: '3000\n2\n720 3001\n480 1000', output: '480' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} bandwidth
 * @param {number[][]} qualities
 * @return {number}
 */
function bestQuality(bandwidth, qualities) {
    // Your code here
}`,
                python: `def best_quality(bandwidth, qualities):
    """
    :type bandwidth: int
    :type qualities: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int bestQuality(int bandwidth, vector<vector<int>>& qualities) {
    // Your code here
}`,
                java: `public class Solution {
    public int bestQuality(int bandwidth, int[][] qualities) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const bandwidth = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const qualities = [];\n    for(let i=2; i<n+2; i++) qualities.push(lines[i].split(' ').map(Number));\n    console.log(bestQuality(bandwidth, qualities));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nbandwidth = int(lines[0])\nn = int(lines[1])\nqualities = []\nfor i in range(2, n+2):\n    qualities.append(list(map(int, lines[i].split())))\nprint(best_quality(bandwidth, qualities))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint bestQuality(int bandwidth, vector<vector<int>>& qualities);\nint main() {\n    int bandwidth, n;\n    cin >> bandwidth >> n;\n    vector<vector<int>> qualities(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> qualities[i][0] >> qualities[i][1];\n    cout << bestQuality(bandwidth, qualities) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int bandwidth = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] qualities = new int[n][2];\n        for(int i=0; i<n; i++) {\n            qualities[i][0] = sc.nextInt();\n            qualities[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.bestQuality(bandwidth, qualities));\n    }\n}`
            }
        }, {
            id: 'ad-scheduler',
            title: 'Ad Break Scheduler',
            difficulty: 'Hard',
            description: `Schedule ads during a video stream.

You are given:
- video_duration: Total duration in minutes
- ad_slots: List of allowed start times for ads
- min_gap: Minimum gap between two ads

Goal: Maximize the number of ads played. Return the maximum count.

Input Format:
- video_duration: Integer
- ad_slots: List of integers (sorted)
- min_gap: Integer

Output Format:
- Return an integer (max ads)

Constraints:
- 1 <= video_duration <= 180
- 1 <= ad_slots.length <= 100`,
            examples: [
                { input: 'duration = 60, slots = [10, 20, 30, 40], min_gap = 15', output: '3' },
                { input: 'duration = 60, slots = [10, 15, 20], min_gap = 10', output: '2' }
            ],
            testCases: [
                { input: 'duration = 60, slots = [10, 20, 30, 40], min_gap = 15', judgeInput: '60\n4\n10 20 30 40\n15', output: '3' },
                { input: 'duration = 60, slots = [10, 15, 20], min_gap = 10', judgeInput: '60\n3\n10 15 20\n10', output: '2' },
                { input: 'duration = 100, slots = [10, 20, 30, 40, 50, 60], min_gap = 20', judgeInput: '100\n6\n10 20 30 40 50 60\n20', output: '3' },
                { input: 'duration = 50, slots = [5, 10, 15, 20], min_gap = 2', judgeInput: '50\n4\n5 10 15 20\n2', output: '4' },
                { input: 'duration = 120, slots = [10, 50, 90], min_gap = 30', judgeInput: '120\n3\n10 50 90\n30', output: '3' },
                { input: 'duration = 60, slots = [10], min_gap = 5', judgeInput: '60\n1\n10\n5', output: '1' },
                { input: 'duration = 60, slots = [10, 12, 14, 16], min_gap = 5', judgeInput: '60\n4\n10 12 14 16\n5', output: '2' },
                { input: 'duration = 100, slots = [10, 25, 40, 55, 70], min_gap = 15', judgeInput: '100\n5\n10 25 40 55 70\n15', output: '5' },
                { input: 'duration = 30, slots = [5, 10, 15], min_gap = 10', judgeInput: '30\n3\n5 10 15\n10', output: '2' },
                { input: 'duration = 90, slots = [10, 20, 30, 40, 50, 60, 70, 80], min_gap = 25', judgeInput: '90\n8\n10 20 30 40 50 60 70 80\n25', output: '3' },
                { input: 'duration = 60, slots = [10, 11, 12], min_gap = 10', judgeInput: '60\n3\n10 11 12\n10', output: '1' },
                { input: 'duration = 200, slots = [10, 100, 190], min_gap = 80', judgeInput: '200\n3\n10 100 190\n80', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} video_duration
 * @param {number[]} ad_slots
 * @param {number} min_gap
 * @return {number}
 */
function maxAds(video_duration, ad_slots, min_gap) {
    // Your code here
}`,
                python: `def max_ads(video_duration, ad_slots, min_gap):
    """
    :type video_duration: int
    :type ad_slots: List[int]
    :type min_gap: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxAds(int video_duration, vector<int>& ad_slots, int min_gap) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxAds(int video_duration, int[] ad_slots, int min_gap) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const video_duration = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const ad_slots = lines[2].split(' ').map(Number);\n    const min_gap = parseInt(lines[3]);\n    console.log(maxAds(video_duration, ad_slots, min_gap));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nvideo_duration = int(lines[0])\nn = int(lines[1])\nad_slots = list(map(int, lines[2].split()))\nmin_gap = int(lines[3])\nprint(max_ads(video_duration, ad_slots, min_gap))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxAds(int video_duration, vector<int>& ad_slots, int min_gap);\nint main() {\n    int video_duration, n, min_gap;\n    cin >> video_duration >> n;\n    vector<int> ad_slots(n);\n    for(int i=0; i<n; ++i) cin >> ad_slots[i];\n    cin >> min_gap;\n    cout << maxAds(video_duration, ad_slots, min_gap) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int video_duration = sc.nextInt();\n        int n = sc.nextInt();\n        int[] ad_slots = new int[n];\n        for(int i=0; i<n; i++) ad_slots[i] = sc.nextInt();\n        int min_gap = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxAds(video_duration, ad_slots, min_gap));\n    }\n}`
            }
        }]
    }]
};
