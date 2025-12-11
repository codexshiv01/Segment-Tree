export const paytmData = {
    id: 'paytm',
    name: 'Paytm',
    logo: 'https://logo.clearbit.com/paytm.com',
    description: 'Practice real Paytm Online Assessment questions.',
    assessments: [{
        id: 'paytm-oa-1',
        title: 'Paytm OA-1',
        duration: 90,
        problems: [{
            id: 'wallet-balance',
            title: 'Wallet Transaction Validator',
            difficulty: 'Medium',
            description: `Validate wallet transactions and calculate final balance.

You are given:
- initial_balance: Starting wallet balance
- transactions: List of [transaction_type, amount] where type: 1=credit, 2=debit

Goal: Process transactions in order. Credit adds to balance, debit subtracts if sufficient balance exists (otherwise skip). Return final balance rounded to 2 decimals.

Input Format:
- initial_balance: Float
- transactions: List of lists [type, amount]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 0 <= initial_balance <= 1000000
- 1 <= transactions.length <= 1000
- type in {1, 2}
- 0 <= amount <= 100000`,
            examples: [
                { input: 'initial_balance = 1000, transactions = [[1,500],[2,300]]', output: '1200.00' },
                { input: 'initial_balance = 100, transactions = [[2,150],[1,200]]', output: '300.00' }
            ],
            testCases: [
                { input: 'initial_balance = 1000, transactions = [[1,500],[2,300]]', judgeInput: '1000\n2\n1 500\n2 300', output: '1200.00' },
                { input: 'initial_balance = 100, transactions = [[2,150],[1,200]]', judgeInput: '100\n2\n2 150\n1 200', output: '300.00' },
                { input: 'initial_balance = 500, transactions = [[2,200],[2,200],[2,200]]', judgeInput: '500\n3\n2 200\n2 200\n2 200', output: '100.00' },
                { input: 'initial_balance = 0, transactions = [[1,1000],[1,500]]', judgeInput: '0\n2\n1 1000\n1 500', output: '1500.00' },
                { input: 'initial_balance = 5000, transactions = [[2,3000],[1,2000],[2,4000]]', judgeInput: '5000\n3\n2 3000\n1 2000\n2 4000', output: '0.00' },
                { input: 'initial_balance = 750, transactions = [[2,500],[2,300]]', judgeInput: '750\n2\n2 500\n2 300', output: '250.00' },
                { input: 'initial_balance = 2000, transactions = [[1,1000],[2,500],[1,750],[2,1250]]', judgeInput: '2000\n4\n1 1000\n2 500\n1 750\n2 1250', output: '2000.00' },
                { input: 'initial_balance = 300, transactions = [[2,400],[1,500]]', judgeInput: '300\n2\n2 400\n1 500', output: '800.00' },
                { input: 'initial_balance = 10000, transactions = [[2,2500],[2,2500],[2,2500],[2,2500]]', judgeInput: '10000\n4\n2 2500\n2 2500\n2 2500\n2 2500', output: '0.00' },
                { input: 'initial_balance = 1500, transactions = [[1,250],[1,250],[2,1000]]', judgeInput: '1500\n3\n1 250\n1 250\n2 1000', output: '1000.00' },
                { input: 'initial_balance = 600, transactions = [[2,100],[2,100],[2,100],[2,100],[2,100],[2,100]]', judgeInput: '600\n6\n2 100\n2 100\n2 100\n2 100\n2 100\n2 100', output: '0.00' },
                { input: 'initial_balance = 50, transactions = [[2,100],[1,150],[2,50]]', judgeInput: '50\n3\n2 100\n1 150\n2 50', output: '150.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} initial_balance
 * @param {number[][]} transactions
 * @return {number}
 */
function finalBalance(initial_balance, transactions) {
    // Your code here
}`,
                python: `def final_balance(initial_balance, transactions):
    """
    :type initial_balance: float
    :type transactions: List[List[int]]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double finalBalance(double initial_balance, vector<vector<int>>& transactions) {
    // Your code here
}`,
                java: `public class Solution {
    public double finalBalance(double initial_balance, int[][] transactions) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const initial_balance = parseFloat(lines[0]);\n    const n = parseInt(lines[1]);\n    const transactions = [];\n    for(let i=2; i<2+n; i++) transactions.push(lines[i].split(' ').map(Number));\n    console.log(finalBalance(initial_balance, transactions).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ninitial_balance = float(lines[0])\nn = int(lines[1])\ntransactions = []\nfor i in range(2, 2+n):\n    transactions.append(list(map(int, lines[i].split())))\nprint(f'{final_balance(initial_balance, transactions):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble finalBalance(double initial_balance, vector<vector<int>>& transactions);\nint main() {\n    double initial_balance;\n    int n;\n    cin >> initial_balance >> n;\n    vector<vector<int>> transactions(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1];\n    cout << fixed << setprecision(2) << finalBalance(initial_balance, transactions) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double initial_balance = sc.nextDouble();\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][2];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.finalBalance(initial_balance, transactions));\n    }\n}`
            }
        }, {
            id: 'upi-splitting',
            title: 'UPI Bill Splitting Calculator',
            difficulty: 'Easy',
            description: `Calculate how much each person owes in a bill split scenario.

You are given:
- total_bill: Total bill amount
- paid_by: User ID who paid the bill
- split_among: List of user IDs to split bill among (includes paid_by)

Goal: Each person's share = total_bill / len(split_among). Return amount that paid_by should receive from others (total - their own share) rounded to 2 decimals.

Input Format:
- total_bill: Float
- paid_by: Integer
- split_among: List of integers

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= total_bill <= 100000
- 1 <= user_id <= 10000
- 2 <= split_among.length <= 100
- paid_by must be in split_among`,
            examples: [
                { input: 'total_bill = 900, paid_by = 1, split_among = [1,2,3]', output: '600.00' },
                { input: 'total_bill = 500, paid_by = 1, split_among = [1,2]', output: '250.00' }
            ],
            testCases: [
                { input: 'total_bill = 900, paid_by = 1, split_among = [1,2,3]', judgeInput: '900\n1\n3\n1 2 3', output: '600.00' },
                { input: 'total_bill = 500, paid_by = 1, split_among = [1,2]', judgeInput: '500\n1\n2\n1 2', output: '250.00' },
                { input: 'total_bill = 1200, paid_by = 1, split_among = [1,2,3,4]', judgeInput: '1200\n1\n4\n1 2 3 4', output: '900.00' },
                { input: 'total_bill = 750, paid_by = 2, split_among = [1,2,3]', judgeInput: '750\n2\n3\n1 2 3', output: '500.00' },
                { input: 'total_bill = 1000, paid_by = 1, split_among = [1,2,3,4,5]', judgeInput: '1000\n1\n5\n1 2 3 4 5', output: '800.00' },
                { input: 'total_bill = 600, paid_by = 3, split_among = [1,2,3]', judgeInput: '600\n3\n3\n1 2 3', output: '400.00' },
                { input: 'total_bill = 1500, paid_by = 1, split_among = [1,2]', judgeInput: '1500\n1\n2\n1 2', output: '750.00' },
                { input: 'total_bill = 2000, paid_by = 1, split_among = [1,2,3,4,5,6,7,8]', judgeInput: '2000\n1\n8\n1 2 3 4 5 6 7 8', output: '1750.00' },
                { input: 'total_bill = 450, paid_by = 2, split_among = [1,2,3]', judgeInput: '450\n2\n3\n1 2 3', output: '300.00' },
                { input: 'total_bill = 3000, paid_by = 1, split_among = [1,2,3,4,5,6]', judgeInput: '3000\n1\n6\n1 2 3 4 5 6', output: '2500.00' },
                { input: 'total_bill = 800, paid_by = 4, split_among = [1,2,3,4]', judgeInput: '800\n4\n4\n1 2 3 4', output: '600.00' },
                { input: 'total_bill = 350, paid_by = 1, split_among = [1,2]', judgeInput: '350\n1\n2\n1 2', output: '175.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} total_bill
 * @param {number} paid_by
 * @param {number[]} split_among
 * @return {number}
 */
function amountToReceive(total_bill, paid_by, split_among) {
    // Your code here
}`,
                python: `def amount_to_receive(total_bill, paid_by, split_among):
    """
    :type total_bill: float
    :type paid_by: int
    :type split_among: List[int]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double amountToReceive(double total_bill, int paid_by, vector<int>& split_among) {
    // Your code here
}`,
                java: `public class Solution {
    public double amountToReceive(double total_bill, int paid_by, int[] split_among) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const total_bill = parseFloat(lines[0]);\n    const paid_by = parseInt(lines[1]);\n    const n = parseInt(lines[2]);\n    const split_among = lines[3].split(' ').map(Number);\n    console.log(amountToReceive(total_bill, paid_by, split_among).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ntotal_bill = float(lines[0])\npaid_by = int(lines[1])\nn = int(lines[2])\nsplit_among = list(map(int, lines[3].split()))\nprint(f'{amount_to_receive(total_bill, paid_by, split_among):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble amountToReceive(double total_bill, int paid_by, vector<int>& split_among);\nint main() {\n    double total_bill;\n    int paid_by, n;\n    cin >> total_bill >> paid_by >> n;\n    vector<int> split_among(n);\n    for(int i=0; i<n; ++i) cin >> split_among[i];\n    cout << fixed << setprecision(2) << amountToReceive(total_bill, paid_by, split_among) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double total_bill = sc.nextDouble();\n        int paid_by = sc.nextInt();\n        int n = sc.nextInt();\n        int[] split_among = new int[n];\n        for(int i=0; i<n; i++) split_among[i] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.amountToReceive(total_bill, paid_by, split_among));\n    }\n}`
            }
        }]
    }]
};
