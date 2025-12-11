export const nvidiaData = {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: 'https://logo.clearbit.com/nvidia.com',
    description: 'Practice real NVIDIA Online Assessment questions.',
    assessments: [{
        id: 'nvidia-oa-1',
        title: 'NVIDIA OA-1',
        duration: 90,
        problems: [{
            id: 'gpu-scheduling',
            title: 'GPU Task Scheduler',
            difficulty: 'Hard',
            description: `Schedule tasks on GPUs to minimize total completion time.

You are given:
- tasks: List of [task_id, compute_time]
- num_gpus: Number of available GPUs

Goal: Assign tasks to GPUs to minimize maximum completion time across all GPUs (load balancing). Use greedy approach: always assign next task to GPU with minimum current load. Return the maximum completion time among all GPUs.

Input Format:
- tasks: List of lists [id, time]
- num_gpus: Integer

Output Format:
- Return an integer (max completion time)

Constraints:
- 1 <= tasks.length <= 1000
- 1 <= num_gpus <= 100
- 1 <= compute_time <= 10000`,
            examples: [
                { input: 'tasks = [[1,100],[2,200],[3,150]], num_gpus = 2', output: '250' },
                { input: 'tasks = [[1,50],[2,50],[3,50]], num_gpus = 3', output: '50' }
            ],
            testCases: [
                { input: 'tasks = [[1,100],[2,200],[3,150]], num_gpus = 2', judgeInput: '3\n1 100\n2 200\n3 150\n2', output: '250' },
                { input: 'tasks = [[1,50],[2,50],[3,50]], num_gpus = 3', judgeInput: '3\n1 50\n2 50\n3 50\n3', output: '50' },
                { input: 'tasks = [[1,1000]], num_gpus = 1', judgeInput: '1\n1 1000\n1', output: '1000' },
                { input: 'tasks = [[1,300],[2,300],[3,300]], num_gpus = 1', judgeInput: '3\n1 300\n2 300\n3 300\n1', output: '900' },
                { input: 'tasks = [[1,100],[2,100],[3,100],[4,100]], num_gpus = 2', judgeInput: '4\n1 100\n2 100\n3 100\n4 100\n2', output: '200' },
                { input: 'tasks = [[1,500],[2,400],[3,300],[4,200]], num_gpus = 4', judgeInput: '4\n1 500\n2 400\n3 300\n4 200\n4', output: '500' },
                { input: 'tasks = [[1,250],[2,250],[3,250],[4,250]], num_gpus = 2', judgeInput: '4\n1 250\n2 250\n3 250\n4 250\n2', output: '500' },
                { input: 'tasks = [[1,150],[2,200],[3,100],[4,150],[5,200]], num_gpus = 3', judgeInput: '5\n1 150\n2 200\n3 100\n4 150\n5 200\n3', output: '350' },
                { input: 'tasks = [[1,600],[2,400]], num_gpus = 2', judgeInput: '2\n1 600\n2 400\n2', output: '600' },
                { input: 'tasks = [[1,100],[2,200],[3,300],[4,400],[5,500]], num_gpus = 5', judgeInput: '5\n1 100\n2 200\n3 300\n4 400\n5 500\n5', output: '500' },
                { input: 'tasks = [[1,1000],[2,2000],[3,3000]], num_gpus = 2', judgeInput: '3\n1 1000\n2 2000\n3 3000\n2', output: '4000' },
                { input: 'tasks = [[1,50],[2,100],[3,150],[4,200],[5,250],[6,300]], num_gpus = 3', judgeInput: '6\n1 50\n2 100\n3 150\n4 200\n5 250\n6 300\n3', output: '400' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} tasks
 * @param {number} num_gpus
 * @return {number}
 */
function minCompletionTime(tasks, num_gpus) {
    // Your code here
}`,
                python: `def min_completion_time(tasks, num_gpus):
    """
    :type tasks: List[List[int]]
    :type num_gpus: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minCompletionTime(vector<vector<int>>& tasks, int num_gpus) {
    // Your code here
}`,
                java: `public class Solution {
    public int minCompletionTime(int[][] tasks, int num_gpus) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const tasks = [];\n    for(let i=1; i<=n; i++) tasks.push(lines[i].split(' ').map(Number));\n    const num_gpus = parseInt(lines[n+1]);\n    console.log(minCompletionTime(tasks, num_gpus));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntasks = []\nfor i in range(1, n+1):\n    tasks.append(list(map(int, lines[i].split())))\nnum_gpus = int(lines[n+1])\nprint(min_completion_time(tasks, num_gpus))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minCompletionTime(vector<vector<int>>& tasks, int num_gpus);\nint main() {\n    int n, num_gpus;\n    cin >> n;\n    vector<vector<int>> tasks(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> tasks[i][0] >> tasks[i][1];\n    cin >> num_gpus;\n    cout << minCompletionTime(tasks, num_gpus) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] tasks = new int[n][2];\n        for(int i=0; i<n; i++) {\n            tasks[i][0] = sc.nextInt();\n            tasks[i][1] = sc.nextInt();\n        }\n        int num_gpus = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minCompletionTime(tasks, num_gpus));\n    }\n}`
            }
        }, {
            id: 'tensor-memory',
            title: 'Tensor Memory Allocation',
            difficulty: 'Medium',
            description: `Determine if tensors can fit in GPU memory with given constraints.

You are given:
- tensors: List of [tensor_id, memory_mb]
- total_memory: Total available GPU memory in MB

Goal: Check if all tensors can fit in memory simultaneously. Return 1 if yes, 0 if no.

Input Format:
- tensors: List of lists [id, memory]
- total_memory: Integer

Output Format:
- Return 0 or 1

Constraints:
- 1 <= tensors.length <= 1000
- 1 <= memory_mb <= 100000
- 1 <= total_memory <= 1000000`,
            examples: [
                { input: 'tensors = [[1,1000],[2,2000],[3,1500]], total_memory = 5000', output: '1' },
                { input: 'tensors = [[1,3000],[2,3000]], total_memory = 5000', output: '0' }
            ],
            testCases: [
                { input: 'tensors = [[1,1000],[2,2000],[3,1500]], total_memory = 5000', judgeInput: '3\n1 1000\n2 2000\n3 1500\n5000', output: '1' },
                { input: 'tensors = [[1,3000],[2,3000]], total_memory = 5000', judgeInput: '2\n1 3000\n2 3000\n5000', output: '0' },
                { input: 'tensors = [[1,500]], total_memory = 500', judgeInput: '1\n1 500\n500', output: '1' },
                { input: 'tensors = [[1,1000]], total_memory = 999', judgeInput: '1\n1 1000\n999', output: '0' },
                { input: 'tensors = [[1,2000],[2,2000],[3,2000],[4,2000]], total_memory = 8000', judgeInput: '4\n1 2000\n2 2000\n3 2000\n4 2000\n8000', output: '1' },
                { input: 'tensors = [[1,5000],[2,5000]], total_memory = 9999', judgeInput: '2\n1 5000\n2 5000\n9999', output: '0' },
                { input: 'tensors = [[1,100],[2,200],[3,300],[4,400]], total_memory = 1000', judgeInput: '4\n1 100\n2 200\n3 300\n4 400\n1000', output: '1' },
                { input: 'tensors = [[1,7000]], total_memory = 10000', judgeInput: '1\n1 7000\n10000', output: '1' },
                { input: 'tensors = [[1,1500],[2,1500],[3,1500],[4,1500],[5,1500]], total_memory = 7000', judgeInput: '5\n1 1500\n2 1500\n3 1500\n4 1500\n5 1500\n7000', output: '0' },
                { input: 'tensors = [[1,250],[2,250],[3,250],[4,250]], total_memory = 1000', judgeInput: '4\n1 250\n2 250\n3 250\n4 250\n1000', output: '1' },
                { input: 'tensors = [[1,10000],[2,20000],[3,30000]], total_memory = 60000', judgeInput: '3\n1 10000\n2 20000\n3 30000\n60000', output: '1' },
                { input: 'tensors = [[1,4500],[2,4500],[3,4500]], total_memory = 13000', judgeInput: '3\n1 4500\n2 4500\n3 4500\n13000', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} tensors
 * @param {number} total_memory
 * @return {number}
 */
function canFit(tensors, total_memory) {
    // Your code here
}`,
                python: `def can_fit(tensors, total_memory):
    """
    :type tensors: List[List[int]]
    :type total_memory: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int canFit(vector<vector<int>>& tensors, int total_memory) {
    // Your code here
}`,
                java: `public class Solution {
    public int canFit(int[][] tensors, int total_memory) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const tensors = [];\n    for(let i=1; i<=n; i++) tensors.push(lines[i].split(' ').map(Number));\n    const total_memory = parseInt(lines[n+1]);\n    console.log(canFit(tensors, total_memory));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ntensors = []\nfor i in range(1, n+1):\n    tensors.append(list(map(int, lines[i].split())))\ntotal_memory = int(lines[n+1])\nprint(can_fit(tensors, total_memory))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint canFit(vector<vector<int>>& tensors, int total_memory);\nint main() {\n    int n, total_memory;\n    cin >> n;\n    vector<vector<int>> tensors(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> tensors[i][0] >> tensors[i][1];\n    cin >> total_memory;\n    cout << canFit(tensors, total_memory) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] tensors = new int[n][2];\n        for(int i=0; i<n; i++) {\n            tensors[i][0] = sc.nextInt();\n            tensors[i][1] = sc.nextInt();\n        }\n        int total_memory = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.canFit(tensors, total_memory));\n    }\n}`
            }
        }]
    }]
};
