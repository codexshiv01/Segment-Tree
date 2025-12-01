export const paloaltoData = {
    id: 'paloalto',
    name: 'Palo Alto Networks',
    logo: 'https://logo.clearbit.com/paloaltonetworks.com',
    description: 'Practice real Palo Alto Networks Online Assessment questions.',
    assessments: [{
        id: 'paloalto-oa-1',
        title: 'Palo Alto OA-1',
        duration: 90,
        problems: [{
            id: 'polymorphic-malware',
            title: 'Polymorphic Malware Signature',
            difficulty: 'Hard',
            description: `Cybercriminals are evolving. They use "polymorphic" code that changes slightly to evade detection. You are building the next-gen detection engine for Cortex XDR.

You are given:
- \`codebase\`: A long string representing the binary code of a suspicious file.
- \`signature\`: A known malware signature string.
- \`mutation_limit\`: The maximum allowed "mutations" (edit distance) for a match.

However, the malware has a specific mutation pattern: it can only *insert* garbage bytes (noise) or *change* existing bytes. It cannot *delete* bytes from the original signature (the core logic must remain).
**Goal:** Find if there exists any substring in \`codebase\` that matches \`signature\` with at most \`mutation_limit\` operations (Insertions or Substitutions only).
Return \`true\` if found, \`false\` otherwise.

Input Format:
- codebase: String
- signature: String
- mutation_limit: Integer

Output Format:
- Return a boolean

Constraints:
- 1 <= signature.length <= 100
- 1 <= codebase.length <= 10000
- 0 <= mutation_limit <= 100`,
            examples: [
                { input: 'codebase = "abxcde", signature = "abcde", limit = 1', output: 'true' },
                { input: 'codebase = "axbxc", signature = "abc", limit = 1', output: 'false' }
            ],
            testCases: [
                { input: 'codebase = "abxcde", signature = "abcde", limit = 1', judgeInput: 'abxcde\nabcde\n1', output: 'true' },
                { input: 'codebase = "axbxc", signature = "abc", limit = 1', judgeInput: 'axbxc\nabc\n1', output: 'false' },
                { input: 'codebase = "hello world", signature = "hell", limit = 0', judgeInput: 'hello world\nhell\n0', output: 'true' },
                { input: 'codebase = "abcdef", signature = "xyz", limit = 2', judgeInput: 'abcdef\nxyz\n2', output: 'false' },
                { input: 'codebase = "aaaaa", signature = "aa", limit = 0', judgeInput: 'aaaaa\naa\n0', output: 'true' },
                { input: 'codebase = "malware", signature = "mal", limit = 5', judgeInput: 'malware\nmal\n5', output: 'true' },
                { input: 'codebase = "cleanfile", signature = "virus", limit = 1', judgeInput: 'cleanfile\nvirus\n1', output: 'false' },
                { input: 'codebase = "abacaba", signature = "aba", limit = 0', judgeInput: 'abacaba\naba\n0', output: 'true' },
                { input: 'codebase = "1010101", signature = "111", limit = 2', judgeInput: '1010101\n111\n2', output: 'true' },
                { input: 'codebase = "short", signature = "looooong", limit = 2', judgeInput: 'short\nlooooong\n2', output: 'false' },
                { input: 'codebase = "mutation", signature = "muta", limit = 1', judgeInput: 'mutation\nmuta\n1', output: 'true' },
                { input: 'codebase = "detectme", signature = "detct", limit = 1', judgeInput: 'detectme\ndetct\n1', output: 'true' }
            ],
            starterCode: {
                javascript: `/**
 * @param {string} codebase
 * @param {string} signature
 * @param {number} mutation_limit
 * @return {boolean}
 */
function detectMalware(codebase, signature, mutation_limit) {
    // Your code here
}`,
                python: `def detect_malware(codebase, signature, mutation_limit):
    """
    :type codebase: str
    :type signature: str
    :type mutation_limit: int
    :rtype: bool
    """
    # Your code here
    pass`,
                cpp: `#include <string>
using namespace std;

bool detectMalware(string codebase, string signature, int mutation_limit) {
    // Your code here
}`,
                java: `public class Solution {
    public boolean detectMalware(String codebase, String signature, int mutation_limit) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const codebase = lines[0];\n    const signature = lines[1];\n    const mutation_limit = parseInt(lines[2]);\n    console.log(detectMalware(codebase, signature, mutation_limit));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\ncodebase = lines[0]\nsignature = lines[1]\nmutation_limit = int(lines[2])\nprint(str(detect_malware(codebase, signature, mutation_limit)).lower())`,
                cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nbool detectMalware(string codebase, string signature, int mutation_limit);\nint main() {\n    string codebase, signature;\n    int mutation_limit;\n    cin >> codebase >> signature >> mutation_limit;\n    cout << (detectMalware(codebase, signature, mutation_limit) ? "true" : "false") << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String codebase = sc.next();\n        String signature = sc.next();\n        int mutation_limit = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.detectMalware(codebase, signature, mutation_limit));\n    }\n}`
            }
        }, {
            id: 'firewall-optimizer',
            title: 'Firewall Rule Optimizer',
            difficulty: 'Hard',
            description: `A firewall has accumulated thousands of rules over years. Performance is degrading. You need to remove redundant rules.

You are given a list of rules. Each rule covers an IP range \`[start, end]\` and has an action \`ALLOW\` or \`DENY\`.
Rules are processed in order (top to bottom). The first rule that matches an IP determines the action.
A rule \`i\` is **redundant** if removing it does not change the action for *any* IP address in its range (because earlier rules already covered it, or later rules would produce the same result? No, standard firewall logic: First Match Wins).
Wait, if Rule 1 is [10, 20] ALLOW, and Rule 2 is [15, 25] DENY.
IP 15 matches Rule 1 -> ALLOW.
If we remove Rule 1? IP 15 matches Rule 2 -> DENY. Result changes. Rule 1 is NOT redundant.
If Rule 1 is [10, 20] ALLOW, and Rule 2 is [12, 15] ALLOW.
IP 13 matches Rule 1 -> ALLOW.
If we remove Rule 2? IP 13 still matches Rule 1 -> ALLOW.
Wait, "redundant" usually means "never reached" or "shadowed".
Let's define **Shadowed**: A rule is shadowed if every IP in its range is already matched by a higher-priority (earlier) rule.
**Goal:** Count the number of shadowed (unreachable) rules.

Input Format:
- rules: List of lists [start, end] (Integers representing IPs)

Output Format:
- Return an integer (count of shadowed rules)

Constraints:
- 1 <= rules.length <= 5000
- 0 <= start <= end <= 10^9`,
            examples: [
                { input: 'rules = [[1,10],[2,5],[11,20]]', output: '1' },
                { input: 'rules = [[1,10],[11,20]]', output: '0' }
            ],
            testCases: [
                { input: 'rules = [[1,10],[2,5],[11,20]]', judgeInput: '3\n1 10\n2 5\n11 20', output: '1' },
                { input: 'rules = [[1,10],[11,20]]', judgeInput: '2\n1 10\n11 20', output: '0' },
                { input: 'rules = [[1,100],[10,20],[30,40]]', judgeInput: '3\n1 100\n10 20\n30 40', output: '2' },
                { input: 'rules = [[10,20],[1,100]]', judgeInput: '2\n10 20\n1 100', output: '0' },
                { input: 'rules = [[1,5],[6,10],[1,10]]', judgeInput: '3\n1 5\n6 10\n1 10', output: '0' },
                { input: 'rules = [[1,10],[1,10]]', judgeInput: '2\n1 10\n1 10', output: '1' },
                { input: 'rules = [[1,10],[2,11]]', judgeInput: '2\n1 10\n2 11', output: '0' },
                { input: 'rules = [[1,10],[5,15],[12,20]]', judgeInput: '3\n1 10\n5 15\n12 20', output: '0' },
                { input: 'rules = [[1,100],[2,99],[3,98]]', judgeInput: '3\n1 100\n2 99\n3 98', output: '2' },
                { input: 'rules = [[1,1],[2,2],[3,3]]', judgeInput: '3\n1 1\n2 2\n3 3', output: '0' },
                { input: 'rules = [[1,10],[2,5],[6,9],[11,20]]', judgeInput: '4\n1 10\n2 5\n6 9\n11 20', output: '2' },
                { input: 'rules = [[1,100],[101,200],[50,150]]', judgeInput: '3\n1 100\n101 200\n50 150', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} rules
 * @return {number}
 */
function countShadowedRules(rules) {
    // Your code here
}`,
                python: `def count_shadowed_rules(rules):
    """
    :type rules: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countShadowedRules(vector<vector<int>>& rules) {
    // Your code here
}`,
                java: `public class Solution {
    public int countShadowedRules(int[][] rules) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const rules = [];\n    for(let i=1; i<=n; i++) rules.push(lines[i].split(' ').map(Number));\n    console.log(countShadowedRules(rules));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nrules = []\nfor i in range(1, n+1):\n    rules.append(list(map(int, lines[i].split())))\nprint(count_shadowed_rules(rules))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countShadowedRules(vector<vector<int>>& rules);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> rules(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> rules[i][0] >> rules[i][1];\n    cout << countShadowedRules(rules) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] rules = new int[n][2];\n        for(int i=0; i<n; i++) {\n            rules[i][0] = sc.nextInt();\n            rules[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.countShadowedRules(rules));\n    }\n}`
            }
        }]
    }]
};
