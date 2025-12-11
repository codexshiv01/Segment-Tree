export const upstoxData = {
    id: 'upstox',
    name: 'Upstox',
    logo: 'https://logo.clearbit.com/upstox.com',
    description: 'Practice real Upstox Online Assessment questions.',
    assessments: [{
        id: 'upstox-oa-1',
        title: 'Upstox OA-1',
        duration: 90,
        problems: [{
            id: 'stock-profit',
            title: 'Max Profit with Transaction Fee',
            difficulty: 'Medium',
            description: `Calculate max profit from stock trading with fees.

You are given:
- prices: List of daily stock prices
- fee: Transaction fee per sell operation

Goal: You can buy and sell multiple times, but must sell before buying again. Each sell incurs the fee. Return max profit.

Input Format:
- prices: List of integers
- fee: Integer

Output Format:
- Return an integer (max profit)

Constraints:
- 1 <= prices.length <= 50000
- 0 <= prices[i], fee <= 50000`,
            examples: [
                { input: 'prices = [1, 3, 2, 8, 4, 9], fee = 2', output: '8' },
                { input: 'prices = [1, 3, 7, 5, 10, 3], fee = 3', output: '6' }
            ],
            testCases: [
                { input: 'prices = [1, 3, 2, 8, 4, 9], fee = 2', judgeInput: '6\n1 3 2 8 4 9\n2', output: '8' },
                { input: 'prices = [1, 3, 7, 5, 10, 3], fee = 3', judgeInput: '6\n1 3 7 5 10 3\n3', output: '6' },
                { input: 'prices = [1, 4, 6, 2, 8, 3, 10, 14], fee = 3', judgeInput: '8\n1 4 6 2 8 3 10 14\n3', output: '13' },
                { input: 'prices = [9, 8, 7, 1, 2], fee = 3', judgeInput: '5\n9 8 7 1 2\n3', output: '0' },
                { input: 'prices = [1, 3, 2, 8, 4, 9], fee = 0', judgeInput: '6\n1 3 2 8 4 9\n0', output: '13' },
                { input: 'prices = [50, 50, 50, 50], fee = 2', judgeInput: '4\n50 50 50 50\n2', output: '0' },
                { input: 'prices = [10, 20, 30, 40, 50], fee = 5', judgeInput: '5\n10 20 30 40 50\n5', output: '35' },
                { input: 'prices = [10, 15, 10, 15, 10, 15], fee = 2', judgeInput: '6\n10 15 10 15 10 15\n2', output: '9' },
                { input: 'prices = [1, 100], fee = 10', judgeInput: '2\n1 100\n10', output: '89' },
                { input: 'prices = [1, 100], fee = 100', judgeInput: '2\n1 100\n100', output: '0' },
                { input: 'prices = [10, 1, 5, 2, 8], fee = 2', judgeInput: '5\n10 1 5 2 8\n2', output: '6' },
                { input: 'prices = [1, 2, 3, 4, 5], fee = 1', judgeInput: '5\n1 2 3 4 5\n1', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
    // Your code here
}`,
                python: `def max_profit(prices, fee):
    """
    :type prices: List[int]
    :type fee: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxProfit(vector<int>& prices, int fee) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxProfit(int[] prices, int fee) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const prices = lines[1].split(' ').map(Number);\n    const fee = parseInt(lines[2]);\n    console.log(maxProfit(prices, fee));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nprices = list(map(int, lines[1].split()))\nfee = int(lines[2])\nprint(max_profit(prices, fee))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxProfit(vector<int>& prices, int fee);\nint main() {\n    int n, fee;\n    cin >> n;\n    vector<int> prices(n);\n    for(int i=0; i<n; ++i) cin >> prices[i];\n    cin >> fee;\n    cout << maxProfit(prices, fee) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] prices = new int[n];\n        for(int i=0; i<n; i++) prices[i] = sc.nextInt();\n        int fee = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxProfit(prices, fee));\n    }\n}`
            }
        }, {
            id: 'order-book',
            title: 'Order Book Matching',
            difficulty: 'Hard',
            description: `Match buy and sell orders in an order book.

You are given:
- orders: List of [id, type, price, quantity] (type: 0=Buy, 1=Sell)

Goal: Match orders.
- Buy order matches with lowest Sell price <= Buy price.
- Sell order matches with highest Buy price >= Sell price.
- Priority: Best price, then earliest timestamp (order in list).
- Return the number of remaining shares (unmatched quantity) across all orders.

Input Format:
- orders: List of lists [id, type, price, quantity]

Output Format:
- Return an integer (total remaining quantity)

Constraints:
- 1 <= orders.length <= 1000
- 1 <= quantity <= 10000`,
            examples: [
                { input: 'orders = [[1,0,100,10],[2,1,90,5]]', output: '5' },
                { input: 'orders = [[1,0,100,10],[2,1,110,5]]', output: '15' }
            ],
            testCases: [
                { input: 'orders = [[1,0,100,10],[2,1,90,5]]', judgeInput: '2\n1 0 100 10\n2 1 90 5', output: '5' },
                { input: 'orders = [[1,0,100,10],[2,1,110,5]]', judgeInput: '2\n1 0 100 10\n2 1 110 5', output: '15' },
                { input: 'orders = [[1,0,100,10],[2,1,90,10]]', judgeInput: '2\n1 0 100 10\n2 1 90 10', output: '0' },
                { input: 'orders = [[1,0,100,10],[2,0,100,5],[3,1,90,12]]', judgeInput: '3\n1 0 100 10\n2 0 100 5\n3 1 90 12', output: '3' },
                { input: 'orders = [[1,1,90,10],[2,0,100,5]]', judgeInput: '2\n1 1 90 10\n2 0 100 5', output: '5' },
                { input: 'orders = [[1,0,100,10],[2,1,90,5],[3,1,95,5]]', judgeInput: '3\n1 0 100 10\n2 1 90 5\n3 1 95 5', output: '0' },
                { input: 'orders = [[1,0,100,10],[2,1,90,20]]', judgeInput: '2\n1 0 100 10\n2 1 90 20', output: '10' },
                { input: 'orders = [[1,0,10,5],[2,0,20,5],[3,1,15,5]]', judgeInput: '3\n1 0 10 5\n2 0 20 5\n3 1 15 5', output: '5' },
                { input: 'orders = [[1,1,100,10],[2,1,90,10],[3,0,95,15]]', judgeInput: '3\n1 1 100 10\n2 1 90 10\n3 0 95 15', output: '5' },
                { input: 'orders = [[1,0,100,10],[2,1,100,10]]', judgeInput: '2\n1 0 100 10\n2 1 100 10', output: '0' },
                { input: 'orders = [[1,0,100,10],[2,1,101,10]]', judgeInput: '2\n1 0 100 10\n2 1 101 10', output: '20' },
                { input: 'orders = [[1,0,100,10],[2,0,100,10],[3,1,100,15]]', judgeInput: '3\n1 0 100 10\n2 0 100 10\n3 1 100 15', output: '5' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @return {number}
 */
function matchOrders(orders) {
    // Your code here
}`,
                python: `def match_orders(orders):
    """
    :type orders: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int matchOrders(vector<vector<int>>& orders) {
    // Your code here
}`,
                java: `public class Solution {
    public int matchOrders(int[][] orders) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    console.log(matchOrders(orders));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nprint(match_orders(orders))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint matchOrders(vector<vector<int>>& orders);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2] >> orders[i][3];\n    cout << matchOrders(orders) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][4];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n            orders[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.matchOrders(orders));\n    }\n}`
            }
        }]
    }]
};
