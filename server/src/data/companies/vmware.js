export const vmwareData = {
    id: 'vmware',
    name: 'VMware',
    logo: 'https://logo.clearbit.com/vmware.com',
    description: 'Practice real VMware Online Assessment questions.',
    assessments: [{
        id: 'vmware-oa-1',
        title: 'VMware OA-1',
        duration: 90,
        problems: [{
            id: 'vm-allocation',
            title: 'Virtual Machine Resource Allocator',
            difficulty: 'Medium',
            description: `Allocate VMs to physical hosts to minimize fragmentation.

You are given:
- hosts: List of [host_id, available_cpu, available_ram]
- vm_req: [required_cpu, required_ram]

Goal: Find the host that best fits the VM. Best fit is defined as the host with the minimum remaining resource score after allocation.
Score = (remaining_cpu + remaining_ram).
If multiple hosts have the same minimum score, choose the one with the smallest host_id.
If no host can accommodate the VM, return -1.

Input Format:
- hosts: List of lists [id, cpu, ram]
- vm_req: List [cpu, ram]

Output Format:
- Return an integer (host_id)

Constraints:
- 1 <= hosts.length <= 1000
- 1 <= cpu, ram <= 10000`,
            examples: [
                { input: 'hosts = [[1,10,10],[2,20,20]], vm = [5,5]', output: '1' },
                { input: 'hosts = [[1,5,5]], vm = [10,10]', output: '-1' }
            ],
            testCases: [
                { input: 'hosts = [[1,10,10],[2,20,20]], vm = [5,5]', judgeInput: '2\n1 10 10\n2 20 20\n5 5', output: '1' },
                { input: 'hosts = [[1,5,5]], vm = [10,10]', judgeInput: '1\n1 5 5\n10 10', output: '-1' },
                { input: 'hosts = [[1,10,10],[2,10,10]], vm = [5,5]', judgeInput: '2\n1 10 10\n2 10 10\n5 5', output: '1' },
                { input: 'hosts = [[1,100,100],[2,50,50],[3,20,20]], vm = [10,10]', judgeInput: '3\n1 100 100\n2 50 50\n3 20 20\n10 10', output: '3' },
                { input: 'hosts = [[1,8,8],[2,12,12]], vm = [10,10]', judgeInput: '2\n1 8 8\n2 12 12\n10 10', output: '2' },
                { input: 'hosts = [[1,30,30],[2,25,25],[3,40,40]], vm = [20,20]', judgeInput: '3\n1 30 30\n2 25 25\n3 40 40\n20 20', output: '2' },
                { input: 'hosts = [[1,10,5],[2,5,10]], vm = [6,6]', judgeInput: '2\n1 10 5\n2 5 10\n6 6', output: '-1' },
                { input: 'hosts = [[1,15,15],[2,16,16]], vm = [5,5]', judgeInput: '2\n1 15 15\n2 16 16\n5 5', output: '1' },
                { input: 'hosts = [[1,100,200],[2,200,100]], vm = [50,50]', judgeInput: '2\n1 100 200\n2 200 100\n50 50', output: '1' },
                { input: 'hosts = [[1,10,10],[2,20,20],[3,5,5]], vm = [8,8]', judgeInput: '3\n1 10 10\n2 20 20\n3 5 5\n8 8', output: '1' },
                { input: 'hosts = [[1,50,50],[2,50,50],[3,50,50]], vm = [10,10]', judgeInput: '3\n1 50 50\n2 50 50\n3 50 50\n10 10', output: '1' },
                { input: 'hosts = [[1,1000,1000]], vm = [1,1]', judgeInput: '1\n1 1000 1000\n1 1', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} hosts
 * @param {number[]} vm_req
 * @return {number}
 */
function allocateVM(hosts, vm_req) {
    // Your code here
}`,
                python: `def allocate_vm(hosts, vm_req):
    """
    :type hosts: List[List[int]]
    :type vm_req: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int allocateVM(vector<vector<int>>& hosts, vector<int>& vm_req) {
    // Your code here
}`,
                java: `public class Solution {
    public int allocateVM(int[][] hosts, int[] vm_req) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const hosts = [];\n    for(let i=1; i<=n; i++) hosts.push(lines[i].split(' ').map(Number));\n    const vm_req = lines[n+1].split(' ').map(Number);\n    console.log(allocateVM(hosts, vm_req));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nhosts = []\nfor i in range(1, n+1):\n    hosts.append(list(map(int, lines[i].split())))\nvm_req = list(map(int, lines[n+1].split()))\nprint(allocate_vm(hosts, vm_req))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint allocateVM(vector<vector<int>>& hosts, vector<int>& vm_req);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> hosts(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> hosts[i][0] >> hosts[i][1] >> hosts[i][2];\n    vector<int> vm_req(2);\n    cin >> vm_req[0] >> vm_req[1];\n    cout << allocateVM(hosts, vm_req) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] hosts = new int[n][3];\n        for(int i=0; i<n; i++) {\n            hosts[i][0] = sc.nextInt();\n            hosts[i][1] = sc.nextInt();\n            hosts[i][2] = sc.nextInt();\n        }\n        int[] vm_req = new int[2];\n        vm_req[0] = sc.nextInt();\n        vm_req[1] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.allocateVM(hosts, vm_req));\n    }\n}`
            }
        }, {
            id: 'snapshot-manager',
            title: 'Snapshot Consistency Manager',
            difficulty: 'Hard',
            description: `Manage VM snapshots and dependencies.

You are given:
- snapshots: List of [id, parent_id] (parent_id -1 means root)
- delete_req: ID of snapshot to delete

Goal: When a snapshot is deleted, all its descendants (children, grandchildren, etc.) must also be deleted. Return the total count of deleted snapshots.

Input Format:
- snapshots: List of lists [id, parent_id]
- delete_req: Integer

Output Format:
- Return an integer (count of deleted snapshots)

Constraints:
- 1 <= snapshots.length <= 1000
- Tree structure guaranteed`,
            examples: [
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,2]], delete = 1', output: '4' },
                { input: 'snapshots = [[1,-1],[2,1]], delete = 2', output: '1' }
            ],
            testCases: [
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,2]], delete = 1', judgeInput: '4\n1 -1\n2 1\n3 1\n4 2\n1', output: '4' },
                { input: 'snapshots = [[1,-1],[2,1]], delete = 2', judgeInput: '2\n1 -1\n2 1\n2', output: '1' },
                { input: 'snapshots = [[1,-1],[2,1],[3,2],[4,3]], delete = 2', judgeInput: '4\n1 -1\n2 1\n3 2\n4 3\n2', output: '3' },
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,2],[5,2],[6,3]], delete = 3', judgeInput: '6\n1 -1\n2 1\n3 1\n4 2\n5 2\n6 3\n3', output: '2' },
                { input: 'snapshots = [[1,-1]], delete = 1', judgeInput: '1\n1 -1\n1', output: '1' },
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,2],[5,3]], delete = 4', judgeInput: '5\n1 -1\n2 1\n3 1\n4 2\n5 3\n4', output: '1' },
                { input: 'snapshots = [[1,-1],[2,1],[3,2],[4,3],[5,4]], delete = 1', judgeInput: '5\n1 -1\n2 1\n3 2\n4 3\n5 4\n1', output: '5' },
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,1]], delete = 1', judgeInput: '4\n1 -1\n2 1\n3 1\n4 1\n1', output: '4' },
                { input: 'snapshots = [[1,-1],[2,1],[3,2]], delete = 3', judgeInput: '3\n1 -1\n2 1\n3 2\n3', output: '1' },
                { input: 'snapshots = [[1,-1],[2,1],[3,1],[4,2],[5,2],[6,3],[7,3]], delete = 2', judgeInput: '7\n1 -1\n2 1\n3 1\n4 2\n5 2\n6 3\n7 3\n2', output: '3' },
                { input: 'snapshots = [[1,-1],[2,1],[3,1]], delete = 4', judgeInput: '3\n1 -1\n2 1\n3 1\n4', output: '0' },
                { input: 'snapshots = [[10,-1],[20,10],[30,20]], delete = 20', judgeInput: '3\n10 -1\n20 10\n30 20\n20', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} snapshots
 * @param {number} delete_req
 * @return {number}
 */
function deleteSnapshots(snapshots, delete_req) {
    // Your code here
}`,
                python: `def delete_snapshots(snapshots, delete_req):
    """
    :type snapshots: List[List[int]]
    :type delete_req: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int deleteSnapshots(vector<vector<int>>& snapshots, int delete_req) {
    // Your code here
}`,
                java: `public class Solution {
    public int deleteSnapshots(int[][] snapshots, int delete_req) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const snapshots = [];\n    for(let i=1; i<=n; i++) snapshots.push(lines[i].split(' ').map(Number));\n    const delete_req = parseInt(lines[n+1]);\n    console.log(deleteSnapshots(snapshots, delete_req));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nsnapshots = []\nfor i in range(1, n+1):\n    snapshots.append(list(map(int, lines[i].split())))\ndelete_req = int(lines[n+1])\nprint(delete_snapshots(snapshots, delete_req))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint deleteSnapshots(vector<vector<int>>& snapshots, int delete_req);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> snapshots(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> snapshots[i][0] >> snapshots[i][1];\n    int delete_req;\n    cin >> delete_req;\n    cout << deleteSnapshots(snapshots, delete_req) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] snapshots = new int[n][2];\n        for(int i=0; i<n; i++) {\n            snapshots[i][0] = sc.nextInt();\n            snapshots[i][1] = sc.nextInt();\n        }\n        int delete_req = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.deleteSnapshots(snapshots, delete_req));\n    }\n}`
            }
        }]
    }]
};
