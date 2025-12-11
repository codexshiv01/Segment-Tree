export const unityData = {
    id: 'unity',
    name: 'Unity',
    logo: 'https://logo.clearbit.com/unity.com',
    description: 'Practice real Unity Online Assessment questions.',
    assessments: [{
        id: 'unity-oa-1',
        title: 'Unity OA-1',
        duration: 90,
        problems: [{
            id: 'asset-bundling',
            title: 'Asset Bundle Optimizer',
            difficulty: 'Hard',
            description: `Optimize asset bundles for game loading performance.

You are given:
- assets: List of [asset_id, size_mb, load_priority]
- bundle_size: Maximum bundle size in MB
- min_priority: Minimum priority threshold

Goal: Create bundles containing assets with priority >= min_priority. Each bundle has max size of bundle_size. Use greedy approach: fill bundles with highest priority assets first. Return count of bundles needed.

Input Format:
- assets: List of lists [id, size, priority]
- bundle_size: Integer
- min_priority: Integer

Output Format:
- Return an integer (number of bundles)

Constraints:
- 1 <= assets.length <= 1000
- 1 <= size_mb <= 1000
- 1 <= load_priority <= 10
- 1 <= bundle_size <= 10000
- 1 <= min_priority <= 10`,
            examples: [
                { input: 'assets = [[1,50,5],[2,60,8],[3,40,3]], bundle_size = 100, min_priority = 5', output: '1' },
                { input: 'assets = [[1,100,6],[2,100,7]], bundle_size = 100, min_priority = 5', output: '2' }
            ],
            testCases: [
                { input: 'assets = [[1,50,5],[2,60,8],[3,40,3]], bundle_size = 100, min_priority = 5', judgeInput: '3\n1 50 5\n2 60 8\n3 40 3\n100\n5', output: '1' },
                { input: 'assets = [[1,100,6],[2,100,7]], bundle_size = 100, min_priority = 5', judgeInput: '2\n1 100 6\n2 100 7\n100\n5', output: '2' },
                { input: 'assets = [[1,30,10],[2,40,9],[3,50,8]], bundle_size = 100, min_priority = 8', judgeInput: '3\n1 30 10\n2 40 9\n3 50 8\n100\n8', output: '2' },
                { input: 'assets = [[1,200,7]], bundle_size = 500, min_priority = 5', judgeInput: '1\n1 200 7\n500\n5', output: '1' },
                { input: 'assets = [[1,25,6],[2,25,6],[3,25,6],[4,25,6]], bundle_size = 50, min_priority = 6', judgeInput: '4\n1 25 6\n2 25 6\n3 25 6\n4 25 6\n50\n6', output: '2' },
                { input: 'assets = [[1,150,5],[2,150,4]], bundle_size = 200, min_priority = 5', judgeInput: '2\n1 150 5\n2 150 4\n200\n5', output: '1' },
                { input: 'assets = [[1,80,9],[2,80,8],[3,80,7]], bundle_size = 150, min_priority = 7', judgeInput: '3\n1 80 9\n2 80 8\n3 80 7\n150\n7', output: '2' },
                { input: 'assets = [[1,50,3],[2,50,2]], bundle_size = 100, min_priority = 5', judgeInput: '2\n1 50 3\n2 50 2\n100\n5', output: '0' },
                { input: 'assets = [[1,60,10],[2,70,10],[3,80,10]], bundle_size = 100, min_priority = 10', judgeInput: '3\n1 60 10\n2 70 10\n3 80 10\n100\n10', output: '3' },
                { input: 'assets = [[1,40,8],[2,50,8],[3,30,8]], bundle_size = 120, min_priority = 8', judgeInput: '3\n1 40 8\n2 50 8\n3 30 8\n120\n8', output: '1' },
                { input: 'assets = [[1,100,6],[2,100,6],[3,100,6],[4,100,6]], bundle_size = 250, min_priority = 6', judgeInput: '4\n1 100 6\n2 100 6\n3 100 6\n4 100 6\n250\n6', output: '2' },
                { input: 'assets = [[1,75,5],[2,75,5],[3,75,5]], bundle_size = 200, min_priority = 5', judgeInput: '3\n1 75 5\n2 75 5\n3 75 5\n200\n5', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} assets
 * @param {number} bundle_size
 * @param {number} min_priority
 * @return {number}
 */
function minBundle(assets, bundle_size, min_priority) {
    // Your code here
}`,
                python: `def min_bundles(assets, bundle_size, min_priority):
    """
    :type assets: List[List[int]]
    :type bundle_size: int
    :type min_priority: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minBundles(vector<vector<int>>& assets, int bundle_size, int min_priority) {
    // Your code here
}`,
                java: `public class Solution {
    public int minBundles(int[][] assets, int bundle_size, int min_priority) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const assets = [];\n    for(let i=1; i<=n; i++) assets.push(lines[i].split(' ').map(Number));\n    const bundle_size = parseInt(lines[n+1]);\n    const min_priority = parseInt(lines[n+2]);\n    console.log(minBundles(assets, bundle_size, min_priority));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nassets = []\nfor i in range(1, n+1):\n    assets.append(list(map(int, lines[i].split())))\nbundle_size = int(lines[n+1])\nmin_priority = int(lines[n+2])\nprint(min_bundles(assets, bundle_size, min_priority))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minBundles(vector<vector<int>>& assets, int bundle_size, int min_priority);\nint main() {\n    int n, bundle_size, min_priority;\n    cin >> n;\n    vector<vector<int>> assets(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> assets[i][0] >> assets[i][1] >> assets[i][2];\n    cin >> bundle_size >> min_priority;\n    cout << minBundles(assets, bundle_size, min_priority) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] assets = new int[n][3];\n        for(int i=0; i<n; i++) {\n            assets[i][0] = sc.nextInt();\n            assets[i][1] = sc.nextInt();\n            assets[i][2] = sc.nextInt();\n        }\n        int bundle_size = sc.nextInt();\n        int min_priority = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minBundles(assets, bundle_size, min_priority));\n    }\n}`
            }
        }, {
            id: 'frame-rate-optimizer',
            title: 'Frame Rate Stability Optimizer',
            difficulty: 'Medium',
            description: `Analyze frame rate data and calculate performance metrics.

You are given:
- frame_times: List of frame render times in milliseconds

Goal: Calculate percentage of frames meeting 60 FPS target (frame_time <= 16.67ms). Return percentage rounded to 2 decimals.

Input Format:
- frame_times: List of floats

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= frame_times.length <= 10000
- 1.0 <= frame_time <= 100.0`,
            examples: [
                { input: 'frame_times = [15.0,16.0,17.0,18.0]', output: '50.00' },
                { input: 'frame_times = [10.0,12.0,14.0]', output: '100.00' }
            ],
            testCases: [
                { input: 'frame_times = [15.0,16.0,17.0,18.0]', judgeInput: '4\n15.0 16.0 17.0 18.0', output: '50.00' },
                { input: 'frame_times = [10.0,12.0,14.0]', judgeInput: '3\n10.0 12.0 14.0', output: '100.00' },
                { input: 'frame_times = [20.0,25.0,30.0]', judgeInput: '3\n20.0 25.0 30.0', output: '0.00' },
                { input: 'frame_times = [16.67]', judgeInput: '1\n16.67', output: '100.00' },
                { input: 'frame_times = [16.68]', judgeInput: '1\n16.68', output: '0.00' },
                { input: 'frame_times = [10.0,15.0,16.67,17.0,20.0]', judgeInput: '5\n10.0 15.0 16.67 17.0 20.0', output: '60.00' },
                { input: 'frame_times = [5.0,8.0,10.0,12.0,14.0,16.0]', judgeInput: '6\n5.0 8.0 10.0 12.0 14.0 16.0', output: '100.00' },
                { input: 'frame_times = [16.5,16.6,16.7,16.8,16.9,17.0]', judgeInput: '6\n16.5 16.6 16.7 16.8 16.9 17.0', output: '50.00' },
                { input: 'frame_times = [30.0,40.0,50.0,60.0]', judgeInput: '4\n30.0 40.0 50.0 60.0', output: '0.00' },
                { input: 'frame_times = [11.11,12.22,13.33,14.44,15.55,16.66]', judgeInput: '6\n11.11 12.22 13.33 14.44 15.55 16.66', output: '100.00' },
                { input: 'frame_times = [10.0,16.67,20.0,16.67,30.0]', judgeInput: '5\n10.0 16.67 20.0 16.67 30.0', output: '60.00' },
                { input: 'frame_times = [16.0,16.0,16.0,17.0,17.0,17.0,18.0,18.0]', judgeInput: '8\n16.0 16.0 16.0 17.0 17.0 17.0 18.0 18.0', output: '37.50' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} frame_times
 * @return {number}
 */
function fpsPercentage(frame_times) {
    // Your code here
}`,
                python: `def fps_percentage(frame_times):
    """
    :type frame_times: List[float]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double fpsPercentage(vector<double>& frame_times) {
    // Your code here
}`,
                java: `public class Solution {
    public double fpsPercentage(double[] frame_times) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const frame_times = lines[1].split(' ').map(Number);\n    console.log(fpsPercentage(frame_times).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nframe_times = list(map(float, lines[1].split()))\nprint(f'{fps_percentage(frame_times):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble fpsPercentage(vector<double>& frame_times);\nint main() {\n    int n;\n    cin >> n;\n    vector<double> frame_times(n);\n    for(int i=0; i<n; ++i) cin >> frame_times[i];\n    cout << fixed << setprecision(2) << fpsPercentage(frame_times) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[] frame_times = new double[n];\n        for(int i=0; i<n; i++) frame_times[i] = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.fpsPercentage(frame_times));\n    }\n}`
            }
        }]
    }]
};
