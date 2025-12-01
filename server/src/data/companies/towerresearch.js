export const towerresearchData = {
    id: 'towerresearch',
    name: 'Tower Research',
    logo: 'https://logo.clearbit.com/tower-research.com',
    description: 'Practice real Tower Research Capital Online Assessment questions.',
    assessments: [{
        id: 'towerresearch-oa-1',
        title: 'Tower Research OA-1',
        duration: 90,
        problems: [{
            id: 'market-maker-spread',
            title: 'Dynamic Market Maker Spread Optimization',
            difficulty: 'Hard',
            description: `As a market maker, optimize bid-ask spread based on inventory risk and market volatility. Calculate optimal spread that maximizes expected profit while managing inventory risk.

You are given:
- current_inventory: Current position (positive = long, negative = short)
- max_inventory: Maximum allowed absolute inventory
- volatility: Current market volatility (standard deviation)
- risk_aversion: Risk aversion parameter (higher = more conservative)

Goal: Calculate optimal half-spread using formula: half_spread = volatility * sqrt(risk_aversion) + abs(current_inventory) / max_inventory * volatility. Return result rounded to 4 decimal places.

Input Format:
- current_inventory: Integer
- max_inventory: Integer
- volatility: Float
- risk_aversion: Float

Output Format:
- Return a float rounded to 4 decimal places

Constraints:
- -10000 <= current_inventory <= 10000
- 1 <= max_inventory <= 10000
- 0.001 <= volatility <=  1.0
- 0.1 <= risk_aversion <= 10.0`,
            examples: [
                { input: 'current_inventory = 100, max_inventory = 1000, volatility = 0.01, risk_aversion = 1.0', output: '0.0110' },
                { input: 'current_inventory = 0, max_inventory = 1000, volatility = 0.02, risk_aversion = 2.0', output: '0.0283' }
            ],
            testCases: [
                { input: 'current_inventory = 100, max_inventory = 1000, volatility = 0.01, risk_aversion = 1.0', judgeInput: '100\n1000\n0.01\n1.0', output: '0.0110' },
                { input: 'current_inventory = 0, max_inventory = 1000, volatility = 0.02, risk_aversion = 2.0', judgeInput: '0\n1000\n0.02\n2.0', output: '0.0283' },
                { input: 'current_inventory = -500, max_inventory = 1000, volatility = 0.015, risk_aversion = 1.5', output: '0.0259', judgeInput: '-500\n1000\n0.015\n1.5' },
                { input: 'current_inventory = 1000, max_inventory = 1000, volatility = 0.01, risk_aversion = 1.0', judgeInput: '1000\n1000\n0.01\n1.0', output: '0.0200' },
                { input: 'current_inventory = 0, max_inventory = 5000, volatility = 0.005, risk_aversion = 0.5', judgeInput: '0\n5000\n0.005\n0.5', output: '0.0035' },
                { input: 'current_inventory = 250, max_inventory = 500, volatility = 0.03, risk_aversion = 4.0', judgeInput: '250\n500\n0.03\n4.0', output: '0.0750' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} current_inventory
 * @param {number} max_inventory
 * @param {number} volatility
 * @param {number} risk_aversion
 * @return {number}
 */
function optimalSpread(current_inventory, max_inventory, volatility, risk_aversion) {
    // Your code here
}`,
                python: `def optimal_spread(current_inventory, max_inventory, volatility, risk_aversion):
    """
    :type current_inventory: int
    :type max_inventory: int
    :type volatility: float
    :type risk_aversion: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <cmath>
using namespace std;

double optimalSpread(int current_inventory, int max_inventory, double volatility, double risk_aversion) {
    // Your code here
}`,
                java: `public class Solution {
    public double optimalSpread(int current_inventory, int max_inventory, double volatility, double risk_aversion) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const current_inventory = parseInt(lines[0]);\n    const max_inventory = parseInt(lines[1]);\n    const volatility = parseFloat(lines[2]);\n    const risk_aversion = parseFloat(lines[3]);\n    console.log(optimalSpread(current_inventory, max_inventory, volatility, risk_aversion).toFixed(4));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ncurrent_inventory = int(lines[0])\nmax_inventory = int(lines[1])\nvolatility = float(lines[2])\nrisk_aversion = float(lines[3])\nprint(f'{optimal_spread(current_inventory, max_inventory, volatility, risk_aversion):.4f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\ndouble optimalSpread(int current_inventory, int max_inventory, double volatility, double risk_aversion);\nint main() {\n    int current_inventory, max_inventory;\n    double volatility, risk_aversion;\n    cin >> current_inventory >> max_inventory >> volatility >> risk_aversion;\n    cout << fixed << setprecision(4) << optimalSpread(current_inventory, max_inventory, volatility, risk_aversion) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int current_inventory = sc.nextInt();\n        int max_inventory = sc.nextInt();\n        double volatility = sc.nextDouble();\n        double risk_aversion = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.4f\\n", sol.optimalSpread(current_inventory, max_inventory, volatility, risk_aversion));\n    }\n}`
            }
        }, {
            id: 'order-routing-latency',
            title: 'Smart Order Router with Latency Optimization',
            difficulty: 'Hard',
            description: `Route orders to venues to minimize total execution cost including latency costs. Each venue has different fees and latency.

You are given:
- venues: List of [venue_id, fee_bps, latency_ms]
- volume: Total volume to trade
- urgency: Urgency score (higher = prefer lower latency)

Goal: Split the order across venues to minimize total_cost = sum(volume_i * fee_i * base_price / 10000) + sum(volume_i * latency_i * urgency * base_price / 1000000) where base_price = 1000. Return minimum total cost rounded to 2 decimal places.

Input Format:
- venues: List of lists [id, fee_bps, latency_ms]
- volume: Integer
- urgency: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= venues.length <= 20
- 1 <= fee_bps <= 100
- 1 <= latency_ms <= 1000
- 1 <= volume <= 1000000
- 1 <= urgency <= 100`,
            examples: [
                { input: 'venues = [[1,5,10],[2,3,50]], volume = 1000, urgency = 10', output: '3.50' },
                { input: 'venues = [[1,10,5]], volume = 500, urgency = 1', output: '5.00' }
            ],
            testCases: [
                { input: 'venues = [[1,5,10], [2,3,50]], volume = 1000, urgency = 10', judgeInput: '2\n1 5 10\n2 3 50\n1000\n10', output: '3.50' },
                { input: 'venues = [[1,10,5]], volume = 500, urgency = 1', judgeInput: '1\n1 10 5\n500\n1', output: '5.00' },
                { input: 'venues = [[1,2,100],[2,5,10],[3,3,50]], volume = 2000, urgency = 5', judgeInput: '3\n1 2 100\n2 5 10\n3 3 50\n2000\n5', output: '9.00' },
                { input: 'venues = [[1,1,1000],[2,10,10]], volume = 1000, urgency = 100', judgeInput: '2\n1 1 1000\n2 10 10\n1000\n100', output: '11.00' },
                { input: 'venues = [[1,5,20],[2,5,20]], volume = 1000, urgency = 5', judgeInput: '2\n1 5 20\n2 5 20\n1000\n5', output: '5.10' },
                { input: 'venues = [[1,3,30]], volume = 10000, urgency = 20', judgeInput: '1\n1 3 30\n10000\n20', output: '36.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} venues
 * @param {number} volume
 * @param {number} urgency
 * @return {number}
 */
function minRoutingCost(venues, volume, urgency) {
    // Your code here
}`,
                python: `def min_routing_cost(venues, volume, urgency):
    """
    :type venues: List[List[int]]
    :type volume: int
    :type urgency: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double minRoutingCost(vector<vector<int>>& venues, int volume, int urgency) {
    // Your code here
}`,
                java: `public class Solution {
    public double minRoutingCost(int[][] venues, int volume, int urgency) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const venues = [];\n    for(let i=1; i<=n; i++) venues.push(lines[i].split(' ').map(Number));\n    const volume = parseInt(lines[n+1]);\n    const urgency = parseInt(lines[n+2]);\n    console.log(minRoutingCost(venues, volume, urgency).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nvenues = []\nfor i in range(1, n+1):\n    venues.append(list(map(int, lines[i].split())))\nvolume = int(lines[n+1])\nurgency = int(lines[n+2])\nprint(f'{min_routing_cost(venues, volume, urgency):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble minRoutingCost(vector<vector<int>>& venues, int volume, int urgency);\nint main() {\n    int n, volume, urgency;\n    cin >> n;\n    vector<vector<int>> venues(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> venues[i][0] >> venues[i][1] >> venues[i][2];\n    cin >> volume >> urgency;\n    cout << fixed << setprecision(2) << minRoutingCost(venues, volume, urgency) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] venues = new int[n][3];\n        for(int i=0; i<n; i++) {\n            venues[i][0] = sc.nextInt();\n            venues[i][1] = sc.nextInt();\n            venues[i][2] = sc.nextInt();\n        }\n        int volume = sc.nextInt();\n        int urgency = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.minRoutingCost(venues, volume, urgency));\n    }\n}`
            }
        }]
    }]
};
