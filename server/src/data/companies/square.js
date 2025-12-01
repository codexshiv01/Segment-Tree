export const squareData = {
    id: 'square',
    name: 'Square',
    logo: 'https://logo.clearbit.com/squareup.com',
    description: 'Practice real Square Online Assessment questions.',
    assessments: [{
        id: 'square-oa-1',
        title: 'Square OA-1',
        duration: 90,
        problems: [{
            id: 'payment-reconciliation',
            title: 'Payment Reconciliation System',
            difficulty: 'Hard',
            description: `Reconcile payment transactions with bank settlements.

You are given:
- transactions: List of [txn_id, amount, timestamp]
- settlements: List of [settlement_id, amount, timestamp]

Goal: Match transactions to settlements with same amount and settlement timestamp >= transaction timestamp. Return count of matched transactions.

Input Format:
- transactions: List of lists [id, amount, time]
- settlements: List of lists [id, amount, time]

Output Format:
- Return an integer (count of matched transactions)

Constraints:
- 1 <= transactions.length, settlements.length <= 1000
- 1 <= amount <= 100000
- 1 <= timestamp <= 1000000`,
            examples: [
                { input: 'transactions = [[1,100,10],[2,200,20]], settlements = [[1,100,15],[2,200,25]]', output: '2' },
                { input: 'transactions = [[1,100,10]], settlements = [[1,100,5]]', output: '0' }
            ],
            testCases: [
                { input: 'transactions = [[1,100,10],[2,200,20]], settlements = [[1,100,15],[2,200,25]]', judgeInput: '2\n1 100 10\n2 200 20\n2\n1 100 15\n2 200 25', output: '2' },
                { input: 'transactions = [[1,100,10]], settlements = [[1,100,5]]', judgeInput: '1\n1 100 10\n1\n1 100 5', output: '0' },
                { input: 'transactions = [[1,50,5],[2,50,10]], settlements = [[1,50,15]]', judgeInput: '2\n1 50 5\n2 50 10\n1\n1 50 15', output: '1' },
                { input: 'transactions = [[1,300,20],[2,300,25]], settlements = [[1,300,22],[2,300,30]]', judgeInput: '2\n1 300 20\n2 300 25\n2\n1 300 22\n2 300 30', output: '2' },
                { input: 'transactions = [[1,150,10]], settlements = [[1,150,10]]', judgeInput: '1\n1 150 10\n1\n1 150 10', output: '1' },
                { input: 'transactions = [[1,75,15],[2,100,20],[3,75,25]], settlements = [[1,75,18],[2,100,22]]', judgeInput: '3\n1 75 15\n2 100 20\n3 75 25\n2\n1 75 18\n2 100 22', output: '2' },
                { input: 'transactions = [[1,200,30]], settlements = [[1,200,35],[2,200,40]]', judgeInput: '1\n1 200 30\n2\n1 200 35\n2 200 40', output: '1' },
                { input: 'transactions = [[1,500,50],[2,600,60]], settlements = [[1,500,55],[2,700,65]]', judgeInput: '2\n1 500 50\n2 600 60\n2\n1 500 55\n2 700 65', output: '1' },
                { input: 'transactions = [[1,250,100],[2,250,110],[3,250,120]], settlements = [[1,250,105],[2,250,115],[3,250,125]]', judgeInput: '3\n1 250 100\n2 250 110\n3 250 120\n3\n1 250 105\n2 250 115\n3 250 125', output: '3' },
                { input: 'transactions = [[1,400,40]], settlements = [[1,500,45]]', judgeInput: '1\n1 400 40\n1\n1 500 45', output: '0' },
                { input: 'transactions = [[1,125,25],[2,125,30]], settlements = [[1,125, 28],[2,125,35]]', judgeInput: '2\n1 125 25\n2 125 30\n2\n1 125 28\n2 125 35', output: '2' },
                { input: 'transactions = [[1,800,80],[2,900,90]], settlements = [[1,800,85]]', judgeInput: '2\n1 800 80\n2 900 90\n1\n1 800 85', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @param {number[][]} settlements
 * @return {number}
 */
function matchedTransactions(transactions, settlements) {
    // Your code here
}`,
                python: `def matched_transactions(transactions, settlements):
    """
    :type transactions: List[List[int]]
    :type settlements: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int matchedTransactions(vector<vector<int>>& transactions, vector<vector<int>>& settlements) {
    // Your code here
}`,
                java: `public class Solution {
    public int matchedTransactions(int[][] transactions, int[][] settlements) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const settlements = [];\n    for(let i=n+2; i<n+2+m; i++) settlements.push(lines[i].split(' ').map(Number));\n    console.log(matchedTransactions(transactions, settlements));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nsettlements = []\nfor i in range(n+2, n+2+m):\n    settlements.append(list(map(int, lines[i].split())))\nprint(matched_transactions(transactions, settlements))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint matchedTransactions(vector<vector<int>>& transactions, vector<vector<int>>& settlements);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2];\n    cin >> m;\n    vector<vector<int>> settlements(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> settlements[i][0] >> settlements[i][1] >> settlements[i][2];\n    cout << matchedTransactions(transactions, settlements) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][3];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] settlements = new int[m][3];\n        for(int i=0; i<m; i++) {\n            settlements[i][0] = sc.nextInt();\n            settlements[i][1] = sc.nextInt();\n            settlements[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.matchedTransactions(transactions, settlements));\n    }\n}`
            }
        }, {
            id: 'merchant-risk',
            title: 'Merchant Risk Score Calculator',
            difficulty: 'Medium',
            description: `Calculate risk score for merchants based on transaction patterns.

You are given:
- transactions: List of [merchant_id, amount, is_disputed] where is_disputed: 1=yes, 0=no

Goal: For each merchant, risk_score = (dispute_count / total_count) * avg_transaction_amount. Return sum of all risk scores rounded to 2 decimals.

Input Format:
- transactions: List of lists [merchant, amount, disputed]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= transactions.length <= 1000
- 1 <= merchant_id <= 100
- 1 <= amount <= 10000
- is_disputed in {0, 1}`,
            examples: [
                { input: 'transactions = [[1,100,1],[1,200,0],[2,150,1],[2,150,1]]', output: '200.00' },
                { input: 'transactions = [[1,100,0]]', output: '0.00' }
            ],
            testCases: [
                { input: 'transactions = [[1,100,1],[1,200,0],[2,150,1],[2,150,1]]', judgeInput: '4\n1 100 1\n1 200 0\n2 150 1\n2 150 1', output: '200.00' },
                { input: 'transactions = [[1,100,0]]', judgeInput: '1\n1 100 0', output: '0.00' },
                { input: 'transactions = [[1,200,1],[1,200,1],[1,200,0]]', judgeInput: '3\n1 200 1\n1 200 1\n1 200 0', output: '133.33' },
                { input: 'transactions = [[1,300,0],[1,300,0],[1,300,0]]', judgeInput: '3\n1 300 0\n1 300 0\n1 300 0', output: '0.00' },
                { input: 'transactions = [[1,500,1],[2,400,1]]', judgeInput: '2\n1 500 1\n2 400 1', output: '900.00' },
                { input: 'transactions = [[1,150,1],[1,150,0],[1,150,0],[1,150,0]]', judgeInput: '4\n1 150 1\n1 150 0\n1 150 0\n1 150 0', output: '37.50' },
                { input: 'transactions = [[1,250,1],[2,250,0],[3,250,1]]', judgeInput: '3\n1 250 1\n2 250 0\n3 250 1', output: '500.00' },
                { input: 'transactions = [[1,100,1],[1,100,1],[1,100,1],[1,100,1]]', judgeInput: '4\n1 100 1\n1 100 1\n1 100 1\n1 100 1', output: '100.00' },
                { input: 'transactions = [[1,600,1],[1,400,0],[2,500,0]]', judgeInput: '3\n1 600 1\n1 400 0\n2 500 0', output: '250.00' },
                { input: 'transactions = [[1,800,1],[1,200,1]]', judgeInput: '2\n1 800 1\n1 200 1', output: '500.00' },
                { input: 'transactions = [[1,300,1],[1,300,0],[2,300,1],[2,300,0]]', judgeInput: '4\n1 300 1\n1 300 0\n2 300 1\n2 300 0', output: '300.00' },
                { input: 'transactions = [[1,450,1],[1,450,1],[1,450,0]]', judgeInput: '3\n1 450 1\n1 450 1\n1 450 0', output: '300.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @return {number}
 */
function totalRiskScore(transactions) {
    // Your code here
}`,
                python: `def total_risk_score(transactions):
    """
    :type transactions: List[List[int]]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalRiskScore(vector<vector<int>>& transactions) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalRiskScore(int[][] transactions) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    console.log(totalRiskScore(transactions).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\nprint(f'{total_risk_score(transactions):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalRiskScore(vector<vector<int>>& transactions);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2];\n    cout << fixed << setprecision(2) << totalRiskScore(transactions) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][3];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalRiskScore(transactions));\n    }\n}`
            }
        }]
    }]
};
