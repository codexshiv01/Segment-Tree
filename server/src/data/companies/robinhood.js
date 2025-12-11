export const robinhoodData = {
    id: 'robinhood',
    name: 'Robinhood',
    logo: 'https://logo.clearbit.com/robinhood.com',
    description: 'Practice real Robinhood Online Assessment questions.',
    assessments: [{
        id: 'robinhood-oa-1',
        title: 'Robinhood OA-1',
        duration: 90,
        problems: [{
            id: 'stock-order-matching',
            title: 'Stock Order Matching Engine',
            difficulty: 'Hard',
            description: `Match buy and sell orders in a stock trading system.

You are given:
- orders: List of [order_id, type, price, quantity] where type: 1=buy, 2=sell

Goal: Match orders using price-time priority. Buy orders match with sell orders at or below buy price. Process in order. Return count of fully matched orders.

Input Format:
- orders: List of lists [id, type, price, qty]

Output Format:
- Return an integer (count of fully matched orders)

Constraints:
- 1 <= orders.length <= 1000
- type in {1, 2}
- 1 <= price <= 10000
- 1 <= quantity <= 1000`,
            examples: [
                { input: 'orders = [[1,1,100,10],[2,2,100,10]]', output: '2' },
                { input: 'orders = [[1,1,100,10],[2,2,110,10]]', output: '0' }
            ],
            testCases: [
                { input: 'orders = [[1,1,100,10],[2,2,100,10]]', judgeInput: '2\n1 1 100 10\n2 2 100 10', output: '2' },
                { input: 'orders = [[1,1,100,10],[2,2,110,10]]', judgeInput: '2\n1 1 100 10\n2 2 110 10', output: '0' },
                { input: 'orders = [[1,2,50,5],[2,1,50,5]]', judgeInput: '2\n1 2 50 5\n2 1 50 5', output: '2' },
                { input: 'orders = [[1,1,200,20],[2,2,180,20]]', judgeInput: '2\n1 1 200 20\n2 2 180 20', output: '2' },
                { input: 'orders = [[1,1,150,15],[2,2,150,10]]', judgeInput: '2\n1 1 150 15\n2 2 150 10', output: '1' },
                { input: 'orders = [[1,2,100,10],[2,2,100,10],[3,1,100,20]]', judgeInput: '3\n1 2 100 10\n2 2 100 10\n3 1 100 20', output: '3' },
                { input: 'orders = [[1,1,300,30],[2,1,300,30],[3,2,300,30]]', judgeInput: '3\n1 1 300 30\n2 1 300 30\n3 2 300 30', output: '2' },
                { input: 'orders = [[1,2,75,25],[2,1,80,25]]', judgeInput: '2\n1 2 75 25\n2 1 80 25', output: '2' },
                { input: 'orders = [[1,1,500,50],[2,2,600,50]]', judgeInput: '2\n1 1 500 50\n2 2 600 50', output: '0' },
                { input: 'orders = [[1,2,120,12],[2,2,120,12],[3,1,120,24]]', judgeInput: '3\n1 2 120 12\n2 2 120 12\n3 1 120 24', output: '3' },
                { input: 'orders = [[1,1,250,25],[2,2,250,25],[3,1,250,25],[4,2,250,25]]', judgeInput: '4\n1 1 250 25\n2 2 250 25\n3 1 250 25\n4 2 250 25', output: '4' },
                { input: 'orders = [[1,1,400,40],[2,2,390,20]]', judgeInput: '2\n1 1 400 40\n2 2 390 20', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @return {number}
 */
function matchedOrders(orders) {
    // Your code here
}`,
                python: `def matched_orders(orders):
    """
    :type orders: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int matchedOrders(vector<vector<int>>& orders) {
    // Your code here
}`,
                java: `public class Solution {
    public int matchedOrders(int[][] orders) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    console.log(matchedOrders(orders));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nprint(matched_orders(orders))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint matchedOrders(vector<vector<int>>& orders);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2] >> orders[i][3];\n    cout << matchedOrders(orders) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][4];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n            orders[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.matchedOrders(orders));\n    }\n}`
            }
        }, {
            id: 'portfolio-rebalancer',
            title: 'Portfolio Auto-Rebalancer',
            difficulty: 'Medium',
            description: `Calculate trades needed to rebalance a portfolio to target allocation.

You are given:
- holdings: List of [stock_id, current_value, target_percentage]
- total_value: Total portfolio value

Goal: For each stock, target_value = total_value * (target_percentage / 100). Calculate trade_amount = target_value - current_value. Return sum of absolute values of all trade_amounts, rounded to 2 decimals.

Input Format:
- holdings: List of lists [id, value, target_pct]
- total_value: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= holdings.length <= 100
- 1 <= current_value <= 1000000
- 0 <= target_percentage <= 100
- Sum of target_percentage = 100`,
            examples: [
                { input: 'holdings = [[1,4000,50],[2,6000,50]], total_value = 10000', output: '2000.00' },
                { input: 'holdings = [[1,5000,50],[2,5000,50]], total_value = 10000', output: '0.00' }
            ],
            testCases: [
                { input: 'holdings = [[1,4000,50],[2,6000,50]], total_value = 10000', judgeInput: '2\n1 4000 50\n2 6000 50\n10000', output: '2000.00' },
                { input: 'holdings = [[1,5000,50],[2,5000,50]], total_value = 10000', judgeInput: '2\n1 5000 50\n2 5000 50\n10000', output: '0.00' },
                { input: 'holdings = [[1,3000,40],[2,7000,60]], total_value = 10000', judgeInput: '2\n1 3000 40\n2 7000 60\n10000', output: '2000.00' },
                { input: 'holdings = [[1,2000,25],[2,3000,25],[3,2500,25],[4,2500,25]], total_value = 10000', judgeInput: '4\n1 2000 25\n2 3000 25\n3 2500 25\n4 2500 25\n10000', output: '1000.00' },
                { input: 'holdings = [[1,6000,60],[2,4000,40]], total_value = 10000', judgeInput: '2\n1 6000 60\n2 4000 40\n10000', output: '0.00' },
                { input: 'holdings = [[1,8000,70],[2,2000,30]], total_value = 10000', judgeInput: '2\n1 8000 70\n2 2000 30\n10000', output: '2000.00' },
                { input: 'holdings = [[1,1500,20],[2,3500,40],[3,5000,40]], total_value = 10000', judgeInput: '3\n1 1500 20\n2 3500 40\n3 5000 40\n10000', output: '1500.00' },
                { input: 'holdings = [[1,10000,100]], total_value = 10000', judgeInput: '1\n1 10000 100\n10000', output: '0.00' },
                { input: 'holdings = [[1,3333,33.33],[2,3333,33.33],[3,3334,33.34]], total_value = 10000', judgeInput: '3\n1 3333 33.33\n2 3333 33.33\n3 3334 33.34\n10000', output: '0.02' },
                { input: 'holdings = [[1,4500,50],[2,5500,50]], total_value = 10000', judgeInput: '2\n1 4500 50\n2 5500 50\n10000', output: '1000.00' },
                { input: 'holdings = [[1,2500,30],[2,7500,70]], total_value = 10000', judgeInput: '2\n1 2500 30\n2 7500 70\n10000', output: '1000.00' },
                { input: 'holdings = [[1,1000,10],[2,2000,20],[3,7000,70]], total_value = 10000', judgeInput: '3\n1 1000 10\n2 2000 20\n3 7000 70\n10000', output: '0.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} holdings
 * @param {number} total_value
 * @return {number}
 */
function rebalanceAmount(holdings, total_value) {
    // Your code here
}`,
                python: `def rebalance_amount(holdings, total_value):
    """
    :type holdings: List[List]
    :type total_value: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double rebalanceAmount(vector<vector<double>>& holdings, double total_value) {
    // Your code here
}`,
                java: `public class Solution {
    public double rebalanceAmount(double[][] holdings, double total_value) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const holdings = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        holdings.push([parseInt(parts[0]), parseFloat(parts[1]), parseFloat(parts[2])]);\n    }\n    const total_value = parseFloat(lines[n+1]);\n    console.log(rebalanceAmount(holdings, total_value).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nholdings = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    holdings.append([int(parts[0]), float(parts[1]), float(parts[2])])\ntotal_value = float(lines[n+1])\nprint(f'{rebalance_amount(holdings, total_value):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble rebalanceAmount(vector<vector<double>>& holdings, double total_value);\nint main() {\n    int n;\n    double total_value;\n    cin >> n;\n    vector<vector<double>> holdings(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> holdings[i][0] >> holdings[i][1] >> holdings[i][2];\n    cin >> total_value;\n    cout << fixed << setprecision(2) << rebalanceAmount(holdings, total_value) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] holdings = new double[n][3];\n        for(int i=0; i<n; i++) {\n            holdings[i][0] = sc.nextDouble();\n            holdings[i][1] = sc.nextDouble();\n            holdings[i][2] = sc.nextDouble();\n        }\n        double total_value = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.rebalanceAmount(holdings, total_value));\n    }\n}`
            }
        }]
    }]
};
