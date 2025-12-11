export const salesforceData = {
    id: 'salesforce',
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png',
    description: 'Practice real Salesforce Online Assessment questions.',
    assessments: [
        {
            id: 'salesforce-oa-1',
            title: 'Salesforce OA-1',
            duration: 90,
            problems: [
                {
                    id: 'lead-scoring',
                    title: 'Lead Scoring Optimization',
                    difficulty: 'Medium',
                    description: `Salesforce's Einstein AI needs to optimize lead scoring based on multiple factors.

You are given:
- 'scores': An array where scores[i] = [engagement, budget, timeline] for lead i
- 'weights': An array [w1, w2, w3] representing importance weights

Calculate the weighted score for each lead (engagement*w1 + budget*w2 + timeline*w3) and return the indices of the top 'k' leads sorted by score (descending).

Constraints:
- 1 <= n <= 1000
- 1 <= k <= n
- 1 <= scores[i][j] <= 100
- 1 <= weights[i] <= 10`,
                    examples: [
                        {
                            input: 'scores = [[5,10,8],[7,6,9],[10,5,7]], weights = [2,3,1], k = 2',
                            output: '[1,0]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'scores = [[5,10,8],[7,6,9],[10,5,7]], weights = [2,3,1], k = 2',
                            judgeInput: '3\n5 10 8\n7 6 9\n10 5 7\n2 3 1\n2',
                            output: '[1,0]'
                        },
                        {
                            input: 'scores = [[10,10,10]], weights = [1,1,1], k = 1',
                            judgeInput: '1\n10 10 10\n1 1 1\n1',
                            output: '[0]'
                        },
                        {
                            input: 'scores = [[1,2,3],[3,2,1],[2,2,2]], weights = [1,2,3], k = 3',
                            judgeInput: '3\n1 2 3\n3 2 1\n2 2 2\n1 2 3\n3',
                            output: '[0,2,1]'
                        },
                        {
                            input: 'scores = [[5,5,5],[10,10,10]], weights = [1,1,1], k = 1',
                            judgeInput: '2\n5 5 5\n10 10 10\n1 1 1\n1',
                            output: '[1]'
                        },
                        {
                            input: 'scores = [[8,7,6],[6,7,8],[7,7,7]], weights = [3,2,1], k = 2',
                            judgeInput: '3\n8 7 6\n6 7 8\n7 7 7\n3 2 1\n2',
                            output: '[0,2]'
                        },
                        {
                            input: 'scores = [[10,5,3],[5,10,3]], weights = [5,1,1], k = 1',
                            judgeInput: '2\n10 5 3\n5 10 3\n5 1 1\n1',
                            output: '[0]'
                        },
                        {
                            input: 'scores = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], weights = [1,1,1], k = 2',
                            judgeInput: '4\n1 1 1\n2 2 2\n3 3 3\n4 4 4\n1 1 1\n2',
                            output: '[3,2]'
                        },
                        {
                            input: 'scores = [[9,8,7],[8,9,7],[7,8,9]], weights = [10,1,1], k = 3',
                            judgeInput: '3\n9 8 7\n8 9 7\n7 8 9\n10 1 1\n3',
                            output: '[0,1,2]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} scores
 * @param {number[]} weights
 * @param {number} k
 * @return {number[]}
 */
function topLeads(scores, weights, k) {
    // Your code here
}`,
                        python: `def top_leads(scores, weights, k):
    """
    :type scores: List[List[int]]
    :type weights: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<int> topLeads(vector<vector<int>>& scores, vector<int>& weights, int k) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[] topLeads(int[][] scores, int[] weights, int k) {
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
    const scores = [];
    for(let i=1; i<=n; i++) {
        scores.push(lines[i].split(' ').map(Number));
    }
    const weights = lines[n+1].split(' ').map(Number);
    const k = parseInt(lines[n+2]);
    console.log(JSON.stringify(topLeads(scores, weights, k)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
scores = []
for i in range(1, n+1):
    scores.append(list(map(int, lines[i].split())))
weights = list(map(int, lines[n+1].split()))
k = int(lines[n+2])
print(json.dumps(top_leads(scores, weights, k)))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> topLeads(vector<vector<int>>& scores, vector<int>& weights, int k);

int main() {
    int n, k;
    cin >> n;
    vector<vector<int>> scores(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        for(int j=0; j<3; ++j) cin >> scores[i][j];
    }
    vector<int> weights(3);
    for(int i=0; i<3; ++i) cin >> weights[i];
    cin >> k;
    vector<int> res = topLeads(scores, weights, k);
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
        int[][] scores = new int[n][3];
        for(int i=0; i<n; i++) {
            for(int j=0; j<3; j++) {
                scores[i][j] = sc.nextInt();
            }
        }
        int[] weights = new int[3];
        for(int i=0; i<3; i++) weights[i] = sc.nextInt();
        int k = sc.nextInt();
        Solution sol = new Solution();
        int[] res = sol.topLeads(scores, weights, k);
        System.out.print("[");
        for(int i=0; i<res.length; i++) {
            System.out.print(res[i]);
            if(i < res.length-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                },
                {
                    id: 'data-dedup',
                    title: 'Customer Record Deduplication',
                    difficulty: 'Easy',
                    description: `Salesforce needs to identify duplicate customer records based on email similarity.

You are given an array 'emails' and need to group similar emails together. Two emails are similar if they differ by at most 1 character.

Return the number of unique email groups.

Constraints:
- 1 <= emails.length <= 100
- emails[i].length == emails[j].length for all i, j`,
                    examples: [
                        {
                            input: 'emails = ["abc@x.com","abd@x.com","xyz@y.com"]',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'emails = ["abc@x.com","abd@x.com","xyz@y.com"]',
                            judgeInput: '3\nabc@x.com\nabd@x.com\nxyz@y.com',
                            output: '2'
                        },
                        {
                            input: 'emails = ["test@a.com","test@a.com"]',
                            judgeInput: '2\ntest@a.com\ntest@a.com',
                            output: '1'
                        },
                        {
                            input: 'emails = ["aaa@x.com","bbb@x.com","ccc@x.com"]',
                            judgeInput: '3\naaa@x.com\nbbb@x.com\nccc@x.com',
                            output: '3'
                        },
                        {
                            input: 'emails = ["hello@co.in"]',
                            judgeInput: '1\nhello@co.in',
                            output: '1'
                        },
                        {
                            input: 'emails = ["same@d.com","samf@d.com","same@d.com"]',
                            judgeInput: '3\nsame@d.com\nsamf@d.com\nsame@d.com',
                            output: '1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string[]} emails
 * @return {number}
 */
function countUniqueGroups(emails) {
    // Your code here
}`,
                        python: `def count_unique_groups(emails):
    """
    :type emails: List[str]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <string>
using namespace std;

int countUniqueGroups(vector<string>& emails) {
    // Your code here
}`,
                        java: `public class Solution {
    public int countUniqueGroups(String[] emails) {
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
    const emails = [];
    for(let i=1; i<=n; i++) {
        emails.push(lines[i]);
    }
    console.log(countUniqueGroups(emails));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
emails = []
for i in range(1, n+1):
    emails.append(lines[i])
print(count_unique_groups(emails))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int countUniqueGroups(vector<string>& emails);

int main() {
    int n;
    cin >> n;
    vector<string> emails(n);
    for(int i=0; i<n; ++i) cin >> emails[i];
    cout << countUniqueGroups(emails) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] emails = new String[n];
        for(int i=0; i<n; i++) emails[i] = sc.next();
        Solution sol = new Solution();
        System.out.println(sol.countUniqueGroups(emails));
    }
}`
                    }
                }
            ]
        }
    ]
};
