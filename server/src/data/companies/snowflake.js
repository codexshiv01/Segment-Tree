export const snowflakeData = {
    id: 'snowflake',
    name: 'Snowflake',
    logo: 'https://logo.clearbit.com/snowflake.com',
    description: 'Practice real Snowflake Online Assessment questions.',
    assessments: [{
        id: 'snowflake-oa-1',
        title: 'Snowflake OA-1',
        duration: 90,
        problems: [{
            id: 'data-warehouse-query',
            title: 'Data Warehouse Query Optimization',
            difficulty: 'Medium',
            description: `Snowflake needs to optimize query execution on distributed clusters. Given a set of queries and their resource requirements, assign them to clusters to minimize total execution time.

You are given:
- queries: A list of execution times.
- clusters: The number of available clusters.

Goal: Distribute queries to clusters such that the maximum load on any cluster is minimized. Return the minimum possible maximum load.

Input Format:
- queries: List of integers
- clusters: Integer

Output Format:
- Return an integer.

Constraints:
- 1 <= queries.length <= 1000
- 1 <= clusters <= 50
- 1 <= time <= 1000`,
            examples: [
                { input: 'queries = [10,20,30,40,50], clusters = 2', output: '80' },
                { input: 'queries = [10,10,10], clusters = 3', output: '10' }
            ],
            testCases: [
                { input: 'queries = [10,20,30,40,50], clusters = 2', judgeInput: '5\n10 20 30 40 50\n2', output: '80' },
                { input: 'queries = [10,10,10], clusters = 3', judgeInput: '3\n10 10 10\n3', output: '10' },
                { input: 'queries = [100,100], clusters = 2', judgeInput: '2\n100 100\n2', output: '100' },
                { input: 'queries = [5,5,5,5,5], clusters = 2', judgeInput: '5\n5 5 5 5 5\n2', output: '15' },
                { input: 'queries = [1,2,3,4,5,6,7,8,9], clusters = 3', judgeInput: '9\n1 2 3 4 5 6 7 8 9\n3', output: '15' },
                { input: 'queries = [10,20], clusters = 1', judgeInput: '2\n10 20\n1', output: '30' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} queries
 * @param {number} clusters
 * @return {number}
 */
function minQueryLoad(queries, clusters) {
    // Your code here
}`,
                python: `def min_query_load(queries, clusters):
    """
    :type queries: List[int]
    :type clusters: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minQueryLoad(vector<int>& queries, int clusters) {
    // Your code here
}`,
                java: `public class Solution {
    public int minQueryLoad(int[] queries, int clusters) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const queries = lines[1].split(' ').map(Number);\n    const clusters = parseInt(lines[2]);\n    console.log(minQueryLoad(queries, clusters));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nqueries = list(map(int, lines[1].split()))\nclusters = int(lines[2])\nprint(min_query_load(queries, clusters))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minQueryLoad(vector<int>& queries, int clusters);\nint main() {\n    int n, clusters;\n    cin >> n;\n    vector<int> queries(n);\n    for(int i=0; i<n; ++i) cin >> queries[i];\n    cin >> clusters;\n    cout << minQueryLoad(queries, clusters) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] queries = new int[n];\n        for(int i=0; i<n; i++) queries[i] = sc.nextInt();\n        int clusters = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minQueryLoad(queries, clusters));\n    }\n}`
            }
        }, {
            id: 'string-compression',
            title: 'Columnar Data Compression',
            difficulty: 'Hard',
            description: `Snowflake stores data in columnar format. To save space, implement a compression algorithm that replaces repeated consecutive values with a count.

You are given:
- data: A list of strings.

Goal: Return the compressed list of strings where consecutive duplicates are replaced by "value" and "count".

Input Format:
- data: List of strings

Output Format:
- Return a list of strings.

Constraints:
- 1 <= data.length <= 1000
- 1 <= string.length <= 100`,
            examples: [
                { input: 'data = ["A","A","B","C","C","C"]', output: '["A","2","B","1","C","3"]' },
                { input: 'data = ["X","Y","Z"]', output: '["X","1","Y","1","Z","1"]' }
            ],
            testCases: [
                { input: 'data = ["A","A","B","C","C","C"]', judgeInput: '6\nA A B C C C', output: '["A","2","B","1","C","3"]' },
                { input: 'data = ["X","Y","Z"]', judgeInput: '3\nX Y Z', output: '["X","1","Y","1","Z","1"]' },
                { input: 'data = ["A","A","A"]', judgeInput: '3\nA A A', output: '["A","3"]' },
                { input: 'data = ["A","B","A"]', judgeInput: '3\nA B A', output: '["A","1","B","1","A","1"]' },
                { input: 'data = ["A"]', judgeInput: '1\nA', output: '["A","1"]' },
                { input: 'data = ["A","A","B","B"]', judgeInput: '4\nA A B B', output: '["A","2","B","2"]' }
            ],
            starterCode: {
                javascript: `/**
 * @param {string[]} data
 * @return {string[]}
 */
function compressData(data) {
    // Your code here
}`,
                python: `def compress_data(data):
    """
    :type data: List[str]
    :rtype: List[str]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
#include <string>
using namespace std;

vector<string> compressData(vector<string>& data) {
    // Your code here
}`,
                java: `public class Solution {
    public String[] compressData(String[] data) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const data = lines[1].split(' ');\n    console.log(JSON.stringify(compressData(data)));\n});`,
                python: `import sys\nimport json\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ndata = lines[1].split()\nprint(json.dumps(compress_data(data)))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nvector<string> compressData(vector<string>& data);\nint main() {\n    int n;\n    cin >> n;\n    vector<string> data(n);\n    for(int i=0; i<n; ++i) cin >> data[i];\n    vector<string> res = compressData(data);\n    cout << "[";\n    for(int i=0; i<res.size(); ++i) {\n        cout << "\\"" << res[i] << "\\"";\n        if(i < res.size()-1) cout << ",";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] data = new String[n];\n        for(int i=0; i<n; i++) data[i] = sc.next();\n        Solution sol = new Solution();\n        String[] res = sol.compressData(data);\n        System.out.print("[");\n        for(int i=0; i<res.length; i++) {\n            System.out.print("\\"" + res[i] + "\\"");\n            if(i < res.length-1) System.out.print(",");\n        }\n        System.out.println("]");\n    }\n}`
            }
        }]
    }]
};
