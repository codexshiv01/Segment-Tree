export const walmartData = {
    id: 'walmart',
    name: 'Walmart',
    logo: 'https://logo.clearbit.com/walmart.com',
    description: 'Practice real Walmart Online Assessment questions.',
    assessments: [{
        id: 'walmart-oa-1',
        title: 'Walmart OA-1',
        duration: 90,
        problems: [{
            id: 'inventory-restock',
            title: 'Smart Inventory Restocking',
            difficulty: 'Medium',
            description: `Problem Description
Walmart's inventory management system needs to decide which items to restock to maximize the number of days the store remains fully stocked, given a limited budget.

You are given:
- \`items\`: A list where each element is \`[daily_demand, restock_cost]\`.
  - \`daily_demand\`: Number of units sold per day.
  - \`restock_cost\`: Cost to restock one unit.
- \`budget\`: The total budget available for restocking.

**Goal:**
Determine the **maximum number of days** the store can remain fully stocked for **all** items, given the budget.
- To stay stocked for \`d\` days, you need \`d * daily_demand\` units for each item.
- The total cost is sum of \`d * daily_demand * restock_cost\` for all items.

### Input Format
- \`items\`: List of lists \`[daily_demand, restock_cost]\`
- \`budget\`: Integer

### Output Format
- Return an integer representing the maximum number of days.

### Constraints
- \`1 <= items.length <= 100\`
- \`1 <= daily_demand, restock_cost <= 100\`
- \`1 <= budget <= 10^9\``,
            examples: [
                { input: 'items = [[10,100],[20,150]], budget = 300', output: '2' },
                { input: 'items = [[5,50]], budget = 100', output: '2' }
            ],
            testCases: [
                { input: 'items = [[10,100],[20,150]], budget = 300', judgeInput: '2\n10 100\n20 150\n300', output: '2' },
                { input: 'items = [[5,50]], budget = 100', judgeInput: '1\n5 50\n100', output: '2' },
                { input: 'items = [[100,500]], budget = 400', judgeInput: '1\n100 500\n400', output: '0' },
                { input: 'items = [[10,50],[10,50],[10,50]], budget = 150', judgeInput: '3\n10 50\n10 50\n10 50\n150', output: '1' },
                { input: 'items = [[5,100],[10,200]], budget = 500', judgeInput: '2\n5 100\n10 200\n500', output: '2' },
                { input: 'items = [[20,100],[30,200]], budget = 600', judgeInput: '2\n20 100\n30 200\n600', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
function maxStockDays(items, budget) {
    // Your code here
}`,
                python: `def max_stock_days(items, budget):
    """
    :type items: List[List[int]]
    :type budget: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxStockDays(vector<vector<int>>& items, int budget) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxStockDays(int[][] items, int budget) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const items = [];\n    for(let i=1; i<=n; i++) items.push(lines[i].split(' ').map(Number));\n    const budget = parseInt(lines[n+1]);\n    console.log(maxStockDays(items, budget));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nitems = []\nfor i in range(1, n+1):\n    items.append(list(map(int, lines[i].split())))\nbudget = int(lines[n+1])\nprint(max_stock_days(items, budget))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxStockDays(vector<vector<int>>& items, int budget);\nint main() {\n    int n, budget;\n    cin >> n;\n    vector<vector<int>> items(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> items[i][0] >> items[i][1];\n    cin >> budget;\n    cout << maxStockDays(items, budget) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] items = new int[n][2];\n        for(int i=0; i<n; i++) {\n            items[i][0] = sc.nextInt();\n            items[i][1] = sc.nextInt();\n        }\n        int budget = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxStockDays(items, budget));\n    }\n}` }
        },
        {
            id: 'supply-chain-graph',
            title: 'Supply Chain Optimization',
            difficulty: 'Hard',
            description: `Problem Description
Walmart's supply chain is represented as a directed graph where nodes are warehouses and edges represent shipping routes with associated costs.

You are given:
- \`n\`: Number of warehouses (0 to n-1).
- \`routes\`: List of \`[u, v, cost]\` representing a route from \`u\` to \`v\` with a specific cost.
- \`src\`: Source warehouse.
- \`dst\`: Destination warehouse.
- \`k\`: Maximum number of stops allowed.

**Goal:**
Find the **cheapest price** from \`src\` to \`dst\` with **at most k stops**. If no such route exists, return \`-1\`.

### Input Format
- \`n\`: Integer
- \`routes\`: List of lists \`[u, v, cost]\`
- \`src\`: Integer
- \`dst\`: Integer
- \`k\`: Integer

### Output Format
- Return an integer representing the minimum cost.

### Constraints
- \`1 <= n <= 100\`
- \`0 <= routes.length <= 6000\`
- \`0 <= cost <= 1000\`
- \`0 <= k <= 100\``,
            examples: [
                { input: 'n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1', output: '200' },
                { input: 'n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0', output: '500' }
            ],
            testCases: [
                { input: 'n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1', judgeInput: '3\n3\n0 1 100\n1 2 100\n0 2 500\n0 2 1', output: '200' },
                { input: 'n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0', judgeInput: '3\n3\n0 1 100\n1 2 100\n0 2 500\n0 2 0', output: '500' },
                { input: 'n = 4, routes = [[0,1,10],[1,2,10],[2,3,10],[0,3,100]], src = 0, dst = 3, k = 2', judgeInput: '4\n4\n0 1 10\n1 2 10\n2 3 10\n0 3 100\n0 3 2', output: '30' },
                { input: 'n = 2, routes = [[0,1,100]], src = 0, dst = 1, k = 0', judgeInput: '2\n1\n0 1 100\n0 1 0', output: '100' },
                { input: 'n = 3, routes = [[0,1,100]], src = 0, dst = 2, k = 1', judgeInput: '3\n1\n0 1 100\n0 2 1', output: '-1' },
                { input: 'n = 5, routes = [[0,1,10],[1,2,10],[2,3,10],[3,4,10]], src = 0, dst = 4, k = 3', judgeInput: '5\n4\n0 1 10\n1 2 10\n2 3 10\n3 4 10\n0 4 3', output: '40' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} routes
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestRoute(n, routes, src, dst, k) {
    // Your code here
}`,
                python: `def find_cheapest_route(n, routes, src, dst, k):
    """
    :type n: int
    :type routes: List[List[int]]
    :type src: int
    :type dst: int
    :type k: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int findCheapestRoute(int n, vector<vector<int>>& routes, int src, int dst, int k) {
    // Your code here
}`,
                java: `public class Solution {
    public int findCheapestRoute(int n, int[][] routes, int src, int dst, int k) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const m = parseInt(lines[1]);\n    const routes = [];\n    for(let i=2; i<m+2; i++) routes.push(lines[i].split(' ').map(Number));\n    const params = lines[m+2].split(' ').map(Number);\n    console.log(findCheapestRoute(n, routes, params[0], params[1], params[2]));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nm = int(lines[1])\nroutes = []\nfor i in range(2, m+2):\n    routes.append(list(map(int, lines[i].split())))\nparams = list(map(int, lines[m+2].split()))\nprint(find_cheapest_route(n, routes, params[0], params[1], params[2]))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint findCheapestRoute(int n, vector<vector<int>>& routes, int src, int dst, int k);\nint main() {\n    int n, m, src, dst, k;\n    cin >> n >> m;\n    vector<vector<int>> routes(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> routes[i][0] >> routes[i][1] >> routes[i][2];\n    cin >> src >> dst >> k;\n    cout << findCheapestRoute(n, routes, src, dst, k) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] routes = new int[m][3];\n        for(int i=0; i<m; i++) {\n            routes[i][0] = sc.nextInt();\n            routes[i][1] = sc.nextInt();\n            routes[i][2] = sc.nextInt();\n        }\n        int src = sc.nextInt();\n        int dst = sc.nextInt();\n        int k = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.findCheapestRoute(n, routes, src, dst, k));\n    }\n}` }
        }]
    }]
};
