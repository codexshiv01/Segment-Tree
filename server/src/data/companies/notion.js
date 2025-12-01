export const notionData = {
    id: 'notion',
    name: 'Notion',
    logo: 'https://logo.clearbit.com/notion.so',
    description: 'Practice real Notion Online Assessment questions.',
    assessments: [{
        id: 'notion-oa-1',
        title: 'Notion OA-1',
        duration: 90,
        problems: [{
            id: 'block-hierarchy',
            title: 'Block Hierarchy Navigator',
            difficulty: 'Hard',
            description: `Notion stores content as nested blocks. Given block IDs and parent relationships, find the depth of a specific block.

You are given:
- blocks: List of [block_id, parent_id] where parent_id = 0 means root level
- target_id: Block ID to find depth for

Goal: Return the depth of target_id. Root level blocks have depth 1. Return -1 if target_id not found.

Input Format:
- blocks: List of lists [id, parent]
- target_id: Integer

Output Format:
- Return an integer

Constraints:
- 1 <= blocks.length <= 10000
- 1 <= block_id <= 100000
- 0 <= parent_id <= 100000
- No cycles`,
            examples: [
                { input: 'blocks = [[1,0],[2,1],[3,2],[4,1]], target_id = 3', output: '3' },
                { input: 'blocks = [[1,0],[2,0]], target_id = 2', output: '1' }
            ],
            testCases: [
                { input: 'blocks = [[1,0],[2,1],[3,2],[4,1]], target_id = 3', judgeInput: '4\n1 0\n2 1\n3 2\n4 1\n3', output: '3' },
                { input: 'blocks = [[1,0],[2,0]], target_id = 2', judgeInput: '2\n1 0\n2 0\n2', output: '1' },
                { input: 'blocks = [[5,0],[10,5],[15,10]], target_id = 15', judgeInput: '3\n5 0\n10 5\n15 10\n15', output: '3' },
                { input: 'blocks = [[1,0]], target_id = 1', judgeInput: '1\n1 0\n1', output: '1' },
                { input: 'blocks = [[1,0],[2,1],[3,2],[4,3],[5,4]], target_id = 5', judgeInput: '5\n1 0\n2 1\n3 2\n4 3\n5 4\n5', output: '5' },
                { input: 'blocks = [[1,0],[2,1]], target_id = 10', judgeInput: '2\n1 0\n2 1\n10', output: '-1' },
                { input: 'blocks = [[100,0],[200,100],[300,200],[400,200]], target_id = 400', judgeInput: '4\n100 0\n200 100\n300 200\n400 200\n400', output: '3' },
                { input: 'blocks = [[1,0],[2,0],[3,1],[4,2]], target_id = 1', judgeInput: '4\n1 0\n2 0\n3 1\n4 2\n1', output: '1' },
                { input: 'blocks = [[10,0],[20,10],[30,20],[40,30],[50,40],[60,50]], target_id = 60', judgeInput: '6\n10 0\n20 10\n30 20\n40 30\n50 40\n60 50\n60', output: '6' },
                { input: 'blocks = [[7,0],[14,7],[21,14]], target_id = 14', judgeInput: '3\n7 0\n14 7\n21 14\n14', output: '2' },
                { input: 'blocks = [[1,0],[2,1],[3,1],[4,1],[5,2]], target_id = 5', judgeInput: '5\n1 0\n2 1\n3 1\n4 1\n5 2\n5', output: '3' },
                { input: 'blocks = [[50,0],[100,50],[150,100],[200,100]], target_id = 200', judgeInput: '4\n50 0\n100 50\n150 100\n200 100\n200', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} blocks
 * @param {number} target_id
 * @return {number}
 */
function findDepth(blocks, target_id) {
    // Your code here
}`,
                python: `def find_depth(blocks, target_id):
    """
    :type blocks: List[List[int]]
    :type target_id: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int findDepth(vector<vector<int>>& blocks, int target_id) {
    // Your code here
}`,
                java: `public class Solution {
    public int findDepth(int[][] blocks, int target_id) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const blocks = [];\n    for(let i=1; i<=n; i++) blocks.push(lines[i].split(' ').map(Number));\n    const target_id = parseInt(lines[n+1]);\n    console.log(findDepth(blocks, target_id));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nblocks = []\nfor i in range(1, n+1):\n    blocks.append(list(map(int, lines[i].split())))\ntarget_id = int(lines[n+1])\nprint(find_depth(blocks, target_id))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint findDepth(vector<vector<int>>& blocks, int target_id);\nint main() {\n    int n, target_id;\n    cin >> n;\n    vector<vector<int>> blocks(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> blocks[i][0] >> blocks[i][1];\n    cin >> target_id;\n    cout << findDepth(blocks, target_id) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] blocks = new int[n][2];\n        for(int i=0; i<n; i++) {\n            blocks[i][0] = sc.nextInt();\n            blocks[i][1] = sc.nextInt();\n        }\n        int target_id = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.findDepth(blocks, target_id));\n    }\n}`
            }
        }, {
            id: 'database-query',
            title: 'Database Query Optimizer',
            difficulty: 'Medium',
            description: `Optimize database queries by determining the most efficient filter order. Apply filters with higher selectivity first.

You are given:
- filters: List of [filter_id, selectivity_percent, cost_ms]
- total_rows: Initial number of rows

Goal: Apply filters in order of selectivity/cost ratio (higher first) and return total execution time. After each filter, rows = rows * (1 - selectivity/100). Round result to 2 decimal places.

Input Format:
- filters: List of lists [id,selectivity, cost]
- total_rows: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= filters.length <= 20
- 1 <= selectivity_percent <= 100
- 1 <= cost_ms <= 1000
- 1 <= total_rows <= 1000000`,
            examples: [
                { input: 'filters = [[1,50,100],[2,90,50]], total_rows = 1000', output: '95.00' },
                { input: 'filters = [[1,10,10]], total_rows = 100', output: '10.00' }
            ],
            testCases: [
                { input: 'filters = [[1,50,100],[2,90,50]], total_rows = 1000', judgeInput: '2\n1 50 100\n2 90 50\n1000', output: '95.00' },
                { input: 'filters = [[1,10,10]], total_rows = 100', judgeInput: '1\n1 10 10\n100', output: '10.00' },
                { input: 'filters = [[1,80,40],[2,60,30],[3,40,20]], total_rows = 10000', judgeInput: '3\n1 80 40\n2 60 30\n3 40 20\n10000', output: '90.00' },
                { input: 'filters = [[1,90,100],[2,10,50]], total_rows = 5000', judgeInput: '2\n1 90 100\n2 10 50\n5000', output: '105.00' },
                { input: 'filters = [[1,30,60],[2,70,80]], total_rows = 2000', judgeInput: '2\n1 30 60\n2 70 80\n2000', output: '104.00' },
                { input: 'filters = [[1,50,50],[2,50,50],[3,50,50]], total_rows = 8000', judgeInput: '3\n1 50 50\n2 50 50\n3 50 50\n8000', output: '150.00' },
                { input: 'filters = [[1,95,200]], total_rows = 100000', judgeInput: '1\n1 95 200\n100000', output: '200.00' },
                { input: 'filters = [[1,20,40],[2,40,60],[3,60,80]], total_rows = 50000', judgeInput: '3\n1 20 40\n2 40 60\n3 60 80\n50000', output: '180.00' },
                { input: 'filters = [[1,100,500]], total_rows = 10000', judgeInput: '1\n1 100 500\n10000', output: '500.00' },
                { input: 'filters = [[1,75,150],[2,25,100]], total_rows = 20000', judgeInput: '2\n1 75 150\n2 25 100\n20000', output: '150.00' },
                { input: 'filters = [[1,55,110],[2,45,90],[3,35,70]], total_rows = 30000', judgeInput: '3\n1 55 110\n2 45 90\n3 35 70\n30000', output: '270.00' },
                { input: 'filters = [[1,85,170],[2,15,60]], total_rows = 15000', judgeInput: '2\n1 85 170\n2 15 60\n15000', output: '179.50' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} filters
 * @param {number} total_rows
 * @return {number}
 */
function optimizeQuery(filters, total_rows) {
    // Your code here
}`,
                python: `def optimize_query(filters, total_rows):
    """
    :type filters: List[List[int]]
    :type total_rows: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double optimizeQuery(vector<vector<int>>& filters, int total_rows) {
    // Your code here
}`,
                java: `public class Solution {
    public double optimizeQuery(int[][] filters, int total_rows) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const filters = [];\n    for(let i=1; i<=n; i++) filters.push(lines[i].split(' ').map(Number));\n    const total_rows = parseInt(lines[n+1]);\n    console.log(optimizeQuery(filters, total_rows).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nfilters = []\nfor i in range(1, n+1):\n    filters.append(list(map(int, lines[i].split())))\ntotal_rows = int(lines[n+1])\nprint(f'{optimize_query(filters, total_rows):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble optimizeQuery(vector<vector<int>>& filters, int total_rows);\nint main() {\n    int n, total_rows;\n    cin >> n;\n    vector<vector<int>> filters(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> filters[i][0] >> filters[i][1] >> filters[i][2];\n    cin >> total_rows;\n    cout << fixed << setprecision(2) << optimizeQuery(filters, total_rows) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] filters = new int[n][3];\n        for(int i=0; i<n; i++) {\n            filters[i][0] = sc.nextInt();\n            filters[i][1] = sc.nextInt();\n            filters[i][2] = sc.nextInt();\n        }\n        int total_rows = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.optimizeQuery(filters, total_rows));\n    }\n}`
            }
        }]
    }]
};
