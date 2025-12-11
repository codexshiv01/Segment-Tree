export const oracleData = {
    id: 'oracle',
    name: 'Oracle',
    logo: 'https://logo.clearbit.com/oracle.com',
    description: 'Practice real Oracle Online Assessment questions.',
    assessments: [{
        id: 'oracle-oa-1',
        title: 'Oracle OA-1',
        duration: 90,
        problems: [{
            id: 'db-query-optimizer',
            title: 'Database Query Optimizer',
            difficulty: 'Medium',
            description: `Oracle's database needs to optimize query execution by reordering join operations. Given a list of table join operations and their execution costs, find the optimal order to minimize total cost.

You are given:
- tables: A list of table names (strings)
- joins: A list of [table1, table2, cost] representing possible joins and their costs

Goal: Find the minimum total cost to join all tables together. Each table must be joined exactly once. Return the minimum cost, or -1 if it's impossible to join all tables.

Input Format:
- tables: List of strings
- joins: List of lists [table1, table2, cost]

Output Format:
- Return an integer representing the minimum cost

Constraints:
- 2 <= tables.length <= 15
- 1 <= joins.length <= 100
- 1 <= cost <= 1000`,
            examples: [
                { input: 'tables = ["users","orders","products"], joins = [["users","orders",10],["orders","products",15],["users","products",25]]', output: '25' },
                { input: 'tables = ["A","B","C"], joins = [["A","B",5],["B","C",10]]', output: '15' }
            ],
            testCases: [
                { input: 'tables = ["users","orders","products"], joins = [["users","orders",10],["orders","products",15],["users","products",25]]', judgeInput: '3\nusers orders products\n3\nusers orders 10\norders products 15\nusers products 25', output: '25' },
                { input: 'tables = ["A","B","C"], joins = [["A","B",5],["B","C",10]]', judgeInput: '3\nA B C\n2\nA B 5\nB C 10', output: '15' },
                { input: 'tables = ["T1","T2"], joins = []', judgeInput: '2\nT1 T2\n0', output: '-1' },
                { input: 'tables = ["X","Y","Z"], joins = [["X","Y",20],["Y","Z",30],["X","Z",50]]', judgeInput: '3\nX Y Z\n3\nX Y 20\nY Z 30\nX Z 50', output: '50' },
                { input: 'tables = ["A","B","C","D"], joins = [["A","B",10],["B","C",20],["C","D",30]]', judgeInput: '4\nA B C D\n3\nA B 10\nB C 20\nC D 30', output: '60' },
                { input: 'tables = ["T1","T2","T3"], joins = [["T1","T2",100],["T1","T3",50],["T2","T3",75]]', judgeInput: '3\nT1 T2 T3\n3\nT1 T2 100\nT1 T3 50\nT2 T3 75', output: '125' }
            ],
            starterCode: {
                javascript: `/**
 * @param {string[]} tables
 * @param {string[][]} joins
 * @return {number}
 */
function minJoinCost(tables, joins) {
    // Your code here
}`,
                python: `def min_join_cost(tables, joins):
    """
    :type tables: List[str]
    :type joins: List[List]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
#include <string>
using namespace std;

int minJoinCost(vector<string>& tables, vector<vector<string>>& joins) {
    // Your code here
}`,
                java: `public class Solution {
    public int minJoinCost(String[] tables, String[][] joins) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const tables = lines[1].split(' ');\n    const m = parseInt(lines[2]);\n    const joins = [];\n    for(let i=3; i<3+m; i++) {\n        const parts = lines[i].split(' ');\n        joins.push([parts[0], parts[1], parseInt(parts[2])]);\n    }\n    console.log(minJoinCost(tables, joins));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntables = lines[1].split()\nm = int(lines[2])\njoins = []\nfor i in range(3, 3+m):\n    parts = lines[i].split()\n    joins.append([parts[0], parts[1], int(parts[2])])\nprint(min_join_cost(tables, joins))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\nint minJoinCost(vector<string>& tables, vector<vector<string>>& joins);\nint main() {\n    int n, m;\n    cin >> n;\n    cin.ignore();\n    vector<string> tables(n);\n    for(int i=0; i<n; ++i) cin >> tables[i];\n    cin >> m;\n    cin.ignore();\n    vector<vector<string>> joins(m, vector<string>(3));\n    for(int i=0; i<m; ++i) {\n        cin >> joins[i][0] >> joins[i][1] >> joins[i][2];\n    }\n    cout << minJoinCost(tables, joins) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] tables = new String[n];\n        for(int i=0; i<n; i++) tables[i] = sc.next();\n        int m = sc.nextInt();\n        String[][] joins = new String[m][3];\n        for(int i=0; i<m; i++) {\n            joins[i][0] = sc.next();\n            joins[i][1] = sc.next();\n            joins[i][2] = sc.next();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.minJoinCost(tables, joins));\n    }\n}`
            }
        }, {
            id: 'license-allocation',
            title: 'Cloud License Allocation System',
            difficulty: 'Hard',
            description: `Oracle Cloud manages software licenses across multiple data centers. Each license has a capacity and each data center has demand. Minimize the cost of allocating licenses to meet all demands.

You are given:
- licenses: A list of [license_id, capacity]
- datacenters: A list of [dc_id, demand]
- costs: A 2D array where costs[i][j] is the cost per unit to allocate license i to datacenter j

Goal: Allocate licenses to datacenters to meet all demands at minimum total cost. Return the minimum cost, or -1 if impossible.

Input Format:
- licenses: List of lists [id, capacity]
- datacenters: List of lists [id, demand]
- costs: 2D list of integers

Output Format:
- Return an integer representing the minimum total cost

Constraints:
- 1 <= licenses.length, datacenters.length <= 20
- 1 <= capacity, demand <= 1000
- 1 <= costs[i][j] <= 100`,
            examples: [
                { input: 'licenses = [[1,100],[2,150]], datacenters = [[1,80],[2,120]], costs = [[2,3],[4,1]]', output: '280' },
                { input: 'licenses = [[1,50]], datacenters = [[1,30],[2,30]], costs = [[5,10]]', output: '450' }
            ],
            testCases: [
                { input: 'licenses = [[1,100],[2,150]], datacenters = [[1,80],[2,120]], costs = [[2,3],[4,1]]', judgeInput: '2\n1 100\n2 150\n2\n1 80\n2 120\n2 3\n4 1', output: '280' },
                { input: 'licenses = [[1,50]], datacenters = [[1,30],[2,30]], costs = [[5,10]]', judgeInput: '1\n1 50\n2\n1 30\n2 30\n5 10', output: '450' },
                { input: 'licenses = [[1,10]], datacenters = [[1,20]], costs = [[1]]', judgeInput: '1\n1 10\n1\n1 20\n1', output: '-1' },
                { input: 'licenses = [[1,100],[2,100]], datacenters = [[1,50],[2,50]], costs = [[1,2],[2,1]]', judgeInput: '2\n1 100\n2 100\n2\n1 50\n2 50\n1 2\n2 1', output: '100' },
                { input: 'licenses = [[1,200]], datacenters = [[1,100],[2,100]], costs = [[3,3]]', judgeInput: '1\n1 200\n2\n1 100\n2 100\n3 3', output: '600' },
                { input: 'licenses = [[1,60],[2,80]], datacenters = [[1,40],[2,60]], costs = [[5,2],[3,4]]', judgeInput: '2\n1 60\n2 80\n2\n1 40\n2 60\n5 2\n3 4', output: '280' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} licenses
 * @param {number[][]} datacenters
 * @param {number[][]} costs
 * @return {number}
 */
function minAllocationCost(licenses, datacenters, costs) {
    // Your code here
}`,
                python: `def min_allocation_cost(licenses, datacenters, costs):
    """
    :type licenses: List[List[int]]
    :type datacenters: List[List[int]]
    :type costs: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minAllocationCost(vector<vector<int>>& licenses, vector<vector<int>>& datacenters, vector<vector<int>>& costs) {
    // Your code here
}`,
                java: `public class Solution {
    public int minAllocationCost(int[][] licenses, int[][] datacenters, int[][] costs) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const l = parseInt(lines[0]);\n    const licenses = [];\n    for(let i=1; i<=l; i++) licenses.push(lines[i].split(' ').map(Number));\n    const d = parseInt(lines[l+1]);\n    const datacenters = [];\n    for(let i=l+2; i<l+2+d; i++) datacenters.push(lines[i].split(' ').map(Number));\n    const costs = [];\n    for(let i=l+2+d; i<l+2+d+l; i++) costs.push(lines[i].split(' ').map(Number));\n    console.log(minAllocationCost(licenses, datacenters, costs));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nl = int(lines[0])\nlicenses = []\nfor i in range(1, l+1):\n    licenses.append(list(map(int, lines[i].split())))\nd = int(lines[l+1])\ndatacenters = []\nfor i in range(l+2, l+2+d):\n    datacenters.append(list(map(int, lines[i].split())))\ncosts = []\nfor i in range(l+2+d, l+2+d+l):\n    costs.append(list(map(int, lines[i].split())))\nprint(min_allocation_cost(licenses, datacenters, costs))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minAllocationCost(vector<vector<int>>& licenses, vector<vector<int>>& datacenters, vector<vector<int>>& costs);\nint main() {\n    int l, d;\n    cin >> l;\n    vector<vector<int>> licenses(l, vector<int>(2));\n    for(int i=0; i<l; ++i) cin >> licenses[i][0] >> licenses[i][1];\n    cin >> d;\n    vector<vector<int>> datacenters(d, vector<int>(2));\n    for(int i=0; i<d; ++i) cin >> datacenters[i][0] >> datacenters[i][1];\n    vector<vector<int>> costs(l, vector<int>(d));\n    for(int i=0; i<l; ++i)\n        for(int j=0; j<d; ++j) cin >> costs[i][j];\n    cout << minAllocationCost(licenses, datacenters, costs) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int l = sc.nextInt();\n        int[][] licenses = new int[l][2];\n        for(int i=0; i<l; i++) {\n            licenses[i][0] = sc.nextInt();\n            licenses[i][1] = sc.nextInt();\n        }\n        int d = sc.nextInt();\n        int[][] datacenters = new int[d][2];\n        for(int i=0; i<d; i++) {\n            datacenters[i][0] = sc.nextInt();\n            datacenters[i][1] = sc.nextInt();\n        }\n        int[][] costs = new int[l][d];\n        for(int i=0; i<l; i++)\n            for(int j=0; j<d; j++) costs[i][j] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minAllocationCost(licenses, datacenters, costs));\n    }\n}`
            }
        }]
    }]
};
