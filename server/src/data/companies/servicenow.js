export const servicenowData = {
    id: 'servicenow',
    name: 'ServiceNow',
    logo: 'https://logo.clearbit.com/servicenow.com',
    description: 'Practice real ServiceNow Online Assessment questions.',
    assessments: [{
        id: 'servicenow-oa-1',
        title: 'ServiceNow OA-1',
        duration: 90,
        problems: [{
            id: 'incident-priority',
            title: 'Incident Priority Calculator',
            difficulty: 'Medium',
            description: `Calculate incident priority based on impact and urgency using ITIL best practices.

You are given:
- impact: Impact level (1=High, 2=Medium, 3=Low)
- urgency: Urgency level (1=High, 2=Medium, 3=Low)

Goal: Priority matrix: P1 (Critical) when impact=1 AND urgency=1. P2 (High) when (impact=1 AND urgency=2) OR (impact=2 AND urgency=1). P3 (Medium) when (impact=1 AND urgency=3) OR (impact=2 AND urgency=2) OR (impact=3 AND urgency=1). P4 (Low) when (impact=2 AND urgency=3) OR (impact=3 AND urgency=2). P5 (Planning) when impact=3 AND urgency=3. Return priority as integer 1-5.

Input Format:
- impact: Integer (1-3)
- urgency: Integer (1-3)

Output Format:
- Return an integer (1-5)

Constraints:
- impact in {1, 2, 3}
- urgency in {1, 2, 3}`,
            examples: [
                { input: 'impact = 1, urgency = 1', output: '1' },
                { input: 'impact = 2, urgency = 2', output: '3' }
            ],
            testCases: [
                { input: 'impact = 1, urgency = 1', judgeInput: '1\n1', output: '1' },
                { input: 'impact = 2, urgency = 2', judgeInput: '2\n2', output: '3' },
                { input: 'impact = 1, urgency = 2', judgeInput: '1\n2', output: '2' },
                { input: 'impact = 2, urgency = 1', judgeInput: '2\n1', output: '2' },
                { input: 'impact = 3, urgency = 3', judgeInput: '3\n3', output: '5' },
                { input: 'impact = 1, urgency = 3', judgeInput: '1\n3', output: '3' },
                { input: 'impact = 3, urgency = 1', judgeInput: '3\n1', output: '3' },
                { input: 'impact = 2, urgency = 3', judgeInput: '2\n3', output: '4' },
                { input: 'impact = 3, urgency = 2', judgeInput: '3\n2', output: '4' },
                { input: 'impact = 1, urgency = 1', judgeInput: '1\n1', output: '1' },
                { input: 'impact = 2, urgency = 1', judgeInput: '2\n1', output: '2' },
                { input: 'impact = 3, urgency = 3', judgeInput: '3\n3', output: '5' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} impact
 * @param {number} urgency
 * @return {number}
 */
function calculatePriority(impact, urgency) {
    // Your code here
}`,
                python: `def calculate_priority(impact, urgency):
    """
    :type impact: int
    :type urgency: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `int calculatePriority(int impact, int urgency) {
    // Your code here
}`,
                java: `public class Solution {
    public int calculatePriority(int impact, int urgency) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const impact = parseInt(lines[0]);\n    const urgency = parseInt(lines[1]);\n    console.log(calculatePriority(impact, urgency));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nimpact = int(lines[0])\nurgency = int(lines[1])\nprint(calculate_priority(impact, urgency))`,
                cpp: `#include <iostream>\nusing namespace std;\nint calculatePriority(int impact, int urgency);\nint main() {\n    int impact, urgency;\n    cin >> impact >> urgency;\n    cout << calculatePriority(impact, urgency) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int impact = sc.nextInt();\n        int urgency = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.calculatePriority(impact, urgency));\n    }\n}`
            }
        }, {
            id: 'sla-breach',
            title: 'SLA Breach Prediction',
            difficulty: 'Hard',
            description: `Predict if an incident will breach SLA based on elapsed time and target resolution time.

You are given:
- created_time: Incident creation timestamp (minutes since epoch)
- current_time: Current timestamp (minutes since epoch)
- priority: Priority level (1-5)
- business_hours_only: 1 if SLA applies only during business hours, 0 otherwise

Goal: SLA targets in minutes: P1=60, P2=240, P3=480, P4=1440, P5=2880. If business_hours_only=1, only count minutes during Mon-Fri 9AM-5PM (assume 1 day = 1440 minutes, business day = 480 minutes). For simplicity, elapsed = current_time - created_time. If business_hours_only=1, effective_elapsed = elapsed * (480/1440) = elapsed / 3. Check if effective_elapsed >= SLA target. Return 1 if breach, 0 otherwise.

Input Format:
- created_time: Integer
- current_time: Integer
- priority: Integer (1-5)
- business_hours_only: Integer (0 or 1)

Output Format:
- Return 0 or 1

Constraints:
- 0 <= created_time <= current_time <= 10000000
- 1 <= priority <= 5
- business_hours_only in {0, 1}`,
            examples: [
                { input: 'created_time = 0, current_time = 100, priority = 1, business_hours_only = 0', output: '1' },
                { input: 'created_time = 0, current_time = 50, priority = 1, business_hours_only = 0', output: '0' }
            ],
            testCases: [
                { input: 'created_time = 0, current_time = 100, priority = 1, business_hours_only = 0', judgeInput: '0\n100\n1\n0', output: '1' },
                { input: 'created_time = 0, current_time = 50, priority = 1, business_hours_only = 0', judgeInput: '0\n50\n1\n0', output: '0' },
                { input: 'created_time = 0, current_time = 300, priority = 2, business_hours_only = 0', judgeInput: '0\n300\n2\n0', output: '1' },
                { input: 'created_time = 0, current_time = 200, priority = 2, business_hours_only = 0', judgeInput: '0\n200\n2\n0', output: '0' },
                { input: 'created_time = 0, current_time = 500, priority = 3, business_hours_only = 0', judgeInput: '0\n500\n3\n0', output: '1' },
                { input: 'created_time = 0, current_time = 1500, priority = 4, business_hours_only = 0', judgeInput: '0\n1500\n4\n0', output: '1' },
                { input: 'created_time = 0, current_time = 3000, priority = 5, business_hours_only = 0', judgeInput: '0\n3000\n5\n0', output: '1' },
                { input: 'created_time = 100, current_time = 300, priority = 1, business_hours_only = 1', judgeInput: '100\n300\n1\n1', output: '1' },
                { input: 'created_time = 0, current_time = 150, priority = 1, business_hours_only = 1', judgeInput: '0\n150\n1\n1', output: '0' },
                { input: 'created_time = 0, current_time = 1000, priority = 2, business_hours_only = 1', judgeInput: '0\n1000\n2\n1', output: '1' },
                { input: 'created_time = 0, current_time = 2000, priority = 3, business_hours_only = 1', judgeInput: '0\n2000\n3\n1', output: '1' },
                { input: 'created_time = 500, current_time = 600, priority = 1, business_hours_only = 0', judgeInput: '500\n600\n1\n0', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} created_time
 * @param {number} current_time
 * @param {number} priority
 * @param {number} business_hours_only
 * @return {number}
 */
function predictBreach(created_time, current_time, priority, business_hours_only) {
    // Your code here
}`,
                python: `def predict_breach(created_time, current_time, priority, business_hours_only):
    """
    :type created_time: int
    :type current_time: int
    :type priority: int
    :type business_hours_only: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `int predictBreach(int created_time, int current_time, int priority, int business_hours_only) {
    // Your code here
}`,
                java: `public class Solution {
    public int predictBreach(int created_time, int current_time, int priority, int business_hours_only) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const created_time = parseInt(lines[0]);\n    const current_time = parseInt(lines[1]);\n    const priority = parseInt(lines[2]);\n    const business_hours_only = parseInt(lines[3]);\n    console.log(predictBreach(created_time, current_time, priority, business_hours_only));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ncreated_time = int(lines[0])\ncurrent_time = int(lines[1])\npriority = int(lines[2])\nbusiness_hours_only = int(lines[3])\nprint(predict_breach(created_time, current_time, priority, business_hours_only))`,
                cpp: `#include <iostream>\nusing namespace std;\nint predictBreach(int created_time, int current_time, int priority, int business_hours_only);\nint main() {\n    int created_time, current_time, priority, business_hours_only;\n    cin >> created_time >> current_time >> priority >> business_hours_only;\n    cout << predictBreach(created_time, current_time, priority, business_hours_only) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int created_time = sc.nextInt();\n        int current_time = sc.nextInt();\n        int priority = sc.nextInt();\n        int business_hours_only = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.predictBreach(created_time, current_time, priority, business_hours_only));\n    }\n}`
            }
        }]
    }]
};
