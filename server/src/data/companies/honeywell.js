export const honeywellData = {
    id: 'honeywell',
    name: 'Honeywell',
    logo: 'https://logo.clearbit.com/honeywell.com',
    description: 'Practice real Honeywell Online Assessment questions.',
    assessments: [{
        id: 'honeywell-oa-1',
        title: 'Honeywell OA-1',
        duration: 90,
        problems: [{
            id: 'sensor-calibration',
            title: 'IoT Sensor Calibration Engine',
            difficulty: 'Hard',
            description: `Calibrate IoT sensor readings using reference values.

You are given:
- readings: List of [sensor_id, raw_value, reference_value]

Goal: Calculate calibration_factor = reference_value / raw_value for each sensor. Return average calibration_factor rounded to 4 decimals.

Input Format:
- readings: List of lists [id, raw, reference]

Output Format:
- Return a float rounded to 4 decimal places

Constraints:
- 1 <= readings.length <= 1000
- 0.01 <= raw_value, reference_value <= 1000.0`,
            examples: [
                { input: 'readings = [[1,100.0,105.0],[2,200.0,210.0]]', output: '1.0500' },
                { input: 'readings = [[1,50.0,50.0]]', output: '1.0000' }
            ],
            testCases: [
                { input: 'readings = [[1,100.0,105.0],[2,200.0,210.0]]', judgeInput: '2\n1 100.0 105.0\n2 200.0 210.0', output: '1.0500' },
                { input: 'readings = [[1,50.0,50.0]]', judgeInput: '1\n1 50.0 50.0', output: '1.0000' },
                { input: 'readings = [[1,80.0,88.0],[2,120.0,132.0],[3,150.0,165.0]]', judgeInput: '3\n1 80.0 88.0\n2 120.0 132.0\n3 150.0 165.0', output: '1.1000' },
                { input: 'readings = [[1,250.0,255.0],[2,500.0,510.0]]', judgeInput: '2\n1 250.0 255.0\n2 500.0 510.0', output: '1.0200' },
                { input: 'readings = [[1,10.0,10.5],[2,20.0,21.0],[3,30.0,31.5]]', judgeInput: '3\n1 10.0 10.5\n2 20.0 21.0\n3 30.0 31.5', output: '1.0500' },
                { input: 'readings = [[1,75.0,75.0],[2,150.0,150.0]]', judgeInput: '2\n1 75.0 75.0\n2 150.0 150.0', output: '1.0000' },
                { input: 'readings = [[1,40.0,44.0],[2,60.0,66.0],[3,80.0,88.0],[4,100.0,110.0]]', judgeInput: '4\n1 40.0 44.0\n2 60.0 66.0\n3 80.0 88.0\n4 100.0 110.0', output: '1.1000' },
                { input: 'readings = [[1,300.0,306.0]]', judgeInput: '1\n1 300.0 306.0', output: '1.0200' },
                { input: 'readings = [[1,90.0,93.6],[2,180.0,187.2]]', judgeInput: '2\n1 90.0 93.6\n2 180.0 187.2', output: '1.0400' },
                { input: 'readings = [[1,125.0,131.25],[2,250.0,262.5]]', judgeInput: '2\n1 125.0 131.25\n2 250.0 262.5', output: '1.0500' },
                { input: 'readings = [[1,400.0,404.0],[2,600.0,606.0],[3,800.0,808.0]]', judgeInput: '3\n1 400.0 404.0\n2 600.0 606.0\n3 800.0 808.0', output: '1.0100' },
                { input: 'readings = [[1,55.0,60.5],[2,110.0,121.0]]', judgeInput: '2\n1 55.0 60.5\n2 110.0 121.0', output: '1.1000' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} readings
 * @return {number}
 */
function avgCalibrationFactor(readings) {
    // Your code here
}`,
                python: `def avg_calibration_factor(readings):
    """
    :type readings: List[List]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double avgCalibrationFactor(vector<vector<double>>& readings) {
    // Your code here
}`,
                java: `public class Solution {
    public double avgCalibrationFactor(double[][] readings) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const readings = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        readings.push([parseInt(parts[0]), parseFloat(parts[1]), parseFloat(parts[2])]);\n    }\n    console.log(avgCalibrationFactor(readings).toFixed(4));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nreadings = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    readings.append([int(parts[0]), float(parts[1]), float(parts[2])])\nprint(f'{avg_calibration_factor(readings):.4f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble avgCalibrationFactor(vector<vector<double>>& readings);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<double>> readings(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> readings[i][0] >> readings[i][1] >> readings[i][2];\n    cout << fixed << setprecision(4) << avgCalibrationFactor(readings) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] readings = new double[n][3];\n        for(int i=0; i<n; i++) {\n            readings[i][0] = sc.nextDouble();\n            readings[i][1] = sc.nextDouble();\n            readings[i][2] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.4f\\n", sol.avgCalibrationFactor(readings));\n    }\n}`
            }
        }, {
            id: 'hvac-scheduler',
            title: 'Building HVAC Optimizer',
            difficulty: 'Medium',
            description: `Optimize HVAC system scheduling to minimize energy costs.

You are given:
- zones: List of [zone_id, target_temp, current_temp, priority]

Goal: Calculate energy_needed = abs(target_temp - current_temp) * priority for each zone. Return total energy needed.

Input Format:
- zones: List of lists [id, target, current, priority]

Output Format:
- Return an integer (total energy needed)

Constraints:
- 1 <= zones.length <= 100
- 10 <= temperature <= 35 (Celsius)
- 1 <= priority <= 10`,
            examples: [
                { input: 'zones = [[1,22,20,5],[2,24,26,3]]', output: '16' },
                { input: 'zones = [[1,20,20,5]]', output: '0' }
            ],
            testCases: [
                { input: 'zones = [[1,22,20,5],[2,24,26,3]]', judgeInput: '2\n1 22 20 5\n2 24 26 3', output: '16' },
                { input: 'zones = [[1,20,20,5]]', judgeInput: '1\n1 20 20 5', output: '0' },
                { input: 'zones = [[1,25,20,8],[2,23,28,4],[3,21,19,6]]', judgeInput: '3\n1 25 20 8\n2 23 28 4\n3 21 19 6', output: '72' },
                { input: 'zones = [[1,22,24,10],[2,23,21,10]]', judgeInput: '2\n1 22 24 10\n2 23 21 10', output: '40' },
                { input: 'zones = [[1,18,18,3],[2,19,19,5],[3,20,20,7]]', judgeInput: '3\n1 18 18 3\n2 19 19 5\n3 20 20 7', output: '0' },
                { input: 'zones = [[1,26,22,6],[2,24,20,4]]', judgeInput: '2\n1 26 22 6\n2 24 20 4', output: '40' },
                { input: 'zones = [[1,21,25,7]]', judgeInput: '1\n1 21 25 7', output: '28' },
                { input: 'zones = [[1,23,20,2],[2,22,25,3],[3,24,21,5]]', judgeInput: '3\n1 23 20 2\n2 22 25 3\n3 24 21 5', output: '30' },
                { input: 'zones = [[1,20,22,8],[2,21,23,6],[3,22,24,4]]', judgeInput: '3\n1 20 22 8\n2 21 23 6\n3 22 24 4', output: '36' },
                { input: 'zones = [[1,25,25,10],[2,24,24,9]]', judgeInput: '2\n1 25 25 10\n2 24 24 9', output: '0' },
                { input: 'zones = [[1,27,23,5],[2,26,22,4],[3,25,21,6]]', judgeInput: '3\n1 27 23 5\n2 26 22 4\n3 25 21 6', output: '60' },
                { input: 'zones = [[1,19,22,9],[2,20,24,7]]', judgeInput: '2\n1 19 22 9\n2 20 24 7', output: '55' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} zones
 * @return {number}
 */
function totalEnergy(zones) {
    // Your code here
}`,
                python: `def total_energy(zones):
    """
    :type zones: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int totalEnergy(vector<vector<int>>& zones) {
    // Your code here
}`,
                java: `public class Solution {
    public int totalEnergy(int[][] zones) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const zones = [];\n    for(let i=1; i<=n; i++) zones.push(lines[i].split(' ').map(Number));\n    console.log(totalEnergy(zones));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nzones = []\nfor i in range(1, n+1):\n    zones.append(list(map(int, lines[i].split())))\nprint(total_energy(zones))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint totalEnergy(vector<vector<int>>& zones);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> zones(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> zones[i][0] >> zones[i][1] >> zones[i][2] >> zones[i][3];\n    cout << totalEnergy(zones) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] zones = new int[n][4];\n        for(int i=0; i<n; i++) {\n            zones[i][0] = sc.nextInt();\n            zones[i][1] = sc.nextInt();\n            zones[i][2] = sc.nextInt();\n            zones[i][3] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.totalEnergy(zones));\n    }\n}`
            }
        }]
    }]
};
