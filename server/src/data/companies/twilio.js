export const twilioData = {
    id: 'twilio',
    name: 'Twilio',
    logo: 'https://logo.clearbit.com/twilio.com',
    description: 'Practice real Twilio Online Assessment questions.',
    assessments: [{
        id: 'twilio-oa-1',
        title: 'Twilio OA-1',
        duration: 90,
        problems: [{
            id: 'sms-routing',
            title: 'SMS Message Router',
            difficulty: 'Hard',
            description: `Route SMS messages to appropriate carriers based on cost and availability.

You are given:
- messages: List of [message_id, destination_country, message_length]
- carriers: List of [carrier_id, country, cost_per_segment, availability] where availability: 1=yes, 0=no

Goal: Each SMS segment = 160 chars. Segments_needed = ceil(message_length / 160). Route to cheapest available carrier for that country. Return total cost rounded to 2 decimals.

Input Format:
- messages: List of lists [id, country, length]
- carriers: List of lists [id, country, cost, avail]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= messages.length <= 100
- 1 <= carriers.length <= 100
- 1 <= message_length <= 1000
- 0.01 <= cost_per_segment <= 1.0`,
            examples: [
                { input: 'messages = [[1,1,160],[2,1,320]], carriers = [[1,1,0.1,1],[2,1,0.05,1]]', output: '0.15' },
                { input: 'messages = [[1,1,100]], carriers = [[1,1,0.2,1]]', output: '0.20' }
            ],
            testCases: [
                { input: 'messages = [[1,1,160],[2,1,320]], carriers = [[1,1,0.1,1],[2,1,0.05,1]]', judgeInput: '2\n1 1 160\n2 1 320\n2\n1 1 0.1 1\n2 1 0.05 1', output: '0.15' },
                { input: 'messages = [[1,1,100]], carriers = [[1,1,0.2,1]]', judgeInput: '1\n1 1 100\n1\n1 1 0.2 1', output: '0.20' },
                { input: 'messages = [[1,2,300]], carriers = [[1,2,0.15,1]]', judgeInput: '1\n1 2 300\n1\n1 2 0.15 1', output: '0.30' },
                { input: 'messages = [[1,1,500],[2,1,200]], carriers = [[1,1,0.08,1]]', judgeInput: '2\n1 1 500\n2 1 200\n1\n1 1 0.08 1', output: '0.40' },
                { input: 'messages = [[1,3,160],[2,3,160]], carriers = [[1,3,0.12,1]]', judgeInput: '2\n1 3 160\n2 3 160\n1\n1 3 0.12 1', output: '0.24' },
                { input: 'messages = [[1,1,400]], carriers = [[1,1,0.25,1]]', judgeInput: '1\n1 1 400\n1\n1 1 0.25 1', output: '0.75' },
                { input: 'messages = [[1,2,180],[2,2,340]], carriers = [[1,2,0.06,1]]', judgeInput: '2\n1 2 180\n2 2 340\n1\n1 2 0.06 1', output: '0.18' },
                { input: 'messages = [[1,1,600]], carriers = [[1,1,0.10,1]]', judgeInput: '1\n1 1 600\n1\n1 1 0.10 1', output: '0.40' },
                { input: 'messages = [[1,5,250],[2,5,150]], carriers = [[1,5,0.18,1]]', judgeInput: '2\n1 5 250\n2 5 150\n1\n1 5 0.18 1', output: '0.54' },
                { input: 'messages = [[1,1,800]], carriers = [[1,1,0.07,1]]', judgeInput: '1\n1 1 800\n1\n1 1 0.07 1', output: '0.35' },
                { input: 'messages = [[1,3,480]], carriers = [[1,3,0.14,1]]', judgeInput: '1\n1 3 480\n1\n1 3 0.14 1', output: '0.42' },
                { input: 'messages = [[1,2,1000]], carriers = [[1,2,0.05,1]]', judgeInput: '1\n1 2 1000\n1\n1 2 0.05 1', output: '0.35' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} messages
 * @param {number[][]} carriers
 * @return {number}
 */
function totalCost(messages, carriers) {
    // Your code here
}`,
                python: `def total_cost(messages, carriers):
    """
    :type messages: List[List[int]]
    :type carriers: List[List]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalCost(vector<vector<int>>& messages, vector<vector<double>>& carriers) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalCost(int[][] messages, double[][] carriers) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const messages = [];\n    for(let i=1; i<=n; i++) messages.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const carriers = [];\n    for(let i=n+2; i<n+2+m; i++) {\n        const parts = lines[i].split(' ');\n        carriers.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2]), parseInt(parts[3])]);\n    }\n    console.log(totalCost(messages, carriers).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nmessages = []\nfor i in range(1, n+1):\n    messages.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\ncarriers = []\nfor i in range(n+2, n+2+m):\n    parts = lines[i].split()\n    carriers.append([int(parts[0]), int(parts[1]), float(parts[2]), int(parts[3])])\nprint(f'{total_cost(messages, carriers):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalCost(vector<vector<int>>& messages, vector<vector<double>>& carriers);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> messages(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> messages[i][0] >> messages[i][1] >> messages[i][2];\n    cin >> m;\n    vector<vector<double>> carriers(m, vector<double>(4));\n    for(int i=0; i<m; ++i) cin >> carriers[i][0] >> carriers[i][1] >> carriers[i][2] >> carriers[i][3];\n    cout << fixed << setprecision(2) << totalCost(messages, carriers) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] messages = new int[n][3];\n        for(int i=0; i<n; i++) {\n            messages[i][0] = sc.nextInt();\n            messages[i][1] = sc.nextInt();\n            messages[i][2] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        double[][] carriers = new double[m][4];\n        for(int i=0; i<m; i++) {\n            carriers[i][0] = sc.nextDouble();\n            carriers[i][1] = sc.nextDouble();\n            carriers[i][2] = sc.nextDouble();\n            carriers[i][3] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalCost(messages, carriers));\n    }\n}`
            }
        }, {
            id: 'call-duration',
            title: 'Voice Call Cost Calculator',
            difficulty: 'Medium',
            description: `Calculate total cost for voice calls based on duration and rates.

You are given:
- calls: List of [call_id, duration_seconds, rate_per_minute]

Goal: Calculate cost per call = ceil(duration_seconds / 60) * rate_per_minute. Return sum of all costs rounded to 2 decimals.

Input Format:
- calls: List of lists [id, duration, rate]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= calls.length <= 1000
- 1 <= duration_seconds <= 10000
- 0.01 <= rate_per_minute <= 1.0`,
            examples: [
                { input: 'calls = [[1,120,0.1],[2,180,0.15]]', output: '0.65' },
                { input: 'calls = [[1,60,0.2]]', output: '0.20' }
            ],
            testCases: [
                { input: 'calls = [[1,120,0.1],[2,180,0.15]]', judgeInput: '2\n1 120 0.1\n2 180 0.15', output: '0.65' },
                { input: 'calls = [[1,60,0.2]]', judgeInput: '1\n1 60 0.2', output: '0.20' },
                { input: 'calls = [[1,90,0.12],[2,150,0.08]]', judgeInput: '2\n1 90 0.12\n2 150 0.08', output: '0.40' },
                { input: 'calls = [[1,300,0.25]]', judgeInput: '1\n1 300 0.25', output: '1.25' },
                { input: 'calls = [[1,45,0.15],[2,45,0.15]]', judgeInput: '2\n1 45 0.15\n2 45 0.15', output: '0.30' },
                { input: 'calls = [[1,240,0.18]]', judgeInput: '1\n1 240 0.18', output: '0.72' },
                { input: 'calls = [[1,70,0.10],[2,130,0.20]]', judgeInput: '2\n1 70 0.10\n2 130 0.20', output: '0.60' },
                { input: 'calls = [[1,360,0.22]]', judgeInput: '1\n1 360 0.22', output: '1.32' },
                { input: 'calls = [[1,100,0.14],[2,200,0.16]]', judgeInput: '2\n1 100 0.14\n2 200 0.16', output: '0.76' },
                { input: 'calls = [[1,480,0.30]]', judgeInput: '1\n1 480 0.30', output: '2.40' },
                { input: 'calls = [[1,50,0.08],[2,110,0.12],[3,170,0.10]]', judgeInput: '3\n1 50 0.08\n2 110 0.12\n3 170 0.10', output: '0.62' },
                { input: 'calls = [[1,600,0.05]]', judgeInput: '1\n1 600 0.05', output: '0.50' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} calls
 * @return {number}
 */
function totalCallCost(calls) {
    // Your code here
}`,
                python: `def total_call_cost(calls):
    """
    :type calls: List[List]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalCallCost(vector<vector<double>>& calls) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalCallCost(double[][] calls) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const calls = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        calls.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2])]);\n    }\n    console.log(totalCallCost(calls).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncalls = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    calls.append([int(parts[0]), int(parts[1]), float(parts[2])])\nprint(f'{total_call_cost(calls):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalCallCost(vector<vector<double>>& calls);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<double>> calls(n, vector<double>(3));\n    for(int i=0; i<n; ++i) cin >> calls[i][0] >> calls[i][1] >> calls[i][2];\n    cout << fixed << setprecision(2) << totalCallCost(calls) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] calls = new double[n][3];\n        for(int i=0; i<n; i++) {\n            calls[i][0] = sc.nextDouble();\n            calls[i][1] = sc.nextDouble();\n            calls[i][2] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalCallCost(calls));\n    }\n}`
            }
        }]
    }]
};
