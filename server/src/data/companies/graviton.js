export const gravitonData = {
    id: 'graviton',
    name: 'Graviton',
    logo: 'https://logo.clearbit.com/gravitonresearch.com',
    description: 'Practice real Graviton Research Capital Online Assessment questions.',
    assessments: [{
        id: 'graviton-oa-1',
        title: 'Graviton OA-1',
        duration: 90,
        problems: [{
            id: 'order-book-imbalance',
            title: 'Order Book Imbalance Detection',
            difficulty: 'Hard',
            description: `Graviton's trading system needs to detect significant order book imbalances that may indicate price movement. Given bid and ask orders at different price levels, calculate the order flow imbalance.

You are given:
- bids: List of [price, quantity] for buy orders
- asks: List of [price, quantity] for sell orders
- depth: Number of price levels to consider from best bid/ask

Goal: Calculate the order flow imbalance ratio. Return (total_bid_volume - total_ask_volume) / (total_bid_volume + total_ask_volume) within the specified depth, rounded to 4 decimal places. Return 0.0000 if both volumes are zero.

Input Format:
- bids: List of lists [price, quantity] sorted descending by price
- asks: List of lists [price, quantity] sorted ascending by price
- depth: Integer

Output Format:
- Return a float rounded to 4 decimal places

Constraints:
- 1 <= bids.length, asks.length <= 1000
- 1 <= depth <= min(bids.length, asks.length)
- 1 <= price <= 1000000
- 1 <= quantity <= 100000`,
            examples: [
                { input: 'bids = [[100,500],[99,300]], asks = [[101,200],[102,400]], depth = 2', output: '0.1429' },
                { input: 'bids = [[50,100]], asks = [[51,100]], depth = 1', output: '0.0000' }
            ],
            testCases: [
                { input: 'bids = [[100,500],[99,300]], asks = [[101,200],[102,400]], depth = 2', judgeInput: '2\n100 500\n99 300\n2\n101 200\n102 400\n2', output: '0.1429' },
                { input: 'bids = [[50,100]], asks = [[51,100]], depth = 1', judgeInput: '1\n50 100\n1\n51 100\n1', output: '0.0000' },
                { input: 'bids = [[100,1000],[99,500],[98,300]], asks = [[101,200],[102,100]], depth = 2', judgeInput: '3\n100 1000\n99 500\n98 300\n2\n101 200\n102 100\n2', output: '0.6667' },
                { input: 'bids = [[100,200]], asks = [[101,800]], depth = 1', judgeInput: '1\n100 200\n1\n101 800\n1', output: '-0.6000' },
                { input: 'bids = [[100,300],[99,300],[98,300]], asks = [[101,300],[102,300],[103,300]], depth = 3', judgeInput: '3\n100 300\n99 300\n98 300\n3\n101 300\n102 300\n103 300\n3', output: '0.0000' },
                { input: 'bids = [[100,1000]], asks = [[101,500]], depth = 1', judgeInput: '1\n100 1000\n1\n101 500\n1', output: '0.3333' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} bids
 * @param {number[][]} asks
 * @param {number} depth
 * @return {number}
 */
function calculateImbalance(bids, asks, depth) {
    // Your code here
}`,
                python: `def calculate_imbalance(bids, asks, depth):
    """
    :type bids: List[List[int]]
    :type asks: List[List[int]]
    :type depth: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double calculateImbalance(vector<vector<int>>& bids, vector<vector<int>>& asks, int depth) {
    // Your code here
}`,
                java: `public class Solution {
    public double calculateImbalance(int[][] bids, int[][] asks, int depth) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const bids = [];\n    for(let i=1; i<=n; i++) bids.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const asks = [];\n    for(let i=n+2; i<n+2+m; i++) asks.push(lines[i].split(' ').map(Number));\n    const depth = parseInt(lines[n+2+m]);\n    console.log(calculateImbalance(bids, asks, depth).toFixed(4));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nbids = []\nfor i in range(1, n+1):\n    bids.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nasks = []\nfor i in range(n+2, n+2+m):\n    asks.append(list(map(int, lines[i].split())))\ndepth = int(lines[n+2+m])\nprint(f'{calculate_imbalance(bids, asks, depth):.4f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble calculateImbalance(vector<vector<int>>& bids, vector<vector<int>>& asks, int depth);\nint main() {\n    int n, m, depth;\n    cin >> n;\n    vector<vector<int>> bids(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> bids[i][0] >> bids[i][1];\n    cin >> m;\n    vector<vector<int>> asks(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> asks[i][0] >> asks[i][1];\n    cin >> depth;\n    cout << fixed << setprecision(4) << calculateImbalance(bids, asks, depth) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] bids = new int[n][2];\n        for(int i=0; i<n; i++) {\n            bids[i][0] = sc.nextInt();\n            bids[i][1] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] asks = new int[m][2];\n        for(int i=0; i<m; i++) {\n            asks[i][0] = sc.nextInt();\n            asks[i][1] = sc.nextInt();\n        }\n        int depth = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.4f\\n", sol.calculateImbalance(bids, asks, depth));\n    }\n}`
            }
        }, {
            id: 'latency-arbitrage',
            title: 'Multi-Exchange Latency Arbitrage',
            difficulty: 'Hard',
            description: `Graviton needs to identify arbitrage opportunities considering network latency between exchanges. Given price updates with timestamps from multiple exchanges and latency data, find profitable arbitrage opportunities.

You are given:
- updates: List of [exchange_id, timestamp, price] for the same asset
- latencies: 2D array where latencies[i][j] is the network latency from exchange i to exchange j in milliseconds
- min_profit: Minimum profit threshold in basis points (1 bp = 0.01%)

Goal: Find all arbitrage opportunities where you can buy on one exchange and sell on another, considering latency, and profit exceeds min_profit. Return list of [buy_exchange, sell_exchange, profit_bps] sorted by profit descending. Only consider opportunities where sell timestamp >= buy timestamp + latency.

Input Format:
- updates: List of lists [exchange, time, price]
- latencies: 2D list of integers (milliseconds)
- min_profit: Integer (basis points)

Output Format:
- Return list of lists [buy_ex, sell_ex, profit_bps]

Constraints:
- 2 <= number of exchanges <= 10
- 1 <= updates.length <= 1000
- 0 <= timestamp <= 1000000
- 1 <= price <= 100000
- 0 <= latency <= 1000`,
            examples: [
                { input: 'updates = [[0,100,1000],[1,150,1020]], latencies = [[0,40],[40,0]], min_profit = 100', output: '[[0,1,200]]' },
                { input: 'updates = [[0,100,1000],[1,120,1005]], latencies = [[0,50],[50,0]], min_profit = 100', output: '[]' }
            ],
            testCases: [
                { input: 'updates = [[0,100,1000],[1,150,1020]], latencies = [[0,40],[40,0]], min_profit = 100', judgeInput: '2\n0 100 1000\n1 150 1020\n2\n0 40\n40 0\n100', output: '[[0,1,200]]' },
                { input: 'updates = [[0,100,1000],[1,120,1005]], latencies = [[0,50],[50,0]], min_profit = 100', judgeInput: '2\n0 100 1000\n1 120 1005\n2\n0 50\n50 0\n100', output: '[]' },
                { input: 'updates = [[0,100,1000],[1,200,1030],[2,250,1040]], latencies = [[0,50,100],[50,0,50],[100,50,0]], min_profit = 100', judgeInput: '3\n0 100 1000\n1 200 1030\n2 250 1040\n3\n0 50 100\n50 0 50\n100 50 0\n100', output: '[[0,2,400],[0,1,300]]' },
                { input: 'updates = [[0,100,1000],[1,130,1015]], latencies = [[0,50],[50,0]], min_profit = 200', output: '[]', judgeInput: '2\n0 100 1000\n1 130 1015\n2\n0 50\n50 0\n200' },
                { input: 'updates = [[0,100,1000],[1,100,1020],[0,200,1010]], latencies = [[0,10],[10,0]], min_profit = 50', judgeInput: '3\n0 100 1000\n1 100 1020\n0 200 1010\n2\n0 10\n10 0\n50', output: '[[0,1,2000],[0,1,100]]' },
                { input: 'updates = [[0,100,1000]], latencies = [[0]], min_profit = 100', judgeInput: '1\n0 100 1000\n1\n0\n100', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} updates
 * @param {number[][]} latencies
 * @param {number} min_profit
 * @return {number[][]}
 */
function findArbitrage(updates, latencies, min_profit) {
    // Your code here
}`,
                python: `def find_arbitrage(updates, latencies, min_profit):
    """
    :type updates: List[List[int]]
    :type latencies: List[List[int]]
    :type min_profit: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<int>> findArbitrage(vector<vector<int>>& updates, vector<vector<int>>& latencies, int min_profit) {
    // Your code here
}`,
                java: `public class Solution {
    public int[][] findArbitrage(int[][] updates, int[][] latencies, int min_profit) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const u = parseInt(lines[0]);\n    const updates = [];\n    for(let i=1; i<=u; i++) updates.push(lines[i].split(' ').map(Number));\n    const n = parseInt(lines[u+1]);\n    const latencies = [];\n    for(let i=u+2; i<u+2+n; i++) latencies.push(lines[i].split(' ').map(Number));\n    const min_profit = parseInt(lines[u+2+n]);\n    console.log(JSON.stringify(findArbitrage(updates, latencies, min_profit)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nu = int(lines[0])\nupdates = []\nfor i in range(1, u+1):\n    updates.append(list(map(int, lines[i].split())))\nn = int(lines[u+1])\nlatencies = []\nfor i in range(u+2, u+2+n):\n    latencies.append(list(map(int, lines[i].split())))\nmin_profit = int(lines[u+2+n])\nprint(json.dumps(find_arbitrage(updates, latencies, min_profit)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<vector<int>> findArbitrage(vector<vector<int>>& updates, vector<vector<int>>& latencies, int min_profit);\nint main() {\n    int u, n, min_profit;\n    cin >> u;\n    vector<vector<int>> updates(u, vector<int>(3));\n    for(int i=0; i<u; ++i) cin >> updates[i][0] >> updates[i][1] >> updates[i][2];\n    cin >> n;\n    vector<vector<int>> latencies(n, vector<int>(n));\n    for(int i=0; i<n; ++i)\n        for(int j=0; j<n; ++j) cin >> latencies[i][j];\n    cin >> min_profit;\n    vector<vector<int>> res = findArbitrage(updates, latencies, min_profit);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << res[i][0] << "," << res[i][1] << "," << res[i][2] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int u = sc.nextInt();\n        int[][] updates = new int[u][3];\n        for(int i=0; i<u; i++) {\n            updates[i][0] = sc.nextInt();\n            updates[i][1] = sc.nextInt();\n            updates[i][2] = sc.nextInt();\n        }\n        int n = sc.nextInt();\n        int[][] latencies = new int[n][n];\n        for(int i=0; i<n; i++)\n            for(int j=0; j<n; j++) latencies[i][j] = sc.nextInt();\n        int min_profit = sc.nextInt();\n        Solution sol = new Solution();\n        int[][] res = sol.findArbitrage(updates, latencies, min_profit);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + res[i][0] + "," + res[i][1] + "," + res[i][2] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
