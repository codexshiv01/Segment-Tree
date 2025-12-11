export const airtableData = {
    id: 'airtable',
    name: 'Airtable',
    logo: 'https://logo.clearbit.com/airtable.com',
    description: 'Practice real Airtable Online Assessment questions.',
    assessments: [{
        id: 'airtable-oa-1',
        title: 'Airtable OA-1',
        duration: 90,
        problems: [{
            id: 'formula-evaluator',
            title: 'Spreadsheet Formula Engine',
            difficulty: 'Hard',
            description: `Evaluate cell formulas with dependencies.

You are given:
- formulas: List of [cell_id, formula_string, dependencies] where dependencies is list of cell_ids

Goal: Process formulas in dependency order. For each formula: if it contains "SUM", sum values from dependency cells; if "AVG", average them. Return sum of all final cell values.

Input Format:
- formulas: List of lists [id, type, dep1, dep2, ...]  where type: 0=SUM, 1=AVG, or value if no dependencies

Output Format:
- Return an integer (sum of all cell values)

Constraints:
- 1 <= formulas.length <= 100
- 0 <= cell_value <= 10000
- No circular dependencies`,
            examples: [
                { input: 'formulas = [[1,10],[2,20],[3,0,1,2]]', output: '60' },
                { input: 'formulas = [[1,5]]', output: '5' }
            ],
            testCases: [
                { input: 'formulas = [[1,10],[2,20],[3,0,1,2]]', judgeInput: '3\n1 10\n2 20\n3 0 1 2', output: '60' },
                { input: 'formulas = [[1,5]]', judgeInput: '1\n1 5', output: '5' },
                { input: 'formulas = [[1,15],[2,25],[3,1,1,2]]', judgeInput: '3\n1 15\n2 25\n3 1 1 2', output: '60' },
                { input: 'formulas = [[1,100],[2,200],[3,0,1,2],[4,0,3]]', judgeInput: '4\n1 100\n2 200\n3 0 1 2\n4 0 3', output: '900' },
                { input: 'formulas = [[1,30]]', judgeInput: '1\n1 30', output: '30' },
                { input: 'formulas = [[1,50],[2,60],[3,70]]', judgeInput: '3\n1 50\n2 60\n3 70', output: '180' },
                { input: 'formulas = [[1,10],[2,10],[3,1,1,2]]', judgeInput: '3\n1 10\n2 10\n3 1 1 2', output: '30' },
                { input: 'formulas = [[1,20],[2,30],[3,40],[4,0,1,2,3]]', judgeInput: '4\n1 20\n2 30\n3 40\n4 0 1 2 3', output: '180' },
                { input: 'formulas = [[1,100],[2,0,1],[3,0,1,2]]', judgeInput: '3\n1 100\n2 0 1\n3 0 1 2', output: '300' },
                { input: 'formulas = [[1,25],[2,25],[3,25],[4,1,1,2,3]]', judgeInput: '4\n1 25\n2 25\n3 25\n4 1 1 2 3', output: '100' },
                { input: 'formulas = [[1,80],[2,90],[3,0,1,2],[4,1,1,2]]', judgeInput: '4\n1 80\n2 90\n3 0 1 2\n4 1 1 2', output: '425' },
                { input: 'formulas = [[1,40],[2,50],[3,60],[4,0,1,2],[5,0,3,4]]', judgeInput: '5\n1 40\n2 50\n3 60\n4 0 1 2\n5 0 3 4', output: '390' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} formulas
 * @return {number}
 */
function evaluateFormulas(formulas) {
    // Your code here
}`,
                python: `def evaluate_formulas(formulas):
    """
    :type formulas: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int evaluateFormulas(vector<vector<int>>& formulas) {
    // Your code here
}`,
                java: `public class Solution {
    public int evaluateFormulas(int[][] formulas) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const formulas = [];\n    for(let i=1; i<=n; i++) formulas.push(lines[i].split(' ').map(Number));\n    console.log(evaluateFormulas(formulas));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nformulas = []\nfor i in range(1, n+1):\n    formulas.append(list(map(int, lines[i].split())))\nprint(evaluate_formulas(formulas))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\nint evaluateFormulas(vector<vector<int>>& formulas);\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    vector<vector<int>> formulas(n);\n    for(int i=0; i<n; ++i) {\n        string line;\n        getline(cin, line);\n        istringstream iss(line);\n        int val;\n        while(iss >> val) formulas[i].push_back(val);\n    }\n    cout << evaluateFormulas(formulas) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        int[][] formulas = new int[n][];\n        for(int i=0; i<n; i++) {\n            String line = sc.nextLine();\n            String[] parts = line.split(" ");\n            formulas[i] = new int[parts.length];\n            for(int j=0; j<parts.length; j++) {\n                formulas[i][j] = Integer.parseInt(parts[j]);\n            }\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.evaluateFormulas(formulas));\n    }\n}`
            }
        }, {
            id: 'record-sync',
            title: 'Multi-Table Record Synchronizer',
            difficulty: 'Medium',
            description: `Sync records across linked tables.

You are given:
- records: List of [record_id, table_id, version]
- links: List of [record1, record2] representing linked records

Goal: Two linked records conflict if they have different versions. Return count of conflicting record pairs.

Input Format:
- records: List of lists [id, table, version]
- links: List of lists [record1, record2]

Output Format:
- Return an integer (count of conflicts)

Constraints:
- 1 <= records.length <= 1000
- 0 <= links.length <= 10000
- 1 <= version <= 1000`,
            examples: [
                { input: 'records = [[1,1,5],[2,1,5],[3,2,6]], links = [[1,2],[1,3]]', output: '1' },
                { input: 'records = [[1,1,10],[2,1,10]], links = [[1,2]]', output: '0' }
            ],
            testCases: [
                { input: 'records = [[1,1,5],[2,1,5],[3,2,6]], links = [[1,2],[1,3]]', judgeInput: '3\n1 1 5\n2 1 5\n3 2 6\n2\n1 2\n1 3', output: '1' },
                { input: 'records = [[1,1,10],[2,1,10]], links = [[1,2]]', judgeInput: '2\n1 1 10\n2 1 10\n1\n1 2', output: '0' },
                { input: 'records = [[1,1,3],[2,1,4],[3,1,5]], links = [[1,2],[2,3]]', judgeInput: '3\n1 1 3\n2 1 4\n3 1 5\n2\n1 2\n2 3', output: '2' },
                { input: 'records = [[1,1,100],[2,2,200]], links = [[1,2]]', judgeInput: '2\n1 1 100\n2 2 200\n1\n1 2', output: '1' },
                { input: 'records = [[1,1,50]], links = []', judgeInput: '1\n1 1 50\n0', output: '0' },
                { input: 'records = [[1,1,7],[2,1,7],[3,1,7]], links = [[1,2],[2,3],[1,3]]', judgeInput: '3\n1 1 7\n2 1 7\n3 1 7\n3\n1 2\n2 3\n1 3', output: '0' },
                { input: 'records = [[1,1,15],[2,1,25],[3,1,35]], links = [[1,2],[1,3]]', judgeInput: '3\n1 1 15\n2 1 25\n3 1 35\n2\n1 2\n1 3', output: '2' },
                { input: 'records = [[1,1,80],[2,2,80],[3,3,90]], links = [[1,2],[2,3]]', judgeInput: '3\n1 1 80\n2 2 80\n3 3 90\n2\n1 2\n2 3', output: '1' },
                { input: 'records = [[1,1,40],[2,1,50]], links = [[1,2]]', judgeInput: '2\n1 1 40\n2 1 50\n1\n1 2', output: '1' },
                { input: 'records = [[1,1,60],[2,1,60],[3,1,70],[4,1,70]], links = [[1,2],[3,4]]', judgeInput: '4\n1 1 60\n2 1 60\n3 1 70\n4 1 70\n2\n1 2\n3 4', output: '0' },
                { input: 'records = [[1,1,20],[2,1,30],[3,1,40]], links = [[1,2],[2,3],[1,3]]', judgeInput: '3\n1 1 20\n2 1 30\n3 1 40\n3\n1 2\n2 3\n1 3', output: '3' },
                { input: 'records = [[1,1,100],[2,1,100],[3,1,100],[4,1,100]], links = [[1,2],[2,3],[3,4],[1,4]]', judgeInput: '4\n1 1 100\n2 1 100\n3 1 100\n4 1 100\n4\n1 2\n2 3\n3 4\n1 4', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} records
 * @param {number[][]} links
 * @return {number}
 */
function conflictCount(records, links) {
    // Your code here
}`,
                python: `def conflict_count(records, links):
    """
    :type records: List[List[int]]
    :type links: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int conflictCount(vector<vector<int>>& records, vector<vector<int>>& links) {
    // Your code here
}`,
                java: `public class Solution {
    public int conflictCount(int[][] records, int[][] links) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const records = [];\n    for(let i=1; i<=n; i++) records.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const links = [];\n    for(let i=n+2; i<n+2+m; i++) links.push(lines[i].split(' ').map(Number));\n    console.log(conflictCount(records, links));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrecords = []\nfor i in range(1, n+1):\n    records.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nlinks = []\nfor i in range(n+2, n+2+m):\n    links.append(list(map(int, lines[i].split())))\nprint(conflict_count(records, links))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint conflictCount(vector<vector<int>>& records, vector<vector<int>>& links);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> records(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> records[i][0] >> records[i][1] >> records[i][2];\n    cin >> m;\n    vector<vector<int>> links(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> links[i][0] >> links[i][1];\n    cout << conflictCount(records, links) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] records = new int[n][3];\n        for(int i=0; i<n; i++) {\n            records[i][0] = sc.nextInt();\n            records[i][1] = sc.nextInt();\n            records[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] links = new int[m][2];\n        for(int i=0; i<m; i++) {\n            links[i][0] = sc.nextInt();\n            links[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.conflictCount(records, links));\n    }\n}`
            }
        }]
    }]
};
