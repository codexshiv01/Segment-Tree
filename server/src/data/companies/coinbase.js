export const coinbaseData = {
    id: 'coinbase',
    name: 'Coinbase',
    logo: 'https://logo.clearbit.com/coinbase.com',
    description: 'Practice real Coinbase Online Assessment questions.',
    assessments: [{
        id: 'coinbase-oa-1',
        title: 'Coinbase OA-1',
        duration: 90,
        problems: [{
            id: 'crypto-arbitrage',
            title: 'Crypto Arbitrage Detector',
            difficulty: 'Medium',
            description: `Coinbase wants to detect arbitrage opportunities across different exchanges. Given prices of a cryptocurrency on different exchanges, find the maximum profit possible by buying on one and selling on another.

You are given:
- prices: A list of prices on different exchanges.
- fees: Transaction fee per trade (flat rate).

Goal: Find the maximum profit (sell_price - buy_price - 2 * fee). If no profit is possible, return 0.

Input Format:
- prices: List of floats
- fees: Float

Output Format:
- Return a float representing max profit.

Constraints:
- 2 <= prices.length <= 1000
- 0 <= price, fee <= 10000`,
            examples: [
                { input: 'prices = [100,105,102,110], fees = 2', output: '6.0' },
                { input: 'prices = [100,102], fees = 2', output: '0.0' }
            ],
            testCases: [
                { input: 'prices = [100,105,102,110], fees = 2', judgeInput: '4\n100 105 102 110\n2', output: '6.0' },
                { input: 'prices = [100,102], fees = 2', judgeInput: '2\n100 102\n2', output: '0.0' },
                { input: 'prices = [100,90,80], fees = 1', judgeInput: '3\n100 90 80\n1', output: '0.0' },
                { input: 'prices = [10,20,30,40], fees = 5', judgeInput: '4\n10 20 30 40\n5', output: '20.0' },
                { input: 'prices = [50,100,50,100], fees = 10', judgeInput: '4\n50 100 50 100\n10', output: '30.0' },
                { input: 'prices = [100,200], fees = 0', judgeInput: '2\n100 200\n0', output: '100.0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} prices
 * @param {number} fees
 * @return {number}
 */
function maxArbitrage(prices, fees) {
    // Your code here
}`,
                python: `def max_arbitrage(prices, fees):
    """
    :type prices: List[float]
    :type fees: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double maxArbitrage(vector<double>& prices, double fees) {
    // Your code here
}`,
                java: `public class Solution {
    public double maxArbitrage(double[] prices, double fees) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const prices = lines[1].split(' ').map(Number);\n    const fees = parseFloat(lines[2]);\n    console.log(maxArbitrage(prices, fees).toFixed(1));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nprices = list(map(float, lines[1].split()))\nfees = float(lines[2])\nprint(f'{max_arbitrage(prices, fees):.1f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble maxArbitrage(vector<double>& prices, double fees);\nint main() {\n    int n;\n    cin >> n;\n    vector<double> prices(n);\n    for(int i=0; i<n; ++i) cin >> prices[i];\n    double fees;\n    cin >> fees;\n    cout << fixed << setprecision(1) << maxArbitrage(prices, fees) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[] prices = new double[n];\n        for(int i=0; i<n; i++) prices[i] = sc.nextDouble();\n        double fees = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.1f\\n", sol.maxArbitrage(prices, fees));\n    }\n}`
            }
        }, {
            id: 'blockchain-validator',
            title: 'Blockchain Validator Selection',
            difficulty: 'Hard',
            description: `Coinbase needs to select a set of validators for a new blockchain network. Each validator has a stake and a reliability score. Select validators to maximize total reliability while meeting a minimum total stake requirement.

You are given:
- validators: A list of [stake, reliability].
- min_stake: The minimum total stake required.

Goal: Select a subset of validators such that the sum of their stakes is greater than or equal to min_stake, and the sum of their reliability scores is maximized. Return the maximum reliability. If impossible, return -1.

Input Format:
- validators: List of lists [stake, reliability]
- min_stake: Integer

Output Format:
- Return an integer representing max reliability.

Constraints:
- 1 <= validators.length <= 100
- 1 <= stake, reliability <= 1000
- 1 <= min_stake <= 10000`,
            examples: [
                { input: 'validators = [[100,10],[50,5],[50,8]], min_stake = 100', output: '13' },
                { input: 'validators = [[10,1]], min_stake = 100', output: '-1' }
            ],
            testCases: [
                { input: 'validators = [[100,10],[50,5],[50,8]], min_stake = 100', judgeInput: '3\n100 10\n50 5\n50 8\n100', output: '13' },
                { input: 'validators = [[10,1]], min_stake = 100', judgeInput: '1\n10 1\n100', output: '-1' },
                { input: 'validators = [[100,10],[100,20]], min_stake = 100', judgeInput: '2\n100 10\n100 20\n100', output: '30' },
                { input: 'validators = [[50,10],[50,10],[50,10]], min_stake = 120', judgeInput: '3\n50 10\n50 10\n50 10\n120', output: '30' },
                { input: 'validators = [[10,1],[20,2],[30,3]], min_stake = 50', judgeInput: '3\n10 1\n20 2\n30 3\n50', output: '5' },
                { input: 'validators = [[100,100]], min_stake = 50', judgeInput: '1\n100 100\n50', output: '100' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} validators
 * @param {number} min_stake
 * @return {number}
 */
function maxReliability(validators, min_stake) {
    // Your code here
}`,
                python: `def max_reliability(validators, min_stake):
    """
    :type validators: List[List[int]]
    :type min_stake: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxReliability(vector<vector<int>>& validators, int min_stake) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxReliability(int[][] validators, int min_stake) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const validators = [];\n    for(let i=1; i<=n; i++) validators.push(lines[i].split(' ').map(Number));\n    const min_stake = parseInt(lines[n+1]);\n    console.log(maxReliability(validators, min_stake));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nvalidators = []\nfor i in range(1, n+1):\n    validators.append(list(map(int, lines[i].split())))\nmin_stake = int(lines[n+1])\nprint(max_reliability(validators, min_stake))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxReliability(vector<vector<int>>& validators, int min_stake);\nint main() {\n    int n, min_stake;\n    cin >> n;\n    vector<vector<int>> validators(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> validators[i][0] >> validators[i][1];\n    cin >> min_stake;\n    cout << maxReliability(validators, min_stake) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] validators = new int[n][2];\n        for(int i=0; i<n; i++) {\n            validators[i][0] = sc.nextInt();\n            validators[i][1] = sc.nextInt();\n        }\n        int min_stake = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxReliability(validators, min_stake));\n    }\n}`
            }
        }]
    }]
};
