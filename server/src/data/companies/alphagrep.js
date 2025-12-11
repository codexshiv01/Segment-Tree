export const alphagrepData = {
    id: 'alphagrep',
    name: 'AlphaGrep',
    logo: 'https://logo.clearbit.com/alphagrep.com',
    description: 'Practice real AlphaGrep Online Assessment questions.',
    assessments: [{
        id: 'alphagrep-oa-1',
        title: 'AlphaGrep OA-1',
        duration: 90,
        problems: [{
            id: 'options-pricing',
            title: 'Fast Options Greeks Calculator',
            difficulty: 'Hard',
            description: `Calculate option delta (rate of change of option price with respect to underlying price) using simplified Black-Scholes approximation.

You are given:
- spot: Current underlying price
- strike: Option strike price
- time_to_expiry: Years until expiration
- is_call: 1 for call, 0 for put

Goal: For simplicity, delta_call = 0.5 + ((spot - strike) / (strike * time_to_expiry * 2)). Delta must be clamped between 0 and 1. For put, delta_put = delta_call - 1. Return delta rounded to 4 decimals.

Input Format:
- spot: Float
- strike: Float
- time_to_expiry: Float
- is_call: Integer (0 or 1)

Output Format:
- Return a float rounded to 4 decimal places

Constraints:
- 1 <= spot, strike <= 10000
- 0.01 <= time_to_expiry <= 5.0
- is_call in {0, 1}`,
            examples: [
                { input: 'spot = 100, strike = 100, time_to_expiry = 1.0, is_call = 1', output: '0.5000' },
                { input: 'spot = 110, strike = 100, time_to_expiry = 0.5, is_call = 0', output: '-0.0000' }
            ],
            testCases: [
                { input: 'spot = 100, strike = 100, time_to_expiry = 1.0, is_call = 1', judgeInput: '100\n100\n1.0\n1', output: '0.5000' },
                { input: 'spot = 110, strike = 100, time_to_expiry = 0.5, is_call = 0', judgeInput: '110\n100\n0.5\n0', output: '-0.0000' },
                { input: 'spot = 105, strike = 100, time_to_expiry = 1.0, is_call = 1', judgeInput: '105\n100\n1.0\n1', output: '0.5250' },
                { input: 'spot = 95, strike = 100, time_to_expiry = 1.0, is_call = 1', judgeInput: '95\n100\n1.0\n1', output: '0.4750' },
                { input: 'spot = 120, strike = 100, time_to_expiry = 2.0, is_call = 1', judgeInput: '120\n100\n2.0\n1', output: '0.5500' },
                { input: 'spot = 80, strike = 100, time_to_expiry = 0.5, is_call = 0', judgeInput: '80\n100\n0.5\n0', output: '-0.8000' },
                { input: 'spot = 150, strike = 100, time_to_expiry = 1.0, is_call = 1', judgeInput: '150\n100\n1.0\n1', output: '0.7500' },
                { input: 'spot = 50, strike = 100, time_to_expiry = 1.0, is_call = 0', judgeInput: '50\n100\n1.0\n0', output: '-0.7500' },
                { input: 'spot = 102, strike = 100, time_to_expiry = 0.25, is_call = 1', judgeInput: '102\n100\n0.25\n1', output: '0.6400' },
                { input: 'spot = 98, strike = 100, time_to_expiry = 0.25, is_call = 0', judgeInput: '98\n100\n0.25\n0', output: '-0.6400' },
                { input: 'spot = 200, strike = 100, time_to_expiry = 1.0, is_call = 1', judgeInput: '200\n100\n1.0\n1', output: '1.0000' },
                { input: 'spot = 90, strike = 100, time_to_expiry = 2.0, is_call = 0', judgeInput: '90\n100\n2.0\n0', output: '-0.7500' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} spot
 * @param {number} strike
 * @param {number} time_to_expiry
 * @param {number} is_call
 * @return {number}
 */
function calculateDelta(spot, strike, time_to_expiry, is_call) {
    // Your code here
}`,
                python: `def calculate_delta(spot, strike, time_to_expiry, is_call):
    """
    :type spot: float
    :type strike: float
    :type time_to_expiry: float
    :type is_call: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `double calculateDelta(double spot, double strike, double time_to_expiry, int is_call) {
    // Your code here
}`,
                java: `public class Solution {
    public double calculateDelta(double spot, double strike, double time_to_expiry, int is_call) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const spot = parseFloat(lines[0]);\n    const strike = parseFloat(lines[1]);\n    const time_to_expiry = parseFloat(lines[2]);\n    const is_call = parseInt(lines[3]);\n    console.log(calculateDelta(spot, strike, time_to_expiry, is_call).toFixed(4));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nspot = float(lines[0])\nstrike = float(lines[1])\ntime_to_expiry = float(lines[2])\nis_call = int(lines[3])\nprint(f'{calculate_delta(spot, strike, time_to_expiry, is_call):.4f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\ndouble calculateDelta(double spot, double strike, double time_to_expiry, int is_call);\nint main() {\n    double spot, strike, time_to_expiry;\n    int is_call;\n    cin >> spot >> strike >> time_to_expiry >> is_call;\n    cout << fixed << setprecision(4) << calculateDelta(spot, strike, time_to_expiry, is_call) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double spot = sc.nextDouble();\n        double strike = sc.nextDouble();\n        double time_to_expiry = sc.nextDouble();\n        int is_call = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.4f\\n", sol.calculateDelta(spot, strike, time_to_expiry, is_call));\n    }\n}`
            }
        }, {
            id: 'pair-trading',
            title: 'Pairs Trading Correlation Finder',
            difficulty: 'Medium',
            description: `Find best correlated stock pairs for pairs trading strategy.

You are given:
- prices_a: Price history of stock A
- prices_b: Price history of stock B

Goal: Calculate correlation coefficient using simplified formula: correlation = sum((a[i] - mean_a) * (b[i] - mean_b)) / (n * stddev_a * stddev_b). Return correlation rounded to 4 decimals.

Input Format:
- prices_a: List of floats
- prices_b: List of floats (same length)

Output Format:
- Return a float rounded to 4 decimal places

Constraints:
- 2 <= prices.length <= 1000
- Both lists have same length
- 1.0 <= price <= 10000.0`,
            examples: [
                { input: 'prices_a = [100,102,104,106], prices_b = [50,51,52,53]', output: '1.0000' },
                { input: 'prices_a = [100,110,100,110], prices_b = [50,45,50,45]', output: '-1.0000' }
            ],
            testCases: [
                { input: 'prices_a = [100,102,104,106], prices_b = [50,51,52,53]', judgeInput: '4\n100 102 104 106\n50 51 52 53', output: '1.0000' },
                { input: 'prices_a = [100,110,100,110], prices_b = [50,45,50,45]', judgeInput: '4\n100 110 100 110\n50 45 50 45', output: '-1.0000' },
                { input: 'prices_a = [100,100,100], prices_b = [50,60,70]', judgeInput: '3\n100 100 100\n50 60 70', output: '0.0000' },
                { input: 'prices_a = [50,55,60,65], prices_b = [100,110,120,130]', judgeInput: '4\n50 55 60 65\n100 110 120 130', output: '1.0000' },
                { input: 'prices_a = [200,210,200,210], prices_b = [100,105,100,105]', judgeInput: '4\n200 210 200 210\n100 105 100 105', output: '1.0000' },
                { input: 'prices_a = [80,90,100], prices_b = [120,110,100]', judgeInput: '3\n80 90 100\n120 110 100', output: '-1.0000' },
                { input: 'prices_a = [150,160,170,180], prices_b = [75,80,85,90]', judgeInput: '4\n150 160 170 180\n75 80 85 90', output: '1.0000' },
                { input: 'prices_a = [100,105,110,115,120], prices_b = [200,195,190,185,180]', judgeInput: '5\n100 105 110 115 120\n200 195 190 185 180', output: '-1.0000' },
                { input: 'prices_a = [500,500,500,500], prices_b = [250,250,250,250]', judgeInput: '4\n500 500 500 500\n250 250 250 250', output: '0.0000' },
                { input: 'prices_a = [10,20,30], prices_b = [30,20,10]', judgeInput: '3\n10 20 30\n30 20 10', output: '-1.0000' },
                { input: 'prices_a = [1000,1050,1100,1150], prices_b = [2000,2100,2200,2300]', judgeInput: '4\n1000 1050 1100 1150\n2000 2100 2200 2300', output: '1.0000' },
                { input: 'prices_a = [75,80,85,90,95], prices_b = [150,160,170,180,190]', judgeInput: '5\n75 80 85 90 95\n150 160 170 180 190', output: '1.0000' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} prices_a
 * @param {number[]} prices_b
 * @return {number}
 */
function correlation(prices_a, prices_b) {
    // Your code here
}`,
                python: `def correlation(prices_a, prices_b):
    """
    :type prices_a: List[float]
    :type prices_b: List[float]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double correlation(vector<double>& prices_a, vector<double>& prices_b) {
    // Your code here
}`,
                java: `public class Solution {
    public double correlation(double[] prices_a, double[] prices_b) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const prices_a = lines[1].split(' ').map(Number);\n    const prices_b = lines[2].split(' ').map(Number);\n    console.log(correlation(prices_a, prices_b).toFixed(4));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nprices_a = list(map(float, lines[1].split()))\nprices_b = list(map(float, lines[2].split()))\nprint(f'{correlation(prices_a, prices_b):.4f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble correlation(vector<double>& prices_a, vector<double>& prices_b);\nint main() {\n    int n;\n    cin >> n;\n    vector<double> prices_a(n), prices_b(n);\n    for(int i=0; i<n; ++i) cin >> prices_a[i];\n    for(int i=0; i<n; ++i) cin >> prices_b[i];\n    cout << fixed << setprecision(4) << correlation(prices_a, prices_b) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[] prices_a = new double[n];\n        double[] prices_b = new double[n];\n        for(int i=0; i<n; i++) prices_a[i] = sc.nextDouble();\n        for(int i=0; i<n; i++) prices_b[i] = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.4f\\n", sol.correlation(prices_a, prices_b));\n    }\n}`
            }
        }]
    }]
};
