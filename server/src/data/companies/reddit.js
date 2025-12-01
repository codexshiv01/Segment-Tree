export const redditData = {
    id: 'reddit',
    name: 'Reddit',
    logo: 'https://logo.clearbit.com/reddit.com',
    description: 'Practice real Reddit Online Assessment questions.',
    assessments: [{
        id: 'reddit-oa-1',
        title: 'Reddit OA-1',
        duration: 90,
        problems: [{
            id: 'comment-thread-depth',
            title: 'Maximum Comment Thread Depth',
            difficulty: 'Hard',
            description: `Reddit needs to track the maximum nesting depth of comment threads. Given parent-child relationships, find the deepest thread.

You are given:
- comments: List of [comment_id, parent_id] where parent_id = 0 means top-level comment

Goal: Return the maximum depth of any comment thread. Top-level comments have depth 1.

Input Format:
- comments: List of lists [comment_id, parent_id]

Output Format:
- Return an integer (maximum depth)

Constraints:
- 1 <= comments.length <= 10000
- 1 <= comment_id <= 100000
- 0 <= parent_id <= 100000
- No cycles in the tree`,
            examples: [
                { input: 'comments = [[1,0],[2,1],[3,2],[4,1]]', output: '3' },
                { input: 'comments = [[1,0],[2,0],[3,0]]', output: '1' }
            ],
            testCases: [
                { input: 'comments = [[1,0],[2,1],[3,2],[4,1]]', judgeInput: '4\n1 0\n2 1\n3 2\n4 1', output: '3' },
                { input: 'comments = [[1,0],[2,0],[3,0]]', judgeInput: '3\n1 0\n2 0\n3 0', output: '1' },
                { input: 'comments = [[1,0]]', judgeInput: '1\n1 0', output: '1' },
                { input: 'comments = [[1,0],[2,1],[3,2],[4,3],[5,4]]', judgeInput: '5\n1 0\n2 1\n3 2\n4 3\n5 4', output: '5' },
                { input: 'comments = [[1,0],[2,1],[3,1],[4,1]]', judgeInput: '4\n1 0\n2 1\n3 1\n4 1', output: '2' },
                { input: 'comments = [[1,0],[2,0],[3,1],[4,2]]', judgeInput: '4\n1 0\n2 0\n3 1\n4 2', output: '2' },
                { input: 'comments = [[1,0],[2,1],[3,2],[4,0],[5,4],[6,5]]', judgeInput: '6\n1 0\n2 1\n3 2\n4 0\n5 4\n6 5', output: '3' },
                { input: 'comments = [[10,0],[20,10],[30,20],[40,20],[50,30]]', judgeInput: '5\n10 0\n20 10\n30 20\n40 20\n50 30', output: '4' },
                { input: 'comments = [[1,0],[2,1],[3,1],[4,2],[5,2],[6,3],[7,3]]', judgeInput: '7\n1 0\n2 1\n3 1\n4 2\n5 2\n6 3\n7 3', output: '3' },
                { input: 'comments = [[100,0],[200,100],[300,200],[400,300],[500,400],[600,500]]', judgeInput: '6\n100 0\n200 100\n300 200\n400 300\n500 400\n600 500', output: '6' },
                { input: 'comments = [[1,0],[2,0],[3,1],[4,1],[5,2],[6,2]]', judgeInput: '6\n1 0\n2 0\n3 1\n4 1\n5 2\n6 2', output: '2' },
                { input: 'comments = [[5,0],[10,5],[15,10],[20,10],[25,15],[30,15]]', judgeInput: '6\n5 0\n10 5\n15 10\n20 10\n25 15\n30 15', output: '4' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} comments
 * @return {number}
 */
function maxDepth(comments) {
    // Your code here
}`,
                python: `def max_depth(comments):
    """
    :type comments: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxDepth(vector<vector<int>>& comments) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxDepth(int[][] comments) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const comments = [];\n    for(let i=1; i<=n; i++) comments.push(lines[i].split(' ').map(Number));\n    console.log(maxDepth(comments));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncomments = []\nfor i in range(1, n+1):\n    comments.append(list(map(int, lines[i].split())))\nprint(max_depth(comments))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxDepth(vector<vector<int>>& comments);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> comments(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> comments[i][0] >> comments[i][1];\n    cout << maxDepth(comments) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] comments = new int[n][2];\n        for(int i=0; i<n; i++) {\n            comments[i][0] = sc.nextInt();\n            comments[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.maxDepth(comments));\n    }\n}`
            }
        }, {
            id: 'post-ranking',
            title: 'Hot Post Ranking Algorithm',
            difficulty: 'Hard',
            description: `Implement Reddit's hot-ranking algorithm. Posts are ranked by a score combining upvotes, downvotes, and time.

You are given:
- posts: List of [post_id, upvotes, downvotes, hours_old]

Goal: Calculate score for each post using formula: score = (upvotes - downvotes) / pow((hours_old + 2), 1.5). Return post IDs sorted by score descending. Round scores to 4 decimals for comparison.

Input Format:
- posts: List of lists [id, upvotes, downvotes, hours]

Output Format:
- Return list of post IDs sorted by score descending

Constraints:
- 1 <= posts.length <= 1000
- 0 <= upvotes, downvotes <= 100000
- 0 <= hours_old <= 1000`,
            examples: [
                { input: 'posts = [[1,100,10,2],[2,50,5,1]]', output: '[2,1]' },
                { input: 'posts = [[1,10,0,10],[2,20,0,1]]', output: '[2,1]' }
            ],
            testCases: [
                { input: 'posts = [[1,100,10,2],[2,50,5,1]]', judgeInput: '2\n1 100 10 2\n2 50 5 1', output: '[2,1]' },
                { input: 'posts = [[1,10,0,10],[2,20,0,1]]', judgeInput: '2\n1 10 0 10\n2 20 0 1', output: '[2,1]' },
                { input: 'posts = [[1,1000,100,5],[2,500,50,1],[3,200,20,10]]', judgeInput: '3\n1 1000 100 5\n2 500 50 1\n3 200 20 10', output: '[2,1,3]' },
                { input: 'posts = [[1,50,10,0],[2,50,10,1]]', judgeInput: '2\n1 50 10 0\n2 50 10 1', output: '[1,2]' },
                { input: 'posts = [[5,100,0,1]]', judgeInput: '1\n5 100 0 1', output: '[5]' },
                { input: 'posts = [[1,200,50,3],[2,300,100,2],[3,150,50,5]]', judgeInput: '3\n1 200 50 3\n2 300 100 2\n3 150 50 5', output: '[2,1,3]' },
                { input: 'posts = [[10,500,100,10],[20,400,50,5],[30,300,25,2]]', judgeInput: '3\n10 500 100 10\n20 400 50 5\n30 300 25 2', output: '[30,20,10]' },
                { input: 'posts = [[1,1000,500,1],[2,800,200,1],[3,600,100,1]]', judgeInput: '3\n1 1000 500 1\n2 800 200 1\n3 600 100 1', output: '[2,3,1]' },
                { input: 'posts = [[7,250,50,7],[8,200,40,3],[9,150,30,1]]', judgeInput: '3\n7 250 50 7\n8 200 40 3\n9 150 30 1', output: '[9,8,7]' },
                { input: 'posts = [[1,50,50,5],[2,100,100,10]]', judgeInput: '2\n1 50 50 5\n2 100 100 10', output: '[1,2]' },
                { input: 'posts = [[100,5000,1000,20],[200,3000,500,10],[300,2000,200,5]]', judgeInput: '3\n100 5000 1000 20\n200 3000 500 10\n300 2000 200 5', output: '[300,200,100]' },
                { input: 'posts = [[1,100,20,2],[2,100,20,2],[3,100,20,2]]', judgeInput: '3\n1 100 20 2\n2 100 20 2\n3 100 20 2', output: '[1,2,3]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} posts
 * @return {number[]}
 */
function rankPosts(posts) {
    // Your code here
}`,
                python: `def rank_posts(posts):
    """
    :type posts: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> rankPosts(vector<vector<int>>& posts) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] rankPosts(int[][] posts) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const posts = [];\n    for(let i=1; i<=n; i++) posts.push(lines[i].split(' ').map(Number));\n    console.log(JSON.stringify(rankPosts(posts)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nposts = []\nfor i in range(1, n+1):\n    posts.append(list(map(int, lines[i].split())))\nprint(json.dumps(rank_posts(posts)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> rankPosts(vector<vector<int>>& posts);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> posts(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> posts[i][0] >> posts[i][1] >> posts[i][2] >> posts[i][3];\n    vector<int> res = rankPosts(posts);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] posts = new int[n][4];\n        for(int i=0; i<n; i++) {\n            posts[i][0] = sc.nextInt();\n            posts[i][1] = sc.nextInt();\n            posts[i][2] = sc.nextInt();\n            posts[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        int[] res = sol.rankPosts(posts);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
