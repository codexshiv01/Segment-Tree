export const jpmorganData = {
    id: 'jpmorgan',
    name: 'JP Morgan',
    logo: 'https://logo.clearbit.com/jpmorganchase.com',
    description: 'Practice real JP Morgan Online Assessment questions.',
    assessments: [{
        id: 'jpmorgan-oa-1',
        title: 'JP Morgan OA-1',
        duration: 90,
        problems: [{
            id: 'portfolio-risk',
            title: 'Portfolio Risk Calculator',
            difficulty: 'Medium',
            description: `### Problem Description
In investment banking, managing portfolio risk is crucial. You are given a list of potential stocks to invest in, each with a price and a volatility score.

You are given:
- \`stocks\`: A list where each element is \`[price, volatility]\`.
- \`max_risk\`: The maximum total risk allowed for the portfolio.

**Risk Calculation:**
The risk of a single stock is defined as \`price * volatility\`.
The total risk of a portfolio is the sum of risks of all selected stocks.

**Goal:**
Select the **maximum number of stocks** such that the total risk does not exceed \`max_risk\`.

### Input Format
- \`stocks\`: List of lists \`[price, volatility]\`
- \`max_risk\`: Integer

### Output Format
- Return an integer representing the maximum number of stocks you can select.

### Constraints
- \`1 <= stocks.length <= 1000\`
- \`1 <= price, volatility <= 100\`
- \`1 <= max_risk <= 10^6\``,
            examples: [
                { input: 'stocks = [[100,5],[200,10]], max_risk = 500', output: '2' },
                { input: 'stocks = [[10,1],[20,2],[30,3]], max_risk = 100', output: '3' }
            ],
            testCases: [
                { input: 'stocks = [[100,5],[200,10]], max_risk = 500', judgeInput: '2\n100 5\n200 10\n500', output: '2' },
                { input: 'stocks = [[100,50]], max_risk = 100', judgeInput: '1\n100 50\n100', output: '0' },
                { input: 'stocks = [[10,1],[20,2],[30,3]], max_risk = 100', judgeInput: '3\n10 1\n20 2\n30 3\n100', output: '3' },
                { input: 'stocks = [[500,100]], max_risk = 1000', judgeInput: '1\n500 100\n1000', output: '0' },
                { input: 'stocks = [[50,5],[100,10],[150,15]], max_risk = 2000', judgeInput: '3\n50 5\n100 10\n150 15\n2000', output: '3' },
                { input: 'stocks = [[200,20],[300,30]], max_risk = 5000', judgeInput: '2\n200 20\n300 30\n5000', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} stocks
 * @param {number} max_risk
 * @return {number}
 */
function maxStocks(stocks, max_risk) {
    // Your code here
}`,
                python: `def max_stocks(stocks, max_risk):
    """
    :type stocks: List[List[int]]
    :type max_risk: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxStocks(vector<vector<int>>& stocks, int max_risk) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxStocks(int[][] stocks, int max_risk) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const stocks = [];\n    for(let i=1; i<=n; i++) stocks.push(lines[i].split(' ').map(Number));\n    const max_risk = parseInt(lines[n+1]);\n    console.log(maxStocks(stocks, max_risk));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nstocks = []\nfor i in range(1, n+1):\n    stocks.append(list(map(int, lines[i].split())))\nmax_risk = int(lines[n+1])\nprint(max_stocks(stocks, max_risk))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxStocks(vector<vector<int>>& stocks, int max_risk);\nint main() {\n    int n, max_risk;\n    cin >> n;\n    vector<vector<int>> stocks(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> stocks[i][0] >> stocks[i][1];\n    cin >> max_risk;\n    cout << maxStocks(stocks, max_risk) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] stocks = new int[n][2];\n        for(int i=0; i<n; i++) {\n            stocks[i][0] = sc.nextInt();\n            stocks[i][1] = sc.nextInt();\n        }\n        int max_risk = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxStocks(stocks, max_risk));\n    }\n}` }
        }]
    }]
};
