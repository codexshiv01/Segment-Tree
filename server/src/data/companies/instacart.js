export const instacartData = {
    id: 'instacart',
    name: 'Instacart',
    logo: 'https://logo.clearbit.com/instacart.com',
    description: 'Practice real Instacart Online Assessment questions.',
    assessments: [{
        id: 'instacart-oa-1',
        title: 'Instacart OA-1',
        duration: 90,
        problems: [{
            id: 'batch-optimizer',
            title: 'Grocery Batch Optimizer',
            difficulty: 'Hard',
            description: `Instacart shoppers need to batch multiple orders efficiently. Group orders to minimize total travel time while respecting vehicle capacity.

You are given:
- orders: List of [order_id, item_count, store_id]
- capacity: Maximum items per batch
- stores: List of store_ids that can be batched together

Goal: Create batches where total item_count <= capacity and all orders in a batch share at least one common store. Return minimum number of batches needed.

Input Format:
- orders: List of lists [id, items, store]
- capacity: Integer
- stores: List of unique store IDs (informational)

Output Format:
- Return an integer (minimum batches)

Constraints:
- 1 <= orders.length <= 1000
- 1 <= item_count <= capacity <= 100
- 1 <= store_id <= 50`,
            examples: [
                { input: 'orders = [[1,20,1],[2,30,1],[3,25,2]], capacity = 50, stores = [1,2]', output: '2' },
                { input: 'orders = [[1,15,1],[2,15,1],[3,15,1]], capacity = 50, stores = [1]', output: '1' }
            ],
            testCases: [
                { input: 'orders = [[1,20,1],[2,30,1],[3,25,2]], capacity = 50, stores = [1,2]', judgeInput: '3\n1 20 1\n2 30 1\n3 25 2\n50\n2\n1 2', output: '2' },
                { input: 'orders = [[1,15,1],[2,15,1],[3,15,1]], capacity = 50, stores = [1]', judgeInput: '3\n1 15 1\n2 15 1\n3 15 1\n50\n1\n1', output: '1' },
                { input: 'orders = [[1,40,1],[2,40,2],[3,40,3]], capacity = 50, stores = [1,2,3]', judgeInput: '3\n1 40 1\n2 40 2\n3 40 3\n50\n3\n1 2 3', output: '3' },
                { input: 'orders = [[1,25,1],[2,25,1],[3,30,1]], capacity = 60, stores = [1]', judgeInput: '3\n1 25 1\n2 25 1\n3 30 1\n60\n1\n1', output: '2' },
                { input: 'orders = [[1,10,1],[2,10,1],[3,10,1],[4,10,1],[5,10,1]], capacity = 35, stores = [1]', judgeInput: '5\n1 10 1\n2 10 1\n3 10 1\n4 10 1\n5 10 1\n35\n1\n1', output: '2' },
                { input: 'orders = [[1,50,1]], capacity = 50, stores = [1]', judgeInput: '1\n1 50 1\n50\n1\n1', output: '1' },
                { input: 'orders = [[1,20,1],[2,20,2],[3,20,1],[4,20,2]], capacity = 40, stores = [1,2]', judgeInput: '4\n1 20 1\n2 20 2\n3 20 1\n4 20 2\n40\n2\n1 2', output: '2' },
                { input: 'orders = [[1,15,1],[2,15,2],[3,15,3],[4,15,1]], capacity = 50, stores = [1,2,3]', judgeInput: '4\n1 15 1\n2 15 2\n3 15 3\n4 15 1\n50\n3\n1 2 3', output: '3' },
                { input: 'orders = [[1,30,1],[2,30,1]], capacity = 70, stores = [1]', judgeInput: '2\n1 30 1\n2 30 1\n70\n1\n1', output: '1' },
                { input: 'orders = [[1,25,1],[2,25,1],[3,25,1],[4,25,1]], capacity = 50, stores = [1]', judgeInput: '4\n1 25 1\n2 25 1\n3 25 1\n4 25 1\n50\n1\n1', output: '2' },
                { input: 'orders = [[1,10,1],[2,20,2],[3,30,3],[4,15,1],[5,25,2]], capacity = 60, stores = [1,2,3]', judgeInput: '5\n1 10 1\n2 20 2\n3 30 3\n4 15 1\n5 25 2\n60\n3\n1 2 3', output: '3' },
                { input: 'orders = [[1,45,1],[2,45,1]], capacity = 45, stores = [1]', judgeInput: '2\n1 45 1\n2 45 1\n45\n1\n1', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @param {number} capacity
 * @param {number[]} stores
 * @return {number}
 */
function minBatches(orders, capacity, stores) {
    // Your code here
}`,
                python: `def min_batches(orders, capacity, stores):
    """
    :type orders: List[List[int]]
    :type capacity: int
    :type stores: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minBatches(vector<vector<int>>& orders, int capacity, vector<int>& stores) {
    // Your code here
}`,
                java: `public class Solution {
    public int minBatches(int[][] orders, int capacity, int[] stores) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    const capacity = parseInt(lines[n+1]);\n    const m = parseInt(lines[n+2]);\n    const stores = lines[n+3].split(' ').map(Number);\n    console.log(minBatches(orders, capacity, stores));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\ncapacity = int(lines[n+1])\nm = int(lines[n+2])\nstores = list(map(int, lines[n+3].split()))\nprint(min_batches(orders, capacity, stores))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minBatches(vector<vector<int>>& orders, int capacity, vector<int>& stores);\nint main() {\n    int n, capacity, m;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2];\n    cin >> capacity >> m;\n    vector<int> stores(m);\n    for(int i=0; i<m; ++i) cin >> stores[i];\n    cout << minBatches(orders, capacity, stores) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][3];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n        }\n        int capacity = sc.nextInt();\n        int m = sc.nextInt();\n        int[] stores = new int[m];\n        for(int i=0; i<m; i++) stores[i] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minBatches(orders, capacity, stores));\n    }\n}`
            }
        }, {
            id: 'expiry-tracker',
            title: 'Product Expiry Date Optimizer',
            difficulty: 'Medium',
            description: `Track products approaching expiration and prioritize them for fast delivery. Given product inventory with expiry dates, find products expiring within threshold days.

You are given:
- products: List of [product_id, days_until_expiry, stock_count]
- threshold: Maximum days until expiry to flag

Goal: Return total count of products (sum of stock_count) that are expiring within threshold days (days_until_expiry <= threshold).

Input Format:
- products: List of lists [id, days, stock]
- threshold: Integer

Output Format:
- Return an integer (total stock count)

Constraints:
- 1 <= products.length <= 1000
- 0 <= days_until_expiry <= 365
- 1 <= stock_count <= 1000
- 1 <= threshold <= 30`,
            examples: [
                { input: 'products = [[1,3,50],[2,10,30],[3,2,20]], threshold = 5', output: '70' },
                { input: 'products = [[1,10,100]], threshold = 5', output: '0' }
            ],
            testCases: [
                { input: 'products = [[1,3,50],[2,10,30],[3,2,20]], threshold = 5', judgeInput: '3\n1 3 50\n2 10 30\n3 2 20\n5', output: '70' },
                { input: 'products = [[1,10,100]], threshold = 5', judgeInput: '1\n1 10 100\n5', output: '0' },
                { input: 'products = [[1,1,200],[2,2,150],[3,3,100]], threshold = 3', judgeInput: '3\n1 1 200\n2 2 150\n3 3 100\n3', output: '450' },
                { input: 'products = [[1,5,50],[2,5,50],[3,5,50]], threshold = 5', judgeInput: '3\n1 5 50\n2 5 50\n3 5 50\n5', output: '150' },
                { input: 'products = [[1,7,100],[2,14,200]], threshold = 10', judgeInput: '2\n1 7 100\n2 14 200\n10', output: '100' },
                { input: 'products = [[1,0,500]], threshold = 1', judgeInput: '1\n1 0 500\n1', output: '500' },
                { input: 'products = [[1,2,75],[2,4,80],[3,6,90],[4,8,100]], threshold = 5', judgeInput: '4\n1 2 75\n2 4 80\n3 6 90\n4 8 100\n5', output: '155' },
                { input: 'products = [[1,15,300],[2,20,400],[3,25,500]], threshold = 10', judgeInput: '3\n1 15 300\n2 20 400\n3 25 500\n10', output: '0' },
                { input: 'products = [[1,1,100],[2,1,100],[3,1,100],[4,1,100]], threshold = 1', judgeInput: '4\n1 1 100\n2 1 100\n3 1 100\n4 1 100\n1', output: '400' },
                { input: 'products = [[1,3,250],[2,7,350],[3,10,450]], threshold = 8', judgeInput: '3\n1 3 250\n2 7 350\n3 10 450\n8', output: '600' },
                { input: 'products = [[1,9,120],[2,11,130]], threshold = 10', judgeInput: '2\n1 9 120\n2 11 130\n10', output: '120' },
                { input: 'products = [[1,30,1000]], threshold = 30', judgeInput: '1\n1 30 1000\n30', output: '1000' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} products
 * @param {number} threshold
 * @return {number}
 */
function expiringStock(products, threshold) {
    // Your code here
}`,
                python: `def expiring_stock(products, threshold):
    """
    :type products: List[List[int]]
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int expiringStock(vector<vector<int>>& products, int threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int expiringStock(int[][] products, int threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const products = [];\n    for(let i=1; i<=n; i++) products.push(lines[i].split(' ').map(Number));\n    const threshold = parseInt(lines[n+1]);\n    console.log(expiringStock(products, threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nproducts = []\nfor i in range(1, n+1):\n    products.append(list(map(int, lines[i].split())))\nthreshold = int(lines[n+1])\nprint(expiring_stock(products, threshold))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint expiringStock(vector<vector<int>>& products, int threshold);\nint main() {\n    int n, threshold;\n    cin >> n;\n    vector<vector<int>> products(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> products[i][0] >> products[i][1] >> products[i][2];\n    cin >> threshold;\n    cout << expiringStock(products, threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] products = new int[n][3];\n        for(int i=0; i<n; i++) {\n            products[i][0] = sc.nextInt();\n            products[i][1] = sc.nextInt();\n            products[i][2] = sc.nextInt();\n        }\n        int threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.expiringStock(products, threshold));\n    }\n}`
            }
        }]
    }]
};
