export const rubrikData = {
    id: 'rubrik',
    name: 'Rubrik',
    logo: 'https://logo.clearbit.com/rubrik.com',
    description: 'Practice real Rubrik Online Assessment questions.',
    assessments: [{
        id: 'rubrik-oa-1',
        title: 'Rubrik OA-1',
        duration: 90,
        problems: [{
            id: 'backup-dedup',
            title: 'Backup Data Deduplication',
            difficulty: 'Medium',
            description: `Problem Description
Rubrik's backup system uses deduplication to save storage space. Given a list of data blocks with their hash values, identify which blocks are duplicates.

You are given:
- \`blocks\`: A list of \`[block_id, hash, size]\` representing data blocks.
  - \`block_id\`: Unique identifier for the block.
  - \`hash\`: Content hash of the block.
  - \`size\`: Size of the block in KB.

**Goal:**
Calculate the total storage saved by deduplication. For each unique hash, only one block needs to be stored. Return the total size (in KB) that can be saved.

### Input Format
- \`blocks\`: List of lists \`[block_id, hash, size]\`

### Output Format
- Return an integer representing total KB saved.

### Constraints
- \`1 <= blocks.length <= 1000\`
- \`1 <= block_id, hash, size <= 10^6\``,
            examples: [
                { input: 'blocks = [[1,100,50],[2,100,50],[3,200,30]]', output: '50' },
                { input: 'blocks = [[1,5,100],[2,5,100],[3,5,100],[4,10,50]]', output: '200' }
            ],
            testCases: [
                { input: 'blocks = [[1,100,50],[2,100,50],[3,200,30]]', judgeInput: '3\n1 100 50\n2 100 50\n3 200 30', output: '50' },
                { input: 'blocks = [[1,5,100],[2,5,100],[3,5,100],[4,10,50]]', judgeInput: '4\n1 5 100\n2 5 100\n3 5 100\n4 10 50', output: '200' },
                { input: 'blocks = [[1,1,10],[2,2,20],[3,3,30]]', judgeInput: '3\n1 1 10\n2 2 20\n3 3 30', output: '0' },
                { input: 'blocks = [[1,999,1000]]', judgeInput: '1\n1 999 1000', output: '0' },
                { input: 'blocks = [[1,7,25],[2,7,25],[3,7,25],[4,7,25]]', judgeInput: '4\n1 7 25\n2 7 25\n3 7 25\n4 7 25', output: '75' },
                { input: 'blocks = [[1,10,100],[2,20,200],[3,10,100]]', judgeInput: '3\n1 10 100\n2 20 200\n3 10 100', output: '100' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} blocks
 * @return {number}
 */
function calculateDedupSavings(blocks) {
    // Your code here
}`,
                python: `def calculate_dedup_savings(blocks):
    """
    :type blocks: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

long long calculateDedupSavings(vector<vector<int>>& blocks) {
    // Your code here
}`,
                java: `public class Solution {
    public long calculateDedupSavings(int[][] blocks) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const blocks = [];\n    for(let i=1; i<=n; i++) blocks.push(lines[i].split(' ').map(Number));\n    console.log(calculateDedupSavings(blocks));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nblocks = []\nfor i in range(1, n+1):\n    blocks.append(list(map(int, lines[i].split())))\nprint(calculate_dedup_savings(blocks))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nlong long calculateDedupSavings(vector<vector<int>>& blocks);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> blocks(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> blocks[i][0] >> blocks[i][1] >> blocks[i][2];\n    cout << calculateDedupSavings(blocks) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] blocks = new int[n][3];\n        for(int i=0; i<n; i++) {\n            blocks[i][0] = sc.nextInt();\n            blocks[i][1] = sc.nextInt();\n            blocks[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.calculateDedupSavings(blocks));\n    }\n}`
            }
        }, {
            id: 'snapshot-retention',
            title: 'Snapshot Retention Policy Optimizer',
            difficulty: 'Hard',
            description: `Problem Description
Rubrik maintains snapshots of data with different retention policies. Given a list of snapshots, determine which snapshots to delete to meet storage constraints while maximizing data retention.

You are given:
- \`snapshots\`: A list of \`[snapshot_id, timestamp, size, priority]\`.
  - \`snapshot_id\`: Unique ID.
  - \`timestamp\`: When the snapshot was created (in days).
  - \`size\`: Size in GB.
  - \`priority\`: Retention priority (higher = more important).
- \`max_storage\`: Maximum total storage allowed (in GB).

**Goal:**
Select a subset of snapshots such that:
1. Total size <= \`max_storage\`
2. The sum of priorities is maximized

Return the maximum sum of priorities achievable.

### Input Format
- \`snapshots\`: List of lists \`[snapshot_id, timestamp, size, priority]\`
- \`max_storage\`: Integer

### Output Format
- Return an integer representing the maximum sum of priorities.

### Constraints
- \`1 <= snapshots.length <= 200\`
- \`1 <= size, priority, max_storage <= 1000\``,
            examples: [
                { input: 'snapshots = [[1,1,10,50],[2,2,20,100],[3,3,30,150]], max_storage = 40', output: '200' },
                { input: 'snapshots = [[1,1,50,100],[2,2,60,120]], max_storage = 100', output: '220' }
            ],
            testCases: [
                { input: 'snapshots = [[1,1,10,50],[2,2,20,100],[3,3,30,150]], max_storage = 40', judgeInput: '3\n1 1 10 50\n2 2 20 100\n3 3 30 150\n40', output: '200' },
                { input: 'snapshots = [[1,1,50,100],[2,2,60,120]], max_storage = 100', judgeInput: '2\n1 1 50 100\n2 2 60 120\n100', output: '220' },
                { input: 'snapshots = [[1,1,100,500]], max_storage = 50', judgeInput: '1\n1 1 100 500\n50', output: '0' },
                { input: 'snapshots = [[1,1,10,10],[2,2,10,20],[3,3,10,30]], max_storage = 25', judgeInput: '3\n1 1 10 10\n2 2 10 20\n3 3 10 30\n25', output: '50' },
                { input: 'snapshots = [[1,1,50,100],[2,2,50,150],[3,3,50,200]], max_storage = 150', judgeInput: '3\n1 1 50 100\n2 2 50 150\n3 3 50 200\n150', output: '450' },
                { input: 'snapshots = [[1,1,20,80],[2,2,30,90],[3,3,40,100]], max_storage = 60', judgeInput: '3\n1 1 20 80\n2 2 30 90\n3 3 40 100\n60', output: '180' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} snapshots
 * @param {number} max_storage
 * @return {number}
 */
function maxRetentionPriority(snapshots, max_storage) {
    // Your code here
}`,
                python: `def max_retention_priority(snapshots, max_storage):
    """
    :type snapshots: List[List[int]]
    :type max_storage: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxRetentionPriority(vector<vector<int>>& snapshots, int max_storage) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxRetentionPriority(int[][] snapshots, int max_storage) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const snapshots = [];\n    for(let i=1; i<=n; i++) snapshots.push(lines[i].split(' ').map(Number));\n    const max_storage = parseInt(lines[n+1]);\n    console.log(maxRetentionPriority(snapshots, max_storage));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nsnapshots = []\nfor i in range(1, n+1):\n    snapshots.append(list(map(int, lines[i].split())))\nmax_storage = int(lines[n+1])\nprint(max_retention_priority(snapshots, max_storage))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxRetentionPriority(vector<vector<int>>& snapshots, int max_storage);\nint main() {\n    int n, max_storage;\n    cin >> n;\n    vector<vector<int>> snapshots(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> snapshots[i][0] >> snapshots[i][1] >> snapshots[i][2] >> snapshots[i][3];\n    cin >> max_storage;\n    cout << maxRetentionPriority(snapshots, max_storage) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] snapshots = new int[n][4];\n        for(int i=0; i<n; i++) {\n            snapshots[i][0] = sc.nextInt();\n            snapshots[i][1] = sc.nextInt();\n            snapshots[i][2] = sc.nextInt();\n            snapshots[i][3] = sc.nextInt();\n        }\n        int max_storage = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxRetentionPriority(snapshots, max_storage));\n    }\n}`
            }
        }]
    }]
};
