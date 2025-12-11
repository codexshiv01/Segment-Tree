export const lyftData = {
    id: 'lyft',
    name: 'Lyft',
    logo: 'https://logo.clearbit.com/lyft.com',
    description: 'Practice real Lyft Online Assessment questions.',
    assessments: [{
        id: 'lyft-oa-1',
        title: 'Lyft OA-1',
        duration: 90,
        problems: [{
            id: 'driver-match',
            title: 'Nearest Driver Match',
            difficulty: 'Medium',
            description: `Find the nearest available driver for a rider.

You are given:
- rider: [x, y] coordinates
- drivers: List of [driver_id, x, y]

Goal: Find the driver with the minimum Manhattan distance to the rider. Distance = |x1-x2| + |y1-y2|. If ties, choose the one with smaller driver_id. Return the driver_id.

Input Format:
- rider: List [x, y]
- drivers: List of lists [id, x, y]

Output Format:
- Return an integer (driver_id)

Constraints:
- 1 <= drivers.length <= 1000
- 0 <= coordinates <= 10000`,
            examples: [
                { input: 'rider = [0,0], drivers = [[1,1,1],[2,5,5]]', output: '1' },
                { input: 'rider = [10,10], drivers = [[1,20,20],[2,12,12]]', output: '2' }
            ],
            testCases: [
                { input: 'rider = [0,0], drivers = [[1,1,1],[2,5,5]]', judgeInput: '0 0\n2\n1 1 1\n2 5 5', output: '1' },
                { input: 'rider = [10,10], drivers = [[1,20,20],[2,12,12]]', judgeInput: '10 10\n2\n1 20 20\n2 12 12', output: '2' },
                { input: 'rider = [5,5], drivers = [[1,5,6],[2,5,4]]', judgeInput: '5 5\n2\n1 5 6\n2 5 4', output: '1' },
                { input: 'rider = [0,0], drivers = [[1,10,10],[2,5,5],[3,2,2]]', judgeInput: '0 0\n3\n1 10 10\n2 5 5\n3 2 2', output: '3' },
                { input: 'rider = [100,100], drivers = [[1,0,0]]', judgeInput: '100 100\n1\n1 0 0', output: '1' },
                { input: 'rider = [50,50], drivers = [[1,40,40],[2,60,60],[3,50,50]]', judgeInput: '50 50\n3\n1 40 40\n2 60 60\n3 50 50', output: '3' },
                { input: 'rider = [10,10], drivers = [[1,11,11],[2,9,9],[3,11,9],[4,9,11]]', judgeInput: '10 10\n4\n1 11 11\n2 9 9\n3 11 9\n4 9 11', output: '1' },
                { input: 'rider = [0,0], drivers = [[5,3,4],[2,4,3]]', judgeInput: '0 0\n2\n5 3 4\n2 4 3', output: '2' },
                { input: 'rider = [20,20], drivers = [[1,25,25],[2,15,15],[3,20,25]]', judgeInput: '20 20\n3\n1 25 25\n2 15 15\n3 20 25', output: '3' },
                { input: 'rider = [1,1], drivers = [[1,100,100],[2,2,2]]', judgeInput: '1 1\n2\n1 100 100\n2 2 2', output: '2' },
                { input: 'rider = [30,30], drivers = [[1,30,31],[2,30,29],[3,31,30],[4,29,30]]', judgeInput: '30 30\n4\n1 30 31\n2 30 29\n3 31 30\n4 29 30', output: '1' },
                { input: 'rider = [5,5], drivers = [[10,10,10],[20,0,0],[30,5,10]]', judgeInput: '5 5\n3\n10 10 10\n20 0 0\n30 5 10', output: '30' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} rider
 * @param {number[][]} drivers
 * @return {number}
 */
function nearestDriver(rider, drivers) {
    // Your code here
}`,
                python: `def nearest_driver(rider, drivers):
    """
    :type rider: List[int]
    :type drivers: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int nearestDriver(vector<int>& rider, vector<vector<int>>& drivers) {
    // Your code here
}`,
                java: `public class Solution {
    public int nearestDriver(int[] rider, int[][] drivers) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const rider = lines[0].split(' ').map(Number);\n    const n = parseInt(lines[1]);\n    const drivers = [];\n    for(let i=2; i<n+2; i++) drivers.push(lines[i].split(' ').map(Number));\n    console.log(nearestDriver(rider, drivers));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nrider = list(map(int, lines[0].split()))\nn = int(lines[1])\ndrivers = []\nfor i in range(2, n+2):\n    drivers.append(list(map(int, lines[i].split())))\nprint(nearest_driver(rider, drivers))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\nint nearestDriver(vector<int>& rider, vector<vector<int>>& drivers);\nint main() {\n    vector<int> rider(2);\n    cin >> rider[0] >> rider[1];\n    int n;\n    cin >> n;\n    vector<vector<int>> drivers(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> drivers[i][0] >> drivers[i][1] >> drivers[i][2];\n    cout << nearestDriver(rider, drivers) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] rider = new int[2];\n        rider[0] = sc.nextInt();\n        rider[1] = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] drivers = new int[n][3];\n        for(int i=0; i<n; i++) {\n            drivers[i][0] = sc.nextInt();\n            drivers[i][1] = sc.nextInt();\n            drivers[i][2] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.nearestDriver(rider, drivers));\n    }\n}`
            }
        }, {
            id: 'shared-ride-detour',
            title: 'Shared Ride Detour Calculator',
            difficulty: 'Hard',
            description: `Calculate the detour for a shared ride.

You are given:
- start: [x, y]
- end: [x, y]
- pickup: [x, y]
- dropoff: [x, y]

Goal: Original path is start -> end. Shared path is start -> pickup -> dropoff -> end.
Detour = (Shared Distance) - (Original Distance).
Distance is Manhattan: |x1-x2| + |y1-y2|.
Return the detour distance.

Input Format:
- start, end, pickup, dropoff: Lists [x, y]

Output Format:
- Return an integer (detour distance)

Constraints:
- 0 <= coordinates <= 1000`,
            examples: [
                { input: 'start=[0,0], end=[10,10], pickup=[2,2], dropoff=[5,5]', output: '0' },
                { input: 'start=[0,0], end=[10,0], pickup=[0,5], dropoff=[10,5]', output: '10' }
            ],
            testCases: [
                { input: 'start=[0,0], end=[10,10], pickup=[2,2], dropoff=[5,5]', judgeInput: '0 0\n10 10\n2 2\n5 5', output: '0' },
                { input: 'start=[0,0], end=[10,0], pickup=[0,5], dropoff=[10,5]', judgeInput: '0 0\n10 0\n0 5\n10 5', output: '10' },
                { input: 'start=[0,0], end=[0,10], pickup=[5,5], dropoff=[5,8]', judgeInput: '0 0\n0 10\n5 5\n5 8', output: '10' },
                { input: 'start=[0,0], end=[10,10], pickup=[12,12], dropoff=[15,15]', judgeInput: '0 0\n10 10\n12 12\n15 15', output: '10' },
                { input: 'start=[10,10], end=[0,0], pickup=[5,5], dropoff=[2,2]', judgeInput: '10 10\n0 0\n5 5\n2 2', output: '0' },
                { input: 'start=[0,0], end=[20,0], pickup=[5,5], dropoff=[15,5]', judgeInput: '0 0\n20 0\n5 5\n15 5', output: '10' },
                { input: 'start=[0,0], end=[10,10], pickup=[10,0], dropoff=[0,10]', judgeInput: '0 0\n10 10\n10 0\n0 10', output: '20' },
                { input: 'start=[5,5], end=[15,15], pickup=[10,10], dropoff=[12,12]', judgeInput: '5 5\n15 15\n10 10\n12 12', output: '0' },
                { input: 'start=[0,0], end=[0,0], pickup=[5,5], dropoff=[5,5]', judgeInput: '0 0\n0 0\n5 5\n5 5', output: '20' },
                { input: 'start=[0,0], end=[10,0], pickup=[5,0], dropoff=[8,0]', judgeInput: '0 0\n10 0\n5 0\n8 0', output: '0' },
                { input: 'start=[0,0], end=[10,10], pickup=[20,20], dropoff=[30,30]', judgeInput: '0 0\n10 10\n20 20\n30 30', output: '40' },
                { input: 'start=[10,10], end=[20,20], pickup=[0,0], dropoff=[5,5]', judgeInput: '10 10\n20 20\n0 0\n5 5', output: '40' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} start
 * @param {number[]} end
 * @param {number[]} pickup
 * @param {number[]} dropoff
 * @return {number}
 */
function calculateDetour(start, end, pickup, dropoff) {
    // Your code here
}`,
                python: `def calculate_detour(start, end, pickup, dropoff):
    """
    :type start: List[int]
    :type end: List[int]
    :type pickup: List[int]
    :type dropoff: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int calculateDetour(vector<int>& start, vector<int>& end, vector<int>& pickup, vector<int>& dropoff) {
    // Your code here
}`,
                java: `public class Solution {
    public int calculateDetour(int[] start, int[] end, int[] pickup, int[] dropoff) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const start = lines[0].split(' ').map(Number);\n    const end = lines[1].split(' ').map(Number);\n    const pickup = lines[2].split(' ').map(Number);\n    const dropoff = lines[3].split(' ').map(Number);\n    console.log(calculateDetour(start, end, pickup, dropoff));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nstart = list(map(int, lines[0].split()))\nend = list(map(int, lines[1].split()))\npickup = list(map(int, lines[2].split()))\ndropoff = list(map(int, lines[3].split()))\nprint(calculate_detour(start, end, pickup, dropoff))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\nint calculateDetour(vector<int>& start, vector<int>& end, vector<int>& pickup, vector<int>& dropoff);\nint main() {\n    vector<int> start(2), end(2), pickup(2), dropoff(2);\n    cin >> start[0] >> start[1];\n    cin >> end[0] >> end[1];\n    cin >> pickup[0] >> pickup[1];\n    cin >> dropoff[0] >> dropoff[1];\n    cout << calculateDetour(start, end, pickup, dropoff) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] start = {sc.nextInt(), sc.nextInt()};\n        int[] end = {sc.nextInt(), sc.nextInt()};\n        int[] pickup = {sc.nextInt(), sc.nextInt()};\n        int[] dropoff = {sc.nextInt(), sc.nextInt()};\n        Solution sol = new Solution();\n        System.out.println(sol.calculateDetour(start, end, pickup, dropoff));\n    }\n}`
            }
        }]
    }]
};
