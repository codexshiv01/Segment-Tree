export const mastercardData = {
    id: 'mastercard',
    name: 'Mastercard',
    logo: 'https://logo.clearbit.com/mastercard.com',
    description: 'Practice real Mastercard Online Assessment questions.',
    assessments: [{
        id: 'mastercard-oa-1',
        title: 'Mastercard OA-1',
        duration: 90,
        problems: [{
            id: 'chargeback-detector',
            title: 'Chargeback Pattern Detector',
            difficulty: 'Hard',
            description: `Detect suspicious chargeback patterns across merchants.

You are given:
- transactions: List of [transaction_id, merchant_id, amount, is_chargeback] where is_chargeback: 1=yes, 0=no

Goal: For each merchant, calculate chargeback_rate = (count of chargebacks / total transactions) * 100. Return list of merchant IDs with chargeback_rate > 20.0, sorted ascending.

Input Format:
- transactions: List of lists [txn_id, merchant, amount, chargeback]

Output Format:
- Return list of integers (merchant IDs) sorted ascending

Constraints:
- 1 <= transactions.length <= 10000
- 1 <= merchant_id <= 1000
- 1 <= amount <= 100000
- is_chargeback in {0, 1}`,
            examples: [
                { input: 'transactions = [[1,100,50,1],[2,100,60,0],[3,200,70,1],[4,200,80,1]]', output: '[200]' },
                { input: 'transactions = [[1,10,100,0],[2,10,200,0]]', output: '[]' }
            ],
            testCases: [
                { input: 'transactions = [[1,100,50,1],[2,100,60,0],[3,200,70,1],[4,200,80,1]]', judgeInput: '4\n1 100 50 1\n2 100 60 0\n3 200 70 1\n4 200 80 1', output: '[200]' },
                { input: 'transactions = [[1,10,100,0],[2,10,200,0]]', judgeInput: '2\n1 10 100 0\n2 10 200 0', output: '[]' },
                { input: 'transactions = [[1,5,100,1],[2,5,200,1],[3,5,300,1],[4,5,400,0]]', judgeInput: '4\n1 5 100 1\n2 5 200 1\n3 5 300 1\n4 5 400 0', output: '[5]' },
                { input: 'transactions = [[1,15,50,1],[2,15,60,0],[3,15,70,0],[4,15,80,0],[5,15,90,0]]', judgeInput: '5\n1 15 50 1\n2 15 60 0\n3 15 70 0\n4 15 80 0\n5 15 90 0', output: '[]' },
                { input: 'transactions = [[1,20,100,1],[2,20,200,0],[3,30,150,1],[4,30,250,1],[5,30,350,0]]', judgeInput: '5\n1 20 100 1\n2 20 200 0\n3 30 150 1\n4 30 250 1\n5 30 350 0', output: '[20,30]' },
                { input: 'transactions = [[1,7,500,1],[2,7,600,1],[3,7,700,1]]', judgeInput: '3\n1 7 500 1\n2 7 600 1\n3 7 700 1', output: '[7]' },
                { input: 'transactions = [[1,50,100,0],[2,50,200,0],[3,50,300,0],[4,50,400,0],[5,50,500,1]]', judgeInput: '5\n1 50 100 0\n2 50 200 0\n3 50 300 0\n4 50 400 0\n5 50 500 1', output: '[]' },
                { input: 'transactions = [[1,12,80,1],[2,12,90,1],[3,12,100,0],[4,12,110,0]]', judgeInput: '4\n1 12 80 1\n2 12 90 1\n3 12 100 0\n4 12 110 0', output: '[12]' },
                { input: 'transactions = [[1,25,150,1],[2,25,160,1],[3,35,170,1],[4,35,180,0]]', judgeInput: '4\n1 25 150 1\n2 25 160 1\n3 35 170 1\n4 35 180 0', output: '[25,35]' },
                { input: 'transactions = [[1,8,200,1],[2,8,300,0],[3,8,400,0],[4,8,500,0],[5,8,600,0]]', judgeInput: '5\n1 8 200 1\n2 8 300 0\n3 8 400 0\n4 8 500 0\n5 8 600 0', output: '[]' },
                { input: 'transactions = [[1,40,100,1],[2,40,200,1],[3,40,300,1],[4,40,400,1],[5,40,500,1]]', judgeInput: '5\n1 40 100 1\n2 40 200 1\n3 40 300 1\n4 40 400 1\n5 40 500 1', output: '[40]' },
                { input: 'transactions = [[1,3,50,1],[2,3,60,0],[3,3,70,0],[4,3,80,0]]', judgeInput: '4\n1 3 50 1\n2 3 60 0\n3 3 70 0\n4 3 80 0', output: '[3]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @return {number[]}
 */
function highChargebackMerchants(transactions) {
    // Your code here
}`,
                python: `def high_chargeback_merchants(transactions):
    """
    :type transactions: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> highChargebackMerchants(vector<vector<int>>& transactions) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] highChargebackMerchants(int[][] transactions) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(highChargebackMerchants(transactions)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\nprint(json.dumps(high_chargeback_merchants(transactions)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> highChargebackMerchants(vector<vector<int>>& transactions);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2] >> transactions[i][3];\n    vector<int> res = highChargebackMerchants(transactions);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][4];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n            transactions[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.highChargebackMerchants(transactions);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'currency-exchange',
            title: 'Multi-Currency Transaction Processor',
            difficulty: 'Medium',
            description: `Process transactions across different currencies with exchange rates.

You are given:
- transactions: List of [amount, from_currency, to_currency]
- rates: List of [from_curr, to_curr, rate]

Goal: Convert each transaction amount to target currency using given rates. Return total sum in first transaction's to_currency, rounded to 2 decimals. If conversion not possible, skip that transaction.

Input Format:
- transactions: List of lists [amount, from, to]
- rates: List of lists [from, to, rate]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= transactions.length, rates.length <= 100
- 1 <= amount <= 1000000
- 1 <= currency_code <= 10
- 0.01 <= rate <= 100.0`,
            examples: [
                { input: 'transactions = [[100,1,2],[200,2,2]], rates = [[1,2,1.5]]', output: '350.00' },
                { input: 'transactions = [[100,1,1]]', output: '100.00', judgeInput: '1\n100 1 1\n0' }
            ],
            testCases: [
                { input: 'transactions = [[100,1,2],[200,2,2]], rates = [[1,2,1.5]]', judgeInput: '2\n100 1 2\n200 2 2\n1\n1 2 1.5', output: '350.00' },
                { input: 'transactions = [[100,1,1]], rates = []', judgeInput: '1\n100 1 1\n0', output: '100.00' },
                { input: 'transactions = [[500,1,2],[300,1,2]], rates = [[1,2,2.0]]', judgeInput: '2\n500 1 2\n300 1 2\n1\n1 2 2.0', output: '1600.00' },
                { input: 'transactions = [[1000,1,2]], rates = [[1,2,0.5]]', judgeInput: '1\n1000 1 2\n1\n1 2 0.5', output: '500.00' },
                { input: 'transactions = [[250,1,3],[250,2,3]], rates = [[1,3,4.0],[2,3,3.0]]', judgeInput: '2\n250 1 3\n250 2 3\n2\n1 3 4.0\n2 3 3.0', output: '1750.00' },
                { input: 'transactions = [[100,5,5],[200,5,5]], rates = []', judgeInput: '2\n100 5 5\n200 5 5\n0', output: '300.00' },
                { input: 'transactions = [[400,1,2],[300,3,2]], rates = [[1,2,1.25]]', judgeInput: '2\n400 1 2\n300 3 2\n1\n1 2 1.25', output: '500.00' },
                { input: 'transactions = [[750,2,4]], rates = [[2,4,0.8]]', judgeInput: '1\n750 2 4\n1\n2 4 0.8', output: '600.00' },
                { input: 'transactions = [[150,1,2],[150,1,2],[150,1,2]], rates = [[1,2,3.0]]', judgeInput: '3\n150 1 2\n150 1 2\n150 1 2\n1\n1 2 3.0', output: '1350.00' },
                { input: 'transactions = [[200,3,5],[400,3,5]], rates = [[3,5,2.5]]', judgeInput: '2\n200 3 5\n400 3 5\n1\n3 5 2.5', output: '1500.00' },
                { input: 'transactions = [[1000,7,7]], rates = []', judgeInput: '1\n1000 7 7\n0', output: '1000.00' },
                { input: 'transactions = [[350,1,3],[250,2,3]], rates = [[1,3,1.0],[2,3,1.5]]', judgeInput: '2\n350 1 3\n250 2 3\n2\n1 3 1.0\n2 3 1.5', output: '725.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @param {number[][]} rates
 * @return {number}
 */
function totalConverted(transactions, rates) {
    // Your code here
}`,
                python: `def total_converted(transactions, rates):
    """
    :type transactions: List[List]
    :type rates: List[List]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalConverted(vector<vector<double>>& transactions, vector<vector<double>>& rates) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalConverted(double[][] transactions, double[][] rates) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const rates = [];\n    for(let i=n+2; i<n+2+m; i++) rates.push(lines[i].split(' ').map(Number));\n    console.log(totalConverted(transactions, rates).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(float, lines[i].split())))\nm = int(lines[n+1])\nrates = []\nfor i in range(n+2, n+2+m):\n    rates.append(list(map(float, lines[i].split())))\nprint(f'{total_converted(transactions, rates):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalConverted(vector<vector<double>>& transactions, vector<vector<double>>& rates);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<double>> transactions(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2];\n    cin >> m;\n    vector<vector<double>> rates(m, vector<double>(3));\n    for(int i=0; i<m; ++i) cin >> rates[i][0] >> rates[i][1] >> rates[i][2];\n    cout << fixed << setprecision(2) << totalConverted(transactions, rates) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] transactions = new double[n][3];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextDouble();\n            transactions[i][1] = sc.nextDouble();\n            transactions[i][2] = sc.nextDouble();\n        }\n        int m = sc.nextInt();\n        double[][] rates = new double[m][3];\n        for(int i=0; i<m; i++) {\n            rates[i][0] = sc.nextDouble();\n            rates[i][1] = sc.nextDouble();\n            rates[i][2] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalConverted(transactions, rates));\n    }\n}`
            }
        }]
    }]
};
