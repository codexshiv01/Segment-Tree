export const duolingoData = {
    id: 'duolingo',
    name: 'Duolingo',
    logo: 'https://logo.clearbit.com/duolingo.com',
    description: 'Practice real Duolingo Online Assessment questions.',
    assessments: [{
        id: 'duolingo-oa-1',
        title: 'Duolingo OA-1',
        duration: 90,
        problems: [{
            id: 'streak-calculator',
            title: 'Learning Streak Calculator',
            difficulty: 'Easy',
            description: `Calculate user learning streaks.

You are given:
- activity: List of [day_number, lessons_completed]

Goal: A streak day is when lessons_completed >= 1. Count consecutive streak days starting from day 1. Return longest streak length.

Input Format:
- activity: List of lists [day, lessons]

Output Format:
- Return an integer (longest streak)

Constraints:
- 1 <= activity.length <= 365
- 1 <= day_number <= 365
- 0 <= lessons_completed <= 100`,
            examples: [
                { input: 'activity = [[1,5],[2,3],[3,0],[4,2]]', output: '2' },
                { input: 'activity = [[1,10],[2,5],[3,8]]', output: '3' }
            ],
            testCases: [
                { input: 'activity = [[1,5],[2,3],[3,0],[4,2]]', judgeInput: '4\n1 5\n2 3\n3 0\n4 2', output: '2' },
                { input: 'activity = [[1,10],[2,5],[3,8]]', judgeInput: '3\n1 10\n2 5\n3 8', output: '3' },
                { input: 'activity = [[1,7],[2,0],[3,4]]', judgeInput: '3\n1 7\n2 0\n3 4', output: '1' },
                { input: 'activity = [[1,12],[2,15],[3,8],[4,20],[5,3]]', judgeInput: '5\n1 12\n2 15\n3 8\n4 20\n5 3', output: '5' },
                { input: 'activity = [[1,0]]', judgeInput: '1\n1 0', output: '0' },
                { input: 'activity = [[1,6],[2,9],[3,12],[4,0],[5,5]]', judgeInput: '5\n1 6\n2 9\n3 12\n4 0\n5 5', output: '3' },
                { input: 'activity = [[1,25]]', judgeInput: '1\n1 25', output: '1' },
                { input: 'activity = [[1,4],[2,7],[3,2],[4,11],[5,6],[6,9],[7,14]]', judgeInput: '7\n1 4\n2 7\n3 2\n4 11\n5 6\n6 9\n7 14', output: '7' },
                { input: 'activity = [[1,18],[2,22],[3,0],[4,0],[5,8]]', judgeInput: '5\n1 18\n2 22\n3 0\n4 0\n5 8', output: '2' },
                { input: 'activity = [[1,30],[2,28],[3,35],[4,40]]', judgeInput: '4\n1 30\n2 28\n3 35\n4 40', output: '4' },
                { input: 'activity = [[1,11],[2,13]]', judgeInput: '2\n1 11\n2 13', output: '2' },
                { input: 'activity = [[1,5],[2,8],[3,12],[4,15],[5,18],[6,20]]', judgeInput: '6\n1 5\n2 8\n3 12\n4 15\n5 18\n6 20', output: '6' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} activity
 * @return {number}
 */
function longestStreak(activity) {
    // Your code here
}`,
                python: `def longest_streak(activity):
    """
    :type activity: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int longestStreak(vector<vector<int>>& activity) {
    // Your code here
}`,
                java: `public class Solution {
    public int longestStreak(int[][] activity) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const activity = [];\n    for(let i=1; i<=n; i++) activity.push(lines[i].split(' ').map(Number));\n    console.log(longestStreak(activity));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nactivity = []\nfor i in range(1, n+1):\n    activity.append(list(map(int, lines[i].split())))\nprint(longest_streak(activity))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint longestStreak(vector<vector<int>>& activity);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> activity(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> activity[i][0] >> activity[i][1];\n    cout << longestStreak(activity) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] activity = new int[n][2];\n        for(int i=0; i<n; i++) {\n            activity[i][0] = sc.nextInt();\n            activity[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.longestStreak(activity));\n    }\n}`
            }
        }, {
            id: 'xp-optimizer',
            title: 'XP Points Optimizer',
            difficulty: 'Medium',
            description: `Maximize XP points from lessons.

You are given:
- lessons: List of [lesson_id, xp_reward, time_minutes]
- available_time: Total available time in minutes

Goal: Select lessons to maximize total XP without exceeding available_time. Return maximum XP (knapsack problem).

Input Format:
- lessons: List of lists [id, xp, time]
- available_time: Integer

Output Format:
- Return an integer (maximum XP)

Constraints:
- 1 <= lessons.length <= 100
- 1 <= xp_reward, time_minutes <= 100
- 1 <= available_time <= 1000`,
            examples: [
                { input: 'lessons = [[1,50,10],[2,60,20],[3,100,30]], available_time = 50', output: '160' },
                { input: 'lessons = [[1,30,15]], available_time = 20', output: '30' }
            ],
            testCases: [
                { input: 'lessons = [[1,50,10],[2,60,20],[3,100,30]], available_time = 50', judgeInput: '3\n1 50 10\n2 60 20\n3 100 30\n50', output: '160' },
                { input: 'lessons = [[1,30,15]], available_time = 20', judgeInput: '1\n1 30 15\n20', output: '30' },
                { input: 'lessons = [[1,40,12],[2,50,18]], available_time = 30', judgeInput: '2\n1 40 12\n2 50 18\n30', output: '90' },
                { input: 'lessons = [[1,80,25],[2,90,35]], available_time = 60', judgeInput: '2\n1 80 25\n2 90 35\n60', output: '170' },
                { input: 'lessons = [[1,20,10]], available_time = 5', judgeInput: '1\n1 20 10\n5', output: '0' },
                { input: 'lessons = [[1,45,15],[2,55,20],[3,65,25]], available_time = 40', judgeInput: '3\n1 45 15\n2 55 20\n3 65 25\n40', output: '100' },
                { input: 'lessons = [[1,70,22],[2,80,28]], available_time = 50', judgeInput: '2\n1 70 22\n2 80 28\n50', output: '150' },
                { input: 'lessons = [[1,35,14],[2,40,16],[3,45,18],[4,50,20]], available_time = 50', judgeInput: '4\n1 35 14\n2 40 16\n3 45 18\n4 50 20\n50', output: '125' },
                { input: 'lessons = [[1,25,8],[2,30,10],[3,35,12]], available_time = 30', judgeInput: '3\n1 25 8\n2 30 10\n3 35 12\n30', output: '90' },
                { input: 'lessons = [[1,100,40]], available_time = 45', judgeInput: '1\n1 100 40\n45', output: '100' },
                { input: 'lessons = [[1,55,19],[2,60,22],[3,70,26]], available_time = 45', judgeInput: '3\n1 55 19\n2 60 22\n3 70 26\n45', output: '115' },
                { input: 'lessons = [[1,85,30],[2,95,35],[3,105,40]], available_time = 70', judgeInput: '3\n1 85 30\n2 95 35\n3 105 40\n70', output: '200' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} lessons
 * @param {number} available_time
 * @return {number}
 */
function maxXP(lessons, available_time) {
    // Your code here
}`,
                python: `def max_xp(lessons, available_time):
    """
    :type lessons: List[List[int]]
    :type available_time: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxXP(vector<vector<int>>& lessons, int available_time) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxXP(int[][] lessons, int available_time) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const lessons = [];\n    for(let i=1; i<=n; i++) lessons.push(lines[i].split(' ').map(Number));\n    const available_time = parseInt(lines[n+1]);\n    console.log(maxXP(lessons, available_time));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nlessons = []\nfor i in range(1, n+1):\n    lessons.append(list(map(int, lines[i].split())))\navailable_time = int(lines[n+1])\nprint(max_xp(lessons, available_time))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxXP(vector<vector<int>>& lessons, int available_time);\nint main() {\n    int n, available_time;\n    cin >> n;\n    vector<vector<int>> lessons(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> lessons[i][0] >> lessons[i][1] >> lessons[i][2];\n    cin >> available_time;\n    cout << maxXP(lessons, available_time) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] lessons = new int[n][3];\n        for(int i=0; i<n; i++) {\n            lessons[i][0] = sc.nextInt();\n            lessons[i][1] = sc.nextInt();\n            lessons[i][2] = sc.nextInt();\n        }\n        int available_time = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxXP(lessons, available_time));\n    }\n}`
            }
        }]
    }]
};
