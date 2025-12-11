export const deshawData = {
    id: 'deshaw',
    name: 'D. E. Shaw',
    logo: 'https://logo.clearbit.com/deshaw.com',
    description: 'Practice real D. E. Shaw Online Assessment questions.',
    assessments: [{
        id: 'deshaw-oa-1',
        title: 'D. E. Shaw OA-1',
        duration: 90,
        problems: [{
            id: 'portfolio-rebalancing',
            title: 'Portfolio Rebalancing Optimizer',
            difficulty: 'Hard',
            description: `Optimize portfolio rebalancing to achieve target allocations with minimum transaction costs.

You are given:
- current: List of [asset_id, current_value]
- targets: List of [asset_id, target_percent]
- total_value: Total portfolio value
- transaction_cost: Cost per dollar traded (as decimal)

Goal: Calculate minimum cost to rebalance. For each asset, trade_amount = abs(current_value - (target_percent * total_value / 100)). Return total_cost = sum(trade_amount) * transaction_cost, rounded to 2 decimals.

Input Format:
- current: List of lists [id, value]
- targets: List of lists [id, percent]
- total_value: Float
- transaction_cost: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= assets <= 50
- 0 <= current_value <= 1000000
- 0 <= target_percent <= 100
- Sum of target_percent = 100
- 0.0001 <= transaction_cost <= 0.01`,
            examples: [
                { input: 'current = [[1,6000],[2,4000]], targets = [[1,50],[2,50]], total_value = 10000, transaction_cost = 0.001', output: '2.00' },
                { input: 'current = [[1,5000]], targets = [[1,100]], total_value = 5000, transaction_cost = 0.001', output: '0.00' }
            ],
            testCases: [
                { input: 'current = [[1,6000],[2,4000]], targets = [[1,50],[2,50]], total_value = 10000, transaction_cost = 0.001', judgeInput: '2\n1 6000\n2 4000\n2\n1 50\n2 50\n10000\n0.001', output: '2.00' },
                { input: 'current = [[1,5000]], targets = [[1,100]], total_value = 5000, transaction_cost = 0.001', judgeInput: '1\n1 5000\n1\n1 100\n5000\n0.001', output: '0.00' },
                { input: 'current = [[1,7000],[2,3000]], targets = [[1,40],[2,60]], total_value = 10000, transaction_cost = 0.002', judgeInput: '2\n1 7000\n2 3000\n2\n1 40\n2 60\n10000\n0.002', output: '12.00' },
                { input: 'current = [[1,2500],[2,2500],[3,5000]], targets = [[1,33.33],[2,33.33],[3,33.34]], total_value = 10000, transaction_cost = 0.0015', judgeInput: '3\n1 2500\n2 2500\n3 5000\n3\n1 33.33\n2 33.33\n3 33.34\n10000\n0.0015', output: '5.01' },
                { input: 'current = [[1,8000],[2,2000]], targets = [[1,30],[2,70]], total_value = 10000, transaction_cost = 0.0025', judgeInput: '2\n1 8000\n2 2000\n2\n1 30\n2 70\n10000\n0.0025', output: '25.00' },
                { input: 'current = [[1,10000]], targets = [[1,50],[2,50]], total_value = 20000, transaction_cost = 0.001', judgeInput: '1\n1 10000\n2\n1 50\n2 50\n20000\n0.001', output: '10.00' },
                { input: 'current = [[1,3000],[2,3000],[3,4000]], targets = [[1,25],[2,25],[3,50]], total_value = 10000, transaction_cost = 0.003', judgeInput: '3\n1 3000\n2 3000\n3 4000\n3\n1 25\n2 25\n3 50\n10000\n0.003', output: '6.00' },
                { input: 'current = [[1,15000],[2,5000]], targets = [[1,60],[2,40]], total_value = 20000, transaction_cost = 0.002', judgeInput: '2\n1 15000\n2 5000\n2\n1 60\n2 40\n20000\n0.002', output: '6.00' },
                { input: 'current = [[1,4000],[2,6000]], targets = [[1,45],[2,55]], total_value = 10000, transaction_cost = 0.0005', judgeInput: '2\n1 4000\n2 6000\n2\n1 45\n2 55\n10000\n0.0005', output: '1.00' },
                { input: 'current = [[1,12000],[2,8000]], targets = [[1,50],[2,50]], total_value = 20000, transaction_cost = 0.0008', judgeInput: '2\n1 12000\n2 8000\n2\n1 50\n2 50\n20000\n0.0008', output: '3.20' },
                { input: 'current = [[1,5000],[2,3000],[3,2000]], targets = [[1,40],[2,35],[3,25]], total_value = 10000, transaction_cost = 0.0012', judgeInput: '3\n1 5000\n2 3000\n3 2000\n3\n1 40\n2 35\n3 25\n10000\n0.0012', output: '2.40' },
                { input: 'current = [[1,9000],[2,1000]], targets = [[1,70],[2,30]], total_value = 10000, transaction_cost = 0.004', judgeInput: '2\n1 9000\n2 1000\n2\n1 70\n2 30\n10000\n0.004', output: '16.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} current
 * @param {number[][]} targets
 * @param {number} total_value
 * @param {number} transaction_cost
 * @return {number}
 */
function rebalanceCost(current, targets, total_value, transaction_cost) {
    // Your code here
}`,
                python: `def rebalance_cost(current, targets, total_value, transaction_cost):
    """
    :type current: List[List]
    :type targets: List[List]
    :type total_value: float
    :type transaction_cost: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double rebalanceCost(vector<vector<double>>& current, vector<vector<double>>& targets, double total_value, double transaction_cost) {
    // Your code here
}`,
                java: `public class Solution {
    public double rebalanceCost(double[][] current, double[][] targets, double total_value, double transaction_cost) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const current = [];\n    for(let i=1; i<=n; i++) current.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const targets = [];\n    for(let i=n+2; i<n+2+m; i++) targets.push(lines[i].split(' ').map(Number));\n    const total_value = parseFloat(lines[n+2+m]);\n    const transaction_cost = parseFloat(lines[n+3+m]);\n    console.log(rebalanceCost(current, targets, total_value, transaction_cost).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncurrent = []\nfor i in range(1, n+1):\n    current.append(list(map(float, lines[i].split())))\nm = int(lines[n+1])\ntargets = []\nfor i in range(n+2, n+2+m):\n    targets.append(list(map(float, lines[i].split())))\ntotal_value = float(lines[n+2+m])\ntransaction_cost = float(lines[n+3+m])\nprint(f'{rebalance_cost(current, targets, total_value, transaction_cost):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble rebalanceCost(vector<vector<double>>& current, vector<vector<double>>& targets, double total_value, double transaction_cost);\nint main() {\n    int n, m;\n    double total_value, transaction_cost;\n    cin >> n;\n    vector<vector<double>> current(n, vector<double>(2));\n    for(int i=0; i<n; ++i) cin >> current[i][0] >> current[i][1];\n    cin >> m;\n    vector<vector<double>> targets(m, vector<double>(2));\n    for(int i=0; i<m; ++i) cin >> targets[i][0] >> targets[i][1];\n    cin >> total_value >> transaction_cost;\n    cout << fixed << setprecision(2) << rebalance Cost(current, targets, total_value, transaction_cost) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] current = new double[n][2];\n        for(int i=0; i<n; i++) {\n            current[i][0] = sc.nextDouble();\n            current[i][1] = sc.nextDouble();\n        }\n        int m = sc.nextInt();\n        double[][] targets = new double[m][2];\n        for(int i=0; i<m; i++) {\n            targets[i][0] = sc.nextDouble();\n            targets[i][1] = sc.nextDouble();\n        }\n        double total_value = sc.nextDouble();\n        double transaction_cost = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.rebalanceCost(current, targets, total_value, transaction_cost));\n    }\n}`
            }
        }, {
            id: 'statistical-arbitrage',
            title: 'Statistical Arbitrage Signal Generator',
            difficulty: 'Hard',
            description: `Generate trading signals based on mean reversion strategy. Calculate z-score and determine if position should be taken.

You are given:
- prices: Historical prices
- current_price: Current market price
- threshold: Z-score threshold for signal

Goal: Calculate mean and standard deviation of prices. Then z_score = (current_price - mean) / std_dev. Return 1 if z_score > threshold (sell signal), -1 if z_score < -threshold (buy signal), 0 otherwise. Round z_score to 4 decimals for comparison.

Input Format:
- prices: List of floats
- current_price: Float
- threshold: Float

Output Format:
- Return an integer (-1, 0, or 1)

Constraints:
- 2 <= prices.length <= 1000
- 1.0 <= price <= 100000.0
- 0.1 <= threshold <= 5.0`,
            examples: [
                { input: 'prices = [100,102,98,101], current_price = 110, threshold = 2.0', output: '1' },
                { input: 'prices = [100,102,98,101], current_price = 100, threshold = 2.0', output: '0' }
            ],
            testCases: [
                { input: 'prices = [100,102,98,101], current_price = 110, threshold = 2.0', judgeInput: '4\n100 102 98 101\n110\n2.0', output: '1' },
                { input: 'prices = [100,102,98,101], current_price = 100, threshold = 2.0', judgeInput: '4\n100 102 98 101\n100\n2.0', output: '0' },
                { input: 'prices = [50,52,48,51,49], current_price = 40, threshold = 1.5', judgeInput: '5\n50 52 48 51 49\n40\n1.5', output: '-1' },
                { input: 'prices = [200,210,190,205], current_price = 202, threshold = 1.0', judgeInput: '4\n200 210 190 205\n202\n1.0', output: '0' },
                { input: 'prices = [1000,1020,980,1010], current_price = 1050, threshold = 1.5', judgeInput: '4\n1000 1020 980 1010\n1050\n1.5', output: '1' },
                { input: 'prices = [75,80,70,78,72], current_price = 60, threshold = 2.0', judgeInput: '5\n75 80 70 78 72\n60\n2.0', output: '-1' },
                { input: 'prices = [150,155,145,152], current_price = 151, threshold = 0.5', judgeInput: '4\n150 155 145 152\n151\n0.5', output: '0' },
                { input: 'prices = [300,310,290,305,295], current_price = 330, threshold = 2.5', judgeInput: '5\n300 310 290 305 295\n330\n2.5', output: '1' },
                { input: 'prices = [500,520,480,510], current_price = 460, threshold = 1.8', judgeInput: '4\n500 520 480 510\n460\n1.8', output: '-1' },
                { input: 'prices = [90,95,85,92,88], current_price = 91, threshold = 1.0', judgeInput: '5\n90 95 85 92 88\n91\n1.0', output: '0' },
                { input: 'prices = [1200,1250,1150,1220], current_price = 1300, threshold = 1.2', judgeInput: '4\n1200 1250 1150 1220\n1300\n1.2', output: '1' },
                { input: 'prices = [800,820,780,810,790], current_price = 750, threshold = 1.5', judgeInput: '5\n800 820 780 810 790\n750\n1.5', output: '-1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} prices
 * @param {number} current_price
 * @param {number} threshold
 * @return {number}
 */
function generateSignal(prices, current_price, threshold) {
    // Your code here
}`,
                python: `def generate_signal(prices, current_price, threshold):
    """
    :type prices: List[float]
    :type current_price: float
    :type threshold: float
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int generateSignal(vector<double>& prices, double current_price, double threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int generateSignal(double[] prices, double current_price, double threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const prices = lines[1].split(' ').map(Number);\n    const current_price = parseFloat(lines[2]);\n    const threshold = parseFloat(lines[3]);\n    console.log(generateSignal(prices, current_price, threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nprices = list(map(float, lines[1].split()))\ncurrent_price = float(lines[2])\nthreshold = float(lines[3])\nprint(generate_signal(prices, current_price, threshold))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint generateSignal(vector<double>& prices, double current_price, double threshold);\nint main() {\n    int n;\n    double current_price, threshold;\n    cin >> n;\n    vector<double> prices(n);\n    for(int i=0; i<n; ++i) cin >> prices[i];\n    cin >> current_price >> threshold;\n    cout << generateSignal(prices, current_price, threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[] prices = new double[n];\n        for(int i=0; i<n; i++) prices[i] = sc.nextDouble();\n        double current_price = sc.nextDouble();\n        double threshold = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.println(sol.generateSignal(prices, current_price, threshold));\n    }\n}`
            }
        }]
    }]
};
