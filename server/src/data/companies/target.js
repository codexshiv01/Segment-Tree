export const targetData = {
    id: 'target',
    name: 'Target',
    logo: 'https://logo.clearbit.com/target.com',
    description: 'Optimize retail operations and supply chain logistics.',
    assessments: [{
        id: 'target-oa-1',
        title: 'Target OA-1',
        duration: 90,
        problems: [{
            id: 'supply-chain-optimization',
            title: 'Supply Chain Optimization',
            difficulty: 'Hard',
            description: `Target manages a complex supply chain network consisting of N distribution centers (nodes) and M transport routes (directed edges). Each route has a capacity C and a cost per unit K.
You need to transport D units of goods from the Main Warehouse (Node 0) to the Regional Hub (Node N-1).

However, due to seasonal demand, some routes might be congested. You can choose to upgrade at most U routes. Upgrading a route doubles its capacity but increases the cost per unit on that route by 50%.

Find the minimum total cost to transport D units from Node 0 to Node N-1, considering you can upgrade at most U routes. If it's impossible to transport D units even with upgrades, return -1.

Input Format:
- First line: N, M, D, U
- Next M lines: u, v, C, K (route from u to v with capacity C and cost K)

Output Format:
- Integer representing the minimum total cost.

Constraints:
- 1 <= N <= 100
- 1 <= M <= 500
- 1 <= D <= 1000
- 0 <= U <= 10
- 1 <= C, K <= 1000
`,
            examples: [
                {
                    input: '3 3 10 1\n0 1 5 10\n1 2 5 10\n0 2 5 30',
                    output: '250'
                },
                {
                    input: '2 1 20 0\n0 1 10 10',
                    output: '-1'
                }
            ],
            testCases: [
                {
                    input: '3 3 10 1\n0 1 5 10\n1 2 5 10\n0 2 5 30',
                    judgeInput: '3 3 10 1\n0 1 5 10\n1 2 5 10\n0 2 5 30',
                    output: '250'
                },
                {
                    input: '2 1 20 0\n0 1 10 10',
                    judgeInput: '2 1 20 0\n0 1 10 10',
                    output: '-1'
                },
                {
                    input: '4 5 15 2\n0 1 10 5\n1 2 10 5\n2 3 10 5\n0 2 5 20\n1 3 5 20',
                    judgeInput: '4 5 15 2\n0 1 10 5\n1 2 10 5\n2 3 10 5\n0 2 5 20\n1 3 5 20',
                    output: '225'
                },
                {
                    input: '2 1 10 1\n0 1 5 10',
                    judgeInput: '2 1 10 1\n0 1 5 10',
                    output: '150'
                },
                {
                    input: '3 2 10 0\n0 1 10 10\n1 2 10 10',
                    judgeInput: '3 2 10 0\n0 1 10 10\n1 2 10 10',
                    output: '200'
                },
                {
                    input: '3 2 20 0\n0 1 10 10\n1 2 10 10',
                    judgeInput: '3 2 20 0\n0 1 10 10\n1 2 10 10',
                    output: '-1'
                },
                {
                    input: '4 4 5 0\n0 1 10 10\n1 2 10 10\n2 3 10 10\n0 3 2 50',
                    judgeInput: '4 4 5 0\n0 1 10 10\n1 2 10 10\n2 3 10 10\n0 3 2 50',
                    output: '150'
                },
                {
                    input: '2 2 10 0\n0 1 5 10\n0 1 5 20',
                    judgeInput: '2 2 10 0\n0 1 5 10\n0 1 5 20',
                    output: '150'
                },
                {
                    input: '5 6 10 2\n0 1 5 10\n1 2 5 10\n2 3 5 10\n3 4 5 10\n0 2 2 50\n2 4 2 50',
                    judgeInput: '5 6 10 2\n0 1 5 10\n1 2 5 10\n2 3 5 10\n3 4 5 10\n0 2 2 50\n2 4 2 50',
                    output: '400'
                },
                {
                    input: '3 3 100 10\n0 1 1 1\n1 2 1 1\n0 2 1 100',
                    judgeInput: '3 3 100 10\n0 1 1 1\n1 2 1 1\n0 2 1 100',
                    output: '-1'
                }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number} m
 * @param {number} d
 * @param {number} u
 * @param {number[][]} routes
 * @return {number}
 */
function minTransportCost(n, m, d, u, routes) {
    // Your code here
}`,
                python: `def min_transport_cost(n, m, d, u, routes):
    """
    :type n: int
    :type m: int
    :type d: int
    :type u: int
    :type routes: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int minTransportCost(int n, int m, int d, int u, vector<vector<int>>& routes) {
    // Your code here
}`,
                java: `import java.util.*;

public class Solution {
    public int minTransportCost(int n, int m, int d, int u, int[][] routes) {
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
    const [n, m, d, u] = lines[0].split(' ').map(Number);
    const routes = [];
    for (let i = 1; i <= m; i++) {
        routes.push(lines[i].split(' ').map(Number));
    }
    console.log(minTransportCost(n, m, d, u, routes));
});`,
                python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n, m, d, u = map(int, lines[0].split())
routes = []
for i in range(1, m + 1):
    routes.append(list(map(int, lines[i].split())))
print(min_transport_cost(n, m, d, u, routes))`,
                cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minTransportCost(int n, int m, int d, int u, vector<vector<int>>& routes);

int main() {
    int n, m, d, u;
    cin >> n >> m >> d >> u;
    vector<vector<int>> routes(m, vector<int>(4));
    for (int i = 0; i < m; i++) {
        cin >> routes[i][0] >> routes[i][1] >> routes[i][2] >> routes[i][3];
    }
    cout << minTransportCost(n, m, d, u, routes) << endl;
    return 0;
}`,
                java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int d = sc.nextInt();
        int u = sc.nextInt();
        int[][] routes = new int[m][4];
        for (int i = 0; i < m; i++) {
            routes[i][0] = sc.nextInt();
            routes[i][1] = sc.nextInt();
            routes[i][2] = sc.nextInt();
            routes[i][3] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.minTransportCost(n, m, d, u, routes));
    }
}`
            }
        }, {
            id: 'inventory-placement',
            title: 'Inventory Placement Strategy',
            difficulty: 'Hard',
            description: `Target has N stores arranged in a line, indexed 0 to N-1.
You have K items of a new exclusive product to distribute among these stores.
Each store i has a sales potential P[i].
If you place x items in store i, the revenue generated is P[i] * log2(x + 1).

However, there is a constraint: No two adjacent stores can receive items. (i.e., if store i gets items, stores i-1 and i+1 cannot get any).

Distribute the K items to maximize total revenue. Return the maximum revenue rounded to 2 decimal places.

Input Format:
- First line: N, K
- Second line: N integers representing P[i]

Output Format:
- Float representing maximum revenue (rounded to 2 decimal places).

Constraints:
- 1 <= N <= 1000
- 1 <= K <= 10000
- 1 <= P[i] <= 1000
`,
            examples: [
                {
                    input: '4 5\n10 20 10 20',
                    output: '69.66'
                },
                {
                    input: '3 10\n10 100 10',
                    output: '345.94'
                }
            ],
            testCases: [
                {
                    input: '4 5\n10 20 10 20',
                    judgeInput: '4 5\n10 20 10 20',
                    output: '69.66'
                },
                {
                    input: '3 10\n10 100 10',
                    judgeInput: '3 10\n10 100 10',
                    output: '345.94'
                },
                {
                    input: '5 10\n10 10 10 10 10',
                    judgeInput: '5 10\n10 10 10 10 10',
                    output: '52.44'
                },
                {
                    input: '2 5\n100 100',
                    judgeInput: '2 5\n100 100',
                    output: '258.50'
                },
                {
                    input: '6 10\n1 100 1 100 1 100',
                    judgeInput: '6 10\n1 100 1 100 1 100',
                    output: '580.74'
                },
                {
                    input: '1 10\n50',
                    judgeInput: '1 10\n50',
                    output: '172.97'
                },
                {
                    input: '3 3\n10 10 10',
                    judgeInput: '3 3\n10 10 10',
                    output: '20.00'
                },
                {
                    input: '4 100\n1 1 1 1',
                    judgeInput: '4 100\n1 1 1 1',
                    output: '11.29'
                },
                {
                    input: '5 2\n10 20 30 40 50',
                    judgeInput: '5 2\n10 20 30 40 50',
                    output: '80.00'
                },
                {
                    input: '3 0\n10 20 30',
                    judgeInput: '3 0\n10 20 30',
                    output: '0.00'
                }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} potentials
 * @return {number}
 */
function maxRevenue(n, k, potentials) {
    // Your code here
}`,
                python: `def max_revenue(n, k, potentials):
    """
    :type n: int
    :type k: int
    :type potentials: List[int]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double maxRevenue(int n, int k, vector<int>& potentials) {
    // Your code here
}`,
                java: `import java.util.*;

public class Solution {
    public double maxRevenue(int n, int k, int[] potentials) {
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
    const [n, k] = lines[0].split(' ').map(Number);
    const potentials = lines[1].split(' ').map(Number);
    console.log(maxRevenue(n, k, potentials).toFixed(2));
});`,
                python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n, k = map(int, lines[0].split())
potentials = list(map(int, lines[1].split()))
print(f"{max_revenue(n, k, potentials):.2f}")`,
                cpp: `
#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

double maxRevenue(int n, int k, vector<int>& potentials);

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> potentials(n);
    for (int i = 0; i < n; i++) cin >> potentials[i];
    cout << fixed << setprecision(2) << maxRevenue(n, k, potentials) << endl;
    return 0;
}`,
                java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] potentials = new int[n];
        for (int i = 0; i < n; i++) potentials[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.printf("%.2f\\n", sol.maxRevenue(n, k, potentials));
    }
}`
            }
        }]
    }]
};
