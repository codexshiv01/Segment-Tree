export const replitData = {
    id: 'replit',
    name: 'Replit',
    logo: 'https://logo.clearbit.com/replit.com',
    description: 'Practice real Replit Online Assessment questions.',
    assessments: [{
        id: 'replit-oa-1',
        title: 'Replit OA-1',
        duration: 90,
        problems: [{
            id: 'code-execution-time',
            title: 'Container Resource Allocation',
            difficulty: 'Hard',
            description: `Allocate containers for code execution based on memory and CPU requirements.

You are given:
- jobs: List of [job_id, memory_mb, cpu_cores]
- containers: List of [container_id, available_memory_mb, available_cpu_cores]

Goal: Assign each job to the first container that has sufficient resources (memory AND CPU). After assignment, reduce container's available resources. Return list of job_ids that couldn't be assigned (no suitable container), sorted in original order.

Input Format:
- jobs: List of lists [id, mem, cpu]
- containers: List of lists [id, mem, cpu]

Output Format:
- Return list of integers (unassigned job IDs), or empty list if all assigned

Constraints:
- 1 <= jobs.length, containers.length <= 100
- 1 <= memory_mb <= 16384
- 1 <= cpu_cores <= 32`,
            examples: [
                { input: 'jobs = [[1,512,1],[2,1024,2]], containers = [[1,1024,2]]', output: '[2]' },
                { input: 'jobs = [[1,512,1]], containers = [[1,1024,2]]', output: '[]' }
            ],
            testCases: [
                { input: 'jobs = [[1,512,1],[2,1024,2]], containers = [[1,1024,2]]', judgeInput: '2\n1 512 1\n2 1024 2\n1\n1 1024 2', output: '[2]' },
                { input: 'jobs = [[1,512,1]], containers = [[1,1024,2]]', judgeInput: '1\n1 512 1\n1\n1 1024 2', output: '[]' },
                { input: 'jobs = [[1,512,1],[2,512,1]], containers = [[1,1024,2]]', judgeInput: '2\n1 512 1\n2 512 1\n1\n1 1024 2', output: '[]' },
                { input: 'jobs = [[1,2048,4]], containers = [[1,1024,2]]', judgeInput: '1\n1 2048 4\n1\n1 1024 2', output: '[1]' },
                { input: 'jobs = [[1,256,1],[2,256,1],[3,256,1]], containers = [[1,512,2]]', judgeInput: '3\n1 256 1\n2 256 1\n3 256 1\n1\n1 512 2', output: '[3]' },
                { input: 'jobs = [[1,1024,2],[2,512,1]], containers = [[1,2048,4]]', judgeInput: '2\n1 1024 2\n2 512 1\n1\n1 2048 4', output: '[]' },
                { input: 'jobs = [[1,512,1],[2,1024,2],[3,512,1]], containers = [[1,1024,2],[2,512,1]]', judgeInput: '3\n1 512 1\n2 1024 2\n3 512 1\n2\n1 1024 2\n2 512 1', output: '[2]' },
                { input: 'jobs = [[1,256,1]], containers = [[1,128,1]]', judgeInput: '1\n1 256 1\n1\n1 128 1', output: '[1]' },
                { input: 'jobs = [[1,512,2],[2,512,2]], containers = [[1,1024,4]]', judgeInput: '2\n1 512 2\n2 512 2\n1\n1 1024 4', output: '[]' },
                { input: 'jobs = [[1,4096,8]], containers = [[1,2048,4],[2,2048,4]]', judgeInput: '1\n1 4096 8\n2\n1 2048 4\n2 2048 4', output: '[1]' },
                { input: 'jobs = [[1,128,1],[2,128,1],[3,128,1],[4,128,1]], containers = [[1,256,2]]', judgeInput: '4\n1 128 1\n2 128 1\n3 128 1\n4 128 1\n1\n1 256 2', output: '[3,4]' },
                { input: 'jobs = [[1,1024,1],[2,2048,2]], containers = [[1,3072,3]]', judgeInput: '2\n1 1024 1\n2 2048 2\n1\n1 3072 3', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} jobs
 * @param {number[][]} containers
 * @return {number[]}
 */
function unassignedJobs(jobs, containers) {
    // Your code here
}`,
                python: `def unassigned_jobs(jobs, containers):
    """
    :type jobs: List[List[int]]
    :type containers: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> unassignedJobs(vector<vector<int>>& jobs, vector<vector<int>>& containers) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] unassignedJobs(int[][] jobs, int[][] containers) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const jobs = [];\n    for(let i=1; i<=n; i++) jobs.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const containers = [];\n    for(let i=n+2; i<n+2+m; i++) containers.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(unassignedJobs(jobs, containers)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\njobs = []\nfor i in range(1, n+1):\n    jobs.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\ncontainers = []\nfor i in range(n+2, n+2+m):\n    containers.append(list(map(int, lines[i].split())))\nprint(json.dumps(unassigned_jobs(jobs, containers)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> unassignedJobs(vector<vector<int>>& jobs, vector<vector<int>>& containers);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> jobs(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n    cin >> m;\n    vector<vector<int>> containers(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> containers[i][0] >> containers[i][1] >> containers[i][2];\n    vector<int> res = unassignedJobs(jobs, containers);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] jobs = new int[n][3];\n        for(int i=0; i<n; i++) {\n            jobs[i][0] = sc.nextInt();\n            jobs[i][1] = sc.nextInt();\n            jobs[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] containers = new int[m][3];\n        for(int i=0; i<m; i++) {\n            containers[i][0] = sc.nextInt();\n            containers[i][1] = sc.nextInt();\n            containers[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.unassignedJobs(jobs, containers);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'collaborative-cursors',
            title: 'Collaborative Cursor Conflict Resolver',
            difficulty: 'Medium',
            description: `Detect cursor conflicts in collaborative editing sessions.

You are given:
- cursors: List of [user_id, line_number, column_number]

Goal: Two cursors conflict if they're on the same line and within 5 columns of each other. Return count of conflicting cursor pairs.

Input Format:
- cursors: List of lists [user, line, col]

Output Format:
- Return an integer (count of conflicts)

Constraints:
- 1 <= cursors.length <= 1000
- 1 <= user_id <= 10000
- 1 <= line_number, column_number <= 10000`,
            examples: [
                { input: 'cursors = [[1,10,5],[2,10,8],[3,20,5]]', output: '1' },
                { input: 'cursors = [[1,10,5],[2,10,15]]', output: '0' }
            ],
            testCases: [
                { input: 'cursors = [[1,10,5],[2,10,8],[3,20,5]]', judgeInput: '3\n1 10 5\n2 10 8\n3 20 5', output: '1' },
                { input: 'cursors = [[1,10,5],[2,10,15]]', judgeInput: '2\n1 10 5\n2 10 15', output: '0' },
                { input: 'cursors = [[1,5,10],[2,5,12],[3,5,14]]', judgeInput: '3\n1 5 10\n2 5 12\n3 5 14', output: '3' },
                { input: 'cursors = [[1,1,1],[2,2,2],[3,3,3]]', judgeInput: '3\n1 1 1\n2 2 2\n3 3 3', output: '0' },
                { input: 'cursors = [[1,10,20],[2,10,24]]', judgeInput: '2\n1 10 20\n2 10 24', output: '1' },
                { input: 'cursors = [[1,15,30],[2,15,31],[3,15,32],[4,15,33]]', judgeInput: '4\n1 15 30\n2 15 31\n3 15 32\n4 15 33', output: '6' },
                { input: 'cursors = [[1,100,50],[2,100,60]]', judgeInput: '2\n1 100 50\n2 100 60', output: '0' },
                { input: 'cursors = [[1,7,15],[2,8,15]]', judgeInput: '2\n1 7 15\n2 8 15', output: '0' },
                { input: 'cursors = [[1,20,100],[2,20,102],[3,20,104]]', judgeInput: '3\n1 20 100\n2 20 102\n3 20 104', output: '3' },
                { input: 'cursors = [[1,50,200],[2,50,205],[3,50,210]]', judgeInput: '3\n1 50 200\n2 50 205\n3 50 210', output: '1' },
                { input: 'cursors = [[1,1,10],[2,1,11],[3,1,12],[4,1,13],[5,1,14]]', judgeInput: '5\n1 1 10\n2 1 11\n3 1 12\n4 1 13\n5 1 14', output: '10' },
                { input: 'cursors = [[1,30,75]]', judgeInput: '1\n1 30 75', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} cursors
 * @return {number}
 */
function countConflicts(cursors) {
    // Your code here
}`,
                python: `def count_conflicts(cursors):
    """
    :type cursors: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countConflicts(vector<vector<int>>& cursors) {
    // Your code here
}`,
                java: `public class Solution {
    public int countConflicts(int[][] cursors) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const cursors = [];\n    for(let i=1; i<=n; i++) cursors.push(lines[i].split(' ').map(Number));\n    console.log(countConflicts(cursors));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncursors = []\nfor i in range(1, n+1):\n    cursors.append(list(map(int, lines[i].split())))\nprint(count_conflicts(cursors))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countConflicts(vector<vector<int>>& cursors);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> cursors(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> cursors[i][0] >> cursors[i][1] >> cursors[i][2];\n    cout << countConflicts(cursors) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cursors = new int[n][3];\n        for(int i=0; i<n; i++) {\n            cursors[i][0] = sc.nextInt();\n            cursors[i][1] = sc.nextInt();\n            cursors[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.countConflicts(cursors));\n    }\n}`
            }
        }]
    }]
};
