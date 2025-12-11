export const accentureData = {
    id: 'accenture',
    name: 'Accenture',
    logo: 'https://logo.clearbit.com/accenture.com',
    description: 'Practice real Accenture Online Assessment questions.',
    assessments: [{
        id: 'accenture-oa-1',
        title: 'Accenture OA-1',
        duration: 90,
        problems: [{
            id: 'resource-allocation',
            title: 'Project Resource Allocation',
            difficulty: 'Medium',
            description: `Problem Description
Accenture needs to allocate consultants to projects based on their skills and project requirements. Each consultant has a skill level, and each project requires a minimum skill level.

You are given:
- \`consultants\`: A list of integers representing consultant skill levels.
- \`projects\`: A list of integers representing minimum skill requirements for projects.

**Goal:**
Maximize the number of projects that can be assigned consultants. Each consultant can be assigned to at most one project, and a consultant can only be assigned to a project if their skill level >= the project's requirement.

Return the maximum number of projects that can be completed.

### Input Format
- \`consultants\`: List of integers
- \`projects\`: List of integers

### Output Format
- Return an integer representing the maximum number of projects.

### Constraints
- \`1 <= consultants.length, projects.length <= 1000\`
- \`1 <= skill level, requirement <= 100\``,
            examples: [
                { input: 'consultants = [5,3,7], projects = [4,6,2]', output: '3' },
                { input: 'consultants = [2,4], projects = [5,6,3]', output: '1' }
            ],
            testCases: [
                { input: 'consultants = [5,3,7], projects = [4,6,2]', judgeInput: '3\n5 3 7\n3\n4 6 2', output: '3' },
                { input: 'consultants = [2,4], projects = [5,6,3]', judgeInput: '2\n2 4\n3\n5 6 3', output: '1' },
                { input: 'consultants = [10,20,30], projects = [5,15,25]', judgeInput: '3\n10 20 30\n3\n5 15 25', output: '3' },
                { input: 'consultants = [1,1,1], projects = [2,2,2]', judgeInput: '3\n1 1 1\n3\n2 2 2', output: '0' },
                { input: 'consultants = [50], projects = [10,20,30,40,50]', judgeInput: '1\n50\n5\n10 20 30 40 50', output: '1' },
                { input: 'consultants = [8,6,9,7], projects = [5,8,7]', judgeInput: '4\n8 6 9 7\n3\n5 8 7', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} consultants
 * @param {number[]} projects
 * @return {number}
 */
function maxProjects(consultants, projects) {
    // Your code here
}`,
                python: `def max_projects(consultants, projects):
    """
    :type consultants: List[int]
    :type projects: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxProjects(vector<int>& consultants, vector<int>& projects) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxProjects(int[] consultants, int[] projects) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n1 = parseInt(lines[0]);\n    const consultants = lines[1].split(' ').map(Number);\n    const n2 = parseInt(lines[2]);\n    const projects = lines[3].split(' ').map(Number);\n    console.log(maxProjects(consultants, projects));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn1 = int(lines[0])\nconsultants = list(map(int, lines[1].split()))\nn2 = int(lines[2])\nprojects = list(map(int, lines[3].split()))\nprint(max_projects(consultants, projects))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxProjects(vector<int>& consultants, vector<int>& projects);\nint main() {\n    int n1, n2;\n    cin >> n1;\n    vector<int> consultants(n1);\n    for(int i=0; i<n1; ++i) cin >> consultants[i];\n    cin >> n2;\n    vector<int> projects(n2);\n    for(int i=0; i<n2; ++i) cin >> projects[i];\n    cout << maxProjects(consultants, projects) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n1 = sc.nextInt();\n        int[] consultants = new int[n1];\n        for(int i=0; i<n1; i++) consultants[i] = sc.nextInt();\n        int n2 = sc.nextInt();\n        int[] projects = new int[n2];\n        for(int i=0; i<n2; i++) projects[i] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxProjects(consultants, projects));\n    }\n}`
            }
        }, {
            id: 'workflow-scheduler',
            title: 'Client Workflow Task Scheduler',
            difficulty: 'Hard',
            description: `Problem Description
Accenture manages complex client workflows with dependencies between tasks. Given a set of tasks and their dependencies, determine if it's possible to complete all tasks and return a valid execution order.

You are given:
- \`n\`: Number of tasks (labeled 0 to n-1).
- \`dependencies\`: A list of \`[task_a, task_b]\` meaning task_a must be completed before task_b.
- \`deadlines\`: A list where \`deadlines[i]\` is the maximum time by which task \`i\` must start.

**Goal:**
Return a valid task execution order that:
1. Respects all dependencies
2. Ensures each task starts before its deadline

If impossible, return an empty array.

### Input Format
- \`n\`: Integer
- \`dependencies\`: List of pairs \`[a, b]\`
- \`deadlines\`: List of integers

### Output Format
- Return a list of integers representing the task order.

### Constraints
- \`1 <= n <= 100\`
- \`0 <= dependencies.length <= 1000\`
- \`0 <= deadlines[i] <= 1000\``,
            examples: [
                { input: 'n = 3, dependencies = [[0,1],[1,2]], deadlines = [0,1,2]', output: '[0,1,2]' },
                { input: 'n = 2, dependencies = [[0,1]], deadlines = [5,0]', output: '[]' }
            ],
            testCases: [
                { input: 'n = 3, dependencies = [[0,1],[1,2]], deadlines = [0,1,2]', judgeInput: '3\n2\n0 1\n1 2\n0 1 2', output: '[0,1,2]' },
                { input: 'n = 2, dependencies = [[0,1]], deadlines = [5,0]', judgeInput: '2\n1\n0 1\n5 0', output: '[]' },
                { input: 'n = 4, dependencies = [[0,1],[0,2],[1,3],[2,3]], deadlines = [0,1,1,2]', judgeInput: '4\n4\n0 1\n0 2\n1 3\n2 3\n0 1 1 2', output: '[0,1,2,3]' },
                { input: 'n = 1, dependencies = [], deadlines = [10]', judgeInput: '1\n0\n10', output: '[0]' },
                { input: 'n = 3, dependencies = [[0,1],[1,2],[2,0]], deadlines = [0,1,2]', judgeInput: '3\n3\n0 1\n1 2\n2 0\n0 1 2', output: '[]' },
                { input: 'n = 5, dependencies = [[0,1],[1,2],[3,4]], deadlines = [0,1,2,0,1]', judgeInput: '5\n3\n0 1\n1 2\n3 4\n0 1 2 0 1', output: '[0,3,1,4,2]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number[]} deadlines
 * @return {number[]}
 */
function scheduleWorkflow(n, dependencies, deadlines) {
    // Your code here
}`,
                python: `def schedule_workflow(n, dependencies, deadlines):
    """
    :type n: int
    :type dependencies: List[List[int]]
    :type deadlines: List[int]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> scheduleWorkflow(int n, vector<vector<int>>& dependencies, vector<int>& deadlines) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] scheduleWorkflow(int n, int[][] dependencies, int[] deadlines) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const m = parseInt(lines[1]);\n    const dependencies = [];\n    for(let i=2; i<m+2; i++) dependencies.push(lines[i].split(' ').map(Number));\n    const deadlines = lines[m+2].split(' ').map(Number);\n    console.log(JSON.stringify(scheduleWorkflow(n, dependencies, deadlines)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nm = int(lines[1])\ndependencies = []\nfor i in range(2, m+2):\n    dependencies.append(list(map(int, lines[i].split())))\ndeadlines = list(map(int, lines[m+2].split()))\nprint(json.dumps(schedule_workflow(n, dependencies, deadlines)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> scheduleWorkflow(int n, vector<vector<int>>& dependencies, vector<int>& deadlines);\nint main() {\n    int n, m;\n    cin >> n >> m;\n    vector<vector<int>> dependencies(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    vector<int> deadlines(n);\n    for(int i=0; i<n; ++i) cin >> deadlines[i];\n    vector<int> res = scheduleWorkflow(n, dependencies, deadlines);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int m = sc.nextInt();\n        int[][] dependencies = new int[m][2];\n        for(int i=0; i<m; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        int[] deadlines = new int[n];\n        for(int i=0; i<n; i++) deadlines[i] = sc.nextInt();\n        Solution sol = new Solution();\n        int[] res = sol.scheduleWorkflow(n, dependencies, deadlines);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
