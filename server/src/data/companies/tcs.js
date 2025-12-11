export const tcsData = {
    id: 'tcs',
    name: 'TCS (CodeVita)',
    logo: 'https://logo.clearbit.com/tcs.com',
    description: 'Practice TCS CodeVita and NQT questions.',
    assessments: [
        {
            id: 'tcs-codevita-1',
            title: 'TCS CodeVita Round 1',
            duration: 180,
            problems: [
                {
                    id: 'philaland-coin',
                    title: 'Philaland Coin',
                    difficulty: 'Medium',
                    description: `The problem solvers have found a new Island for coding and named it as Philaland. These smart people were given a task to make purchase of items at the Island easier by distributing various coins with different value.

Manish has come up with a solution that if we make coins category starting from $1 till the maximum price of item present on Island, then we can purchase any item easily. He added following example to prove his point.

If the maximum price of an item is 5 then we can make coins of {$1, $2, $3, $4, $5} to purchase any item ranging from $1 till $5.

Now Manisha, being a keen observer suggested that we could actually minimize the number of coins required and gave following distribution {$1, $2, $3}. According to him any item can be purchased one time ranging from $1 to $5. Everyone was impressed with both of them.

Your task is to help Manisha come up with minimum number of denominations for any given maximum price in Philaland.

Input Format:
First line contains an integer T denoting the number of test cases.
Next T lines contains an integer N denoting the maximum price of the item present on Philaland.

Output Format:
For each test case print a single line denoting the minimum number of denominations of coins required.

Constraints:
1 <= T <= 100
1 <= N <= 5000`,
                    examples: [
                        {
                            input: '2\n10\n5',
                            output: '4\n3'
                        }
                    ],
                    testCases: [
                        {
                            input: '1\n10',
                            judgeInput: '1\n10',
                            output: '4'
                        },
                        {
                            input: '1\n5',
                            judgeInput: '1\n5',
                            output: '3'
                        },
                        {
                            input: '1\n1',
                            judgeInput: '1\n1',
                            output: '1'
                        },
                        {
                            input: '1\n20',
                            judgeInput: '1\n20',
                            output: '5'
                        },
                        {
                            input: '1\n50',
                            judgeInput: '1\n50',
                            output: '6'
                        },
                        {
                            input: '2\n10\n5',
                            judgeInput: '2\n10\n5',
                            output: '4\n3'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @return {number}
 */
function minDenominations(n) {
    // Your code here
}`,
                        python: `def min_denominations(n):
    """
    :type n: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <iostream>
using namespace std;

int minDenominations(int n) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minDenominations(int n) {
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
    const t = parseInt(lines[0]);
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        console.log(minDenominations(n));
    }
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
t = int(lines[0])
for i in range(1, t + 1):
    n = int(lines[i])
    print(min_denominations(n))`,
                        cpp: `
#include <iostream>
using namespace std;

int minDenominations(int n);

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        cout << minDenominations(n) << endl;
    }
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        Solution sol = new Solution();
        while (t-- > 0) {
            int n = sc.nextInt();
            System.out.println(sol.minDenominations(n));
        }
    }
}`
                    }
                },
                {
                    id: 'grooving-monkeys',
                    title: 'Grooving Monkeys',
                    difficulty: 'Hard',
                    description: `N monkeys are invited to a party where they start dancing. They dance in a circular formation, numbered from 1 to N. At every step, each monkey moves to a new position based on a fixed permutation pattern.

The dance continues until all monkeys return to their original initial positions. Your task is to find out after how many steps all monkeys will return to their original positions.

Input Format:
First line contains T, number of test cases.
For each test case:
First line contains N, number of monkeys.
Second line contains N integers representing the permutation pattern where the ith integer denotes the new position of the monkey initially at position i.

Output Format:
Print the number of steps required for all monkeys to return to their original positions.

Constraints:
1 <= T <= 10
1 <= N <= 10^5`,
                    examples: [
                        {
                            input: '1\n6\n3 6 5 4 1 2',
                            output: '6'
                        }
                    ],
                    testCases: [
                        {
                            input: '1\n6\n3 6 5 4 1 2',
                            judgeInput: '1\n6\n3 6 5 4 1 2',
                            output: '6'
                        },
                        {
                            input: '1\n4\n2 1 4 3',
                            judgeInput: '1\n4\n2 1 4 3',
                            output: '2'
                        },
                        {
                            input: '1\n3\n2 3 1',
                            judgeInput: '1\n3\n2 3 1',
                            output: '3'
                        },
                        {
                            input: '1\n5\n2 3 4 5 1',
                            judgeInput: '1\n5\n2 3 4 5 1',
                            output: '5'
                        },
                        {
                            input: '1\n4\n2 3 4 1',
                            judgeInput: '1\n4\n2 3 4 1',
                            output: '4'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} p
 * @return {number}
 */
function groovingMonkeys(p) {
    // Your code here
}`,
                        python: `def grooving_monkeys(p):
    """
    :type p: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

long long groovingMonkeys(vector<int>& p) {
    // Your code here
}`,
                        java: `public class Solution {
    public long groovingMonkeys(int[] p) {
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
    let lineIdx = 0;
    const t = parseInt(lines[lineIdx++]);
    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[lineIdx++]);
        const p = lines[lineIdx++].split(' ').map(Number);
        console.log(groovingMonkeys(p));
    }
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
line_idx = 0
t = int(lines[line_idx])
line_idx += 1
for _ in range(t):
    n = int(lines[line_idx])
    line_idx += 1
    p = list(map(int, lines[line_idx].split()))
    line_idx += 1
    print(grooving_monkeys(p))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

long long groovingMonkeys(vector<int>& p);

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> p(n);
        for (int i = 0; i < n; i++) cin >> p[i];
        cout << groovingMonkeys(p) << endl;
    }
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        Solution sol = new Solution();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] p = new int[n];
            for (int i = 0; i < n; i++) p[i] = sc.nextInt();
            System.out.println(sol.groovingMonkeys(p));
        }
    }
}`
                    }
                }
            ]
        }
    ]
};
