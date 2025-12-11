export const amazonData = {
    id: 'amazon',
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png',
    description: 'Practice real Amazon Online Assessment questions.',
    assessments: [
        {
            id: 'amazon-oa-1',
            title: 'Amazon OA-1',
            duration: 90,
            problems: [
                {
                    id: 'transaction-logs',
                    title: 'Fraud Detection System',
                    difficulty: 'Medium',
                    description: `Amazon's Payment Security team is building a system to detect suspicious activity. They have a list of transaction logs, where each log entry contains a sender ID, a recipient ID, and an amount.

The team is interested in identifying users who are highly active. Specifically, they want to find all users who have been part of at least 'threshold' number of transactions, either as a sender or a recipient.

Return a list of these user IDs, sorted numerically.

Note: If a user sends money to themselves, it counts as 1 transaction for that user.

Constraints:
- 1 <= logs.length <= 10^4
- 1 <= threshold <= logs.length`,
                    examples: [
                        {
                            input: 'logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"], threshold = 2',
                            output: '["88", "99"]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"], threshold = 2',
                            judgeInput: '4\n88 99 200\n88 99 300\n99 32 100\n12 12 15\n2',
                            output: '["88","99"]'
                        },
                        {
                            input: 'logs = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"], threshold = 2',
                            judgeInput: '4\n1 2 50\n1 7 70\n1 3 20\n2 2 17\n2',
                            output: '["1","2"]'
                        },
                        {
                            input: 'logs = ["1 2 50", "2 3 70", "3 1 20"], threshold = 2',
                            judgeInput: '3\n1 2 50\n2 3 70\n3 1 20\n2',
                            output: '["1","2","3"]'
                        },
                        {
                            input: 'logs = ["1 2 50"], threshold = 1',
                            judgeInput: '1\n1 2 50\n1',
                            output: '["1","2"]'
                        },
                        {
                            input: 'logs = ["9 9 50"], threshold = 1',
                            judgeInput: '1\n9 9 50\n1',
                            output: '["9"]'
                        },
                        {
                            input: 'logs = ["1 2 10", "1 2 10", "1 2 10"], threshold = 3',
                            judgeInput: '3\n1 2 10\n1 2 10\n1 2 10\n3',
                            output: '["1","2"]'
                        },
                        {
                            input: 'logs = ["1 2 10", "3 4 10", "5 6 10"], threshold = 2',
                            judgeInput: '3\n1 2 10\n3 4 10\n5 6 10\n2',
                            output: '[]'
                        },
                        {
                            input: 'logs = ["10 20 5", "10 30 5", "20 30 5", "30 40 5"], threshold = 2',
                            judgeInput: '4\n10 20 5\n10 30 5\n20 30 5\n30 40 5\n2',
                            output: '["10","20","30"]'
                        },
                        {
                            input: 'logs = ["1 2 100"], threshold = 2',
                            judgeInput: '1\n1 2 100\n2',
                            output: '[]'
                        },
                        {
                            input: 'logs = ["5 2 10", "5 3 10", "5 4 10", "2 3 10", "3 4 10"], threshold = 3',
                            judgeInput: '5\n5 2 10\n5 3 10\n5 4 10\n2 3 10\n3 4 10\n3',
                            output: '["3","5"]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string[]} logs
 * @param {number} threshold
 * @return {string[]}
 */
function processLogs(logs, threshold) {
    // Your code here
}`,
                        python: `def process_logs(logs, threshold):
    """
    :type logs: List[str]
    :type threshold: int
    :rtype: List[str]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<string> processLogs(vector<string>& logs, int threshold) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public List<String> processLogs(List<String> logs, int threshold) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const logs = lines.slice(1, n + 1);
    const threshold = parseInt(lines[n + 1]);
    console.log(JSON.stringify(processLogs(logs, threshold)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
logs = lines[1:n+1]
threshold = int(lines[n+1])
print(json.dumps(process_logs(logs, threshold)))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <map>

using namespace std;

// Solution placeholder
vector<string> processLogs(vector<string>& logs, int threshold);

int main() {
    string line;
    getline(cin, line);
    int n = stoi(line);
    vector<string> logs(n);
    for(int i=0; i<n; ++i) getline(cin, logs[i]);
    getline(cin, line);
    int threshold = stoi(line);
    
    vector<string> res = processLogs(logs, threshold);
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "\"" << res[i] << "\"";
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n = Integer.parseInt(sc.nextLine().trim());
        List<String> logs = new ArrayList<>();
        for(int i=0; i<n; i++) logs.add(sc.nextLine());
        int threshold = Integer.parseInt(sc.nextLine().trim());
        
        Solution sol = new Solution();
        List<String> res = sol.processLogs(logs, threshold);
        
        System.out.print("[");
        for(int i=0; i<res.size(); i++) {
            System.out.print("\"" + res.get(i) + "\"");
            if(i < res.size()-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                },
                {
                    id: 'optimal-utilization',
                    title: 'Prime Air Route Planning',
                    difficulty: 'Medium',
                    description: `Amazon Prime Air is optimizing its drone flight paths. Each drone has a maximum travel distance capacity.

You are given two lists of route distances:
- 'forward': Distances for the outbound leg.
- 'return': Distances for the inbound leg.

You are also given a 'maxDist', the maximum total distance a drone can travel.

Find all pairs of (forward_route_index, return_route_index) such that the total distance (forward + return) is less than or equal to 'maxDist' and is as close to 'maxDist' as possible.

Return a list of these index pairs. If multiple pairs yield the same optimal sum, return all of them.

Constraints:
- 1 <= forward.length, return.length <= 10^4
- 1 <= maxDist <= 10^9`,
                    examples: [
                        {
                            input: 'forward = [1, 2, 3], return = [2, 4], maxDist = 5',
                            output: '[[1, 1], [2, 0]]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'forward = [1, 2, 3], return = [2, 4], maxDist = 5',
                            judgeInput: '3\n1 2 3\n2\n2 4\n5',
                            output: '[[1,1],[2,0]]'
                        },
                        {
                            input: 'forward = [10, 20, 30], return = [40, 50], maxDist = 65',
                            judgeInput: '3\n10 20 30\n2\n40 50\n65',
                            output: '[[1,1],[2,0]]'
                        },
                        {
                            input: 'forward = [1, 4, 6, 8], return = [1, 2, 3], maxDist = 12',
                            judgeInput: '4\n1 4 6 8\n3\n1 2 3\n12',
                            output: '[[2,2],[3,1]]'
                        },
                        {
                            input: 'forward = [1, 4, 6, 8], return = [1, 2, 3], maxDist = 15',
                            judgeInput: '4\n1 4 6 8\n3\n1 2 3\n15',
                            output: '[[3,2]]'
                        },
                        {
                            input: 'forward = [10], return = [20], maxDist = 30',
                            judgeInput: '1\n10\n1\n20\n30',
                            output: '[[0,0]]'
                        },
                        {
                            input: 'forward = [10], return = [20], maxDist = 20',
                            judgeInput: '1\n10\n1\n20\n20',
                            output: '[]'
                        },
                        {
                            input: 'forward = [1, 2, 3], return = [1, 2, 3], maxDist = 100',
                            judgeInput: '3\n1 2 3\n3\n1 2 3\n100',
                            output: '[[2,2]]'
                        },
                        {
                            input: 'forward = [5, 10], return = [5, 10], maxDist = 20',
                            judgeInput: '2\n5 10\n2\n5 10\n20',
                            output: '[[1,1]]'
                        },
                        {
                            input: 'forward = [1, 2, 3], return = [4, 5, 6], maxDist = 1',
                            judgeInput: '3\n1 2 3\n3\n4 5 6\n1',
                            output: '[]'
                        },
                        {
                            input: 'forward = [1000], return = [2000], maxDist = 3000',
                            judgeInput: '1\n1000\n1\n2000\n3000',
                            output: '[[0,0]]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} forward
 * @param {number[]} backward
 * @param {number} maxDist
 * @return {number[][]}
 */
function optimizeRoutes(forward, backward, maxDist) {
    // Your code here
}`,
                        python: `def optimize_routes(forward, backward, max_dist):
    """
    :type forward: List[int]
    :type backward: List[int]
    :type max_dist: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<vector<int>> optimizeRoutes(vector<int>& forward, vector<int>& backward, int maxDist) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public List<List<Integer>> optimizeRoutes(int[] forward, int[] backward, int maxDist) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const forward = lines[1].split(' ').map(Number);
    const m = parseInt(lines[2]);
    const backward = lines[3].split(' ').map(Number);
    const maxDist = parseInt(lines[4]);
    console.log(JSON.stringify(optimizeRoutes(forward, backward, maxDist)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
forward = list(map(int, lines[1].split()))
backward = list(map(int, lines[3].split()))
max_dist = int(lines[4])
print(json.dumps(optimize_routes(forward, backward, max_dist)))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> optimizeRoutes(vector<int>& forward, vector<int>& backward, int maxDist);

int main() {
    int n, m, maxDist;
    cin >> n;
    vector<int> forward(n);
    for(int i=0; i<n; ++i) cin >> forward[i];
    cin >> m;
    vector<int> backward(m);
    for(int i=0; i<m; ++i) cin >> backward[i];
    cin >> maxDist;
    
    vector<vector<int>> res = optimizeRoutes(forward, backward, maxDist);
    // Sort for consistent output
    sort(res.begin(), res.end());
    
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "[" << res[i][0] << "," << res[i][1] << "]";
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] forward = new int[n];
        for(int i=0; i<n; i++) forward[i] = sc.nextInt();
        int m = sc.nextInt();
        int[] backward = new int[m];
        for(int i=0; i<m; i++) backward[i] = sc.nextInt();
        int maxDist = sc.nextInt();
        
        Solution sol = new Solution();
        List<List<Integer>> res = sol.optimizeRoutes(forward, backward, maxDist);
        // Sort for consistent output
        res.sort((a, b) -> {
            if(!a.get(0).equals(b.get(0))) return a.get(0) - b.get(0);
            return a.get(1) - b.get(1);
        });
        
        System.out.print("[");
        for(int i=0; i<res.size(); i++) {
            System.out.print("[" + res.get(i).get(0) + "," + res.get(i).get(1) + "]");
            if(i < res.size()-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                }
            ]
        },
        {
            id: 'amazon-oa-2',
            title: 'Amazon OA-2',
            duration: 75,
            problems: [
                {
                    id: 'k-closest',
                    title: 'Nearest Delivery Centers',
                    difficulty: 'Medium',
                    description: `Amazon Logistics wants to find the nearest delivery centers to a customer's location.

Assuming the customer is at the origin (0, 0) on a 2D map, and you are given an array of coordinates for all available delivery centers.

Find the 'k' closest delivery centers to the customer. The distance is calculated using Euclidean distance.

Return the coordinates of these k closest centers.

Constraints:
- 1 <= k <= points.length <= 10^4
- -10^4 < xi, yi < 10^4`,
                    examples: [
                        {
                            input: 'points = [[1,3],[-2,2]], k = 1',
                            output: '[[-2,2]]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'points = [[1,3],[-2,2]], k = 1',
                            judgeInput: '2\n1 3\n-2 2\n1',
                            output: '[[-2,2]]'
                        },
                        {
                            input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
                            judgeInput: '3\n3 3\n5 -1\n-2 4\n2',
                            output: '[[3,3],[-2,4]]'
                        },
                        {
                            input: 'points = [[1,1]], k = 1',
                            judgeInput: '1\n1 1\n1',
                            output: '[[1,1]]'
                        },
                        {
                            input: 'points = [[1,1],[1,1]], k = 1',
                            judgeInput: '2\n1 1\n1 1\n1',
                            output: '[[1,1]]'
                        },
                        {
                            input: 'points = [[10,10],[-10,-10]], k = 1',
                            judgeInput: '2\n10 10\n-10 -10\n1',
                            output: '[[-10,-10]]'
                        },
                        {
                            input: 'points = [[0,1],[1,0]], k = 2',
                            judgeInput: '2\n0 1\n1 0\n2',
                            output: '[[0,1],[1,0]]'
                        },
                        {
                            input: 'points = [[2,2],[2,2],[2,2]], k = 2',
                            judgeInput: '3\n2 2\n2 2\n2 2\n2',
                            output: '[[2,2],[2,2]]'
                        },
                        {
                            input: 'points = [[-5,4],[-6,-5],[4,6]], k = 2',
                            judgeInput: '3\n-5 4\n-6 -5\n4 6\n2',
                            output: '[[-5,4],[4,6]]'
                        },
                        {
                            input: 'points = [[0,0],[1,1]], k = 1',
                            judgeInput: '2\n0 0\n1 1\n1',
                            output: '[[0,0]]'
                        },
                        {
                            input: 'points = [[1,2],[2,3],[3,4]], k = 3',
                            judgeInput: '3\n1 2\n2 3\n3 4\n3',
                            output: '[[1,2],[2,3],[3,4]]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
    // Your code here
}`,
                        python: `def k_closest(points, k):
    """
    :type points: List[List[int]]
    :type k: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const points = [];
    for(let i=1; i<=n; i++) {
        points.push(lines[i].split(' ').map(Number));
    }
    const k = parseInt(lines[n+1]);
    console.log(JSON.stringify(kClosest(points, k)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
points = []
for i in range(1, n+1):
    points.append(list(map(int, lines[i].split())))
k = int(lines[n+1])
print(json.dumps(k_closest(points, k)))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k);

int main() {
    int n, k;
    cin >> n;
    vector<vector<int>> points(n, vector<int>(2));
    for(int i=0; i<n; ++i) cin >> points[i][0] >> points[i][1];
    cin >> k;
    
    vector<vector<int>> res = kClosest(points, k);
    
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "[" << res[i][0] << "," << res[i][1] << "]";
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] points = new int[n][2];
        for(int i=0; i<n; i++) {
            points[i][0] = sc.nextInt();
            points[i][1] = sc.nextInt();
        }
        int k = sc.nextInt();
        
        Solution sol = new Solution();
        int[][] res = sol.kClosest(points, k);
        
        System.out.print("[");
        for(int i=0; i<res.length; i++) {
            System.out.print("[" + res[i][0] + "," + res[i][1] + "]");
            if(i < res.length-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                },
                {
                    id: 'critical-connections',
                    title: 'AWS Network Resilience',
                    difficulty: 'Hard',
                    description: `The AWS Infrastructure team is analyzing the resilience of their server network. They want to identify "critical connections" - single points of failure that, if severed, would partition the network into separate disconnected components.

You are given a map of the network where servers are nodes and connections are edges.

Return a list of all critical connections (edges) in the network.

Constraints:
- 2 <= n <= 10^5
- n - 1 <= connections.length <= 10^5`,
                    examples: [
                        {
                            input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
                            output: '[[1,3]]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
                            judgeInput: '4\n4\n0 1\n1 2\n2 0\n1 3',
                            output: '[[1,3]]'
                        },
                        {
                            input: 'n = 2, connections = [[0,1]]',
                            judgeInput: '2\n1\n0 1',
                            output: '[[0,1]]'
                        },
                        {
                            input: 'n = 5, connections = [[0,1],[1,2],[2,0],[1,3],[3,4],[4,1]]',
                            judgeInput: '5\n6\n0 1\n1 2\n2 0\n1 3\n3 4\n4 1',
                            output: '[]'
                        },
                        {
                            input: 'n = 6, connections = [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]',
                            judgeInput: '6\n7\n0 1\n1 2\n2 0\n1 3\n3 4\n4 5\n5 3',
                            output: '[[1,3]]'
                        },
                        {
                            input: 'n = 3, connections = [[0,1],[1,2],[2,0]]',
                            judgeInput: '3\n3\n0 1\n1 2\n2 0',
                            output: '[]'
                        },
                        {
                            input: 'n = 3, connections = [[0,1],[1,2]]',
                            judgeInput: '3\n2\n0 1\n1 2',
                            output: '[[0,1],[1,2]]'
                        },
                        {
                            input: 'n = 4, connections = [[0,1],[1,2],[2,3],[3,0]]',
                            judgeInput: '4\n4\n0 1\n1 2\n2 3\n3 0',
                            output: '[]'
                        },
                        {
                            input: 'n = 5, connections = [[0,1],[1,2],[2,3],[3,4]]',
                            judgeInput: '5\n4\n0 1\n1 2\n2 3\n3 4',
                            output: '[[0,1],[1,2],[2,3],[3,4]]'
                        },
                        {
                            input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
                            judgeInput: '4\n4\n0 1\n1 2\n2 0\n1 3',
                            output: '[[1,3]]'
                        },
                        {
                            input: 'n = 6, connections = [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]',
                            judgeInput: '6\n7\n0 1\n1 2\n2 0\n1 3\n3 4\n4 5\n5 3',
                            output: '[[1,3]]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
function criticalConnections(n, connections) {
    // Your code here
}`,
                        python: `def critical_connections(n, connections):
    """
    :type n: int
    :type connections: List[List[int]]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const m = parseInt(lines[1]);
    const connections = [];
    for(let i=2; i<m+2; i++) {
        connections.push(lines[i].split(' ').map(Number));
    }
    console.log(JSON.stringify(criticalConnections(n, connections)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
m = int(lines[1])
connections = []
for i in range(2, m+2):
    connections.append(list(map(int, lines[i].split())))
print(json.dumps(critical_connections(n, connections)))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> connections(m, vector<int>(2));
    for(int i=0; i<m; ++i) cin >> connections[i][0] >> connections[i][1];
    
    vector<vector<int>> res = criticalConnections(n, connections);
    
    // Sort for consistent output
    for(auto& edge : res) sort(edge.begin(), edge.end());
    sort(res.begin(), res.end());
    
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "[" << res[i][0] << "," << res[i][1] << "]";
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        List<List<Integer>> connections = new ArrayList<>();
        for(int i=0; i<m; i++) {
            List<Integer> edge = new ArrayList<>();
            edge.add(sc.nextInt());
            edge.add(sc.nextInt());
            connections.add(edge);
        }
        
        Solution sol = new Solution();
        List<List<Integer>> res = sol.criticalConnections(n, connections);
        
        // Sort for consistent output
        for(List<Integer> edge : res) Collections.sort(edge);
        res.sort((a, b) -> {
            if(!a.get(0).equals(b.get(0))) return a.get(0) - b.get(0);
            return a.get(1) - b.get(1);
        });
        
        System.out.print("[");
        for(int i=0; i<res.size(); i++) {
            System.out.print("[" + res.get(i).get(0) + "," + res.get(i).get(1) + "]");
            if(i < res.size()-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                }
            ]
        }
    ]
};
