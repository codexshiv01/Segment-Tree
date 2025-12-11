export const nksecuritiesData = {
    id: 'nksecurities',
    name: 'NK Securities',
    logo: 'https://logo.clearbit.com/nksecurities.com',
    description: 'Practice real NK Securities Online Assessment questions.',
    assessments: [{
        id: 'nksecurities-oa-1',
        title: 'NK Securities OA-1',
        duration: 90,
        problems: [{
            id: 'tick-data-compression',
            title: 'Tick Data Compression Engine',
            difficulty: 'Hard',
            description: `NK Securities processes millions of market ticks per second. Design a compression algorithm that stores price changes efficiently using delta encoding with variable-length integers.

You are given:
- ticks: List of price ticks in chronological order
- base_price: Initial reference price

Goal: Compress the tick data by storing only the delta from the previous tick. Use the following encoding: if abs(delta) <= 127, use 1 byte; if abs(delta) <= 32767, use 2 bytes; otherwise use 4 bytes. Return total bytes needed.

Input Format:
- ticks: List of integers (prices in cents)
- base_price: Integer

Output Format:
- Return an integer (total bytes)

Constraints:
- 1 <= ticks.length <= 100000
- 1 <= base_price, tick <= 10000000`,
            examples: [
                { input: 'ticks = [10050,10052,10049,10051], base_price = 10050', output: '3' },
                { input: 'ticks = [10000,10200,10400], base_price = 10000', output: '4' }
            ],
            testCases: [
                { input: 'ticks = [10050,10052,10049,10051], base_price = 10050', judgeInput: '4\n10050 10052 10049 10051\n10050', output: '3' },
                { input: 'ticks = [10000,10200,10400], base_price = 10000', judgeInput: '3\n10000 10200 10400\n10000', output: '4' },
                { input: 'ticks = [100,101,102,103,104], base_price = 100', judgeInput: '5\n100 101 102 103 104\n100', output: '4' },
                { input: 'ticks = [1000,1001,33000], base_price = 1000', judgeInput: '3\n1000 1001 33000\n1000', output: '5' },
                { input: 'ticks = [50000,50001,50002,50003,50004,50005], base_price = 50000', judgeInput: '6\n50000 50001 50002 50003 50004 50005\n50000', output: '5' },
                { input: 'ticks = [10000,10128,10255], base_price = 10000', judgeInput: '3\n10000 10128 10255\n10000', output: '4' },
                { input: 'ticks = [5000,5100,5050,5075], base_price = 5000', judgeInput: '4\n5000 5100 5050 5075\n5000', output: '3' },
                { input: 'ticks = [20000,20001,20002,20003,20004,20005,20006,20007,20008,20009], base_price = 20000', judgeInput: '10\n20000 20001 20002 20003 20004 20005 20006 20007 20008 20009\n20000', output: '9' },
                { input: 'ticks = [15000,15200,15100,15150], base_price = 15000', judgeInput: '4\n15000 15200 15100 15150\n15000', output: '6' },
                { input: 'ticks = [8000,8127,8128,8255], base_price = 8000', judgeInput: '4\n8000 8127 8128 8255\n8000', output: '4' },
                { input: 'ticks = [30000,35000,40000], base_price = 30000', judgeInput: '3\n30000 35000 40000\n30000', output: '6' },
                { input: 'ticks = [12345,12346,12347,12348,12349,12350,12351,12352], base_price = 12345', judgeInput: '8\n12345 12346 12347 12348 12349 12350 12351 12352\n12345', output: '7' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} ticks
 * @param {number} base_price
 * @return {number}
 */
function compressTicks(ticks, base_price) {
    // Your code here
}`,
                python: `def compress_ticks(ticks, base_price):
    """
    :type ticks: List[int]
    :type base_price: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int compressTicks(vector<int>& ticks, int base_price) {
    // Your code here
}`,
                java: `public class Solution {
    public int compressTicks(int[] ticks, int base_price) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const ticks = lines[1].split(' ').map(Number);\n    const base_price = parseInt(lines[2]);\n    console.log(compressTicks(ticks, base_price));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nticks = list(map(int, lines[1].split()))\nbase_price = int(lines[2])\nprint(compress_ticks(ticks, base_price))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint compressTicks(vector<int>& ticks, int base_price);\nint main() {\n    int n, base_price;\n    cin >> n;\n    vector<int> ticks(n);\n    for(int i=0; i<n; ++i) cin >> ticks[i];\n    cin >> base_price;\n    cout << compressTicks(ticks, base_price) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] ticks = new int[n];\n        for(int i=0; i<n; i++) ticks[i] = sc.nextInt();\n        int base_price = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.compressTicks(ticks, base_price));\n    }\n}`
            }
        }, {
            id: 'vwap-calculation',
            title: 'Streaming VWAP with Time Decay',
            difficulty: 'Hard',
            description: `Calculate Volume-Weighted Average Price (VWAP) with exponential time decay for recent trades. Older trades should have less weight using decay factor.

You are given:
- trades: List of [timestamp, price, volume]
- current_time: Current timestamp
- decay_factor: Exponential decay factor (0 < decay_factor < 1)

Goal: Calculate time-decayed VWAP where each trade's weight is volume * pow(decay_factor, (current_time - timestamp)). Return VWAP rounded to 2 decimal places.

Input Format:
- trades: List of lists [time, price, volume]
- current_time: Integer
- decay_factor: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= trades.length <= 10000
- 0 <= timestamp <= current_time <= 1000000
- 1 <= price <= 100000
- 1 <= volume <= 1000000
- 0.5 <= decay_factor <= 0.99`,
            examples: [
                { input: 'trades = [[100,1000,100],[110,1010,200]], current_time = 120, decay_factor = 0.9', output: '1007.41' },
                { input: 'trades = [[100,1000,100]], current_time = 100, decay_factor = 0.9', output: '1000.00' }
            ],
            testCases: [
                { input: 'trades = [[100,1000,100],[110,1010,200]], current_time = 120, decay_factor = 0.9', judgeInput: '2\n100 1000 100\n110 1010 200\n120\n0.9', output: '1007.41' },
                { input: 'trades = [[100,1000,100]], current_time = 100, decay_factor = 0.9', judgeInput: '1\n100 1000 100\n100\n0.9', output: '1000.00' },
                { input: 'trades = [[100,1000,100],[100,2000,100]], current_time = 100, decay_factor = 0.9', judgeInput: '2\n100 1000 100\n100 2000 100\n100\n0.9', output: '1500.00' },
                { input: 'trades = [[50,1000,50],[75,1100,100],[100,1200,150]], current_time = 100, decay_factor = 0.8', judgeInput: '3\n50 1000 50\n75 1100 100\n100 1200 150\n100\n0.8', output: '1157.89' },
                { input: 'trades = [[90,1000,100],[95,1005,200],[100,1010,300]], current_time = 100, decay_factor = 0.95', judgeInput: '3\n90 1000 100\n95 1005 200\n100 1010 300\n100\n0.95', output: '1007.23' },
                { input: 'trades = [[0,1000,1000]], current_time = 10, decay_factor = 0.5', judgeInput: '1\n0 1000 1000\n10\n0.5', output: '1000.00' },
                { input: 'trades = [[80,2000,100],[90,1950,150],[100,2050,200]], current_time = 100, decay_factor = 0.85', judgeInput: '3\n80 2000 100\n90 1950 150\n100 2050 200\n100\n0.85', output: '2017.50' },
                { input: 'trades = [[50,5000,500],[60,5100,600],[70,5200,700]], current_time = 80, decay_factor = 0.9', judgeInput: '3\n50 5000 500\n60 5100 600\n70 5200 700\n80\n0.9', output: '5144.17' },
                { input: 'trades = [[10,1500,1000],[20,1550,1500],[30,1600,2000]], current_time = 40, decay_factor = 0.92', judgeInput: '3\n10 1500 1000\n20 1550 1500\n30 1600 2000\n40\n0.92', output: '1569.37' },
                { input: 'trades = [[0,10000,100],[5,10050,200],[10,10100,300]], current_time = 15, decay_factor = 0.95', judgeInput: '3\n0 10000 100\n5 10050 200\n10 10100 300\n15\n0.95', output: '10074.17' },
                { input: 'trades = [[100,3000,1000]], current_time = 110, decay_factor = 0.8', judgeInput: '1\n100 3000 1000\n110\n0.8', output: '3000.00' },
                { input: 'trades = [[0,1200,500],[10,1250,600],[20,1300,700],[30,1350,800]], current_time = 35, decay_factor = 0.88', judgeInput: '4\n0 1200 500\n10 1250 600\n20 1300 700\n30 1350 800\n35\n0.88', output: '1308.31' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} trades
 * @param {number} current_time
 * @param {number} decay_factor
 * @return {number}
 */
function calculateVWAP(trades, current_time, decay_factor) {
    // Your code here
}`,
                python: `def calculate_vwap(trades, current_time, decay_factor):
    """
    :type trades: List[List[int]]
    :type current_time: int
    :type decay_factor: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double calculateVWAP(vector<vector<int>>& trades, int current_time, double decay_factor) {
    // Your code here
}`,
                java: `public class Solution {
    public double calculateVWAP(int[][] trades, int current_time, double decay_factor) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const trades = [];\n    for(let i=1; i<=n; i++) trades.push(lines[i].split(' ').map(Number));\n    const current_time = parseInt(lines[n+1]);\n    const decay_factor = parseFloat(lines[n+2]);\n    console.log(calculateVWAP(trades, current_time, decay_factor).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntrades = []\nfor i in range(1, n+1):\n    trades.append(list(map(int, lines[i].split())))\ncurrent_time = int(lines[n+1])\ndecay_factor = float(lines[n+2])\nprint(f'{calculate_vwap(trades, current_time, decay_factor):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble calculateVWAP(vector<vector<int>>& trades, int current_time, double decay_factor);\nint main() {\n    int n, current_time;\n    double decay_factor;\n    cin >> n;\n    vector<vector<int>> trades(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> trades[i][0] >> trades[i][1] >> trades[i][2];\n    cin >> current_time >> decay_factor;\n    cout << fixed << setprecision(2) << calculateVWAP(trades, current_time, decay_factor) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] trades = new int[n][3];\n        for(int i=0; i<n; i++) {\n            trades[i][0] = sc.nextInt();\n            trades[i][1] = sc.nextInt();\n            trades[i][2] = sc.nextInt();\n        }\n        int current_time = sc.nextInt();\n        double decay_factor = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.calculateVWAP(trades, current_time, decay_factor));\n    }\n}`
            }
        }]
    }]
};
