export const deutschebankData = {
    id: 'deutschebank',
    name: 'Deutsche Bank',
    logo: 'https://d3pdqc0wehtytt.cloudfront.net/companies/79e70d43-a836-4c42-96d1-2531e8977209.svg',
    description: 'Practice real Deutsche Bank Online Assessment questions.',
    assessments: [{
        id: 'deutschebank-oa-1',
        title: 'Deutsche Bank OA-1',
        duration: 90,
        problems: [{
            id: 'fx-arbitrage',
            title: 'FX Currency Arbitrage Detector',
            difficulty: 'Hard',
            description: `Detect arbitrage opportunities in foreign exchange rates. Given exchange rates, find if there's a profitable cycle.

You are given:
- rates: List of [from_currency, to_currency, exchange_rate]

Goal: Check if you can start with 1 unit of any currency and through a series of exchanges end up with more than 1 unit of the same currency. Return 1 if arbitrage exists, 0 otherwise. Use simple path finding with products of rates.

Input Format:
- rates: List of lists [from, to, rate] where currencies are integers 1-10

Output Format:
- Return 0 or 1

Constraints:
- 1 <= rates.length <= 50
- 1 <= from, to <= 10
- 0.001 <= rate <= 1000.0`,
            examples: [
                { input: 'rates = [[1,2,2.0],[2,3,2.0],[3,1,0.3]]', output: '1' },
                { input: 'rates = [[1,2,2.0],[2,1,0.5]]', output: '0' }
            ],
            testCases: [
                { input: 'rates = [[1,2,2.0],[2,3,2.0],[3,1,0.3]]', judgeInput: '3\n1 2 2.0\n2 3 2.0\n3 1 0.3', output: '1' },
                { input: 'rates = [[1,2,2.0],[2,1,0.5]]', judgeInput: '2\n1 2 2.0\n2 1 0.5', output: '0' },
                { input: 'rates = [[1,2,1.5],[2,3,1.5],[3,1,0.4]]', judgeInput: '3\n1 2 1.5\n2 3 1.5\n3 1 0.4', output: '0' },
                { input: 'rates = [[1,2,1.1],[2,3,1.1],[3,1,0.9]]', judgeInput: '3\n1 2 1.1\n2 3 1.1\n3 1 0.9', output: '1' },
                { input: 'rates = [[1,2,1.0],[2,3,1.0],[3,1,1.0]]', judgeInput: '3\n1 2 1.0\n2 3 1.0\n3 1 1.0', output: '0' },
                { input: 'rates = [[1,2,3.0],[2,3,3.0],[3,4,3.0],[4,1,0.01]]', judgeInput: '4\n1 2 3.0\n2 3 3.0\n3 4 3.0\n4 1 0.01', output: '0' },
                { input: 'rates = [[1,2,1.2],[2,3,1.2],[3,4,1.2],[4,1,0.5]]', judgeInput: '4\n1 2 1.2\n2 3 1.2\n3 4 1.2\n4 1 0.5', output: '1' },
                { input: 'rates = [[1,2,0.9],[2,1,1.1]]', judgeInput: '2\n1 2 0.9\n2 1 1.1', output: '0' },
                { input: 'rates = [[1,2,1.05],[2,3,1.05],[3,1,0.9]]', judgeInput: '3\n1 2 1.05\n2 3 1.05\n3 1 0.9', output: '0' },
                { input: 'rates = [[1,2,2.5],[2,3,1.5],[3,1,0.3]]', judgeInput: '3\n1 2 2.5\n2 3 1.5\n3 1 0.3', output: '1' },
                { input: 'rates = [[1,2,1.0],[2,1,1.0],[1,3,1.0],[3,1,1.0]]', judgeInput: '4\n1 2 1.0\n2 1 1.0\n1 3 1.0\n3 1 1.0', output: '0' },
                { input: 'rates = [[1,2,1.3],[2,3,1.3],[3,4,1.3],[4,1,0.4]]', judgeInput: '4\n1 2 1.3\n2 3 1.3\n3 4 1.3\n4 1 0.4', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} rates
 * @return {number}
 */
function hasArbitrage(rates) {
    // Your code here
}`,
                python: `def has_arbitrage(rates):
    """
    :type rates: List[List]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int hasArbitrage(vector<vector<double>>& rates) {
    // Your code here
}`,
                java: `public class Solution {
    public int hasArbitrage(double[][] rates) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const rates = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        rates.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2])]);\n    }\n    console.log(hasArbitrage(rates));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrates = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    rates.append([int(parts[0]), int(parts[1]), float(parts[2])])\nprint(has_arbitrage(rates))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint hasArbitrage(vector<vector<double>>& rates);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<double>> rates(n, vector<double>(3));\n    for(int i=0; i<n; ++i) {\n        int from, to;\n        double rate;\n        cin >> from >> to >> rate;\n        rates[i][0] = from;\n        rates[i][1] = to;\n        rates[i][2] = rate;\n    }\n    cout << hasArbitrage(rates) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] rates = new double[n][3];\n        for(int i=0; i<n; i++) {\n            rates[i][0] = sc.nextInt();\n            rates[i][1] = sc.nextInt();\n            rates[i][2] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.hasArbitrage(rates));\n    }\n}`
            }
        }, {
            id: 'bond-yield',
            title: 'Bond Yield Calculator',
            difficulty: 'Medium',
            description: `Calculate yield to maturity (YTM) for a bond using simplified approximation.

You are given:
- face_value: Bond face value
- coupon_rate: Annual coupon rate (as percentage)
- current_price: Current market price
- years_to_maturity: Years until maturity

Goal: YTM approximation = ((face_value - current_price) / years_to_maturity + (coupon_rate * face_value / 100)) / ((face_value + current_price) / 2) * 100. Return YTM rounded to 2 decimals.

Input Format:
- face_value: Float
- coupon_rate: Float
- current_price: Float
- years_to_maturity: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 100 <= face_value <= 10000
- 0 <= coupon_rate <= 20
- 50 <= current_price <= 15000
- 1 <= years_to_maturity <= 30`,
            examples: [
                { input: 'face_value = 1000, coupon_rate = 5.0, current_price = 950, years_to_maturity = 10', output: '5.79' },
                { input: 'face_value = 1000, coupon_rate = 6.0, current_price = 1000, years_to_maturity = 5', output: '6.00' }
            ],
            testCases: [
                { input: 'face_value = 1000, coupon_rate = 5.0, current_price = 950, years_to_maturity = 10', judgeInput: '1000\n5.0\n950\n10', output: '5.79' },
                { input: 'face_value = 1000, coupon_rate = 6.0, current_price = 1000, years_to_maturity = 5', judgeInput: '1000\n6.0\n1000\n5', output: '6.00' },
                { input: 'face_value = 1000, coupon_rate = 4.0, current_price = 900, years_to_maturity = 8', judgeInput: '1000\n4.0\n900\n8', output: '5.53' },
                { input: 'face_value = 1000, coupon_rate = 7.0, current_price = 1100, years_to_maturity = 10', judgeInput: '1000\n7.0\n1100\n10', output: '5.71' },
                { input: 'face_value = 500, coupon_rate = 3.0, current_price = 480, years_to_maturity = 5', judgeInput: '500\n3.0\n480\n5', output: '3.47' },
                { input: 'face_value = 2000, coupon_rate = 8.0, current_price = 2100, years_to_maturity = 15', judgeInput: '2000\n8.0\n2100\n15', output: '7.48' },
                { input: 'face_value = 1000, coupon_rate = 5.5, current_price = 975, years_to_maturity = 7', judgeInput: '1000\n5.5\n975\n7', output: '5.92' },
                { input: 'face_value = 1500, coupon_rate = 6.5, current_price = 1450, years_to_maturity = 12', judgeInput: '1500\n6.5\n1450\n12', output: '6.87' },
                { input: 'face_value = 1000, coupon_rate = 4.5, current_price = 1050, years_to_maturity = 6', judgeInput: '1000\n4.5\n1050\n6', output: '3.66' },
                { input: 'face_value = 800, coupon_rate = 3.5, current_price = 750, years_to_maturity = 4', judgeInput: '800\n3.5\n750\n4', output: '5.16' },
                { input: 'face_value = 1000, coupon_rate = 10.0, current_price = 1200, years_to_maturity = 20', judgeInput: '1000\n10.0\n1200\n20', output: '8.18' },
                { input: 'face_value = 1000, coupon_rate = 2.0, current_price = 850, years_to_maturity = 3', judgeInput: '1000\n2.0\n850\n3', output: '7.57' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} face_value
 * @param {number} coupon_rate
 * @param {number} current_price
 * @param {number} years_to_maturity
 * @return {number}
 */
function bondYield(face_value, coupon_rate, current_price, years_to_maturity) {
    // Your code here
}`,
                python: `def bond_yield(face_value, coupon_rate, current_price, years_to_maturity):
    """
    :type face_value: float
    :type coupon_rate: float
    :type current_price: float
    :type years_to_maturity: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `double bondYield(double face_value, double coupon_rate, double current_price, int years_to_maturity) {
    // Your code here
}`,
                java: `public class Solution {
    public double bondYield(double face_value, double coupon_rate, double current_price, int years_to_maturity) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const face_value = parseFloat(lines[0]);\n    const coupon_rate = parseFloat(lines[1]);\n    const current_price = parseFloat(lines[2]);\n    const years_to_maturity = parseInt(lines[3]);\n    console.log(bondYield(face_value, coupon_rate, current_price, years_to_maturity).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nface_value = float(lines[0])\ncoupon_rate = float(lines[1])\ncurrent_price = float(lines[2])\nyears_to_maturity = int(lines[3])\nprint(f'{bond_yield(face_value, coupon_rate, current_price, years_to_maturity):.2f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\ndouble bondYield(double face_value, double coupon_rate, double current_price, int years_to_maturity);\nint main() {\n    double face_value, coupon_rate, current_price;\n    int years_to_maturity;\n    cin >> face_value >> coupon_rate >> current_price >> years_to_maturity;\n    cout << fixed << setprecision(2) << bondYield(face_value, coupon_rate, current_price, years_to_maturity) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double face_value = sc.nextDouble();\n        double coupon_rate = sc.nextDouble();\n        double current_price = sc.nextDouble();\n        int years_to_maturity = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.bondYield(face_value, coupon_rate, current_price, years_to_maturity));\n    }\n}`
            }
        }]
    }]
};
