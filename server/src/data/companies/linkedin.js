export const linkedinData = {
    id: 'linkedin',
    name: 'LinkedIn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png',
    description: 'Practice real LinkedIn Online Assessment questions.',
    assessments: [
        {
            id: 'linkedin-oa-1',
            title: 'LinkedIn OA-1',
            duration: 90,
            problems: [
                {
                    id: 'connection-degrees',
                    title: 'Network Degrees of Separation',
                    difficulty: 'Medium',
                    description: `LinkedIn's "People You May Know" feature needs to calculate connection degrees.

You are given a graph of connections where connections[i] = [person_a, person_b] represents a mutual connection.

Find the shortest degree of separation between two people. Return -1 if they're not connected.

Note: 1st degree = direct connection, 2nd degree = friend of friend, etc.

Constraints:
- 1 <= n <= 1000
- 0 <= connections.length <= 5000`,
                    examples: [
                        {
                            input: 'n = 5, connections = [[0,1],[1,2],[2,3],[3,4]], person1 = 0, person2 = 4',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'n = 5, connections = [[0,1],[1,2],[2,3],[3,4]], person1 = 0, person2 = 4',
                            judgeInput: '5\n4\n0 1\n1 2\n2 3\n3 4\n0 4',
                            output: '4'
                        },
                        {
                            input: 'n = 4, connections = [[0,1],[2,3]], person1 = 0, person2 = 3',
                            judgeInput: '4\n2\n0 1\n2 3\n0 3',
                            output: '-1'
                        },
                        {
                            input: 'n = 3, connections = [[0,1],[0,2]], person1 = 1, person2 = 2',
                            judgeInput: '3\n2\n0 1\n0 2\n1 2',
                            output: '2'
                        },
                        {
                            input: 'n = 2, connections = [[0,1]], person1 = 0, person2 = 1',
                            judgeInput: '2\n1\n0 1\n0 1',
                            output: '1'
                        },
                        {
                            input: 'n = 6, connections = [[0,1],[1,2],[3,4],[4,5],[2,3]], person1 = 0, person2 = 5',
                            judgeInput: '6\n5\n0 1\n1 2\n3 4\n4 5\n2 3\n0 5',
                            output: '5'
                        },
                        {
                            input: 'n = 1, connections = [], person1 = 0, person2 = 0',
                            judgeInput: '1\n0\n0 0',
                            output: '0'
                        },
                        {
                            input: 'n = 5, connections = [[0,1],[0,2],[0,3],[0,4]], person1 = 1, person2 = 4',
                            judgeInput: '5\n4\n0 1\n0 2\n0 3\n0 4\n1 4',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number[][]} connections
 * @param {number} person1
 * @param {number} person2
 * @return {number}
 */
function degreeOfSeparation(n, connections, person1, person2) {
    // Your code here
}`,
                        python: `def degree_of_separation(n, connections, person1, person2):
    """
    :type n: int
    :type connections: List[List[int]]
    :type person1: int
    :type person2: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int degreeOfSeparation(int n, vector<vector<int>>& connections, int person1, int person2) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int degreeOfSeparation(int n, int[][] connections, int person1, int person2) {
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
    const [person1, person2] = lines[m+2].split(' ').map(Number);
    console.log(degreeOfSeparation(n, connections, person1, person2));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
m = int(lines[1])
connections = []
for i in range(2, m+2):
    connections.append(list(map(int, lines[i].split())))
person1, person2 = map(int, lines[m+2].split())
print(degree_of_separation(n, connections, person1, person2))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int degreeOfSeparation(int n, vector<vector<int>>& connections, int person1, int person2);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> connections(m, vector<int>(2));
    for(int i=0; i<m; ++i) cin >> connections[i][0] >> connections[i][1];
    int person1, person2;
    cin >> person1 >> person2;
    cout << degreeOfSeparation(n, connections, person1, person2) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] connections = new int[m][2];
        for(int i=0; i<m; i++) {
            connections[i][0] = sc.nextInt();
            connections[i][1] = sc.nextInt();
        }
        int person1 = sc.nextInt();
        int person2 = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.degreeOfSeparation(n, connections, person1, person2));
    }
}`
                    }
                },
                {
                    id: 'skill-endorsements',
                    title: 'Top Skills Aggregator',
                    difficulty: 'Easy',
                    description: `LinkedIn's profile feature wants to show top endorsed skills.

You are given an array 'endorsements' where endorsements[i] represents a skill ID that received an endorsement.

Return the top 'k' most endorsed skills, sorted by endorsement count (descending). If tied, maintain original order.

Constraints:
- 1 <= k <= endorsements.length <= 10^4
- 1 <= endorsements[i] <= 100`,
                    examples: [
                        {
                            input: 'endorsements = [1,2,1,3,2,1], k = 2',
                            output: '[1,2]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'endorsements = [1,2,1,3,2,1], k = 2',
                            judgeInput: '6\n1 2 1 3 2 1\n2',
                            output: '[1,2]'
                        },
                        {
                            input: 'endorsements = [5,5,5,5], k = 1',
                            judgeInput: '4\n5 5 5 5\n1',
                            output: '[5]'
                        },
                        {
                            input: 'endorsements = [10,20,30], k = 3',
                            judgeInput: '3\n10 20 30\n3',
                            output: '[10,20,30]'
                        },
                        {
                            input: 'endorsements = [1,1,2,2,3,3], k = 2',
                            judgeInput: '6\n1 1 2 2 3 3\n2',
                            output: '[1,2]'
                        },
                        {
                            input: 'endorsements = [7,8,9,7,8,7], k = 3',
                            judgeInput: '6\n7 8 9 7 8 7\n3',
                            output: '[7,8,9]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} endorsements
 * @param {number} k
 * @return {number[]}
 */
function topSkills(endorsements, k) {
    // Your code here
}`,
                        python: `def top_skills(endorsements, k):
    """
    :type endorsements: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<int> topSkills(vector<int>& endorsements, int k) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[] topSkills(int[] endorsements, int k) {
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
    const endorsements = lines[1].split(' ').map(Number);
    const k = parseInt(lines[2]);
    console.log(JSON.stringify(topSkills(endorsements, k)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
endorsements = list(map(int, lines[1].split()))
k = int(lines[2])
print(json.dumps(top_skills(endorsements, k)))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> topSkills(vector<int>& endorsements, int k);

int main() {
    int n, k;
    cin >> n;
    vector<int> endorsements(n);
    for(int i=0; i<n; ++i) cin >> endorsements[i];
    cin >> k;
    vector<int> res = topSkills(endorsements, k);
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << res[i];
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
        int[] endorsements = new int[n];
        for(int i=0; i<n; i++) endorsements[i] = sc.nextInt();
        int k = sc.nextInt();
        Solution sol = new Solution();
        int[] res = sol.topSkills(endorsements, k);
        System.out.print("[");
        for(int i=0; i<res.length; i++) {
            System.out.print(res[i]);
            if(i < res.length-1) System.out.print(",");
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
