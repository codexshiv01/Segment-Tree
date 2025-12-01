export const robloxData = {
    id: 'roblox',
    name: 'Roblox',
    logo: 'https://logo.clearbit.com/roblox.com',
    description: 'Practice real Roblox Online Assessment questions.',
    assessments: [{
        id: 'roblox-oa-1',
        title: 'Roblox OA-1',
        duration: 90,
        problems: [{
            id: 'concurrent-players',
            title: 'Concurrent Player Capacity Manager',
            difficulty: 'Hard',
            description: `Manage game server capacity based on player join/leave events.

You are given:
- events: List of [event_type, player_id, timestamp] where type:1=join, 2=leave

Goal: Process events in timestamp order. Track max concurrent players at any moment. Return the maximum.

Input Format:
- events: List of lists [type, player, time]

Output Format:
- Return an integer (max concurrent players)

Constraints:
- 1 <= events.length <= 10000
- type in {1, 2}
- 1 <= player_id <= 100000
- 1 <= timestamp <= 1000000`,
            examples: [
                { input: 'events = [[1,1,10],[1,2,20],[2,1,30],[1,3,40]]', output: '2' },
                { input: 'events = [[1,1,5],[2,1,10]]', output: '1' }
            ],
            testCases: [
                { input: 'events = [[1,1,10],[1,2,20],[2,1,30],[1,3,40]]', judgeInput: '4\n1 1 10\n1 2 20\n2 1 30\n1 3 40', output: '2' },
                { input: 'events = [[1,1,5],[2,1,10]]', judgeInput: '2\n1 1 5\n 2 1 10', output: '1' },
                { input: 'events = [[1,1,1],[1,2,2],[1,3,3],[2,1,4],[2,2,5],[2,3,6]]', judgeInput: '6\n1 1 1\n1 2 2\n1 3 3\n2 1 4\n2 2 5\n2 3 6', output: '3' },
                { input: 'events = [[1,1,10],[1,2,10],[1,3,20],[2,1,20]]', judgeInput: '4\n1 1 10\n1 2 10\n1 3 20\n2 1 20', output: '3' },
                { input: 'events = [[1,5,100]]', judgeInput: '1\n1 5 100', output: '1' },
                { input: 'events = [[1,10,50],[2,10,60],[1,10,70]]', judgeInput: '3\n1 10 50\n2 10 60\n1 10 70', output: '1' },
                { input: 'events = [[1,1,1],[1,2,1],[1,3,1],[1,4,1]]', judgeInput: '4\n1 1 1\n1 2 1\n1 3 1\n1 4 1', output: '4' },
                { input: 'events = [[1,1,10],[1,2,20],[2,1,25],[2,2,30],[1,3,35]]', judgeInput: '5\n1 1 10\n1 2 20\n2 1 25\n2 2 30\n1 3 35', output: '2' },
                { input: 'events = [[1,7,100],[1,8,150],[1,9,200],[2,7,250]]', judgeInput: '4\n1 7 100\n1 8 150\n1 9 200\n2 7 250', output: '3' },
                { input: 'events = [[1,15,500],[1,16,500],[2,15,600],[1,17,700]]', judgeInput: '4\n1 15 500\n1 16 500\n2 15 600\n1 17 700', output: '2' },
                { input: 'events = [[1,20,1000],[1,21,1000],[1,22,1000],[2,20,1100],[2,21,1100],[2,22,1100]]', judgeInput: '6\n1 20 1000\n1 21 1000\n1 22 1000\n2 20 1100\n2 21 1100\n2 22 1100', output: '3' },
                { input: 'events = [[1,100,5000],[1,101,5000],[1,102,5000],[1,103,5000],[1,104,5000]]', judgeInput: '5\n1 100 5000\n1 101 5000\n1 102 5000\n1 103 5000\n1 104 5000', output: '5' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} events
 * @return {number}
 */
function maxConcurrentPlayers(events) {
    // Your code here
}`,
                python: `def max_concurrent_players(events):
    """
    :type events: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxConcurrentPlayers(vector<vector<int>>& events) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxConcurrentPlayers(int[][] events) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const events = [];\n    for(let i=1; i<=n; i++) events.push(lines[i].split(' ').map(Number));\n    console.log(maxConcurrentPlayers(events));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nevents = []\nfor i in range(1, n+1):\n    events.append(list(map(int, lines[i].split())))\nprint(max_concurrent_players(events))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxConcurrentPlayers(vector<vector<int>>& events);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> events(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> events[i][0] >> events[i][1] >> events[i][2];\n    cout << maxConcurrentPlayers(events) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] events = new int[n][3];\n        for(int i=0; i<n; i++) {\n            events[i][0] = sc.nextInt();\n            events[i][1] = sc.nextInt();\n            events[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.maxConcurrentPlayers(events));\n    }\n}`
            }
        }, {
            id: 'avatar-item-filter',
            title: 'Avatar Item Recommendation Filter',
            difficulty: 'Medium',
            description: `Filter avatar items based on user preferences and compatibility.

You are given:
- items: List of [item_id, category, rarity, price]
- filters: [max_price, required_category, min_rarity]

Goal: Return count of items matching ALL filters: price <= max_price, category == required_category (0 means any), rarity >= min_rarity.

Input Format:
- items: List of lists [id, cat, rarity, price]
- filters: List [maxprice, reqcat, minrarity]

Output Format:
- Return an integer (count of matching items)

Constraints:
- 1 <= items.length <= 1000
- 1 <= category <= 10
- 1 <= rarity <= 5
- 1 <= price <= 10000
- 0 <= required_category <= 10 (0=any)
- 1 <= min_rarity <= 5`,
            examples: [
                { input: 'items = [[1,1,3,100],[2,1,4,200],[3,2,3,150]], filters = [200,1,3]', output: '2' },
                { input: 'items = [[1,1,2,500]], filters = [400,1,2]', output: '0' }
            ],
            testCases: [
                { input: 'items = [[1,1,3,100],[2,1,4,200],[3,2,3,150]], filters = [200,1,3]', judgeInput: '3\n1 1 3 100\n2 1 4 200\n3 2 3 150\n200 1 3', output: '2' },
                { input: 'items = [[1,1,2,500]], filters = [400,1,2]', judgeInput: '1\n1 1 2 500\n400 1 2', output: '0' },
                { input: 'items = [[1,5,5,1000],[2,5,4,800],[3,5,3,600]], filters = [1000,5,4]', judgeInput: '3\n1 5 5 1000\n2 5 4 800\n3 5 3 600\n1000 5 4', output: '2' },
                { input: 'items = [[1,2,1,50],[2,2,2,100],[3,2,3,150]], filters = [200,0,2]', judgeInput: '3\n1 2 1 50\n2 2 2 100\n3 2 3 150\n200 0 2', output: '2' },
                { input: 'items = [[1,3,5,2000]], filters = [1500,3,5]', judgeInput: '1\n1 3 5 2000\n1500 3 5', output: '0' },
                { input: 'items = [[1,1,1,100],[2,1,2,200],[3,1,3,300],[4,1,4,400],[5,1,5,500]], filters = [350,1,3]', judgeInput: '5\n1 1 1 100\n2 1 2 200\n3 1 3 300\n4 1 4 400\n5 1 5 500\n350 1 3', output: '1' },
                { input: 'items = [[1,7,3,250],[2,7,3,300],[3,7,3,350]], filters = [300,7,3]', judgeInput: '3\n1 7 3 250\n2 7 3 300\n3 7 3 350\n300 7 3', output: '2' },
                { input: 'items = [[1,4,2,400],[2,5,2,400]], filters = [500,0,2]', judgeInput: '2\n1 4 2 400\n2 5 2 400\n500 0 2', output: '2' },
                { input: 'items = [[1,8,4,600],[2,8,5,700],[3,8,3,550]], filters = [650,8,4]', judgeInput: '3\n1 8 4 600\n2 8 5 700\n3 8 3 550\n650 8 4', output: '1' },
                { input: 'items = [[1,1,1,100],[2,2,2,200],[3,3,3,300]], filters = [300,0,1]', judgeInput: '3\n1 1 1 100\n2 2 2 200\n3 3 3 300\n300 0 1', output: '3' },
                { input: 'items = [[1,6,5,5000],[2,6,5,4500],[3,6,4,4000]], filters = [4500,6,5]', judgeInput: '3\n1 6 5 5000\n2 6 5 4500\n3 6 4 4000\n4500 6 5', output: '1' },
                { input: 'items = [[1,9,3,800],[2,9,3,850],[3,9,3,900],[4,9,3,950]], filters = [900,9,3]', judgeInput: '4\n1 9 3 800\n2 9 3 850\n3 9 3 900\n4 9 3 950\n900 9 3', output: '3' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} items
 * @param {number[]} filters
 * @return {number}
 */
function countMatchingItems(items, filters) {
    // Your code here
}`,
                python: `def count_matching_items(items, filters):
    """
    :type items: List[List[int]]
    :type filters: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countMatchingItems(vector<vector<int>>& items, vector<int>& filters) {
    // Your code here
}`,
                java: `public class Solution {
    public int countMatchingItems(int[][] items, int[] filters) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const items = [];\n    for(let i=1; i<=n; i++) items.push(lines[i].split(' ').map(Number));\n    const filters = lines[n+1].split(' ').map(Number);\n    console.log(countMatchingItems(items, filters));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nitems = []\nfor i in range(1, n+1):\n    items.append(list(map(int, lines[i].split())))\nfilters = list(map(int, lines[n+1].split()))\nprint(count_matching_items(items, filters))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countMatchingItems(vector<vector<int>>& items, vector<int>& filters);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> items(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> items[i][0] >> items[i][1] >> items[i][2] >> items[i][3];\n    vector<int> filters(3);\n    cin >> filters[0] >> filters[1] >> filters[2];\n    cout << countMatchingItems(items, filters) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] items = new int[n][4];\n        for(int i=0; i<n; i++) {\n            items[i][0] = sc.nextInt();\n            items[i][1] = sc.nextInt();\n            items[i][2] = sc.nextInt();\n            items[i][3] = sc.nextInt();\n        }\n        int[] filters = new int[3];\n        filters[0] = sc.nextInt();\n        filters[1] = sc.nextInt();\n        filters[2] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.countMatchingItems(items, filters));\n    }\n}`
            }
        }]
    }]
};
