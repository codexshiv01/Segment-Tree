export const plaidData = {
    id: 'plaid',
    name: 'Plaid',
    logo: 'https://logo.clearbit.com/plaid.com',
    description: 'Practice real Plaid Online Assessment questions.',
    assessments: [{
        id: 'plaid-oa-1',
        title: 'Plaid OA-1',
        duration: 90,
        problems: [{
            id: 'transaction-categorization',
            title: 'Transaction Category Classifier',
            difficulty: 'Hard',
            description: `Categorize bank transactions based on merchant patterns.

You are given:
- transactions: List of [txn_id, merchant_name_hash, amount, category_confidence]
- category_threshold: Minimum confidence to assign category

Goal: Count transactions where category_confidence >= category_threshold.

Input Format:
- transactions: List of lists [id, hash, amount, confidence]
- category_threshold: Integer (0-100)

Output Format:
- Return an integer (count of categorized transactions)

Constraints:
- 1 <= transactions.length <= 1000
- 1 <= amount <= 100000
- 0 <= confidence <= 100
- 0 <= category_threshold <= 100`,
            examples: [
                { input: 'transactions = [[1,12345,100,85],[2,67890,200,60]], category_threshold = 70', output: '1' },
                { input: 'transactions = [[1,11111,50,90]], category_threshold = 80', output: '1' }
            ],
            testCases: [
                { input: 'transactions = [[1,12345,100,85],[2,67890,200,60]], category_threshold = 70', judgeInput: '2\n1 12345 100 85\n2 67890 200 60\n70', output: '1' },
                { input: 'transactions = [[1,11111,50,90]], category_threshold = 80', judgeInput: '1\n1 11111 50 90\n80', output: '1' },
                { input: 'transactions = [[1,22222,75,95],[2,33333,80,92],[3,44444,90,88]], category_threshold = 90', judgeInput: '3\n1 22222 75 95\n2 33333 80 92\n3 44444 90 88\n90', output: '2' },
                { input: 'transactions = [[1,55555,100,50],[2,66666,150,55],[3,77777,200,60]], category_threshold = 60', judgeInput: '3\n1 55555 100 50\n2 66666 150 55\n3 77777 200 60\n60', output: '1' },
                { input: 'transactions = [[1,88888,300,100]], category_threshold = 100', judgeInput: '1\n1 88888 300 100\n100', output: '1' },
                { input: 'transactions = [[1,99999,400,45],[2,10101,500,48]], category_threshold = 50', judgeInput: '2\n1 99999 400 45\n2 10101 500 48\n50', output: '0' },
                { input: 'transactions = [[1,12121,600,75],[2,13131,700,80],[3,14141,800,85]], category_threshold = 75', judgeInput: '3\n1 12121 600 75\n2 13131 700 80\n3 14141 800 85\n75', output: '3' },
                { input: 'transactions = [[1,15151,900,65],[2,16161,1000,70]], category_threshold = 68', judgeInput: '2\n1 15151 900 65\n2 16161 1000 70\n68', output: '1' },
                { input: 'transactions = [[1,17171,1100,55],[2,18181,1200,60],[3,19191,1300,65],[4,20202,1400,70]], category_threshold = 60', judgeInput: '4\n1 17171 1100 55\n2 18181 1200 60\n3 19191 1300 65\n4 20202 1400 70\n60', output: '3' },
                { input: 'transactions = [[1,21212,1500,82]], category_threshold = 85', judgeInput: '1\n1 21212 1500 82\n85', output: '0' },
                { input: 'transactions = [[1,22323,1600,91],[2,23434,1700,93],[3,24545,1800,95]], category_threshold = 92', judgeInput: '3\n1 22323 1600 91\n2 23434 1700 93\n3 24545 1800 95\n92', output: '2' },
                { input: 'transactions = [[1,25656,1900,77],[2,26767,2000,88],[3,27878,2100,99]], category_threshold = 80', judgeInput: '3\n1 25656 1900 77\n2 26767 2000 88\n3 27878 2100 99\n80', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @param {number} category_threshold
 * @return {number}
 */
function categorizedCount(transactions, category_threshold) {
    // Your code here
}`,
                python: `def categorized_count(transactions, category_threshold):
    """
    :type transactions: List[List[int]]
    :type category_threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int categorizedCount(vector<vector<int>>& transactions, int category_threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int categorizedCount(int[][] transactions, int category_threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    const category_threshold = parseInt(lines[n+1]);\n    console.log(categorizedCount(transactions, category_threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\ncategory_threshold = int(lines[n+1])\nprint(categorized_count(transactions, category_threshold))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint categorizedCount(vector<vector<int>>& transactions, int category_threshold);\nint main() {\n    int n, category_threshold;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2] >> transactions[i][3];\n    cin >> category_threshold;\n    cout << categorizedCount(transactions, category_threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][4];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n            transactions[i][3] = sc.nextInt();\n        }\n        int category_threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.categorizedCount(transactions, category_threshold));\n    }\n}`
            }
        }, {
            id: 'balance-reconciliation',
            title: 'Account Balance Reconciliation',
            difficulty: 'Medium',
            description: `Reconcile account balances across multiple institutions.

You are given:
- accounts: List of [account_id, institution_balance, plaid_balance]

Goal: An account needs reconciliation if abs(institution_balance - plaid_balance) > 0. Return count of accounts needing reconciliation.

Input Format:
- accounts: List of lists [id, inst_balance, plaid_balance]

Output Format:
- Return an integer (count of accounts needing reconciliation)

Constraints:
- 1 <= accounts.length <= 1000
- 0 <= balance <= 1000000`,
            examples: [
                { input: 'accounts = [[1,1000,1000],[2,2000,2005]]', output: '1' },
                { input: 'accounts = [[1,5000,5000]]', output: '0' }
            ],
            testCases: [
                { input: 'accounts = [[1,1000,1000],[2,2000,2005]]', judgeInput: '2\n1 1000 1000\n2 2000 2005', output: '1' },
                { input: 'accounts = [[1,5000,5000]]', judgeInput: '1\n1 5000 5000', output: '0' },
                { input: 'accounts = [[1,3000,3001],[2,4000,4002],[3,5000,5000]]', judgeInput: '3\n1 3000 3001\n2 4000 4002\n3 5000 5000', output: '2' },
                { input: 'accounts = [[1,10000,10000],[2,20000,20000],[3,30000,30000]]', judgeInput: '3\n1 10000 10000\n2 20000 20000\n3 30000 30000', output: '0' },
                { input: 'accounts = [[1,7500,7510]]', judgeInput: '1\n1 7500 7510', output: '1' },
                { input: 'accounts = [[1,12000,12005],[2,15000,14995]]', judgeInput: '2\n1 12000 12005\n2 15000 14995', output: '2' },
                { input: 'accounts = [[1,25000,25000],[2,30000,30001]]', judgeInput: '2\n1 25000 25000\n2 30000 30001', output: '1' },
                { input: 'accounts = [[1,50000,50010],[2,60000,60000],[3,70000,70020]]', judgeInput: '3\n1 50000 50010\n2 60000 60000\n3 70000 70020', output: '2' },
                { input: 'accounts = [[1,8000,8000]]', judgeInput: '1\n1 8000 8000', output: '0' },
                { input: 'accounts = [[1,40000,40100],[2,45000,44900]]', judgeInput: '2\n1 40000 40100\n2 45000 44900', output: '2' },
                { input: 'accounts = [[1,35000,35000],[2,38000,38000],[3,42000,42001]]', judgeInput: '3\n1 35000 35000\n2 38000 38000\n3 42000 42001', output: '1' },
                { input: 'accounts = [[1,90000,90000],[2,95000,95050],[3,100000,100000],[4,105000,105100]]', judgeInput: '4\n1 90000 90000\n2 95000 95050\n3 100000 100000\n4 105000 105100', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} accounts
 * @return {number}
 */
function reconciliationCount(accounts) {
    // Your code here
}`,
                python: `def reconciliation_count(accounts):
    """
    :type accounts: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int reconciliationCount(vector<vector<int>>& accounts) {
    // Your code here
}`,
                java: `public class Solution {
    public int reconciliationCount(int[][] accounts) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const accounts = [];\n    for(let i=1; i<=n; i++) accounts.push(lines[i].split(' ').map(Number));\n    console.log(reconciliationCount(accounts));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\naccounts = []\nfor i in range(1, n+1):\n    accounts.append(list(map(int, lines[i].split())))\nprint(reconciliation_count(accounts))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint reconciliationCount(vector<vector<int>>& accounts);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> accounts(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> accounts[i][0] >> accounts[i][1] >> accounts[i][2];\n    cout << reconciliationCount(accounts) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] accounts = new int[n][3];\n        for(int i=0; i<n; i++) {\n            accounts[i][0] = sc.nextInt();\n            accounts[i][1] = sc.nextInt();\n            accounts[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.reconciliationCount(accounts));\n    }\n}`
            }
        }]
    }]
};
