export const coindcxData = {
    id: 'coindcx',
    name: 'CoinDCX',
    logo: 'https://logo.clearbit.com/coindcx.com',
    description: 'Practice real CoinDCX Online Assessment questions.',
    assessments: [{
        id: 'coindcx-oa-1',
        title: 'CoinDCX OA-1',
        duration: 90,
        problems: [{
            id: 'cross-chain-liquidity',
            title: 'Cross-Chain Bridge Liquidity',
            difficulty: 'Hard',
            description: `You are designing a cross-chain bridge to move assets between blockchains.
The network is a graph where nodes are blockchains and edges are bridges with liquidity capacities.

You are given:
- \`n\`: Number of chains (0 to n-1).
- \`bridges\`: List of \`[u, v, cap]\` (capacity from u to v).
- \`source\`: Source chain ID.
- \`dest\`: Destination chain ID.

However, the bridge is unstable. Every time you send a unit of flow through an edge, the capacity of *all* edges connected to the receiving node decreases by 1 (congestion).
Actually, that's too complex for standard max flow.
Let's try: "Max flow with a twist".
Twist: You can only use each node (blockchain) at most once in a single path? (Node disjoint paths).
Goal: Find the maximum number of asset units you can transfer from source to dest, assuming each unit requires a unique path (node-disjoint) to avoid congestion.
Wait, node-disjoint paths is standard.
Let's add a crypto twist: "Gas Fees".
Each edge has a \`[u, v, cap, cost]\`.
You have a budget \`B\`. Find max flow such that total cost <= B? (Min cost max flow is hard).
Let's go with **"The Validator Consensus"**.
You have a set of validators. Each has a trust score. You need to select a subset of validators to sign a block such that:
1. Total trust score is maximized.
2. No two selected validators have a conflict (represented by edges in a graph).
This is Maximum Weight Independent Set. (NP-Hard).
But maybe the graph is a tree? Or bipartite?
Let's go back to **Liquidity**.
Problem: "Arbitrage Flow".
Find the max flow from S to T. But some nodes are "KYC-restricted" and can only handle flow if the previous node was also "KYC-compliant".
Let's stick to a solid graph problem:
**"The Liquidity Bottleneck"**:
You want to transfer assets from S to T.
Path capacity is min(edge weights).
You can upgrade *one* edge's capacity to infinity.
What is the maximum possible path capacity you can achieve?

Input Format:
- n: Integer
- bridges: List of lists [u, v, cap]
- source: Integer
- dest: Integer

Output Format:
- Return an integer (max capacity)

Constraints:
- 1 <= n <= 1000
- 1 <= bridges.length <= 5000`,
            examples: [
                { input: 'n = 3, bridges = [[0,1,10],[1,2,5]], s = 0, d = 2', output: '10' },
                { input: 'n = 4, bridges = [[0,1,10],[1,3,10],[0,2,5],[2,3,5]], s = 0, d = 3', output: '10' }
            ],
            testCases: [
                { input: 'n = 3, bridges = [[0,1,10],[1,2,5]], s = 0, d = 2', judgeInput: '3\n2\n0 1 10\n1 2 5\n0\n2', output: '10' },
                { input: 'n = 4, bridges = [[0,1,10],[1,3,10],[0,2,5],[2,3,5]], s = 0, d = 3', judgeInput: '4\n4\n0 1 10\n1 3 10\n0 2 5\n2 3 5\n0\n3', output: '10' },
                { input: 'n = 2, bridges = [[0,1,100]], s = 0, d = 1', judgeInput: '2\n1\n0 1 100\n0\n1', output: '2147483647' },
                { input: 'n = 3, bridges = [[0,1,5],[1,2,5]], s = 0, d = 2', judgeInput: '3\n2\n0 1 5\n1 2 5\n0\n2', output: '2147483647' },
                { input: 'n = 4, bridges = [[0,1,10],[1,2,5],[2,3,10]], s = 0, d = 3', judgeInput: '4\n3\n0 1 10\n1 2 5\n2 3 10\n0\n3', output: '10' },
                { input: 'n = 3, bridges = [[0,1,1],[1,2,1]], s = 0, d = 2', judgeInput: '3\n2\n0 1 1\n1 2 1\n0\n2', output: '2147483647' },
                { input: 'n = 5, bridges = [[0,1,10],[1,2,2],[2,3,10],[3,4,10]], s = 0, d = 4', judgeInput: '5\n4\n0 1 10\n1 2 2\n2 3 10\n3 4 10\n0\n4', output: '10' },
                { input: 'n = 2, bridges = [], s = 0, d = 1', judgeInput: '2\n0\n0\n1', output: '0' },
                { input: 'n = 4, bridges = [[0,1,100],[1,3,1],[0,2,1],[2,3,100]], s = 0, d = 3', judgeInput: '4\n4\n0 1 100\n1 3 1\n0 2 1\n2 3 100\n0\n3', output: '100' },
                { input: 'n = 3, bridges = [[0,1,10],[1,2,20]], s = 0, d = 2', judgeInput: '3\n2\n0 1 10\n1 2 20\n0\n2', output: '20' },
                { input: 'n = 3, bridges = [[0,1,20],[1,2,10]], s = 0, d = 2', judgeInput: '3\n2\n0 1 20\n1 2 10\n0\n2', output: '20' },
                { input: 'n = 4, bridges = [[0,1,5],[1,2,5],[2,3,5]], s = 0, d = 3', judgeInput: '4\n3\n0 1 5\n1 2 5\n2 3 5\n0\n3', output: '2147483647' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} bridges
 * @param {number} source
 * @param {number} dest
 * @return {number}
 */
function maxLiquidity(n, bridges, source, dest) {
    // Your code here
}`,
                python: `def max_liquidity(n, bridges, source, dest):
    """
    :type n: int
    :type bridges: List[List[int]]
    :type source: int
    :type dest: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxLiquidity(int n, vector<vector<int>>& bridges, int source, int dest) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxLiquidity(int n, int[][] bridges, int source, int dest) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const m = parseInt(lines[1]);\n    const bridges = [];\n    for(let i=2; i<2+m; i++) bridges.push(lines[i].split(' ').map(Number));\n    const source = parseInt(lines[2+m]);\n    const dest = parseInt(lines[3+m]);\n    console.log(maxLiquidity(n, bridges, source, dest));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nm = int(lines[1])\nbridges = []\nfor i in range(2, 2+m):\n    bridges.append(list(map(int, lines[i].split())))\nsource = int(lines[2+m])\ndest = int(lines[3+m])\nprint(max_liquidity(n, bridges, source, dest))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxLiquidity(int n, vector<vector<int>>& bridges, int source, int dest);\nint main() {\n    int n, m, source, dest;\n    cin >> n >> m;\n    vector<vector<int>> bridges(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> bridges[i][0] >> bridges[i][1] >> bridges[i][2];\n    cin >> source >> dest;\n    cout << maxLiquidity(n, bridges, source, dest) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] bridges = new int[m][3];\n        for(int i=0; i<m; i++) {\n            bridges[i][0] = sc.nextInt();\n            bridges[i][1] = sc.nextInt();\n            bridges[i][2] = sc.nextInt();\n        }\n        int source = sc.nextInt();\n        int dest = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxLiquidity(n, bridges, source, dest));\n    }\n}`
            }
        }, {
            id: 'blockchain-reorg',
            title: 'Blockchain Reorg Stabilizer',
            difficulty: 'Hard',
            description: `In a decentralized network, temporary forks occur. You need to identify the canonical chain.

You are given a tree of blocks where:
- \`blocks\`: List of \`[id, parent_id, timestamp]\`.
- Root block has \`parent_id = -1\`.

Rule: The canonical chain is the path from root to a leaf that has the **maximum length**.
If multiple paths have the same max length, choose the one where the tip (leaf) has the **smallest timestamp**.
Return the ID of the tip block of the canonical chain.

Input Format:
- blocks: List of lists [id, parent_id, timestamp]

Output Format:
- Return an integer (tip block ID)

Constraints:
- 1 <= blocks.length <= 1000
- 1 <= timestamp <= 10^9`,
            examples: [
                { input: 'blocks = [[0,-1,100],[1,0,101],[2,0,102]]', output: '1' },
                { input: 'blocks = [[0,-1,100],[1,0,101],[2,1,102],[3,0,103]]', output: '2' }
            ],
            testCases: [
                { input: 'blocks = [[0,-1,100],[1,0,101],[2,0,102]]', judgeInput: '3\n0 -1 100\n1 0 101\n2 0 102', output: '1' },
                { input: 'blocks = [[0,-1,100],[1,0,101],[2,1,102],[3,0,103]]', judgeInput: '4\n0 -1 100\n1 0 101\n2 1 102\n3 0 103', output: '2' },
                { input: 'blocks = [[0,-1,100]]', judgeInput: '1\n0 -1 100', output: '0' },
                { input: 'blocks = [[0,-1,100],[1,0,200],[2,0,150]]', judgeInput: '3\n0 -1 100\n1 0 200\n2 0 150', output: '2' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,1,30],[3,2,40]]', judgeInput: '4\n0 -1 10\n1 0 20\n2 1 30\n3 2 40', output: '3' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,0,20]]', judgeInput: '3\n0 -1 10\n1 0 20\n2 0 20', output: '1' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,1,30],[3,0,20],[4,3,30]]', judgeInput: '5\n0 -1 10\n1 0 20\n2 1 30\n3 0 20\n4 3 30', output: '2' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,1,30],[3,0,20],[4,3,25]]', judgeInput: '5\n0 -1 10\n1 0 20\n2 1 30\n3 0 20\n4 3 25', output: '4' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,1,30],[3,2,40],[4,0,50]]', judgeInput: '5\n0 -1 10\n1 0 20\n2 1 30\n3 2 40\n4 0 50', output: '3' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,0,15],[3,1,30],[4,2,30]]', judgeInput: '5\n0 -1 10\n1 0 20\n2 0 15\n3 1 30\n4 2 30', output: '3' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,0,15],[3,1,30],[4,2,25]]', judgeInput: '5\n0 -1 10\n1 0 20\n2 0 15\n3 1 30\n4 2 25', output: '4' },
                { input: 'blocks = [[0,-1,10],[1,0,20],[2,1,30],[3,1,25]]', judgeInput: '4\n0 -1 10\n1 0 20\n2 1 30\n3 1 25', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} blocks
 * @return {number}
 */
function canonicalChain(blocks) {
    // Your code here
}`,
                python: `def canonical_chain(blocks):
    """
    :type blocks: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int canonicalChain(vector<vector<int>>& blocks) {
    // Your code here
}`,
                java: `public class Solution {
    public int canonicalChain(int[][] blocks) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const blocks = [];\n    for(let i=1; i<=n; i++) blocks.push(lines[i].split(' ').map(Number));\n    console.log(canonicalChain(blocks));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nblocks = []\nfor i in range(1, n+1):\n    blocks.append(list(map(int, lines[i].split())))\nprint(canonical_chain(blocks))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint canonicalChain(vector<vector<int>>& blocks);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> blocks(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> blocks[i][0] >> blocks[i][1] >> blocks[i][2];\n    cout << canonicalChain(blocks) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] blocks = new int[n][3];\n        for(int i=0; i<n; i++) {\n            blocks[i][0] = sc.nextInt();\n            blocks[i][1] = sc.nextInt();\n            blocks[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.canonicalChain(blocks));\n    }\n}`
            }
        }]
    }]
};
