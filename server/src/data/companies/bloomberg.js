export const bloombergData = {
    id: 'bloomberg',
    name: 'Bloomberg',
    logo: 'https://logo.clearbit.com/bloomberg.com',
    description: 'Practice real Bloomberg Online Assessment questions.',
    assessments: [{
        id: 'bloomberg-oa-1',
        title: 'Bloomberg OA-1',
        duration: 90,
        problems: [{
            id: 'market-data-aggregator',
            title: 'Real-time Market Data Aggregator',
            difficulty: 'Hard',
            description: `Aggregate market data from multiple sources with conflict resolution.

You are given:
- quotes: List of [source_id, symbol, price, timestamp]

Goal: For each symbol, use the most recent quote (highest timestamp). Return aggregated data as list of [symbol, price] sorted by symbol.

Input Format:
- quotes: List of lists [source, symbol, price, time]

Output Format:
- Return list of lists [[symbol, price]] sorted by symbol

Constraints:
- 1 <= quotes.length <= 1000
- 1 <= source_id <= 10
- 1 <= symbol <= 100
- 1.0 <= price <= 100000.0
- 1 <= timestamp <= 1000000`,
            examples: [
                { input: 'quotes = [[1,10,100.5,1000],[2,10,101.0,1100],[1,20,50.0,900]]', output: '[[10,101.0],[20,50.0]]' },
                { input: 'quotes = [[1,5,250.0,500]]', output: '[[5,250.0]]' }
            ],
            testCases: [
                { input: 'quotes = [[1,10,100.5,1000],[2,10,101.0,1100],[1,20,50.0,900]]', judgeInput: '3\n1 10 100.5 1000\n2 10 101.0 1100\n1 20 50.0 900', output: '[[10,101.0],[20,50.0]]' },
                { input: 'quotes = [[1,5,250.0,500]]', judgeInput: '1\n1 5 250.0 500', output: '[[5,250.0]]' },
                { input: 'quotes = [[1,1,100.0,100],[2,1,105.0,200],[3,1,102.0,150]]', judgeInput: '3\n1 1 100.0 100\n2 1 105.0 200\n3 1 102.0 150', output: '[[1,105.0]]' },
                { input: 'quotes = [[1,15,500.0,1000],[2,20,600.0,2000],[1,25,700.0,3000]]', judgeInput: '3\n1 15 500.0 1000\n2 20 600.0 2000\n1 25 700.0 3000', output: '[[15,500.0],[20,600.0],[25,700.0]]' },
                { input: 'quotes = [[1,7,150.5,5000],[2,7,151.0,5000]]', judgeInput: '2\n1 7 150.5 5000\n2 7 151.0 5000', output: '[[7,151.0]]' },
                { input: 'quotes = [[1,3,75.25,100],[1,3,76.50,200],[1,3,74.00,50]]', judgeInput: '3\n1 3 75.25 100\n1 3 76.50 200\n1 3 74.00 50', output: '[[3,76.5]]' },
                { input: 'quotes = [[1,12,1200.0,10000],[2,13,1300.0,11000],[3,14,1400.0,12000]]', judgeInput: '3\n1 12 1200.0 10000\n2 13 1300.0 11000\n3 14 1400.0 12000', output: '[[12,1200.0],[13,1300.0],[14,1400.0]]' },
                { input: 'quotes = [[1,8,88.8,888],[2,8,89.9,999],[1,8,90.0,1000]]', judgeInput: '3\n1 8 88.8 888\n2 8 89.9 999\n1 8 90.0 1000', output: '[[8,90.0]]' },
                { input: 'quotes = [[1,50,5000.0,50000],[2,51,5100.0,51000]]', judgeInput: '2\n1 50 5000.0 50000\n2 51 5100.0 51000', output: '[[50,5000.0],[51,5100.0]]' },
                { input: 'quotes = [[5,2,200.0,2000],[3,2,205.0,2500],[1,2,210.0,2200]]', judgeInput: '3\n5 2 200.0 2000\n3 2 205.0 2500\n1 2 210.0 2200', output: '[[2,205.0]]' },
                { input: 'quotes = [[1,30,300.0,3000],[2,40,400.0,4000],[1,30,310.0,3500]]', judgeInput: '3\n1 30 300.0 3000\n2 40 400.0 4000\n1 30 310.0 3500', output: '[[30,310.0],[40,400.0]]' },
                { input: 'quotes = [[1,9,99.99,9999],[2,9,100.01,10000]]', judgeInput: '2\n1 9 99.99 9999\n2 9 100.01 10000', output: '[[9,100.01]]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} quotes
 * @return {number[][]}
 */
function aggregateQuotes(quotes) {
    // Your code here
}`,
                python: `def aggregate_quotes(quotes):
    """
    :type quotes: List[List]
    :rtype: List[List]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<vector<double>> aggregateQuotes(vector<vector<double>>& quotes) {
    // Your code here
}`,
                java: `public class Solution {
    public double[][] aggregateQuotes(double[][] quotes) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const quotes = [];\n    for(let i=1; i<=n; i++) {\n        const parts = lines[i].split(' ');\n        quotes.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2]), parseInt(parts[3])]);\n    }\n    const result = aggregateQuotes(quotes);\n    console.log(JSON.stringify(result));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nquotes = []\nfor i in range(1, n+1):\n    parts = lines[i].split()\n    quotes.append([int(parts[0]), int(parts[1]), float(parts[2]), int(parts[3])])\nprint(json.dumps(aggregate_quotes(quotes)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\nvector<vector<double>> aggregateQuotes(vector<vector<double>>& quotes);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<double>> quotes(n, vector<double>(4));\n    for(int i=0; i<n; ++i) cin >> quotes[i][0] >> quotes[i][1] >> quotes[i][2] >> quotes[i][3];\n    vector<vector<double>> res = aggregateQuotes(quotes);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "[" << (int)res[i][0] << "," << fixed << setprecision(1) << res[i][1] << "]";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[][] quotes = new double[n][4];\n        for(int i=0; i<n; i++) {\n            quotes[i][0] = sc.nextDouble();\n            quotes[i][1] = sc.nextDouble();\n            quotes[i][2] = sc.nextDouble();\n            quotes[i][3] = sc.nextDouble();\n        }\n        Solution sol = new Solution();\n        double[][] res = sol.aggregateQuotes(quotes);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("[" + (int)res[i][0] + "," + res[i][1] + "]");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }, {
            id: 'news-sentiment',
            title: 'News Sentiment Analyzer',
            difficulty: 'Medium',
            description: `Analyze news sentiment and calculate aggregate sentiment score.

You are given:
- news: List of [article_id, symbol, sentiment_score] where score: -100 to +100
- symbol: Target symbol to analyze

Goal: Calculate average sentiment for the target symbol. Return average rounded to 2 decimals, or 0 if no articles found.

Input Format:
- news: List of lists [id, sym, score]
- symbol: Integer

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= news.length <= 1000
- 1 <= symbol <= 100
- -100 <= sentiment_score <= 100`,
            examples: [
                { input: 'news = [[1,10,50],[2,10,60],[3,20,40]], symbol = 10', output: '55.00' },
                { input: 'news = [[1,5,30]], symbol = 10', output: '0.00' }
            ],
            testCases: [
                { input: 'news = [[1,10,50],[2,10,60],[3,20,40]], symbol = 10', judgeInput: '3\n1 10 50\n2 10 60\n3 20 40\n10', output: '55.00' },
                { input: 'news = [[1,5,30]], symbol = 10', judgeInput: '1\n1 5 30\n10', output: '0.00' },
                { input: 'news = [[1,15,75],[2,15,85],[3,15,65]], symbol = 15', judgeInput: '3\n1 15 75\n2 15 85\n3 15 65\n15', output: '75.00' },
                { input: 'news = [[1,7,-50],[2,7,-30],[3,7,-40]], symbol = 7', judgeInput: '3\n1 7 -50\n2 7 -30\n3 7 -40\n7', output: '-40.00' },
                { input: 'news = [[1,20,0],[2,20,0],[3,20,0]], symbol = 20', judgeInput: '3\n1 20 0\n2 20 0\n3 20 0\n20', output: '0.00' },
                { input: 'news = [[1,3,100]], symbol = 3', judgeInput: '1\n1 3 100\n3', output: '100.00' },
                { input: 'news = [[1,25,30],[2,25,40],[3,25,50],[4,25,60]], symbol = 25', judgeInput: '4\n1 25 30\n2 25 40\n3 25 50\n4 25 60\n25', output: '45.00' },
                { input: 'news = [[1,12,-100],[2,12,100]], symbol = 12', judgeInput: '2\n1 12 -100\n2 12 100\n12', output: '0.00' },
                { input: 'news = [[1,8,20],[2,9,30],[3,10,40]], symbol =  5', judgeInput: '3\n1 8 20\n2 9 30\n3 10 40\n5', output: '0.00' },
                { input: 'news = [[1,50,80],[2,50,70],[3,50,90],[4,50,85],[5,50,75]], symbol = 50', judgeInput: '5\n1 50 80\n2 50 70\n3 50 90\n4 50 85\n5 50 75\n50', output: '80.00' },
                { input: 'news = [[1,1,-25],[2,1,-35],[3,1,-15]], symbol = 1', judgeInput: '3\n1 1 -25\n2 1 -35\n3 1 -15\n1', output: '-25.00' },
                { input: 'news = [[1,99,55],[2,99,65]], symbol = 99', judgeInput: '2\n1 99 55\n2 99 65\n99', output: '60.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} news
 * @param {number} symbol
 * @return {number}
 */
function avgSentiment(news, symbol) {
    // Your code here
}`,
                python: `def avg_sentiment(news, symbol):
    """
    :type news: List[List[int]]
    :type symbol: int
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double avgSentiment(vector<vector<int>>& news, int symbol) {
    // Your code here
}`,
                java: `public class Solution {
    public double avgSentiment(int[][] news, int symbol) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const news = [];\n    for(let i=1; i<=n; i++) news.push(lines[i].split(' ').map(Number));\n    const symbol = parseInt(lines[n+1]);\n    console.log(avgSentiment(news, symbol).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nnews = []\nfor i in range(1, n+1):\n    news.append(list(map(int, lines[i].split())))\nsymbol = int(lines[n+1])\nprint(f'{avg_sentiment(news, symbol):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble avgSentiment(vector<vector<int>>& news, int symbol);\nint main() {\n    int n, symbol;\n    cin >> n;\n    vector<vector<int>> news(n, vector<int>(3));\n    for(int i=0; i<n; ++i) cin >> news[i][0] >> news[i][1] >> news[i][2];\n    cin >> symbol;\n    cout << fixed << setprecision(2) << avgSentiment(news, symbol) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] news = new int[n][3];\n        for(int i=0; i<n; i++) {\n            news[i][0] = sc.nextInt();\n            news[i][1] = sc.nextInt();\n            news[i][2] = sc.nextInt();\n        }\n        int symbol = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.avgSentiment(news, symbol));\n    }\n}`
            }
        }]
    }]
};
