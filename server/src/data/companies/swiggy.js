export const swiggyData = {
    id: 'swiggy',
    name: 'Swiggy',
    logo: 'https://logo.clearbit.com/swiggy.com',
    description: 'Practice real Swiggy Online Assessment questions.',
    assessments: [{
        id: 'swiggy-oa-1',
        title: 'Swiggy OA-1',
        duration: 90,
        problems: [{
            id: 'delivery-route-opt',
            title: 'Multi-Stop Delivery Route Optimizer',
            difficulty: 'Hard',
            description: `### Problem Description
Swiggy's delivery partners often need to pick up orders from multiple restaurants and deliver them to customers within strict time windows.

You are given:
- \`start\`: The starting location of the delivery partner (0-1000).
- \`orders\`: A list of orders, where each order is \`[restaurant_loc, customer_loc, deadline]\`.
  - \`restaurant_loc\`: Location of the restaurant.
  - \`customer_loc\`: Location of the customer.
  - \`deadline\`: The maximum time units allowed to complete this delivery.

**Rules:**
1. The partner starts at \`start\`.
2. To complete an order, they must travel: \`start -> restaurant -> customer\`.
3. The time taken is the absolute distance traveled.
4. An order is successful if the total time taken to reach the customer is <= \`deadline\`.
5. The partner handles one order at a time (no batching in this simplified version). After delivering, they are at the customer's location and can proceed to the next order's restaurant.

**Goal:**
Find the **maximum number of orders** the partner can deliver successfully. You can choose any order of deliveries.

### Input Format
- \`start\`: Integer
- \`orders\`: List of lists \`[restaurant_loc, customer_loc, deadline]\`

### Output Format
- Return an integer representing the maximum number of successful deliveries.

### Constraints
- \`1 <= orders.length <= 100\`
- Locations are between 0 and 1000.
- \`1 <= deadline <= 500\``,
            examples: [
                { input: 'start = 0, orders = [[5,10,20],[3,8,15]]', output: '2' },
                { input: 'start = 0, orders = [[5,10,50],[15,20,60],[25,30,70]]', output: '3' }
            ],
            testCases: [
                { input: 'start = 0, orders = [[5,10,20],[3,8,15]]', judgeInput: '0\n2\n5 10 20\n3 8 15', output: '2' },
                { input: 'start = 0, orders = [[10,20,5]]', judgeInput: '0\n1\n10 20 5', output: '0' },
                { input: 'start = 5, orders = [[10,15,30],[20,25,25]]', judgeInput: '5\n2\n10 15 30\n20 25 25', output: '1' },
                { input: 'start = 0, orders = [[5,10,50],[15,20,60],[25,30,70]]', judgeInput: '0\n3\n5 10 50\n15 20 60\n25 30 70', output: '3' },
                { input: 'start = 10, orders = [[5,15,100]]', judgeInput: '10\n1\n5 15 100', output: '1' },
                { input: 'start = 0, orders = [[100,200,50],[10,20,100]]', judgeInput: '0\n2\n100 200 50\n10 20 100', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} start
 * @param {number[][]} orders
 * @return {number}
 */
function maxDeliveries(start, orders) {
    // Your code here
}`,
                python: `def max_deliveries(start, orders):
    """
    :type start: int
    :type orders: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxDeliveries(int start, vector<vector<int>>& orders) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxDeliveries(int start, int[][] orders) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const start = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const orders = [];\n    for(let i=2; i<n+2; i++) orders.push(lines[i].split(' ').map(Number));\n    console.log(maxDeliveries(start, orders));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nstart = int(lines[0])\nn = int(lines[1])\norders = []\nfor i in range(2, n+2):\n    orders.append(list(map(int, lines[i].split())))\nprint(max_deliveries(start, orders))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxDeliveries(int start, vector<vector<int>>& orders);\nint main() {\n    int start, n;\n    cin >> start >> n;\n    vector<vector<int>> orders(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2];\n    cout << maxDeliveries(start, orders) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int start = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] orders = new int[n][3];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.maxDeliveries(start, orders));\n    }\n}`
            }
        }, {
            id: 'surge-pricing',
            title: 'Dynamic Surge Pricing Calculator',
            difficulty: 'Medium',
            description: `### Problem Description
To balance supply and demand during peak hours, Swiggy implements dynamic surge pricing.

You are given data for \`n\` zones:
- \`drivers\`: An array where \`drivers[i]\` is the number of available delivery partners in zone \`i\`.
- \`orders\`: An array where \`orders[i]\` is the number of active orders in zone \`i\`.
- \`threshold\`: A float value representing the surge threshold ratio.

**Surge Condition:**
A zone \`i\` has surge pricing if the ratio of orders to drivers is greater than or equal to the threshold:
\`orders[i] / drivers[i] >= threshold\`

**Goal:**
Return a list of indices of all zones where surge pricing is active, sorted in ascending order.

### Input Format
- \`drivers\`: List of integers
- \`orders\`: List of integers
- \`threshold\`: Float

### Output Format
- Return a sorted list of integers (zone indices).

### Constraints
- \`1 <= n <= 100\`
- \`1 <= drivers[i], orders[i] <= 1000\`
- \`threshold > 0\``,
            examples: [
                { input: 'drivers = [10,5,20], orders = [50,30,25], threshold = 2.0', output: '[0,1]' },
                { input: 'drivers = [5,10,15], orders = [100,50,30], threshold = 5.0', output: '[0,1]' }
            ],
            testCases: [
                { input: 'drivers = [10,5,20], orders = [50,30,25], threshold = 2.0', judgeInput: '3\n10 5 20\n50 30 25\n2.0', output: '[0,1]' },
                { input: 'drivers = [20,20], orders = [10,10], threshold = 1.5', judgeInput: '2\n20 20\n10 10\n1.5', output: '[]' },
                { input: 'drivers = [5,10,15], orders = [100,50,30], threshold = 5.0', judgeInput: '3\n5 10 15\n100 50 30\n5.0', output: '[0,1]' },
                { input: 'drivers = [1,2,3], orders = [10,10,10], threshold = 3.0', judgeInput: '3\n1 2 3\n10 10 10\n3.0', output: '[0,1]' },
                { input: 'drivers = [50], orders = [100], threshold = 1.5', judgeInput: '1\n50\n100\n1.5', output: '[0]' },
                { input: 'drivers = [10,10,10], orders = [5,5,5], threshold = 2.0', judgeInput: '3\n10 10 10\n5 5 5\n2.0', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} drivers
 * @param {number[]} orders
 * @param {number} threshold
 * @return {number[]}
 */
function surgePricingZones(drivers, orders, threshold) {
    // Your code here
}`,
                python: `def surge_pricing_zones(drivers, orders, threshold):
    """
    :type drivers: List[int]
    :type orders: List[int]
    :type threshold: float
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> surgePricingZones(vector<int>& drivers, vector<int>& orders, double threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] surgePricingZones(int[] drivers, int[] orders, double threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const drivers = lines[1].split(' ').map(Number);\n    const orders = lines[2].split(' ').map(Number);\n    const threshold = parseFloat(lines[3]);\n    console.log(JSON.stringify(surgePricingZones(drivers, orders, threshold)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ndrivers = list(map(int, lines[1].split()))\norders = list(map(int, lines[2].split()))\nthreshold = float(lines[3])\nprint(json.dumps(surge_pricing_zones(drivers, orders, threshold)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> surgePricingZones(vector<int>& drivers, vector<int>& orders, double threshold);\nint main() {\n    int n;\n    double threshold;\n    cin >> n;\n    vector<int> drivers(n), orders(n);\n    for(int i=0; i<n; ++i) cin >> drivers[i];\n    for(int i=0; i<n; ++i) cin >> orders[i];\n    cin >> threshold;\n    vector<int> res = surgePricingZones(drivers, orders, threshold);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] drivers = new int[n];\n        int[] orders = new int[n];\n        for(int i=0; i<n; i++) drivers[i] = sc.nextInt();\n        for(int i=0; i<n; i++) orders[i] = sc.nextInt();\n        double threshold = sc.nextDouble();\n        Solution sol = new Solution();\n        int[] res = sol.surgePricingZones(drivers, orders, threshold);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
