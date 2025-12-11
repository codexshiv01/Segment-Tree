export const ciscoData = {
    id: 'cisco',
    name: 'Cisco',
    logo: 'https://logo.clearbit.com/cisco.com',
    description: 'Practice real Cisco Online Assessment questions.',
    assessments: [{
        id: 'cisco-oa-1',
        title: 'Cisco OA-1',
        duration: 90,
        problems: [{
            id: 'network-packet-router',
            title: 'Network Packet Router',
            difficulty: 'Medium',
            description: `Cisco routers need to process packets in order of priority. Given a list of packets with priorities, process them in the correct order.

You are given:
- packets: A list of [packet_id, priority]

Goal: Return the order of packet IDs sorted by priority (higher first). If priorities are equal, maintain original order.

Input Format:
- packets: List of lists [id, priority]

Output Format:
- Return a list of packet IDs

Constraints:
- 1 <= packets.length <= 1000
- 1 <= id, priority <= 10000`,
            examples: [
                { input: 'packets = [[1,5],[2,3],[3,5]]', output: '[1,3,2]' },
                { input: 'packets = [[1,1],[2,2]]', output: '[2,1]' }
            ],
            testCases: [
                { input: 'packets = [[1,5],[2,3],[3,5]]', judgeInput: '3\n1 5\n2 3\n3 5', output: '[1,3,2]' },
                { input: 'packets = [[1,1],[2,2]]', judgeInput: '2\n1 1\n2 2', output: '[2,1]' },
                { input: 'packets = [[1,10]]', judgeInput: '1\n1 10', output: '[1]' },
                { input: 'packets = [[1,1],[2,1],[3,1]]', judgeInput: '3\n1 1\n2 1\n3 1', output: '[1,2,3]' },
                { input: 'packets = [[1,3],[2,1],[3,2]]', judgeInput: '3\n1 3\n2 1\n3 2', output: '[1,3,2]' },
                { input: 'packets = [[1,5],[2,10],[3,5],[4,10]]', judgeInput: '4\n1 5\n2 10\n3 5\n4 10', output: '[2,4,1,3]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} packets
 * @return {number[]}
 */
function routePackets(packets) {
    // Your code here
}`,
                python: `def route_packets(packets):
    """
    :type packets: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> routePackets(vector<vector<int>>& packets) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] routePackets(int[][] packets) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const packets = [];\n    for(let i=1; i<=n; i++) packets.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(routePackets(packets)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\npackets = []\nfor i in range(1, n+1):\n    packets.append(list(map(int, lines[i].split())))\nprint(json.dumps(route_packets(packets)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> routePackets(vector<vector<int>>& packets);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> packets(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> packets[i][0] >> packets[i][1];\n    vector<int> res = routePackets(packets);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] packets = new int[n][2];\n        for(int i=0; i<n; i++) {\n            packets[i][0] = sc.nextInt();\n            packets[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.routePackets(packets);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'network-topology',
            title: 'Network Topology Design',
            difficulty: 'Hard',
            description: `Design a network topology that minimizes total cable length while ensuring all nodes are connected.

You are given:
- nodes: Number of network nodes
- connections: Possible connections as [node1, node2, cost]

Goal: Return the minimum cost to connect all nodes. Return -1 if impossible.

Input Format:
- nodes: Integer
- connections: List of lists [node1, node2, cost]

Output Format:
- Return an integer

Constraints:
- 1 <= nodes <= 100
- 0 <= connections.length <= 1000
- 1 <= cost <= 1000`,
            examples: [
                { input: 'nodes = 3, connections = [[1,2,5],[2,3,10],[1,3,15]]', output: '15' },
                { input: 'nodes = 2, connections = []', output: '-1' }
            ],
            testCases: [
                { input: 'nodes = 3, connections = [[1,2,5],[2,3,10],[1,3,15]]', judgeInput: '3\n3\n1 2 5\n2 3 10\n1 3 15', output: '15' },
                { input: 'nodes = 2, connections = []', judgeInput: '2\n0', output: '-1' },
                { input: 'nodes = 4, connections = [[1,2,1],[2,3,2],[3,4,3]]', judgeInput: '4\n3\n1 2 1\n2 3 2\n3 4 3', output: '6' },
                { input: 'nodes = 3, connections = [[1,2,1],[1,2,2],[2,3,3]]', judgeInput: '3\n3\n1 2 1\n1 2 2\n2 3 3', output: '4' },
                { input: 'nodes = 5, connections = [[1,2,1],[1,3,2],[2,4,3],[3,5,4]]', judgeInput: '5\n4\n1 2 1\n1 3 2\n2 4 3\n3 5 4', output: '10' },
                { input: 'nodes = 1, connections = []', judgeInput: '1\n0', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} nodes
 * @param {number[][]} connections
 * @return {number}
 */
function minNetworkCost(nodes, connections) {
    // Your code here
}`,
                python: `def min_network_cost(nodes, connections):
    """
    :type nodes: int
    :type connections: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minNetworkCost(int nodes, vector<vector<int>>& connections) {
    // Your code here
}`,
                java: `public class Solution {
    public int minNetworkCost(int nodes, int[][] connections) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const nodes = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const connections = [];\n    for(let i=2; i<2+n; i++) connections.push(lines[i].split(' ').map(Number));\n    console.log(minNetworkCost(nodes, connections));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nnodes = int(lines[0])\nn = int(lines[1])\nconnections = []\nfor i in range(2, 2+n):\n    connections.append(list(map(int, lines[i].split())))\nprint(min_network_cost(nodes, connections))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minNetworkCost(int nodes, vector<vector<int>>& connections);\nint main() {\n    int nodes, n;\n    cin >> nodes >> n;\n    vector<vector<int>> connections(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> connections[i][0] >> connections[i][1] >> connections[i][2];\n    cout << minNetworkCost(nodes, connections) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int nodes = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] connections = new int[n][3];\n        for(int i=0; i<n; i++) {\n            connections[i][0] = sc.nextInt();\n            connections[i][1] = sc.nextInt();\n            connections[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.minNetworkCost(nodes, connections));\n    }\n}`
            }
        }]
    }]
};
