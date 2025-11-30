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
            description: `### Problem Description
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
                { input: 'restaurants = [[0,0,1],[100,100,1]], dist = 50', judgeInput: '2\n0 0 1\n100 100 1\n50', output: '2' }
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
            description: `### Problem Description
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
    }]
};
