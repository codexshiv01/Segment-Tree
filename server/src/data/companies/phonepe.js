export const phonepeData = {
    id: 'phonepe',
    name: 'PhonePe',
    logo: 'https://logo.clearbit.com/phonepe.com',
    description: 'Practice real PhonePe Online Assessment questions.',
    assessments: [{
        id: 'phonepe-oa-1',
        title: 'PhonePe OA-1',
        duration: 90,
        problems: [{
            id: 'payment-gateway-router',
            title: 'Smart Payment Gateway Router',
            difficulty: 'Hard',
            description: `Route transactions to the best payment gateway.

You are given:
- gateways: List of [gateway_id, success_rate, latency_ms, fee_percent]
- transaction_amount: Amount to be processed
- max_latency: Maximum allowed latency

Goal: Select the gateway with the highest success_rate that satisfies the max_latency constraint. If ties, choose the one with the lowest fee. If still tied, choose the smallest gateway_id. Return the selected gateway_id. If no gateway meets the criteria, return -1.

Input Format:
- gateways: List of lists [id, rate, latency, fee]
- transaction_amount: Integer (unused in logic but part of context)
- max_latency: Integer

Output Format:
- Return an integer (gateway_id)

Constraints:
- 1 <= gateways.length <= 100
- 0 <= success_rate <= 100
- 1 <= latency <= 5000`,
            examples: [
                { input: 'gateways = [[1,99,200,1.5],[2,98,100,1.0]], amount = 1000, max_latency = 300', output: '1' },
                { input: 'gateways = [[1,90,500,2.0]], amount = 500, max_latency = 100', output: '-1' }
            ],
            testCases: [
                { input: 'gateways = [[1,99,200,1.5],[2,98,100,1.0]], amount = 1000, max_latency = 300', judgeInput: '2\n1 99 200 1.5\n2 98 100 1.0\n1000\n300', output: '1' },
                { input: 'gateways = [[1,90,500,2.0]], amount = 500, max_latency = 100', judgeInput: '1\n1 90 500 2.0\n500\n100', output: '-1' },
                { input: 'gateways = [[1,95,100,1.0],[2,95,100,0.5]], amount = 100, max_latency = 200', judgeInput: '2\n1 95 100 1.0\n2 95 100 0.5\n100\n200', output: '2' },
                { input: 'gateways = [[1,80,50,1.0],[2,90,150,1.0],[3,85,100,1.0]], amount = 200, max_latency = 120', judgeInput: '3\n1 80 50 1.0\n2 90 150 1.0\n3 85 100 1.0\n200\n120', output: '3' },
                { input: 'gateways = [[1,99,200,1.0],[2,99,200,1.0]], amount = 100, max_latency = 300', judgeInput: '2\n1 99 200 1.0\n2 99 200 1.0\n100\n300', output: '1' },
                { input: 'gateways = [[1,50,10,0.1],[2,60,20,0.2],[3,70,30,0.3]], amount = 1000, max_latency = 25', judgeInput: '3\n1 50 10 0.1\n2 60 20 0.2\n3 70 30 0.3\n1000\n25', output: '2' },
                { input: 'gateways = [[1,100,1000,5.0]], amount = 50, max_latency = 500', judgeInput: '1\n1 100 1000 5.0\n50\n500', output: '-1' },
                { input: 'gateways = [[1,90,100,1.0],[2,92,110,1.0],[3,94,120,1.0]], amount = 100, max_latency = 115', judgeInput: '3\n1 90 100 1.0\n2 92 110 1.0\n3 94 120 1.0\n100\n115', output: '2' },
                { input: 'gateways = [[1,88,200,1.5],[2,88,150,1.5],[3,88,100,1.5]], amount = 500, max_latency = 250', judgeInput: '3\n1 88 200 1.5\n2 88 150 1.5\n3 88 100 1.5\n500\n250', output: '3' },
                { input: 'gateways = [[1,99,50,2.0],[2,98,50,1.0]], amount = 1000, max_latency = 60', judgeInput: '2\n1 99 50 2.0\n2 98 50 1.0\n1000\n60', output: '1' },
                { input: 'gateways = [[1,10,10,1.0],[2,20,20,1.0],[3,30,30,1.0]], amount = 100, max_latency = 5', judgeInput: '3\n1 10 10 1.0\n2 20 20 1.0\n3 30 30 1.0\n100\n5', output: '-1' },
                { input: 'gateways = [[1,95,100,1.2],[2,95,100,1.1],[3,95,100,1.3]], amount = 300, max_latency = 150', judgeInput: '3\n1 95 100 1.2\n2 95 100 1.1\n3 95 100 1.3\n300\n150', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} gateways
 * @param {number} amount
 * @param {number} max_latency
 * @return {number}
 */
function bestGateway(gateways, amount, max_latency) {
    // Your code here
}`,
                python: `def best_gateway(gateways, amount, max_latency):
    """
    :type gateways: List[List[float]]
    :type amount: int
    :type max_latency: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int bestGateway(vector<vector<double>>& gateways, int amount, int max_latency) {
    // Your code here
}`,
                java: `public class Solution {
    public int bestGateway(double[][] gateways, int amount, int max_latency) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const gateways = [];\n    for(let i=1; i<=n; i++) gateways.push(lines[i].split(' ').map(Number));\n    const amount = parseInt(lines[n+1]);\n    const max_latency = parseInt(lines[n+2]);\n    console.log(bestGateway(gateways, amount, max_latency));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ngateways = []\nfor i in range(1, n+1):\n    gateways.append(list(map(float, lines[i].split())))\namount = int(lines[n+1])\nmax_latency = int(lines[n+2])\nprint(best_gateway(gateways, amount, max_latency))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint bestGateway(vector<vector<double>>& gateways, int amount, int max_latency);\nint main() {\n    int n, amount, max_latency;\n    cin >> n;\n    vector<vector<double>> gateways(n, vector<double>(4));\n    for(int i=0; i<n; ++i) cin >> gateways[i][0] >> gateways[i][1] >> gateways[i][2] >> gateways[i][3];\n    cin >> amount >> max_latency;\n    cout << bestGateway(gateways, amount, max_latency) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] gateways = new double[n][4];\n        for(int i=0; i<n; i++) {\n            gateways[i][0] = sc.nextDouble();\n            gateways[i][1] = sc.nextDouble();\n            gateways[i][2] = sc.nextDouble();\n            gateways[i][3] = sc.nextDouble();\n        }\n        int amount = sc.nextInt();\n        int max_latency = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.bestGateway(gateways, amount, max_latency));\n    }\n}`
            }
        }, {
            id: 'cashback-fraud',
            title: 'Cashback Fraud Detector',
            difficulty: 'Medium',
            description: `Detect potential cashback fraud circles.

You are given:
- transactions: List of [sender_id, receiver_id, amount]

Goal: A fraud circle is defined as a sequence of transactions where money flows A -> B -> ... -> A within the same batch. Return the count of users involved in any such circular transaction loop.

Input Format:
- transactions: List of lists [sender, receiver, amount]

Output Format:
- Return an integer (count of unique users in loops)

Constraints:
- 1 <= transactions.length <= 1000
- 1 <= user_id <= 10000`,
            examples: [
                { input: 'transactions = [[1,2,100],[2,3,100],[3,1,100]]', output: '3' },
                { input: 'transactions = [[1,2,50],[2,3,50]]', output: '0' }
            ],
            testCases: [
                { input: 'transactions = [[1,2,100],[2,3,100],[3,1,100]]', judgeInput: '3\n1 2 100\n2 3 100\n3 1 100', output: '3' },
                { input: 'transactions = [[1,2,50],[2,3,50]]', judgeInput: '2\n1 2 50\n2 3 50', output: '0' },
                { input: 'transactions = [[1,2,10],[2,1,10]]', judgeInput: '2\n1 2 10\n2 1 10', output: '2' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,4,10],[4,2,10]]', judgeInput: '4\n1 2 10\n2 3 10\n3 4 10\n4 2 10', output: '3' },
                { input: 'transactions = [[1,2,10],[3,4,10],[4,3,10]]', judgeInput: '3\n1 2 10\n3 4 10\n4 3 10', output: '2' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,4,10],[4,5,10],[5,1,10]]', judgeInput: '5\n1 2 10\n2 3 10\n3 4 10\n4 5 10\n5 1 10', output: '5' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,4,10],[5,6,10]]', judgeInput: '4\n1 2 10\n2 3 10\n3 4 10\n5 6 10', output: '0' },
                { input: 'transactions = [[1,1,100]]', judgeInput: '1\n1 1 100', output: '1' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,2,10]]', judgeInput: '3\n1 2 10\n2 3 10\n3 2 10', output: '2' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,1,10],[4,5,10],[5,4,10]]', judgeInput: '5\n1 2 10\n2 3 10\n3 1 10\n4 5 10\n5 4 10', output: '5' },
                { input: 'transactions = [[1,2,10],[2,3,10],[3,4,10],[4,1,10],[1,3,10]]', judgeInput: '5\n1 2 10\n2 3 10\n3 4 10\n4 1 10\n1 3 10', output: '4' },
                { input: 'transactions = [[10,20,5],[20,30,5],[30,40,5],[40,50,5]]', judgeInput: '4\n10 20 5\n20 30 5\n30 40 5\n40 50 5', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @return {number}
 */
function countFraudUsers(transactions) {
    // Your code here
}`,
                python: `def count_fraud_users(transactions):
    """
    :type transactions: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countFraudUsers(vector<vector<int>>& transactions) {
    // Your code here
}`,
                java: `public class Solution {
    public int countFraudUsers(int[][] transactions) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    console.log(countFraudUsers(transactions));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\nprint(count_fraud_users(transactions))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countFraudUsers(vector<vector<int>>& transactions);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2];\n    cout << countFraudUsers(transactions) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][3];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.countFraudUsers(transactions));\n    }\n}`
            }
        }]
    }]
};
