export const ibmData = {
    id: 'ibm',
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'Practice real IBM Online Assessment questions.',
    assessments: [{
        id: 'ibm-oa-1',
        title: 'IBM OA-1',
        duration: 90,
        problems: [{
            id: 'mainframe-job-scheduler',
            title: 'Mainframe Job Scheduler',
            difficulty: 'Medium',
            description: `IBM mainframes need to schedule batch jobs efficiently. Given jobs with dependencies, find a valid execution order.

You are given:
- jobs: Number of jobs (0 to n-1)
- dependencies: List of [job_a, job_b] meaning job_a must complete before job_b

Goal: Return a valid job execution order. If no valid order exists (cycle), return empty array.

Input Format:
- jobs: Integer
- dependencies: List of pairs [a, b]

Output Format:
- Return a list of job IDs

Constraints:
- 1 <= jobs <= 100
- 0 <= dependencies.length <= 500`,
            examples: [
                { input: 'jobs = 3, dependencies = [[0,1],[1,2]]', output: '[0,1,2]' },
                { input: 'jobs = 2, dependencies = [[0,1],[1,0]]', output: '[]' }
            ],
            testCases: [
                { input: 'jobs = 3, dependencies = [[0,1],[1,2]]', judgeInput: '3\n2\n0 1\n1 2', output: '[0,1,2]' },
                { input: 'jobs = 2, dependencies = [[0,1],[1,0]]', judgeInput: '2\n2\n0 1\n1 0', output: '[]' },
                { input: 'jobs = 4, dependencies = [[0,1],[0,2],[1,3],[2,3]]', judgeInput: '4\n4\n0 1\n0 2\n1 3\n2 3', output: '[0,1,2,3]' },
                { input: 'jobs = 1, dependencies = []', judgeInput: '1\n0', output: '[0]' },
                { input: 'jobs = 3, dependencies = [[0,1]]', judgeInput: '3\n1\n0 1', output: '[0,2,1]' },
                { input: 'jobs = 3, dependencies = [[0,1],[1,2],[2,0]]', judgeInput: '3\n3\n0 1\n1 2\n2 0', output: '[]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} jobs
 * @param {number[][]} dependencies
 * @return {number[]}
 */
function scheduleJobs(jobs, dependencies) {
    // Your code here
}`,
                python: `def schedule_jobs(jobs, dependencies):
    """
    :type jobs: int
    :type dependencies: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> scheduleJobs(int jobs, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] scheduleJobs(int jobs, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const jobs = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const dependencies = [];\n    for(let i=2; i<2+n; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(scheduleJobs(jobs, dependencies)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\njobs = int(lines[0])\nn = int(lines[1])\ndependencies = []\nfor i in range(2, 2+n):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(json.dumps(schedule_jobs(jobs, dependencies)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> scheduleJobs(int jobs, vector<vector<int>>& dependencies);\nint main() {\n    int jobs, n;\n    cin >> jobs >> n;\n    vector<vector<int>> dependencies(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    vector<int> res = scheduleJobs(jobs, dependencies);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int jobs = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] dependencies = new int[n][2];\n        for(int i=0; i<n; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.scheduleJobs(jobs, dependencies);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'watson-ai-optimizer',
            title: 'Watson AI Model Optimizer',
            difficulty: 'Hard',
            description: `IBM Watson needs to optimize AI model training by selecting the best hyperparameters within a budget.

You are given:
- models: List of [model_id, accuracy, cost]
- budget: Maximum training budget

Goal: Select models to maximize total accuracy without exceeding budget. Return maximum achievable accuracy.

Input Format:
- models: List of lists [id, accuracy, cost]
- budget: Integer

Output Format:
- Return an integer (max accuracy)

Constraints:
- 1 <= models.length <= 100
- 1 <= accuracy, cost, budget <= 1000`,
            examples: [
                { input: 'models = [[1,50,10],[2,80,30],[3,60,20]], budget = 40', output: '110' },
                { input: 'models = [[1,100,50]], budget = 40', output: '0' }
            ],
            testCases: [
                { input: 'models = [[1,50,10],[2,80,30],[3,60,20]], budget = 40', judgeInput: '3\n1 50 10\n2 80 30\n3 60 20\n40', output: '110' },
                { input: 'models = [[1,100,50]], budget = 40', judgeInput: '1\n1 100 50\n40', output: '0' },
                { input: 'models = [[1,10,10],[2,20,20],[3,30,30]], budget = 50', output: '50' },
                { input: 'models = [[1,50,25],[2,50,25]], budget = 50', judgeInput: '2\n1 50 25\n2 50 25\n50', output: '100' },
                { input: 'models = [[1,100,10]], budget = 100', judgeInput: '1\n1 100 10\n100', output: '100' },
                { input: 'models = [[1,10,20],[2,20,30]], budget = 10', judgeInput: '2\n1 10 20\n2 20 30\n10', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} models
 * @param {number} budget
 * @return {number}
 */
function maxAccuracy(models, budget) {
    // Your code here
}`,
                python: `def max_accuracy(models, budget):
    """
    :type models: List[List[int]]
    :type budget: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxAccuracy(vector<vector<int>>& models, int budget) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxAccuracy(int[][] models, int budget) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const models = [];\n    for(let i=1; i<=n; i++) models.push(lines[i].split(' ').map(Number));\n    const budget = parseInt(lines[n+1]);\n    console.log(maxAccuracy(models, budget));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmodels = []\nfor i in range(1, n+1):\n    models.append(list(map(int, lines[i].split())))\nbudget = int(lines[n+1])\nprint(max_accuracy(models, budget))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxAccuracy(vector<vector<int>>& models, int budget);\nint main() {\n    int n, budget;\n    cin >> n;\n    vector<vector<int>> models(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> models[i][0] >> models[i][1] >> models[i][2];\n    cin >> budget;\n    cout << maxAccuracy(models, budget) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] models = new int[n][3];\n        for(int i=0; i<n; i++) {\n            models[i][0] = sc.nextInt();\n            models[i][1] = sc.nextInt();\n            models[i][2] = sc.nextInt();\n        }\n        int budget = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxAccuracy(models, budget));\n    }\n}`
            }
        }]
    }]
};
