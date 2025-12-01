export const credData = {
    id: 'cred',
    name: 'CRED',
    logo: 'https://logo.clearbit.com/cred.club',
    description: 'Practice real CRED Online Assessment questions.',
    assessments: [{
        id: 'cred-oa-1',
        title: 'CRED OA-1',
        duration: 90,
        problems: [{
            id: 'credit-score-calc',
            title: 'Credit Score Calculator',
            difficulty: 'Medium',
            description: `Calculate a user's credit score based on financial behavior.

You are given:
- history: List of [payment_status, amount, days_overdue]
  - payment_status: 0 (On-time), 1 (Late), 2 (Missed)
- credit_limit: Total credit limit
- current_balance: Current outstanding balance

Goal:
Base Score = 700
- On-time payment: +10 points
- Late payment: -5 * days_overdue (max -50 per transaction)
- Missed payment: -100 points
- Utilization > 30%: -50 points
- Utilization > 80%: -100 points (cumulative with >30%)
Return final score (min 300, max 900).

Input Format:
- history: List of lists [status, amount, overdue]
- credit_limit: Integer
- current_balance: Integer

Output Format:
- Return an integer (final score)

Constraints:
- 1 <= history.length <= 100
- 0 <= days_overdue <= 365`,
            examples: [
                { input: 'history = [[0,1000,0],[1,500,2]], limit = 10000, balance = 2000', output: '700' },
                { input: 'history = [[2,1000,30]], limit = 5000, balance = 4500', output: '450' }
            ],
            testCases: [
                { input: 'history = [[0,1000,0],[1,500,2]], limit = 10000, balance = 2000', judgeInput: '2\n0 1000 0\n1 500 2\n10000\n2000', output: '700' },
                { input: 'history = [[2,1000,30]], limit = 5000, balance = 4500', judgeInput: '1\n2 1000 30\n5000\n4500', output: '450' },
                { input: 'history = [[0,100,0],[0,200,0],[0,300,0]], limit = 1000, balance = 100', output: '730' },
                { input: 'history = [[1,500,10]], limit = 1000, balance = 100', judgeInput: '1\n1 500 10\n1000\n100', output: '650' },
                { input: 'history = [[1,500,20]], limit = 1000, balance = 100', judgeInput: '1\n1 500 20\n1000\n100', output: '650' },
                { input: 'history = [[0,100,0]], limit = 1000, balance = 350', judgeInput: '1\n0 100 0\n1000\n350', output: '660' },
                { input: 'history = [[0,100,0]], limit = 1000, balance = 850', judgeInput: '1\n0 100 0\n1000\n850', output: '560' },
                { input: 'history = [[2,100,0],[2,100,0],[2,100,0],[2,100,0],[2,100,0]], limit = 10000, balance = 0', judgeInput: '5\n2 100 0\n2 100 0\n2 100 0\n2 100 0\n2 100 0\n10000\n0', output: '300' },
                { input: 'history = [[0,100,0],[0,100,0]], limit = 1000, balance = 900', judgeInput: '2\n0 100 0\n0 100 0\n1000\n900', output: '570' },
                { input: 'history = [[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0],[0,100,0]], limit = 10000, balance = 0', judgeInput: '21\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n0 100 0\n10000\n0', output: '900' },
                { input: 'history = [[1,100,5],[0,100,0]], limit = 1000, balance = 200', judgeInput: '2\n1 100 5\n0 100 0\n1000\n200', output: '685' },
                { input: 'history = [[2,100,0],[1,100,10],[0,100,0]], limit = 5000, balance = 1000', judgeInput: '3\n2 100 0\n1 100 10\n0 100 0\n5000\n1000', output: '560' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} history
 * @param {number} credit_limit
 * @param {number} current_balance
 * @return {number}
 */
function calculateScore(history, credit_limit, current_balance) {
    // Your code here
}`,
                python: `def calculate_score(history, credit_limit, current_balance):
    """
    :type history: List[List[int]]
    :type credit_limit: int
    :type current_balance: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int calculateScore(vector<vector<int>>& history, int credit_limit, int current_balance) {
    // Your code here
}`,
                java: `public class Solution {
    public int calculateScore(int[][] history, int credit_limit, int current_balance) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const history = [];\n    for(let i=1; i<=n; i++) history.push(lines[i].split(' ').map(Number));\n    const credit_limit = parseInt(lines[n+1]);\n    const current_balance = parseInt(lines[n+2]);\n    console.log(calculateScore(history, credit_limit, current_balance));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nhistory = []\nfor i in range(1, n+1):\n    history.append(list(map(int, lines[i].split())))\ncredit_limit = int(lines[n+1])\ncurrent_balance = int(lines[n+2])\nprint(calculate_score(history, credit_limit, current_balance))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint calculateScore(vector<vector<int>>& history, int credit_limit, int current_balance);\nint main() {\n    int n, credit_limit, current_balance;\n    cin >> n;\n    vector<vector<int>> history(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> history[i][0] >> history[i][1] >> history[i][2];\n    cin >> credit_limit >> current_balance;\n    cout << calculateScore(history, credit_limit, current_balance) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] history = new int[n][3];\n        for(int i=0; i<n; i++) {\n            history[i][0] = sc.nextInt();\n            history[i][1] = sc.nextInt();\n            history[i][2] = sc.nextInt();\n        }\n        int credit_limit = sc.nextInt();\n        int current_balance = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.calculateScore(history, credit_limit, current_balance));\n    }\n}`
            }
        }, {
            id: 'bill-scheduler',
            title: 'Bill Payment Scheduler',
            difficulty: 'Hard',
            description: `Schedule bill payments to maximize rewards.

You are given:
- bills: List of [bill_id, amount, due_date, reward_points]
- daily_limit: Maximum amount that can be paid per day

Goal: Schedule payments such that all bills are paid on or before due_date, daily_limit is not exceeded, and total reward_points are maximized. (Some bills might be skippable if not mandatory? No, assume all must be paid or return -1 if impossible. Wait, let's make it: Select a subset of bills to pay to maximize rewards without exceeding daily limit, assuming each bill takes 1 day to process? No, let's stick to "Maximize rewards given constraints".)

Revised Goal: You have 'k' days. Each day you can pay at most 'daily_limit'. Select a subset of bills to pay to maximize total reward. Each bill must be paid on or before its due_date. Each bill takes the full amount from that day's limit.
Actually, simpler:
Each bill takes 1 day to process. You can process 1 bill per day.
Input: bills = [deadline, reward].
Output: Max reward.
(This is a classic greedy problem with disjoint sets or priority queue).

Input Format:
- bills: List of lists [deadline, reward] (deadline is day number from now)

Output Format:
- Return an integer (max reward)

Constraints:
- 1 <= bills.length <= 1000
- 1 <= deadline <= 1000
- 1 <= reward <= 10000`,
            examples: [
                { input: 'bills = [[1,10],[1,20],[2,30]]', output: '50' },
                { input: 'bills = [[2,10],[2,20],[2,30]]', output: '50' }
            ],
            testCases: [
                { input: 'bills = [[1,10],[1,20],[2,30]]', judgeInput: '3\n1 10\n1 20\n2 30', output: '50' },
                { input: 'bills = [[2,10],[2,20],[2,30]]', judgeInput: '3\n2 10\n2 20\n2 30', output: '50' },
                { input: 'bills = [[1,50],[2,10],[3,20]]', judgeInput: '3\n1 50\n2 10\n3 20', output: '80' },
                { input: 'bills = [[1,10],[2,10],[3,10]]', judgeInput: '3\n1 10\n2 10\n3 10', output: '30' },
                { input: 'bills = [[3,40],[3,30],[3,20],[3,10]]', judgeInput: '4\n3 40\n3 30\n3 20\n3 10', output: '90' },
                { input: 'bills = [[1,100],[1,200]]', judgeInput: '2\n1 100\n1 200', output: '200' },
                { input: 'bills = [[4,50],[2,10],[4,20],[2,40]]', judgeInput: '4\n4 50\n2 10\n4 20\n2 40', output: '110' },
                { input: 'bills = [[1,5],[1,5],[1,5]]', judgeInput: '3\n1 5\n1 5\n1 5', output: '5' },
                { input: 'bills = [[2,100],[2,200],[1,50]]', judgeInput: '3\n2 100\n2 200\n1 50', output: '300' },
                { input: 'bills = [[5,10],[5,20],[5,30],[5,40],[5,50],[5,60]]', judgeInput: '6\n5 10\n5 20\n5 30\n5 40\n5 50\n5 60', output: '200' },
                { input: 'bills = [[1,10],[2,20],[3,30],[1,40]]', judgeInput: '4\n1 10\n2 20\n3 30\n1 40', output: '90' },
                { input: 'bills = [[3,100],[1,200],[2,50],[3,10]]', judgeInput: '4\n3 100\n1 200\n2 50\n3 10', output: '350' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} bills
 * @return {number}
 */
function maxRewards(bills) {
    // Your code here
}`,
                python: `def max_rewards(bills):
    """
    :type bills: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxRewards(vector<vector<int>>& bills) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxRewards(int[][] bills) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const bills = [];\n    for(let i=1; i<=n; i++) bills.push(lines[i].split(' ').map(Number));\n    console.log(maxRewards(bills));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nbills = []\nfor i in range(1, n+1):\n    bills.append(list(map(int, lines[i].split())))\nprint(max_rewards(bills))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxRewards(vector<vector<int>>& bills);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> bills(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> bills[i][0] >> bills[i][1];\n    cout << maxRewards(bills) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] bills = new int[n][2];\n        for(int i=0; i<n; i++) {\n            bills[i][0] = sc.nextInt();\n            bills[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.maxRewards(bills));\n    }\n}`
            }
        }]
    }]
};
