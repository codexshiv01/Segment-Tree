export const googleData = {
    id: 'google',
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description: 'Practice real Google Online Assessment questions.',
    assessments: [
        {
            id: 'google-oa-1',
            title: 'Google OA-1',
            duration: 75,
            problems: [
                {
                    id: 'meeting-scheduler',
                    title: 'Calendar Optimization',
                    difficulty: 'Medium',
                    description: `The Google Calendar team is working on a new "Smart Schedule" feature. They need to find the minimum number of conference rooms required to host a set of meetings at a Google campus.

You are given an array of meeting time slots, where each slot is represented as [start_time, end_time].

Your task is to determine the minimum number of rooms needed so that no two meetings overlap in the same room.

Note: A meeting ending at time T and another starting at time T can share the same room.

Constraints:
- 1 <= meetings.length <= 10^4
- 0 <= start_time < end_time <= 1440`,
                    examples: [
                        {
                            input: 'meetings = [[0,30],[5,10],[15,20]]',
                            output: '2'
                        },
                        {
                            input: 'meetings = [[60,120],[90,150],[120,180]]',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'meetings = [[0,30],[5,10],[15,20]]',
                            judgeInput: '3\n0 30\n5 10\n15 20',
                            output: '2'
                        },
                        {
                            input: 'meetings = [[60,120],[90,150],[120,180]]',
                            judgeInput: '3\n60 120\n90 150\n120 180',
                            output: '2'
                        },
                        {
                            input: 'meetings = [[0,15],[15,30]]',
                            judgeInput: '2\n0 15\n15 30',
                            output: '1'
                        },
                        {
                            input: 'meetings = [[100,200],[150,250],[200,300]]',
                            judgeInput: '3\n100 200\n150 250\n200 300',
                            output: '2'
                        },
                        {
                            input: 'meetings = [[1,5],[8,9],[8,9]]',
                            judgeInput: '3\n1 5\n8 9\n8 9',
                            output: '2'
                        },
                        {
                            input: 'meetings = [[1,10],[2,11],[3,12],[4,13]]',
                            judgeInput: '4\n1 10\n2 11\n3 12\n4 13',
                            output: '4'
                        },
                        {
                            input: 'meetings = [[1,100]]',
                            judgeInput: '1\n1 100',
                            output: '1'
                        },
                        {
                            input: 'meetings = [[1,5],[2,6],[3,7],[5,8],[6,9]]',
                            judgeInput: '5\n1 5\n2 6\n3 7\n5 8\n6 9',
                            output: '3'
                        },
                        {
                            input: 'meetings = [[0,10],[10,20],[20,30],[30,40]]',
                            judgeInput: '4\n0 10\n10 20\n20 30\n30 40',
                            output: '1'
                        },
                        {
                            input: 'meetings = [[1,4],[4,5],[2,3]]',
                            judgeInput: '3\n1 4\n4 5\n2 3',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} meetings
 * @return {number}
 */
function minMeetingRooms(meetings) {
    // Your code here
}`,
                        python: `def min_meeting_rooms(meetings):
    """
    :type meetings: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minMeetingRooms(vector<vector<int>>& meetings) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minMeetingRooms(int[][] meetings) {
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
    const meetings = [];
    for (let i = 1; i <= n; i++) {
        const [start, end] = lines[i].split(' ').map(Number);
        meetings.push([start, end]);
    }
    const result = minMeetingRooms(meetings);
    console.log(result);
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
meetings = []
for i in range(1, n + 1):
    start, end = map(int, lines[i].split())
    meetings.append([start, end])
result = min_meeting_rooms(meetings)
print(result)`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minMeetingRooms(vector<vector<int>>& meetings);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> meetings(n, vector<int>(2));
    for (int i = 0; i < n; i++) {
        cin >> meetings[i][0] >> meetings[i][1];
    }
    cout << minMeetingRooms(meetings) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] meetings = new int[n][2];
        for (int i = 0; i < n; i++) {
            meetings[i][0] = sc.nextInt();
            meetings[i][1] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.minMeetingRooms(meetings));
    }
}`
                    }
                },
                {
                    id: 'trap-rainwater',
                    title: 'Data Center Cooling',
                    difficulty: 'Hard',
                    description: `Google's data center engineering team is designing a new liquid cooling system. The system consists of vertical cooling towers of different heights arranged in a row.

You are given an array 'height' representing the elevation map of these towers, where the width of each tower is 1 unit.

When it rains (or coolant leaks), water gets trapped between the towers. Your goal is to compute how much water can be trapped in the gaps between the towers after a heavy rain.

Constraints:
- n == height.length
- 1 <= n <= 2 * 10^4
- 0 <= height[i] <= 10^5`,
                    examples: [
                        {
                            input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
                            output: '6'
                        },
                        {
                            input: 'height = [4,2,0,3,2,5]',
                            output: '9'
                        }
                    ],
                    testCases: [
                        {
                            input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
                            judgeInput: '12\n0 1 0 2 1 0 1 3 2 1 2 1',
                            output: '6'
                        },
                        {
                            input: 'height = [4,2,0,3,2,5]',
                            judgeInput: '6\n4 2 0 3 2 5',
                            output: '9'
                        },
                        {
                            input: 'height = [3,0,2,0,4]',
                            judgeInput: '5\n3 0 2 0 4',
                            output: '7'
                        },
                        {
                            input: 'height = [5,4,3,2,1]',
                            judgeInput: '5\n5 4 3 2 1',
                            output: '0'
                        },
                        {
                            input: 'height = [1,2,3,4,5]',
                            judgeInput: '5\n1 2 3 4 5',
                            output: '0'
                        },
                        {
                            input: 'height = [5,2,1,2,1,5]',
                            judgeInput: '6\n5 2 1 2 1 5',
                            output: '14'
                        },
                        {
                            input: 'height = [0,0,0,0,0]',
                            judgeInput: '5\n0 0 0 0 0',
                            output: '0'
                        },
                        {
                            input: 'height = [2,0,2]',
                            judgeInput: '3\n2 0 2',
                            output: '2'
                        },
                        {
                            input: 'height = [5,5,5,5]',
                            judgeInput: '4\n5 5 5 5',
                            output: '0'
                        },
                        {
                            input: 'height = [9,0,8,0,7,0,6]',
                            judgeInput: '7\n9 0 8 0 7 0 6',
                            output: '18'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} height
 * @return {number}
 */
function maxLoadCapacity(height) {
    // Your code here
}`,
                        python: `def max_load_capacity(height):
    """
    :type height: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxLoadCapacity(vector<int>& height) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxLoadCapacity(int[] height) {
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
    const height = lines[1].split(' ').map(Number);
    const result = maxLoadCapacity(height);
    console.log(result);
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
height = list(map(int, lines[1].split()))
result = max_load_capacity(height)
print(result)`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxLoadCapacity(vector<int>& height);

int main() {
    int n;
    cin >> n;
    vector<int> height(n);
    for (int i = 0; i < n; i++) {
        cin >> height[i];
    }
    cout << maxLoadCapacity(height) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] height = new int[n];
        for (int i = 0; i < n; i++) {
            height[i] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.maxLoadCapacity(height));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'google-oa-2',
            title: 'Google OA-2',
            duration: 75,
            problems: [
                {
                    id: 'min-window-substring',
                    title: 'Search Snippet Generator',
                    difficulty: 'Hard',
                    description: `The Google Search team is improving the algorithm that generates text snippets for search results.

Given a document string 'source' and a query string 'pattern', find the smallest substring in 'source' that contains all the characters of 'pattern' (including duplicates).

This substring will be used to highlight the relevant part of the document in the search results page. If no such substring exists, return an empty string.

Constraints:
- 1 <= pattern.length <= source.length <= 10^5
- source and pattern consist of uppercase and lowercase English letters`,
                    examples: [
                        {
                            input: 'source = "ADOBECODEBANC", pattern = "ABC"',
                            output: '"BANC"'
                        },
                        {
                            input: 'source = "a", pattern = "a"',
                            output: '"a"'
                        }
                    ],
                    testCases: [
                        {
                            input: 'source = "ADOBECODEBANC", pattern = "ABC"',
                            judgeInput: 'ADOBECODEBANC\nABC',
                            output: 'BANC'
                        },
                        {
                            input: 'source = "a", pattern = "a"',
                            judgeInput: 'a\na',
                            output: 'a'
                        },
                        {
                            input: 'source = "a", pattern = "aa"',
                            judgeInput: 'a\naa',
                            output: ''
                        },
                        {
                            input: 'source = "ab", pattern = "b"',
                            judgeInput: 'ab\nb',
                            output: 'b'
                        },
                        {
                            input: 'source = "aa", pattern = "aa"',
                            judgeInput: 'aa\naa',
                            output: 'aa'
                        },
                        {
                            input: 'source = "abc", pattern = "cba"',
                            judgeInput: 'abc\ncba',
                            output: 'abc'
                        },
                        {
                            input: 'source = "this is a test string", pattern = "tist"',
                            judgeInput: 'this is a test string\ntist',
                            output: 't stri'
                        },
                        {
                            input: 'source = "geeksforgeeks", pattern = "ork"',
                            judgeInput: 'geeksforgeeks\nork',
                            output: 'ksfor'
                        },
                        {
                            input: 'source = "abcde", pattern = "xyz"',
                            judgeInput: 'abcde\nxyz',
                            output: ''
                        },
                        {
                            input: 'source = "AAAAAAAAAA", pattern = "AA"',
                            judgeInput: 'AAAAAAAAAA\nAA',
                            output: 'AA'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string} source
 * @param {string} pattern
 * @return {string}
 */
function minWindow(source, pattern) {
    // Your code here
}`,
                        python: `def min_window(source, pattern):
    """
    :type source: str
    :type pattern: str
    :rtype: str
    """
    # Your code here
    pass`,
                        cpp: `#include <string>
using namespace std;

string minWindow(string source, string pattern) {
    // Your code here
}`,
                        java: `public class Solution {
    public String minWindow(String source, String pattern) {
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
    const source = lines[0];
    const pattern = lines[1];
    const result = minWindow(source, pattern);
    console.log(result);
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
source = lines[0]
pattern = lines[1]
result = min_window(source, pattern)
print(result)`,
                        cpp: `
#include <iostream>
#include <string>
using namespace std;

string minWindow(string source, string pattern);

int main() {
    string source, pattern;
    getline(cin, source);
    getline(cin, pattern);
    cout << minWindow(source, pattern) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String source = sc.nextLine();
        String pattern = sc.nextLine();
        Solution sol = new Solution();
        System.out.println(sol.minWindow(source, pattern));
    }
}`
                    }
                },
                {
                    id: 'longest-consecutive',
                    title: 'Cloud ID Sequencing',
                    difficulty: 'Medium',
                    description: `Google Cloud assigns unique numeric IDs to every active virtual machine instance. To optimize resource allocation, the infrastructure team wants to identify the longest sequence of consecutive IDs currently in use.

Given an unsorted array of these unique integer IDs, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity to handle the massive scale of Google Cloud infrastructure.

Constraints:
- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9`,
                    examples: [
                        {
                            input: 'nums = [100,4,200,1,3,2]',
                            output: '4'
                        },
                        {
                            input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
                            output: '9'
                        }
                    ],
                    testCases: [
                        {
                            input: 'nums = [100,4,200,1,3,2]',
                            judgeInput: '6\n100 4 200 1 3 2',
                            output: '4'
                        },
                        {
                            input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
                            judgeInput: '10\n0 3 7 2 5 8 4 6 0 1',
                            output: '9'
                        },
                        {
                            input: 'nums = [9,1,4,7,3,2,8,5,6]',
                            judgeInput: '9\n9 1 4 7 3 2 8 5 6',
                            output: '9'
                        },
                        {
                            input: 'nums = []',
                            judgeInput: '0\n',
                            output: '0'
                        },
                        {
                            input: 'nums = [1,2,0,1]',
                            judgeInput: '4\n1 2 0 1',
                            output: '3'
                        },
                        {
                            input: 'nums = [5]',
                            judgeInput: '1\n5',
                            output: '1'
                        },
                        {
                            input: 'nums = [10, 20, 30]',
                            judgeInput: '3\n10 20 30',
                            output: '1'
                        },
                        {
                            input: 'nums = [-5, -4, -3, -2, -1]',
                            judgeInput: '5\n-5 -4 -3 -2 -1',
                            output: '5'
                        },
                        {
                            input: 'nums = [1, 2, 3, 100, 101, 102, 103]',
                            judgeInput: '7\n1 2 3 100 101 102 103',
                            output: '4'
                        },
                        {
                            input: 'nums = [0, -1]',
                            judgeInput: '2\n0 -1',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    // Your code here
}`,
                        python: `def longest_consecutive(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    // Your code here
}`,
                        java: `public class Solution {
    public int longestConsecutive(int[] nums) {
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
    const nums = n > 0 ? lines[1].split(' ').map(Number) : [];
    const result = longestConsecutive(nums);
    console.log(result);
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
nums = list(map(int, lines[1].split())) if n > 0 else []
result = longest_consecutive(nums)
print(result)`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    cout << longestConsecutive(nums) << endl;
    return 0;
}`,
                        java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.longestConsecutive(nums));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'google-oa-3',
            title: 'Google OA-3',
            duration: 75,
            problems: [
                {
                    id: 'binary-tree-cameras',
                    title: 'Campus Security Coverage',
                    difficulty: 'Hard',
                    description: `Google's Physical Security team is deploying a new camera system across a campus building layout. The building structure is modeled as a binary tree, where each node represents a room or hallway.

We need to install cameras at various nodes to ensure full coverage. A camera placed at a node can monitor:
- The node (room) itself.
- Its immediate parent.
- Its immediate children.

Calculate the minimum number of cameras required to monitor all nodes in the tree.

Constraints:
- The number of nodes in the tree is in the range [1, 1000].
- Node values are not relevant (all 0 for this problem).`,
                    examples: [
                        {
                            input: 'tree = [0,0,null,0,0]',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,0,null,0,null,0,null,null,0]',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'tree = [0]',
                            judgeInput: '1\n0',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,0,null,0,0]',
                            judgeInput: '5\n0 0 null 0 0',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,0,0,null,null,null,0]',
                            judgeInput: '7\n0 0 0 null null null 0',
                            output: '2'
                        },
                        {
                            input: 'tree = [0,0,null,0,null,0,null,null,0]',
                            judgeInput: '9\n0 0 null 0 null 0 null null 0',
                            output: '2'
                        },
                        {
                            input: 'tree = [0,0,0]',
                            judgeInput: '3\n0 0 0',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,0,null]',
                            judgeInput: '3\n0 0 null',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,null,0]',
                            judgeInput: '3\n0 null 0',
                            output: '1'
                        },
                        {
                            input: 'tree = [0,0,0,0,0,0,0]',
                            judgeInput: '7\n0 0 0 0 0 0 0',
                            output: '2'
                        },
                        {
                            input: 'tree = [0,0,null,0,null,0,null,0]',
                            judgeInput: '8\n0 0 null 0 null 0 null 0',
                            output: '2'
                        },
                        {
                            input: 'tree = [0,0,0,null,null,0,0]',
                            judgeInput: '7\n0 0 0 null null 0 0',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} tree - Level-order representation
 * @return {number}
 */
function minCameraCover(tree) {
    // Your code here
}`,
                        python: `def min_camera_cover(tree):
    """
    :type tree: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minCameraCover(vector<int>& tree) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minCameraCover(int[] tree) {
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
    const tree = lines[1].split(' ').map(x => x === 'null' ? null : parseInt(x));
    const result = minCameraCover(tree);
    console.log(result);
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
vals = lines[1].split()

if n == 0:
    print(0)
    sys.exit()

root = TreeNode(0)
queue = [root]
i = 1
while i < n:
    curr = queue.pop(0)
    if vals[i] != 'null':
        curr.left = TreeNode(0)
        queue.append(curr.left)
    i += 1
    if i < n and vals[i] != 'null':
        curr.right = TreeNode(0)
        queue.append(curr.right)
    i += 1

result = min_camera_cover(vals)
print(result)`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

int minCameraCover(vector<int>& tree);

int main() {
    int n;
    cin >> n;
    vector<int> tree(n);
    string val;
    for(int i=0; i<n; ++i) {
        cin >> val;
        if(val == "null") tree[i] = -1; // Represent null as -1 or handle differently
        else tree[i] = 0;
    }
    // The starter code takes vector<int>, so we pass it directly.
    cout << minCameraCover(tree) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] tree = new int[n];
        for(int i=0; i<n; i++) {
            String val = sc.next();
            if(val.equals("null")) tree[i] = -1;
            else tree[i] = 0;
        }
        Solution sol = new Solution();
        System.out.println(sol.minCameraCover(tree));
    }
}`
                    }
                }
            ]
        }
    ]
};
