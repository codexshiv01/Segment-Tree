export const dellData = {
    id: 'dell',
    name: 'Dell',
    logo: 'https://logo.clearbit.com/dell.com',
    description: 'Practice real Dell Online Assessment questions.',
    assessments: [{
        id: 'dell-oa-1',
        title: 'Dell OA-1',
        duration: 90,
        problems: [{
            id: 'server-optimizer',
            title: 'Server Configuration Optimizer',
            difficulty: 'Medium',
            description: `Dell needs to optimize server configurations to maximize performance under power constraints.

You are given:
- servers: List of [server_id, performance, power_consumption]
- max_power: Maximum total power budget

Goal: Select servers to maximize total performance without exceeding power budget. Return maximum achievable performance.

Input Format:
- servers: List of lists [id, performance, power]
- max_power: Integer

Output Format:
- Return an integer (max performance)

Constraints:
- 1 <= servers.length <= 100
- 1 <= performance, power, max_power <= 1000`,
            examples: [
                { input: 'servers = [[1,10,5],[2,20,10],[3,15,8]], max_power = 15', output: '25' },
                { input: 'servers = [[1,100,50]], max_power = 40', output: '0' }
            ],
            testCases: [
                { input: 'servers = [[1,10,5],[2,20,10],[3,15,8]], max_power = 15', judgeInput: '3\n1 10 5\n2 20 10\n3 15 8\n15', output: '25' },
                { input: 'servers = [[1,100,50]], max_power = 40', judgeInput: '1\n1 100 50\n40', output: '0' },
                { input: 'servers = [[1,50,10],[2,50,10]], max_power = 20', judgeInput: '2\n1 50 10\n2 50 10\n20', output: '100' },
                { input: 'servers = [[1,10,5],[2,20,10],[3,30,15]], max_power = 25', judgeInput: '3\n1 10 5\n2 20 10\n3 30 15\n25', output: '40' },
                { input: 'servers = [[1,100,10]], max_power = 100', judgeInput: '1\n1 100 10\n100', output: '100' },
                { input: 'servers = [[1,10,20],[2,20,30]], max_power = 10', judgeInput: '2\n1 10 20\n2 20 30\n10', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} servers
 * @param {number} max_power
 * @return {number}
 */
function maxPerformance(servers, max_power) {
    // Your code here
}`,
                python: `def max_performance(servers, max_power):
    """
    :type servers: List[List[int]]
    :type max_power: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxPerformance(vector<vector<int>>& servers, int max_power) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxPerformance(int[][] servers, int max_power) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const servers = [];\n    for(let i=1; i<=n; i++) servers.push(lines[i].split(' ').map(Number));\n    const max_power = parseInt(lines[n+1]);\n    console.log(maxPerformance(servers, max_power));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nservers = []\nfor i in range(1, n+1):\n    servers.append(list(map(int, lines[i].split())))\nmax_power = int(lines[n+1])\nprint(max_performance(servers, max_power))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxPerformance(vector<vector<int>>& servers, int max_power);\nint main() {\n    int n, max_power;\n    cin >> n;\n    vector<vector<int>> servers(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> servers[i][0] >> servers[i][1] >> servers[i][2];\n    cin >> max_power;\n    cout << maxPerformance(servers, max_power) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] servers = new int[n][3];\n        for(int i=0; i<n; i++) {\n            servers[i][0] = sc.nextInt();\n            servers[i][1] = sc.nextInt();\n            servers[i][2] = sc.nextInt();\n        }\n        int max_power = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxPerformance(servers, max_power));\n    }\n}`
            }
        }, {
            id: 'supply-chain',
            title: 'Supply Chain Delivery Optimizer',
            difficulty: 'Hard',
            description: `Dell's supply chain needs to optimize delivery routes to minimize costs while meeting deadlines.

You are given:
- orders: List of [order_id, deadline, priority]
- routes: List of [order_id, route_cost, delivery_time]

Goal: Select routes to fulfill maximum number of high-priority orders within deadlines and budget. Return total priority score.

Input Format:
- orders: List of lists [id, deadline, priority]
- routes: List of lists [order_id, cost, time]
- budget: Integer

Output Format:
- Return an integer (max priority score)

Constraints:
- 1 <= orders.length, routes.length <= 100
- 1 <= values <= 1000`,
            examples: [
                { input: 'orders = [[1,10,5],[2,20,10]], routes = [[1,5,5],[2,15,15]], budget = 20', output: '15' },
                { input: 'orders = [[1,10,5]], routes = [[1,25,5]], budget = 20', output: '0' }
            ],
            testCases: [
                { input: 'orders = [[1,10,5],[2,20,10]], routes = [[1,5,5],[2,15,15]], budget = 20', judgeInput: '2\n1 10 5\n2 20 10\n2\n1 5 5\n2 15 15\n20', output: '15' },
                { input: 'orders = [[1,10,5]], routes = [[1,25,5]], budget = 20', judgeInput: '1\n1 10 5\n1\n1 25 5\n20', output: '0' },
                { input: 'orders = [[1,10,10],[2,10,20]], routes = [[1,5,5],[2,10,5]], budget = 15', judgeInput: '2\n1 10 10\n2 10 20\n2\n1 5 5\n2 10 5\n15', output: '30' },
                { input: 'orders = [[1,5,10]], routes = [[1,10,10]], budget = 10', judgeInput: '1\n1 5 10\n1\n1 10 10\n10', output: '10' },
                { input: 'orders = [[1,10,5],[2,10,5]], routes = [[1,5,3],[2,5,3]], budget = 10', judgeInput: '2\n1 10 5\n2 10 5\n2\n1 5 3\n2 5 3\n10', output: '10' },
                { input: 'orders = [[1,100,100]], routes = [[1,50,50]], budget = 100', judgeInput: '1\n1 100 100\n1\n1 50 50\n100', output: '100' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} orders
 * @param {number[][]} routes
 * @param {number} budget
 * @return {number}
 */
function maxPriorityScore(orders, routes, budget) {
    // Your code here
}`,
                python: `def max_priority_score(orders, routes, budget):
    """
    :type orders: List[List[int]]
    :type routes: List[List[int]]
    :type budget: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxPriorityScore(vector<vector<int>>& orders, vector<vector<int>>& routes, int budget) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxPriorityScore(int[][] orders, int[][] routes, int budget) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const orders = [];\n    for(let i=1; i<=n; i++) orders.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const routes = [];\n    for(let i=n+2; i<n+2+m; i++) routes.push(lines[i].split(' ').map(Number));\n    const budget = parseInt(lines[n+2+m]);\n    console.log(maxPriorityScore(orders, routes, budget));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\norders = []\nfor i in range(1, n+1):\n    orders.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nroutes = []\nfor i in range(n+2, n+2+m):\n    routes.append(list(map(int, lines[i].split())))\nbudget = int(lines[n+2+m])\nprint(max_priority_score(orders, routes, budget))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxPriorityScore(vector<vector<int>>& orders, vector<vector<int>>& routes, int budget);\nint main() {\n    int n, m, budget;\n    cin >> n;\n    vector<vector<int>> orders(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> orders[i][0] >> orders[i][1] >> orders[i][2];\n    cin >> m;\n    vector<vector<int>> routes(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> routes[i][0] >> routes[i][1] >> routes[i][2];\n    cin >> budget;\n    cout << maxPriorityScore(orders, routes, budget) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] orders = new int[n][3];\n        for(int i=0; i<n; i++) {\n            orders[i][0] = sc.nextInt();\n            orders[i][1] = sc.nextInt();\n            orders[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] routes = new int[m][3];\n        for(int i=0; i<m; i++) {\n            routes[i][0] = sc.nextInt();\n            routes[i][1] = sc.nextInt();\n            routes[i][2] = sc.nextInt();\n        }\n        int budget = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxPriorityScore(orders, routes, budget));\n    }\n}`
            }
        }]
    }]
};
