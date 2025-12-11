export const figmaData = {
    id: 'figma',
    name: 'Figma',
    logo: 'https://logo.clearbit.com/figma.com',
    description: 'Practice real Figma Online Assessment questions.',
    assessments: [{
        id: 'figma-oa-1',
        title: 'Figma OA-1',
        duration: 90,
        problems: [{
            id: 'layer-ordering',
            title: 'Design Layer Z-Index Manager',
            difficulty: 'Hard',
            description: `Manage z-index ordering for design layers with constraints.

You are given:
- layers: List of [layer_id, parent_id, z_index] where parent_id=0 means root

Goal: Layers with same parent must have unique z-index values. Return count of layers with conflicts (duplicate z-index under same parent).

Input Format:
- layers: List of lists [id, parent, z]

Output Format:
- Return an integer (count of conflicting layers)

Constraints:
- 1 <= layers.length <= 1000
- 0 <= parent_id <= 1000
- 1 <= z_index <= 10000`,
            examples: [
                { input: 'layers = [[1,0,1],[2,0,1],[3,1,1]]', output: '2' },
                { input: 'layers = [[1,0,1],[2,0,2]]', output: '0' }
            ],
            testCases: [
                { input: 'layers = [[1,0,1],[2,0,1],[3,1,1]]', judgeInput: '3\n1 0 1\n2 0 1\n3 1 1', output: '2' },
                { input: 'layers = [[1,0,1],[2,0,2]]', judgeInput: '2\n1 0 1\n2 0 2', output: '0' },
                { input: 'layers = [[1,0,1],[2,0,2],[3,0,1]]', judgeInput: '3\n1 0 1\n2 0 2\n3 0 1', output: '2' },
                { input: 'layers = [[1,5,1],[2,5,1],[3,5,2]]', judgeInput: '3\n1 5 1\n2 5 1\n3 5 2', output: '2' },
                { input: 'layers = [[1,0,10],[2,0,20],[3,0,30]]', judgeInput: '3\n1 0 10\n2 0 20\n3 0 30', output: '0' },
                { input: 'layers = [[1,1,5],[2,1,5],[3,2,5]]', judgeInput: '3\n1 1 5\n2 1 5\n3 2 5', output: '2' },
                { input: 'layers = [[1,0,100],[2,0,100],[3,0,100]]', judgeInput: '3\n1 0 100\n2 0 100\n3 0 100', output: '3' },
                { input: 'layers = [[1,10,1],[2,20,1],[3,30,1]]', judgeInput: '3\n1 10 1\n2 20 1\n3 30 1', output: '0' },
                { input: 'layers = [[1,7,50],[2,7,60],[3,7,50],[4,7,60]]', judgeInput: '4\n1 7 50\n2 7 60\n3 7 50\n4 7 60', output: '4' },
                { input: 'layers = [[1,0,1],[2,1,1],[3,2,1]]', judgeInput: '3\n1 0 1\n2 1 1\n3 2 1', output: '0' },
                { input: 'layers = [[1,3,25],[2,3,25],[3,3,30],[4,3,25]]', judgeInput: '4\n1 3 25\n2 3 25\n3 3 30\n4 3 25', output: '3' },
                { input: 'layers = [[1,0,5],[2,0,10],[3,0,15],[4,0,20]]', judgeInput: '4\n1 0 5\n2 0 10\n3 0 15\n4 0 20', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} layers
 * @return {number}
 */
function conflictCount(layers) {
    // Your code here
}`,
                python: `def conflict_count(layers):
    """
    :type layers: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int conflictCount(vector<vector<int>>& layers) {
    // Your code here
}`,
                java: `public class Solution {
    public int conflictCount(int[][] layers) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const layers = [];\n    for(let i=1; i<=n; i++) layers.push(lines[i].split(' ').map(Number));\n    console.log(conflictCount(layers));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nlayers = []\nfor i in range(1, n+1):\n    layers.append(list(map(int, lines[i].split())))\nprint(conflict_count(layers))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint conflictCount(vector<vector<int>>& layers);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> layers(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> layers[i][0] >> layers[i][1] >> layers[i][2];\n    cout << conflictCount(layers) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] layers = new int[n][3];\n        for(int i=0; i<n; i++) {\n            layers[i][0] = sc.nextInt();\n            layers[i][1] = sc.nextInt();\n            layers[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.conflictCount(layers));\n    }\n}`
            }
        }, {
            id: 'version-control',
            title: 'Design Version Merger',
            difficulty: 'Medium',
            description: `Merge design file versions and count conflicts.

You are given:
- changes: List of [version_id, element_id, property]

Goal: Count conflicts where same element_id appears in multiple versions.

Input Format:
- changes: List of lists [version, element, property]

Output Format:
- Return an integer (count of elements with conflicts)

Constraints:
- 1 <= changes.length <= 1000
- 1 <= version_id, element_id, property <= 10000`,
            examples: [
                { input: 'changes = [[1,100,1],[2,100,2],[3,200,3]]', output: '1' },
                { input: 'changes = [[1,100,1],[1,200,2]]', output: '0' }
            ],
            testCases: [
                { input: 'changes = [[1,100,1],[2,100,2],[3,200,3]]', judgeInput: '3\n1 100 1\n2 100 2\n3 200 3', output: '1' },
                { input: 'changes = [[1,100,1],[1,200,2]]', judgeInput: '2\n1 100 1\n1 200 2', output: '0' },
                { input: 'changes = [[1,50,1],[2,50,2],[3,50,3]]', judgeInput: '3\n1 50 1\n2 50 2\n3 50 3', output: '1' },
                { input: 'changes = [[1,10,5],[2,20,5],[3,30,5]]', judgeInput: '3\n1 10 5\n2 20 5\n3 30 5', output: '0' },
                { input: 'changes = [[1,75,10],[2,75,20]]', judgeInput: '2\n1 75 10\n2 75 20', output: '1' },
                { input: 'changes = [[1,40,1],[2,40,2],[1,50,3],[2,50,4]]', judgeInput: '4\n1 40 1\n2 40 2\n1 50 3\n2 50 4', output: '2' },
                { input: 'changes = [[1,150,100],[1,160,200],[1,170,300]]', judgeInput: '3\n1 150 100\n1 160 200\n1 170 300', output: '0' },
                { input: 'changes = [[1,25,15],[2,25,25],[3,25,35]]', judgeInput: '3\n1 25 15\n2 25 25\n3 25 35', output: '1' },
                { input: 'changes = [[1,80,40],[2,90,50],[3,100,60]]', judgeInput: '3\n1 80 40\n2 90 50\n3 100 60', output: '0' },
                { input: 'changes = [[1,300,100],[2,300,200],[3,400,300]]', judgeInput: '3\n1 300 100\n2 300 200\n3 400 300', output: '1' },
                { input: 'changes = [[1,120,60],[2,120,70],[3,120,80],[4,120,90]]', judgeInput: '4\n1 120 60\n2 120 70\n3 120 80\n4 120 90', output: '1' },
                { input: 'changes = [[1,500,1000],[2,600,2000],[1,700,3000]]', judgeInput: '3\n1 500 1000\n2 600 2000\n1 700 3000', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} changes
 * @return {number}
 */
function conflictingElements(changes) {
    // Your code here
}`,
                python: `def conflicting_elements(changes):
    """
    :type changes: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int conflictingElements(vector<vector<int>>& changes) {
    // Your code here
}`,
                java: `public class Solution {
    public int conflictingElements(int[][] changes) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const changes = [];\n    for(let i=1; i<=n; i++) changes.push(lines[i].split(' ').map(Number));\n    console.log(conflictingElements(changes));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nchanges = []\nfor i in range(1, n+1):\n    changes.append(list(map(int, lines[i].split())))\nprint(conflicting_elements(changes))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint conflictingElements(vector<vector<int>>& changes);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> changes(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> changes[i][0] >> changes[i][1] >> changes[i][2];\n    cout << conflictingElements(changes) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] changes = new int[n][3];\n        for(int i=0; i<n; i++) {\n            changes[i][0] = sc.nextInt();\n            changes[i][1] = sc.nextInt();\n           changes[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.conflictingElements(changes));\n    }\n}`
            }
        }]
    }]
};
