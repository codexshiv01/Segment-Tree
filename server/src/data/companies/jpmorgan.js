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
            description: `Problem Description
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
    }, {
        id: 'jpmorgan-oa-2',
        title: 'JP Morgan OA-2',
        duration: 90,
        problems: [{
            id: 'bond-portfolio',
            title: 'Bond Portfolio Optimization',
            difficulty: 'Hard',
            description: `You are a portfolio manager at JP Morgan. You have a list of N available bonds.
Each bond i has a purchase cost C[i] and a projected profit P[i].
You have a total investment capital K.
You can purchase at most one unit of each bond.

Find the maximum total profit you can achieve without exceeding your capital K.

Input Format:
- First line: N (number of bonds)
- Next N lines: C P (cost and profit of each bond)
- Last line: K (total capital)

Output Format:
- Integer representing maximum profit.

Constraints:
- 1 <= N <= 1000
- 1 <= K <= 10000
- 1 <= C[i], P[i] <= 1000
`,
            examples: [
                {
                    input: '3\n10 5\n20 10\n30 15\n30',
                    output: '15'
                },
                {
                    input: '3\n10 10\n20 10\n30 10\n15',
                    output: '10'
                }
            ],
            testCases: [
                {
                    input: '3\n10 5\n20 10\n30 15\n30',
                    judgeInput: '3\n10 5\n20 10\n30 15\n30',
                    output: '15'
                },
                {
                    input: '3\n10 10\n20 10\n30 10\n15',
                    judgeInput: '3\n10 10\n20 10\n30 10\n15',
                    output: '10'
                },
                {
                    input: '4\n5 10\n4 40\n6 30\n3 50\n10',
                    judgeInput: '4\n5 10\n4 40\n6 30\n3 50\n10',
                    output: '90'
                },
                {
                    input: '2\n100 10\n100 20\n50',
                    judgeInput: '2\n100 10\n100 20\n50',
                    output: '0'
                },
                {
                    input: '5\n1 1\n2 2\n3 3\n4 4\n5 5\n10',
                    judgeInput: '5\n1 1\n2 2\n3 3\n4 4\n5 5\n10',
                    output: '10'
                },
                {
                    input: '1\n10 100\n10',
                    judgeInput: '1\n10 100\n10',
                    output: '100'
                },
                {
                    input: '1\n10 100\n9',
                    judgeInput: '1\n10 100\n9',
                    output: '0'
                },
                {
                    input: '3\n10 60\n20 100\n30 120\n50',
                    judgeInput: '3\n10 60\n20 100\n30 120\n50',
                    output: '220'
                },
                {
                    input: '4\n10 10\n10 10\n10 10\n10 10\n25',
                    judgeInput: '4\n10 10\n10 10\n10 10\n10 10\n25',
                    output: '20'
                },
                {
                    input: '2\n1000 1000\n1000 1000\n2000',
                    judgeInput: '2\n1000 1000\n1000 1000\n2000',
                    output: '2000'
                }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} bonds
 * @param {number} k
 * @return {number}
 */
function maxProfit(n, bonds, k) {
    // Your code here
}`,
                python: `def max_profit(n, bonds, k):
    """
    :type n: int
    :type bonds: List[List[int]]
    :type k: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxProfit(int n, vector<vector<int>>& bonds, int k) {
    // Your code here
}`,
                java: `import java.util.*;

public class Solution {
    public int maxProfit(int n, int[][] bonds, int k) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const bonds = [];
    for (let i = 1; i <= n; i++) {
        bonds.push(lines[i].split(' ').map(Number));
    }
    const k = parseInt(lines[n+1]);
    console.log(maxProfit(n, bonds, k));
});`,
                python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
bonds = []
for i in range(1, n + 1):
    bonds.append(list(map(int, lines[i].split())))
k = int(lines[n+1])
print(max_profit(n, bonds, k))`,
                cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxProfit(int n, vector<vector<int>>& bonds, int k);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> bonds(n, vector<int>(2));
    for (int i = 0; i < n; i++) {
        cin >> bonds[i][0] >> bonds[i][1];
    }
    int k;
    cin >> k;
    cout << maxProfit(n, bonds, k) << endl;
    return 0;
}`,
                java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] bonds = new int[n][2];
        for (int i = 0; i < n; i++) {
            bonds[i][0] = sc.nextInt();
            bonds[i][1] = sc.nextInt();
        }
        int k = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxProfit(n, bonds, k));
    }
}`
            }
        }]
    }]
};
