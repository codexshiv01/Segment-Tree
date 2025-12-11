export const autodeskData = {
    id: 'autodesk',
    name: 'Autodesk',
    logo: 'https://logo.clearbit.com/autodesk.com',
    description: 'Solve geometry and design automation problems.',
    assessments: [{
        id: 'autodesk-oa-1',
        title: 'Autodesk OA-1',
        duration: 90,
        problems: [{
            id: 'component-assembly',
            title: 'Component Assembly Order',
            difficulty: 'Medium',
            description: `You are building a complex 3D model in AutoCAD. The model consists of N components, labeled from 0 to N-1.
Some components must be assembled before others. You are given a list of dependencies where \`dependencies[i] = [a, b]\` means component \`b\` must be assembled before component \`a\`.

Find a valid order to assemble all components. If there are multiple valid orders, return the one that is **lexicographically smallest**.
If it is impossible to assemble all components (due to a cycle), return an empty list.

Input Format:
- First line: N (number of components)
- Second line: M (number of dependencies)
- Next M lines: a b (component a depends on b)

Output Format:
- Space-separated integers representing the assembly order.

Constraints:
- 1 <= N <= 1000
- 0 <= M <= N * (N - 1) / 2
- 0 <= a, b < N
`,
            examples: [
                {
                    input: '4\n4\n1 0\n2 0\n3 1\n3 2',
                    output: '0 1 2 3'
                },
                {
                    input: '2\n2\n1 0\n0 1',
                    output: ''
                }
            ],
            testCases: [
                {
                    input: '4\n4\n1 0\n2 0\n3 1\n3 2',
                    judgeInput: '4\n4\n1 0\n2 0\n3 1\n3 2',
                    output: '0 1 2 3'
                },
                {
                    input: '2\n2\n1 0\n0 1',
                    judgeInput: '2\n2\n1 0\n0 1',
                    output: ''
                },
                {
                    input: '6\n6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1',
                    judgeInput: '6\n6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1',
                    output: '0 1 3 2 4 5'
                },
                {
                    input: '3\n0',
                    judgeInput: '3\n0',
                    output: '0 1 2'
                },
                {
                    input: '5\n4\n1 0\n2 1\n3 2\n4 3',
                    judgeInput: '5\n4\n1 0\n2 1\n3 2\n4 3',
                    output: '0 1 2 3 4'
                },
                {
                    input: '3\n3\n1 0\n2 1\n0 2',
                    judgeInput: '3\n3\n1 0\n2 1\n0 2',
                    output: ''
                },
                {
                    input: '5\n5\n3 0\n3 1\n4 2\n4 0\n1 2',
                    judgeInput: '5\n5\n3 0\n3 1\n4 2\n4 0\n1 2',
                    output: '0 2 1 4 3'
                },
                {
                    input: '4\n3\n1 0\n2 0\n3 0',
                    judgeInput: '4\n3\n1 0\n2 0\n3 0',
                    output: '0 1 2 3'
                },
                {
                    input: '1\n0',
                    judgeInput: '1\n0',
                    output: '0'
                },
                {
                    input: '2\n1\n1 0',
                    judgeInput: '2\n1\n1 0',
                    output: '0 1'
                }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @return {number[]}
 */
function assemblyOrder(n, dependencies) {
    // Your code here
}`,
                python: `def assembly_order(n, dependencies):
    """
    :type n: int
    :type dependencies: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

vector<int> assemblyOrder(int n, vector<vector<int>>& dependencies) {
    // Your code here
}`,
                java: `import java.util.*;

public class Solution {
    public int[] assemblyOrder(int n, int[][] dependencies) {
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
    const dependencies = [];
    for (let i = 2; i < 2 + m; i++) {
        dependencies.push(lines[i].split(' ').map(Number));
    }
    console.log(assemblyOrder(n, dependencies).join(' '));
});`,
                python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
m = int(lines[1])
dependencies = []
for i in range(2, 2 + m):
    dependencies.append(list(map(int, lines[i].split())))
result = assembly_order(n, dependencies)
print(" ".join(map(str, result)))`,
                cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> assemblyOrder(int n, vector<vector<int>>& dependencies);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> dependencies(m, vector<int>(2));
    for (int i = 0; i < m; i++) {
        cin >> dependencies[i][0] >> dependencies[i][1];
    }
    vector<int> result = assemblyOrder(n, dependencies);
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << (i == result.size() - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
                java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] dependencies = new int[m][2];
        for (int i = 0; i < m; i++) {
            dependencies[i][0] = sc.nextInt();
            dependencies[i][1] = sc.nextInt();
        }
        Solution sol = new Solution();
        int[] result = sol.assemblyOrder(n, dependencies);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + (i == result.length - 1 ? "" : " "));
        }
        System.out.println();
    }
}`
            }
        }]
    }]
};
