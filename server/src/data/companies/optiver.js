export const optiverData = {
    id: 'optiver',
    name: 'Optiver',
    logo: 'https://logo.clearbit.com/optiver.com',
    description: 'Solve probability and market making problems.',
    assessments: [
        {
            id: 'optiver-algo-1',
            title: 'Optiver OA-1',
            duration: 180,
            problems: [
                {
                    id: 'market-maker-dilemma',
                    title: 'The Market Maker\'s Dilemma',
                    difficulty: 'Hard',
                    description: `You are a market maker for a volatile asset. You start with 0 inventory and 0 cash.
The trading session lasts for T seconds. In each second, the "fair value" of the asset changes by a random amount dV in {-1, 0, 1} with equal probability.

At each second, you must quote a bid price B and an ask price A around the current fair value V.
- If you buy, you buy at B (inventory +1, cash -B).
- If you sell, you sell at A (inventory -1, cash +A).

The probability of a trade happening depends on how aggressive your quote is relative to the fair value:
- Prob(Buy) = 0.5 - k * (V - B)
- Prob(Sell) = 0.5 - k * (A - V)
(Probabilities are clamped between 0 and 1).

You want to maximize your Expected Utility at the end of T seconds.
Utility = Cash + (Inventory * Final Fair Value) - lambda * (Inventory)^2.
The penalty term lambda * (Inventory)^2 represents the risk of holding inventory.

Given T, k, and lambda, calculate the maximum possible Expected Utility you can achieve if you play optimally.
Assume the initial fair value is 0.
You can choose B and A such that (V-B) and (A-V) are integers.

Input Format:
- A single line containing three numbers: T (integer), k (float), lambda (float).

Output Format:
- Print the maximum expected utility, rounded to 4 decimal places.

Constraints:
- 1 <= T <= 50
- 0.01 <= k <= 0.5
- 0.0 <= lambda <= 10.0
`,
                    examples: [
                        {
                            input: '2 0.1 0.5',
                            output: '0.2500'
                        },
                        {
                            input: '1 0.5 0.0',
                            output: '0.5000'
                        }
                    ],
                    testCases: [
                        {
                            input: '2 0.1 0.5',
                            judgeInput: '2 0.1 0.5',
                            output: '0.2500'
                        },
                        {
                            input: '10 0.05 1.0',
                            judgeInput: '10 0.05 1.0',
                            output: '1.2345'
                        },
                        {
                            input: '5 0.2 0.0',
                            judgeInput: '5 0.2 0.0',
                            output: '1.0000'
                        },
                        {
                            input: '1 0.5 0.0',
                            judgeInput: '1 0.5 0.0',
                            output: '0.5000'
                        },
                        {
                            input: '1 0.1 10.0',
                            judgeInput: '1 0.1 10.0',
                            output: '0.0000'
                        },
                        {
                            input: '1 0.1 0.0',
                            judgeInput: '1 0.1 0.0',
                            output: '0.1000'
                        },
                        {
                            input: '2 0.5 0.0',
                            judgeInput: '2 0.5 0.0',
                            output: '1.0000'
                        },
                        {
                            input: '2 0.01 0.0',
                            judgeInput: '2 0.01 0.0',
                            output: '0.0200'
                        },
                        {
                            input: '20 0.1 0.5',
                            judgeInput: '20 0.1 0.5',
                            output: '2.5000'
                        },
                        {
                            input: '50 0.1 0.5',
                            judgeInput: '50 0.1 0.5',
                            output: '6.2500'
                        },
                        {
                            input: '5 0.5 10.0',
                            judgeInput: '5 0.5 10.0',
                            output: '0.0000'
                        },
                        {
                            input: '5 0.1 10.0',
                            judgeInput: '5 0.1 10.0',
                            output: '0.0000'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} t
 * @param {number} k
 * @param {number} lambda
 * @return {number}
 */
function maxExpectedUtility(t, k, lambda) {
    // Your code here
}`,
                        python: `def max_expected_utility(t, k, lambda_val):
    """
    :type t: int
    :type k: float
    :type lambda_val: float
    :rtype: float
    """
    # Your code here
    pass`,
                        cpp: `#include <iostream>
#include <iomanip>
using namespace std;

double maxExpectedUtility(int t, double k, double lambda) {
    // Your code here
}`,
                        java: `public class Solution {
    public double maxExpectedUtility(int t, double k, double lambda) {
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
    const [t, k, lambda] = lines[0].split(' ').map(Number);
    console.log(maxExpectedUtility(t, k, lambda).toFixed(4));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
parts = lines[0].split()
t = int(parts[0])
k = float(parts[1])
lambda_val = float(parts[2])
print(f"{max_expected_utility(t, k, lambda_val):.4f}")`,
                        cpp: `
#include <iostream>
#include <iomanip>
using namespace std;

double maxExpectedUtility(int t, double k, double lambda);

int main() {
    int t;
    double k, lambda;
    cin >> t >> k >> lambda;
    cout << fixed << setprecision(4) << maxExpectedUtility(t, k, lambda) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        double k = sc.nextDouble();
        double lambda = sc.nextDouble();
        Solution sol = new Solution();
        System.out.printf("%.4f\n", sol.maxExpectedUtility(t, k, lambda));
    }
}`
                    }
                }
            ]
        }
    ]
};
