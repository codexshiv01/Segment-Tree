export const pelotonData = {
    id: 'peloton',
    name: 'Peloton',
    logo: 'https://logo.clearbit.com/onepeloton.com',
    description: 'Practice real Peloton Online Assessment questions.',
    assessments: [{
        id: 'peloton-oa-1',
        title: 'Peloton OA-1',
        duration: 90,
        problems: [{
            id: 'leaderboard-ranking',
            title: 'Live Leaderboard Ranking',
            difficulty: 'Medium',
            description: `Rank users on the leaderboard based on total output.

You are given:
- users: List of [user_id, total_output, duration_minutes]

Goal: Rank users primarily by total_output (descending), and secondarily by duration_minutes (ascending) for ties. Return the list of user_ids in ranked order.

Input Format:
- users: List of lists [id, output, duration]

Output Format:
- Return a list of integers (user_ids)

Constraints:
- 1 <= users.length <= 1000
- 0 <= total_output <= 10000
- 1 <= duration_minutes <= 120`,
            examples: [
                { input: 'users = [[1,500,30],[2,600,45],[3,500,25]]', output: '[2,3,1]' },
                { input: 'users = [[1,100,10]]', output: '[1]' }
            ],
            testCases: [
                { input: 'users = [[1,500,30],[2,600,45],[3,500,25]]', judgeInput: '3\n1 500 30\n2 600 45\n3 500 25', output: '[2,3,1]' },
                { input: 'users = [[1,100,10]]', judgeInput: '1\n1 100 10', output: '[1]' },
                { input: 'users = [[1,200,20],[2,200,20]]', judgeInput: '2\n1 200 20\n2 200 20', output: '[1,2]' },
                { input: 'users = [[1,300,30],[2,400,30],[3,200,30]]', judgeInput: '3\n1 300 30\n2 400 30\n3 200 30', output: '[2,1,3]' },
                { input: 'users = [[1,1000,60],[2,900,45],[3,1100,50]]', judgeInput: '3\n1 1000 60\n2 900 45\n3 1100 50', output: '[3,1,2]' },
                { input: 'users = [[1,50,10],[2,50,5],[3,50,15]]', judgeInput: '3\n1 50 10\n2 50 5\n3 50 15', output: '[2,1,3]' },
                { input: 'users = [[1,10,1],[2,20,2],[3,30,3],[4,40,4]]', judgeInput: '4\n1 10 1\n2 20 2\n3 30 3\n4 40 4', output: '[4,3,2,1]' },
                { input: 'users = [[1,100,10],[2,100,10],[3,100,10]]', judgeInput: '3\n1 100 10\n2 100 10\n3 100 10', output: '[1,2,3]' },
                { input: 'users = [[1,500,45],[2,600,45],[3,700,45],[4,800,45]]', judgeInput: '4\n1 500 45\n2 600 45\n3 700 45\n4 800 45', output: '[4,3,2,1]' },
                { input: 'users = [[1,150,15],[2,150,10],[3,150,20],[4,160,15]]', judgeInput: '4\n1 150 15\n2 150 10\n3 150 20\n4 160 15', output: '[4,2,1,3]' },
                { input: 'users = [[1,0,10],[2,0,5]]', judgeInput: '2\n1 0 10\n2 0 5', output: '[2,1]' },
                { input: 'users = [[1,9999,120],[2,10000,120]]', judgeInput: '2\n1 9999 120\n2 10000 120', output: '[2,1]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} users
 * @return {number[]}
 */
function rankUsers(users) {
    // Your code here
}`,
                python: `def rank_users(users):
    """
    :type users: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> rankUsers(vector<vector<int>>& users) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] rankUsers(int[][] users) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const users = [];\n    for(let i=1; i<=n; i++) users.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(rankUsers(users)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nusers = []\nfor i in range(1, n+1):\n    users.append(list(map(int, lines[i].split())))\nprint(json.dumps(rank_users(users)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<int> rankUsers(vector<vector<int>>& users);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> users(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> users[i][0] >> users[i][1] >> users[i][2];\n    vector<int> res = rankUsers(users);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] users = new int[n][3];\n        for(int i=0; i<n; i++) {\n            users[i][0] = sc.nextInt();\n            users[i][1] = sc.nextInt();\n            users[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.rankUsers(users);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'workout-planner',
            title: 'Workout Schedule Optimizer',
            difficulty: 'Medium',
            description: `Select workouts to maximize total calorie burn within a time limit.

You are given:
- workouts: List of [id, calories, duration]
- max_time: Maximum available time in minutes

Goal: Select a subset of workouts such that total duration <= max_time and total calories is maximized. Return the maximum calories.

Input Format:
- workouts: List of lists [id, calories, duration]
- max_time: Integer

Output Format:
- Return an integer (max calories)

Constraints:
- 1 <= workouts.length <= 100
- 1 <= calories, duration <= 1000
- 1 <= max_time <= 1000`,
            examples: [
                { input: 'workouts = [[1,200,20],[2,300,30],[3,150,10]], max_time = 40', output: '450' },
                { input: 'workouts = [[1,500,60]], max_time = 30', output: '0' }
            ],
            testCases: [
                { input: 'workouts = [[1,200,20],[2,300,30],[3,150,10]], max_time = 40', judgeInput: '3\n1 200 20\n2 300 30\n3 150 10\n40', output: '450' },
                { input: 'workouts = [[1,500,60]], max_time = 30', judgeInput: '1\n1 500 60\n30', output: '0' },
                { input: 'workouts = [[1,100,10],[2,200,20],[3,300,30]], max_time = 50', judgeInput: '3\n1 100 10\n2 200 20\n3 300 30\n50', output: '500' },
                { input: 'workouts = [[1,60,10],[2,100,20],[3,120,30]], max_time = 50', judgeInput: '3\n1 60 10\n2 100 20\n3 120 30\n50', output: '220' },
                { input: 'workouts = [[1,50,5],[2,60,10],[3,70,15]], max_time = 20', judgeInput: '3\n1 50 5\n2 60 10\n3 70 15\n20', output: '110' },
                { input: 'workouts = [[1,10,1],[2,20,2],[3,30,3]], max_time = 6', judgeInput: '3\n1 10 1\n2 20 2\n3 30 3\n6', output: '60' },
                { input: 'workouts = [[1,500,50],[2,400,40],[3,300,30]], max_time = 100', judgeInput: '3\n1 500 50\n2 400 40\n3 300 30\n100', output: '900' },
                { input: 'workouts = [[1,100,10],[2,100,10],[3,100,10]], max_time = 25', judgeInput: '3\n1 100 10\n2 100 10\n3 100 10\n25', output: '200' },
                { input: 'workouts = [[1,50,10],[2,150,20],[3,250,30]], max_time = 30', judgeInput: '3\n1 50 10\n2 150 20\n3 250 30\n30', output: '250' },
                { input: 'workouts = [[1,1000,100]], max_time = 100', judgeInput: '1\n1 1000 100\n100', output: '1000' },
                { input: 'workouts = [[1,80,20],[2,90,20],[3,100,20]], max_time = 40', judgeInput: '3\n1 80 20\n2 90 20\n3 100 20\n40', output: '190' },
                { input: 'workouts = [[1,25,5],[2,35,10],[3,45,15],[4,55,20]], max_time = 25', judgeInput: '4\n1 25 5\n2 35 10\n3 45 15\n4 55 20\n25', output: '105' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} workouts
 * @param {number} max_time
 * @return {number}
 */
function maxCalories(workouts, max_time) {
    // Your code here
}`,
                python: `def max_calories(workouts, max_time):
    """
    :type workouts: List[List[int]]
    :type max_time: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxCalories(vector<vector<int>>& workouts, int max_time) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxCalories(int[][] workouts, int max_time) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const workouts = [];\n    for(let i=1; i<=n; i++) workouts.push(lines[i].split(' ').map(Number));\n    const max_time = parseInt(lines[n+1]);\n    console.log(maxCalories(workouts, max_time));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nworkouts = []\nfor i in range(1, n+1):\n    workouts.append(list(map(int, lines[i].split())))\nmax_time = int(lines[n+1])\nprint(max_calories(workouts, max_time))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxCalories(vector<vector<int>>& workouts, int max_time);\nint main() {\n    int n, max_time;\n    cin >> n;\n    vector<vector<int>> workouts(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> workouts[i][0] >> workouts[i][1] >> workouts[i][2];\n    cin >> max_time;\n    cout << maxCalories(workouts, max_time) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] workouts = new int[n][3];\n        for(int i=0; i<n; i++) {\n            workouts[i][0] = sc.nextInt();\n            workouts[i][1] = sc.nextInt();\n            workouts[i][2] = sc.nextInt();\n        }\n        int max_time = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxCalories(workouts, max_time));\n    }\n}`
            }
        }]
    }]
};
