export const shopifyData = {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://logo.clearbit.com/shopify.com',
    description: 'Practice real Shopify Online Assessment questions.',
    assessments: [{
        id: 'shopify-oa-1',
        title: 'Shopify OA-1',
        duration: 90,
        problems: [{
            id: 'inventory-sync',
            title: 'Multi-Channel Inventory Sync',
            difficulty: 'Hard',
            description: `Synchronize inventory across multiple sales channels with conflict resolution.

You are given:
- updates: List of [channel_id, product_id, quantity, timestamp]

Goal: Process updates in timestamp order. For same product+timestamp from different channels, use channel with lower ID. Return final inventory as list of [product_id, total_quantity] sorted by product_id.

Input Format:
- updates: List of lists [channel, product, qty, time]

Output Format:
- Return list of lists [[product_id, quantity]] sorted by product_id

Constraints:
- 1 <= updates.length <= 1000
- 1 <= channel_id, product_id <= 100
- 0 <= quantity <= 10000
- 1 <= timestamp <= 1000000`,
            examples: [
                { input: 'updates = [[1,10,50,100],[2,10,60,100],[1,20,30,200]]', output: '[[10,50],[20,30]]' },
                { input: 'updates = [[1,5,100,50]]', output: '[[5,100]]' }
            ],
            testCases: [
                { input: 'updates = [[1,10,50,100],[2,10,60,100],[1,20,30,200]]', judgeInput: '3\n1 10 50 100\n2 10 60 100\n1 20 30 200', output: '[[10,50],[20,30]]' },
                { input: 'updates = [[1,5,100,50]]', judgeInput: '1\n1 5 100 50', output: '[[5,100]]' },
                { input: 'updates = [[1,1,10,1],[1,1,20,2]]', judgeInput: '2\n1 1 10 1\n1 1 20 2', output: '[[1,20]]' },
                { input: 'updates = [[1,15,100,100],[2,15,150,100],[3,15,200,100]]', judgeInput: '3\n1 15 100 100\n2 15 150 100\n3 15 200 100', output: '[[15,100]]' },
                { input: 'updates = [[1,10,50,1],[2,20,60,2],[1,30,70,3]]', judgeInput: '3\n1 10 50 1\n2 20 60 2\n1 30 70 3', output: '[[10,50],[20,60],[30,70]]' },
                { input: 'updates = [[2,5,100,10],[1,5,200,10]]', judgeInput: '2\n2 5 100 10\n1 5 200 10', output: '[[5,200]]' },
                { input: 'updates = [[1,1,10,1],[2,2,20,2],[3,3,30,3]]', judgeInput: '3\n1 1 10 1\n2 2 20 2\n3 3 30 3', output: '[[1,10],[2,20],[3,30]]' },
                { input: 'updates = [[1,8,80,5],[1,8,90,10]]', judgeInput: '2\n1 8 80 5\n1 8 90 10', output: '[[8,90]]' },
                { input: 'updates = [[3,12,120,20],[1,12,130,20],[2,12,140,20]]', judgeInput: '3\n3 12 120 20\n1 12 130 20\n2 12 140 20', output: '[[12,130]]' },
                { input: 'updates = [[1,7,70,15],[2,14,140,30],[1,21,210,45]]', judgeInput: '3\n1 7 70 15\n2 14 140 30\n1 21 210 45', output: '[[7,70],[14,140],[21,210]]' },
                { input: 'updates = [[2,3,30,5],[1,3,35,10],[2,3,40,10]]', judgeInput: '3\n2 3 30 5\n1 3 35 10\n2 3 40 10', output: '[[3,35]]' },
                { input: 'updates = [[1,25,250,100],[2,26,260,100],[3,27,270,100]]', judgeInput: '3\n1 25 250 100\n2 26 260 100\n3 27 270 100', output: '[[25,250],[26,260],[27,270]]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} updates
 * @return {number[][]}
 */
function finalInventory(updates) {
    // Your code here
}`,
                python: `def final_inventory(updates):
    """
    :type updates: List[List[int]]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<int>> finalInventory(vector<vector<int>>& updates) {
    // Your code here
}`,
                java: `public class Solution {
    public int[][] finalInventory(int[][] updates) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const updates = [];\n    for(let i=1; i<=n; i++) updates.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(finalInventory(updates)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nupdates = []\nfor i in range(1, n+1):\n    updates.append(list(map(int, lines[i].split())))\nprint(json.dumps(final_inventory(updates)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<vector<int>> finalInventory(vector<vector<int>>& updates);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> updates(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> updates[i][0] >> updates[i][1] >> updates[i][2] >> updates[i][3];\n    vector<vector<int>> res = finalInventory(updates);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << res[i][0] << "," << res[i][1] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] updates = new int[n][4];\n        for(int i=0; i<n; i++) {\n            updates[i][0] = sc.nextInt();\n            updates[i][1] = sc.nextInt();\n            updates[i][2] = sc.nextInt();\n            updates[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[][] res = sol.finalInventory(updates);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + res[i][0] + "," + res[i][1] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'shipping-optimizer',
            title: 'Smart Shipping Rate Calculator',
            difficulty: 'Medium',
            description: `Calculate shipping cost based on weight, distance, and merchant tier.

You are given:
- weight_kg: Package weight
- distance_km: Shipping distance
- merchant_tier: Tier level (1=Premium, 2=Standard, 3=Basic)

Goal: Base rate = (weight_kg * 2) + (distance_km * 0.5). Apply discount: Tier1=20%, Tier2=10%, Tier3=0%. Return final cost rounded to 2 decimals.

Input Format:
- weight_kg: Float
- distance_km: Float
- merchant_tier: Integer (1-3)

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 0.1 <= weight_kg <= 100.0
- 1 <= distance_km <= 10000
- merchant_tier in {1, 2, 3}`,
            examples: [
                { input: 'weight_kg = 5.0, distance_km = 100, merchant_tier = 1', output: '48.00' },
                { input: 'weight_kg = 10.0, distance_km = 50, merchant_tier = 3', output: '45.00' }
            ],
            testCases: [
                { input: 'weight_kg = 5.0, distance_km = 100, merchant_tier = 1', judgeInput: '5.0\n100\n1', output: '48.00' },
                { input: 'weight_kg = 10.0, distance_km = 50, merchant_tier = 3', judgeInput: '10.0\n50\n3', output: '45.00' },
                { input: 'weight_kg = 2.5, distance_km = 200, merchant_tier = 2', judgeInput: '2.5\n200\n2', output: '94.50' },
                { input: 'weight_kg = 15.0, distance_km = 150, merchant_tier = 1', judgeInput: '15.0\n150\n1', output: '84.00' },
                { input: 'weight_kg = 8.0, distance_km = 300, merchant_tier = 2', judgeInput: '8.0\n300\n2', output: '149.40' },
                { input: 'weight_kg = 1.0, distance_km = 50, merchant_tier = 3', judgeInput: '1.0\n50\n3', output: '27.00' },
                { input: 'weight_kg = 20.0, distance_km = 500, merchant_tier = 1', judgeInput: '20.0\n500\n1', output: '232.00' },
                { input: 'weight_kg = 12.0, distance_km = 250, merchant_tier = 2', judgeInput: '12.0\n250\n2', output: '134.10' },
                { input: 'weight_kg = 7.5, distance_km = 180, merchant_tier = 3', judgeInput: '7.5\n180\n3', output: '105.00' },
                { input: 'weight_kg = 25.0, distance_km = 400, merchant_tier = 1', judgeInput: '25.0\n400\n1', output: '200.00' },
                { input: 'weight_kg = 3.0, distance_km = 120, merchant_tier = 2', judgeInput: '3.0\n120\n2', output: '59.40' },
                { input: 'weight_kg = 50.0, distance_km = 1000, merchant_tier = 1', judgeInput: '50.0\n1000\n1', output: '480.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} weight_kg
 * @param {number} distance_km
 * @param {number} merchant_tier
 * @return {number}
 */
function shippingCost(weight_kg, distance_km, merchant_tier) {
    // Your code here
}`,
                python: `def shipping_cost(weight_kg, distance_km, merchant_tier):
    """
    :type weight_kg: float
    :type distance_km: float
    :type merchant_tier: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `double shippingCost(double weight_kg, double distance_km, int merchant_tier) {
    // Your code here
}`,
                java: `public class Solution {
    public double shippingCost(double weight_kg, double distance_km, int merchant_tier) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const weight_kg = parseFloat(lines[0]);\n    const distance_km = parseFloat(lines[1]);\n    const merchant_tier = parseInt(lines[2]);\n    console.log(shippingCost(weight_kg, distance_km, merchant_tier).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nweight_kg = float(lines[0])\ndistance_km = float(lines[1])\nmerchant_tier = int(lines[2])\nprint(f'{shipping_cost(weight_kg, distance_km, merchant_tier):.2f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\ndouble shippingCost(double weight_kg, double distance_km, int merchant_tier);\nint main() {\n    double weight_kg, distance_km;\n    int merchant_tier;\n    cin >> weight_kg >> distance_km >> merchant_tier;\n    cout << fixed << setprecision(2) << shippingCost(weight_kg, distance_km, merchant_tier) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double weight_kg = sc.nextDouble();\n        double distance_km = sc.nextDouble();\n        int merchant_tier = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.shippingCost(weight_kg, distance_km, merchant_tier));\n    }\n}`
            }
        }]
    }]
};
