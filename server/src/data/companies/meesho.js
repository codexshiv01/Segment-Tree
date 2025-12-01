export const meeshoData = {
    id: 'meesho',
    name: 'Meesho',
    logo: 'https://logo.clearbit.com/meesho.com',
    description: 'Practice real Meesho Online Assessment questions.',
    assessments: [{
        id: 'meesho-oa-1',
        title: 'Meesho OA-1',
        duration: 90,
        problems: [{
            id: 'reseller-network',
            title: 'Reseller Network Commission',
            difficulty: 'Medium',
            description: `Calculate total commission in a reseller tree.

You are given:
- sales: List of [reseller_id, sale_amount]
- network: List of [reseller_id, referrer_id] (referrer_id -1 is root)
- commission_rate: Percentage (e.g., 10 means 10%)

Goal: When a reseller makes a sale, they get commission. Their referrer gets 10% of that commission, and so on up the chain.
Calculate total commission distributed for all sales.
Note: Commission is additive.
Example: Sale 100, Rate 10%.
- Reseller gets 10.
- Referrer gets 1 (10% of 10).
- Next gets 0.1 (10% of 1).
Stop when amount < 0.01.
Return total distributed amount rounded to 2 decimals.

Input Format:
- sales: List of lists [id, amount]
- network: List of lists [id, referrer]
- rate: Float

Output Format:
- Return a float (total commission)

Constraints:
- 1 <= sales.length <= 1000
- 1 <= network.length <= 1000`,
            examples: [
                { input: 'sales = [[2,100]], network = [[1,-1],[2,1]], rate = 10', output: '11.00' },
                { input: 'sales = [[1,100]], network = [[1,-1]], rate = 10', output: '10.00' }
            ],
            testCases: [
                { input: 'sales = [[2,100]], network = [[1,-1],[2,1]], rate = 10', judgeInput: '1\n2 100\n2\n1 -1\n2 1\n10', output: '11.00' },
                { input: 'sales = [[1,100]], network = [[1,-1]], rate = 10', judgeInput: '1\n1 100\n1\n1 -1\n10', output: '10.00' },
                { input: 'sales = [[3,1000]], network = [[1,-1],[2,1],[3,2]], rate = 20', judgeInput: '1\n3 1000\n3\n1 -1\n2 1\n3 2\n20', output: '248.00' },
                { input: 'sales = [[2,100],[3,100]], network = [[1,-1],[2,1],[3,1]], rate = 10', judgeInput: '2\n2 100\n3 100\n3\n1 -1\n2 1\n3 1\n10', output: '22.00' },
                { input: 'sales = [[1,100]], network = [[1,-1]], rate = 50', judgeInput: '1\n1 100\n1\n1 -1\n50', output: '50.00' },
                { input: 'sales = [[2,100]], network = [[1,-1],[2,1]], rate = 50', judgeInput: '1\n2 100\n2\n1 -1\n2 1\n50', output: '75.00' },
                { input: 'sales = [[1,10]], network = [[1,-1]], rate = 10', judgeInput: '1\n1 10\n1\n1 -1\n10', output: '1.00' },
                { input: 'sales = [[2,10000]], network = [[1,-1],[2,1]], rate = 1', judgeInput: '1\n2 10000\n2\n1 -1\n2 1\n1', output: '101.00' },
                { input: 'sales = [[4,1000]], network = [[1,-1],[2,1],[3,2],[4,3]], rate = 10', judgeInput: '1\n4 1000\n4\n1 -1\n2 1\n3 2\n4 3\n10', output: '111.10' },
                { input: 'sales = [[1,100],[2,200]], network = [[1,-1],[2,1]], rate = 10', judgeInput: '2\n1 100\n2 200\n2\n1 -1\n2 1\n10', output: '32.00' },
                { input: 'sales = [[1,100]], network = [[1,-1]], rate = 0', judgeInput: '1\n1 100\n1\n1 -1\n0', output: '0.00' },
                { input: 'sales = [[2,100]], network = [[1,-1],[2,1]], rate = 5', judgeInput: '1\n2 100\n2\n1 -1\n2 1\n5', output: '5.25' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} sales
 * @param {number[][]} network
 * @param {number} rate
 * @return {number}
 */
function totalCommission(sales, network, rate) {
    // Your code here
}`,
                python: `def total_commission(sales, network, rate):
    """
    :type sales: List[List[int]]
    :type network: List[List[int]]
    :type rate: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double totalCommission(vector<vector<int>>& sales, vector<vector<int>>& network, double rate) {
    // Your code here
}`,
                java: `public class Solution {
    public double totalCommission(int[][] sales, int[][] network, double rate) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const sales = [];\n    for(let i=1; i<=n; i++) sales.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const network = [];\n    for(let i=n+2; i<n+2+m; i++) network.push(lines[i].split(' ').map(Number));\n    const rate = parseFloat(lines[n+2+m]);\n    console.log(totalCommission(sales, network, rate).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nsales = []\nfor i in range(1, n+1):\n    sales.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\nnetwork = []\nfor i in range(n+2, n+2+m):\n    network.append(list(map(int, lines[i].split())))\nrate = float(lines[n+2+m])\nprint(f'{total_commission(sales, network, rate):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble totalCommission(vector<vector<int>>& sales, vector<vector<int>>& network, double rate);\nint main() {\n    int n, m;\n    double rate;\n    cin >> n;\n    vector<vector<int>> sales(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> sales[i][0] >> sales[i][1];\n    cin >> m;\n    vector<vector<int>> network(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> network[i][0] >> network[i][1];\n    cin >> rate;\n    cout << fixed << setprecision(2) << totalCommission(sales, network, rate) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] sales = new int[n][2];\n        for(int i=0; i<n; i++) {\n            sales[i][0] = sc.nextInt();\n            sales[i][1] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] network = new int[m][2];\n        for(int i=0; i<m; i++) {\n            network[i][0] = sc.nextInt();\n            network[i][1] = sc.nextInt();\n        }\n        double rate = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.totalCommission(sales, network, rate));\n    }\n}`
            }
        }, {
            id: 'catalog-search',
            title: 'Catalog Search Optimization',
            difficulty: 'Medium',
            description: `Find products matching a search query with typos.

You are given:
- products: List of product names
- query: Search query

Goal: Return the product name that is "closest" to the query.
Closeness is defined by minimum Levenshtein distance.
If multiple have same distance, return the lexicographically smallest one.

Input Format:
- products: List of strings
- query: String

Output Format:
- Return a string (best match)

Constraints:
- 1 <= products.length <= 100
- 1 <= name.length <= 20`,
            examples: [
                { input: 'products = ["saree", "kurti", "shirt"], query = "sari"', output: 'saree' },
                { input: 'products = ["apple", "apply"], query = "appl"', output: 'apple' }
            ],
            testCases: [
                { input: 'products = ["saree", "kurti", "shirt"], query = "sari"', judgeInput: '3\nsaree\nkurti\nshirt\nsari', output: 'saree' },
                { input: 'products = ["apple", "apply"], query = "appl"', judgeInput: '2\napple\napply\nappl', output: 'apple' },
                { input: 'products = ["abc", "abd"], query = "ab"', judgeInput: '2\nabc\nabd\nab', output: 'abc' },
                { input: 'products = ["cat", "bat", "rat"], query = "mat"', judgeInput: '3\ncat\nbat\nrat\nmat', output: 'bat' },
                { input: 'products = ["hello", "hallo"], query = "hullo"', judgeInput: '2\nhello\nhallo\nhullo', output: 'hallo' },
                { input: 'products = ["test", "toast"], query = "tst"', judgeInput: '2\ntest\ntoast\ntst', output: 'test' },
                { input: 'products = ["a", "b"], query = "c"', judgeInput: '2\na\nb\nc', output: 'a' },
                { input: 'products = ["same", "same"], query = "same"', judgeInput: '2\nsame\nsame\nsame', output: 'same' },
                { input: 'products = ["longstring", "short"], query = "long"', judgeInput: '2\nlongstring\nshort\nlong', output: 'longstring' },
                { input: 'products = ["kitten", "sitting"], query = "fitting"', judgeInput: '2\nkitten\nsitting\nfitting', output: 'sitting' },
                { input: 'products = ["book", "back"], query = "beak"', judgeInput: '2\nbook\nback\nbeak', output: 'back' },
                { input: 'products = ["xyz", "pqr"], query = "abc"', judgeInput: '2\nxyz\npqr\nabc', output: 'pqr' }
            ],
            starterCode: {
                javascript: `/**
 * @param {string[]} products
 * @param {string} query
 * @return {string}
 */
function searchProduct(products, query) {
    // Your code here
}`,
                python: `def search_product(products, query):
    """
    :type products: List[str]
    :type query: str
    :rtype: str
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
#include <string>
using namespace std;

string searchProduct(vector<string>& products, string query) {
    // Your code here
}`,
                java: `public class Solution {
    public String searchProduct(String[] products, String query) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const products = [];\n    for(let i=1; i<=n; i++) products.push(lines[i]);\n    const query = lines[n+1];\n    console.log(searchProduct(products, query));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nproducts = []\nfor i in range(1, n+1):\n    products.append(lines[i])\nquery = lines[n+1]\nprint(search_product(products, query))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nstring searchProduct(vector<string>& products, string query);\nint main() {\n    int n;\n    cin >> n;\n    vector<string> products(n);\n    for(int i=0; i<n; ++i) cin >> products[i];\n    string query;\n    cin >> query;\n    cout << searchProduct(products, query) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] products = new String[n];\n        for(int i=0; i<n; i++) products[i] = sc.next();\n        String query = sc.next();\n        Solution sol = new Solution();\n        System.out.println(sol.searchProduct(products, query));\n    }\n}`
            }
        }]
    }]
};
