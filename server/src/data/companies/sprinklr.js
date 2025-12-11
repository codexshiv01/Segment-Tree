export const sprinklrData = {
    id: 'sprinklr',
    name: 'Sprinklr',
    logo: 'https://logo.clearbit.com/sprinklr.com',
    description: 'Practice real Sprinklr Online Assessment questions.',
    assessments: [{
        id: 'sprinklr-oa-1',
        title: 'Sprinklr OA-1',
        duration: 90,
        problems: [{
            id: 'social-sentiment',
            title: 'Social Media Sentiment Aggregator',
            difficulty: 'Medium',
            description: `Problem Description
Sprinklr aggregates social media posts from various platforms to analyze brand sentiment.

You are given:
- \`posts\`: A list where each element is \`[platform_id, sentiment_score, reach]\`.
  - \`platform_id\`: Integer ID of the platform.
  - \`sentiment_score\`: Integer score (1-10).
  - \`reach\`: Number of users who saw the post.
- \`k\`: The number of top platforms to return.

**Weighted Sentiment:**
The weighted sentiment for a platform is the sum of \`sentiment_score * reach\` for all posts on that platform.

**Goal:**
Return the **IDs of the top k platforms** with the highest weighted sentiment, sorted in descending order of their score. If two platforms have the same score, sort them by ID (ascending).

### Input Format
- \`posts\`: List of lists \`[platform_id, sentiment_score, reach]\`
- \`k\`: Integer

### Output Format
- Return a list of integers (platform IDs).

### Constraints
- \`1 <= posts.length <= 1000\`
- \`1 <= k <= number of unique platforms\``,
            examples: [
                { input: 'posts = [[1,5,100],[1,4,50],[2,3,200]], k = 1', output: '[1]' },
                { input: 'posts = [[1,3,50],[2,4,50],[3,5,50]], k = 2', output: '[3,2]' }
            ],
            testCases: [
                { input: 'posts = [[1,5,100],[1,4,50],[2,3,200]], k = 1', judgeInput: '3\n1 5 100\n1 4 50\n2 3 200\n1', output: '[1]' },
                { input: 'posts = [[1,10,100]], k = 1', judgeInput: '1\n1 10 100\n1', output: '[1]' },
                { input: 'posts = [[1,5,100],[2,5,200]], k = 1', judgeInput: '2\n1 5 100\n2 5 200\n1', output: '[2]' },
                { input: 'posts = [[1,3,50],[2,4,50],[3,5,50]], k = 2', judgeInput: '3\n1 3 50\n2 4 50\n3 5 50\n2', output: '[3,2]' },
                { input: 'posts = [[5,10,1000]], k = 1', judgeInput: '1\n5 10 1000\n1', output: '[5]' },
                { input: 'posts = [[1,2,100],[2,3,100],[3,4,100]], k = 3', judgeInput: '3\n1 2 100\n2 3 100\n3 4 100\n3', output: '[3,2,1]' },
                { input: 'posts = [[1,8,200],[2,7,150],[3,6,100]], k = 2', judgeInput: '3\n1 8 200\n2 7 150\n3 6 100\n2', output: '[1,2]' },
                { input: 'posts = [[1,5,100],[1,3,200],[2,5,150]], k = 1', judgeInput: '3\n1 5 100\n1 3 200\n2 5 150\n1', output: '[1]' },
                { input: 'posts = [[1,10,50],[2,10,100],[3,10,150]], k = 2', judgeInput: '3\n1 10 50\n2 10 100\n3 10 150\n2', output: '[3,2]' },
                { input: 'posts = [[1,4,80],[2,6,60],[3,5,70],[4,7,50]], k = 3', judgeInput: '4\n1 4 80\n2 6 60\n3 5 70\n4 7 50\n3', output: '[2,3,1]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} posts
 * @param {number} k
 * @return {number[]}
 */
function topPlatforms(posts, k) {
    // Your code here
}`,
                python: `def top_platforms(posts, k):
    """
    :type posts: List[List[int]]
    :type k: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> topPlatforms(vector<vector<int>>& posts, int k) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] topPlatforms(int[][] posts, int k) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const posts = [];\n    for(let i=1; i<=n; i++) posts.push(lines[i].split(' ').map(Number));\n    const k = parseInt(lines[n+1]);\n    console.log(JSON.stringify(topPlatforms(posts, k)));\n});`, python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nposts = []\nfor i in range(1, n+1):\n    posts.append(list(map(int, lines[i].split())))\nk = int(lines[n+1])\nprint(json.dumps(top_platforms(posts, k)))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> topPlatforms(vector<vector<int>>& posts, int k);\nint main() {\n    int n, k;\n    cin >> n;\n    vector<vector<int>> posts(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> posts[i][0] >> posts[i][1] >> posts[i][2];\n    cin >> k;\n    vector<int> res = topPlatforms(posts, k);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] posts = new int[n][3];\n        for(int i=0; i<n; i++) {\n            posts[i][0] = sc.nextInt();\n            posts[i][1] = sc.nextInt();\n            posts[i][2] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        Solution sol = new Solution();\n        int[] res = sol.topPlatforms(posts, k);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}` }
        },
        {
            id: 'distributed-cache',
            title: 'Distributed Cache Consistency',
            difficulty: 'Hard',
            description: `Problem Description
Sprinklr's distributed system uses a cache to store real-time data. To maintain consistency, we need to invalidate cache entries across multiple nodes when data changes.

You are given:
- \`nodes\`: A list of cache nodes, where \`nodes[i]\` is the ID of the i-th node.
- \`connections\`: A list of pairs \`[u, v]\`, representing a network connection between node \`u\` and node \`v\`.
- \`update_node\`: The ID of the node where data was updated.
- \`ttl\`: Time to Live for the invalidation signal.

**Propagation Logic:**
- The invalidation signal starts at \`update_node\` at time \`t=0\`.
- It takes \`1\` unit of time to travel across any connection.
- The signal propagates to all connected nodes.

**Goal:**
Find the **minimum time** required for the invalidation signal to reach **all** nodes in the network. If it's impossible to reach all nodes, return \`-1\`.

### Input Format
- \`n\`: Total number of nodes (labeled 0 to n-1)
- \`connections\`: List of pairs \`[u, v]\`
- \`update_node\`: Integer

### Output Format
- Return an integer representing the minimum time.

### Constraints
- \`1 <= n <= 100\`
- \`0 <= connections.length <= 5000\``,
            examples: [
                { input: 'n = 4, connections = [[0,1],[1,2],[2,3]], update_node = 0', output: '3' },
                { input: 'n = 3, connections = [[0,1]], update_node = 0', output: '-1' }
            ],
            testCases: [
                { input: 'n = 4, connections = [[0,1],[1,2],[2,3]], update_node = 0', judgeInput: '4\n3\n0 1\n1 2\n2 3\n0', output: '3' },
                { input: 'n = 3, connections = [[0,1]], update_node = 0', judgeInput: '3\n1\n0 1\n0', output: '-1' },
                { input: 'n = 2, connections = [[0,1]], update_node = 1', judgeInput: '2\n1\n0 1\n1', output: '1' },
                { input: 'n = 5, connections = [[0,1],[0,2],[1,3],[1,4]], update_node = 0', judgeInput: '5\n4\n0 1\n0 2\n1 3\n1 4\n0', output: '2' },
                { input: 'n = 1, connections = [], update_node = 0', judgeInput: '1\n0\n0', output: '0' },
                { input: 'n = 4, connections = [[0,1],[1,2],[2,0],[2,3]], update_node = 0', judgeInput: '4\n4\n0 1\n1 2\n2 0\n2 3\n0', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} connections
 * @param {number} update_node
 * @return {number}
 */
function minPropagationTime(n, connections, update_node) {
    // Your code here
}`,
                python: `def min_propagation_time(n, connections, update_node):
    """
    :type n: int
    :type connections: List[List[int]]
    :type update_node: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minPropagationTime(int n, vector<vector<int>>& connections, int update_node) {
    // Your code here
}`,
                java: `public class Solution {
    public int minPropagationTime(int n, int[][] connections, int update_node) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const m = parseInt(lines[1]);\n    const connections = [];\n    for(let i=2; i<m+2; i++) connections.push(lines[i].split(' ').map(Number));\n    const update_node = parseInt(lines[m+2]);\n    console.log(minPropagationTime(n, connections, update_node));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nm = int(lines[1])\nconnections = []\nfor i in range(2, m+2):\n    connections.append(list(map(int, lines[i].split())))\nupdate_node = int(lines[m+2])\nprint(min_propagation_time(n, connections, update_node))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minPropagationTime(int n, vector<vector<int>>& connections, int update_node);\nint main() {\n    int n, m, update_node;\n    cin >> n >> m;\n    vector<vector<int>> connections(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> connections[i][0] >> connections[i][1];\n    cin >> update_node;\n    cout << minPropagationTime(n, connections, update_node) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] connections = new int[m][2];\n        for(int i=0; i<m; i++) {\n            connections[i][0] = sc.nextInt();\n            connections[i][1] = sc.nextInt();\n        }\n        int update_node = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minPropagationTime(n, connections, update_node));\n    }\n}` }
        }]
    }]
};
