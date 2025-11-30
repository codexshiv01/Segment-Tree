export const intuitData = {
    id: 'intuit',
    name: 'Intuit',
    logo: 'https://logo.clearbit.com/intuit.com',
    description: 'Practice real Intuit Online Assessment questions.',
    assessments: [{
        id: 'intuit-oa-1',
        title: 'Intuit OA-1',
        duration: 90,
        problems: [{
            id: 'tax-deduction-opt',
            title: 'TurboTax Deduction Optimizer',
            difficulty: 'Medium',
            description: `### Problem Description
Intuit's TurboTax aims to maximize a user's tax refund by selecting the best combination of deductions.

You are given:
- \`deductions\`: A list where each element is \`[amount, category, required_docs]\`.
  - \`amount\`: The dollar value of the deduction.
  - \`category\`: An integer ID representing the deduction category (e.g., 1 for Charity, 2 for Medical).
  - \`required_docs\`: An integer representing the number of documents needed to claim this deduction.
- \`max_categories\`: The maximum number of **distinct** categories you can claim deductions from.

**Goal:**
Select a subset of deductions to **maximize the total deduction amount**, subject to the constraint that the number of unique categories in the selected subset does not exceed \`max_categories\`.

### Input Format
- \`deductions\`: List of lists \`[amount, category, required_docs]\`
- \`max_categories\`: Integer

### Output Format
- Return an integer representing the maximum total deduction amount.

### Constraints
- \`1 <= deductions.length <= 100\`
- \`1 <= max_categories <= 10\`
- \`1 <= amount <= 1000\``,
            examples: [
                { input: 'deductions = [[100,1,2],[200,1,3],[150,2,1]], max_categories = 2', output: '350' },
                { input: 'deductions = [[100,1,1],[200,2,1],[300,3,1]], max_categories = 2', output: '500' }
            ],
            testCases: [
                { input: 'deductions = [[100,1,2],[200,1,3],[150,2,1]], max_categories = 2', judgeInput: '3\n100 1 2\n200 1 3\n150 2 1\n2', output: '350' },
                { input: 'deductions = [[50,1,1]], max_categories = 1', judgeInput: '1\n50 1 1\n1', output: '50' },
                { input: 'deductions = [[100,1,1],[200,2,1],[300,3,1]], max_categories = 2', judgeInput: '3\n100 1 1\n200 2 1\n300 3 1\n2', output: '500' },
                { input: 'deductions = [[150,1,2],[150,2,2],[150,3,2]], max_categories = 3', judgeInput: '3\n150 1 2\n150 2 2\n150 3 2\n3', output: '450' },
                { input: 'deductions = [[1000,1,5],[500,1,3]], max_categories = 1', judgeInput: '2\n1000 1 5\n500 1 3\n1', output: '1000' },
                { input: 'deductions = [[200,1,1],[300,2,2],[400,3,3]], max_categories = 1', judgeInput: '3\n200 1 1\n300 2 2\n400 3 3\n1', output: '400' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} deductions
 * @param {number} max_categories
 * @return {number}
 */
function maxDeductions(deductions, max_categories) {
    // Your code here
}`,
                python: `def max_deductions(deductions, max_categories):
    """
    :type deductions: List[List[int]]
    :type max_categories: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxDeductions(vector<vector<int>>& deductions, int max_categories) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxDeductions(int[][] deductions, int max_categories) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const deductions = [];\n    for(let i=1; i<=n; i++) deductions.push(lines[i].split(' ').map(Number));\n    const max_categories = parseInt(lines[n+1]);\n    console.log(maxDeductions(deductions, max_categories));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ndeductions = []\nfor i in range(1, n+1):\n    deductions.append(list(map(int, lines[i].split())))\nmax_categories = int(lines[n+1])\nprint(max_deductions(deductions, max_categories))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxDeductions(vector<vector<int>>& deductions, int max_categories);\nint main() {\n    int n, max_categories;\n    cin >> n;\n    vector<vector<int>> deductions(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> deductions[i][0] >> deductions[i][1] >> deductions[i][2];\n    cin >> max_categories;\n    cout << maxDeductions(deductions, max_categories) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] deductions = new int[n][3];\n        for(int i=0; i<n; i++) {\n            deductions[i][0] = sc.nextInt();\n            deductions[i][1] = sc.nextInt();\n            deductions[i][2] = sc.nextInt();\n        }\n        int max_categories = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxDeductions(deductions, max_categories));\n    }\n}` }
        }, {
            id: 'quickbooks-reconcile',
            title: 'QuickBooks Transaction Reconciliation',
            difficulty: 'Hard',
            description: `### Problem Description
QuickBooks needs to automatically reconcile bank transactions with internal book records.

You are given:
- \`bank_txns\`: A list of transaction amounts from the bank statement.
- \`book_txns\`: A list of transaction amounts from the user's accounting books.
- \`tolerance\`: The maximum allowed difference between a bank transaction and a book transaction to consider them a "match".

**Goal:**
Find the **minimum number of unmatched transactions** after pairing up as many bank transactions with book transactions as possible.
- Each bank transaction can be matched with at most one book transaction.
- A match is valid if \`|bank_txn - book_txn| <= tolerance\`.

### Input Format
- \`bank_txns\`: List of integers
- \`book_txns\`: List of integers
- \`tolerance\`: Integer

### Output Format
- Return an integer representing the count of unmatched transactions (from both lists combined).

### Constraints
- \`1 <= transactions <= 500\`
- \`tolerance >= 0\`
- \`0 <= amount <= 10^6\``,
            examples: [
                { input: 'bank = [100,200,300], book = [99,201,300], tolerance = 2', output: '0' },
                { input: 'bank = [50], book = [100], tolerance = 10', output: '2' }
            ],
            testCases: [
                { input: 'bank = [100,200,300], book = [99,201,300], tolerance = 2', judgeInput: '3\n100 200 300\n3\n99 201 300\n2', output: '0' },
                { input: 'bank = [50], book = [100], tolerance = 10', judgeInput: '1\n50\n1\n100\n10', output: '2' },
                { input: 'bank = [10,20,30], book = [10,20,30], tolerance = 0', judgeInput: '3\n10 20 30\n3\n10 20 30\n0', output: '0' },
                { input: 'bank = [100,200], book = [105,195], tolerance = 5', judgeInput: '2\n100 200\n2\n105 195\n5', output: '0' },
                { input: 'bank = [500,1000], book = [600], tolerance = 50', judgeInput: '2\n500 1000\n1\n600\n50', output: '2' },
                { input: 'bank = [75,150,225], book = [74,151,226], tolerance = 1', judgeInput: '3\n75 150 225\n3\n74 151 226\n1', output: '0' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} bank
 * @param {number[]} book
 * @param {number} tolerance
 * @return {number}
 */
function unmatchedTransactions(bank, book, tolerance) {
    // Your code here
}`,
                python: `def unmatched_transactions(bank, book, tolerance):
    """
    :type bank: List[int]
    :type book: List[int]
    :type tolerance: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int unmatchedTransactions(vector<int>& bank, vector<int>& book, int tolerance) {
    // Your code here
}`,
                java: `public class Solution {
    public int unmatchedTransactions(int[] bank, int[] book, int tolerance) {
        // Your code here
    }
}`
            },
            driverCode: { javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n1 = parseInt(lines[0]);\n    const bank = lines[1].split(' ').map(Number);\n    const n2 = parseInt(lines[2]);\n    const book = lines[3].split(' ').map(Number);\n    const tolerance = parseInt(lines[4]);\n    console.log(unmatchedTransactions(bank, book, tolerance));\n});`, python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn1 = int(lines[0])\nbank = list(map(int, lines[1].split()))\nn2 = int(lines[2])\nbook = list(map(int, lines[3].split()))\ntolerance = int(lines[4])\nprint(unmatched_transactions(bank, book, tolerance))`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint unmatchedTransactions(vector<int>& bank, vector<int>& book, int tolerance);\nint main() {\n    int n1, n2, tolerance;\n    cin >> n1;\n    vector<int> bank(n1);\n    for(int i=0; i<n1; ++i) cin >> bank[i];\n    cin >> n2;\n    vector<int> book(n2);\n    for(int i=0; i<n2; ++i) cin >> book[i];\n    cin >> tolerance;\n    cout << unmatchedTransactions(bank, book, tolerance) << endl;\n    return 0;\n}`, java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n1 = sc.nextInt();\n        int[] bank = new int[n1];\n        for(int i=0; i<n1; i++) bank[i] = sc.nextInt();\n        int n2 = sc.nextInt();\n        int[] book = new int[n2];\n        for(int i=0; i<n2; i++) book[i] = sc.nextInt();\n        int tolerance = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.unmatchedTransactions(bank, book, tolerance));\n    }\n}` }
        }]
    }]
};
