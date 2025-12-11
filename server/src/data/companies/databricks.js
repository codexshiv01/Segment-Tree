export const databricksData = {
    id: 'databricks',
    name: 'Databricks',
    logo: 'https://logo.clearbit.com/databricks.com',
    description: 'Practice real Databricks Online Assessment questions.',
    assessments: [{
        id: 'databricks-oa-1',
        title: 'Databricks OA-1',
        duration: 90,
        problems: [{
            id: 'parquet-column-pruning',
            title: 'Parquet Column Pruning Optimizer',
            difficulty: 'Hard',
            description: `Optimize Parquet file reads by determining which column groups to load based on query predicates and column dependencies.

You are given:
- schema: List of [column_id, column_group, size_mb]
- query_columns: List of column IDs needed by the query
- dependencies: List of [col_a, col_b] meaning col_a depends on col_b

Goal: Find minimum set of Column groups to load. A column group must be loaded if: (1) it contains a query column, OR (2) it contains a column that a query column depends on (transitively). Return total size in MB of groups to load.

Input Format:
- schema: List of lists [col_id, group_id, size_mb]
- query_columns: List of integers
- dependencies: List of pairs [col_a, col_b]

Output Format:
- Return an integer (total MB)

Constraints:
- 1 <= schema.length <= 1000
- 1 <= group_id <= 100
- 1 <= size_mb <= 1000
- 0 <= dependencies.length <= 1000`,
            examples: [
                { input: 'schema = [[1,1,10],[2,1,10],[3,2,20]], query_columns = [1], dependencies = []', output: '20' },
                { input: 'schema = [[1,1,10],[2,2,15],[3,3,20]], query_columns = [1,3], dependencies = [[1,2]]', output: '45' }
            ],
            testCases: [
                { input: 'schema = [[1,1,10],[2,1,10],[3,2,20]], query_columns = [1], dependencies = []', judgeInput: '3\n1 1 10\n2 1 10\n3 2 20\n1\n1\n0', output: '20' },
                { input: 'schema =  [[1,1,10],[2,2,15],[3,3,20]], query_columns = [1,3], dependencies = [[1,2]]', judgeInput: '3\n1 1 10\n2 2 15\n3 3 20\n2\n1 3\n1\n1 2', output: '45' },
                { input: 'schema = [[1,1,50],[2,2,30],[3,3,40]], query_columns = [3], dependencies = []', judgeInput: '3\n1 1 50\n2 2 30\n3 3 40\n1\n3\n0', output: '40' },
                { input: 'schema = [[1,1,10],[2,1,10],[3,2,20],[4,3,30]], query_columns = [1,4], dependencies = []', judgeInput: '4\n1 1 10\n2 1 10\n3 2 20\n4 3 30\n2\n1 4\n0', output: '50' },
                { input: 'schema = [[1,1,10],[2,2,20],[3,3,30]], query_columns = [1], dependencies = [[1,2],[2,3]]', judgeInput: '3\n1 1 10\n2 2 20\n3 3 30\n1\n1\n2\n1 2\n2 3', output: '60' },
                { input: 'schema = [[1,1,100],[2,2,100],[3,2,100]], query_columns = [1,2], dependencies = []', judgeInput: '3\n1 1 100\n2 2 100\n3 2 100\n2\n1 2\n0', output: '300' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} schema
 * @param {number[]} query_columns
 * @param {number[][]} dependencies
 * @return {number}
 */
function minColumnLoad(schema, query_columns, dependencies) {
    // Your code here
}`,
                python: `def min_column_load(schema, query_columns, dependencies):
    """
    :type schema: List[List[int]]
    :type query_columns: List[int]
    :type dependencies: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minColumnLoad(vector<vector<int>>& schema, vector<int>& query_columns, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int minColumnLoad(int[][] schema, int[] query_columns, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const schema = [];\n    for(let i=1; i<=n; i++) schema.push(lines[i].split(' ').map(Number));\n    const q = parseInt(lines[n+1]);\n    const query_columns = lines[n+2].split(' ').map(Number);\n    const d = parseInt(lines[n+3]);\n    const dependencies = [];\n    for(let i=n+4; i<n+4+d; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(minColumnLoad(schema, query_columns, dependencies));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nschema = []\nfor i in range(1, n+1):\n    schema.append(list(map(int, lines[i].split())))\nq = int(lines[n+1])\nquery_columns = list(map(int, lines[n+2].split()))\nd = int(lines[n+3])\ndependencies = []\nfor i in range(n+4, n+4+d):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(min_column_load(schema, query_columns, dependencies))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minColumnLoad(vector<vector<int>>& schema, vector<int>& query_columns, vector<vector<int>>& dependencies);\nint main() {\n    int n, q, d;\n    cin >> n;\n    vector<vector<int>> schema(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> schema[i][0] >> schema[i][1] >> schema[i][2];\n    cin >> q;\n    vector<int> query_columns(q);\n    for(int i=0; i<q; ++i) cin >> query_columns[i];\n    cin >> d;\n    vector<vector<int>> dependencies(d, vector<int>(2));\n    for(int i=0; i<d; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    cout << minColumnLoad(schema, query_columns, dependencies) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] schema = new int[n][3];\n        for(int i=0; i<n; i++) {\n            schema[i][0] = sc.nextInt();\n            schema[i][1] = sc.nextInt();\n            schema[i][2] = sc.nextInt();\n        }\n        int q = sc.nextInt();\n        int[] query_columns = new int[q];\n        for(int i=0; i<q; i++) query_columns[i] = sc.nextInt();\n        int d = sc.nextInt();\n        int[][] dependencies = new int[d][2];\n        for(int i=0; i<d; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.minColumnLoad(schema, query_columns, dependencies));\n    }\n}`
            }
        }, {
            id: 'delta-lake-compaction',
            title: 'Delta Lake File Compaction Scheduler',
            difficulty: 'Hard',
            description: `Schedule Delta Lake file compaction jobs to minimize total read cost. Small files increase read overhead.

You are given:
- files: List of [file_id, size_mb, read_frequency]
- target_size: Target file size after compaction (MB)
- compaction_cost: Cost per MB to compact

Goal: Group files to compact into target size to minimize total_cost = read_overhead_cost + compaction_cost. Read overhead for a file = (target_size - size) * read_frequency * 0.001. Only compact files smaller than target size. Return minimum total cost rounded to 2 decimal places.

Input Format:
- files: List of lists [id, size, freq]
- target_size: Integer
- compaction_cost: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= files.length <= 1000
- 1 <= size <= target_size
- 1 <= read_frequency <= 1000
- 1 <= target_size <= 1000
- 0.01 <= compaction_cost <= 1.0`,
            examples: [
                { input: 'files = [[1,10,100],[2,15,50]], target_size = 20, compaction_cost = 0.1', output: '2.50' },
                { input: 'files = [[1,20,100]], target_size = 20, compaction_cost = 0.1', output: '0.00' }
            ],
            testCases: [
                { input: 'files = [[1,10,100],[2,15,50]], target_size = 20, compaction_cost = 0.1', judgeInput: '2\n1 10 100\n2 15 50\n20\n0.1', output: '2.50' },
                { input: 'files = [[1,20,100]], target_size = 20, compaction_cost = 0.1', judgeInput: '1\n1 20 100\n20\n0.1', output: '0.00' },
                { input: 'files = [[1,5,200],[2,5,200],[3,5,200]], target_size = 15, compaction_cost = 0.05', judgeInput: '3\n1 5 200\n2 5 200\n3 5 200\n15\n0.05', output: '0.75' },
                { input: 'files = [[1,10,50],[2,12,30]], target_size = 25, compaction_cost = 0.2', judgeInput: '2\n1 10 50\n2 12 30\n25\n0.2', output: '4.40' },
                { input: 'files = [[1,50,100],[2,60,50],[3,70,30]], target_size = 100, compaction_cost = 0.1', judgeInput: '3\n1 50 100\n2 60 50\n3 70 30\n100\n0.1', output: '18.00' },
                { input: 'files = [[1,100,100]], target_size = 100, compaction_cost = 0.5', judgeInput: '1\n1 100 100\n100\n0.5', output: '0.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} files
 * @param {number} target_size
 * @param {number} compaction_cost
 * @return {number}
 */
function minCompactionCost(files, target_size, compaction_cost) {
    // Your code here
}`,
                python: `def min_compaction_cost(files, target_size, compaction_cost):
    """
    :type files: List[List[int]]
    :type target_size: int
    :type compaction_cost: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double minCompactionCost(vector<vector<int>>& files, int target_size, double compaction_cost) {
    // Your code here
}`,
                java: `public class Solution {
    public double minCompactionCost(int[][] files, int target_size, double compaction_cost) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const files = [];\n    for(let i=1; i<=n; i++) files.push(lines[i].split(' ').map(Number));\n    const target_size = parseInt(lines[n+1]);\n    const compaction_cost = parseFloat(lines[n+2]);\n    console.log(minCompactionCost(files, target_size, compaction_cost).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nfiles = []\nfor i in range(1, n+1):\n    files.append(list(map(int, lines[i].split())))\ntarget_size = int(lines[n+1])\ncompaction_cost = float(lines[n+2])\nprint(f'{min_compaction_cost(files, target_size, compaction_cost):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble minCompactionCost(vector<vector<int>>& files, int target_size, double compaction_cost);\nint main() {\n    int n, target_size;\n    double compaction_cost;\n    cin >> n;\n    vector<vector<int>> files(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> files[i][0] >> files[i][1] >> files[i][2];\n    cin >> target_size >> compaction_cost;\n    cout << fixed << setprecision(2) << minCompactionCost(files, target_size, compaction_cost) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] files = new int[n][3];\n        for(int i=0; i<n; i++) {\n            files[i][0] = sc.nextInt();\n            files[i][1] = sc.nextInt();\n            files[i][2] = sc.nextInt();\n        }\n        int target_size = sc.nextInt();\n        double compaction_cost = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.minCompactionCost(files, target_size, compaction_cost));\n    }\n}`
            }
        }]
    }]
};
