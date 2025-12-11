export const infosysData = {
    id: 'infosys',
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png',
    description: 'Practice Infosys Specialist Programmer (SP) and Digital Specialist Engineer (DSE) questions.',
    assessments: [
        {
            id: 'infosys-sp-1',
            title: 'Infosys SP Round 1',
            duration: 180,
            problems: [
                {
                    id: 'rpg-game',
                    title: 'RPG Game',
                    difficulty: 'Medium',
                    description: `In a Role Playing Game (RPG), you are playing as a hero who has an initial experience level 'E'. You encounter 'N' monsters. Each monster has a power level 'P_i' and gives a bonus experience 'B_i' upon defeat.

You can defeat a monster only if your current experience level is greater than or equal to the monster's power level. When you defeat a monster, your experience level increases by the bonus experience 'B_i'.

You can fight the monsters in any order. Your task is to determine the maximum number of monsters you can defeat.

Input Format:
The first line contains an integer 'N', the number of monsters.
The second line contains an integer 'E', the initial experience level.
The third line contains 'N' space-separated integers representing the power levels of the monsters.
The fourth line contains 'N' space-separated integers representing the bonus experience of the monsters.

Output Format:
Print a single integer representing the maximum number of monsters you can defeat.

Constraints:
1 <= N <= 10^5
1 <= E <= 10^9
1 <= P_i <= 10^9
1 <= B_i <= 10^9`,
                    examples: [
                        {
                            input: '2\n123\n78 130\n10 0',
                            output: '2'
                        },
                        {
                            input: '3\n100\n101 100 304\n100 1 524',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: '2\n123\n78 130\n10 0',
                            judgeInput: '2\n123\n78 130\n10 0',
                            output: '2'
                        },
                        {
                            input: '3\n100\n101 100 304\n100 1 524',
                            judgeInput: '3\n100\n101 100 304\n100 1 524',
                            output: '2'
                        },
                        {
                            input: '1\n10\n10\n5',
                            judgeInput: '1\n10\n10\n5',
                            output: '1'
                        },
                        {
                            input: '1\n10\n11\n5',
                            judgeInput: '1\n10\n11\n5',
                            output: '0'
                        },
                        {
                            input: '4\n10\n5 15 25 35\n5 5 5 5',
                            judgeInput: '4\n10\n5 15 25 35\n5 5 5 5',
                            output: '4'
                        },
                        {
                            input: '4\n10\n5 15 25 36\n5 5 5 5',
                            judgeInput: '4\n10\n5 15 25 36\n5 5 5 5',
                            output: '3'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number} e
 * @param {number[]} power
 * @param {number[]} bonus
 * @return {number}
 */
function maxMonsters(n, e, power, bonus) {
    // Your code here
}`,
                        python: `def max_monsters(n, e, power, bonus):
    """
    :type n: int
    :type e: int
    :type power: List[int]
    :type bonus: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxMonsters(int n, int e, vector<int>& power, vector<int>& bonus) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxMonsters(int n, int e, int[] power, int[] bonus) {
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
    const e = parseInt(lines[1]);
    const power = lines[2].split(' ').map(Number);
    const bonus = lines[3].split(' ').map(Number);
    console.log(maxMonsters(n, e, power, bonus));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
e = int(lines[1])
power = list(map(int, lines[2].split()))
bonus = list(map(int, lines[3].split()))
print(max_monsters(n, e, power, bonus))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxMonsters(int n, int e, vector<int>& power, vector<int>& bonus);

int main() {
    int n, e;
    cin >> n >> e;
    vector<int> power(n), bonus(n);
    for (int i = 0; i < n; i++) cin >> power[i];
    for (int i = 0; i < n; i++) cin >> bonus[i];
    cout << maxMonsters(n, e, power, bonus) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int e = sc.nextInt();
        int[] power = new int[n];
        int[] bonus = new int[n];
        for (int i = 0; i < n; i++) power[i] = sc.nextInt();
        for (int i = 0; i < n; i++) bonus[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxMonsters(n, e, power, bonus));
    }
}`
                    }
                },
                {
                    id: 'grid-path-obstacles',
                    title: 'Grid Path with Obstacles',
                    difficulty: 'Medium',
                    description: `You are given a grid of size M x N. Some cells contain obstacles (represented by 1), and others are empty (represented by 0).

You start at the top-left corner (0, 0) and want to reach the bottom-right corner (M-1, N-1). You can only move either down or right at any point in time.

Calculate the number of unique paths from the start to the destination. Since the answer can be large, return it modulo 10^9 + 7.

Input Format:
The first line contains two integers M and N.
The next M lines contain N integers each, representing the grid.

Output Format:
Print a single integer representing the number of unique paths modulo 10^9 + 7.

Constraints:
1 <= M, N <= 1000`,
                    examples: [
                        {
                            input: '3 3\n0 0 0\n0 1 0\n0 0 0',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: '3 3\n0 0 0\n0 1 0\n0 0 0',
                            judgeInput: '3 3\n0 0 0\n0 1 0\n0 0 0',
                            output: '2'
                        },
                        {
                            input: '2 2\n0 1\n0 0',
                            judgeInput: '2 2\n0 1\n0 0',
                            output: '1'
                        },
                        {
                            input: '2 2\n0 0\n0 0',
                            judgeInput: '2 2\n0 0\n0 0',
                            output: '2'
                        },
                        {
                            input: '3 3\n1 0 0\n0 0 0\n0 0 0',
                            judgeInput: '3 3\n1 0 0\n0 0 0\n0 0 0',
                            output: '0'
                        },
                        {
                            input: '3 3\n0 0 0\n0 0 0\n0 0 1',
                            judgeInput: '3 3\n0 0 0\n0 0 0\n0 0 1',
                            output: '0'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} grid
 * @return {number}
 */
function uniquePathsWithObstacles(grid) {
    // Your code here
}`,
                        python: `def unique_paths_with_obstacles(grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int uniquePathsWithObstacles(vector<vector<int>>& grid) {
    // Your code here
}`,
                        java: `public class Solution {
    public int uniquePathsWithObstacles(int[][] grid) {
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
    const [m, n] = lines[0].split(' ').map(Number);
    const grid = [];
    for (let i = 1; i <= m; i++) {
        grid.push(lines[i].split(' ').map(Number));
    }
    console.log(uniquePathsWithObstacles(grid));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
m, n = map(int, lines[0].split())
grid = []
for i in range(1, m + 1):
    grid.append(list(map(int, lines[i].split())))
print(unique_paths_with_obstacles(grid))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int uniquePathsWithObstacles(vector<vector<int>>& grid);

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
        }
    }
    cout << uniquePathsWithObstacles(grid) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] grid = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        Solution sol = new Solution();
        System.out.println(sol.uniquePathsWithObstacles(grid));
    }
}`
                    }
                }
            ]
        }
    ]
};
