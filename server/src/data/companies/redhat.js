export const redhatData = {
    id: 'redhat',
    name: 'Red Hat',
    logo: 'https://logo.clearbit.com/redhat.com',
    description: 'Practice real Red Hat Online Assessment questions.',
    assessments: [{
        id: 'redhat-oa-1',
        title: 'Red Hat OA-1',
        duration: 90,
        problems: [{
            id: 'kernel-scheduler',
            title: 'Kernel Task Scheduler',
            difficulty: 'Hard',
            description: `You are optimizing the Linux CFS (Completely Fair Scheduler).

You are given:
- \`tasks\`: List of \`[id, arrival_time, burst_time, nice_value]\`.
- \`nice_value\`: Integer from -20 to 19 (lower is higher priority).
- \`time_quantum\`: Max time a task runs before preemption.

Rules:
1. Priority is determined by \`vruntime\` (virtual runtime).
2. \`vruntime\` increases by \`runtime * (weight / 1024)\`.
3. Weight is calculated from nice value (simplified: \`weight = 1024 / (1.25 ^ nice)\`).
   Actually, let's simplify for the problem:
   **Priority Score = (Waiting Time) + (Nice Factor)**.
   Wait, CFS uses vruntime (min vruntime runs next).
   Let's use a simpler custom scheduler:
   **"The Weighted Round Robin with Preemption"**.
   - At any time \`t\`, the available task with the **highest priority** runs.
   - Priority = \`BasePriority - nice_value\`.
   - If priorities are equal, use Round Robin (FCFS among equals?). No, let's say "Smallest ID".
   - Preemption occurs if a new task arrives with strictly higher priority.
   - Return the completion time of each task.

Input Format:
- tasks: List of lists [id, arrival, burst, nice]

Output Format:
- Return a list of [id, completion_time] sorted by id

Constraints:
- 1 <= tasks.length <= 1000
- 1 <= burst <= 1000`,
            examples: [
                { input: 'tasks = [[1,0,10,0],[2,2,5,-10]]', output: '[[1,15],[2,7]]' },
                { input: 'tasks = [[1,0,10,0],[2,5,5,10]]', output: '[[1,10],[2,15]]' }
            ],
            testCases: [
                { input: 'tasks = [[1,0,10,0],[2,2,5,-10]]', judgeInput: '2\n1 0 10 0\n2 2 5 -10', output: '[[1,15],[2,7]]' },
                { input: 'tasks = [[1,0,10,0],[2,5,5,10]]', judgeInput: '2\n1 0 10 0\n2 5 5 10', output: '[[1,10],[2,15]]' },
                { input: 'tasks = [[1,0,5,0],[2,1,5,-5],[3,2,5,-10]]', judgeInput: '3\n1 0 5 0\n2 1 5 -5\n3 2 5 -10', output: '[[1,15],[2,14],[3,7]]' },
                { input: 'tasks = [[1,0,10,0]]', judgeInput: '1\n1 0 10 0', output: '[[1,10]]' },
                { input: 'tasks = [[1,0,10,0],[2,0,10,0]]', judgeInput: '2\n1 0 10 0\n2 0 10 0', output: '[[1,10],[2,20]]' },
                { input: 'tasks = [[1,0,10,0],[2,2,2,-1],[3,4,2,-2]]', judgeInput: '3\n1 0 10 0\n2 2 2 -1\n3 4 2 -2', output: '[[1,14],[2,8],[3,6]]' },
                { input: 'tasks = [[1,0,100,0],[2,10,10,-20]]', judgeInput: '2\n1 0 100 0\n2 10 10 -20', output: '[[1,110],[2,20]]' },
                { input: 'tasks = [[1,0,1,0],[2,1,1,0],[3,2,1,0]]', judgeInput: '3\n1 0 1 0\n2 1 1 0\n3 2 1 0', output: '[[1,1],[2,2],[3,3]]' },
                { input: 'tasks = [[1,0,10,0],[2,1,10,-1],[3,2,10,-2],[4,3,10,-3]]', judgeInput: '4\n1 0 10 0\n2 1 10 -1\n3 2 10 -2\n4 3 10 -3', output: '[[1,40],[2,33],[3,24],[4,13]]' },
                { input: 'tasks = [[1,0,5,0],[2,0,5,1],[3,0,5,-1]]', judgeInput: '3\n1 0 5 0\n2 0 5 1\n3 0 5 -1', output: '[[1,10],[2,15],[3,5]]' },
                { input: 'tasks = [[1,0,10,0],[2,5,5,-1],[3,10,5,-2]]', judgeInput: '3\n1 0 10 0\n2 5 5 -1\n3 10 5 -2', output: '[[1,20],[2,15],[3,15]]' },
                { input: 'tasks = [[1,0,10,0],[2,1,1,-1]]', judgeInput: '2\n1 0 10 0\n2 1 1 -1', output: '[[1,11],[2,2]]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} tasks
 * @return {number[][]}
 */
function scheduleTasks(tasks) {
    // Your code here
}`,
                python: `def schedule_tasks(tasks):
    """
    :type tasks: List[List[int]]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<int>> scheduleTasks(vector<vector<int>>& tasks) {
    // Your code here
}`,
                java: `public class Solution {
    public int[][] scheduleTasks(int[][] tasks) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const tasks = [];\n    for(let i=1; i<=n; i++) tasks.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(scheduleTasks(tasks)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntasks = []\nfor i in range(1, n+1):\n    tasks.append(list(map(int, lines[i].split())))\nprint(json.dumps(schedule_tasks(tasks)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<vector<int>> scheduleTasks(vector<vector<int>>& tasks);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> tasks(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> tasks[i][0] >> tasks[i][1] >> tasks[i][2] >> tasks[i][3];\n    vector<vector<int>> res = scheduleTasks(tasks);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << res[i][0] << "," << res[i][1] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] tasks = new int[n][4];\n        for(int i=0; i<n; i++) {\n            tasks[i][0] = sc.nextInt();\n            tasks[i][1] = sc.nextInt();\n            tasks[i][2] = sc.nextInt();\n            tasks[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[][] res = sol.scheduleTasks(tasks);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + res[i][0] + "," + res[i][1] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'dependency-hell',
            title: 'Dependency Hell Resolver',
            difficulty: 'Hard',
            description: `Resolve circular dependencies in RPM packages.

You are given:
- \`packages\`: List of \`[id, version]\`.
- \`dependencies\`: List of \`[id, version, depends_on_id, depends_on_version]\`.

Goal: Determine if a valid installation order exists.
A package A depends on B means B must be installed *before* A.
However, sometimes A depends on B, and B depends on A (Circular).
In Red Hat systems, circular dependencies are sometimes allowed if they are "weak" (runtime only), but here we assume **strict** install-time dependencies.
Return \`true\` if valid order exists, \`false\` if circular dependency detected.
Wait, that's just cycle detection.
Let's add complexity: **Version Conflicts**.
You have multiple versions of the same package ID.
Dependency: \`[id=1, ver=2]\` depends on \`[id=2, ver=ANY]\`.
Or \`[id=1, ver=2]\` depends on \`[id=2, ver>=1.5]\`.
Goal: Select exactly one version for each package ID such that all dependencies are satisfied.
Return the list of selected \`[id, version]\` sorted by ID. If impossible, return empty list.

Input Format:
- packages: List of lists [id, version] (version is integer for simplicity)
- dependencies: List of lists [id, ver, dep_id, min_ver]

Output Format:
- Return a list of [id, version]

Constraints:
- 1 <= packages.length <= 100
- 1 <= dependencies.length <= 500`,
            examples: [
                { input: 'pkgs = [[1,1],[1,2],[2,1]], deps = [[1,2,2,1]]', output: '[[1,2],[2,1]]' },
                { input: 'pkgs = [[1,1],[2,1]], deps = [[1,1,2,2]]', output: '[]' }
            ],
            testCases: [
                { input: 'pkgs = [[1,1],[1,2],[2,1]], deps = [[1,2,2,1]]', judgeInput: '3\n1 1\n1 2\n2 1\n1\n1 2 2 1', output: '[[1,2],[2,1]]' },
                { input: 'pkgs = [[1,1],[2,1]], deps = [[1,1,2,2]]', judgeInput: '2\n1 1\n2 1\n1\n1 1 2 2', output: '[]' },
                { input: 'pkgs = [[1,1],[2,1]], deps = [[1,1,2,1],[2,1,1,1]]', judgeInput: '2\n1 1\n2 1\n2\n1 1 2 1\n2 1 1 1', output: '[]' },
                { input: 'pkgs = [[1,10],[2,10],[3,10]], deps = [[1,10,2,10],[2,10,3,10]]', judgeInput: '3\n1 10\n2 10\n3 10\n2\n1 10 2 10\n2 10 3 10', output: '[[1,10],[2,10],[3,10]]' },
                { input: 'pkgs = [[1,1],[1,2]], deps = []', judgeInput: '2\n1 1\n1 2\n0', output: '[[1,1]]' },
                { input: 'pkgs = [[1,1],[1,2],[2,1],[2,2]], deps = [[1,2,2,2]]', judgeInput: '4\n1 1\n1 2\n2 1\n2 2\n1\n1 2 2 2', output: '[[1,2],[2,2]]' },
                { input: 'pkgs = [[1,1],[2,1]], deps = [[1,1,2,1]]', judgeInput: '2\n1 1\n2 1\n1\n1 1 2 1', output: '[[1,1],[2,1]]' },
                { input: 'pkgs = [[1,1],[2,1],[3,1]], deps = [[1,1,2,1],[2,1,3,1],[3,1,1,1]]', judgeInput: '3\n1 1\n2 1\n3 1\n3\n1 1 2 1\n2 1 3 1\n3 1 1 1', output: '[]' },
                { input: 'pkgs = [[1,1],[1,2],[2,1]], deps = [[1,1,2,2]]', judgeInput: '3\n1 1\n1 2\n2 1\n1\n1 1 2 2', output: '[[1,2],[2,1]]' },
                { input: 'pkgs = [[1,1],[2,1],[2,2]], deps = [[1,1,2,2]]', judgeInput: '3\n1 1\n2 1\n2 2\n1\n1 1 2 2', output: '[[1,1],[2,2]]' },
                { input: 'pkgs = [[1,1]], deps = [[1,1,1,1]]', judgeInput: '1\n1 1\n1\n1 1 1 1', output: '[]' },
                { input: 'pkgs = [[1,1],[2,1]], deps = [[1,1,2,1]]', judgeInput: '2\n1 1\n2 1\n1\n1 1 2 1', output: '[[1,1],[2,1]]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} packages
 * @param {number[][]} dependencies
 * @return {number[][]}
 */
function resolveDependencies(packages, dependencies) {
    // Your code here
}`,
                python: `def resolve_dependencies(packages, dependencies):
    """
    :type packages: List[List[int]]
    :type dependencies: List[List[int]]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<int>> resolveDependencies(vector<vector<int>>& packages, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int[][] resolveDependencies(int[][] packages, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const packages = [];\n    for(let i=1; i<=n; i++) packages.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const dependencies = [];\n    for(let i=n+2; i<n+2+m; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(resolveDependencies(packages, dependencies)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\npackages = []\nfor i in range(1, n+1):\n    packages.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\ndependencies = []\nfor i in range(n+2, n+2+m):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(json.dumps(resolve_dependencies(packages, dependencies)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<vector<int>> resolveDependencies(vector<vector<int>>& packages, vector<vector<int>>& dependencies);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> packages(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> packages[i][0] >> packages[i][1];\n    cin >> m;\n    vector<vector<int>> dependencies(m, vector<int>(4));\n    for(int i=0; i<m; ++i) cin >> dependencies[i][0] >> dependencies[i][1] >> dependencies[i][2] >> dependencies[i][3];\n    vector<vector<int>> res = resolveDependencies(packages, dependencies);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << res[i][0] << "," << res[i][1] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] packages = new int[n][2];\n        for(int i=0; i<n; i++) {\n            packages[i][0] = sc.nextInt();\n            packages[i][1] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] dependencies = new int[m][4];\n        for(int i=0; i<m; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n            dependencies[i][2] = sc.nextInt();\n            dependencies[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[][] res = sol.resolveDependencies(packages, dependencies);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + res[i][0] + "," + res[i][1] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
