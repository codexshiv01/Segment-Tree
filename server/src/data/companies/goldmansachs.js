export const goldmansachsData = {
    id: 'goldmansachs',
    name: 'Goldman Sachs',
    logo: 'https://logo.clearbit.com/goldmansachs.com',
    description: 'Practice real Goldman Sachs Online Assessment questions.',
    assessments: [{
        id: 'gs-oa-1',
        title: 'Goldman Sachs OA-1',
        duration: 90,
        problems: [{
            id: 'arbitrage-detect',
            title: 'Arbitrage Opportunity Detector',
            difficulty: 'Hard',
            description: `Problem Description
In foreign exchange markets, arbitrage is the practice of taking advantage of a price difference between two or more markets.

You are given:
- \`rates\`: A 2D array of size \`n x n\` representing exchange rates between \`n\` currencies.
  - \`rates[i][j]\` is the exchange rate from currency \`i\` to currency \`j\`.
  - If you have 1 unit of currency \`i\`, you can exchange it for \`rates[i][j]\` units of currency \`j\`.

**Goal:**
Determine if there exists an **arbitrage opportunity**. An arbitrage opportunity exists if you can start with some currency, perform a sequence of exchanges, and end up with **more** of the starting currency than you began with.
Return \`true\` if arbitrage is possible, otherwise \`false\`.

### Input Format
- \`rates\`: List of List of floats
- \`currencies\`: Integer (n)

### Output Format
- Return a boolean: \`true\` or \`false\`.

### Constraints
- \`2 <= n <= 20\`
- \`0.0 < rates[i][j] <= 100.0\`
- \`rates[i][i] == 1.0\``,
            examples: [
                { input: 'rates = [[1,0.8],[1.3,1]], currencies = 2', output: 'true' },
                { input: 'rates = [[1,2],[0.5,1]], currencies = 2', output: 'false' }
            ],
            testCases: [
                { input: 'rates = [[1,0.8],[1.3,1]], currencies = 2', judgeInput: '2\n1 0.8\n1.3 1', output: 'true' },
                { input: 'rates = [[1]], currencies = 1', judgeInput: '1\n1', output: 'false' },
                { input: 'rates = [[1,2],[0.5,1]], currencies = 2', judgeInput: '2\n1 2\n0.5 1', output: 'false' },
                { input: 'rates = [[1,0.5,0.3],[2,1,0.6],[3.5,1.8,1]], currencies = 3', judgeInput: '3\n1 0.5 0.3\n2 1 0.6\n3.5 1.8 1', output: 'true' },
                { input: 'rates = [[1,1],[1,1]], currencies = 2', judgeInput: '2\n1 1\n1 1', output: 'false' },
                { input: 'rates = [[1,0.9,0.8],[1.1,1,0.85],[1.3,1.2,1]], currencies = 3', judgeInput: '3\n1 0.9 0.8\n1.1 1 0.85\n1.3 1.2 1', output: 'true' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} rates
 * @param {number} currencies
 * @return {boolean}
 */
function hasArbitrage(rates, currencies) {
    // Your code here
}`,
                python: `def has_arbitrage(rates, currencies):
    """
    :type rates: List[List[float]]
    :type currencies: int
    :rtype: bool
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

bool hasArbitrage(vector<vector<double>>& rates, int currencies) {
    // Your code here
}`,
                java: `public class Solution {
    public boolean hasArbitrage(double[][] rates, int currencies) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const rates = [];\n    for(let i=1; i<=n; i++) rates.push(lines[i].split(' ').map(Number));\n    console.log(hasArbitrage(rates, n));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrates = []\nfor i in range(1, n+1):\n    rates.append(list(map(float, lines[i].split())))\nprint(str(has_arbitrage(rates, n)).lower())`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nbool hasArbitrage(vector<vector<double>>& rates, int currencies);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<double>> rates(n, vector<double>(n));\n    for(int i=0; i<n; ++i)\n        for(int j=0; j<n; ++j) cin >> rates[i][j];\n    cout << (hasArbitrage(rates, n) ? "true" : "false") << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] rates = new double[n][n];\n        for(int i=0; i<n; i++)\n            for(int j=0; j<n; j++) rates[i][j] = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.println(sol.hasArbitrage(rates, n));\n    }\n}` }
        }]
    }]
};
