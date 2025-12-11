export const quadeyeData = {
    id: 'quadeye',
    name: 'Quadeye',
    logo: 'https://logo.clearbit.com/quadeye.com',
    description: 'Master low-latency trading and market making algorithms.',
    assessments: [
        {
            id: 'quadeye-algo-1',
            title: 'Quadeye Trading OA-1',
            duration: 180,
            problems: [
                {
                    id: 'multi-exchange-arbitrage',
                    title: 'Multi-Exchange Arbitrage',
                    difficulty: 'Hard',
                    description: `You are a quantitative trader at Quadeye, monitoring N different currency exchanges. Each exchange allows you to convert between specific pairs of currencies with a certain exchange rate and a transaction fee.

However, the market is volatile. The exchange rate R[u][v] (from currency u to v) decays over time due to market efficiency. Specifically, if you execute a trade at time t, the effective rate is R[u][v] * (1 - decay * t). The transaction fee F[u][v] is constant.

You start with 1000 units of currency 0 at time t=0. You want to perform a sequence of trades to maximize your amount of currency 0.
Each trade takes 1 unit of time.
You can perform at most K trades.

Find the maximum amount of currency 0 you can have after at most K trades.

Input Format:
- The first line contains three integers N, M (number of trading pairs), and K.
- The second line contains a floating-point number representing the decay rate per time unit.
- The next M lines each contain: u, v, R[u][v], F[u][v].
  - u, v: integers representing currencies (0 to N-1).
  - R[u][v]: exchange rate (1 unit of u gives R[u][v] units of v).
  - F[u][v]: transaction fee (subtracted from the converted amount).
  - Formula: Amount in v = (Amount in u * R[u][v] * (1 - decay * t)) - F[u][v].

Output Format:
- Print the maximum amount of currency 0 achievable, rounded to 4 decimal places.

Constraints:
- 1 <= N <= 100
- 1 <= M <= 500
- 1 <= K <= 50
- 0 <= decay < 0.1
`,
                    examples: [
                        {
                            input: '3 3 2\n0.0\n0 1 2.0 10.0\n1 2 2.0 10.0\n2 0 0.5 5.0',
                            output: '1967.5000'
                        },
                        {
                            input: '2 2 2\n0.1\n0 1 10.0 0.0\n1 0 10.0 0.0',
                            output: '90000.0000'
                        }
                    ],
                    testCases: [
                        {
                            input: '3 3 2\n0.0\n0 1 2.0 10.0\n1 2 2.0 10.0\n2 0 0.5 5.0',
                            judgeInput: '3 3 2\n0.0\n0 1 2.0 10.0\n1 2 2.0 10.0\n2 0 0.5 5.0',
                            output: '1967.5000'
                        },
                        {
                            input: '3 3 3\n0.0\n0 1 2.0 10.0\n1 2 2.0 10.0\n2 0 0.5 5.0',
                            judgeInput: '3 3 3\n0.0\n0 1 2.0 10.0\n1 2 2.0 10.0\n2 0 0.5 5.0',
                            output: '1967.5000'
                        },
                        {
                            input: '2 2 2\n0.1\n0 1 10.0 0.0\n1 0 10.0 0.0',
                            judgeInput: '2 2 2\n0.1\n0 1 10.0 0.0\n1 0 10.0 0.0',
                            output: '90000.0000'
                        },
                        {
                            input: '3 3 2\n0.0\n0 1 0.5 0.0\n1 2 0.5 0.0\n2 0 0.5 0.0',
                            judgeInput: '3 3 2\n0.0\n0 1 0.5 0.0\n1 2 0.5 0.0\n2 0 0.5 0.0',
                            output: '1000.0000'
                        },
                        {
                            input: '2 2 1\n0.0\n0 1 2.0 0.0\n1 0 2.0 0.0',
                            judgeInput: '2 2 1\n0.0\n0 1 2.0 0.0\n1 0 2.0 0.0',
                            output: '1000.0000'
                        },
                        {
                            input: '3 3 3\n0.0\n0 1 1.1 0.0\n1 2 1.1 0.0\n2 0 1.1 0.0',
                            judgeInput: '3 3 3\n0.0\n0 1 1.1 0.0\n1 2 1.1 0.0\n2 0 1.1 0.0',
                            output: '1331.0000'
                        },
                        {
                            input: '2 2 2\n0.5\n0 1 10.0 0.0\n1 0 10.0 0.0',
                            judgeInput: '2 2 2\n0.5\n0 1 10.0 0.0\n1 0 10.0 0.0',
                            output: '10000.0000'
                        },
                        {
                            input: '2 2 2\n0.0\n0 1 1.0 0.0\n1 0 1.0 0.0',
                            judgeInput: '2 2 2\n0.0\n0 1 1.0 0.0\n1 0 1.0 0.0',
                            output: '1000.0000'
                        },
                        {
                            input: '5 4 4\n0.0\n0 1 2.0 0.0\n1 2 2.0 0.0\n2 3 2.0 0.0\n3 4 2.0 0.0',
                            judgeInput: '5 4 4\n0.0\n0 1 2.0 0.0\n1 2 2.0 0.0\n2 3 2.0 0.0\n3 4 2.0 0.0',
                            output: '1000.0000'
                        },
                        {
                            input: '2 2 10\n0.0\n0 1 2.0 0.0\n1 0 0.6 0.0',
                            judgeInput: '2 2 10\n0.0\n0 1 2.0 0.0\n1 0 0.6 0.0',
                            output: '2488.3200'
                        },
                        {
                            input: '3 2 5\n0.0\n0 1 2.0 0.0\n1 2 2.0 0.0',
                            judgeInput: '3 2 5\n0.0\n0 1 2.0 0.0\n1 2 2.0 0.0',
                            output: '1000.0000'
                        },
                        {
                            input: '2 2 2\n0.001\n0 1 1.002 0.0\n1 0 1.002 0.0',
                            judgeInput: '2 2 2\n0.001\n0 1 1.002 0.0\n1 0 1.002 0.0',
                            output: '1002.0000'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number} k
 * @param {number} decay
 * @param {number[][]} edges
 * @return {number}
 */
function maxArbitrage(n, k, decay, edges) {
    // Your code here
}`,
                        python: `def max_arbitrage(n, k, decay, edges):
    """
    :type n: int
    :type k: int
    :type decay: float
    :type edges: List[List]
    :rtype: float
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <iomanip>
using namespace std;

double maxArbitrage(int n, int k, double decay, vector<vector<double>>& edges) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public double maxArbitrage(int n, int k, double decay, double[][] edges) {
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
    const [n, m, k] = lines[0].split(' ').map(Number);
    const decay = parseFloat(lines[1]);
    const edges = [];
    for (let i = 2; i < 2 + m; i++) {
        const parts = lines[i].split(' ');
        edges.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])]);
    }
    console.log(maxArbitrage(n, k, decay, edges).toFixed(4));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n, m, k = map(int, lines[0].split())
decay = float(lines[1])
edges = []
for i in range(2, 2 + m):
    parts = lines[i].split()
    edges.append([int(parts[0]), int(parts[1]), float(parts[2]), float(parts[3])])
print(f"{max_arbitrage(n, k, decay, edges):.4f}")`,
                        cpp: `
#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

double maxArbitrage(int n, int k, double decay, vector<vector<double>>& edges);

int main() {
    int n, m, k;
    cin >> n >> m >> k;
    double decay;
    cin >> decay;
    vector<vector<double>> edges;
    for (int i = 0; i < m; i++) {
        double u, v, r, f;
        cin >> u >> v >> r >> f;
        edges.push_back({u, v, r, f});
    }
    cout << fixed << setprecision(4) << maxArbitrage(n, k, decay, edges) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int k = sc.nextInt();
        double decay = sc.nextDouble();
        double[][] edges = new double[m][4];
        for (int i = 0; i < m; i++) {
            edges[i][0] = sc.nextInt();
            edges[i][1] = sc.nextInt();
            edges[i][2] = sc.nextDouble();
            edges[i][3] = sc.nextDouble();
        }
        Solution sol = new Solution();
        System.out.printf("%.4f\n", sol.maxArbitrage(n, k, decay, edges));
    }
}`
                    }
                }
            ]
        }
    ]
};
