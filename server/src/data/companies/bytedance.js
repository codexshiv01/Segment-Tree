export const bytedanceData = {
    id: 'bytedance',
    name: 'ByteDance',
    logo: 'https://logo.clearbit.com/bytedance.com',
    description: 'Practice real ByteDance Online Assessment questions.',
    assessments: [{
        id: 'bytedance-oa-1',
        title: 'ByteDance OA-1',
        duration: 90,
        problems: [{
            id: 'video-recommendation',
            title: 'Video Recommendation Engine',
            difficulty: 'Hard',
            description: `Rank videos for personalized recommendations based on engagement metrics.

You are given:
- videos: List of [video_id, views, likes, shares, watch_time_sec]

Goal: Calculate score = (likes * 2 + shares * 5) / views * watch_time_sec. Return list of video_ids sorted by score descending. Round scores to 4 decimals for comparison.

Input Format:
- videos: List of lists [id, views, likes, shares, watch_time]

Output Format:
- Return list of integers (video IDs) sorted by score descending

Constraints:
- 1 <= videos.length <= 1000
- 1 <= views, likes, shares <= 1000000
- 1 <= watch_time_sec <= 600`,
            examples: [
                { input: 'videos = [[1,1000,100,20,30],[2,500,80,15,40]]', output: '[2,1]' },
                { input: 'videos = [[1,100,10,5,10]]', output: '[1]' }
            ],
            testCases: [
                { input: 'videos = [[1,1000,100,20,30],[2,500,80,15,40]]', judgeInput: '2\n1 1000 100 20 30\n2 500 80 15 40', output: '[2,1]' },
                { input: 'videos = [[1,100,10,5,10]]', judgeInput: '1\n1 100 10 5 10', output: '[1]' },
                { input: 'videos = [[1,1000,50,10,20],[2,1000,100,5,20],[3,1000,75,15,20]]', judgeInput: '3\n1 1000 50 10 20\n2 1000 100 5 20\n3 1000 75 15 20', output: '[3,2,1]' },
                { input: 'videos = [[5,500,25,5,50],[10,1000,50,10,50]]', judgeInput: '2\n5 500 25 5 50\n10 1000 50 10 50', output: '[5,10]' },
                { input: 'videos = [[1,2000,200,40,100]]', judgeInput: '1\n1 2000 200 40 100', output: '[1]' },
                { input: 'videos = [[3,800,80,16,60],[7,400,40,8,60]]', judgeInput: '2\n3 800 80 16 60\n7 400 40 8 60', output: '[3,7]' },
                { input: 'videos = [[1,1000,100,10,30],[2,1000,100,10,50]]', judgeInput: '2\n1 1000 100 10 30\n2 1000 100 10 50', output: '[2,1]' },
                { input: 'videos = [[15,600,60,12,45],[20,600,60,12,30]]', judgeInput: '2\n15 600 60 12 45\n20 600 60 12 30', output: '[15,20]' },
                { input: 'videos = [[1,500,100,20,25],[2,1000,200,40,25]]', judgeInput: '2\n1 500 100 20 25\n2 1000 200 40 25', output: '[1,2]' },
                { input: 'videos = [[8,1500,150,30,80],[12,1500,150,30,40]]', judgeInput: '2\n8 1500 150 30 80\n12 1500 150 30 40', output: '[8,12]' },
                { input: 'videos = [[1,200,20,4,120],[2,400,40,8,60],[3,100,10,2,240]]', judgeInput: '3\n1 200 20 4 120\n2 400 40 8 60\n3 100 10 2 240', output: '[1,2,3]' },
                { input: 'videos = [[25,5000,500,100,150]]', judgeInput: '1\n25 5000 500 100 150', output: '[25]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} videos
 * @return {number[]}
 */
function rankVideos(videos) {
    // Your code here
}`,
                python: `def rank_videos(videos):
    """
    :type videos: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> rankVideos(vector<vector<int>>& videos) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] rankVideos(int[][] videos) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const videos = [];\n    for(let i=1; i<=n; i++) videos.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(rankVideos(videos)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nvideos = []\nfor i in range(1, n+1):\n    videos.append(list(map(int, lines[i].split())))\nprint(json.dumps(rank_videos(videos)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> rankVideos(vector<vector<int>>& videos);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> videos(n, vector<int>(5));\n    for(int i=0; i<n; ++i) cin >> videos[i][0] >> videos[i][1] >> videos[i][2] >> videos[i][3] >> videos[i][4];\n    vector<int> res = rankVideos(videos);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] videos = new int[n][5];\n        for(int i=0; i<n; i++) {\n            videos[i][0] = sc.nextInt();\n            videos[i][1] = sc.nextInt();\n            videos[i][2] = sc.nextInt();\n            videos[i][3] = sc.nextInt();\n            videos[i][4] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.rankVideos(videos);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'content-moderation',
            title: 'Content Moderation Queue Manager',
            difficulty: 'Medium',
            description: `Prioritize content for moderation review based on risk scores.

You are given:
- content: List of [content_id, risk_score, reports_count]

Goal: Calculate priority = risk_score * reports_count. Return count of items with priority >= 100.

Input Format:
- content: List of lists [id, risk, reports]

Output Format:
- Return an integer (count of high-priority items)

Constraints:
- 1 <= content.length <= 10000
- 0 <= risk_score <= 100
- 0 <= reports_count <= 1000`,
            examples: [
                { input: 'content = [[1,50,3],[2,80,2],[3,40,1]]', output: '2' },
                { input: 'content = [[1,10,5]]', output: '0' }
            ],
            testCases: [
                { input: 'content = [[1,50,3],[2,80,2],[3,40,1]]', judgeInput: '3\n1 50 3\n2 80 2\n3 40 1', output: '2' },
                { input: 'content = [[1,10,5]]', judgeInput: '1\n1 10 5', output: '0' },
                { input: 'content = [[1,25,4],[2,20,5],[3,30,4]]', judgeInput: '3\n1 25 4\n2 20 5\n3 30 4', output: '2' },
                { input: 'content = [[1,100,1],[2,50,2],[3,33,3],[4,25,4]]', judgeInput: '4\n1 100 1\n2 50 2\n3 33 3\n4 25 4', output: '3' },
                { input: 'content = [[1,90,0]]', judgeInput: '1\n1 90 0', output: '0' },
                { input: 'content = [[1,60,2],[2,70,2],[3,80,2]]', judgeInput: '3\n1 60 2\n2 70 2\n3 80 2', output: '2' },
                { input: 'content = [[1,10,10],[2,20,5]]', judgeInput: '2\n1 10 10\n2 20 5\n', output: '2' },
                { input: 'content = [[1,99,1],[2,1,99]]', judgeInput: '2\n1 99 1\n2 1 99', output: '0' },
                { input: 'content = [[1,40,3],[2,50,2],[3,35,3]]', judgeInput: '3\n1 40 3\n2 50 2\n3 35 3', output: '2' },
                { input: 'content = [[1,15,7],[2,18,6],[3,12,9]]', judgeInput: '3\n1 15 7\n2 18 6\n3 12 9', output: '2' },
                { input: 'content = [[1,75,2],[2,80,2],[3,65,2]]', judgeInput: '3\n1 75 2\n2 80 2\n3 65 2', output: '2' },
                { input: 'content = [[1,50,2],[2,51,2],[3,49,2]]', judgeInput: '3\n1 50 2\n2 51 2\n3 49 2', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} content
 * @return {number}
 */
function highPriorityCount(content) {
    // Your code here
}`,
                python: `def high_priority_count(content):
    """
    :type content: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int highPriorityCount(vector<vector<int>>& content) {
    // Your code here
}`,
                java: `public class Solution {
    public int highPriorityCount(int[][] content) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const content = [];\n    for(let i=1; i<=n; i++) content.push(lines[i].split(' ').map(Number));\n    console.log(highPriorityCount(content));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncontent = []\nfor i in range(1, n+1):\n    content.append(list(map(int, lines[i].split())))\nprint(high_priority_count(content))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint highPriorityCount(vector<vector<int>>& content);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> content(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> content[i][0] >> content[i][1] >> content[i][2];\n    cout << highPriorityCount(content) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] content = new int[n][3];\n        for(int i=0; i<n; i++) {\n            content[i][0] = sc.nextInt();\n            content[i][1] = sc.nextInt();\n            content[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.highPriorityCount(content));\n    }\n}`
            }
        }]
    }]
};
