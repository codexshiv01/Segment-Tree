export const amexData = {
    id: 'amex',
    name: 'American Express',
    logo: 'https://logo.clearbit.com/americanexpress.com',
    description: 'Practice real American Express Online Assessment questions.',
    assessments: [{
        id: 'amex-oa-1',
        title: 'American Express OA-1',
        duration: 90,
        problems: [{
            id: 'rewards-optimizer',
            title: 'Credit Card Rewards Optimizer',
            difficulty: 'Medium',
            description: `Calculate maximum rewards points a customer can earn across multiple credit cards for given spending.

You are given:
- cards: List of [card_id, category, points_per_dollar]
- purchases: List of [purchase_id, category, amount]

Goal: For each purchase, assign it to the best card for that category (highest points_per_dollar). Return total points earned (all purchases * their best rate).

Input Format:
- cards: List of lists [id, category, rate]
- purchases: List of lists [id, category, amount]

Output Format:
- Return an integer (total points)

Constraints:
- 1 <= cards.length <= 50
- 1 <= purchases.length <= 1000
- 1 <= category <= 10
- 1 <= points_per_dollar <= 10
- 1 <= amount <= 10000`,
            examples: [
                { input: 'cards = [[1,1,3],[2,2,2]], purchases = [[1,1,100],[2,2,50]]', output: '400' },
                { input: 'cards = [[1,1,5]], purchases = [[1,1,100]]', output: '500' }
            ],
            testCases: [
                { input: 'cards = [[1,1,3],[2,2,2]], purchases = [[1,1,100],[2,2,50]]', judgeInput: '2\n1 1 3\n2 2 2\n2\n1 1 100\n2 2 50', output: '400' },
                { input: 'cards = [[1,1,5]], purchases = [[1,1,100]]', judgeInput: '1\n1 1 5\n1\n1 1 100', output: '500' },
                { input: 'cards = [[1,1,4],[2,1,3],[3,2,2]], purchases = [[1,1,200],[2,2,150]]', judgeInput: '3\n1 1 4\n2 1 3\n3 2 2\n2\n1 1 200\n2 2 150', output: '1100' },
                { input: 'cards = [[1,1,6],[2,2,4],[3,3,3]], purchases = [[1,1,50],[2,2,75],[3,3,100]]', judgeInput: '3\n1 1 6\n2 2 4\n3 3 3\n3\n1 1 50\n2 2 75\n3 3 100', output: '900' },
                { input: 'cards = [[1,5,10]], purchases = [[1,5,1000]]', judgeInput: '1\n1 5 10\n1\n1 5 1000', output: '10000' },
                { input: 'cards = [[1,1,2],[2,2,3],[3,1,5]], purchases = [[1,1,100],[2,1,50]]', judgeInput: '3\n1 1 2\n2 2 3\n3 1 5\n2\n1 1 100\n2 1 50', output: '750' },
                { input: 'cards = [[1,3,8],[2,4,6]], purchases = [[1,3,80],[2,4,120],[3,3,60]]', judgeInput: '2\n1 3 8\n2 4 6\n3\n1 3 80\n2 4 120\n3 3 60', output: '1840' },
                { input: 'cards = [[1,1,1],[2,1,2],[3,1,3]], purchases = [[1,1,500]]', judgeInput: '3\n1 1 1\n2 1 2\n3 1 3\n1\n1 1 500', output: '1500' },
                { input: 'cards = [[1,7,7],[2,8,4]], purchases = [[1,7,200],[2,8,300],[3,7,100]]', judgeInput: '2\n1 7 7\n2 8 4\n3\n1 7 200\n2 8 300\n3 7 100', output: '3300' },
                { input: 'cards = [[1,2,5],[2,3,6],[3,2,4]], purchases = [[1,2,150],[2,3,200]]', judgeInput: '3\n1 2 5\n2 3 6\n3 2 4\n2\n1 2 150\n2 3 200', output: '1950' },
                { input: 'cards = [[1,1,9],[2,2,8],[3,3,7]], purchases = [[1,1,100],[2,2,100],[3,3,100]]', judgeInput: '3\n1 1 9\n2 2 8\n3 3 7\n3\n1 1 100\n2 2 100\n3 3 100', output: '2400' },
                { input: 'cards = [[1,6,3],[2,6,5]], purchases = [[1,6,400],[2,6,300]]', judgeInput: '2\n1 6 3\n2 6 5\n2\n1 6 400\n2 6 300', output: '3500' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} cards
 * @param {number[][]} purchases
 * @return {number}
 */
function maxRewards(cards, purchases) {
    // Your code here
}`,
                python: `def max_rewards(cards, purchases):
    """
    :type cards: List[List[int]]
    :type purchases: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxRewards(vector<vector<int>>& cards, vector<vector<int>>& purchases) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxRewards(int[][] cards, int[][] purchases) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const cards = [];\n    for(let i=1; i<=n; i++) cards.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const purchases = [];\n    for(let i=n+2; i<n+2+m; i++) purchases.push(lines[i].split(' ').map(Number));\n    console.log(maxRewards(cards, purchases));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncards = []\nfor i in range(1, n+1):\n    cards.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\npurchases = []\nfor i in range(n+2, n+2+m):\n    purchases.append(list(map(int, lines[i].split())))\nprint(max_rewards(cards, purchases))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxRewards(vector<vector<int>>& cards, vector<vector<int>>& purchases);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> cards(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> cards[i][0] >> cards[i][1] >> cards[i][2];\n    cin >> m;\n    vector<vector<int>> purchases(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> purchases[i][0] >> purchases[i][1] >> purchases[i][2];\n    cout << maxRewards(cards, purchases) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cards = new int[n][3];\n        for(int i=0; i<n; i++) {\n            cards[i][0] = sc.nextInt();\n            cards[i][1] = sc.nextInt();\n            cards[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] purchases = new int[m][3];\n        for(int i=0; i<m; i++) {\n            purchases[i][0] = sc.nextInt();\n            purchases[i][1] = sc.nextInt();\n            purchases[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.maxRewards(cards, purchases));\n    }\n}`
            }
        }, {
            id: 'fraud-score',
            title: 'Transaction Fraud Risk Scoring',
            difficulty: 'Hard',
            description: `Calculate fraud risk score for transactions based on multiple factors.

You are given:
- transaction: [amount, merchant_category, location_distance, time_since_last, is_new_merchant]
- weights: [w_amount, w_category, w_distance, w_time, w_new_merchant]

Goal: Calculate risk_score = (amount/1000 * w_amount) + (merchant_category * w_category) + (location_distance/100 * w_distance) + ((60-time_since_last)/60 * w_time) + (is_new_merchant * w_new_merchant). Round to 2 decimals.

Input Format:
- transaction: List [amount, category, distance, time, is_new] where is_new is 0 or 1
- weights: List of 5 floats

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= amount <= 100000
- 1 <= merchant_category <= 10
- 0 <= location_distance <= 10000
- 0 <= time_since_last <= 60
- is_new_merchant in {0, 1}
- 0.0 <= weight <= 10.0`,
            examples: [
                { input: 'transaction = [5000,8,500,10,1], weights = [2.0,1.5,1.0,2.5,3.0]', output: '31.08' },
                { input: 'transaction = [1000,3,100,30,0], weights = [1.0,1.0,1.0,1.0,1.0]', output: '6.50' }
            ],
            testCases: [
                { input: 'transaction = [5000,8,500,10,1], weights = [2.0,1.5,1.0,2.5,3.0]', judgeInput: '5000 8 500 10 1\n2.0 1.5 1.0 2.5 3.0', output: '31.08' },
                { input: 'transaction = [1000,3,100,30,0], weights = [1.0,1.0,1.0,1.0,1.0]', output: '6.50', judgeInput: '1000 3 100 30 0\n1.0 1.0 1.0 1.0 1.0' },
                { input: 'transaction = [10000,10,1000,5,1], weights = [3.0,2.0,1.5,3.5,4.0]', judgeInput: '10000 10 1000 5 1\n3.0 2.0 1.5 3.5 4.0', output: '87.71' },
                { input: 'transaction = [2000,5,200,20,0], weights = [1.5,1.2,0.8,2.0,2.5]', judgeInput: '2000 5 200 20 0\n1.5 1.2 0.8 2.0 2.5', output: '12.53' },
                { input: 'transaction = [50000,9,5000,0,1], weights = [2.5,1.8,2.0,4.0,5.0]', judgeInput: '50000 9 5000 0 1\n2.5 1.8 2.0 4.0 5.0', output: '345.20' },
                { input: 'transaction = [3000,4,300,15,1], weights = [1.8,1.3,0.9,2.2,3.2]', judgeInput: '3000 4 300 15 1\n1.8 1.3 0.9 2.2 3.2', output: '29.60' },
                { input: 'transaction = [500,2,50,45,0], weights = [0.5,0.8,0.3,1.5,2.0]', judgeInput: '500 2 50 45 0\n0.5 0.8 0.3 1.5 2.0', output: '2.38' },
                { input: 'transaction = [7500,7,750,8,1], weights = [2.2,1.6,1.2,2.8,3.5]', judgeInput: '7500 7 750 8 1\n2.2 1.6 1.2 2.8 3.5', output: '48.53' },
                { input: 'transaction = [15000,6,1500,25,0], weights = [3.5,2.5,1.8,3.0,4.0]', judgeInput: '15000 6 1500 25 0\n3.5 2.5 1.8 3.0 4.0', output: '98.50' },
                { input: 'transaction = [4000,1,400,35,1], weights = [1.2,0.9,0.7,1.5,2.3]', judgeInput: '4000 1 400 35 1\n1.2 0.9 0.7 1.5 2.3', output: '11.01' },
                { input: 'transaction = [20000,10,2000,3,1], weights = [4.0,3.0,2.5,5.0,6.0]', judgeInput: '20000 10 2000 3 1\n4.0 3.0 2.5 5.0 6.0', output: '191.75' },
                { input: 'transaction = [1500,5,150,40,0], weights = [1.1,1.0,0.6,1.8,2.1]', judgeInput: '1500 5 150 40 0\n1.1 1.0 0.6 1.8 2.1', output: '8.45' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} transaction
 * @param {number[]} weights
 * @return {number}
 */
function fraudScore(transaction, weights) {
    // Your code here
}`,
                python: `def fraud_score(transaction, weights):
    """
    :type transaction: List[int]
    :type weights: List[float]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double fraudScore(vector<int>& transaction, vector<double>& weights) {
    // Your code here
}`,
                java: `public class Solution {
    public double fraudScore(int[] transaction, double[] weights) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const transaction = lines[0].split(' ').map(Number);\n    const weights = lines[1].split(' ').map(Number);\n    console.log(fraudScore(transaction, weights).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ntransaction = list(map(int, lines[0].split()))\nweights = list(map(float, lines[1].split()))\nprint(f'{fraud_score(transaction, weights):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble fraudScore(vector<int>& transaction, vector<double>& weights);\nint main() {\n    vector<int> transaction(5);\n    vector<double> weights(5);\n    for(int i=0; i<5; ++i) cin >> transaction[i];\n    for(int i=0; i<5; ++i) cin >> weights[i];\n    cout << fixed << setprecision(2) << fraudScore(transaction, weights) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] transaction = new int[5];\n        for(int i=0; i<5; i++) transaction[i] = sc.nextInt();\n        double[] weights = new double[5];\n        for(int i=0; i<5; i++) weights[i] = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.fraudScore(transaction, weights));\n    }\n}`
            }
        }]
    }]
};
