export const dropboxData = {
    id: 'dropbox',
    name: 'Dropbox',
    logo: 'https://logo.clearbit.com/dropbox.com',
    description: 'Practice real Dropbox Online Assessment questions.',
    assessments: [
        {
            id: 'dropbox-oa-1',
            title: 'Dropbox OA-1',
            duration: 90,
            problems: [
                {
                    id: 'file-deduplication',
                    title: 'Smart File Deduplication',
                    difficulty: 'Medium',
                    description: `Dropbox's storage optimization system identifies duplicate files using content hashing.

You are given an array 'files' where files[i] = [file_id, hash, size]. Files with the same hash are duplicates.

Calculate the total storage saved by keeping only one copy of each duplicate group.

Return the total bytes saved.

Constraints:
- 1 <= files.length <= 10^4
- 1 <= size <= 10^9`,
                    examples: [
                        {
                            input: 'files = [[1,100,50],[2,100,50],[3,200,30],[4,200,30]]',
                            output: '80'
                        },
                        {
                            input: 'files = [[1,500,100],[2,500,100],[3,500,100]]',
                            output: '200'
                        }
                    ],
                    testCases: [
                        {
                            input: 'files = [[1,100,50],[2,100,50],[3,200,30],[4,200,30]]',
                            judgeInput: '4\n1 100 50\n2 100 50\n3 200 30\n4 200 30',
                            output: '80'
                        },
                        {
                            input: 'files = [[1,500,100],[2,500,100],[3,500,100]]',
                            judgeInput: '3\n1 500 100\n2 500 100\n3 500 100',
                            output: '200'
                        },
                        {
                            input: 'files = [[1,1,10],[2,2,20],[3,3,30]]',
                            judgeInput: '3\n1 1 10\n2 2 20\n3 3 30',
                            output: '0'
                        },
                        {
                            input: 'files = [[1,999,1000]]',
                            judgeInput: '1\n1 999 1000',
                            output: '0'
                        },
                        {
                            input: 'files = [[1,7,25],[2,7,25],[3,7,25],[4,7,25],[5,7,25]]',
                            judgeInput: '5\n1 7 25\n2 7 25\n3 7 25\n4 7 25\n5 7 25',
                            output: '100'
                        },
                        {
                            input: 'files = [[1,10,50],[2,20,75],[3,10,50],[4,30,100]]',
                            judgeInput: '4\n1 10 50\n2 20 75\n3 10 50\n4 30 100',
                            output: '50'
                        },
                        {
                            input: 'files = [[1,5,200],[2,5,200],[3,10,300],[4,10,300],[5,10,300]]',
                            judgeInput: '5\n1 5 200\n2 5 200\n3 10 300\n4 10 300\n5 10 300',
                            output: '800'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} files
 * @return {number}
 */
function calculateSavings(files) {
    // Your code here
}`,
                        python: `def calculate_savings(files):
    """
    :type files: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

long long calculateSavings(vector<vector<int>>& files) {
    // Your code here
}`,
                        java: `public class Solution {
    public long calculateSavings(int[][] files) {
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
    const files = [];
    for(let i=1; i<=n; i++) {
        files.push(lines[i].split(' ').map(Number));
    }
    console.log(calculateSavings(files));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
files = []
for i in range(1, n+1):
    files.append(list(map(int, lines[i].split())))
print(calculate_savings(files))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

long long calculateSavings(vector<vector<int>>& files);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> files(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        cin >> files[i][0] >> files[i][1] >> files[i][2];
    }
    cout << calculateSavings(files) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] files = new int[n][3];
        for(int i=0; i<n; i++) {
            files[i][0] = sc.nextInt();
            files[i][1] = sc.nextInt();
            files[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.calculateSavings(files));
    }
}`
                    }
                },
                {
                    id: 'sync-conflict-resolver',
                    title: 'File Sync Conflict Resolution',
                    difficulty: 'Hard',
                    description: `Dropbox's sync engine needs to resolve file conflicts when multiple users edit simultaneously.

You are given:
- 'edits': Array of [user_id, timestamp, version] representing edit operations
- 'conflictWindow': Time window (seconds) within which edits conflict

Two edits conflict if they occur within the conflictWindow and create different versions. Find the minimum number of file versions needed to resolve all conflicts.

Return the minimum number of versions.

Constraints:
- 1 <= edits.length <= 1000
- 1 <= timestamp <= 10^9
- 1 <= version <= 100
- 1 <= conflictWindow <= 3600`,
                    examples: [
                        {
                            input: 'edits = [[1,100,1],[2,105,2],[3,200,3]], conflictWindow = 10',
                            output: '2'
                        },
                        {
                            input: 'edits = [[1,50,1],[2,51,1],[3,52,1]], conflictWindow = 5',
                            output: '1'
                        }
                    ],
                    testCases: [
                        {
                            input: 'edits = [[1,100,1],[2,105,2],[3,200,3]], conflictWindow = 10',
                            judgeInput: '3\n1 100 1\n2 105 2\n3 200 3\n10',
                            output: '2'
                        },
                        {
                            input: 'edits = [[1,50,1],[2,51,1],[3,52,1]], conflictWindow = 5',
                            judgeInput: '3\n1 50 1\n2 51 1\n3 52 1\n5',
                            output: '1'
                        },
                        {
                            input: 'edits = [[1,10,1],[2,15,2],[3,20,3]], conflictWindow = 20',
                            judgeInput: '3\n1 10 1\n2 15 2\n3 20 3\n20',
                            output: '3'
                        },
                        {
                            input: 'edits = [[1,100,1]], conflictWindow = 50',
                            judgeInput: '1\n1 100 1\n50',
                            output: '1'
                        },
                        {
                            input: 'edits = [[1,0,1],[2,100,2],[3,200,3]], conflictWindow = 50',
                            judgeInput: '3\n1 0 1\n2 100 2\n3 200 3\n50',
                            output: '3'
                        },
                        {
                            input: 'edits = [[1,10,1],[2,20,1],[3,30,2],[4,35,2]], conflictWindow = 15',
                            judgeInput: '4\n1 10 1\n2 20 1\n3 30 2\n4 35 2\n15',
                            output: '2'
                        },
                        {
                            input: 'edits = [[1,5,1],[2,10,2],[3,15,3],[4,20,4]], conflictWindow = 6',
                            judgeInput: '4\n1 5 1\n2 10 2\n3 15 3\n4 20 4\n6',
                            output: '3'
                        },
                        {
                            input: 'edits = [[1,100,5],[2,102,5],[3,104,5]], conflictWindow = 10',
                            judgeInput: '3\n1 100 5\n2 102 5\n3 104 5\n10',
                            output: '1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} edits
 * @param {number} conflictWindow
 * @return {number}
 */
function minVersions(edits, conflictWindow) {
    // Your code here
}`,
                        python: `def min_versions(edits, conflict_window):
    """
    :type edits: List[List[int]]
    :type conflict_window: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minVersions(vector<vector<int>>& edits, int conflictWindow) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minVersions(int[][] edits, int conflictWindow) {
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
    const edits = [];
    for(let i=1; i<=n; i++) {
        edits.push(lines[i].split(' ').map(Number));
    }
    const conflictWindow = parseInt(lines[n+1]);
    console.log(minVersions(edits, conflictWindow));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
edits = []
for i in range(1, n+1):
    edits.append(list(map(int, lines[i].split())))
conflict_window = int(lines[n+1])
print(min_versions(edits, conflict_window))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minVersions(vector<vector<int>>& edits, int conflictWindow);

int main() {
    int n, conflictWindow;
    cin >> n;
    vector<vector<int>> edits(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        cin >> edits[i][0] >> edits[i][1] >> edits[i][2];
    }
    cin >> conflictWindow;
    cout << minVersions(edits, conflictWindow) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] edits = new int[n][3];
        for(int i=0; i<n; i++) {
            edits[i][0] = sc.nextInt();
            edits[i][1] = sc.nextInt();
            edits[i][2] = sc.nextInt();
        }
        int conflictWindow = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minVersions(edits, conflictWindow));
    }
}`
                    }
                }
            ]
        }
    ]
};
