export const zomatoData = {
    id: 'zomato',
    name: 'Zomato',
    logo: 'https://logo.clearbit.com/zomato.com',
    description: 'Practice real Zomato Online Assessment questions.',
    assessments: [{
        id: 'zomato-oa-1',
        title: 'Zomato OA-1',
        duration: 90,
        problems: [{
            id: 'restaurant-clustering',
            title: 'Restaurant Locality Clustering',
            difficulty: 'Medium',
            description: `Problem Description
To optimize delivery zones, Zomato wants to cluster restaurants that are geographically close and serve the same type of cuisine.

You are given:
- \`restaurants\`: A list where each element is \`[x, y, cuisine_type]\`.
  - \`x, y\`: Coordinates of the restaurant.
  - \`cuisine_type\`: An integer ID representing the cuisine.
- \`dist\`: The maximum distance allowed between any two restaurants in the same cluster.

**Clustering Rule:**
Two restaurants \`A\` and \`B\` belong to the same cluster if:
1. They serve the same \`cuisine_type\`.
2. The Manhattan distance \`|x1 - x2| + |y1 - y2|\` between them is <= \`dist\`.
3. Connectivity is transitive: if A is connected to B, and B is connected to C, then A, B, and C are in the same cluster.

**Goal:**
Return the **total number of clusters** formed.

### Input Format
- \`restaurants\`: List of lists \`[x, y, cuisine_type]\`
- \`dist\`: Integer

### Output Format
- Return an integer representing the number of clusters.

### Constraints
- \`1 <= restaurants.length <= 200\`
- \`0 <= x, y <= 1000\`
- \`1 <= dist <= 2000\``,
            examples: [
                { input: 'restaurants = [[0,0,1],[0,5,1],[10,10,2]], dist = 6', output: '2' },
                { input: 'restaurants = [[0,0,1],[10,10,1],[20,20,1]], dist = 5', output: '3' }
            ],
            testCases: [
                { input: 'restaurants = [[0,0,1],[0,5,1],[10,10,2]], dist = 6', judgeInput: '3\n0 0 1\n0 5 1\n10 10 2\n6', output: '2' },
                { input: 'restaurants = [[0,0,1]], dist = 10', judgeInput: '1\n0 0 1\n10', output: '1' },
                { input: 'restaurants = [[0,0,1],[10,10,1],[20,20,1]], dist = 5', judgeInput: '3\n0 0 1\n10 10 1\n20 20 1\n5', output: '3' },
                { input: 'restaurants = [[0,0,1],[0,0,2]], dist = 1', judgeInput: '2\n0 0 1\n0 0 2\n1', output: '2' },
                { input: 'restaurants = [[5,5,1],[6,6,1],[7,7,1]], dist = 3', judgeInput: '3\n5 5 1\n6 6 1\n7 7 1\n3', output: '1' },
                { input: 'restaurants = [[0,0,1],[100,100,1]], dist = 50', judgeInput: '2\n0 0 1\n100 100 1\n50', output: '2' },
                { input: 'restaurants = [[0,0,1],[3,4,1],[6,8,1]], dist = 10', judgeInput: '3\n0 0 1\n3 4 1\n6 8 1\n10', output: '1' },
                { input: 'restaurants = [[0,0,1],[0,10,1],[10,0,2],[10,10,2]], dist = 15', judgeInput: '4\n0 0 1\n0 10 1\n10 0 2\n10 10 2\n15', output: '2' },
                { input: 'restaurants = [[0,0,1],[1,1,1],[2,2,1],[50,50,2]], dist = 5', judgeInput: '4\n0 0 1\n1 1 1\n2 2 1\n50 50 2\n5', output: '2' },
                { input: 'restaurants = [[10,10,1],[20,20,1],[30,30,1],[40,40,1]], dist = 20', judgeInput: '4\n10 10 1\n20 20 1\n30 30 1\n40 40 1\n20', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} restaurants
 * @param {number} dist
 * @return {number}
 */
function countClusters(restaurants, dist) {
    // Your code here
}`,
                python: `def count_clusters(restaurants, dist):
    """
    :type restaurants: List[List[int]]
    :type dist: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countClusters(vector<vector<int>>& restaurants, int dist) {
    // Your code here
}`,
                java: `public class Solution {
    public int countClusters(int[][] restaurants, int dist) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const restaurants = [];\n    for(let i=1; i<=n; i++) restaurants.push(lines[i].split(' ').map(Number));\n    const dist = parseInt(lines[n+1]);\n    console.log(countClusters(restaurants, dist));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrestaurants = []\nfor i in range(1, n+1):\n    restaurants.append(list(map(int, lines[i].split())))\ndist = int(lines[n+1])\nprint(count_clusters(restaurants, dist))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countClusters(vector<vector<int>>& restaurants, int dist);\nint main() {\n    int n, dist;\n    cin >> n;\n    vector<vector<int>> restaurants(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> restaurants[i][0] >> restaurants[i][1] >> restaurants[i][2];\n    cin >> dist;\n    cout << countClusters(restaurants, dist) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] restaurants = new int[n][3];\n        for(int i=0; i<n; i++) {\n            restaurants[i][0] = sc.nextInt();\n            restaurants[i][1] = sc.nextInt();\n            restaurants[i][2] = sc.nextInt();\n        }\n        int dist = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.countClusters(restaurants, dist));\n    }\n}` }
        }, {
            id: 'menu-optimizer',
            title: 'High-Margin Menu Optimizer',
            difficulty: 'Hard',
            description: `Problem Description
A restaurant wants to design a special menu that maximizes total revenue while staying within a fixed ingredient cost budget.

You are given:
- \`items\`: A list where each item is \`[cost, price, popularity]\`.
  - \`cost\`: Cost to make the item.
  - \`price\`: Selling price of the item.
  - \`popularity\`: A multiplier indicating how many times it sells.
- \`budget\`: The maximum total cost allowed for the selected items.

**Revenue Calculation:**
For a selected item, \`Revenue = price * popularity\`.

**Goal:**
Select a subset of items such that the **total cost <= budget** and the **total revenue is maximized**. Each item can be selected at most once (0/1 Knapsack variation).

### Input Format
- \`items\`: List of lists \`[cost, price, popularity]\`
- \`budget\`: Integer

### Output Format
- Return an integer representing the maximum total revenue.

### Constraints
- \`1 <= items.length <= 100\`
- \`1 <= budget <= 10000\`
- \`1 <= cost, price, popularity <= 1000\``,
            examples: [
                { input: 'items = [[10,20,5],[15,30,3]], budget = 20', output: '100' },
                { input: 'items = [[5,10,3],[8,15,2],[12,25,1]], budget = 20', output: '60' }
            ],
            testCases: [
                { input: 'items = [[10,20,5],[15,30,3]], budget = 20', judgeInput: '2\n10 20 5\n15 30 3\n20', output: '100' },
                { input: 'items = [[5,10,10]], budget = 10', judgeInput: '1\n5 10 10\n10', output: '100' },
                { input: 'items = [[20,30,2],[10,15,5]], budget = 15', judgeInput: '2\n20 30 2\n10 15 5\n15', output: '75' },
                { input: 'items = [[100,200,1]], budget = 50', judgeInput: '1\n100 200 1\n50', output: '0' },
                { input: 'items = [[5,10,3],[8,15,2],[12,25,1]], budget = 20', judgeInput: '3\n5 10 3\n8 15 2\n12 25 1\n20', output: '60' },
                { input: 'items = [[10,50,10],[20,60,8]], budget = 30', judgeInput: '2\n10 50 10\n20 60 8\n30', output: '980' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
function maxRevenue(items, budget) {
    // Your code here
}`,
                python: `def max_revenue(items, budget):
    """
    :type items: List[List[int]]
    :type budget: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

long long maxRevenue(vector<vector<int>>& items, int budget) {
    // Your code here
}`,
                java: `public class Solution {
    public long maxRevenue(int[][] items, int budget) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const items = [];\n    for(let i=1; i<=n; i++) items.push(lines[i].split(' ').map(Number));\n    const budget = parseInt(lines[n+1]);\n    console.log(maxRevenue(items, budget));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nitems = []\nfor i in range(1, n+1):\n    items.append(list(map(int, lines[i].split())))\nbudget = int(lines[n+1])\nprint(max_revenue(items, budget))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nlong long maxRevenue(vector<vector<int>>& items, int budget);\nint main() {\n    int n, budget;\n    cin >> n;\n    vector<vector<int>> items(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> items[i][0] >> items[i][1] >> items[i][2];\n    cin >> budget;\n    cout << maxRevenue(items, budget) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] items = new int[n][3];\n        for(int i=0; i<n; i++) {\n            items[i][0] = sc.nextInt();\n            items[i][1] = sc.nextInt();\n            items[i][2] = sc.nextInt();\n        }\n        int budget = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxRevenue(items, budget));\n    }\n}` }
        }]
    }, {
        id: 'zomato-oa-2',
        title: 'Zomato OA-2',
        duration: 90,
        problems: [{
            id: 'rider-route',
            title: 'Delivery Rider Route Optimizer',
            difficulty: 'Medium',
            description: `Optimize delivery route for a Zomato rider.

You are given:
- orders: List of [order_id, restaurant_x, restaurant_y, customer_x, customer_y]

Goal: Calculate total distance for a rider who picks up all orders from restaurants in order, then delivers to all customers in order. Distance = |x1-x2| + |y1-y2|. Start from origin (0,0). Return total distance.

Input Format:
- orders: List of lists [id, rx, ry, cx, cy]

Output Format:
- Return an integer (total distance)

Constraints:
- 1 <= orders.length <= 100
- 0 <= coordinates <= 1000`,
            examples: [
                { input: 'orders = [[1,5,5,10,10],[2,3,3,6,6]]', output: '38' },
                { input: 'orders = [[1,10,10,20,20]]', output: '34' }
            ],
            testCases: [
                { input: 'orders = [[1,5,5,10,10],[2,3,3,6,6]]', judgeInput: '2\n1 5 5 10 10\n2 3 3 6 6', output: '38' },
                { input: 'orders = [[1,10,10,20,20]]', judgeInput: '1\n1 10 10 20 20', output: '34' },
                { input: 'orders = [[1,8,8,15,15]]', judgeInput: '1\n1 8 8 15 15', output: '30' },
                { input: 'orders = [[1,4,4,8,8],[2,6,6,12,12]]', judgeInput: '2\n1 4 4 8 8\n2 6 6 12 12', output: '32' },
                { input: 'orders = [[1,0,0,5,5]]', judgeInput: '1\n1 0 0 5 5', output: '10' },
                { input: 'orders = [[1,12,12,18,18],[2,9,9,15,15]]', judgeInput: '2\n1 12 12 18 18\n2 9 9 15 15', output: '48' },
                { input: 'orders = [[1,7,7,14,14]]', judgeInput: '1\n1 7 7 14 14', output: '28' },
                { input: 'orders = [[1,3,3,9,9],[2,5,5,10,10],[3,2,2,8,8]]', judgeInput: '3\n1 3 3 9 9\n2 5 5 10 10\n3 2 2 8 8', output: '50' },
                { input: 'orders = [[1,15,15,25,25]]', judgeInput: '1\n1 15 15 25 25', output: '50' },
                { input: 'orders = [[1,20,20,30,30],[2,18,18,28,28]]', judgeInput: '2\n1 20 20 30 30\n2 18 18 28 28', output: '84' },
                { input: 'orders = [[1,1,1,4,4],[2,2,2,5,5]]', judgeInput: '2\n1 1 1 4 4\n2 2 2 5 5', output: '16' },
                { input: 'orders = [[1,6,6,11,11],[2,8,8,13,13],[3,4,4,9,9]]', judgeInput: '3\n1 6 6 11 11\n2 8 8 13 13\n3 4 4 9 9', output: '58' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @return {number}
 */
function totalDistance(orders) {
    // Your code here
}`,
                python: `def total_distance(orders):
    """
    :type orders: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int totalDistance(vector<vector<int>>& orders) {
    // Your code here
}`,
                java: `public class Solution {
    public int totalDistance(int[][] orders) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    console.log(totalDistance(orders));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nprint(total_distance(orders))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint totalDistance(vector<vector<int>>& orders);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(5));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2] >> orders[i][3] >> orders[i][4];\n    cout << totalDistance(orders) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][5];\n        for(int i=0; i<n; i++) {\n            for(int j=0; j<5; j++) orders[i][j] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.totalDistance(orders));\n    }\n}`
            }
        }, {
            id: 'peak-demand',
            title: 'Peak Hour Demand Predictor',
            difficulty: 'Easy',
            description: `Predict peak hours based on order volume.

You are given:
- orders: List of [hour, order_count] representing orders at each hour

Goal: An hour is "peak" if order_count >= threshold. Return count of peak hours.

Input Format:
- orders: List of lists [hour, count]
- threshold: Integer

Output Format:
- Return an integer (count of peak hours)

Constraints:
- 1 <= orders.length <= 24
- 0 <= hour <= 23
- 0 <= order_count <= 10000
- 0 <= threshold <= 10000`,
            examples: [
                { input: 'orders = [[12,150],[13,200],[14,100]], threshold = 150', output: '2' },
                { input: 'orders = [[18,300]], threshold = 250', output: '1' }
            ],
            testCases: [
                { input: 'orders = [[12,150],[13,200],[14,100]], threshold = 150', judgeInput: '3\n12 150\n13 200\n14 100\n150', output: '2' },
                { input: 'orders = [[18,300]], threshold = 250', judgeInput: '1\n18 300\n250', output: '1' },
                { input: 'orders = [[10,100],[11,120],[12,140]], threshold = 130', judgeInput: '3\n10 100\n11 120\n12 140\n130', output: '1' },
                { input: 'orders = [[19,500],[20,600],[21,400]], threshold = 450', judgeInput: '3\n19 500\n20 600\n21 400\n450', output: '2' },
                { input: 'orders = [[8,80]], threshold = 100', judgeInput: '1\n8 80\n100', output: '0' },
                { input: 'orders = [[15,250],[16,300],[17,350]], threshold = 300', judgeInput: '3\n15 250\n16 300\n17 350\n300', output: '2' },
                { input: 'orders = [[9,90],[10,95],[11,100]], threshold = 100', judgeInput: '3\n9 90\n10 95\n11 100\n100', output: '1' },
                { input: 'orders = [[20,700],[21,800],[22,650],[23,750]], threshold = 700', judgeInput: '4\n20 700\n21 800\n22 650\n23 750\n700', output: '3' },
                { input: 'orders = [[7,50]], threshold = 60', judgeInput: '1\n7 50\n60', output: '0' },
                { input: 'orders = [[13,180],[14,220],[15,190]], threshold = 180', judgeInput: '3\n13 180\n14 220\n15 190\n180', output: '3' },
                { input: 'orders = [[11,110],[12,130]], threshold = 120', judgeInput: '2\n11 110\n12 130\n120', output: '1' },
                { input: 'orders = [[16,400],[17,450],[18,500],[19,550]], threshold = 500', judgeInput: '4\n16 400\n17 450\n18 500\n19 550\n500', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @param {number} threshold
 * @return {number}
 */
function peakHourCount(orders, threshold) {
    // Your code here
}`,
                python: `def peak_hour_count(orders, threshold):
    """
    :type orders: List[List[int]]
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int peakHourCount(vector<vector<int>>& orders, int threshold) {
    // Your code here
}`,
                java: `public class Solution {
    public int peakHourCount(int[][] orders, int threshold) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    const threshold = parseInt(lines[n+1]);\n    console.log(peakHourCount(orders, threshold));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nthreshold = int(lines[n+1])\nprint(peak_hour_count(orders, threshold))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint peakHourCount(vector<vector<int>>& orders, int threshold);\nint main() {\n    int n, threshold;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1];\n    cin >> threshold;\n    cout << peakHourCount(orders, threshold) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][2];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n        }\n        int threshold = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.peakHourCount(orders, threshold));\n    }\n}`
            }
        }]
    }]
};
