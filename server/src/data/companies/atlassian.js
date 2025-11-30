export const atlassianData = {
    id: 'atlassian',
    name: 'Atlassian',
    logo: 'https://logo.clearbit.com/atlassian.com',
    description: 'Practice real Atlassian Online Assessment questions.',
    assessments: [{
        id: 'atlassian-oa-1',
        title: 'Atlassian OA-1',
        duration: 90,
        problems: [{
            id: 'jira-dependency',
            title: 'JIRA Task Dependency Resolver',
            difficulty: 'Medium',
            description: `### Problem Description
In JIRA, tasks often have dependencies (e.g., Task A must be completed before Task B). To ensure a smooth workflow, we need to find a valid order to execute all tasks.

You are given:
- \`tasks\`: The total number of tasks, labeled from \`0\` to \`tasks - 1\`.
- \`dependencies\`: A list of pairs \`[a, b]\`, meaning task \`a\` must be completed before task \`b\`.

**Goal:**
Return a valid ordering of tasks that satisfies all dependencies. If multiple valid orders exist, return any one of them. If it is impossible to complete all tasks (due to a cycle), return an **empty array**.

### Input Format
- \`tasks\`: Integer
- \`dependencies\`: List of pairs \`[a, b]\`

### Output Format
- Return a list of integers representing the task order.

### Constraints
- \`1 <= tasks <= 100\`
- \`0 <= dependencies.length <= 1000\`
- All pairs \`[a, b]\` are distinct.`,
            examples: [
                { input: 'tasks = 4, dependencies = [[0,1],[1,2],[2,3]]', output: '[0,1,2,3]' },
                { input: 'tasks = 2, dependencies = [[1,0]]', output: '[1,0]' }
            ],
            testCases: [
                { input: 'tasks = 4, dependencies = [[0,1],[1,2],[2,3]]', judgeInput: '4\n3\n0 1\n1 2\n2 3', output: '[0,1,2,3]' },
                { input: 'tasks = 2, dependencies = [[0,1],[1,0]]', judgeInput: '2\n2\n0 1\n1 0', output: '[]' },
                { input: 'tasks = 3, dependencies = [[0,1],[0,2]]', judgeInput: '3\n2\n0 1\n0 2', output: '[0,1,2]' },
                { input: 'tasks = 1, dependencies = []', judgeInput: '1\n0', output: '[0]' },
                { input: 'tasks = 5, dependencies = [[0,1],[1,2],[3,4]]', judgeInput: '5\n3\n0 1\n1 2\n3 4', output: '[0,3,1,4,2]' },
                { input: 'tasks = 3, dependencies = [[0,1],[1,2],[2,0]]', judgeInput: '3\n3\n0 1\n1 2\n2 0', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} tasks
 * @param {number[][]} dependencies
 * @return {number[]}
 */
function taskOrder(tasks, dependencies) {
    // Your code here
}`,
                python: `def task_order(tasks, dependencies):
    """
    :type tasks: int
    :type dependencies: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> taskOrder(int tasks, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] taskOrder(int tasks, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const tasks = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const dependencies = [];\n    for(let i=2; i<n+2; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(taskOrder(tasks, dependencies)));\n});`, python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\ntasks = int(lines[0])\nn = int(lines[1])\ndependencies = []\nfor i in range(2, n+2):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(json.dumps(task_order(tasks, dependencies)))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> taskOrder(int tasks, vector<vector<int>>& dependencies);\nint main() {\n    int tasks, n;\n    cin >> tasks >> n;\n    vector<vector<int>> dependencies(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    vector<int> res = taskOrder(tasks, dependencies);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int tasks = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] dependencies = new int[n][2];\n        for(int i=0; i<n; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.taskOrder(tasks, dependencies);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}` }
        }, {
            id: 'confluence-page-rank',
            title: 'Confluence Page Ranking Algorithm',
            difficulty: 'Hard',
            description: `### Problem Description
Confluence needs to rank pages based on their importance, similar to how search engines rank websites.

You are given:
- \`pages\`: The total number of pages, labeled \`0\` to \`pages - 1\`.
- \`links\`: A list of pairs \`[a, b]\`, meaning page \`a\` links to page \`b\`.
- \`iterations\`: The number of ranking updates to perform.

**Ranking Logic:**
1. Initially, all pages have a rank of \`1.0\`.
2. In each iteration, a page distributes its current rank equally to all pages it links to.
3. If a page has no outgoing links, its rank is lost (for this simplified version).
4. A page's new rank is the sum of ranks received from other pages.

**Goal:**
After \`iterations\`, return the **index of the page with the highest rank**. If there is a tie, return the smallest index.

### Input Format
- \`pages\`: Integer
- \`links\`: List of pairs
- \`iterations\`: Integer

### Output Format
- Return an integer (page index).

### Constraints
- \`1 <= pages <= 100\`
- \`1 <= iterations <= 50\``,
            examples: [
                { input: 'pages = 3, links = [[0,1],[1,2],[2,0]], iterations = 10', output: '0' },
                { input: 'pages = 4, links = [[0,1],[0,2],[0,3]], iterations = 10', output: '1' }
            ],
            testCases: [
                { input: 'pages = 3, links = [[0,1],[1,2],[2,0]], iterations = 10', judgeInput: '3\n3\n0 1\n1 2\n2 0\n10', output: '0' },
                { input: 'pages = 2, links = [[0,1]], iterations = 5', judgeInput: '2\n1\n0 1\n5', output: '1' },
                { input: 'pages = 4, links = [[0,1],[0,2],[0,3]], iterations = 10', judgeInput: '4\n3\n0 1\n0 2\n0 3\n10', output: '1' },
                { input: 'pages = 1, links = [], iterations = 5', judgeInput: '1\n0\n5', output: '0' },
                { input: 'pages = 5, links = [[0,1],[1,2],[2,3],[3,4],[4,0]], iterations = 20', judgeInput: '5\n5\n0 1\n1 2\n2 3\n3 4\n4 0\n20', output: '0' },
                { input: 'pages = 3, links = [[0,1],[1,0]], iterations = 10', judgeInput: '3\n2\n0 1\n1 0\n10', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} pages
 * @param {number[][]} links
 * @param {number} iterations
 * @return {number}
 */
function topPage(pages, links, iterations) {
    // Your code here
}`,
                python: `def top_page(pages, links, iterations):
    """
    :type pages: int
    :type links: List[List[int]]
    :type iterations: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int topPage(int pages, vector<vector<int>>& links, int iterations) {
    // Your code here
}`,
                java: `public class Solution {
    public int topPage(int pages, int[][] links, int iterations) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const pages = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const links = [];\n    for(let i=2; i<n+2; i++) links.push(lines[i].split(' ').map(Number));\n    const iterations = parseInt(lines[n+2]);\n    console.log(topPage(pages, links, iterations));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\npages = int(lines[0])\nn = int(lines[1])\nlinks = []\nfor i in range(2, n+2):\n    links.append(list(map(int, lines[i].split())))\niterations = int(lines[n+2])\nprint(top_page(pages, links, iterations))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint topPage(int pages, vector<vector<int>>& links, int iterations);\nint main() {\n    int pages, n, iterations;\n    cin >> pages >> n;\n    vector<vector<int>> links(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> links[i][0] >> links[i][1];\n    cin >> iterations;\n    cout << topPage(pages, links, iterations) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int pages = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] links = new int[n][2];\n        for(int i=0; i<n; i++) {\n            links[i][0] = sc.nextInt();\n            links[i][1] = sc.nextInt();\n        }\n        int iterations = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.topPage(pages, links, iterations));\n    }\n}` }
        }]
    }]
};
