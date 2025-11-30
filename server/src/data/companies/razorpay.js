export const razorpayData = {
    id: 'razorpay',
    name: 'Razorpay',
    logo: 'https://logo.clearbit.com/razorpay.com',
    description: 'Practice real Razorpay Online Assessment questions.',
    assessments: [{
        id: 'razorpay-oa-1',
        title: 'Razorpay OA-1',
        duration: 90,
        problems: [{
            id: 'payment-gateway-throttle',
            title: 'Payment Gateway Rate Limiter',
            difficulty: 'Medium',
            description: `### Problem Description
Razorpay's payment gateway needs to prevent abuse by rate-limiting requests from merchants. Each merchant has a quota of requests allowed per time window.

You are given:
- \`requests\`: A list of \`[merchant_id, timestamp]\` representing incoming payment requests.
- \`quota\`: The maximum number of requests allowed per merchant per window.
- \`window_size\`: The size of the sliding window (in seconds).

**Goal:**
For each request, determine if it should be **accepted** or **rejected** based on rate limiting rules. A request is accepted if the merchant hasn't exceeded their quota in the current sliding window.

Return a list of booleans where \`true\` means accepted and \`false\` means rejected.

### Input Format
- \`requests\`: List of lists \`[merchant_id, timestamp]\` (sorted by timestamp)
- \`quota\`: Integer
- \`window_size\`: Integer

### Output Format
- Return a list of booleans

### Constraints
- \`1 <= requests.length <= 1000\`
- \`1 <= merchant_id <= 100\`
- \`0 <= timestamp <= 10^6\`
- \`1 <= quota <= 100\`
- \`1 <= window_size <= 1000\``,
            examples: [
                { input: 'requests = [[1,0],[1,5],[1,10],[2,8]], quota = 2, window_size = 10', output: '[true,true,false,true]' },
                { input: 'requests = [[1,0],[1,15],[1,30]], quota = 1, window_size = 10', output: '[true,true,true]' }
            ],
            testCases: [
                { input: 'requests = [[1,0],[1,5],[1,10],[2,8]], quota = 2, window_size = 10', judgeInput: '4\n1 0\n1 5\n1 10\n2 8\n2 10', output: '[true,true,false,true]' },
                { input: 'requests = [[1,0],[1,15],[1,30]], quota = 1, window_size = 10', judgeInput: '3\n1 0\n1 15\n1 30\n1 10', output: '[true,true,true]' },
                { input: 'requests = [[1,1]], quota = 5, window_size = 100', judgeInput: '1\n1 1\n5 100', output: '[true]' },
                { input: 'requests = [[1,0],[1,1],[1,2]], quota = 2, window_size = 5', judgeInput: '3\n1 0\n1 1\n1 2\n2 5', output: '[true,true,false]' },
                { input: 'requests = [[1,10],[2,15],[1,20],[2,25]], quota = 1, window_size = 15', judgeInput: '4\n1 10\n2 15\n1 20\n2 25\n1 15', output: '[true,true,false,false]' },
                { input: 'requests = [[5,0],[5,100],[5,200]], quota = 3, window_size = 50', judgeInput: '3\n5 0\n5 100\n5 200\n3 50', output: '[true,true,true]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} requests
 * @param {number} quota
 * @param {number} window_size
 * @return {boolean[]}
 */
function rateLimit(requests, quota, window_size) {
    // Your code here
}`,
                python: `def rate_limit(requests, quota, window_size):
    """
    :type requests: List[List[int]]
    :type quota: int
    :type window_size: int
    :rtype: List[bool]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<bool> rateLimit(vector<vector<int>>& requests, int quota, int window_size) {
    // Your code here
}`,
                java: `public class Solution {
    public boolean[] rateLimit(int[][] requests, int quota, int window_size) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const requests = [];\n    for(let i=1; i<=n; i++) requests.push(lines[i].split(' ').map(Number));\n    const [quota, window_size] = lines[n+1].split(' ').map(Number);\n    console.log(JSON.stringify(rateLimit(requests, quota, window_size)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrequests = []\nfor i in range(1, n+1):\n    requests.append(list(map(int, lines[i].split())))\nquota, window_size = map(int, lines[n+1].split())\nprint(json.dumps(rate_limit(requests, quota, window_size)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<bool> rateLimit(vector<vector<int>>& requests, int quota, int window_size);\nint main() {\n    int n, quota, window_size;\n    cin >> n;\n    vector<vector<int>> requests(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> requests[i][0] >> requests[i][1];\n    cin >> quota >> window_size;\n    vector<bool> res = rateLimit(requests, quota, window_size);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << (res[i] ? "true" : "false");\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] requests = new int[n][2];\n        for(int i=0; i<n; i++) {\n            requests[i][0] = sc.nextInt();\n            requests[i][1] = sc.nextInt();\n        }\n        int quota = sc.nextInt();\n        int window_size = sc.nextInt();\n        Solution sol = new Solution();\n        boolean[] res = sol.rateLimit(requests, quota, window_size);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'settlement-batch-optimizer',
            title: 'Payment Settlement Batch Optimizer',
            difficulty: 'Hard',
            description: `### Problem Description
Razorpay settles payments to merchants in batches to minimize transaction fees. Each settlement has a fixed cost plus a per-payment cost.

You are given:
- \`payments\`: A list of \`[merchant_id, amount]\` representing pending payments.
- \`fixed_cost\`: The fixed cost per batch settlement.
- \`per_payment_cost\`: The cost per payment in a batch.

**Goal:**
Group payments by merchant and determine the **minimum number of batches** needed such that the total cost (including fixed and per-payment costs) doesn't exceed a given \`max_cost\` per batch.

Return the minimum number of batches required. If impossible, return \`-1\`.

### Input Format
- \`payments\`: List of lists \`[merchant_id, amount]\`
- \`fixed_cost\`: Integer
- \`per_payment_cost\`: Integer
- \`max_cost\`: Integer

### Output Format
- Return an integer representing the minimum number of batches.

### Constraints
- \`1 <= payments.length <= 500\`
- \`1 <= merchant_id <= 100\`
- \`1 <= amount <= 10^6\`
- \`1 <= fixed_cost, per_payment_cost, max_cost <= 1000\``,
            examples: [
                { input: 'payments = [[1,100],[1,200],[2,150]], fixed_cost = 10, per_payment_cost = 5, max_cost = 30', output: '2' },
                { input: 'payments = [[1,100],[2,200]], fixed_cost = 10, per_payment_cost = 5, max_cost = 20', output: '2' }
            ],
            testCases: [
                { input: 'payments = [[1,100],[1,200],[2,150]], fixed_cost = 10, per_payment_cost = 5, max_cost = 30', judgeInput: '3\n1 100\n1 200\n2 150\n10 5 30', output: '2' },
                { input: 'payments = [[1,100],[2,200]], fixed_cost = 10, per_payment_cost = 5, max_cost = 20', judgeInput: '2\n1 100\n2 200\n10 5 20', output: '2' },
                { input: 'payments = [[1,50]], fixed_cost = 100, per_payment_cost = 10, max_cost = 50', judgeInput: '1\n1 50\n100 10 50', output: '-1' },
                { input: 'payments = [[1,100],[1,200],[1,300]], fixed_cost = 5, per_payment_cost = 2, max_cost = 15', judgeInput: '3\n1 100\n1 200\n1 300\n5 2 15', output: '1' },
                { input: 'payments = [[1,100],[2,100],[3,100]], fixed_cost = 10, per_payment_cost = 5, max_cost = 20', judgeInput: '3\n1 100\n2 100\n3 100\n10 5 20', output: '3' },
                { input: 'payments = [[5,1000],[5,2000]], fixed_cost = 20, per_payment_cost = 10, max_cost = 50', judgeInput: '2\n5 1000\n5 2000\n20 10 50', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} payments
 * @param {number} fixed_cost
 * @param {number} per_payment_cost
 * @param {number} max_cost
 * @return {number}
 */
function minBatches(payments, fixed_cost, per_payment_cost, max_cost) {
    // Your code here
}`,
                python: `def min_batches(payments, fixed_cost, per_payment_cost, max_cost):
    """
    :type payments: List[List[int]]
    :type fixed_cost: int
    :type per_payment_cost: int
    :type max_cost: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minBatches(vector<vector<int>>& payments, int fixed_cost, int per_payment_cost, int max_cost) {
    // Your code here
}`,
                java: `public class Solution {
    public int minBatches(int[][] payments, int fixed_cost, int per_payment_cost, int max_cost) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const payments = [];\n    for(let i=1; i<=n; i++) payments.push(lines[i].split(' ').map(Number));\n    const [fixed_cost, per_payment_cost, max_cost] = lines[n+1].split(' ').map(Number);\n    console.log(minBatches(payments, fixed_cost, per_payment_cost, max_cost));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\npayments = []\nfor i in range(1, n+1):\n    payments.append(list(map(int, lines[i].split())))\nfixed_cost, per_payment_cost, max_cost = map(int, lines[n+1].split())\nprint(min_batches(payments, fixed_cost, per_payment_cost, max_cost))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minBatches(vector<vector<int>>& payments, int fixed_cost, int per_payment_cost, int max_cost);\nint main() {\n    int n, fixed_cost, per_payment_cost, max_cost;\n    cin >> n;\n    vector<vector<int>> payments(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> payments[i][0] >> payments[i][1];\n    cin >> fixed_cost >> per_payment_cost >> max_cost;\n    cout << minBatches(payments, fixed_cost, per_payment_cost, max_cost) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] payments = new int[n][2];\n        for(int i=0; i<n; i++) {\n            payments[i][0] = sc.nextInt();\n            payments[i][1] = sc.nextInt();\n        }\n        int fixed_cost = sc.nextInt();\n        int per_payment_cost = sc.nextInt();\n        int max_cost = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minBatches(payments, fixed_cost, per_payment_cost, max_cost));\n    }\n}`
            }
        }]
    }]
};
