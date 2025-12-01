export const hashicorpData = {
    id: 'hashicorp',
    name: 'HashiCorp',
    logo: 'https://logo.clearbit.com/hashicorp.com',
    description: 'Practice real HashiCorp Online Assessment questions.',
    assessments: [{
        id: 'hashicorp-oa-1',
        title: 'HashiCorp OA-1',
        duration: 90,
        problems: [{
            id: 'resource-dependency',
            title: 'Infrastructure Resource Ordering',
            difficulty: 'Hard',
            description: `Determine the order to create infrastructure resources based on dependencies.

You are given:
- num_resources: Total number of resources (0 to n-1)
- dependencies: List of [a, b] meaning resource 'a' depends on 'b' (b must be created before a)

Goal: Return a valid ordering of resource creation. If multiple exist, any valid one is fine. If cycle exists (impossible), return empty list.

Input Format:
- num_resources: Integer
- dependencies: List of lists [a, b]

Output Format:
- Return a list of integers (resource IDs)

Constraints:
- 1 <= num_resources <= 1000
- 0 <= dependencies.length <= 5000`,
            examples: [
                { input: 'num_resources = 2, dependencies = [[1,0]]', output: '[0,1]' },
                { input: 'num_resources = 2, dependencies = [[1,0],[0,1]]', output: '[]' }
            ],
            testCases: [
                { input: 'num_resources = 2, dependencies = [[1,0]]', judgeInput: '2\n1\n1 0', output: '[0,1]' },
                { input: 'num_resources = 2, dependencies = [[1,0],[0,1]]', judgeInput: '2\n2\n1 0\n0 1', output: '[]' },
                { input: 'num_resources = 4, dependencies = [[1,0],[2,0],[3,1],[3,2]]', judgeInput: '4\n4\n1 0\n2 0\n3 1\n3 2', output: '[0,1,2,3]' },
                { input: 'num_resources = 3, dependencies = [[1,0],[2,1]]', judgeInput: '3\n2\n1 0\n2 1', output: '[0,1,2]' },
                { input: 'num_resources = 1, dependencies = []', judgeInput: '1\n0', output: '[0]' },
                { input: 'num_resources = 3, dependencies = [[0,1],[1,2],[2,0]]', judgeInput: '3\n3\n0 1\n1 2\n2 0', output: '[]' },
                { input: 'num_resources = 5, dependencies = [[0,1],[0,2],[1,3],[2,3],[3,4]]', judgeInput: '5\n5\n0 1\n0 2\n1 3\n2 3\n3 4', output: '[4,3,1,2,0]' },
                { input: 'num_resources = 4, dependencies = [[3,2],[2,1],[1,0]]', judgeInput: '4\n3\n3 2\n2 1\n1 0', output: '[0,1,2,3]' },
                { input: 'num_resources = 6, dependencies = [[5,0],[4,0],[3,1],[2,1]]', judgeInput: '6\n4\n5 0\n4 0\n3 1\n2 1', output: '[0,1,2,3,4,5]' },
                { input: 'num_resources = 3, dependencies = [[1,0]]', judgeInput: '3\n1\n1 0', output: '[0,2,1]' },
                { input: 'num_resources = 4, dependencies = [[1,0],[2,1],[3,2],[0,3]]', judgeInput: '4\n4\n1 0\n2 1\n3 2\n0 3', output: '[]' },
                { input: 'num_resources = 5, dependencies = [[1,0],[2,0],[3,1],[4,2]]', judgeInput: '5\n4\n1 0\n2 0\n3 1\n4 2', output: '[0,1,2,3,4]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} num_resources
 * @param {number[][]} dependencies
 * @return {number[]}
 */
function createOrder(num_resources, dependencies) {
    // Your code here
}`,
                python: `def create_order(num_resources, dependencies):
    """
    :type num_resources: int
    :type dependencies: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> createOrder(int num_resources, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] createOrder(int num_resources, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const num_resources = parseInt(lines[0]);\n    const n = parseInt(lines[1]);\n    const dependencies = [];\n    for(let i=2; i<n+2; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(createOrder(num_resources, dependencies)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nnum_resources = int(lines[0])\nn = int(lines[1])\ndependencies = []\nfor i in range(2, n+2):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(json.dumps(create_order(num_resources, dependencies)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<int> createOrder(int num_resources, vector<vector<int>>& dependencies);\nint main() {\n    int num_resources, n;\n    cin >> num_resources >> n;\n    vector<vector<int>> dependencies(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    vector<int> res = createOrder(num_resources, dependencies);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num_resources = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] dependencies = new int[n][2];\n        for(int i=0; i<n; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.createOrder(num_resources, dependencies);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'service-health',
            title: 'Service Health Aggregator',
            difficulty: 'Medium',
            description: `Aggregate health status of services.

You are given:
- services: List of [service_id, status] where status: 0=Healthy, 1=Warning, 2=Critical
- dependencies: List of [service_a, service_b] meaning 'a' depends on 'b'

Goal: A service's effective status is max(own_status, effective_status_of_dependencies). Calculate effective status for all services. Return list of effective statuses ordered by service_id.

Input Format:
- services: List of lists [id, status]
- dependencies: List of lists [a, b]

Output Format:
- Return a list of integers (effective statuses)

Constraints:
- 1 <= services.length <= 1000
- 0 <= dependencies.length <= 5000
- No circular dependencies`,
            examples: [
                { input: 'services = [[0,0],[1,0]], dependencies = [[0,1]]', output: '[0,0]' },
                { input: 'services = [[0,0],[1,2]], dependencies = [[0,1]]', output: '[2,2]' }
            ],
            testCases: [
                { input: 'services = [[0,0],[1,0]], dependencies = [[0,1]]', judgeInput: '2\n0 0\n1 0\n1\n0 1', output: '[0,0]' },
                { input: 'services = [[0,0],[1,2]], dependencies = [[0,1]]', judgeInput: '2\n0 0\n1 2\n1\n0 1', output: '[2,2]' },
                { input: 'services = [[0,1],[1,0],[2,0]], dependencies = [[0,1],[1,2]]', judgeInput: '3\n0 1\n1 0\n2 0\n2\n0 1\n1 2', output: '[1,0,0]' },
                { input: 'services = [[0,0],[1,0],[2,2]], dependencies = [[0,1],[1,2]]', judgeInput: '3\n0 0\n1 0\n2 2\n2\n0 1\n1 2', output: '[2,2,2]' },
                { input: 'services = [[0,0],[1,1],[2,2]], dependencies = [[0,1],[0,2]]', judgeInput: '3\n0 0\n1 1\n2 2\n2\n0 1\n0 2', output: '[2,1,2]' },
                { input: 'services = [[0,0]], dependencies = []', judgeInput: '1\n0 0\n0', output: '[0]' },
                { input: 'services = [[0,2],[1,1],[2,0]], dependencies = [[0,1],[1,2]]', judgeInput: '3\n0 2\n1 1\n2 0\n2\n0 1\n1 2', output: '[2,1,0]' },
                { input: 'services = [[0,0],[1,0],[2,0],[3,1]], dependencies = [[0,1],[1,2],[2,3]]', judgeInput: '4\n0 0\n1 0\n2 0\n3 1\n3\n0 1\n1 2\n2 3', output: '[1,1,1,1]' },
                { input: 'services = [[0,0],[1,2],[2,0],[3,0]], dependencies = [[0,1],[2,3]]', judgeInput: '4\n0 0\n1 2\n2 0\n3 0\n2\n0 1\n2 3', output: '[2,2,0,0]' },
                { input: 'services = [[0,1],[1,1],[2,1]], dependencies = [[0,1],[1,2]]', judgeInput: '3\n0 1\n1 1\n2 1\n2\n0 1\n1 2', output: '[1,1,1]' },
                { input: 'services = [[0,0],[1,0],[2,0],[3,0],[4,2]], dependencies = [[0,1],[0,2],[1,3],[2,4]]', judgeInput: '5\n0 0\n1 0\n2 0\n3 0\n4 2\n4\n0 1\n0 2\n1 3\n2 4', output: '[2,0,2,0,2]' },
                { input: 'services = [[0,0],[1,2]], dependencies = []', judgeInput: '2\n0 0\n1 2\n0', output: '[0,2]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} services
 * @param {number[][]} dependencies
 * @return {number[]}
 */
function effectiveStatus(services, dependencies) {
    // Your code here
}`,
                python: `def effective_status(services, dependencies):
    """
    :type services: List[List[int]]
    :type dependencies: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> effectiveStatus(vector<vector<int>>& services, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] effectiveStatus(int[][] services, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const services = [];\n    for(let i=1; i<=n; i++) services.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const dependencies = [];\n    for(let i=n+2; i<n+2+m; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(effectiveStatus(services, dependencies)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nservices = []\nfor i in range(1, n+1):\n    services.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\ndependencies = []\nfor i in range(n+2, n+2+m):\n    dependencies.append(list(map(int, lines[i].split())))\nprint(json.dumps(effective_status(services, dependencies)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> effectiveStatus(vector<vector<int>>& services, vector<vector<int>>& dependencies);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> services(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> services[i][0] >> services[i][1];\n    cin >> m;\n    vector<vector<int>> dependencies(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    vector<int> res = effectiveStatus(services, dependencies);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] services = new int[n][2];\n        for(int i=0; i<n; i++) {\n            services[i][0] = sc.nextInt();\n            services[i][1] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] dependencies = new int[m][2];\n        for(int i=0; i<m; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.effectiveStatus(services, dependencies);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
