export const janestreetData = {
    id: 'janestreet',
    name: 'Jane Street',
    logo: 'https://logo.clearbit.com/janestreet.com',
    description: 'Practice real Jane Street Capital Online Assessment questions.',
    assessments: [{
        id: 'janestreet-oa-1',
        title: 'Jane Street OA-1',
        duration: 90,
        problems: [{
            id: 'options-pricing-tree',
            title: 'Binomial Options Pricing Tree',
            difficulty: 'Hard',
            description: `Calculate the fair value of a European call option using the binomial tree model with given parameters.

You are given:
- spot_price: Current stock price
- strike_price: Option strike price
- up_factor: Price multiplier on up move
- down_factor: Price multiplier on down move
- risk_free_rate: Risk-free interest rate per period
- periods: Number of time periods

Goal: Calculate option value using binomial tree backward induction. At each node, option_value = max(0, stock_price - strike_price) for terminal nodes, and option_value = ((p * up_value) + ((1 - p) * down_value)) / (1 + risk_free_rate) for non-terminal nodes, where p = (1 + risk_free_rate - down_factor) / (up_factor - down_factor). Return value rounded to 2 decimal places.

Input Format:
- spot_price: Float
- strike_price: Float
- up_factor: Float
- down_factor: Float
- risk_free_rate: Float
- periods: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= spot_price, strike_price <= 10000
- 1.01 <= up_factor <= 2.0
- 0.5 <= down_factor <= 0.99
- 0.0 <= risk_free_rate <= 0.2
- 1 <= periods <= 10`,
            examples: [
                { input: 'spot_price = 100, strike_price = 100, up_factor = 1.1, down_factor = 0.9, risk_free_rate = 0.05, periods = 2', output: '7.47' },
                { input: 'spot_price = 50, strike_price = 55, up_factor = 1.2, down_factor = 0.8, risk_free_rate = 0.02, periods = 1', output: '2.45' }
            ],
            testCases: [
                { input: 'spot_price = 100, strike_price = 100, up_factor = 1.1, down_factor = 0.9, risk_free_rate = 0.05, periods = 2', judgeInput: '100\n100\n1.1\n0.9\n0.05\n2', output: '7.47' },
                { input: 'spot_price = 50, strike_price = 55, up_factor = 1.2, down_factor = 0.8, risk_free_rate = 0.02, periods = 1', judgeInput: '50\n55\n1.2\n0.8\n0.02\n1', output: '2.45' },
                { input: 'spot_price = 100, strike_price = 110, up_factor = 1.15, down_factor = 0.85, risk_free_rate = 0.03, periods = 3', judgeInput: '100\n110\n1.15\n0.85\n0.03\n3', output: '6.90' },
                { input: 'spot_price = 200, strike_price = 200, up_factor = 1.05, down_factor = 0.95, risk_free_rate = 0.02, periods = 4', judgeInput: '200\n200\n1.05\n0.95\n0.02\n4', output: '10.61' },
                { input: 'spot_price = 75, strike_price = 80, up_factor = 1.2, down_factor = 0.9, risk_free_rate = 0.04, periods = 2', judgeInput: '75\n80\n1.2\n0.9\n0.04\n2', output: '5.90' },
                { input: 'spot_price = 150, strike_price = 140, up_factor = 1.1, down_factor = 0.95, risk_free_rate = 0.01, periods = 1', judgeInput: '150\n140\n1.1\n0.95\n0.01\n1', output: '13.71' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} spot_price
 * @param {number} strike_price
 * @param {number} up_factor
 * @param {number} down_factor
 * @param {number} risk_free_rate
 * @param {number} periods
 * @return {number}
 */
function priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods) {
    // Your code here
}`,
                python: `def price_option(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods):
    """
    :type spot_price: float
    :type strike_price: float
    :type up_factor: float
    :type down_factor: float
    :type risk_free_rate: float
    :type periods: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <cmath>
using namespace std;

double priceOption(double spot_price, double strike_price, double up_factor, double down_factor, double risk_free_rate, int periods) {
    // Your code here
}`,
                java: `public class Solution {
    public double priceOption(double spot_price, double strike_price, double up_factor, double down_factor, double risk_free_rate, int periods) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const spot_price = parseFloat(lines[0]);\n    const strike_price = parseFloat(lines[1]);\n    const up_factor = parseFloat(lines[2]);\n    const down_factor = parseFloat(lines[3]);\n    const risk_free_rate = parseFloat(lines[4]);\n    const periods = parseInt(lines[5]);\n    console.log(priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nspot_price = float(lines[0])\nstrike_price = float(lines[1])\nup_factor = float(lines[2])\ndown_factor = float(lines[3])\nrisk_free_rate = float(lines[4])\nperiods = int(lines[5])\nprint(f'{price_option(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods):.2f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\ndouble priceOption(double spot_price, double strike_price, double up_factor, double down_factor, double risk_free_rate, int periods);\nint main() {\n    double spot_price, strike_price, up_factor, down_factor, risk_free_rate;\n    int periods;\n    cin >> spot_price >> strike_price >> up_factor >> down_factor >> risk_free_rate >> periods;\n    cout << fixed << setprecision(2) << priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double spot_price = sc.nextDouble();\n        double strike_price = sc.nextDouble();\n        double up_factor = sc.nextDouble();\n        double down_factor = sc.nextDouble();\n        double risk_free_rate = sc.nextDouble();\n        int periods = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods));\n    }\n}`
            }
        }, {
            id: 'orderbook-reconstruction',
            title: 'Order Book State Reconstruction',
            difficulty: 'Hard',
            description: `Reconstruct order book state from a stream of order updates (add, cancel, execute). 

You are given:
- updates: List of [type, order_id, side, price, quantity] where type is 0=add, 1=cancel, 2=execute, side is 0=bid, 1=ask

Goal: Return the total volume at the best bid and best ask after processing all updates. Format: [best_bid_volume, best_ask_volume]. If a side has no orders, use 0 for that side.

Input Format:
- updates: List of lists [type, order_id, side, price, quantity]

Output Format:
- Return list [best_bid_volume, best_ask_volume]

Constraints:
- 1 <= updates.length <= 10000
- 0 <= type <= 2
- 1 <= order_id <= 1000000
- 0 <= side <= 1
- 1 <= price <= 100000
- 1 <= quantity <= 100000`,
            examples: [
                { input: 'updates = [[0,1,0,100,50],[0,2,1,101,30],[2,1,0,100,20]]', output: '[30,30]' },
                { input: 'updates = [[0,1,0,100,50],[1,1,0,100,50]]', output: '[0,0]' }
            ],
            testCases: [
                { input: 'updates = [[0,1,0,100,50],[0,2,1,101,30],[2,1,0,100,20]]', judgeInput: '3\n0 1 0 100 50\n0 2 1 101 30\n2 1 0 100 20', output: '[30,30]' },
                { input: 'updates = [[0,1,0,100,50],[1,1,0,100,50]]', judgeInput: '2\n0 1 0 100 50\n1 1 0 100 50', output: '[0,0]' },
                { input: 'updates = [[0,1,0,100,100],[0,2,0,100,50],[0,3,1,101,75]]', judgeInput: '3\n0 1 0 100 100\n0 2 0 100 50\n0 3 1 101 75', output: '[150,75]' },
                { input: 'updates = [[0,1,0,100,100],[0,2,0,99,50],[0,3,1,101,30]]', judgeInput: '3\n0 1 0 100 100\n0 2 0 99 50\n0 3 1 101 30', output: '[100,30]' },
                { input: 'updates = [[0,1,0,100,100],[2,1,0,100,100]]', judgeInput: '2\n0 1 0 100 100\n2 1 0 100 100', output: '[0,0]' },
                { input: 'updates = [[0,1,1,101,50],[0,2,1,102,30],[0,3,0,100,40]]', judgeInput: '3\n0 1 1 101 50\n0 2 1 102 30\n0 3 0 100 40', output: '[40,50]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} updates
 * @return {number[]}
 */
function reconstructOrderBook(updates) {
    // Your code here
}`,
                python: `def reconstruct_order_book(updates):
    """
    :type updates: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> reconstructOrderBook(vector<vector<int>>& updates) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] reconstructOrderBook(int[][] updates) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const updates = [];\n    for(let i=1; i<=n; i++) updates.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(reconstructOrderBook(updates)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nupdates = []\nfor i in range(1, n+1):\n    updates.append(list(map(int, lines[i].split())))\nprint(json.dumps(reconstruct_order_book(updates)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> reconstructOrderBook(vector<vector<int>>& updates);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> updates(n, vector<int>(5));\n    for(int i=0; i<n; ++i) cin >> updates[i][0] >> updates[i][1] >> updates[i][2] >> updates[i][3] >> updates[i][4];\n    vector<int> res = reconstructOrderBook(updates);\n    cout << "[" << res[0] << "," << res[1] << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] updates = new int[n][5];\n        for(int i=0; i<n; i++) {\n            updates[i][0] = sc.nextInt();\n            updates[i][1] = sc.nextInt();\n            updates[i][2] = sc.nextInt();\n            updates[i][3] = sc.nextInt();\n            updates[i][4] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.reconstructOrderBook(updates);\n        System.out.println("[" + res[0] + "," + res[1] + "]");\n    }\n}`
            }
        }]
    }]
};
