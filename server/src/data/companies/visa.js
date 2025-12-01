export const visaData = {
    id: 'visa',
    name: 'Visa',
    logo: 'https://logo.clearbit.com/visa.com',
    description: 'Practice real Visa Online Assessment questions.',
    assessments: [{
        id: 'visa-oa-1',
        title: 'Visa OA-1',
        duration: 90,
        problems: [{
            id: 'fraud-pattern',
            title: 'Fraud Pattern Detector',
            difficulty: 'Medium',
            description: `Problem Description
Visa's security systems monitor millions of transactions for suspicious activity. A common fraud pattern involves a sequence of transactions that rapidly exceeds a certain threshold.

You are given:
- \`txns\`: A list of transactions, where each is \`[amount, location_id, time]\`.
- \`threshold\`: A maximum allowable total amount for any consecutive sequence of transactions.

**Goal:**
Identify consecutive sequences of transactions (sorted by time) where the total amount exceeds the \`threshold\`.
Return the **count** of such suspicious sequences.

*Note: For this problem, assume transactions are already sorted by time.*

### Input Format
- \`txns\`: List of lists \`[amount, location_id, time]\`
- \`threshold\`: Integer

### Output Format
- Return an integer representing the count of suspicious sequences.

### Constraints
- \`1 <= txns.length <= 1000\`
- \`1 <= amount <= 10000\`
- \`1 <= threshold <= 100000\``,
            examples: [
                { input: 'txns = [[100,1,10],[1000,2,11],[50,1,12]], threshold = 900', output: '1' },
                { input: 'txns = [[50,1,1]], threshold = 100', output: '0' }
            ],
            testCases: [
                { input: 'txns = [[100,1,10],[1000,2,11],[50,1,12]], threshold = 900', judgeInput: '3\n100 1 10\n1000 2 11\n50 1 12\n900', output: '1' },
                { input: 'txns = [[50,1,1]], threshold = 100', judgeInput: '1\n50 1 1\n100', output: '0' },
                { input: 'txns = [[200,1,5],[500,2,6],[100,3,7]], threshold = 300', judgeInput: '3\n200 1 5\n500 2 6\n100 3 7\n300', output: '1' },
                { input: 'txns = [[100,1,10],[200,1,20],[300,1,30]], threshold = 150', judgeInput: '3\n100 1 10\n200 1 20\n300 1 30\n150', output: '2' },
                { input: 'txns = [[50,1,1],[60,1,2],[70,1,3]], threshold = 200', judgeInput: '3\n50 1 1\n60 1 2\n70 1 3\n200', output: '0' },
                { input: 'txns = [[1000,1,1],[2000,2,2]], threshold = 500', judgeInput: '2\n1000 1 1\n2000 2 2\n500', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} txns
 * @param {number} threshold
 * @return {number}
 */
function detectFraud(txns, threshold) {
    // Your code here
}`,
                python: `def detect_fraud(txns, threshold):
    """
    :type txns: List[List[int]]
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int detectFraud(vector<vector<int>>& txns, int threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int detectFraud(int[][] txns, int threshold) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const txns = [];\n    for(let i=1; i<=n; i++) txns.push(lines[i].split(' ').map(Number));\n    const threshold = parseInt(lines[n+1]);\n    console.log(detectFraud(txns, threshold));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntxns = []\nfor i in range(1, n+1):\n    txns.append(list(map(int, lines[i].split())))\nthreshold = int(lines[n+1])\nprint(detect_fraud(txns, threshold))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint detectFraud(vector<vector<int>>& txns, int threshold);\nint main() {\n    int n, threshold;\n    cin >> n;\n    vector<vector<int>> txns(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> txns[i][0] >> txns[i][1] >> txns[i][2];\n    cin >> threshold;\n    cout << detectFraud(txns, threshold) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] txns = new int[n][3];\n        for(int i=0; i<n; i++) {\n            txns[i][0] = sc.nextInt();\n            txns[i][1] = sc.nextInt();\n            txns[i][2] = sc.nextInt();\n        }\n        int threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.detectFraud(txns, threshold));\n    }\n}` }
        },
        {
            id: 'cross-border-graph',
            title: 'Cross-Border Transaction Graph',
            difficulty: 'Hard',
            description: `Problem Description
Visa processes cross-border transactions involving currency conversions. We need to find the best conversion path between two currencies to maximize the final amount.

You are given:
- \`rates\`: A list of \`[source, target, rate]\` where \`rate\` is the multiplier to convert \`source\` to \`target\`.
- \`queries\`: A list of \`[start_currency, end_currency]\`.

**Goal:**
For each query, find the **maximum possible conversion rate** from start to end. If no path exists, return \`-1.0\`.

### Input Format
- \`n\`: Number of rates
- \`rates\`: List of lists \`[source, target, rate]\` (currencies are integers 0 to C-1)
- \`m\`: Number of queries
- \`queries\`: List of lists \`[start, end]\`

### Output Format
- Return a list of doubles representing the max rate for each query.

### Constraints
- \`1 <= n <= 100\`
- \`1 <= m <= 10\`
- \`0.0 < rate <= 10.0\``,
            examples: [
                { input: 'rates = [[0,1,2.0],[1,2,3.0]], queries = [[0,2]]', output: '[6.0]' },
                { input: 'rates = [[0,1,2.0]], queries = [[1,0]]', output: '[-1.0]' }
            ],
            testCases: [
                { input: 'rates = [[0,1,2.0],[1,2,3.0]], queries = [[0,2]]', judgeInput: '2\n0 1 2.0\n1 2 3.0\n1\n0 2', output: '[6.0]' },
                { input: 'rates = [[0,1,2.0]], queries = [[1,0]]', judgeInput: '1\n0 1 2.0\n1\n1 0', output: '[-1.0]' },
                { input: 'rates = [[0,1,2.0],[0,2,10.0],[1,2,4.0]], queries = [[0,2]]', judgeInput: '3\n0 1 2.0\n0 2 10.0\n1 2 4.0\n1\n0 2', output: '[10.0]' },
                { input: 'rates = [[0,1,2.0],[1,2,2.0],[2,3,2.0]], queries = [[0,3],[0,1]]', judgeInput: '3\n0 1 2.0\n1 2 2.0\n2 3 2.0\n2\n0 3\n0 1', output: '[8.0,2.0]' },
                { input: 'rates = [[0,1,0.5],[1,2,0.5]], queries = [[0,2]]', judgeInput: '2\n0 1 0.5\n1 2 0.5\n1\n0 2', output: '[0.25]' },
                { input: 'rates = [[0,1,1.0],[1,0,1.0]], queries = [[0,0]]', judgeInput: '2\n0 1 1.0\n1 0 1.0\n1\n0 0', output: '[1.0]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} rates
 * @param {number[][]} queries
 * @return {number[]}
 */
function maxConversionRates(rates, queries) {
    // Your code here
}`,
                python: `def max_conversion_rates(rates, queries):
    """
    :type rates: List[List[float]]
    :type queries: List[List[int]]
    :rtype: List[float]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<double> maxConversionRates(vector<vector<double>>& rates, vector<vector<int>>& queries) {
    // Your code here
}`,
                java: `public class Solution {
    public double[] maxConversionRates(double[][] rates, int[][] queries) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const rates = [];\n    for(let i=1; i<=n; i++) rates.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const queries = [];\n    for(let i=n+2; i<n+2+m; i++) queries.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(maxConversionRates(rates, queries)));\n});`, python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrates = []\nfor i in range(1, n+1):\n    rates.append(list(map(float, lines[i].split())))\nm = int(lines[n+1])\nqueries = []\nfor i in range(n+2, n+2+m):\n    queries.append(list(map(int, lines[i].split())))\nprint(json.dumps(max_conversion_rates(rates, queries)))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<double> maxConversionRates(vector<vector<double>>& rates, vector<vector<int>>& queries);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<double>> rates(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> rates[i][0] >> rates[i][1] >> rates[i][2];\n    cin >> m;\n    vector<vector<int>> queries(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> queries[i][0] >> queries[i][1];\n    vector<double> res = maxConversionRates(rates, queries);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] rates = new double[n][3];\n        for(int i=0; i<n; i++) {\n            rates[i][0] = sc.nextDouble();\n            rates[i][1] = sc.nextDouble();\n            rates[i][2] = sc.nextDouble();\n        }\n        int m = sc.nextInt();\n        int[][] queries = new int[m][2];\n        for(int i=0; i<m; i++) {\n            queries[i][0] = sc.nextInt();\n            queries[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        double[] res = sol.maxConversionRates(rates, queries);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}` }
        }]
    }]
};
