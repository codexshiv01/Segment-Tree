export const discordData = {
    id: 'discord',
    name: 'Discord',
    logo: 'https://logo.clearbit.com/discord.com',
    description: 'Practice real Discord Online Assessment questions.',
    assessments: [{
        id: 'discord-oa-1',
        title: 'Discord OA-1',
        duration: 90,
        problems: [{
            id: 'voice-channel-load',
            title: 'Voice Channel Load Balancer',
            difficulty: 'Hard',
            description: `Balance user load across Discord voice servers.

You are given:
- users: List of [user_id, voice_quality_needed, latency_requirement] where quality: 1=low, 2=medium, 3=high
- servers: List of [server_id, max_capacity, current_load]

Goal: Assign users to servers. A user can be assigned if current_load + quality_needed <= max_capacity. Assign greedily in order. Return count of successfully assigned users.

Input Format:
- users: List of lists [id, quality, latency]
- servers: List of lists [id, capacity, load]

Output Format:
- Return an integer (count of assigned users)

Constraints:
- 1 <= users.length <= 1000
- 1 <= servers.length <= 100
- 1 <= quality <= 3
- 1 <= max_capacity <= 1000`,
            examples: [
                { input: 'users = [[1,2,50],[2,1,30]], servers = [[1,10,8],[2,10,5]]', output: '2' },
                { input: 'users = [[1,3,20]], servers = [[1,5,4]]', output: '0' }
            ],
            testCases: [
                { input: 'users = [[1,2,50],[2,1,30]], servers = [[1,10,8],[2,10,5]]', judgeInput: '2\n1 2 50\n2 1 30\n2\n1 10 8\n2 10 5', output: '2' },
                { input: 'users = [[1,3,20]], servers = [[1,5,4]]', judgeInput: '1\n1 3 20\n1\n1 5 4', output: '0' },
                { input: 'users = [[1,1,10],[2,1,20],[3,1,30]], servers = [[1,10,7]]', judgeInput: '3\n1 1 10\n2 1 20\n3 1 30\n1\n1 10 7', output: '3' },
                { input: 'users = [[1,2,15],[2,2,25]], servers = [[1,10,6],[2,10,8]]', judgeInput: '2\n1 2 15\n2 2 25\n2\n1 10 6\n2 10 8', output: '2' },
                { input: 'users = [[1,3,30]], servers = [[1,10,7]]', judgeInput: '1\n1 3 30\n1\n1 10 7', output: '1' },
                { input: 'users = [[1,2,40],[2,2,50],[3,2,60]], servers = [[1,10,5]]', judgeInput: '3\n1 2 40\n2 2 50\n3 2 60\n1\n1 10 5', output: '2' },
                { input: 'users = [[1,1,25],[2,1,35],[3,1,45],[4,1,55]], servers = [[1,10,6],[2,10,9]]', judgeInput: '4\n1 1 25\n2 1 35\n3 1 45\n4 1 55\n2\n1 10 6\n2 10 9', output: '4' },
                { input: 'users = [[1,3,70],[2,3,80]], servers = [[1,10,4]]', judgeInput: '2\n1 3 70\n2 3 80\n1\n1 10 4', output: '2' },
                { input: 'users = [[1,2,100]], servers = [[1,10,10]]', judgeInput: '1\n1 2 100\n1\n1 10 10', output: '0' },
                { input: 'users = [[1,1,15],[2,2,25],[3,3,35]], servers = [[1,20,14]]', judgeInput: '3\n1 1 15\n2 2 25\n3 3 35\n1\n1 20 14', output: '3' },
                { input: 'users = [[1,2,45],[2,2,55]], servers = [[1,10,7],[2,10,7]]', judgeInput: '2\n1 2 45\n2 2 55\n2\n1 10 7\n2 10 7', output: '1' },
                { input: 'users = [[1,1,30],[2,1,40],[3,1,50],[4,1,60],[5,1,70]], servers = [[1,15,10]]', judgeInput: '5\n1 1 30\n2 1 40\n3 1 50\n4 1 60\n5 1 70\n1\n1 15 10', output: '5' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} users
 * @param {number[][]} servers
 * @return {number}
 */
function assignedUsers(users, servers) {
    // Your code here
}`,
                python: `def assigned_users(users, servers):
    """
    :type users: List[List[int]]
    :type servers: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int assignedUsers(vector<vector<int>>& users, vector<vector<int>>& servers) {
    // Your code here
}`,
                java: `public class Solution {
    public int assignedUsers(int[][] users, int[][] servers) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const users = [];\n    for(let i=1; i<=n; i++) users.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const servers = [];\n    for(let i=n+2; i<n+2+m; i++) servers.push(lines[i].split(' ').map(Number));\n    console.log(assignedUsers(users, servers));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nusers = []\nfor i in range(1, n+1):\n    users.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nservers = []\nfor i in range(n+2, n+2+m):\n    servers.append(list(map(int, lines[i].split())))\nprint(assigned_users(users, servers))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint assignedUsers(vector<vector<int>>& users, vector<vector<int>>& servers);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> users(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> users[i][0] >> users[i][1] >> users[i][2];\n    cin >> m;\n    vector<vector<int>> servers(m, vector<int>(3));\n    for(int i=0; i<m; ++i) cin >> servers[i][0] >> servers[i][1] >> servers[i][2];\n    cout << assignedUsers(users, servers) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] users = new int[n][3];\n        for(int i=0; i<n; i++) {\n            users[i][0] = sc.nextInt();\n            users[i][1] = sc.nextInt();\n            users[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] servers = new int[m][3];\n        for(int i=0; i<m; i++) {\n            servers[i][0] = sc.nextInt();\n            servers[i][1] = sc.nextInt();\n            servers[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.assignedUsers(users, servers));\n    }\n}`
            }
        }, {
            id: 'message-rate-limit',
            title: 'Message Rate Limiter',
            difficulty: 'Medium',
            description: `Implement rate limiting for Discord messages.

You are given:
- messages: List of [user_id, timestamp] representing message send attempts
- rate_limit: Maximum messages per user per minute (60 seconds)

Goal: For each message, check if user has sent < rate_limit messages in the past 60 seconds. Return count of allowed messages.

Input Format:
- messages: List of lists [user_id, timestamp]
- rate_limit: Integer

Output Format:
- Return an integer (count of allowed messages)

Constraints:
- 1 <= messages.length <= 1000
- 1 <= user_id <= 1000
- 0 <= timestamp <= 100000
- 1 <= rate_limit <= 100`,
            examples: [
                { input: 'messages = [[1,10],[1,20],[1,30]], rate_limit = 2', output: '2' },
                { input: 'messages = [[1,10],[2,20]], rate_limit = 1', output: '2' }
            ],
            testCases: [
                { input: 'messages = [[1,10],[1,20],[1,30]], rate_limit = 2', judgeInput: '3\n1 10\n1 20\n1 30\n2', output: '2' },
                { input: 'messages = [[1,10],[2,20]], rate_limit = 1', judgeInput: '2\n1 10\n2 20\n1', output: '2' },
                { input: 'messages = [[1,5],[1,10],[1,70]], rate_limit = 2', judgeInput: '3\n1 5\n1 10\n1 70\n2', output: '3' },
                { input: 'messages = [[1,100],[1,105],[1,110],[1,165]], rate_limit = 3', judgeInput: '4\n1 100\n1 105\n1 110\n1 165\n3', output: '4' },
                { input: 'messages = [[1,50]], rate_limit = 1', judgeInput: '1\n1 50\n1', output: '1' },
                { input: 'messages = [[1,10],[1,15],[1,20],[1,25],[1,30]], rate_limit = 5', judgeInput: '5\n1 10\n1 15\n1 20\n1 25\n1 30\n5', output: '5' },
                { input: 'messages = [[1,100],[2,105],[1,110],[2,115]], rate_limit = 1', judgeInput: '4\n1 100\n2 105\n1 110\n2 115\n1', output: '2' },
                { input: 'messages = [[1,200],[1,210],[1,220],[1,260]], rate_limit = 2', judgeInput: '4\n1 200\n1 210\n1 220\n1 260\n2', output: '3' },
                { input: 'messages = [[1,50],[1,51],[1,52],[1,53],[1,54]], rate_limit = 4', judgeInput: '5\n1 50\n1 51\n1 52\n1 53\n1 54\n4', output: '4' },
                { input: 'messages = [[1,300],[2,305],[3,310]], rate_limit = 1', judgeInput: '3\n1 300\n2 305\n3 310\n1', output: '3' },
                { input: 'messages = [[1,400],[1,420],[1,440],[1,460],[1,480],[1,500]], rate_limit = 3', judgeInput: '6\n1 400\n1 420\n1 440\n1 460\n1 480\n1 500\n3', output: '6' },
                { input: 'messages = [[1,600],[1,605],[1,610],[1,665]], rate_limit = 2', judgeInput: '4\n1 600\n1 605\n1 610\n1 665\n2', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} messages
 * @param {number} rate_limit
 * @return {number}
 */
function allowedMessages(messages, rate_limit) {
    // Your code here
}`,
                python: `def allowed_messages(messages, rate_limit):
    """
    :type messages: List[List[int]]
    :type rate_limit: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int allowedMessages(vector<vector<int>>& messages, int rate_limit) {
    // Your code here
}`,
                java: `public class Solution {
    public int allowedMessages(int[][] messages, int rate_limit) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const messages = [];\n    for(let i=1; i<=n; i++) messages.push(lines[i].split(' ').map(Number));\n    const rate_limit = parseInt(lines[n+1]);\n    console.log(allowedMessages(messages, rate_limit));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmessages = []\nfor i in range(1, n+1):\n    messages.append(list(map(int, lines[i].split())))\nrate_limit = int(lines[n+1])\nprint(allowed_messages(messages, rate_limit))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint allowedMessages(vector<vector<int>>& messages, int rate_limit);\nint main() {\n    int n, rate_limit;\n    cin >> n;\n    vector<vector<int>> messages(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> messages[i][0] >> messages[i][1];\n    cin >> rate_limit;\n    cout << allowedMessages(messages, rate_limit) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] messages = new int[n][2];\n        for(int i=0; i<n; i++) {\n            messages[i][0] = sc.nextInt();\n            messages[i][1] = sc.nextInt();\n        }\n        int rate_limit = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.allowedMessages(messages, rate_limit));\n    }\n}`
            }
        }]
    }]
};
