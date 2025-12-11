export const doordashData = {
    id: 'doordash',
    name: 'DoorDash',
    logo: 'https://logo.clearbit.com/doordash.com',
    description: 'Practice real DoorDash Online Assessment questions.',
    assessments: [{
        id: 'doordash-oa-1',
        title: 'DoorDash OA-1',
        duration: 90,
        problems: [{
            id: 'dasher-delivery-time',
            title: 'Dasher Delivery Time Optimizer',
            difficulty: 'Medium',
            description: `DoorDash needs to calculate the maximum number of deliveries a Dasher can complete within a given time window. Each delivery has a start time and end time.

You are given:
- deliveries: A list of [start_time, end_time] for available delivery slots.
- shift_start: The start time of the Dasher's shift.
- shift_end: The end time of the Dasher's shift.

Goal: Find the maximum number of non-overlapping deliveries a Dasher can complete within their shift.

Input Format:
- deliveries: List of lists [start, end]
- shift_start: Integer
- shift_end: Integer

Output Format:
- Return an integer representing the maximum number of deliveries.

Constraints:
- 1 <= deliveries.length <= 1000
- 0 <= start < end <= 2400 (24-hour format)`,
            examples: [
                { input: 'deliveries = [[1000,1100],[1100,1200],[1030,1130]], shift_start = 1000, shift_end = 1200', output: '2' },
                { input: 'deliveries = [[800,900],[900,1000],[800,1000]], shift_start = 800, shift_end = 1000', output: '2' }
            ],
            testCases: [
                { input: 'deliveries = [[1000,1100],[1100,1200],[1030,1130]], shift_start = 1000, shift_end = 1200', judgeInput: '3\n1000 1100\n1100 1200\n1030 1130\n1000 1200', output: '2' },
                { input: 'deliveries = [[800,900],[900,1000],[800,1000]], shift_start = 800, shift_end = 1000', judgeInput: '3\n800 900\n900 1000\n800 1000\n800 1000', output: '2' },
                { input: 'deliveries = [[1000,1200]], shift_start = 1300, shift_end = 1400', judgeInput: '1\n1000 1200\n1300 1400', output: '0' },
                { input: 'deliveries = [[1000,1100],[1100,1200],[1200,1300]], shift_start = 1000, shift_end = 1300', judgeInput: '3\n1000 1100\n1100 1200\n1200 1300\n1000 1300', output: '3' },
                { input: 'deliveries = [[900,1000],[910,1010],[920,1020]], shift_start = 900, shift_end = 1200', judgeInput: '3\n900 1000\n910 1010\n920 1020\n900 1200', output: '1' },
                { input: 'deliveries = [[800,830],[830,900],[900,930],[930,1000]], shift_start = 800, shift_end = 1000', judgeInput: '4\n800 830\n830 900\n900 930\n930 1000\n800 1000', output: '4' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} deliveries
 * @param {number} shift_start
 * @param {number} shift_end
 * @return {number}
 */
function maxDeliveries(deliveries, shift_start, shift_end) {
    // Your code here
}`,
                python: `def max_deliveries(deliveries, shift_start, shift_end):
    """
    :type deliveries: List[List[int]]
    :type shift_start: int
    :type shift_end: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxDeliveries(vector<vector<int>>& deliveries, int shift_start, int shift_end) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxDeliveries(int[][] deliveries, int shift_start, int shift_end) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const deliveries = [];\n    for(let i=1; i<=n; i++) deliveries.push(lines[i].split(' ').map(Number));    const [start, end] = lines[n+1].split(' ').map(Number);\n    console.log(maxDeliveries(deliveries, start, end));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ndeliveries = []\nfor i in range(1, n+1):\n    deliveries.append(list(map(int, lines[i].split())))\nshift_start, shift_end = map(int, lines[n+1].split())\nprint(max_deliveries(deliveries, shift_start, shift_end))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxDeliveries(vector<vector<int>>& deliveries, int shift_start, int shift_end);\nint main() {\n    int n, start, end;\n    cin >> n;\n    vector<vector<int>> deliveries(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> deliveries[i][0] >> deliveries[i][1];\n    cin >> start >> end;\n    cout << maxDeliveries(deliveries, start, end) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] deliveries = new int[n][2];\n        for(int i=0; i<n; i++) {\n            deliveries[i][0] = sc.nextInt();\n            deliveries[i][1] = sc.nextInt();\n        }\n        int start = sc.nextInt();\n        int end = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxDeliveries(deliveries, start, end));\n    }\n}`
            }
        }, {
            id: 'menu-item-grouping',
            title: 'Menu Item Grouping',
            difficulty: 'Hard',
            description: `DoorDash menus have complex item groupings (e.g., "Burgers" -> "Cheeseburger" -> "Toppings"). Given a list of item dependencies, identify if there are any circular dependencies which would cause the menu to crash.

You are given:
- items: A list of item IDs.
- dependencies: A list of [parent_id, child_id].

Goal: Return true if the menu is valid (no cycles), false otherwise.

Input Format:
- items: List of integers
- dependencies: List of pairs

Output Format:
- Return a boolean.

Constraints:
- 1 <= items.length <= 1000
- 0 <= dependencies.length <= 2000`,
            examples: [
                { input: 'items = [1,2,3], dependencies = [[1,2],[2,3]]', output: 'true' },
                { input: 'items = [1,2], dependencies = [[1,2],[2,1]]', output: 'false' }
            ],
            testCases: [
                { input: 'items = [1,2,3], dependencies = [[1,2],[2,3]]', judgeInput: '3\n1 2 3\n2\n1 2\n2 3', output: 'true' },
                { input: 'items = [1,2], dependencies = [[1,2],[2,1]]', judgeInput: '2\n1 2\n2\n1 2\n2 1', output: 'false' },
                { input: 'items = [1,2,3], dependencies = [[1,2],[1,3],[2,3]]', judgeInput: '3\n1 2 3\n3\n1 2\n1 3\n2 3', output: 'true' },
                { input: 'items = [1], dependencies = [[1,1]]', judgeInput: '1\n1\n1\n1 1', output: 'false' },
                { input: 'items = [1,2,3,4], dependencies = [[1,2],[2,3],[3,4],[4,2]]', judgeInput: '4\n1 2 3 4\n4\n1 2\n2 3\n3 4\n4 2', output: 'false' },
                { input: 'items = [1,2,3,4], dependencies = [[1,2],[3,4]]', judgeInput: '4\n1 2 3 4\n2\n1 2\n3 4', output: 'true' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} items
 * @param {number[][]} dependencies
 * @return {boolean}
 */
function isMenuValid(items, dependencies) {
    // Your code here
}`,
                python: `def is_menu_valid(items, dependencies):
    """
    :type items: List[int]
    :type dependencies: List[List[int]]
    :rtype: bool
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

bool isMenuValid(vector<int>& items, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `public class Solution {
    public boolean isMenuValid(int[] items, int[][] dependencies) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const items = lines[1].split(' ').map(Number);\n    const d = parseInt(lines[2]);\n    const dependencies = [];\n    for(let i=3; i<3+d; i++) dependencies.push(lines[i].split(' ').map(Number));\n    console.log(isMenuValid(items, dependencies));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nitems = list(map(int, lines[1].split()))\nd = int(lines[2])\ndependencies = []\nfor i in range(3, 3+d):\n    dependencies.append(list(map(int, lines[i].split())))\nprint('true' if is_menu_valid(items, dependencies) else 'false')`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nbool isMenuValid(vector<int>& items, vector<vector<int>>& dependencies);\nint main() {\n    int n, d;\n    cin >> n;\n    vector<int> items(n);\n    for(int i=0; i<n; ++i) cin >> items[i];\n    cin >> d;\n    vector<vector<int>> dependencies(d, vector<int>(2));\n    for(int i=0; i<d; ++i) cin >> dependencies[i][0] >> dependencies[i][1];\n    cout << (isMenuValid(items, dependencies) ? "true" : "false") << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] items = new int[n];\n        for(int i=0; i<n; i++) items[i] = sc.nextInt();\n        int d = sc.nextInt();\n        int[][] dependencies = new int[d][2];\n        for(int i=0; i<d; i++) {\n            dependencies[i][0] = sc.nextInt();\n            dependencies[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.isMenuValid(items, dependencies));\n    }\n}`
            }
        }]
    }]
};
