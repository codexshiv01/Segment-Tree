export const slackData = {
    id: 'slack',
    name: 'Slack',
    logo: 'https://logo.clearbit.com/slack.com',
    description: 'Practice real Slack Online Assessment questions.',
    assessments: [{
        id: 'slack-oa-1',
        title: 'Slack OA-1',
        duration: 90,
        problems: [{
            id: 'message-search',
            title: 'Message Search Indexer',
            difficulty: 'Hard',
            description: `Build message search with relevance ranking.

You are given:
- messages: List of [message_id, word_count, mentions_count, reactions_count]
- query_word_matches: List of message_ids that match search query

Goal: For matched messages, calculate score = word_count + (mentions_count * 5) + (reactions_count * 3). Return list of message_ids sorted by score descending.

Input Format:
- messages: List of lists [id, words, mentions, reactions]
- query_word_matches: List of integers

Output Format:
- Return list of integers (matched message IDs) sorted by score descending

Constraints:
- 1 <= messages.length <= 1000
- 1 <= word_count <= 1000
- 0 <= mentions_count, reactions_count <= 100
- 0 <= query_word_matches.length <= messages.length`,
            examples: [
                { input: 'messages = [[1,100,5,10],[2,50,2,5],[3,80,3,8]], query_word_matches = [1,2]', output: '[1,2]' },
                { input: 'messages = [[1,50,1,1]], query_word_matches = [1]', output: '[1]' }
            ],
            testCases: [
                { input: 'messages = [[1,100,5,10],[2,50,2,5],[3,80,3,8]], query_word_matches = [1,2]', judgeInput: '3\n1 100 5 10\n2 50 2 5\n3 80 3 8\n2\n1 2', output: '[1,2]' },
                { input: 'messages = [[1,50,1,1]], query_word_matches = [1]', judgeInput: '1\n1 50 1 1\n1\n1', output: '[1]' },
                { input: 'messages = [[1,200,10,20],[2,150,8,15],[3,100,5,10]], query_word_matches = [1,2,3]', judgeInput: '3\n1 200 10 20\n2 150 8 15\n3 100 5 10\n3\n1 2 3', output: '[1,2,3]' },
                { input: 'messages = [[1,30,2,3],[2,40,3,4]], query_word_matches = [2,1]', judgeInput: '2\n1 30 2 3\n2 40 3 4\n2\n2 1', output: '[2,1]' },
                { input: 'messages = [[5,120,6,12],[10,80,4,8]], query_word_matches = [5,10]', judgeInput: '2\n5 120 6 12\n10 80 4 8\n2\n5 10', output: '[5,10]' },
                { input: 'messages = [[1,50,0,0],[2,60,1,1],[3,55,0,2]], query_word_matches = [1,2,3]', judgeInput: '3\n1 50 0 0\n2 60 1 1\n3 55 0 2\n3\n1 2 3', output: '[2,3,1]' },
                { input: 'messages = [[1,300,20,30],[2,200,15,25]], query_word_matches = [1,2]', judgeInput: '2\n1 300 20 30\n2 200 15 25\n2\n1 2', output: '[1,2]' },
                { input: 'messages = [[7,90,5,10],[8,85,6,8]], query_word_matches = [7,8]', judgeInput: '2\n7 90 5 10\n8 85 6 8\n2\n7 8', output: '[7,8]' },
                { input: 'messages = [[1,100,10,5],[2,100,5,10]], query_word_matches = [1,2]', judgeInput: '2\n1 100 10 5\n2 100 5 10\n2\n1 2', output: '[1,2]' },
                { input: 'messages = [[3,75,3,6],[4,70,4,5],[5,65,5,4]], query_word_matches = [3,4,5]', judgeInput: '3\n3 75 3 6\n4 70 4 5\n5 65 5 4\n3\n3 4 5', output: '[3,4,5]' },
                { input: 'messages = [[1,250,15,20],[2,240,16,18]], query_word_matches = [1,2]', judgeInput: '2\n1 250 15 20\n2 240 16 18\n2\n1 2', output: '[2,1]' },
                { input: 'messages = [[10,500,25,50],[20,400,20,40]], query_word_matches = [10,20]', judgeInput: '2\n10 500 25 50\n20 400 20 40\n2\n10 20', output: '[10,20]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} messages
 * @param {number[]} query_word_matches
 * @return {number[]}
 */
function rankedMessages(messages, query_word_matches) {
    // Your code here
}`,
                python: `def ranked_messages(messages, query_word_matches):
    """
    :type messages: List[List[int]]
    :type query_word_matches: List[int]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> rankedMessages(vector<vector<int>>& messages, vector<int>& query_word_matches) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] rankedMessages(int[][] messages, int[] query_word_matches) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const messages = [];\n    for(let i=1; i<=n; i++) messages.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const query_word_matches = lines[n+2].split(' ').map(Number);\n    console.log(JSON.stringify(rankedMessages(messages, query_word_matches)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmessages = []\nfor i in range(1, n+1):\n    messages.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nquery_word_matches = list(map(int, lines[n+2].split()))\nprint(json.dumps(ranked_messages(messages, query_word_matches)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> rankedMessages(vector<vector<int>>& messages, vector<int>& query_word_matches);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> messages(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> messages[i][0] >> messages[i][1] >> messages[i][2] >> messages[i][3];\n    cin >> m;\n    vector<int> query_word_matches(m);\n    for(int i=0; i<m; ++i) cin >> query_word_matches[i];\n    vector<int> res = rankedMessages(messages, query_word_matches);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] messages = new int[n][4];\n        for(int i=0; i<n; i++) {\n            messages[i][0] = sc.nextInt();\n            messages[i][1] = sc.nextInt();\n            messages[i][2] = sc.nextInt();\n            messages[i][3] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[] query_word_matches = new int[m];\n        for(int i=0; i<m; i++) query_word_matches[i] = sc.nextInt();\n        Solution sol = new Solution();\n        int[] res = sol.rankedMessages(messages, query_word_matches);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'channel-activity',
            title: 'Channel Activity Monitor',
            difficulty: 'Medium',
            description: `Monitor channel activity and identify most active channels.

You are given:
- activities: List of [channel_id, message_count, active_users]

Goal: Calculate engagement = message_count * active_users for each channel. Return channel_id with highest engagement.

Input Format:
- activities: List of lists [id, messages, users]

Output Format:
- Return an integer (channel ID with max engagement)

Constraints:
- 1 <= activities.length <= 1000
- 1 <= message_count, active_users <= 10000`,
            examples: [
                { input: 'activities = [[1,100,50],[2,80,70]]', output: '2' },
                { input: 'activities = [[1,200,100]]', output: '1' }
            ],
            testCases: [
                { input: 'activities = [[1,100,50],[2,80,70]]', judgeInput: '2\n1 100 50\n2 80 70', output: '2' },
                { input: 'activities = [[1,200,100]]', judgeInput: '1\n1 200 100', output: '1' },
                { input: 'activities = [[1,150,60],[2,120,80],[3,100,100]]', judgeInput: '3\n1 150 60\n2 120 80\n3 100 100', output: '3' },
                { input: 'activities = [[5,300,50],[10,200,75]]', judgeInput: '2\n5 300 50\n10 200 75\n', output: '5' },
                { input: 'activities = [[1,500,20],[2,400,30]]', judgeInput: '2\n1 500 20\n2 400 30', output: '2' },
                { input: 'activities = [[3,250,40],[7,200,50]]', judgeInput: '2\n3 250 40\n7 200 50', output: '3' },
                { input: 'activities = [[1,1000,10],[2,100,100]]', judgeInput: '2\n1 1000 10\n2 100 100', output: '1' },
                { input: 'activities = [[15,180,70],[20,175,72]]', judgeInput: '2\n15 180 70\n20 175 72', output: '20' },
                { input: 'activities = [[1,90,90],[2,85,95]]', judgeInput: '2\n1 90 90\n2 85 95', output: '2' },
                { input: 'activities = [[8,600,25],[12,500,30]]', judgeInput: '2\n8 600 25\n12 500 30', output: '8' },
                { input: 'activities = [[1,400,50],[2,350,60]]', judgeInput: '2\n1 400 50\n2 350 60', output: '2' },
                { input: 'activities = [[100,2000,50],[200,1500,70]]', judgeInput: '2\n100 2000 50\n200 1500 70', output: '200' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} activities
 * @return {number}
 */
function mostActiveChannel(activities) {
    // Your code here
}`,
                python: `def most_active_channel(activities):
    """
    :type activities: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int mostActiveChannel(vector<vector<int>>& activities) {
    // Your code here
}`,
                java: `public class Solution {
    public int mostActiveChannel(int[][] activities) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const activities = [];\n    for(let i=1; i<=n; i++) activities.push(lines[i].split(' ').map(Number));\n    console.log(mostActiveChannel(activities));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nactivities = []\nfor i in range(1, n+1):\n    activities.append(list(map(int, lines[i].split())))\nprint(most_active_channel(activities))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint mostActiveChannel(vector<vector<int>>& activities);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> activities(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> activities[i][0] >> activities[i][1] >> activities[i][2];\n    cout << mostActiveChannel(activities) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] activities = new int[n][3];\n        for(int i=0; i<n; i++) {\n            activities[i][0] = sc.nextInt();\n            activities[i][1] = sc.nextInt();\n            activities[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.mostActiveChannel(activities));\n    }\n}`
            }
        }]
    }]
};
