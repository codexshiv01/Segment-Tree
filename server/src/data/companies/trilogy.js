export const trilogyData = {
    id: 'trilogy',
    name: 'Trilogy',
    logo: 'https://logo.clearbit.com/trilogy.com',
    description: 'Practice real Trilogy Online Assessment questions.',
    assessments: [{
        id: 'trilogy-oa-1',
        title: 'Trilogy OA-1',
        duration: 90,
        problems: [{
            id: 'config-optimizer',
            title: 'Product Configuration Optimizer',
            difficulty: 'Hard',
            description: `Optimize product configurations based on business rules and constraints.

You are given:
- options: List of [option_id, cost, compatibility_group]
- budget: Maximum budget
- required_groups: List of groups that must have at least one option selected

Goal: Select options to maximize total cost while staying within budget and ensuring at least one option from each required group. Return maximum achievable cost, or -1 if impossible.

Input Format:
- options: List of lists [id, cost, group]
- budget: Integer
- required_groups: List of integers

Output Format:
- Return an integer (max cost or -1)

Constraints:
- 1 <= options.length <= 100
- 1 <= cost <= 10000
- 1 <= compatibility_group <= 20
- 1 <= budget <= 100000
- 0 <= required_groups.length <= 20`,
            examples: [
                { input: 'options = [[1,100,1],[2,200,2],[3,150,1]], budget = 300, required_groups = [1,2]', output: '300' },
                { input: 'options = [[1,500,1]], budget = 400, required_groups = [1]', output: '-1' }
            ],
            testCases: [
                { input: 'options = [[1,100,1],[2,200,2],[3,150,1]], budget = 300, required_groups = [1,2]', judgeInput: '3\n1 100 1\n2 200 2\n3 150 1\n300\n2\n1 2', output: '300' },
                { input: 'options = [[1,500,1]], budget = 400, required_groups = [1]', judgeInput: '1\n1 500 1\n400\n1\n1', output: '-1' },
                { input: 'options = [[1,50,1],[2,100,2],[3,75,3]], budget = 200, required_groups = [1,2,3]', judgeInput: '3\n1 50 1\n2 100 2\n3 75 3\n200\n3\n1 2 3', output: '-1' },
                { input: 'options = [[1,100,1],[2,200,1],[3,150,2]], budget = 500, required_groups = [1,2]', judgeInput: '3\n1 100 1\n2 200 1\n3 150 2\n500\n2\n1 2', output: '350' },
                { input: 'options = [[1,80,1],[2,120,2]], budget = 200, required_groups = [1,2]', judgeInput: '2\n1 80 1\n2 120 2\n200\n2\n1 2', output: '200' },
                { input: 'options = [[1,300,1],[2,250,2],[3,200,3]], budget = 1000, required_groups = [1]', judgeInput: '3\n1 300 1\n2 250 2\n3 200 3\n1000\n1\n1', output: '750' },
                { input: 'options = [[1,150,1],[2,150,1],[3,200,2]], budget = 300, required_groups = [1,2]', judgeInput: '3\n1 150 1\n2 150 1\n3 200 2\n300\n2\n1 2', output: '-1' },
                { input: 'options = [[1,50,1],[2,100,2],[3,150,3],[4,200,4]], budget = 500, required_groups = [1,2]', judgeInput: '4\n1 50 1\n2 100 2\n3 150 3\n4 200 4\n500\n2\n1 2', output: '500' },
                { input: 'options = [[1,400,1],[2,300,2]], budget = 600, required_groups = [1,2]', judgeInput: '2\n1 400 1\n2 300 2\n600\n2\n1 2', output: '-1' },
                { input: 'options = [[1,100,1],[2,100,1],[3,100,2],[4,100,2]], budget = 300, required_groups = [1,2]', judgeInput: '4\n1 100 1\n2 100 1\n3 100 2\n4 100 2\n300\n2\n1 2', output: '300' },
                { input: 'options = [[1,250,1],[2,200,2],[3,150,3]], budget = 800, required_groups = []', judgeInput: '3\n1 250 1\n2 200 2\n3 150 3\n800\n0', output: '600' },
                { input: 'options = [[1,90,1],[2,110,2],[3,80,1]], budget = 250, required_groups = [1,2]', judgeInput: '3\n1 90 1\n2 110 2\n3 80 1\n250\n2\n1 2', output: '200' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} options
 * @param {number} budget
 * @param {number[]} required_groups
 * @return {number}
 */
function maxConfigCost(options, budget, required_groups) {
    // Your code here
}`,
                python: `def max_config_cost(options, budget, required_groups):
    """
    :type options: List[List[int]]
    :type budget: int
    :type required_groups: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxConfigCost(vector<vector<int>>& options, int budget, vector<int>& required_groups) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxConfigCost(int[][] options, int budget, int[] required_groups) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const options = [];\n    for(let i=1; i<=n; i++) options.push(lines[i].split(' ').map(Number));\n    const budget = parseInt(lines[n+1]);\n    const m = parseInt(lines[n+2]);\n    const required_groups = m > 0 ? lines[n+3].split(' ').map(Number) : [];\n    console.log(maxConfigCost(options, budget, required_groups));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\noptions = []\nfor i in range(1, n+1):\n    options.append(list(map(int, lines[i].split())))\nbudget = int(lines[n+1])\nm = int(lines[n+2])\nrequired_groups = list(map(int, lines[n+3].split())) if m > 0 else []\nprint(max_config_cost(options, budget, required_groups))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxConfigCost(vector<vector<int>>& options, int budget, vector<int>& required_groups);\nint main() {\n    int n, budget, m;\n    cin >> n;\n    vector<vector<int>> options(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> options[i][0] >> options[i][1] >> options[i][2];\n    cin >> budget >> m;\n    vector<int> required_groups(m);\n    for(int i=0; i<m; ++i) cin >> required_groups[i];\n    cout << maxConfigCost(options, budget, required_groups) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] options = new int[n][3];\n        for(int i=0; i<n; i++) {\n            options[i][0] = sc.nextInt();\n            options[i][1] = sc.nextInt();\n            options[i][2] = sc.nextInt();\n        }\n        int budget = sc.nextInt();\n        int m = sc.nextInt();\n        int[] required_groups = new int[m];\n        for(int i=0; i<m; i++) required_groups[i] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxConfigCost(options, budget, required_groups));\n    }\n}`
            }
        }, {
            id: 'license-validator',
            title: 'Software License Validator',
            difficulty: 'Medium',
            description: `Validate software licenses based on seats and expiration.

You are given:
- licenses: List of [license_id, seats_purchased, seats_used, days_until_expiry]

Goal: Return count of licenses that are VALID. A license is valid if seats_used <= seats_purchased AND days_until_expiry > 0.

Input Format:
- licenses: List of lists [id, purchased, used, days]

Output Format:
- Return an integer (count of valid licenses)

Constraints:
- 1 <= licenses.length <= 1000
- 1 <= seats_purchased, seats_used <= 10000
- -365 <= days_until_expiry <= 365`,
            examples: [
                { input: 'licenses = [[1,10,8,30],[2,5,5,10],[3,3,4,20]]', output: '2' },
                { input: 'licenses = [[1,5,3,-10]]', output: '0' }
            ],
            testCases: [
                { input: 'licenses = [[1,10,8,30],[2,5,5,10],[3,3,4,20]]', judgeInput: '3\n1 10 8 30\n2 5 5 10\n3 3 4 20', output: '2' },
                { input: 'licenses = [[1,5,3,-10]]', judgeInput: '1\n1 5 3 -10', output: '0' },
                { input: 'licenses = [[1,100,50,365],[2,50,25,180],[3,25,25,90]]', judgeInput: '3\n1 100 50 365\n2 50 25 180\n3 25 25 90', output: '3' },
                { input: 'licenses = [[1,10,11,100]]', judgeInput: '1\n1 10 11 100', output: '0' },
                { input: 'licenses = [[1,20,20,1],[2,20,20,0]]', judgeInput: '2\n1 20 20 1\n2 20 20 0', output: '1' },
                { input: 'licenses = [[1,50,40,60],[2,30,30,45],[3,40,35,30]]', judgeInput: '3\n1 50 40 60\n2 30 30 45\n3 40 35 30', output: '3' },
                { input: 'licenses = [[1,15,10,-5],[2,20,15,-10]]', judgeInput: '2\n1 15 10 -5\n2 20 15 -10', output: '0' },
                { input: 'licenses = [[1,100,99,200],[2,100,100,200],[3,100,101,200]]', judgeInput: '3\n1 100 99 200\n2 100 100 200\n3 100 101 200', output: '2' },
                { input: 'licenses = [[1,75,75,15],[2,60,55,20],[3,80,70,25]]', judgeInput: '3\n1 75 75 15\n2 60 55 20\n3 80 70 25', output: '3' },
                { input: 'licenses = [[1,10,5,0],[2,20,10,5]]', judgeInput: '2\n1 10 5 0\n2 20 10 5', output: '1' },
                { input: 'licenses = [[1,200,150,300],[2,150,150,250],[3,100,50,200],[4,50,60,100]]', judgeInput: '4\n1 200 150 300\n2 150 150 250\n3 100 50 200\n4 50 60 100', output: '3' },
                { input: 'licenses = [[1,5,5,1],[2,10,10,1],[3,15,15,1]]', judgeInput: '3\n1 5 5 1\n2 10 10 1\n3 15 15 1', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} licenses
 * @return {number}
 */
function countValidLicenses(licenses) {
    // Your code here
}`,
                python: `def count_valid_licenses(licenses):
    """
    :type licenses: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countValidLicenses(vector<vector<int>>& licenses) {
    // Your code here
}`,
                java: `public class Solution {
    public int countValidLicenses(int[][] licenses) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const licenses = [];\n    for(let i=1; i<=n; i++) licenses.push(lines[i].split(' ').map(Number));\n    console.log(countValidLicenses(licenses));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nlicenses = []\nfor i in range(1, n+1):\n    licenses.append(list(map(int, lines[i].split())))\nprint(count_valid_licenses(licenses))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countValidLicenses(vector<vector<int>>& licenses);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> licenses(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> licenses[i][0] >> licenses[i][1] >> licenses[i][2] >> licenses[i][3];\n    cout << countValidLicenses(licenses) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] licenses = new int[n][4];\n        for(int i=0; i<n; i++) {\n            licenses[i][0] = sc.nextInt();\n            licenses[i][1] = sc.nextInt();\n            licenses[i][2] = sc.nextInt();\n            licenses[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.countValidLicenses(licenses));\n    }\n}`
            }
        }]
    }]
};
