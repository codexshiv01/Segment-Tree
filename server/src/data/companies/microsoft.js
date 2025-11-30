export const microsoftData = {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    description: 'Practice real Microsoft Online Assessment questions.',
    assessments: [
        {
            id: 'microsoft-oa-1',
            title: 'Microsoft OA-1',
            duration: 75,
            problems: [
                {
                    id: 'good-nodes',
                    title: 'Azure Network Routing',
                    difficulty: 'Medium',
                    description: `Microsoft Azure's networking team is optimizing data packet routing. The network topology is represented as a binary tree where each node has a signal strength value.

A node X is considered "visible" (or "good") if, on the path from the root server to node X, there are no nodes with a signal strength strictly greater than X.

Given the root of this binary tree, return the number of visible nodes.

Constraints:
- The number of nodes in the binary tree is in the range [1, 10^5].
- Each node's value is between [-10^4, 10^4].`,
                    examples: [
                        {
                            input: 'root = [3,1,4,3,null,1,5]',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'root = [3,1,4,3,null,1,5]',
                            judgeInput: '7\n3 1 4 3 null 1 5',
                            output: '4'
                        },
                        {
                            input: 'root = [3,3,null,4,2]',
                            judgeInput: '5\n3 3 null 4 2',
                            output: '3'
                        },
                        {
                            input: 'root = [1]',
                            judgeInput: '1\n1',
                            output: '1'
                        },
                        {
                            input: 'root = [2,4,6,null,null,8,10]',
                            judgeInput: '7\n2 4 6 null null 8 10',
                            output: '5'
                        },
                        {
                            input: 'root = [10,5,15,1,8,null,20]',
                            judgeInput: '7\n10 5 15 1 8 null 20',
                            output: '3'
                        },
                        {
                            input: 'root = [-2,-1,-3]',
                            judgeInput: '3\n-2 -1 -3',
                            output: '2'
                        },
                        {
                            input: 'root = [9,null,3,null,6]',
                            judgeInput: '5\n9 null 3 null 6',
                            output: '1'
                        },
                        {
                            input: 'root = [1,2,3,4,5]',
                            judgeInput: '5\n1 2 3 4 5',
                            output: '5'
                        },
                        {
                            input: 'root = [5,4,3,2,1]',
                            judgeInput: '5\n5 4 3 2 1',
                            output: '1'
                        },
                        {
                            input: 'root = [2,2,2,2,2]',
                            judgeInput: '5\n2 2 2 2 2',
                            output: '5'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root) {
    // Your code here
}`,
                        python: `def good_nodes(root):
    """
    :type root: TreeNode
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int goodNodes(TreeNode* root) {
    // Your code here
}`,
                        java: `public class Solution {
    public int goodNodes(TreeNode root) {
        // Your code here
    }
}`
                    },
                    driverCode: {
                        javascript: `
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const n = parseInt(lines[0]);
    const vals = lines[1].split(' ');
    
    if (n === 0) {
        console.log(0);
        return;
    }

    let root = new TreeNode(parseInt(vals[0]));
    let queue = [root];
    let i = 1;
    while (i < n) {
        let curr = queue.shift();
        if (vals[i] !== 'null') {
            curr.left = new TreeNode(parseInt(vals[i]));
            queue.push(curr.left);
        }
        i++;
        if (i < n && vals[i] !== 'null') {
            curr.right = new TreeNode(parseInt(vals[i]));
            queue.push(curr.right);
        }
        i++;
    }
    console.log(goodNodes(root));
});`,
                        python: `
import sys

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
if n == 0:
    print(0)
    sys.exit()

vals = lines[1].split()
root = TreeNode(int(vals[0]))
queue = [root]
i = 1
while i < n:
    curr = queue.pop(0)
    if vals[i] != 'null':
        curr.left = TreeNode(int(vals[i]))
        queue.append(curr.left)
    i += 1
    if i < n and vals[i] != 'null':
        curr.right = TreeNode(int(vals[i]))
        queue.append(curr.right)
    i += 1

print(good_nodes(root))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

int goodNodes(TreeNode* root);

int main() {
    int n;
    cin >> n;
    if (n == 0) {
        cout << 0 << endl;
        return 0;
    }
    vector<string> vals(n);
    for(int i=0; i<n; ++i) cin >> vals[i];
    
    TreeNode* root = new TreeNode(stoi(vals[0]));
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while(i < n) {
        TreeNode* curr = q.front();
        q.pop();
        if(vals[i] != "null") {
            curr->left = new TreeNode(stoi(vals[i]));
            q.push(curr->left);
        }
        i++;
        if(i < n && vals[i] != "null") {
            curr->right = new TreeNode(stoi(vals[i]));
            q.push(curr->right);
        }
        i++;
    }
    cout << goodNodes(root) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n == 0) {
            System.out.println(0);
            return;
        }
        String[] vals = new String[n];
        for(int i=0; i<n; i++) vals[i] = sc.next();
        
        TreeNode root = new TreeNode(Integer.parseInt(vals[0]));
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while(i < n) {
            TreeNode curr = q.poll();
            if(!vals[i].equals("null")) {
                curr.left = new TreeNode(Integer.parseInt(vals[i]));
                q.add(curr.left);
            }
            i++;
            if(i < n && !vals[i].equals("null")) {
                curr.right = new TreeNode(Integer.parseInt(vals[i]));
                q.add(curr.right);
            }
            i++;
        }
        
        Solution sol = new Solution();
        System.out.println(sol.goodNodes(root));
    }
}`
                    }
                },
                {
                    id: 'min-deletions',
                    title: 'Teams Message Compressor',
                    difficulty: 'Medium',
                    description: `Microsoft Teams is implementing a new text compression algorithm. A string is considered "optimally compressed" (or "good") if no two different characters in the string have the same frequency.

Given a string 's', return the minimum number of characters you need to delete to make 's' optimally compressed.

The frequency of a character is the number of times it appears in the string.

Constraints:
- 1 <= s.length <= 10^5
- s contains only lowercase English letters.`,
                    examples: [
                        {
                            input: 's = "aab"',
                            output: '0'
                        },
                        {
                            input: 's = "aaabbbcc"',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 's = "aab"',
                            judgeInput: 'aab',
                            output: '0'
                        },
                        {
                            input: 's = "aaabbbcc"',
                            judgeInput: 'aaabbbcc',
                            output: '2'
                        },
                        {
                            input: 's = "ceabaacb"',
                            judgeInput: 'ceabaacb',
                            output: '2'
                        },
                        {
                            input: 's = "abc"',
                            judgeInput: 'abc',
                            output: '2'
                        },
                        {
                            input: 's = "aabbcc"',
                            judgeInput: 'aabbcc',
                            output: '2'
                        },
                        {
                            input: 's = "aaaa"',
                            judgeInput: 'aaaa',
                            output: '0'
                        },
                        {
                            input: 's = "bbcebab"',
                            judgeInput: 'bbcebab',
                            output: '2'
                        },
                        {
                            input: 's = "accdcdadd"',
                            judgeInput: 'accdcdadd',
                            output: '1'
                        },
                        {
                            input: 's = "aaaabbbbccccdddd"',
                            judgeInput: 'aaaabbbbccccdddd',
                            output: '6'
                        },
                        {
                            input: 's = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: 'abcdefghijklmnopqrstuvwxyz',
                            output: '325'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string} s
 * @return {number}
 */
function minDeletions(s) {
    // Your code here
}`,
                        python: `def min_deletions(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <string>
using namespace std;

int minDeletions(string s) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minDeletions(String s) {
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
    const s = lines[0];
    console.log(minDeletions(s));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
s = lines[0]
print(min_deletions(s))`,
                        cpp: `
#include <iostream>
#include <string>
using namespace std;

int minDeletions(string s);

int main() {
    string s;
    getline(cin, s);
    cout << minDeletions(s) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String s = sc.nextLine();
            Solution sol = new Solution();
            System.out.println(sol.minDeletions(s));
        }
    }
}`
                    }
                }
            ]
        },
        {
            id: 'microsoft-oa-2',
            title: 'Microsoft OA-2',
            duration: 75,
            problems: [
                {
                    id: 'sign-product',
                    title: 'Excel Calculation Engine',
                    difficulty: 'Easy',
                    description: `The Microsoft Excel team is optimizing the calculation engine for large datasets. They need a quick way to determine the sign of the product of a large array of numbers without actually computing the potentially massive product.

Implement a function 'signFunc(x)' that returns:
- 1 if x is positive.
- -1 if x is negative.
- 0 if x is equal to 0.

Given an integer array 'nums', let 'product' be the product of all values in the array. Return signFunc(product).

Constraints:
- 1 <= nums.length <= 1000
- -100 <= nums[i] <= 100`,
                    examples: [
                        {
                            input: 'nums = [-1,-2,-3,-4,3,2,1]',
                            output: '1'
                        }
                    ],
                    testCases: [
                        {
                            input: 'nums = [-1,-2,-3,-4,3,2,1]',
                            judgeInput: '7\n-1 -2 -3 -4 3 2 1',
                            output: '1'
                        },
                        {
                            input: 'nums = [1,5,0,2,-3]',
                            judgeInput: '5\n1 5 0 2 -3',
                            output: '0'
                        },
                        {
                            input: 'nums = [-1,1,-1,1,-1]',
                            judgeInput: '5\n-1 1 -1 1 -1',
                            output: '-1'
                        },
                        {
                            input: 'nums = [1,2,3,4,5]',
                            judgeInput: '5\n1 2 3 4 5',
                            output: '1'
                        },
                        {
                            input: 'nums = [-1,-2,-3]',
                            judgeInput: '3\n-1 -2 -3',
                            output: '-1'
                        },
                        {
                            input: 'nums = [0]',
                            judgeInput: '1\n0',
                            output: '0'
                        },
                        {
                            input: 'nums = [-5]',
                            judgeInput: '1\n-5',
                            output: '-1'
                        },
                        {
                            input: 'nums = [100]',
                            judgeInput: '1\n100',
                            output: '1'
                        },
                        {
                            input: 'nums = [41, 65, 14, 80, 20, 10, 55, 58, 24, 56, 28, 86, 96, 10, 3, 84, 4, 41, 13, 32, 42, 43, 83, 78, 82, 70, 15, -41]',
                            judgeInput: '28\n41 65 14 80 20 10 55 58 24 56 28 86 96 10 3 84 4 41 13 32 42 43 83 78 82 70 15 -41',
                            output: '-1'
                        },
                        {
                            input: 'nums = [9,72,34,29,-49,-22,-77,-17,-66,-75,-44,-30,-24]',
                            judgeInput: '13\n9 72 34 29 -49 -22 -77 -17 -66 -75 -44 -30 -24',
                            output: '-1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
    // Your code here
}`,
                        python: `def array_sign(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int arraySign(vector<int>& nums) {
    // Your code here
}`,
                        java: `public class Solution {
    public int arraySign(int[] nums) {
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
    const nums = lines[1].split(' ').map(Number);
    console.log(arraySign(nums));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
nums = list(map(int, lines[1].split()))
print(array_sign(nums))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int arraySign(vector<int>& nums);

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i=0; i<n; ++i) cin >> nums[i];
    cout << arraySign(nums) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.arraySign(nums));
    }
}`
                    }
                },
                {
                    id: 'cinema-seat-allocation',
                    title: 'Microsoft Theater Booking',
                    difficulty: 'Medium',
                    description: `Microsoft is hosting a major tech conference at a theater with 'n' rows of seats. Each row has 10 seats, labelled 1 to 10.

Some seats are already reserved. You are given an array 'reservedSeats' where reservedSeats[i] = [row, seat_number].

To maximize attendee comfort, you want to allocate seats for families of 4. A 4-person family needs 4 adjacent seats in a single row.
- Seats across an aisle (between seats 3-4 and 7-8) are NOT adjacent.
- However, the middle aisle (between 5-6) can be split if a family sits in [4,5,6,7].

Return the maximum number of 4-person families you can seat.

Constraints:
- 1 <= n <= 10^9
- 1 <= reservedSeats.length <= min(10*n, 10^4)
- reservedSeats[i].length == 2`,
                    examples: [
                        {
                            input: 'n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]',
                            judgeInput: '3\n6\n1 2\n1 3\n1 8\n2 6\n3 1\n3 10',
                            output: '4'
                        },
                        {
                            input: 'n = 2, reservedSeats = [[2,1],[1,8],[2,6]]',
                            judgeInput: '2\n3\n2 1\n1 8\n2 6',
                            output: '2'
                        },
                        {
                            input: 'n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]',
                            judgeInput: '4\n4\n4 3\n1 4\n4 6\n1 7',
                            output: '4'
                        },
                        {
                            input: 'n = 1, reservedSeats = []',
                            judgeInput: '1\n0',
                            output: '2'
                        },
                        {
                            input: 'n = 5, reservedSeats = [[1,1],[1,10]]',
                            judgeInput: '5\n2\n1 1\n1 10',
                            output: '10'
                        },
                        {
                            input: 'n = 2, reservedSeats = [[1,5],[2,6]]',
                            judgeInput: '2\n2\n1 5\n2 6',
                            output: '2'
                        },
                        {
                            input: 'n = 10, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]',
                            judgeInput: '10\n6\n1 2\n1 3\n1 8\n2 6\n3 1\n3 10',
                            output: '18'
                        },
                        {
                            input: 'n = 1, reservedSeats = [[1,4],[1,5]]',
                            judgeInput: '1\n2\n1 4\n1 5',
                            output: '1'
                        },
                        {
                            input: 'n = 1, reservedSeats = [[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]]',
                            judgeInput: '1\n8\n1 2\n1 3\n1 4\n1 5\n1 6\n1 7\n1 8\n1 9',
                            output: '0'
                        },
                        {
                            input: 'n = 1000000000, reservedSeats = [[1,2],[1,3]]',
                            judgeInput: '1000000000\n2\n1 2\n1 3',
                            output: '1999999999'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
function maxNumberOfFamilies(n, reservedSeats) {
    // Your code here
}`,
                        python: `def max_number_of_families(n, reservedSeats):
    """
    :type n: int
    :type reservedSeats: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxNumberOfFamilies(int n, vector<vector<int>>& reservedSeats) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int maxNumberOfFamilies(int n, int[][] reservedSeats) {
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
    const reservedSeats = [];
    for(let i=2; i<m+2; i++) {
        reservedSeats.push(lines[i].split(' ').map(Number));
    }
    console.log(maxNumberOfFamilies(n, reservedSeats));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
m = int(lines[1])
reservedSeats = []
for i in range(2, m+2):
    reservedSeats.append(list(map(int, lines[i].split())))
print(max_number_of_families(n, reservedSeats))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxNumberOfFamilies(int n, vector<vector<int>>& reservedSeats);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> reservedSeats(m, vector<int>(2));
    for(int i=0; i<m; ++i) cin >> reservedSeats[i][0] >> reservedSeats[i][1];
    cout << maxNumberOfFamilies(n, reservedSeats) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] reservedSeats = new int[m][2];
        for(int i=0; i<m; i++) {
            reservedSeats[i][0] = sc.nextInt();
            reservedSeats[i][1] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.maxNumberOfFamilies(n, reservedSeats));
    }
}`
                    }
                }
            ]
        }
    ]
};
