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
    }, {
        id: 'gs-oa-2',
        title: 'Goldman Sachs OA-2',
        duration: 90,
        problems: [{
            id: 'high-value-path',
            title: 'High-Value Transaction Path',
            difficulty: 'Hard',
            description: `Goldman Sachs needs to transfer a large asset from Bank A (node 1) to Bank B (node N) through a network of intermediary banks.
The network is represented as a directed graph where each edge (u, v) has a capacity W representing the maximum transaction value that can be processed between u and v.

Find the path from Node 1 to Node N such that the maximum possible transaction value (the minimum edge weight on the path) is maximized.
Return this maximum value. If no path exists, return -1.

Input Format:
- First line: N (number of banks)
- Second line: M (number of connections)
- Next M lines: u v w (directed edge from u to v with capacity w)

Output Format:
- Integer representing the maximum possible transaction value.

Constraints:
- 1 <= N <= 10^5
- 1 <= M <= 10^5
- 1 <= w <= 10^9
`,
            examples: [
                {
                    input: '3\n3\n1 2 10\n2 3 5\n1 3 2',
                    output: '5'
                },
                {
                    input: '4\n4\n1 2 10\n2 3 10\n3 4 10\n1 4 5',
                    output: '10'
                }
            ],
            testCases: [
                {
                    input: '3\n3\n1 2 10\n2 3 5\n1 3 2',
                    judgeInput: '3\n3\n1 2 10\n2 3 5\n1 3 2',
                    output: '5'
                },
                {
                    input: '4\n4\n1 2 10\n2 3 10\n3 4 10\n1 4 5',
                    judgeInput: '4\n4\n1 2 10\n2 3 10\n3 4 10\n1 4 5',
                    output: '10'
                },
                {
                    input: '2\n1\n1 2 100',
                    judgeInput: '2\n1\n1 2 100',
                    output: '100'
                },
                {
                    input: '2\n0',
                    judgeInput: '2\n0',
                    output: '-1'
                },
                {
                    input: '5\n6\n1 2 10\n2 3 20\n3 5 5\n1 4 15\n4 5 12\n2 4 10',
                    judgeInput: '5\n6\n1 2 10\n2 3 20\n3 5 5\n1 4 15\n4 5 12\n2 4 10',
                    output: '12'
                },
                {
                    input: '3\n2\n1 2 10\n2 1 10',
                    judgeInput: '3\n2\n1 2 10\n2 1 10',
                    output: '-1'
                },
                {
                    input: '4\n5\n1 2 100\n2 3 100\n3 4 100\n1 3 1\n3 4 1',
                    judgeInput: '4\n5\n1 2 100\n2 3 100\n3 4 100\n1 3 1\n3 4 1',
                    output: '100'
                },
                {
                    input: '3\n3\n1 2 1\n2 3 100\n1 3 10',
                    judgeInput: '3\n3\n1 2 1\n2 3 100\n1 3 10',
                    output: '10'
                },
                {
                    input: '5\n4\n1 2 10\n2 3 10\n3 4 10\n4 5 10',
                    judgeInput: '5\n4\n1 2 10\n2 3 10\n3 4 10\n4 5 10',
                    output: '10'
                },
                {
                    input: '6\n7\n1 2 50\n2 3 40\n3 6 10\n1 4 30\n4 5 35\n5 6 25\n2 5 20',
                    judgeInput: '6\n7\n1 2 50\n2 3 40\n3 6 10\n1 4 30\n4 5 35\n5 6 25\n2 5 20',
                    output: '25'
                }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function maxTransactionValue(n, edges) {
    // Your code here
}`,
                python: `def max_transaction_value(n, edges):
    """
    :type n: int
    :type edges: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxTransactionValue(int n, vector<vector<int>>& edges) {
    // Your code here
}`,
                java: `import java.util.*;

public class Solution {
    public int maxTransactionValue(int n, int[][] edges) {
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
    const m = parseInt(lines[1]);
    const edges = [];
    for (let i = 2; i < 2 + m; i++) {
        edges.push(lines[i].split(' ').map(Number));
    }
    console.log(maxTransactionValue(n, edges));
});`,
                python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
m = int(lines[1])
edges = []
for i in range(2, 2 + m):
    edges.append(list(map(int, lines[i].split())))
print(max_transaction_value(n, edges))`,
                cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxTransactionValue(int n, vector<vector<int>>& edges);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> edges(m, vector<int>(3));
    for (int i = 0; i < m; i++) {
        cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
    }
    cout << maxTransactionValue(n, edges) << endl;
    return 0;
}`,
                java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] edges = new int[m][3];
        for (int i = 0; i < m; i++) {
            edges[i][0] = sc.nextInt();
            edges[i][1] = sc.nextInt();
            edges[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.maxTransactionValue(n, edges));
    }
}`
            }
        }]
    }]
};
