export const samsungData = {
    id: 'samsung',
    name: 'Samsung',
    logo: 'https://logo.clearbit.com/samsung.com',
    description: 'Practice real Samsung Online Assessment questions.',
    assessments: [{
        id: 'samsung-oa-1',
        title: 'Samsung OA-1',
        duration: 90,
        problems: [{
            id: 'smart-tv-channel',
            title: 'Smart TV Channel Recommendation',
            difficulty: 'Medium',
            description: `### Problem Description
Samsung's Smart TV uses AI to recommend channels based on viewing patterns. Given a user's watch history, we need to find the most frequently watched channels within specific time windows.

You are given:
- \`history\`: A list of \`[timestamp, channel_id, duration]\` representing watch events.
  - \`timestamp\`: When the viewing started (in minutes from day start).
  - \`channel_id\`: ID of the channel watched.
  - \`duration\`: How long the channel was watched (in minutes).
- \`window\`: The size of the time window to analyze (in minutes).

**Goal:**
For each possible window of size \`window\`, find the channel that was watched the most (by total duration). Return a list of \`[window_start, channel_id, total_duration]\` for the top channel in each window.

Only consider complete windows. A window \`[start, start+window]\` should only include events that started within this range.

### Input Format
- \`history\`: List of lists \`[timestamp, channel_id, duration]\`
- \`window\`: Integer

### Output Format
- Return a list of lists \`[window_start, channel_id, total_duration]\`

### Constraints
- \`1 <= history.length <= 500\`
- \`0 <= timestamp <= 1440\`
- \`1 <= channel_id <= 100\`
- \`1 <= duration <= 120\`
- \`1 <= window <= 1440\``,
            examples: [
                { input: 'history = [[0,1,30],[10,2,20],[15,1,25]], window = 20', output: '[[0,1,55]]' },
                { input: 'history = [[0,5,10],[30,5,20],[60,10,15]], window = 40', output: '[[0,5,30],[30,5,20]]' }
            ],
            testCases: [
                { input: 'history = [[0,1,30],[10,2,20],[15,1,25]], window = 20', judgeInput: '3\n0 1 30\n10 2 20\n15 1 25\n20', output: '[[0,1,55]]' },
                { input: 'history = [[0,5,10],[30,5,20],[60,10,15]], window = 40', judgeInput: '3\n0 5 10\n30 5 20\n60 10 15\n40', output: '[[0,5,30],[30,5,20]]' },
                { input: 'history = [[10,1,20]], window = 30', judgeInput: '1\n10 1 20\n30', output: '[[10,1,20]]' },
                { input: 'history = [[0,1,10],[5,2,15],[10,1,20]], window = 15', judgeInput: '3\n0 1 10\n5 2 15\n10 1 20\n15', output: '[[0,1,30],[5,1,20]]' },
                { input: 'history = [[0,3,50],[100,3,30]], window = 60', judgeInput: '2\n0 3 50\n100 3 30\n60', output: '[[0,3,50],[100,3,30]]' },
                { input: 'history = [[5,1,10],[10,2,10],[15,1,10]], window = 10', judgeInput: '3\n5 1 10\n10 2 10\n15 1 10\n10', output: '[[5,1,10],[10,2,10],[15,1,10]]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} history
 * @param {number} window
 * @return {number[][]}
 */
function recommendChannels(history, window) {
    // Your code here
}`,
                python: `def recommend_channels(history, window):
    """
    :type history: List[List[int]]
    :type window: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<int>> recommendChannels(vector<vector<int>>& history, int window) {
    // Your code here
}`,
                java: `public class Solution {
    public int[][] recommendChannels(int[][] history, int window) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const history = [];\n    for(let i=1; i<=n; i++) history.push(lines[i].split(' ').map(Number));\n    const window = parseInt(lines[n+1]);\n    console.log(JSON.stringify(recommendChannels(history, window)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nhistory = []\nfor i in range(1, n+1):\n    history.append(list(map(int, lines[i].split())))\nwindow = int(lines[n+1])\nprint(json.dumps(recommend_channels(history, window)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<vector<int>> recommendChannels(vector<vector<int>>& history, int window);\nint main() {\n    int n, window;\n    cin >> n;\n    vector<vector<int>> history(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> history[i][0] >> history[i][1] >> history[i][2];\n    cin >> window;\n    vector<vector<int>> res = recommendChannels(history, window);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << res[i][0] << "," << res[i][1] << "," << res[i][2] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] history = new int[n][3];\n        for(int i=0; i<n; i++) {\n            history[i][0] = sc.nextInt();\n            history[i][1] = sc.nextInt();\n            history[i][2] = sc.nextInt();\n        }\n        int window = sc.nextInt();\n        Solution sol = new Solution();\n        int[][] res = sol.recommendChannels(history, window);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + res[i][0] + "," + res[i][1] + "," + res[i][2] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'display-defect-pattern',
            title: 'Display Panel Defect Pattern Detection',
            difficulty: 'Hard',
            description: `### Problem Description
Samsung's quality control system analyzes display panels for defect patterns. A defect pattern is defined as a rectangular region where all pixels have brightness below a threshold.

You are given:
- \`panel\`: A 2D grid where \`panel[i][j]\` represents the brightness of pixel at position (i,j).
- \`threshold\`: The maximum brightness value considered a defect.

**Goal:**
Find the **area of the largest rectangular region** where all pixels have brightness <= \`threshold\`. Return the area (width * height).

### Input Format
- \`panel\`: 2D list of integers
- \`threshold\`: Integer

### Output Format
- Return an integer representing the maximum defect area.

### Constraints
- \`1 <= panel.length, panel[0].length <= 100\`
- \`0 <= panel[i][j] <= 255\`
- \`0 <= threshold <= 255\``,
            examples: [
                { input: 'panel = [[10,20,10],[10,10,10],[30,10,10]], threshold = 15', output: '6' },
                { input: 'panel = [[5,5],[5,20]], threshold = 10', output: '3' }
            ],
            testCases: [
                { input: 'panel = [[10,20,10],[10,10,10],[30,10,10]], threshold = 15', judgeInput: '3 3\n10 20 10\n10 10 10\n30 10 10\n15', output: '6' },
                { input: 'panel = [[5,5],[5,20]], threshold = 10', judgeInput: '2 2\n5 5\n5 20\n10', output: '3' },
                { input: 'panel = [[100]], threshold = 50', judgeInput: '1 1\n100\n50', output: '0' },
                { input: 'panel = [[5,5,5],[5,5,5]], threshold = 10', judgeInput: '2 3\n5 5 5\n5 5 5\n10', output: '6' },
                { input: 'panel = [[1,2,3],[4,5,6],[7,8,9]], threshold = 5', judgeInput: '3 3\n1 2 3\n4 5 6\n7 8 9\n5', output: '4' },
                { input: 'panel = [[10,10,10,10]], threshold = 15', judgeInput: '1 4\n10 10 10 10\n15', output: '4' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} panel
 * @param {number} threshold
 * @return {number}
 */
function maxDefectArea(panel, threshold) {
    // Your code here
}`,
                python: `def max_defect_area(panel, threshold):
    """
    :type panel: List[List[int]]
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxDefectArea(vector<vector<int>>& panel, int threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxDefectArea(int[][] panel, int threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const [rows, cols] = lines[0].split(' ').map(Number);\n    const panel = [];\n    for(let i=1; i<=rows; i++) panel.push(lines[i].split(' ').map(Number));\n    const threshold = parseInt(lines[rows+1]);\n    console.log(maxDefectArea(panel, threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nrows, cols = map(int, lines[0].split())\npanel = []\nfor i in range(1, rows+1):\n    panel.append(list(map(int, lines[i].split())))\nthreshold = int(lines[rows+1])\nprint(max_defect_area(panel, threshold))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\nint maxDefectArea(vector<vector<int>>& panel, int threshold);\nint main() {\n    int rows, cols, threshold;\n    cin >> rows >> cols;\n    vector<vector<int>> panel(rows, vector<int>(cols));\n    for(int i=0; i<rows; ++i)\n        for(int j=0; j<cols; ++j) cin >> panel[i][j];\n    cin >> threshold;\n    cout << maxDefectArea(panel, threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int rows = sc.nextInt();\n        int cols = sc.nextInt();\n        int[][] panel = new int[rows][cols];\n        for(int i=0; i<rows; i++)\n            for(int j=0; j<cols; j++) panel[i][j] = sc.nextInt();\n        int threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxDefectArea(panel, threshold));\n    }\n}`
            }
        }]
    }]
};
