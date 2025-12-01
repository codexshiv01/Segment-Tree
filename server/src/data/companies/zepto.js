export const zeptoData = {
    id: 'zepto',
    name: 'Zepto',
    logo: 'https://logo.clearbit.com/zeptonow.com',
    description: 'Practice real Zepto Online Assessment questions.',
    assessments: [{
        id: 'zepto-oa-1',
        title: 'Zepto OA-1',
        duration: 90,
        problems: [{
            id: 'delivery-slot',
            title: '10-Minute Delivery Slot Optimizer',
            difficulty: 'Hard',
            description: `Optimize delivery slots for 10-minute delivery promise.

You are given:
- orders: List of [order_id, prep_time_min, delivery_time_min]
- max_slot_duration: Maximum duration for a delivery slot

Goal: Group orders into slots where total time (max(prep_times) + max(delivery_times)) <= max_slot_duration. Use greedy: create new slot when current doesn't fit. Return minimum slots needed.

Input Format:
- orders: List of lists [id, prep, delivery]
- max_slot_duration: Integer

Output Format:
- Return an integer (minimum slots)

Constraints:
- 1 <= orders.length <= 1000
- 1 <= prep_time_min, delivery_time_min <= 10
- 10 <= max_slot_duration <= 20`,
            examples: [
                { input: 'orders = [[1,3,5],[2,4,6],[3,2,4]], max_slot_duration = 10', output: '1' },
                { input: 'orders = [[1,5,5],[2,5,5]], max_slot_duration = 10', output: '1' }
            ],
            testCases: [
                { input: 'orders = [[1,3,5],[2,4,6],[3,2,4]], max_slot_duration = 10', judgeInput: '3\n1 3 5\n2 4 6\n3 2 4\n10', output: '1' },
                { input: 'orders = [[1,5,5],[2,5,5]], max_slot_duration = 10', judgeInput: '2\n1 5 5\n2 5 5\n10', output: '1' },
                { input: 'orders = [[1,2,3],[2,3,4],[3,4,5]], max_slot_duration = 15', judgeInput: '3\n1 2 3\n2 3 4\n3 4 5\n15', output: '1' },
                { input: 'orders = [[1,6,6]], max_slot_duration = 12', judgeInput: '1\n1 6 6\n12', output: '1' },
                { input: 'orders = [[1,4,4],[2,5,5],[3,6,6]], max_slot_duration = 10', judgeInput: '3\n1 4 4\n2 5 5\n3 6 6\n10', output: '3' },
                { input: 'orders = [[1,1,2],[2,2,3],[3,3,4],[4,4,5]], max_slot_duration = 12', judgeInput: '4\n1 1 2\n2 2 3\n3 3 4\n4 4 5\n12', output: '2' },
                { input: 'orders = [[1,3,3],[2,3,3],[3,3,3]], max_slot_duration = 10', judgeInput: '3\n1 3 3\n2 3 3\n3 3 3\n10', output: '1' },
                { input: 'orders = [[1,7,7],[2,8,8]], max_slot_duration = 15', judgeInput: '2\n1 7 7\n2 8 8\n15', output: '2' },
                { input: 'orders = [[1,2,2],[2,2,2],[3,2,2],[4,2,2],[5,2,2]], max_slot_duration = 10', judgeInput: '5\n1 2 2\n2 2 2\n3 2 2\n4 2 2\n5 2 2\n10', output: '1' },
                { input: 'orders = [[1,5,4],[2,4,5]], max_slot_duration = 10', judgeInput: '2\n1 5 4\n2 4 5\n10', output: '1' },
                { input: 'orders = [[1,6,5],[2,5,6],[3,7,4]], max_slot_duration = 12', judgeInput: '3\n1 6 5\n2 5 6\n3 7 4\n12', output: '2' },
                { input: 'orders = [[1,3,4],[2,4,3],[3,5,5]], max_slot_duration = 20', judgeInput: '3\n1 3 4\n2 4 3\n3 5 5\n20', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @param {number} max_slot_duration
 * @return {number}
 */
function minSlots(orders, max_slot_duration) {
    // Your code here
}`,
                python: `def min_slots(orders, max_slot_duration):
    """
    :type orders: List[List[int]]
    :type max_slot_duration: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minSlots(vector<vector<int>>& orders, int max_slot_duration) {
    // Your code here
}`,
                java: `public class Solution {
    public int minSlots(int[][] orders, int max_slot_duration) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    const max_slot_duration = parseInt(lines[n+1]);\n    console.log(minSlots(orders, max_slot_duration));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nmax_slot_duration = int(lines[n+1])\nprint(min_slots(orders, max_slot_duration))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minSlots(vector<vector<int>>& orders, int max_slot_duration);\nint main() {\n    int n, max_slot_duration;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2];\n    cin >> max_slot_duration;\n    cout << minSlots(orders, max_slot_duration) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][3];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n        }\n        int max_slot_duration = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minSlots(orders, max_slot_duration));\n    }\n}`
            }
        }, {
            id: 'dark-store',
            title: 'Dark Store Inventory Rebalancing',
            difficulty: 'Medium',
            description: `Rebalance inventory across dark stores to meet demand.

You are given:
- stores: List of [store_id, current_stock, demand]

Goal: Calculate total deficit (sum of max(0, demand - current_stock) for all stores).

Input Format:
- stores: List of lists [id, stock, demand]

Output Format:
- Return an integer (total deficit)

Constraints:
- 1 <= stores.length <= 1000
- 0 <= current_stock, demand <= 10000`,
            examples: [
                { input: 'stores = [[1,50,100],[2,80,60],[3,30,50]]', output: '70' },
                { input: 'stores = [[1,100,50]]', output: '0' }
            ],
            testCases: [
                { input: 'stores = [[1,50,100],[2,80,60],[3,30,50]]', judgeInput: '3\n1 50 100\n2 80 60\n3 30 50', output: '70' },
                { input: 'stores = [[1,100,50]]', judgeInput: '1\n1 100 50', output: '0' },
                { input: 'stores = [[1,20,50],[2,30,60],[3,40,70]]', judgeInput: '3\n1 20 50\n2 30 60\n3 40 70', output: '90' },
                { input: 'stores = [[1,100,100],[2,200,200],[3,300,300]]', judgeInput: '3\n1 100 100\n2 200 200\n3 300 300', output: '0' },
                { input: 'stores = [[1,0,100]]', judgeInput: '1\n1 0 100', output: '100' },
                { input: 'stores = [[1,75,50],[2,60,80],[3,90,70]]', judgeInput: '3\n1 75 50\n2 60 80\n3 90 70', output: '20' },
                { input: 'stores = [[1,10,30],[2,20,40],[3,30,50],[4,40,60]]', judgeInput: '4\n1 10 30\n2 20 40\n3 30 50\n4 40 60', output: '80' },
                { input: 'stores = [[1,500,200],[2,600,300]]', judgeInput: '2\n1 500 200\n2 600 300', output: '0' },
                { input: 'stores = [[1,45,90],[2,55,110],[3,65,130]]', judgeInput: '3\n1 45 90\n2 55 110\n3 65 130', output: '165' },
                { input: 'stores = [[1,100,80],[2,90,70],[3,80,60]]', judgeInput: '3\n1 100 80\n2 90 70\n3 80 60', output: '0' },
                { input: 'stores = [[1,25,100],[2,35,90],[3,45,80]]', judgeInput: '3\n1 25 100\n2 35 90\n3 45 80', output: '165' },
                { input: 'stores = [[1,150,150],[2,200,250],[3,300,400]]', judgeInput: '3\n1 150 150\n2 200 250\n3 300 400', output: '150' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} stores
 * @return {number}
 */
function totalDeficit(stores) {
    // Your code here
}`,
                python: `def total_deficit(stores):
    """
    :type stores: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int totalDeficit(vector<vector<int>>& stores) {
    // Your code here
}`,
                java: `public class Solution {
    public int totalDeficit(int[][] stores) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const stores = [];\n    for(let i=1; i<=n; i++) stores.push(lines[i].split(' ').map(Number));\n    console.log(totalDeficit(stores));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nstores = []\nfor i in range(1, n+1):\n    stores.append(list(map(int, lines[i].split())))\nprint(total_deficit(stores))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint totalDeficit(vector<vector<int>>& stores);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> stores(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> stores[i][0] >> stores[i][1] >> stores[i][2];\n    cout << totalDeficit(stores) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] stores = new int[n][3];\n        for(int i=0; i<n; i++) {\n            stores[i][0] = sc.nextInt();\n            stores[i][1] = sc.nextInt();\n            stores[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.totalDeficit(stores));\n    }\n}`
            }
        }]
    }]
};
