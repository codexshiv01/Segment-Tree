export const postmanData = {
    id: 'postman',
    name: 'Postman',
    logo: 'https://logo.clearbit.com/postman.com',
    description: 'Practice real Postman Online Assessment questions.',
    assessments: [{
        id: 'postman-oa-1',
        title: 'Postman OA-1',
        duration: 90,
        problems: [{
            id: 'api-request-chain',
            title: 'API Request Chain Validator',
            difficulty: 'Hard',
            description: `Validate API request chains with dependencies.

You are given:
- requests: List of [request_id, depends_on_ids] where depends_on_ids is comma-separated list or empty

Goal: A valid execution order exists if there are no circular dependencies. Use topological sort logic. Return 1 if valid order exists, 0 if circular dependency detected.

Input Format:
- requests: List of lists where first element is ID, rest are dependencies

Output Format:
- Return 0 or 1

Constraints:
- 1 <= requests.length <= 100
- 0 <= dependencies <= 50`,
            examples: [
                { input: 'requests = [[1],[2,1],[3,2]]', output: '1' },
                { input: 'requests = [[1,2],[2,1]]', output: '0' }
            ],
            testCases: [
                { input: 'requests = [[1],[2,1],[3,2]]', judgeInput: '3\n1\n2 1\n3 2', output: '1' },
                { input: 'requests = [[1,2],[2,1]]', judgeInput: '2\n1 2\n2 1', output: '0' },
                { input: 'requests = [[1],[2],[3]]', judgeInput: '3\n1\n2\n3', output: '1' },
                { input: 'requests = [[1],[2,1],[3,1]]', judgeInput: '3\n1\n2 1\n3 1', output: '1' },
                { input: 'requests = [[1,2],[2,3],[3,1]]', judgeInput: '3\n1 2\n2 3\n3 1', output: '0' },
                { input: 'requests = [[1],[2],[3,1],[4,2],[5,3,4]]', judgeInput: '5\n1\n2\n3 1\n4 2\n5 3 4', output: '1' },
                { input: 'requests = [[1]]', judgeInput: '1\n1', output: '1' },
                { input: 'requests = [[1,2,3],[2,3],[3]]', judgeInput: '3\n1 2 3\n2 3\n3', output: '1' },
                { input: 'requests = [[1,2],[2,3],[3,4],[4,1]]', judgeInput: '4\n1 2\n2 3\n3 4\n4 1', output: '0' },
                { input: 'requests = [[1],[2,1],[3,1],[4,2,3]]', judgeInput: '4\n1\n2 1\n3 1\n4 2 3', output: '1' },
                { input: 'requests = [[1,2],[2]]', judgeInput: '2\n1 2\n2', output: '1' },
                { input: 'requests = [[1],[2],[3],[4],[5,1,2,3,4]]', judgeInput: '5\n1\n2\n3\n4\n5 1 2 3 4', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} requests
 * @return {number}
 */
function isValidChain(requests) {
    // Your code here
}`,
                python: `def is_valid_chain(requests):
    """
    :type requests: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int isValidChain(vector<vector<int>>& requests) {
    // Your code here
}`,
                java: `public class Solution {
    public int isValidChain(int[][] requests) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const requests = [];\n    for(let i=1; i<=n; i++) requests.push(lines[i].split(' ').map(Number));\n    console.log(isValidChain(requests));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrequests = []\nfor i in range(1, n+1):\n    requests.append(list(map(int, lines[i].split())))\nprint(is_valid_chain(requests))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\nint isValidChain(vector<vector<int>>& requests);\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    vector<vector<int>> requests(n);\n    for(int i=0; i<n; ++i) {\n        string line;\n        getline(cin, line);\n        istringstream iss(line);\n        int val;\n        while(iss >> val) requests[i].push_back(val);\n    }\n    cout << isValidChain(requests) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        int[][] requests = new int[n][];\n        for(int i=0; i<n; i++) {\n            String line = sc.nextLine();\n            String[] parts = line.split(" ");\n            requests[i] = new int[parts.length];\n            for(int j=0; j<parts.length; j++) {\n                requests[i][j] = Integer.parseInt(parts[j]);\n            }\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.isValidChain(requests));\n    }\n}`
            }
        }, {
            id: 'response-validator',
            title: 'API Response Schema Validator',
            difficulty: 'Medium',
            description: `Validate API responses against expected field counts.

You are given:
- responses: List of [response_id, field_count expected, field_count_actual]

Goal: A response is valid if field_count_actual == field_count_expected. Return count of valid responses.

Input Format:
- responses: List of lists [id, expected, actual]

Output Format:
- Return an integer (count of valid responses)

Constraints:
- 1 <= responses.length <= 1000
- 0 <= field_count <= 1000`,
            examples: [
                { input: 'responses = [[1,5,5],[2,10,12]]', output: '1' },
                { input: 'responses = [[1,3,3]]', output: '1' }
            ],
            testCases: [
                { input: 'responses = [[1,5,5],[2,10,12]]', judgeInput: '2\n1 5 5\n2 10 12', output: '1' },
                { input: 'responses = [[1,3,3]]', judgeInput: '1\n1 3 3', output: '1' },
                { input: 'responses = [[1,7,7],[2,8,8],[3,9,9]]', judgeInput: '3\n1 7 7\n2 8 8\n3 9 9', output: '3' },
                { input: 'responses = [[1,15,20],[2,25,25]]', judgeInput: '2\n1 15 20\n2 25 25', output: '1' },
                { input: 'responses = [[1,100,100]]', judgeInput: '1\n1 100 100', output: '1' },
                { input: 'responses = [[1,12,12],[2,14,15],[3,16,16]]', judgeInput: '3\n1 12 12\n2 14 15\n3 16 16', output: '2' },
                { input: 'responses = [[1,50,51],[2,52,53]]', judgeInput: '2\n1 50 51\n2 52 53', output: '0' },
                { input: 'responses = [[1,30,30],[2,35,35],[3,40,40],[4,45,45]]', judgeInput: '4\n1 30 30\n2 35 35\n3 40 40\n4 45 45', output: '4' },
                { input: 'responses = [[1,20,22]]', judgeInput: '1\n1 20 22', output: '0' },
                { input: 'responses = [[1,60,60],[2,65,66],[3,70,70]]', judgeInput: '3\n1 60 60\n2 65 66\n3 70 70', output: '2' },
                { input: 'responses = [[1,80,80],[2,85,85],[3,90,92],[4,95,95],[5,100,100]]', judgeInput: '5\n1 80 80\n2 85 85\n3 90 92\n4 95 95\n5 100 100', output: '4' },
                { input: 'responses = [[1,200,200],[2,250,250],[3,300,301]]', judgeInput: '3\n1 200 200\n2 250 250\n3 300 301', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} responses
 * @return {number}
 */
function validResponses(responses) {
    // Your code here
}`,
                python: `def valid_responses(responses):
    """
    :type responses: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int validResponses(vector<vector<int>>& responses) {
    // Your code here
}`,
                java: `public class Solution {
    public int validResponses(int[][] responses) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const responses = [];\n    for(let i=1; i<=n; i++) responses.push(lines[i].split(' ').map(Number));\n    console.log(validResponses(responses));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nresponses = []\nfor i in range(1, n+1):\n    responses.append(list(map(int, lines[i].split())))\nprint(valid_responses(responses))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint validResponses(vector<vector<int>>& responses);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> responses(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> responses[i][0] >> responses[i][1] >> responses[i][2];\n    cout << validResponses(responses) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] responses = new int[n][3];\n        for(int i=0; i<n; i++) {\n            responses[i][0] = sc.nextInt();\n            responses[i][1] = sc.nextInt();\n            responses[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.validResponses(responses));\n    }\n}`
            }
        }]
    }]
};
