export const twitchData = {
    id: 'twitch',
    name: 'Twitch',
    logo: 'https://logo.clearbit.com/twitch.tv',
    description: 'Practice real Twitch Online Assessment questions.',
    assessments: [{
        id: 'twitch-oa-1',
        title: 'Twitch OA-1',
        duration: 90,
        problems: [{
            id: 'stream-bitrate',
            title: 'Adaptive Bitrate Streaming Optimizer',
            difficulty: 'Hard',
            description: `Twitch needs to select optimal video bitrate based on viewer's bandwidth. Given available quality options and current bandwidth, select best quality without buffering.

You are given:
- qualities: List of [quality_id, bitrate_kbps, resolution_score]
- bandwidth: Available bandwidth in kbps
- buffer_margin: Safety margin (multiplier, e.g., 0.9 means use 90% of bandwidth)

Goal: Select quality with highest resolution_score where bitrate_kbps <= bandwidth * buffer_margin. Return quality_id, or -1 if none fit.

Input Format:
- qualities: List of lists [id, bitrate, score]
- bandwidth: Integer
- buffer_margin: Float

Output Format:
- Return an integer (quality_id or -1)

Constraints:
- 1 <= qualities.length <= 20
- 100 <= bitrate_kbps <= 50000
- 1 <= resolution_score <= 100
- 100 <= bandwidth <= 100000
- 0.5 <= buffer_margin <= 1.0`,
            examples: [
                { input: 'qualities = [[1,1000,30],[2,3000,60],[3,6000,90]], bandwidth = 5000, buffer_margin = 0.9', output: '2' },
                { input: 'qualities = [[1,1000,30]], bandwidth = 500, buffer_margin = 0.9', output: '-1' }
            ],
            testCases: [
                { input: 'qualities = [[1,1000,30],[2,3000,60],[3,6000,90]], bandwidth = 5000, buffer_margin = 0.9', judgeInput: '3\n1 1000 30\n2 3000 60\n3 6000 90\n5000\n0.9', output: '2' },
                { input: 'qualities = [[1,1000,30]], bandwidth = 500, buffer_margin = 0.9', judgeInput: '1\n1 1000 30\n500\n0.9', output: '-1' },
                { input: 'qualities = [[1,500,20],[2,1500,40],[3,3000,60],[4,5000,80]], bandwidth = 4000, buffer_margin = 0.8', judgeInput: '4\n1 500 20\n2 1500 40\n3 3000 60\n4 5000 80\n4000\n0.8', output: '3' },
                { input: 'qualities = [[5,2000,50],[6,4000,70],[7,8000,90]], bandwidth = 10000, buffer_margin = 1.0', judgeInput: '3\n5 2000 50\n6 4000 70\n7 8000 90\n10000\n1.0', output: '7' },
                { input: 'qualities = [[1,1000,10],[2,2000,20],[3,3000,30]], bandwidth = 2500, buffer_margin = 0.9', judgeInput: '3\n1 1000 10\n2 2000 20\n3 3000 30\n2500\n0.9', output: '2' },
                { input: 'qualities = [[10,10000,100]], bandwidth = 15000, buffer_margin = 0.7', judgeInput: '1\n10 10000 100\n15000\n0.7', output: '10' },
                { input: 'qualities = [[1,800,15],[2,1600,30],[3,3200,60]], bandwidth = 2000, buffer_margin = 0.85', judgeInput: '3\n1 800 15\n2 1600 30\n3 3200 60\n2000\n0.85', output: '2' },
                { input: 'qualities = [[1,5000,50],[2,10000,80]], bandwidth = 8000, buffer_margin = 0.9', judgeInput: '2\n1 5000 50\n2 10000 80\n8000\n0.9', output: '1' },
                { input: 'qualities = [[1,1000,25],[2,2000,45],[3,4000,75],[4,6000,95]], bandwidth = 7000, buffer_margin = 0.95', judgeInput: '4\n1 1000 25\n2 2000 45\n3 4000 75\n4 6000 95\n7000\n0.95', output: '4' },
                { input: 'qualities = [[1,3000,40]], bandwidth = 3000, buffer_margin = 1.0', judgeInput: '1\n1 3000 40\n3000\n1.0', output: '1' },
                { input: 'qualities = [[1,500,10],[2,1000,20],[3,2000,40],[4,4000,70]], bandwidth = 1800, buffer_margin = 0.9', judgeInput: '4\n1 500 10\n2 1000 20\n3 2000 40\n4 4000 70\n1800\n0.9', output: '2' },
                { input: 'qualities = [[1,20000,90],[2,10000,70],[3,5000,50]], bandwidth = 6000, buffer_margin = 0.8', judgeInput: '3\n1 20000 90\n2 10000 70\n3 5000 50\n6000\n0.8', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} qualities
 * @param {number} bandwidth
 * @param {number} buffer_margin
 * @return {number}
 */
function selectQuality(qualities, bandwidth, buffer_margin) {
    // Your code here
}`,
                python: `def select_quality(qualities, bandwidth, buffer_margin):
    """
    :type qualities: List[List[int]]
    :type bandwidth: int
    :type buffer_margin: float
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int selectQuality(vector<vector<int>>& qualities, int bandwidth, double buffer_margin) {
    // Your code here
}`,
                java: `public class Solution {
    public int selectQuality(int[][] qualities, int bandwidth, double buffer_margin) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const qualities = [];\n    for(let i=1; i<=n; i++) qualities.push(lines[i].split(' ').map(Number));\n    const bandwidth = parseInt(lines[n+1]);\n    const buffer_margin = parseFloat(lines[n+2]);\n    console.log(selectQuality(qualities, bandwidth, buffer_margin));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nqualities = []\nfor i in range(1, n+1):\n    qualities.append(list(map(int, lines[i].split())))\nbandwidth = int(lines[n+1])\nbuffer_margin = float(lines[n+2])\nprint(select_quality(qualities, bandwidth, buffer_margin))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint selectQuality(vector<vector<int>>& qualities, int bandwidth, double buffer_margin);\nint main() {\n    int n, bandwidth;\n    double buffer_margin;\n    cin >> n;\n    vector<vector<int>> qualities(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> qualities[i][0] >> qualities[i][1] >> qualities[i][2];\n    cin >> bandwidth >> buffer_margin;\n    cout << selectQuality(qualities, bandwidth, buffer_margin) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] qualities = new int[n][3];\n        for(int i=0; i<n; i++) {\n            qualities[i][0] = sc.nextInt();\n            qualities[i][1] = sc.nextInt();\n            qualities[i][2] = sc.nextInt();\n        }\n        int bandwidth = sc.nextInt();\n        double buffer_margin = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.println(sol.selectQuality(qualities, bandwidth, buffer_margin));\n    }\n}`
            }
        }, {
            id: 'chat-moderation',
            title: 'Real-time Chat Spam Detection',
            difficulty: 'Medium',
            description: `Detect spam in Twitch chat by identifying messages that repeat too frequently from the same user within a time window.

You are given:
- messages: List of [user_id, timestamp, message_hash]
- spam_threshold: Max messages allowed per user in window
- time_window: Time window in seconds

Goal: Return count of spam messages (messages beyond spam_threshold within time_window for any user).

Input Format:
- messages: List of lists [user, time, hash]
- spam_threshold: Integer 
- time_window: Integer

Output Format:
- Return an integer (spam count)

Constraints:
- 1 <= messages.length <= 10000
- 1 <= user_id, message_hash <= 100000
- 0 <= timestamp <= 1000000
- 1 <= spam_threshold <= 100
- 1 <= time_window <= 3600`,
            examples: [
                { input: 'messages = [[1,10,100],[1,12,101],[1,14,102],[2,15,103]], spam_threshold = 2, time_window = 5', output: '1' },
                { input: 'messages = [[1,10,100],[2,20,101]], spam_threshold = 1, time_window = 20', output: '0' }
            ],
            testCases: [
                { input: 'messages = [[1,10,100],[1,12,101],[1,14,102],[2,15,103]], spam_threshold = 2, time_window = 5', judgeInput: '4\n1 10 100\n1 12 101\n1 14 102\n2 15 103\n2\n5', output: '1' },
                { input: 'messages = [[1,10,100],[2,20,101]], spam_threshold = 1, time_window = 20', judgeInput: '2\n1 10 100\n2 20 101\n1\n20', output: '0' },
                { input: 'messages = [[1,1,100],[1,2,101],[1,3,102],[1,4,103]], spam_threshold = 3, time_window = 5', judgeInput: '4\n1 1 100\n1 2 101\n1 3 102\n1 4 103\n3\n5', output: '1' },
                { input: 'messages = [[1,10,100],[1,20,101],[1,30,102]], spam_threshold = 2, time_window = 15', judgeInput: '3\n1 10 100\n1 20 101\n1 30 102\n2\n15', output: '0' },
                { input: 'messages = [[1,5,100],[2,6,101],[1,7,102],[2,8,103]], spam_threshold = 1, time_window = 3', judgeInput: '4\n1 5 100\n2 6 101\n1 7 102\n2 8 103\n1\n3', output: '2' },
                { input: 'messages = [[1,100,1],[1,101,2],[1,102,3],[1,103,4],[1,104,5]], spam_threshold = 4, time_window = 5', judgeInput: '5\n1 100 1\n1 101 2\n1 102 3\n1 103 4\n1 104 5\n4\n5', output: '1' },
                { input: 'messages = [[1,10,100]], spam_threshold = 3, time_window = 10', judgeInput: '1\n1 10 100\n3\n10', output: '0' },
                { input: 'messages = [[1,1,100],[1,2,101],[2,3,102],[2,4,103],[1,5,104]], spam_threshold = 2, time_window = 6', judgeInput: '5\n1 1 100\n1 2 101\n2 3 102\n2 4 103\n1 5 104\n2\n6', output: '1' },
                { input: 'messages = [[1,50,1],[1,52,2],[1,54,3],[1,56,4]], spam_threshold = 3, time_window = 10', judgeInput: '4\n1 50 1\n1 52 2\n1 54 3\n1 56 4\n3\n10', output: '1' },
                { input: 'messages = [[1,10,100],[2,11,101],[3,12,102]], spam_threshold = 1, time_window = 5', judgeInput: '3\n1 10 100\n2 11 101\n3 12 102\n1\n5', output: '0' },
                { input: 'messages = [[5,100,1],[5,101,2],[5,102,3],[5,103,4],[5,105,5],[5,107,6]], spam_threshold = 4, time_window = 8', judgeInput: '6\n5 100 1\n5 101 2\n5 102 3\n5 103 4\n5 105 5\n5 107 6\n4\n8', output: '2' },
                { input: 'messages = [[1,0,1],[1,1,2]], spam_threshold = 1, time_window = 2', judgeInput: '2\n1 0 1\n1 1 2\n1\n2', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} messages
 * @param {number} spam_threshold
 * @param {number} time_window
 * @return {number}
 */
function detectSpam(messages, spam_threshold, time_window) {
    // Your code here
}`,
                python: `def detect_spam(messages, spam_threshold, time_window):
    """
    :type messages: List[List[int]]
    :type spam_threshold: int
    :type time_window: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int detectSpam(vector<vector<int>>& messages, int spam_threshold, int time_window) {
    // Your code here
}`,
                java: `public class Solution {
    public int detectSpam(int[][] messages, int spam_threshold, int time_window) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const messages = [];\n    for(let i=1; i<=n; i++) messages.push(lines[i].split(' ').map(Number));\n    const spam_threshold = parseInt(lines[n+1]);\n    const time_window = parseInt(lines[n+2]);\n    console.log(detectSpam(messages, spam_threshold, time_window));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmessages = []\nfor i in range(1, n+1):\n    messages.append(list(map(int, lines[i].split())))\nspam_threshold = int(lines[n+1])\ntime_window = int(lines[n+2])\nprint(detect_spam(messages, spam_threshold, time_window))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint detectSpam(vector<vector<int>>& messages, int spam_threshold, int time_window);\nint main() {\n    int n, spam_threshold, time_window;\n    cin >> n;\n    vector<vector<int>> messages(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> messages[i][0] >> messages[i][1] >> messages[i][2];\n    cin >> spam_threshold >> time_window;\n    cout << detectSpam(messages, spam_threshold, time_window) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] messages = new int[n][3];\n        for(int i=0; i<n; i++) {\n            messages[i][0] = sc.nextInt();\n            messages[i][1] = sc.nextInt();\n            messages[i][2] = sc.nextInt();\n        }\n        int spam_threshold = sc.nextInt();\n        int time_window = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.detectSpam(messages, spam_threshold, time_window));\n    }\n}`
            }
        }]
    }]
};
