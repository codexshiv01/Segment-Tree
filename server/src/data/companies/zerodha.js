export const zerodhaData = {
    id: 'zerodha',
    name: 'Zerodha',
    logo: 'https://logo.clearbit.com/zerodha.com',
    description: 'Practice real Zerodha Online Assessment questions.',
    assessments: [{
        id: 'zerodha-oa-1',
        title: 'Zerodha OA-1',
        duration: 90,
        problems: [{
            id: 'margin-call-cascade',
            title: 'The Margin Call Cascade',
            difficulty: 'Hard',
            description: `In the high-stakes world of leveraged trading, a single trader's default can trigger a domino effect, toppling others who were counting on their payments. You are the risk engine architect at Zerodha.

You are given a network of N traders.
- \`collateral\`: A list where \`collateral[i]\` is the initial cash reserve of trader \`i\`.
- \`debts\`: A list of directed edges \`[u, v, amount]\`, meaning trader \`u\` owes trader \`v\` the specified \`amount\`.

A trader defaults if their current cash reserve (initial collateral + payments received - payments owed) drops below zero.
However, payments are settled sequentially in a specific way:
1. Initially, everyone attempts to pay their full debts.
2. If a trader \`u\` defaults (collateral < 0), they cannot pay *any* of their outgoing debts. They pay 0 to all creditors.
3. This non-payment might cause their creditors to default, leading to further non-payments.
4. The market stabilizes when no new traders default.

**Goal:** Determine the final set of traders who remain solvent (non-defaulted). Return their IDs in ascending order.
Assume the "worst-case" propagation: if a trader *could* default due to missing payments, they *do*, and stop paying others.

Input Format:
- collateral: List of integers
- debts: List of lists [u, v, amount]

Output Format:
- Return a list of integers (solvent trader IDs)

Constraints:
- 1 <= N <= 500
- 0 <= collateral[i] <= 10^6
- 1 <= amount <= 10^6`,
            examples: [
                { input: 'collateral = [100, 100, 100], debts = [[0,1,150],[1,2,150]]', output: '[2]' },
                { input: 'collateral = [50, 50], debts = [[0,1,100],[1,0,100]]', output: '[]' }
            ],
            testCases: [
                { input: 'collateral = [100, 100, 100], debts = [[0,1,150],[1,2,150]]', judgeInput: '3\n100 100 100\n2\n0 1 150\n1 2 150', output: '[2]' },
                { input: 'collateral = [50, 50], debts = [[0,1,100],[1,0,100]]', judgeInput: '2\n50 50\n2\n0 1 100\n1 0 100', output: '[]' },
                { input: 'collateral = [200, 0, 0], debts = [[0,1,100],[1,2,100]]', judgeInput: '3\n200 0 0\n2\n0 1 100\n1 2 100', output: '[0,1,2]' },
                { input: 'collateral = [10, 10, 10], debts = [[0,1,20],[1,2,20],[2,0,20]]', judgeInput: '3\n10 10 10\n3\n0 1 20\n1 2 20\n2 0 20', output: '[]' },
                { input: 'collateral = [100], debts = []', judgeInput: '1\n100\n0', output: '[0]' },
                { input: 'collateral = [50, 100, 100], debts = [[0,1,60],[1,2,60]]', judgeInput: '3\n50 100 100\n2\n0 1 60\n1 2 60', output: '[1,2]' },
                { input: 'collateral = [100, 100, 100], debts = [[0,1,200],[1,2,200],[2,0,200]]', judgeInput: '3\n100 100 100\n3\n0 1 200\n1 2 200\n2 0 200', output: '[]' },
                { input: 'collateral = [10, 10, 10, 10], debts = [[0,1,20],[1,2,20],[2,3,20]]', judgeInput: '4\n10 10 10 10\n3\n0 1 20\n1 2 20\n2 3 20', output: '[3]' },
                { input: 'collateral = [1000, 500], debts = [[0,1,1200]]', judgeInput: '2\n1000 500\n1\n0 1 1200', output: '[1]' },
                { input: 'collateral = [100, 100, 100], debts = [[0,1,50],[1,2,50],[2,0,50]]', judgeInput: '3\n100 100 100\n3\n0 1 50\n1 2 50\n2 0 50', output: '[0,1,2]' },
                { input: 'collateral = [0, 0, 0], debts = [[0,1,10],[1,2,10]]', judgeInput: '3\n0 0 0\n2\n0 1 10\n1 2 10', output: '[2]' },
                { input: 'collateral = [50, 50, 50], debts = [[0,1,100],[0,2,100]]', judgeInput: '3\n50 50 50\n2\n0 1 100\n0 2 100', output: '[1,2]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} collateral
 * @param {number[][]} debts
 * @return {number[]}
 */
function solveMarginCascade(collateral, debts) {
    // Your code here
}`,
                python: `def solve_margin_cascade(collateral, debts):
    """
    :type collateral: List[int]
    :type debts: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> solveMarginCascade(vector<int>& collateral, vector<vector<int>>& debts) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] solveMarginCascade(int[] collateral, int[][] debts) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const collateral = lines[1].split(' ').map(Number);\n    const m = parseInt(lines[2]);\n    const debts = [];\n    for(let i=3; i<3+m; i++) debts.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(solveMarginCascade(collateral, debts)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncollateral = list(map(int, lines[1].split()))\nm = int(lines[2])\ndebts = []\nfor i in range(3, 3+m):\n    debts.append(list(map(int, lines[i].split())))\nprint(json.dumps(solve_margin_cascade(collateral, debts)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<int> solveMarginCascade(vector<int>& collateral, vector<vector<int>>& debts);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<int> collateral(n);\n    for(int i=0; i<n; ++i) cin >> collateral[i];\n    cin >> m;\n    vector<vector<int>> debts(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> debts[i][0] >> debts[i][1] >> debts[i][2];\n    vector<int> res = solveMarginCascade(collateral, debts);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] collateral = new int[n];\n        for(int i=0; i<n; i++) collateral[i] = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] debts = new int[m][3];\n        for(int i=0; i<m; i++) {\n            debts[i][0] = sc.nextInt();\n            debts[i][1] = sc.nextInt();\n            debts[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.solveMarginCascade(collateral, debts);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'hft-arbitrage',
            title: 'HFT Latency Arbitrage',
            difficulty: 'Hard',
            description: `In High-Frequency Trading (HFT), microseconds matter. You have detected a fleeting arbitrage opportunity in a network of exchanges.

You are given:
- \`exchanges\`: N exchanges (0 to N-1).
- \`latency\`: A list of \`[u, v, t]\` representing the time \`t\` (in microseconds) to send an order from exchange \`u\` to \`v\`.
- \`opportunity_window\`: The total time \`K\` microseconds before the price discrepancy vanishes.

You start at exchange 0. You must execute a sequence of trades that visits at least 3 *distinct* exchanges (including start) and returns to 0 within \`K\` microseconds.
Each visit to an exchange (other than start) captures profit.
**Goal:** Find a valid cycle starting and ending at 0, visiting at least 2 other unique nodes, such that the total latency <= K.
If multiple such cycles exist, return the one with the *minimum* total latency. If none, return -1.

Input Format:
- N: Integer
- latency: List of lists [u, v, t]
- K: Integer

Output Format:
- Return an integer (min latency of valid cycle)

Constraints:
- 3 <= N <= 100
- 1 <= K <= 10000`,
            examples: [
                { input: 'N = 4, latency = [[0,1,10],[1,2,10],[2,0,10],[0,3,50]], K = 40', output: '30' },
                { input: 'N = 3, latency = [[0,1,10],[1,0,10]], K = 100', output: '-1' }
            ],
            testCases: [
                { input: 'N = 4, latency = [[0,1,10],[1,2,10],[2,0,10],[0,3,50]], K = 40', judgeInput: '4\n4\n0 1 10\n1 2 10\n2 0 10\n0 3 50\n40', output: '30' },
                { input: 'N = 3, latency = [[0,1,10],[1,0,10]], K = 100', judgeInput: '3\n2\n0 1 10\n1 0 10\n100', output: '-1' },
                { input: 'N = 4, latency = [[0,1,5],[1,2,5],[2,3,5],[3,0,5]], K = 25', judgeInput: '4\n4\n0 1 5\n1 2 5\n2 3 5\n3 0 5\n25', output: '20' },
                { input: 'N = 4, latency = [[0,1,5],[1,2,5],[2,3,5],[3,0,5]], K = 15', judgeInput: '4\n4\n0 1 5\n1 2 5\n2 3 5\n3 0 5\n15', output: '-1' },
                { input: 'N = 5, latency = [[0,1,10],[1,2,10],[2,0,10],[0,3,5],[3,4,5],[4,0,5]], K = 20', judgeInput: '5\n6\n0 1 10\n1 2 10\n2 0 10\n0 3 5\n3 4 5\n4 0 5\n20', output: '15' },
                { input: 'N = 3, latency = [[0,1,100],[1,2,100],[2,0,100]], K = 250', judgeInput: '3\n3\n0 1 100\n1 2 100\n2 0 100\n250', output: '-1' },
                { input: 'N = 3, latency = [[0,1,100],[1,2,100],[2,0,100]], K = 300', judgeInput: '3\n3\n0 1 100\n1 2 100\n2 0 100\n300', output: '300' },
                { input: 'N = 4, latency = [[0,1,1],[1,2,1],[2,0,1],[0,2,10]], K = 10', judgeInput: '4\n4\n0 1 1\n1 2 1\n2 0 1\n0 2 10\n10', output: '3' },
                { input: 'N = 5, latency = [[0,1,10],[1,2,10],[2,3,10],[3,4,10],[4,0,10]], K = 60', judgeInput: '5\n5\n0 1 10\n1 2 10\n2 3 10\n3 4 10\n4 0 10\n60', output: '50' },
                { input: 'N = 4, latency = [[0,1,10],[1,2,10],[2,0,50],[0,3,10],[3,2,10]], K = 100', judgeInput: '4\n5\n0 1 10\n1 2 10\n2 0 50\n0 3 10\n3 2 10\n100', output: '70' },
                { input: 'N = 3, latency = [[0,1,10],[1,2,10],[2,1,10],[1,0,10]], K = 100', judgeInput: '3\n4\n0 1 10\n1 2 10\n2 1 10\n1 0 10\n100', output: '-1' },
                { input: 'N = 4, latency = [[0,1,10],[1,2,10],[2,0,10]], K = 29', judgeInput: '4\n3\n0 1 10\n1 2 10\n2 0 10\n29', output: '-1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} N
 * @param {number[][]} latency
 * @param {number} K
 * @return {number}
 */
function minLatencyArbitrage(N, latency, K) {
    // Your code here
}`,
                python: `def min_latency_arbitrage(N, latency, K):
    """
    :type N: int
    :type latency: List[List[int]]
    :type K: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minLatencyArbitrage(int N, vector<vector<int>>& latency, int K) {
    // Your code here
}`,
                java: `public class Solution {
    public int minLatencyArbitrage(int N, int[][] latency, int K) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const N = parseInt(lines[0]);\n    const m = parseInt(lines[1]);\n    const latency = [];\n    for(let i=2; i<2+m; i++) latency.push(lines[i].split(' ').map(Number));\n    const K = parseInt(lines[2+m]);\n    console.log(minLatencyArbitrage(N, latency, K));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nN = int(lines[0])\nm = int(lines[1])\nlatency = []\nfor i in range(2, 2+m):\n    latency.append(list(map(int, lines[i].split())))\nK = int(lines[2+m])\nprint(min_latency_arbitrage(N, latency, K))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minLatencyArbitrage(int N, vector<vector<int>>& latency, int K);\nint main() {\n    int N, m, K;\n    cin >> N >> m;\n    vector<vector<int>> latency(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> latency[i][0] >> latency[i][1] >> latency[i][2];\n    cin >> K;\n    cout << minLatencyArbitrage(N, latency, K) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int N = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] latency = new int[m][3];\n        for(int i=0; i<m; i++) {\n            latency[i][0] = sc.nextInt();\n            latency[i][1] = sc.nextInt();\n            latency[i][2] = sc.nextInt();\n        }\n        int K = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minLatencyArbitrage(N, latency, K));\n    }\n}`
            }
        }]
    }]
};
