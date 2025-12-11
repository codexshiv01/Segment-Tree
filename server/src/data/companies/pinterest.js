export const pinterestData = {
    id: 'pinterest',
    name: 'Pinterest',
    logo: 'https://logo.clearbit.com/pinterest.com',
    description: 'Practice real Pinterest Online Assessment questions.',
    assessments: [{
        id: 'pinterest-oa-1',
        title: 'Pinterest OA-1',
        duration: 90,
        problems: [{
            id: 'image-feed-ranking',
            title: 'Image Feed Ranking',
            difficulty: 'Medium',
            description: `Pinterest ranks images in a user's feed based on relevance scores. Given a list of images and their scores, reorder them to maximize engagement.

You are given:
- images: A list of [image_id, score].
- k: The minimum score threshold for "high quality" images.

Goal: Return a list of image IDs where all high-quality images appear first, sorted by score descending, followed by the rest sorted by score descending.

Input Format:
- images: List of lists [id, score]
- k: Integer

Output Format:
- Return a list of image IDs.

Constraints:
- 1 <= images.length <= 1000
- 0 <= score <= 100`,
            examples: [
                { input: 'images = [[1,80],[2,50],[3,90],[4,40]], k = 60', output: '[3,1,2,4]' },
                { input: 'images = [[1,10],[2,20]], k = 30', output: '[2,1]' }
            ],
            testCases: [
                { input: 'images = [[1,80],[2,50],[3,90],[4,40]], k = 60', judgeInput: '4\n1 80\n2 50\n3 90\n4 40\n60', output: '[3,1,2,4]' },
                { input: 'images = [[1,10],[2,20]], k = 30', judgeInput: '2\n1 10\n2 20\n30', output: '[2,1]' },
                { input: 'images = [[1,100],[2,100]], k = 50', judgeInput: '2\n1 100\n2 100\n50', output: '[1,2]' },
                { input: 'images = [[1,10],[2,20],[3,30]], k = 5', judgeInput: '3\n1 10\n2 20\n3 30\n5', output: '[3,2,1]' },
                { input: 'images = [[1,50],[2,50],[3,50]], k = 60', judgeInput: '3\n1 50\n2 50\n3 50\n60', output: '[1,2,3]' },
                { input: 'images = [[1,90],[2,10],[3,80],[4,20]], k = 50', judgeInput: '4\n1 90\n2 10\n3 80\n4 20\n50', output: '[1,3,4,2]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} images
 * @param {number} k
 * @return {number[]}
 */
function rankImages(images, k) {
    // Your code here
}`,
                python: `def rank_images(images, k):
    """
    :type images: List[List[int]]
    :type k: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> rankImages(vector<vector<int>>& images, int k) {
    // Your code here
}`,
                java: `public class Solution {
    public int[] rankImages(int[][] images, int k) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const images = [];\n    for(let i=1; i<=n; i++) images.push(lines[i].split(' ').map(Number));\n    const k = parseInt(lines[n+1]);\n    console.log(JSON.stringify(rankImages(images, k)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nimages = []\nfor i in range(1, n+1):\n    images.append(list(map(int, lines[i].split())))\nk = int(lines[n+1])\nprint(json.dumps(rank_images(images, k)))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> rankImages(vector<vector<int>>& images, int k);\nint main() {\n    int n, k;\n    cin >> n;\n    vector<vector<int>> images(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> images[i][0] >> images[i][1];\n    cin >> k;\n    vector<int> res = rankImages(images, k);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] images = new int[n][2];\n        for(int i=0; i<n; i++) {\n            images[i][0] = sc.nextInt();\n            images[i][1] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        Solution sol = new Solution();\n        int[] res = sol.rankImages(images, k);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print(res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'pin-board-layout',
            title: 'Pin Board Layout Optimizer',
            difficulty: 'Hard',
            description: `Pinterest needs to arrange pins of varying heights in a multi-column layout to minimize the height difference between columns.

You are given:
- pins: A list of pin heights.
- cols: The number of columns.

Goal: Distribute pins into cols columns such that the maximum column height is minimized. Return the minimum possible maximum column height.

Input Format:
- pins: List of integers
- cols: Integer

Output Format:
- Return an integer.

Constraints:
- 1 <= pins.length <= 50
- 1 <= cols <= 10
- 1 <= height <= 100`,
            examples: [
                { input: 'pins = [10,20,30,40,50], cols = 2', output: '80' },
                { input: 'pins = [10,10,10], cols = 3', output: '10' }
            ],
            testCases: [
                { input: 'pins = [10,20,30,40,50], cols = 2', judgeInput: '5\n10 20 30 40 50\n2', output: '80' },
                { input: 'pins = [10,10,10], cols = 3', judgeInput: '3\n10 10 10\n3', output: '10' },
                { input: 'pins = [100,100], cols = 2', judgeInput: '2\n100 100\n2', output: '100' },
                { input: 'pins = [5,5,5,5,5], cols = 2', judgeInput: '5\n5 5 5 5 5\n2', output: '15' },
                { input: 'pins = [1,2,3,4,5,6,7,8,9], cols = 3', judgeInput: '9\n1 2 3 4 5 6 7 8 9\n3', output: '15' },
                { input: 'pins = [10,20], cols = 1', judgeInput: '2\n10 20\n1', output: '30' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} pins
 * @param {number} cols
 * @return {number}
 */
function minLayoutHeight(pins, cols) {
    // Your code here
}`,
                python: `def min_layout_height(pins, cols):
    """
    :type pins: List[int]
    :type cols: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minLayoutHeight(vector<int>& pins, int cols) {
    // Your code here
}`,
                java: `public class Solution {
    public int minLayoutHeight(int[] pins, int cols) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const pins = lines[1].split(' ').map(Number);\n    const cols = parseInt(lines[2]);\n    console.log(minLayoutHeight(pins, cols));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\npins = list(map(int, lines[1].split()))\ncols = int(lines[2])\nprint(min_layout_height(pins, cols))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minLayoutHeight(vector<int>& pins, int cols);\nint main() {\n    int n, cols;\n    cin >> n;\n    vector<int> pins(n);\n    for(int i=0; i<n; ++i) cin >> pins[i];\n    cin >> cols;\n    cout << minLayoutHeight(pins, cols) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] pins = new int[n];\n        for(int i=0; i<n; i++) pins[i] = sc.nextInt();\n        int cols = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minLayoutHeight(pins, cols));\n    }\n}`
            }
        }]
    }]
};
