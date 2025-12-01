export const openaiData = {
    id: 'openai',
    name: 'OpenAI',
    logo: 'https://logo.clearbit.com/openai.com',
    description: 'Practice real OpenAI Online Assessment questions.',
    assessments: [{
        id: 'openai-oa-1',
        title: 'OpenAI OA-1',
        duration: 90,
        problems: [{
            id: 'token-counter',
            title: 'Token Usage Calculator',
            difficulty: 'Easy',
            description: `Calculate API token usage.

You are given:
- requests: List of [request_id, input_tokens, output_tokens]
- cost_per_1k_input: Cost per 1000 input tokens
- cost_per_1k_output: Cost per 1000 output tokens

Goal: Total cost = (sum(input_tokens)/1000 * cost_per_1k_input) + (sum(output_tokens)/1000 * cost_per_1k_output). Return total cost rounded to 2 decimals.

Input Format:
- requests: List of lists [id, input, output]
- cost_per_1k_input: Float
- cost_per_1k_output: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= requests.length <= 1000
- 1 <= tokens <= 100000
- 0.001 <= cost <= 1.0`,
            examples: [
                { input: 'requests = [[1,1000,500]], cost_per_1k_input = 0.01, cost_per_1k_output = 0.03', output: '0.03' },
                { input: 'requests = [[1,2000,1000],[2,3000,1500]], cost_per_1k_input = 0.02, cost_per_1k_output = 0.06', output: '0.25' }
            ],
            testCases: [
                { input: 'requests = [[1,1000,500]], cost_per_1k_input = 0.01, cost_per_1k_output = 0.03', judgeInput: '1\n1 1000 500\n0.01\n0.03', output: '0.03' },
                { input: 'requests = [[1,2000,1000],[2,3000,1500]], cost_per_1k_input = 0.02, cost_per_1k_output = 0.06', judgeInput: '2\n1 2000 1000\n2 3000 1500\n0.02\n0.06', output: '0.25' },
                { input: 'requests = [[1,5000,2500]], cost_per_1k_input = 0.015, cost_per_1k_output = 0.045', judgeInput: '1\n1 5000 2500\n0.015\n0.045', output: '0.19' },
                { input: 'requests = [[1,1500,750],[2,2500,1250]], cost_per_1k_input = 0.012, cost_per_1k_output = 0.036', judgeInput: '2\n1 1500 750\n2 2500 1250\n0.012\n0.036', output: '0.12' },
                { input: 'requests = [[1,10000,5000]], cost_per_1k_input = 0.02, cost_per_1k_output = 0.06', judgeInput: '1\n1 10000 5000\n0.02\n0.06', output: '0.50' },
                { input: 'requests = [[1,3500,1750],[2,4500,2250]], cost_per_1k_input = 0.018, cost_per_1k_output = 0.054', judgeInput: '2\n1 3500 1750\n2 4500 2250\n0.018\n0.054', output: '0.36' },
                { input: 'requests = [[1,8000,4000]], cost_per_1k_input = 0.025, cost_per_1k_output = 0.075', judgeInput: '1\n1 8000 4000\n0.025\n0.075', output: '0.50' },
                { input: 'requests = [[1,1200,600],[2,1800,900],[3,2400,1200]], cost_per_1k_input = 0.01, cost_per_1k_output = 0.03', judgeInput: '3\n1 1200 600\n2 1800 900\n3 2400 1200\n0.01\n0.03', output: '0.14' },
                { input: 'requests = [[1,6000,3000]], cost_per_1k_input = 0.022, cost_per_1k_output = 0.066', judgeInput: '1\n1 6000 3000\n0.022\n0.066', output: '0.33' },
                { input: 'requests = [[1,4000,2000],[2,5000,2500]], cost_per_1k_input = 0.016, cost_per_1k_output = 0.048', judgeInput: '2\n1 4000 2000\n2 5000 2500\n0.016\n0.048', output: '0.36' },
                { input: 'requests = [[1,7500,3750]], cost_per_1k_input = 0.014, cost_per_1k_output = 0.042', judgeInput: '1\n1 7500 3750\n0.014\n0.042', output: '0.26' },
                { input: 'requests = [[1,2200,1100],[2,2800,1400],[3,3400,1700]], cost_per_1k_input = 0.02, cost_per_1k_output = 0.06', judgeInput: '3\n1 2200 1100\n2 2800 1400\n3 3400 1700\n0.02\n0.06', output: '0.42' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} requests
 * @param {number} cost_per_1k_input
 * @param {number} cost_per_1k_output
 * @return {number}
 */
function totalCost(requests, cost_per_1k_input, cost_per_1k_output) {
    // Your code here
}`,
                python: `def total_cost(requests, cost_per_1k_input, cost_per_1k_output):
    """
    :type requests: List[List[int]]
    :type cost_per_1k_input: float
    :type cost_per_1k_output: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalCost(vector<vector<int>>& requests, double cost_per_1k_input, double cost_per_1k_output) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalCost(int[][] requests, double cost_per_1k_input, double cost_per_1k_output) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const requests = [];\n    for(let i=1; i<=n; i++) requests.push(lines[i].split(' ').map(Number));\n    const cost_per_1k_input = parseFloat(lines[n+1]);\n    const cost_per_1k_output = parseFloat(lines[n+2]);\n    console.log(totalCost(requests, cost_per_1k_input, cost_per_1k_output).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrequests = []\nfor i in range(1, n+1):\n    requests.append(list(map(int, lines[i].split())))\ncost_per_1k_input = float(lines[n+1])\ncost_per_1k_output = float(lines[n+2])\nprint(f'{total_cost(requests, cost_per_1k_input, cost_per_1k_output):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalCost(vector<vector<int>>& requests, double cost_per_1k_input, double cost_per_1k_output);\nint main() {\n    int n;\n    double cost_per_1k_input, cost_per_1k_output;\n    cin >> n;\n    vector<vector<int>> requests(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> requests[i][0] >> requests[i][1] >> requests[i][2];\n    cin >> cost_per_1k_input >> cost_per_1k_output;\n    cout << fixed << setprecision(2) << totalCost(requests, cost_per_1k_input, cost_per_1k_output) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] requests = new int[n][3];\n        for(int i=0; i<n; i++) {\n            requests[i][0] = sc.nextInt();\n            requests[i][1] = sc.nextInt();\n            requests[i][2] = sc.nextInt();\n        }\n        double cost_per_1k_input = sc.nextDouble();\n        double cost_per_1k_output = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalCost(requests, cost_per_1k_input, cost_per_1k_output));\n    }\n}`
            }
        }, {
            id: 'context-window',
            title: 'Context Window Manager',
            difficulty: 'Medium',
            description: `Manage conversation context windows.

You are given:
- messages: List of [message_id, token_count]
- max_context_tokens: Maximum tokens allowed in context

Goal: Include messages from the end backwards until adding another would exceed max_context_tokens. Return count of included messages.

Input Format:
- messages: List of lists [id, tokens]
- max_context_tokens: Integer

Output Format:
- Return an integer (count of included messages)

Constraints:
- 1 <= messages.length <= 1000
- 1 <= token_count <= 10000
- 1 <= max_context_tokens <= 1000000`,
            examples: [
                { input: 'messages = [[1,100],[2,200],[3,300]], max_context_tokens = 400', output: '1' },
                { input: 'messages = [[1,500]], max_context_tokens = 1000', output: '1' }
            ],
            testCases: [
                { input: 'messages = [[1,100],[2,200],[3,300]], max_context_tokens = 400', judgeInput: '3\n1 100\n2 200\n3 300\n400', output: '1' },
                { input: 'messages = [[1,500]], max_context_tokens = 1000', judgeInput: '1\n1 500\n1000', output: '1' },
                { input: 'messages = [[1,150],[2,250],[3,350]], max_context_tokens = 600', output: '2' },
                { input: 'messages = [[1,400],[2,300],[3,200]], max_context_tokens = 500', judgeInput: '3\n1 400\n2 300\n3 200\n500', output: '2' },
                { input: 'messages = [[1,1000]], max_context_tokens = 500', judgeInput: '1\n1 1000\n500', output: '0' },
                { input: 'messages = [[1,120],[2,180],[3,220],[4,280]], max_context_tokens = 700', judgeInput: '4\n1 120\n2 180\n3 220\n4 280\n700', output: '3' },
                { input: 'messages = [[1,600],[2,400]], max_context_tokens = 1000', judgeInput: '2\n1 600\n2 400\n1000', output: '2' },
                { input: 'messages = [[1,250],[2,350],[3,450]], max_context_tokens = 800', judgeInput: '3\n1 250\n2 350\n3 450\n800', output: '2' },
                { input: 'messages = [[1,800]], max_context_tokens = 800', judgeInput: '1\n1 800\n800', output: '1' },
                { input: 'messages = [[1,140],[2,210],[3,280],[4,350],[5,420]], max_context_tokens = 1000', judgeInput: '5\n1 140\n2 210\n3 280\n4 350\n5 420\n1000', output: '3' },
                { input: 'messages = [[1,550],[2,450]], max_context_tokens = 600', judgeInput: '2\n1 550\n2 450\n600', output: '1' },
                { input: 'messages = [[1,160],[2,240],[3,320],[4,400]], max_context_tokens = 900', judgeInput: '4\n1 160\n2 240\n3 320\n4 400\n900', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} messages
 * @param {number} max_context_tokens
 * @return {number}
 */
function includedMessages(messages, max_context_tokens) {
    // Your code here
}`,
                python: `def included_messages(messages, max_context_tokens):
    """
    :type messages: List[List[int]]
    :type max_context_tokens: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int includedMessages(vector<vector<int>>& messages, int max_context_tokens) {
    // Your code here
}`,
                java: `public class Solution {
    public int includedMessages(int[][] messages, int max_context_tokens) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const messages = [];\n    for(let i=1; i<=n; i++) messages.push(lines[i].split(' ').map(Number));\n    const max_context_tokens = parseInt(lines[n+1]);\n    console.log(includedMessages(messages, max_context_tokens));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmessages = []\nfor i in range(1, n+1):\n    messages.append(list(map(int, lines[i].split())))\nmax_context_tokens = int(lines[n+1])\nprint(included_messages(messages, max_context_tokens))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint includedMessages(vector<vector<int>>& messages, int max_context_tokens);\nint main() {\n    int n, max_context_tokens;\n    cin >> n;\n    vector<vector<int>> messages(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> messages[i][0] >> messages[i][1];\n    cin >> max_context_tokens;\n    cout << includedMessages(messages, max_context_tokens) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] messages = new int[n][2];\n        for(int i=0; i<n; i++) {\n            messages[i][0] = sc.nextInt();\n            messages[i][1] = sc.nextInt();\n        }\n        int max_context_tokens = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.includedMessages(messages, max_context_tokens));\n    }\n}`
            }
        }]
    }]
};
