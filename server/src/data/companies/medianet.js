export const medianetData = {
    id: 'medianet',
    name: 'Media.net',
    logo: 'https://logo.clearbit.com/media.net',
    description: 'Practice real Media.net Online Assessment questions.',
    assessments: [{
        id: 'medianet-oa-1',
        title: 'Media.net OA-1',
        duration: 90,
        problems: [{
            id: 'ad-bidding',
            title: 'Real-Time Ad Bidding Engine',
            difficulty: 'Hard',
            description: `Select winning bids for ad slots in real-time auction.

You are given:
- bids: List of [bid_id, bid_amount, quality_score]
- slots: Number of available ad slots

Goal: Calculate effective_bid = bid_amount * (quality_score / 10). Select top slots bids by effective_bid. Return sum of actual bid_amounts for winning bids, rounded to 2 decimals.

Input Format:
- bids: List of lists [id, amount, quality]
- slots: Integer

Output Format:
- Return a float rounded to2 decimal places

Constraints:
- 1 <= bids.length <= 1000
- 0.01 <= bid_amount <= 100.0
- 1 <= quality_score <= 10
- 1 <= slots <= bids.length`,
            examples: [
                { input: 'bids = [[1,10.0,8],[2,12.0,6],[3,9.0,9]], slots = 2', output: '21.00' },
                { input: 'bids = [[1,5.0,5]], slots = 1', output: '5.00' }
            ],
            testCases: [
                { input: 'bids = [[1,10.0,8],[2,12.0,6],[3,9.0,9]], slots = 2', judgeInput: '3\n1 10.0 8\n2 12.0 6\n3 9.0 9\n2', output: '21.00' },
                { input: 'bids = [[1,5.0,5]], slots = 1', judgeInput: '1\n1 5.0 5\n1', output: '5.00' },
                { input: 'bids = [[1,15.0,10],[2,12.0,9],[3,10.0,8]], slots = 3', judgeInput: '3\n1 15.0 10\n2 12.0 9\n3 10.0 8\n3', output: '37.00' },
                { input: 'bids = [[1,8.0,7],[2,9.0,6],[3,7.0,8]], slots = 2', judgeInput: '3\n1 8.0 7\n2 9.0 6\n3 7.0 8\n2', output: '15.00' },
                { input: 'bids = [[1,20.0,5],[2,10.0,10],[3,15.0,7]], slots = 1', judgeInput: '3\n1 20.0 5\n2 10.0 10\n3 15.0 7\n1', output: '15.00' },
                { input: 'bids = [[1,5.5,9],[2,6.0,8],[3,4.5,10]], slots = 2', judgeInput: '3\n1 5.5 9\n2 6.0 8\n3 4.5 10\n2', output: '10.00' },
                { input: 'bids = [[1,25.0,6],[2,20.0,7],[3,18.0,8],[4,15.0,9]], slots = 3', judgeInput: '4\n1 25.0 6\n2 20.0 7\n3 18.0 8\n4 15.0 9\n3', output: '53.00' },
                { input: 'bids = [[1,12.5,4],[2,10.0,5],[3,8.0,6]], slots = 2', judgeInput: '3\n1 12.5 4\n2 10.0 5\n3 8.0 6\n2', output: '18.00' },
                { input: 'bids = [[1,30.0,3],[2,15.0,6],[3,10.0,9]], slots = 2', judgeInput: '3\n1 30.0 3\n2 15.0 6\n3 10.0 9\n2', output: '25.00' },
                { input: 'bids = [[1,7.5,10],[2,8.0,9],[3,6.5,10]], slots = 3', judgeInput: '3\n1 7.5 10\n2 8.0 9\n3 6.5 10\n3', output: '22.00' },
                { input: 'bids = [[1,50.0,2],[2,25.0,4],[3,12.5,8]], slots = 1', judgeInput: '3\n1 50.0 2\n2 25.0 4\n3 12.5 8\n1', output: '12.50' },
                { input: 'bids = [[1,18.0,5],[2,16.0,6],[3,14.0,7],[4,12.0,8]], slots = 2', judgeInput: '4\n1 18.0 5\n2 16.0 6\n3 14.0 7\n4 12.0 8\n2', output: '30.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} bids
 * @param {number} slots
 * @return {number}
 */
function totalRevenue(bids, slots) {
    // Your code here
}`,
                python: `def total_revenue(bids, slots):
    """
    :type bids: List[List]
    :type slots: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalRevenue(vector<vector<double>>& bids, int slots) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalRevenue(double[][] bids, int slots) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const bids = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        bids.push([parseInt(parts[0]), parseFloat(parts[1]), parseInt(parts[2])]);\n    }\n    const slots = parseInt(lines[n+1]);\n    console.log(totalRevenue(bids, slots).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nbids = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    bids.append([int(parts[0]), float(parts[1]), int(parts[2])])\nslots = int(lines[n+1])\nprint(f'{total_revenue(bids, slots):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalRevenue(vector<vector<double>>& bids, int slots);\nint main() {\n    int n, slots;\n    cin >> n;\n    vector<vector<double>> bids(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> bids[i][0] >> bids[i][1] >> bids[i][2];\n    cin >> slots;\n    cout << fixed << setprecision(2) << totalRevenue(bids, slots) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] bids = new double[n][3];\n        for(int i=0; i<n; i++) {\n            bids[i][0] = sc.nextDouble();\n            bids[i][1] = sc.nextDouble();\n            bids[i][2] = sc.nextDouble();\n        }\n        int slots = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalRevenue(bids, slots));\n    }\n}`
            }
        }, {
            id: 'ctr-predictor',
            title: 'CTR Prediction Model',
            difficulty: 'Medium',
            description: `Predict Click-Through Rate for ad placements.

You are given:
- placements: List of [placement_id, impressions, clicks]

Goal: Calculate CTR = (clicks / impressions) * 100 for each placement. Return average CTR across all placements, rounded to 2 decimals.

Input Format:
- placements: List of lists [id, impressions, clicks]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= placements.length <= 1000
- 1 <= impressions <= 1000000
- 0 <= clicks <= impressions`,
            examples: [
                { input: 'placements = [[1,1000,50],[2,2000,80]]', output: '5.50' },
                { input: 'placements = [[1,100,10]]', output: '10.00' }
            ],
            testCases: [
                { input: 'placements = [[1,1000,50],[2,2000,80]]', judgeInput: '2\n1 1000 50\n2 2000 80', output: '5.50' },
                { input: 'placements = [[1,100,10]]', judgeInput: '1\n1 100 10', output: '10.00' },
                { input: 'placements = [[1,500,25],[2,500,30],[3,500,20]]', judgeInput: '3\n1 500 25\n2 500 30\n3 500 20', output: '5.00' },
                { input: 'placements = [[1,10000,500],[2,5000,250]]', judgeInput: '2\n1 10000 500\n2 5000 250', output: '5.00' },
                { input: 'placements = [[1,2000,100],[2,2000,200]]', judgeInput: '2\n1 2000 100\n2 2000 200', output: '7.50' },
                { input: 'placements = [[1,800,40],[2,1200,60],[3,1000,50]]', judgeInput: '3\n1 800 40\n2 1200 60\n3 1000 50', output: '5.00' },
                { input: 'placements = [[1,1500,75]]', judgeInput: '1\n1 1500 75', output: '5.00' },
                { input: 'placements = [[1,3000,90],[2,4000,160]]', judgeInput: '2\n1 3000 90\n2 4000 160', output: '3.50' },
                { input: 'placements = [[1,600,30],[2,900,45],[3,1200,60]]', judgeInput: '3\n1 600 30\n2 900 45\n3 1200 60', output: '5.00' },
                { input: 'placements = [[1,5000,250],[2,10000,400]]', judgeInput: '2\n1 5000 250\n2 10000 400', output: '4.50' },
                { input: 'placements = [[1,250,25],[2,750,75]]', judgeInput: '2\n1 250 25\n2 750 75', output: '10.00' },
                { input: 'placements = [[1,4000,200],[2,2000,100],[3,6000,300]]', judgeInput: '3\n1 4000 200\n2 2000 100\n3 6000 300', output: '5.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} placements
 * @return {number}
 */
function averageCTR(placements) {
    // Your code here
}`,
                python: `def average_ctr(placements):
    """
    :type placements: List[List[int]]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double averageCTR(vector<vector<int>>& placements) {
    // Your code here
}`,
                java: `public class Solution {
    public double averageCTR(int[][] placements) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const placements = [];\n    for(let i=1; i<=n; i++) placements.push(lines[i].split(' ').map(Number));\n    console.log(averageCTR(placements).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nplacements = []\nfor i in range(1, n+1):\n    placements.append(list(map(int, lines[i].split())))\nprint(f'{average_ctr(placements):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble averageCTR(vector<vector<int>>& placements);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> placements(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> placements[i][0] >> placements[i][1] >> placements[i][2];\n    cout << fixed << setprecision(2) << averageCTR(placements) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] placements = new int[n][3];\n        for(int i=0; i<n; i++) {\n            placements[i][0] = sc.nextInt();\n            placements[i][1] = sc.nextInt();\n            placements[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.averageCTR(placements));\n    }\n}`
            }
        }]
    }]
};
