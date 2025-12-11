export const bnyData = {
    id: 'bny',
    name: 'BNY Mellon',
    logo: 'https://logo.clearbit.com/bnymellon.com',
    description: 'Practice real BNY Mellon Online Assessment questions.',
    assessments: [{
        id: 'bny-oa-1',
        title: 'BNY Mellon OA-1',
        duration: 90,
        problems: [{
            id: 'settlement-matching',
            title: 'Trade Settlement Matching Engine',
            difficulty: 'Medium',
            description: `Match trades with settlement instructions for clearing and settlement. Identify unmatched trades.

You are given:
- trades: List of [trade_id, amount, currency, date]
- settlements: List of [settlement_id, amount, currency, date]

Goal: A trade matches a settlement if amount, currency, and date all match exactly. Return count of unmatched trades.

Input Format:
- trades: List of lists [id, amount, currency, date]
- settlements: List of lists [id, amount, currency, date]

Output Format:
- Return an integer

Constraints:
- 1 <= trades.length, settlements.length <= 1000
- 1 <= amount <= 1000000
- currency is 1-digit integer (1-9)
- 1 <= date <= 365`,
            examples: [
                { input: 'trades = [[1,1000,1,100],[2,2000,2,101]], settlements = [[1,1000,1,100]]', output: '1' },
                { input: 'trades = [[1,1000,1,100]], settlements = [[1,1000,1,100],[2,2000,2,101]]', output: '0' }
            ],
            testCases: [
                { input: 'trades = [[1,1000,1,100],[2,2000,2,101]], settlements = [[1,1000,1,100]]', judgeInput: '2\n1 1000 1 100\n2 2000 2 101\n1\n1 1000 1 100', output: '1' },
                { input: 'trades = [[1,1000,1,100]], settlements = [[1,1000,1,100],[2,2000,2,101]]', judgeInput: '1\n1 1000 1 100\n2\n1 1000 1 100\n2 2000 2 101', output: '0' },
                { input: 'trades = [[1,5000,1,50],[2,3000,2,60],[3,4000,1,70]], settlements = [[1,5000,1,50],[2,3000,2,60],[3,4000,1,70]]', judgeInput: '3\n1 5000 1 50\n2 3000 2 60\n3 4000 1 70\n3\n1 5000 1 50\n2 3000 2 60\n3 4000 1 70', output: '0' },
                { input: 'trades = [[1,1000,1,10],[2,2000,1,10]], settlements = [[1,1000,1,10]]', judgeInput: '2\n1 1000 1 10\n2 2000 1 10\n1\n1 1000 1 10', output: '1' },
                { input: 'trades = [[1,7500,3,120]], settlements = []', judgeInput: '1\n1 7500 3 120\n0', output: '1' },
                { input: 'trades = [[1,10000,1,200],[2,15000,2,201],[3,20000,3,202]], settlements = [[1,10000,1,200],[2,15000,2,200]]', judgeInput: '3\n1 10000 1 200\n2 15000 2 201\n3 20000 3 202\n2\n1 10000 1 200\n2 15000 2 200', output: '2' },
                { input: 'trades = [[1,5000,1,100],[2,5000,1,100]], settlements = [[1,5000,1,100]]', judgeInput: '2\n1 5000 1 100\n2 5000 1 100\n1\n1 5000 1 100', output: '1' },
                { input: 'trades = [], settlements = [[1,1000,1,100]]', judgeInput: '0\n1\n1 1000 1 100', output: '0' },
                { input: 'trades = [[1,25000,5,180],[2,30000,6,181],[3,35000,7,182]], settlements = [[1,25000,5,180],[3,35000,7,182]]', judgeInput: '3\n1 25000 5 180\n2 30000 6 181\n3 35000 7 182\n2\n1 25000 5 180\n3 35000 7 182', output: '1' },
                { input: 'trades = [[1,50000,1,250],[2,60000,2,251]], settlements = [[1,50000,1,250],[2,60000,2,251],[3,70000,3,252]]', judgeInput: '2\n1 50000 1 250\n2 60000 2 251\n3\n1 50000 1 250\n2 60000 2 251\n3 70000 3 252', output: '0' },
                { input: 'trades = [[1,8000,1,80],[2,9000,1,80],[3,10000,1,80]], settlements = [[1,8000,1,80]]', judgeInput: '3\n1 8000 1 80\n2 9000 1 80\n3 10000 1 80\n1\n1 8000 1 80', output: '2' },
                { input: 'trades = [[1,12000,4,150],[2,13000,4,150]], settlements = [[1,12000,4,150],[2,13000,4,151]]', judgeInput: '2\n1 12000 4 150\n2 13000 4 150\n2\n1 12000 4 150\n2 13000 4 151', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} trades
 * @param {number[][]} settlements
 * @return {number}
 */
function unmatchedTrades(trades, settlements) {
    // Your code here
}`,
                python: `def unmatched_trades(trades, settlements):
    """
    :type trades: List[List[int]]
    :type settlements: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int unmatchedTrades(vector<vector<int>>& trades, vector<vector<int>>& settlements) {
    // Your code here
}`,
                java: `public class Solution {
    public int unmatchedTrades(int[][] trades, int[][] settlements) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const trades = [];\n    for(let i=1; i<=n; i++) trades.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const settlements = [];\n    for(let i=n+2; i<n+2+m; i++) settlements.push(lines[i].split(' ').map(Number));\n    console.log(unmatchedTrades(trades, settlements));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntrades = []\nfor i in range(1, n+1):\n    trades.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nsettlements = []\nfor i in range(n+2, n+2+m):\n    settlements.append(list(map(int, lines[i].split())))\nprint(unmatched_trades(trades, settlements))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint unmatchedTrades(vector<vector<int>>& trades, vector<vector<int>>& settlements);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> trades(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> trades[i][0] >> trades[i][1] >> trades[i][2] >> trades[i][3];\n    cin >> m;\n    vector<vector<int>> settlements(m, vector<int>(4));\n    for(int i=0; i<m; ++i) cin >> settlements[i][0] >> settlements[i][1] >> settlements[i][2] >> settlements[i][3];\n    cout << unmatchedTrades(trades, settlements) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] trades = new int[n][4];\n        for(int i=0; i<n; i++) {\n            trades[i][0] = sc.nextInt();\n            trades[i][1] = sc.nextInt();\n            trades[i][2] = sc.nextInt();\n            trades[i][3] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] settlements = new int[m][4];\n        for(int i=0; i<m; i++) {\n            settlements[i][0] = sc.nextInt();\n            settlements[i][1] = sc.nextInt();\n            settlements[i][2] = sc.nextInt();\n            settlements[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.unmatchedTrades(trades, settlements));\n    }\n}`
            }
        }, {
            id: 'custody-fee',
            title: 'Custody Fee Calculator',
            difficulty: 'Easy',
            description: `Calculate total custody fees for assets under management.

You are given:
- assets: List of [asset_id, value, fee_rate_bps]

Goal: Calculate total fees. For each asset, fee = value * fee_rate_bps / 10000. Return sum of all fees rounded to 2 decimals.

Input Format:
- assets: List of lists [id, value, fee_rate]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= assets.length <= 100
- 1 <= value <= 10000000
- 1 <= fee_rate_bps <= 500`,
            examples: [
                { input: 'assets = [[1,100000,50],[2,200000,30]]', output: '1100.00' },
                { input: 'assets = [[1,50000,20]]', output: '100.00' }
            ],
            testCases: [
                { input: 'assets = [[1,100000,50],[2,200000,30]]', judgeInput: '2\n1 100000 50\n2 200000 30', output: '1100.00' },
                { input: 'assets = [[1,50000,20]]', judgeInput: '1\n1 50000 20', output: '100.00' },
                { input: 'assets = [[1,500000,100],[2,300000,75],[3,200000,50]]', judgeInput: '3\n1 500000 100\n2 300000 75\n3 200000 50\n', output: '8250.00' },
                { input: 'assets = [[1,1000000,25]]', judgeInput: '1\n1 1000000 25', output: '2500.00' },
                { input: 'assets = [[1,75000,40],[2,125000,60]]', judgeInput: '2\n1 75000 40\n2 125000 60', output: '1050.00' },
                { input: 'assets = [[1,250000,80],[2,150000,90],[3,100000,70]]', judgeInput: '3\n1 250000 80\n2 150000 90\n3 100000 70', output: '4050.00' },
                { input: 'assets = [[1,60000,15]]', judgeInput: '1\n1 60000 15', output: '90.00' },
                { input: 'assets = [[1,800000,120],[2,400000,95]]', judgeInput: '2\n1 800000 120\n2 400000 95', output: '13400.00' },
                { input: 'assets = [[1,150000,35],[2,250000,45],[3,350000,55]]', judgeInput: '3\n1 150000 35\n2 250000 45\n3 350000 55', output: '3500.00' },
                { input: 'assets = [[1,90000,28]]', judgeInput: '1\n1 90000 28', output: '252.00' },
                { input: 'assets = [[1,450000,110],[2,550000,130]]', judgeInput: '2\n1 450000 110\n2 550000 130', output: '12100.00' },
                { input: 'assets = [[1,120000,42],[2,180000,58],[3,220000,66]]', judgeInput: '3\n1 120000 42\n2 180000 58\n3 220000 66', output: '2996.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} assets
 * @return {number}
 */
function custodyFees(assets) {
    // Your code here
}`,
                python: `def custody_fees(assets):
    """
    :type assets: List[List[int]]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double custodyFees(vector<vector<int>>& assets) {
    // Your code here
}`,
                java: `public class Solution {
    public double custodyFees(int[][] assets) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const assets = [];\n    for(let i=1; i<=n; i++) assets.push(lines[i].split(' ').map(Number));\n    console.log(custodyFees(assets).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nassets = []\nfor i in range(1, n+1):\n    assets.append(list(map(int, lines[i].split())))\nprint(f'{custody_fees(assets):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble custodyFees(vector<vector<int>>& assets);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> assets(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> assets[i][0] >> assets[i][1] >> assets[i][2];\n    cout << fixed << setprecision(2) << custodyFees(assets) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] assets = new int[n][3];\n        for(int i=0; i<n; i++) {\n            assets[i][0] = sc.nextInt();\n            assets[i][1] = sc.nextInt();\n            assets[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.custodyFees(assets));\n    }\n}`
            }
        }]
    }]
};
