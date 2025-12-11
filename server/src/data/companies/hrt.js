export const hrtData = {
    id: 'hrt',
    name: 'Hudson River Trading',
    logo: 'https://logo.clearbit.com/hudsonrivertrading.com',
    description: 'Solve complex algorithmic challenges faced by HFT firms.',
    assessments: [
        {
            id: 'hrt-algo-1',
            title: 'HRT Algorithmic Challenge',
            duration: 180,
            problems: [
                {
                    id: 'quantum-ticker',
                    title: 'The Quantum Ticker',
                    difficulty: 'Hard',
                    description: `In the high-stakes world of quantum algorithmic trading, Hudson River Trading has deployed a new sensor array that detects "potential" stock prices before they collapse into reality.

You are given a stream of N quantum price packets. Each packet i contains a superposition of K possible prices P[i][1], P[i][2], ..., P[i][K].
When you "observe" the market at time i by choosing a specific price P[i][j], it causes a chain reaction:
1. The price at time i becomes fixed at P[i][j].
2. For all subsequent times t > i, any potential price P[t][m] that is strictly less than P[i][j] becomes invalid (instantly decays).

Your goal is to select exactly one price for each time step i from 1 to N such that the resulting sequence of selected prices is non-decreasing.
However, due to quantum noise, there is a cost associated with each selection. Selecting P[i][j] costs C[i][j].

Find the minimum total cost to form a valid non-decreasing sequence of prices for the entire stream. If it is impossible to form such a sequence, return -1.

Input Format:
- The first line contains two integers N and K.
- The next N lines each describe a packet. The i-th line contains 2*K integers:
  P[i][1], C[i][1], P[i][2], C[i][2], ..., P[i][K], C[i][K].

Output Format:
- Print a single integer representing the minimum total cost.

Constraints:
- 1 <= N <= 2000
- 1 <= K <= 10
- 1 <= P[i][j] <= 10^9
- 1 <= C[i][j] <= 10^9
`,
                    examples: [
                        {
                            input: '3 2\n10 5 20 10\n15 2 25 8\n18 3 30 15',
                            output: '10'
                        },
                        {
                            input: '2 2\n100 1 200 10\n50 5 90 5',
                            output: '-1'
                        }
                    ],
                    testCases: [
                        {
                            input: '3 2\n10 5 20 10\n15 2 25 8\n18 3 30 15',
                            judgeInput: '3 2\n10 5 20 10\n15 2 25 8\n18 3 30 15',
                            output: '10'
                        },
                        {
                            input: '2 2\n100 1 200 10\n50 5 90 5',
                            judgeInput: '2 2\n100 1 200 10\n50 5 90 5',
                            output: '-1'
                        },
                        {
                            input: '4 1\n10 1\n20 1\n30 1\n40 1',
                            judgeInput: '4 1\n10 1\n20 1\n30 1\n40 1',
                            output: '4'
                        },
                        {
                            input: '3 3\n10 10 20 20 30 30\n15 5 25 5 35 5\n12 100 28 2 40 100',
                            judgeInput: '3 3\n10 10 20 20 30 30\n15 5 25 5 35 5\n12 100 28 2 40 100',
                            output: '17'
                        },
                        {
                            input: '3 1\n10 5\n20 5\n30 5',
                            judgeInput: '3 1\n10 5\n20 5\n30 5',
                            output: '15'
                        },
                        {
                            input: '3 1\n30 5\n20 5\n10 5',
                            judgeInput: '3 1\n30 5\n20 5\n10 5',
                            output: '-1'
                        },
                        {
                            input: '3 2\n10 1 100 10\n10 1 100 10\n10 1 100 10',
                            judgeInput: '3 2\n10 1 100 10\n10 1 100 10\n10 1 100 10',
                            output: '3'
                        },
                        {
                            input: '2 2\n10 100 20 1\n15 100 25 1',
                            judgeInput: '2 2\n10 100 20 1\n15 100 25 1',
                            output: '2'
                        },
                        {
                            input: '5 1\n1 1\n2 2\n3 3\n4 4\n5 5',
                            judgeInput: '5 1\n1 1\n2 2\n3 3\n4 4\n5 5',
                            output: '15'
                        },
                        {
                            input: '2 3\n10 5 20 4 30 3\n15 2 25 1 35 6',
                            judgeInput: '2 3\n10 5 20 4 30 3\n15 2 25 1 35 6',
                            output: '4'
                        },
                        {
                            input: '4 2\n10 10 100 1\n10 10 100 1\n10 10 100 1\n10 10 100 1',
                            judgeInput: '4 2\n10 10 100 1\n10 10 100 1\n10 10 100 1\n10 10 100 1',
                            output: '4'
                        },
                        {
                            input: '3 2\n50 1 60 100\n40 1 70 100\n30 1 80 100',
                            judgeInput: '3 2\n50 1 60 100\n40 1 70 100\n30 1 80 100',
                            output: '201'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} packets
 * @return {number}
 */
function minCostQuantumTicker(n, k, packets) {
    // Your code here
}`,
                        python: `def min_cost_quantum_ticker(n, k, packets):
    """
    :type n: int
    :type k: int
    :type packets: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <algorithm>
using namespace std;

long long minCostQuantumTicker(int n, int k, vector<vector<pair<int, int>>>& packets) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public long minCostQuantumTicker(int n, int k, int[][][] packets) {
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
    const packets = [];
    for (let i = 1; i <= n; i++) {
        const row = lines[i].split(' ').map(Number);
        const packet = [];
        for (let j = 0; j < row.length; j += 2) {
            packet.push([row[j], row[j+1]]);
        }
        packets.push(packet);
    }
    console.log(minCostQuantumTicker(n, k, packets));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n, k = map(int, lines[0].split())
packets = []
for i in range(1, n + 1):
    row = list(map(int, lines[i].split()))
    packet = []
    for j in range(0, len(row), 2):
        packet.append((row[j], row[j+1]))
    packets.append(packet)
print(min_cost_quantum_ticker(n, k, packets))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

long long minCostQuantumTicker(int n, int k, vector<vector<pair<int, int>>>& packets);

int main() {
    int n, k;
    cin >> n >> k;
    vector<vector<pair<int, int>>> packets(n, vector<pair<int, int>>(k));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < k; j++) {
            cin >> packets[i][j].first >> packets[i][j].second;
        }
    }
    cout << minCostQuantumTicker(n, k, packets) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[][][] packets = new int[n][k][2];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < k; j++) {
                packets[i][j][0] = sc.nextInt();
                packets[i][j][1] = sc.nextInt();
            }
        }
        Solution sol = new Solution();
        System.out.println(sol.minCostQuantumTicker(n, k, packets));
    }
}`
                    }
                }
            ]
        }
    ]
};
