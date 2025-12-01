export const nykaaData = {
    id: 'nykaa',
    name: 'Nykaa',
    logo: 'https://logo.clearbit.com/nykaa.com',
    description: 'Practice real Nykaa Online Assessment questions.',
    assessments: [{
        id: 'nykaa-oa-1',
        title: 'Nykaa OA-1',
        duration: 90,
        problems: [{
            id: 'beauty-box',
            title: 'Beauty Box Combinations',
            difficulty: 'Medium',
            description: `Create beauty boxes with specific price constraints.

You are given:
- prices: List of product prices
- budget: Exact budget for a box

Goal: Find the number of unique combinations of products that sum up exactly to the budget. Each product can be used only once per combination.
Return the count.

Input Format:
- prices: List of integers
- budget: Integer

Output Format:
- Return an integer (count of combinations)

Constraints:
- 1 <= prices.length <= 20
- 1 <= budget <= 1000`,
            examples: [
                { input: 'prices = [10, 20, 30, 40], budget = 50', output: '2' },
                { input: 'prices = [10, 10], budget = 20', output: '1' }
            ],
            testCases: [
                { input: 'prices = [10, 20, 30, 40], budget = 50', judgeInput: '4\n10 20 30 40\n50', output: '2' },
                { input: 'prices = [10, 10], budget = 20', judgeInput: '2\n10 10\n20', output: '1' },
                { input: 'prices = [5, 10, 15], budget = 20', judgeInput: '3\n5 10 15\n20', output: '1' },
                { input: 'prices = [1, 2, 3, 4, 5], budget = 10', judgeInput: '5\n1 2 3 4 5\n10', output: '3' },
                { input: 'prices = [10, 20, 30], budget = 5', judgeInput: '3\n10 20 30\n5', output: '0' },
                { input: 'prices = [2, 2, 2, 2], budget = 4', judgeInput: '4\n2 2 2 2\n4', output: '6' },
                { input: 'prices = [1, 1, 1, 1, 1], budget = 3', judgeInput: '5\n1 1 1 1 1\n3', output: '10' },
                { input: 'prices = [100], budget = 100', judgeInput: '1\n100\n100', output: '1' },
                { input: 'prices = [50, 50], budget = 100', judgeInput: '2\n50 50\n100', output: '1' },
                { input: 'prices = [10, 20, 30, 40, 50], budget = 100', judgeInput: '5\n10 20 30 40 50\n100', output: '3' },
                { input: 'prices = [1, 2, 5], budget = 10', judgeInput: '3\n1 2 5\n10', output: '0' },
                { input: 'prices = [10, 20, 30, 40], budget = 60', judgeInput: '4\n10 20 30 40\n60', output: '2' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} prices
 * @param {number} budget
 * @return {number}
 */
function countCombinations(prices, budget) {
    // Your code here
}`,
                python: `def count_combinations(prices, budget):
    """
    :type prices: List[int]
    :type budget: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int countCombinations(vector<int>& prices, int budget) {
    // Your code here
}`,
                java: `public class Solution {
    public int countCombinations(int[] prices, int budget) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const prices = lines[1].split(' ').map(Number);\n    const budget = parseInt(lines[2]);\n    console.log(countCombinations(prices, budget));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nprices = list(map(int, lines[1].split()))\nbudget = int(lines[2])\nprint(count_combinations(prices, budget))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countCombinations(vector<int>& prices, int budget);\nint main() {\n    int n, budget;\n    cin >> n;\n    vector<int> prices(n);\n    for(int i=0; i<n; ++i) cin >> prices[i];\n    cin >> budget;\n    cout << countCombinations(prices, budget) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] prices = new int[n];\n        for(int i=0; i<n; i++) prices[i] = sc.nextInt();\n        int budget = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.countCombinations(prices, budget));\n    }\n}`
            }
        }, {
            id: 'inventory-forecast',
            title: 'Inventory Demand Forecasting',
            difficulty: 'Medium',
            description: `Predict inventory needs based on sales history.

You are given:
- sales: List of daily sales for last N days
- window: Size of moving average window

Goal: Calculate the moving average of sales for the next day.
Actually, let's make it: Return the list of moving averages for each valid window ending at day i.
Input: [1, 2, 3, 4], window=2.
Output: [1.5, 2.5, 3.5].
Return list of floats rounded to 2 decimals.

Input Format:
- sales: List of integers
- window: Integer

Output Format:
- Return a list of floats

Constraints:
- 1 <= window <= sales.length <= 1000`,
            examples: [
                { input: 'sales = [1, 2, 3, 4], window = 2', output: '[1.50,2.50,3.50]' },
                { input: 'sales = [10, 20, 30], window = 3', output: '[20.00]' }
            ],
            testCases: [
                { input: 'sales = [1, 2, 3, 4], window = 2', judgeInput: '4\n1 2 3 4\n2', output: '[1.50,2.50,3.50]' },
                { input: 'sales = [10, 20, 30], window = 3', judgeInput: '3\n10 20 30\n3', output: '[20.00]' },
                { input: 'sales = [5, 5, 5, 5], window = 2', judgeInput: '4\n5 5 5 5\n2', output: '[5.00,5.00,5.00]' },
                { input: 'sales = [1, 3, 5, 7, 9], window = 3', judgeInput: '5\n1 3 5 7 9\n3', output: '[3.00,5.00,7.00]' },
                { input: 'sales = [10, 10], window = 1', judgeInput: '2\n10 10\n1', output: '[10.00,10.00]' },
                { input: 'sales = [1, 2, 3, 4, 5], window = 5', judgeInput: '5\n1 2 3 4 5\n5', output: '[3.00]' },
                { input: 'sales = [100, 200, 300, 400], window = 2', judgeInput: '4\n100 200 300 400\n2', output: '[150.00,250.00,350.00]' },
                { input: 'sales = [1, 0, 1, 0], window = 2', judgeInput: '4\n1 0 1 0\n2', output: '[0.50,0.50,0.50]' },
                { input: 'sales = [10, 20, 10, 20], window = 4', judgeInput: '4\n10 20 10 20\n4', output: '[15.00]' },
                { input: 'sales = [1, 2, 3], window = 1', judgeInput: '3\n1 2 3\n1', output: '[1.00,2.00,3.00]' },
                { input: 'sales = [5, 10, 15, 20], window = 2', judgeInput: '4\n5 10 15 20\n2', output: '[7.50,12.50,17.50]' },
                { input: 'sales = [2, 4, 6, 8, 10], window = 3', judgeInput: '5\n2 4 6 8 10\n3', output: '[4.00,6.00,8.00]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} sales
 * @param {number} window
 * @return {number[]}
 */
function movingAverage(sales, window) {
    // Your code here
}`,
                python: `def moving_average(sales, window):
    """
    :type sales: List[int]
    :type window: int
    :rtype: List[float]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<double> movingAverage(vector<int>& sales, int window) {
    // Your code here
}`,
                java: `public class Solution {
    public double[] movingAverage(int[] sales, int window) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const sales = lines[1].split(' ').map(Number);
    const window = parseInt(lines[2]);
    console.log(JSON.stringify(movingAverage(sales, window).map(n => parseFloat(n.toFixed(2)))));
});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nsales = list(map(int, lines[1].split()))\nwindow = int(lines[2])\nres = moving_average(sales, window)\nprint(json.dumps([float(f'{x:.2f}') for x in res]))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\nvector<double> movingAverage(vector<int>& sales, int window);\nint main() {\n    int n, window;\n    cin >> n;\n    vector<int> sales(n);\n    for(int i=0; i<n; ++i) cin >> sales[i];\n    cin >> window;\n    vector<double> res = movingAverage(sales, window);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << fixed << setprecision(2) << res[i];\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] sales = new int[n];\n        for(int i=0; i<n; i++) sales[i] = sc.nextInt();\n        int window = sc.nextInt();\n        Solution sol = new Solution();\n        double[] res = sol.movingAverage(sales, window);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.printf("%.2f", res[i]);\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
