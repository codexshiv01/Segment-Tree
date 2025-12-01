export const teslaData = {
    id: 'tesla',
    name: 'Tesla',
    logo: 'https://logo.clearbit.com/tesla.com',
    description: 'Practice real Tesla Online Assessment questions.',
    assessments: [{
        id: 'tesla-oa-1',
        title: 'Tesla OA-1',
        duration: 90,
        problems: [{
            id: 'battery-optimizer',
            title: 'Battery Pack Range Optimizer',
            difficulty: 'Hard',
            description: `Optimize battery pack configuration for maximum range given constraints.

You are given:
- cells: List of [cell_id, capacity_kwh, weight_kg]
- max_weight: Maximum weight limit for battery pack
- target_voltage: Required voltage (each cell = 1 unit, need exact count)

Goal: Select exactly target_voltage cells with total weight <= max_weight to maximize total capacity. Return maximum achievable capacity rounded to 2 decimals, or -1 if impossible.

Input Format:
- cells: List of lists [id, capacity, weight]
- max_weight: Float
- target_voltage: Integer

Output Format:
- Return a float rounded to 2 decimal places, or -1

Constraints:
- 1 <= cells.length <= 100
- 1.0 <= capacity_kwh <= 10.0
- 1.0 <= weight_kg <= 50.0
- 1 <= max_weight <= 5000
- 1 <= target_voltage <= cells.length`,
            examples: [
                { input: 'cells = [[1,5.0,10.0],[2,4.0,8.0],[3,6.0,12.0]], max_weight = 30.0, target_voltage = 2', output: '11.00' },
                { input: 'cells = [[1,3.0,20.0],[2,3.0,20.0]], max_weight = 30.0, target_voltage = 2', output: '6.00' }
            ],
            testCases: [
                { input: 'cells = [[1,5.0,10.0],[2,4.0,8.0],[3,6.0,12.0]], max_weight = 30.0, target_voltage = 2', judgeInput: '3\n1 5.0 10.0\n2 4.0 8.0\n3 6.0 12.0\n30.0\n2', output: '11.00' },
                { input: 'cells = [[1,3.0,20.0],[2,3.0,20.0]], max_weight = 30.0, target_voltage = 2', judgeInput: '2\n1 3.0 20.0\n2 3.0 20.0\n30.0\n2', output: '6.00' },
                { input: 'cells = [[1,8.0,25.0],[2,7.0,20.0],[3,9.0,30.0]], max_weight = 50.0, target_voltage = 2', judgeInput: '3\n1 8.0 25.0\n2 7.0 20.0\n3 9.0 30.0\n50.0\n2', output: '17.00' },
                { input: 'cells = [[1,5.0,15.0],[2,5.0,15.0],[3,5.0,15.0]], max_weight = 40.0, target_voltage = 3', judgeInput: '3\n1 5.0 15.0\n2 5.0 15.0\n3 5.0 15.0\n40.0\n3', output: '-1' },
                { input: 'cells = [[1,10.0,10.0]], max_weight = 15.0, target_voltage = 1', judgeInput: '1\n1 10.0 10.0\n15.0\n1', output: '10.00' },
                { input: 'cells = [[1,4.0,12.0],[2,3.0,10.0],[3,5.0,11.0],[4,6.0,13.0]], max_weight = 35.0, target_voltage = 3', judgeInput: '4\n1 4.0 12.0\n2 3.0 10.0\n3 5.0 11.0\n4 6.0 13.0\n35.0\n3', output: '15.00' },
                { input: 'cells = [[1,7.0,18.0],[2,8.0,22.0]], max_weight = 40.0, target_voltage = 2', judgeInput: '2\n1 7.0 18.0\n2 8.0 22.0\n40.0\n2', output: '15.00' },
                { input: 'cells = [[1,2.5,8.0],[2,2.5,8.0],[3,2.5,8.0],[4,2.5,8.0]], max_weight = 25.0, target_voltage = 3', judgeInput: '4\n1 2.5 8.0\n2 2.5 8.0\n3 2.5 8.0\n4 2.5 8.0\n25.0\n3', output: '7.50' },
                { input: 'cells = [[1,9.0,28.0],[2,8.5,26.0],[3,9.5,30.0]], max_weight = 55.0, target_voltage = 2', judgeInput: '3\n1 9.0 28.0\n2 8.5 26.0\n3 9.5 30.0\n55.0\n2', output: '18.50' },
                { input: 'cells = [[1,6.0,14.0],[2,6.0,14.0],[3,6.0,14.0],[4,6.0,14.0]], max_weight = 42.0, target_voltage = 3', judgeInput: '4\n1 6.0 14.0\n2 6.0 14.0\n3 6.0 14.0\n4 6.0 14.0\n42.0\n3', output: '18.00' },
                { input: 'cells = [[1,4.5,16.0],[2,5.5,18.0],[3,3.5,14.0]], max_weight = 45.0, target_voltage = 2', judgeInput: '3\n1 4.5 16.0\n2 5.5 18.0\n3 3.5 14.0\n45.0\n2', output: '10.00' },
                { input: 'cells = [[1,7.5,20.0],[2,7.5,20.0],[3,7.5,20.0]], max_weight = 50.0, target_voltage = 3', judgeInput: '3\n1 7.5 20.0\n2 7.5 20.0\n3 7.5 20.0\n50.0\n3', output: '-1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} cells
 * @param {number} max_weight
 * @param {number} target_voltage
 * @return {number}
 */
function maxCapacity(cells, max_weight, target_voltage) {
    // Your code here
}`,
                python: `def max_capacity(cells, max_weight, target_voltage):
    """
    :type cells: List[List[float]]
    :type max_weight: float
    :type target_voltage: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double maxCapacity(vector<vector<double>>& cells, double max_weight, int target_voltage) {
    // Your code here
}`,
                java: `public class Solution {
    public double maxCapacity(double[][] cells, double max_weight, int target_voltage) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const cells = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        cells.push([parseInt(parts[0]), parseFloat(parts[1]), parseFloat(parts[2])]);\n    }\n    const max_weight = parseFloat(lines[n+1]);\n    const target_voltage = parseInt(lines[n+2]);\n    const result = maxCapacity(cells, max_weight, target_voltage);\n    console.log(result === -1 ? '-1' : result.toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncells = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    cells.append([int(parts[0]), float(parts[1]), float(parts[2])])\nmax_weight = float(lines[n+1])\ntarget_voltage = int(lines[n+2])\nresult = max_capacity(cells, max_weight, target_voltage)\nif result == -1:\n    print('-1')\nelse:\n    print(f'{result:.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble maxCapacity(vector<vector<double>>& cells, double max_weight, int target_voltage);\nint main() {\n    int n, target_voltage;\n    double max_weight;\n    cin >> n;\n    vector<vector<double>> cells(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> cells[i][0] >> cells[i][1] >> cells[i][2];\n    cin >> max_weight >> target_voltage;\n    double result = maxCapacity(cells, max_weight, target_voltage);\n    if(result == -1) cout << "-1" << endl;\n    else cout << fixed << setprecision(2) << result << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] cells = new double[n][3];\n        for(int i=0; i<n; i++) {\n            cells[i][0] = sc.nextDouble();\n            cells[i][1] = sc.nextDouble();\n            cells[i][2] = sc.nextDouble();\n        }\n        double max_weight = sc.nextDouble();\n        int target_voltage = sc.nextInt();\n        Solution sol = new Solution();\n        double result = sol.maxCapacity(cells, max_weight, target_voltage);\n        if(result == -1) System.out.println("-1");\n        else System.out.printf("%.2f\\n", result);\n    }\n}`
            }
        }, {
            id: 'autopilot-routing',
            title: 'Autopilot Route Optimizer',
            difficulty: 'Medium',
            description: `Calculate optimal route distance considering charging stops.

You are given:
- waypoints: List of [waypoint_id, distance_from_prev_km]
- battery_range: Maximum range on full charge (km)
- charging_stations: List of waypoint IDs where charging is available

Goal: Check if journey is possible with given battery range. Start with full battery. Can recharge at any charging station to full. Return 1 if possible, 0 otherwise.

Input Format:
- waypoints: List of lists [id, distance]
- battery_range: Integer
- charging_stations: List of integers

Output Format:
- Return 0 or 1

Constraints:
- 1 <= waypoints.length <= 100
- 0 <= distance_from_prev_km <= 500
- 1 <= battery_range <= 1000
- 0 <= charging_stations.length <= waypoints.length`,
            examples: [
                { input: 'waypoints = [[1,100],[2,200],[3,150]], battery_range = 250, charging_stations = [2]', output: '1' },
                { input: 'waypoints = [[1,300],[2,300]], battery_range = 250, charging_stations = []', output: '0' }
            ],
            testCases: [
                { input: 'waypoints = [[1,100],[2,200],[3,150]], battery_range = 250, charging_stations = [2]', judgeInput: '3\n1 100\n2 200\n3 150\n250\n1\n2', output: '1' },
                { input: 'waypoints = [[1,300],[2,300]], battery_range = 250, charging_stations = []', judgeInput: '2\n1 300\n2 300\n250\n0', output: '0' },
                { input: 'waypoints = [[1,100],[2,100],[3,100]], battery_range = 300, charging_stations = []', judgeInput: '3\n1 100\n2 100\n3 100\n300\n0', output: '1' },
                { input: 'waypoints = [[1,150],[2,150],[3,150]], battery_range = 200, charging_stations = [1,2]', judgeInput: '3\n1 150\n2 150\n3 150\n200\n2\n1 2', output: '1' },
                { input: 'waypoints = [[1,500]], battery_range = 400, charging_stations = []', judgeInput: '1\n1 500\n400\n0', output: '0' },
                { input: 'waypoints = [[1,200],[2,200],[3,200],[4,200]], battery_range = 500, charging_stations = [2]', judgeInput: '4\n1 200\n2 200\n3 200\n4 200\n500\n1\n2', output: '1' },
                { input: 'waypoints = [[1,250],[2,250]], battery_range = 300, charging_stations = [1]', judgeInput: '2\n1 250\n2 250\n300\n1\n1', output: '1' },
                { input: 'waypoints = [[1,100],[2,100],[3,100],[4,100],[5,100]], battery_range = 250, charging_stations = [2,4]', judgeInput: '5\n1 100\n2 100\n3 100\n4 100\n5 100\n250\n2\n2 4', output: '1' },
                { input: 'waypoints = [[1,350],[2,350]], battery_range = 300, charging_stations = [1]', judgeInput: '2\n1 350\n2 350\n300\n1\n1', output: '0' },
                { input: 'waypoints = [[1,50],[2,50],[3,50]], battery_range = 150, charging_stations = []', judgeInput: '3\n1 50\n2 50\n3 50\n150\n0', output: '1' },
                { input: 'waypoints = [[1,180],[2,180],[3,180]], battery_range = 400, charging_stations = [2]', judgeInput: '3\n1 180\n2 180\n3 180\n400\n1\n2', output: '1' },
                { input: 'waypoints = [[1,400],[2,100]], battery_range = 450, charging_stations = [1]', judgeInput: '2\n1 400\n2 100\n450\n1\n1', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} waypoints
 * @param {number} battery_range
 * @param {number[]} charging_stations
 * @return {number}
 */
function canCompleteJourney(waypoints, battery_range, charging_stations) {
    // Your code here
}`,
                python: `def can_complete_journey(waypoints, battery_range, charging_stations):
    """
    :type waypoints: List[List[int]]
    :type battery_range: int
    :type charging_stations: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int canCompleteJourney(vector<vector<int>>& waypoints, int battery_range, vector<int>& charging_stations) {
    // Your code here
}`,
                java: `public class Solution {
    public int canCompleteJourney(int[][] waypoints, int battery_range, int[] charging_stations) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const waypoints = [];\n    for(let i=1; i<=n; i++) waypoints.push(lines[i].split(' ').map(Number));\n    const battery_range = parseInt(lines[n+1]);\n    const m = parseInt(lines[n+2]);\n    const charging_stations = m > 0 ? lines[n+3].split(' ').map(Number) : [];\n    console.log(canCompleteJourney(waypoints, battery_range, charging_stations));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nwaypoints = []\nfor i in range(1, n+1):\n    waypoints.append(list(map(int, lines[i].split())))\nbattery_range = int(lines[n+1])\nm = int(lines[n+2])\ncharging_stations = list(map(int, lines[n+3].split())) if m > 0 else []\nprint(can_complete_journey(waypoints, battery_range, charging_stations))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint canCompleteJourney(vector<vector<int>>& waypoints, int battery_range, vector<int>& charging_stations);\nint main() {\n    int n, battery_range, m;\n    cin >> n;\n    vector<vector<int>> waypoints(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> waypoints[i][0] >> waypoints[i][1];\n    cin >> battery_range >> m;\n    vector<int> charging_stations(m);\n    for(int i=0; i<m; ++i) cin >> charging_stations[i];\n    cout << canCompleteJourney(waypoints, battery_range, charging_stations) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] waypoints = new int[n][2];\n        for(int i=0; i<n; i++) {\n            waypoints[i][0] = sc.nextInt();\n            waypoints[i][1] = sc.nextInt();\n        }\n        int battery_range = sc.nextInt();\n        int m = sc.nextInt();\n        int[] charging_stations = new int[m];\n        for(int i=0; i<m; i++) charging_stations[i] = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.canCompleteJourney(waypoints, battery_range, charging_stations));\n    }\n}`
            }
        }]
    }]
};
