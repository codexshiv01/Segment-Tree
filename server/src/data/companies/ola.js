export const olaData = {
    id: 'ola',
    name: 'Ola',
    logo: 'https://logo.clearbit.com/olacabs.com',
    description: 'Practice real Ola Online Assessment questions.',
    assessments: [{
        id: 'ola-oa-1',
        title: 'Ola OA-1',
        duration: 90,
        problems: [{
            id: 'ev-charging',
            title: 'EV Charging Station Placement',
            difficulty: 'Hard',
            description: `Optimize EV charging station locations.

You are given:
- cities: List of [city_id, location_x] (on a highway line)
- range: Max range of EV

Goal: Find the minimum number of charging stations needed such that an EV can travel from the first city (min x) to the last city (max x), stopping at stations. Assume stations can be placed at any city location.
Wait, simpler version:
You have a list of station locations. Can you reach end?
Or:
"Minimum stations to stop at to reach target".
Let's do:
Input: stations = [x1, x2, ...], target. Max range 'K'.
Start at 0.
Return min stops.

Input Format:
- stations: List of integers (sorted)
- target: Integer
- range: Integer

Output Format:
- Return an integer (min stops). If unreachable, return -1.

Constraints:
- 1 <= stations.length <= 1000
- 1 <= target <= 10000`,
            examples: [
                { input: 'stations = [10, 20, 30], target = 40, range = 15', output: '3' },
                { input: 'stations = [10, 20, 30], target = 40, range = 5', output: '-1' }
            ],
            testCases: [
                { input: 'stations = [10, 20, 30], target = 40, range = 15', judgeInput: '3\n10 20 30\n40\n15', output: '3' },
                { input: 'stations = [10, 20, 30], target = 40, range = 5', judgeInput: '3\n10 20 30\n40\n5', output: '-1' },
                { input: 'stations = [10, 20, 30, 40, 50], target = 60, range = 20', judgeInput: '5\n10 20 30 40 50\n60\n20', output: '3' },
                { input: 'stations = [10, 20, 30], target = 35, range = 35', judgeInput: '3\n10 20 30\n35\n35', output: '0' },
                { input: 'stations = [5, 10, 15, 20], target = 25, range = 10', judgeInput: '4\n5 10 15 20\n25\n10', output: '3' },
                { input: 'stations = [10, 20, 30], target = 40, range = 25', judgeInput: '3\n10 20 30\n40\n25', output: '2' },
                { input: 'stations = [10, 30, 50], target = 60, range = 20', judgeInput: '3\n10 30 50\n60\n20', output: '-1' },
                { input: 'stations = [25, 50, 75], target = 100, range = 25', judgeInput: '3\n25 50 75\n100\n25', output: '4' },
                { input: 'stations = [10, 20, 30, 40], target = 50, range = 10', judgeInput: '4\n10 20 30 40\n50\n10', output: '5' },
                { input: 'stations = [100], target = 200, range = 150', judgeInput: '1\n100\n200\n150', output: '1' },
                { input: 'stations = [50, 100, 150], target = 200, range = 100', judgeInput: '3\n50 100 150\n200\n100', output: '2' },
                { input: 'stations = [10, 20, 30], target = 100, range = 50', judgeInput: '3\n10 20 30\n100\n50', output: '-1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} stations
 * @param {number} target
 * @param {number} range
 * @return {number}
 */
function minStops(stations, target, range) {
    // Your code here
}`,
                python: `def min_stops(stations, target, range):
    """
    :type stations: List[int]
    :type target: int
    :type range: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minStops(vector<int>& stations, int target, int range) {
    // Your code here
}`,
                java: `public class Solution {
    public int minStops(int[] stations, int target, int range) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const stations = lines[1].split(' ').map(Number);\n    const target = parseInt(lines[2]);\n    const range = parseInt(lines[3]);\n    console.log(minStops(stations, target, range));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nstations = list(map(int, lines[1].split()))\ntarget = int(lines[2])\nrange = int(lines[3])\nprint(min_stops(stations, target, range))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minStops(vector<int>& stations, int target, int range);\nint main() {\n    int n, target, range;\n    cin >> n;\n    vector<int> stations(n);\n    for(int i=0; i<n; ++i) cin >> stations[i];\n    cin >> target >> range;\n    cout << minStops(stations, target, range) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] stations = new int[n];\n        for(int i=0; i<n; i++) stations[i] = sc.nextInt();\n        int target = sc.nextInt();\n        int range = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minStops(stations, target, range));\n    }\n}`
            }
        }, {
            id: 'ride-surge',
            title: 'Ride Surge Pricing',
            difficulty: 'Medium',
            description: `Calculate surge multiplier for ride zones.

You are given:
- requests: Number of ride requests
- drivers: Number of available drivers
- base_fare: Base fare amount

Goal:
- If requests > drivers: Multiplier = 1 + (requests - drivers) / drivers
- If requests <= drivers: Multiplier = 1.0
- Max multiplier is 3.0.
Return final fare = base_fare * multiplier (rounded to 2 decimals).

Input Format:
- requests: Integer
- drivers: Integer
- base_fare: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= requests, drivers <= 10000
- 1 <= base_fare <= 1000`,
            examples: [
                { input: 'requests = 150, drivers = 100, base = 100', output: '150.00' },
                { input: 'requests = 50, drivers = 100, base = 100', output: '100.00' }
            ],
            testCases: [
                { input: 'requests = 150, drivers = 100, base = 100', judgeInput: '150\n100\n100', output: '150.00' },
                { input: 'requests = 50, drivers = 100, base = 100', judgeInput: '50\n100\n100', output: '100.00' },
                { input: 'requests = 200, drivers = 100, base = 100', judgeInput: '200\n100\n100', output: '200.00' },
                { input: 'requests = 400, drivers = 100, base = 100', judgeInput: '400\n100\n100', output: '300.00' },
                { input: 'requests = 100, drivers = 100, base = 50', judgeInput: '100\n100\n50', output: '50.00' },
                { input: 'requests = 120, drivers = 100, base = 200', judgeInput: '120\n100\n200', output: '240.00' },
                { input: 'requests = 300, drivers = 100, base = 100', judgeInput: '300\n100\n100', output: '300.00' },
                { input: 'requests = 10, drivers = 5, base = 100', judgeInput: '10\n5\n100', output: '200.00' },
                { input: 'requests = 1000, drivers = 10, base = 100', judgeInput: '1000\n10\n100', output: '300.00' },
                { input: 'requests = 80, drivers = 100, base = 150', judgeInput: '80\n100\n150', output: '150.00' },
                { input: 'requests = 150, drivers = 100, base = 500', judgeInput: '150\n100\n500', output: '750.00' },
                { input: 'requests = 250, drivers = 100, base = 100', judgeInput: '250\n100\n100', output: '250.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} requests
 * @param {number} drivers
 * @param {number} base_fare
 * @return {number}
 */
function calculateFare(requests, drivers, base_fare) {
    // Your code here
}`,
                python: `def calculate_fare(requests, drivers, base_fare):
    """
    :type requests: int
    :type drivers: int
    :type base_fare: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <iostream>
using namespace std;

double calculateFare(int requests, int drivers, int base_fare) {
    // Your code here
}`,
                java: `public class Solution {
    public double calculateFare(int requests, int drivers, int base_fare) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const requests = parseInt(lines[0]);\n    const drivers = parseInt(lines[1]);\n    const base_fare = parseInt(lines[2]);\n    console.log(calculateFare(requests, drivers, base_fare).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nrequests = int(lines[0])\ndrivers = int(lines[1])\nbase_fare = int(lines[2])\nprint(f'{calculate_fare(requests, drivers, base_fare):.2f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\ndouble calculateFare(int requests, int drivers, int base_fare);\nint main() {\n    int requests, drivers, base_fare;\n    cin >> requests >> drivers >> base_fare;\n    cout << fixed << setprecision(2) << calculateFare(requests, drivers, base_fare) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int requests = sc.nextInt();\n        int drivers = sc.nextInt();\n        int base_fare = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.calculateFare(requests, drivers, base_fare));\n    }\n}`
            }
        }]
    }]
};
