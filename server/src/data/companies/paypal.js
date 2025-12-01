export const paypalData = {
    id: 'paypal',
    name: 'PayPal',
    logo: 'https://logo.clearbit.com/paypal.com',
    description: 'Practice real PayPal Online Assessment questions.',
    assessments: [{
        id: 'paypal-oa-1',
        title: 'PayPal OA-1',
        duration: 90,
        problems: [{
            id: 'currency-converter',
            title: 'Multi-Currency Transaction Converter',
            difficulty: 'Medium',
            description: `PayPal needs to convert transactions between multiple currencies. Given exchange rates, convert an amount from one currency to another.

You are given:
- rates: List of [from_currency, to_currency, rate]
- from_curr: Source currency
- to_curr: Target currency
- amount: Amount to convert

Goal: Return the converted amount, or -1 if conversion is impossible. Round to 2 decimal places.

Input Format:
- rates: List of lists [from, to, rate]
- from_curr: String
- to_curr: String
- amount: Float

Output Format:
- Return a float

Constraints:
- 1 <= rates.length <= 100
- 0 < rate <= 1000
- 0 < amount <= 1000000`,
            examples: [
                { input: 'rates = [["USD","EUR",0.85],["EUR","GBP",0.90]], from_curr = "USD", to_curr = "GBP", amount = 100', output: '76.50' },
                { input: 'rates = [["USD","EUR",0.85]], from_curr = "USD", to_curr = "GBP", amount = 100', output: '-1.00' }
            ],
            testCases: [
                { input: 'rates = [["USD","EUR",0.85],["EUR","GBP",0.90]], from_curr = "USD", to_curr = "GBP", amount = 100', judgeInput: '2\nUSD EUR 0.85\nEUR GBP 0.90\nUSD\nGBP\n100', output: '76.50' },
                { input: 'rates = [["USD","EUR",0.85]], from_curr = "USD", to_curr = "GBP", amount = 100', judgeInput: '1\nUSD EUR 0.85\nUSD\nGBP\n100', output: '-1.00' },
                { input: 'rates = [["USD","USD",1.0]], from_curr = "USD", to_curr = "USD", amount = 100', judgeInput: '1\nUSD USD 1.0\nUSD\nUSD\n100', output: '100.00' },
                { input: 'rates = [["A","B",2.0],["B","C",3.0]], from_curr = "A", to_curr = "C", amount = 10', judgeInput: '2\nA B 2.0\nB C 3.0\nA\nC\n10', output: '60.00' },
                { input: 'rates = [["X","Y",0.5]], from_curr = "Y", to_curr = "X", amount = 50', judgeInput: '1\nX Y 0.5\nY\nX\n50', output: '-1.00' },
                { input: 'rates = [["USD","EUR",0.85],["EUR","USD",1.18]], from_curr = "USD", to_curr = "EUR", amount = 100', judgeInput: '2\nUSD EUR 0.85\nEUR USD 1.18\nUSD\nEUR\n100', output: '85.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {string[][]} rates
 * @param {string} from_curr
 * @param {string} to_curr
 * @param {number} amount
 * @return {number}
 */
function convertCurrency(rates, from_curr, to_curr, amount) {
    // Your code here
}`,
                python: `def convert_currency(rates, from_curr, to_curr, amount):
    """
    :type rates: List[List]
    :type from_curr: str
    :type to_curr: str
    :type amount: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
#include <string>
using namespace std;

double convertCurrency(vector<vector<string>>& rates, string from_curr, string to_curr, double amount) {
    // Your code here
}`,
                java: `public class Solution {
    public double convertCurrency(String[][] rates, String from_curr, String to_curr, double amount) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const rates = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        rates.push([parts[0], parts[1], parseFloat(parts[2])]);\n    }\n    const from_curr = lines[n+1];\n    const to_curr = lines[n+2];\n    const amount = parseFloat(lines[n+3]);\n    console.log(convertCurrency(rates, from_curr, to_curr, amount).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrates = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    rates.append([parts[0], parts[1], float(parts[2])])\nfrom_curr = lines[n+1]\nto_curr = lines[n+2]\namount = float(lines[n+3])\nprint(f'{convert_currency(rates, from_curr, to_curr, amount):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\nusing namespace std;\ndouble convertCurrency(vector<vector<string>>& rates, string from_curr, string to_curr, double amount);\nint main() {\n    int n;  \n    double amount;\n    string from_curr, to_curr;\n    cin >> n;\n    vector<vector<string>> rates(n, vector<string>(3));\n    for(int i=0; i<n; ++i) cin >> rates[i][0] >> rates[i][1] >> rates[i][2];\n    cin >> from_curr >> to_curr >> amount;\n    cout << fixed << setprecision(2) << convertCurrency(rates, from_curr, to_curr, amount) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[][] rates = new String[n][3];\n        for(int i=0; i<n; i++) {\n            rates[i][0] = sc.next();\n            rates[i][1] = sc.next();\n            rates[i][2] = sc.next();\n        }\n        String from_curr = sc.next();\n        String to_curr = sc.next();\n        double amount = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.convertCurrency(rates, from_curr, to_curr, amount));\n    }\n}`
            }
        }, {
            id: 'fraud-detection',
            title: 'Advanced Fraud Detection System',
            difficulty: 'Hard',
            description: `PayPal needs to detect fraudulent transaction patterns. Given a list of transactions, find suspicious patterns.

You are given:
- transactions: List of [user_id, amount, timestamp]
- threshold: Maximum allowed transaction amount in a time window
- window: Time window in seconds

Goal: Return list of user IDs with suspicious activity (total amount > threshold within any window).

Input Format:
- transactions: List of lists [user, amount, time]
- threshold: Integer
- window: Integer

Output Format:
- Return a sorted list of user IDs

Constraints:
- 1 <= transactions.length <= 1000
- 1 <= user_id, amount, timestamp <= 10000
- 1 <= threshold, window <= 10000`,
            examples: [
                { input: 'transactions = [[1,100,10],[1,200,15],[2,50,10]], threshold = 250, window = 10', output: '[1]' },
                { input: 'transactions =  [[1,100,10],[1,100,25]], threshold = 250, window = 10', output: '[]' }
            ],
            testCases: [
                { input: 'transactions = [[1,100,10],[1,200,15],[2,50,10]], threshold = 250, window = 10', judgeInput: '3\n1 100 10\n1 200 15\n2 50 10\n250\n10', output: '[1]' },
                { input: 'transactions = [[1,100,10],[1,100,25]], threshold = 250, window = 10', judgeInput: '2\n1 100 10\n1 100 25\n250\n10', output: '[]' },
                { input: 'transactions = [[1,100,1],[2,100,2],[1,100,3]], threshold = 150, window = 5', judgeInput: '3\n1 100 1\n2 100 2\n1 100 3\n150\n5', output: '[1]' },
                { input: 'transactions = [[1,50,1],[1,50,2],[1,50,3]], threshold = 100, window = 3', judgeInput: '3\n1 50 1\n1 50 2\n1 50 3\n100\n3', output: '[1]' },
                { input: 'transactions = [[1,100,1],[2,100,1],[3,100,1]], threshold = 50, window = 1', judgeInput: '3\n1 100 1\n2 100 1\n3 100 1\n50\n1', output: '[1,2,3]' },
                { input: 'transactions = [[1,10,1]], threshold = 100, window = 10', judgeInput: '1\n1 10 1\n100\n10', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} transactions
 * @param {number} threshold
 * @param {number} window
 * @return {number[]}
 */
function detectFraud(transactions, threshold, window) {
    // Your code here
}`,
                python: `def detect_fraud(transactions, threshold, window):
    """
    :type transactions: List[List[int]]
    :type threshold: int
    :type window: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> detectFraud(vector<vector<int>>& transactions, int threshold, int window) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] detectFraud(int[][] transactions, int threshold, int window) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const transactions = [];\n    for(let i=1; i<=n; i++) transactions.push(lines[i].split(' ').map(Number));\n    const threshold = parseInt(lines[n+1]);\n    const window = parseInt(lines[n+2]);\n    console.log(JSON.stringify(detectFraud(transactions, threshold, window)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntransactions = []\nfor i in range(1, n+1):\n    transactions.append(list(map(int, lines[i].split())))\nthreshold = int(lines[n+1])\nwindow = int(lines[n+2])\nprint(json.dumps(detect_fraud(transactions, threshold, window)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> detectFraud(vector<vector<int>>& transactions, int threshold, int window);\nint main() {\n    int n, threshold, window;\n    cin >> n;\n    vector<vector<int>> transactions(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> transactions[i][0] >> transactions[i][1] >> transactions[i][2];\n    cin >> threshold >> window;\n    vector<int> res = detectFraud(transactions, threshold, window);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] transactions = new int[n][3];\n        for(int i=0; i<n; i++) {\n            transactions[i][0] = sc.nextInt();\n            transactions[i][1] = sc.nextInt();\n            transactions[i][2] = sc.nextInt();\n        }\n        int threshold = sc.nextInt();\n        int window = sc.nextInt();\n        Solution sol = new Solution();\n        int[] res = sol.detectFraud(transactions, threshold, window);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
