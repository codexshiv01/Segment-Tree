export const appleData = {
    id: 'apple',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1920px-Apple_logo_black.svg.png',
    description: 'Practice real Apple Online Assessment questions.',
    assessments: [
        {
            id: 'apple-oa-1',
            title: 'Apple OA-1',
            duration: 90,
            problems: [
                {
                    id: 'charging-stations',
                    title: 'EV Charging Station Placement',
                    difficulty: 'Medium',
                    description: `Apple's Maps team is optimizing the placement of electric vehicle (EV) charging stations along a highway for the new Apple Car project.

You're given an array 'locations' representing potential charging station positions (in kilometers from the start of the highway), and an integer 'coverage' representing the maximum distance a vehicle can travel between charges.

Find the minimum number of charging stations needed such that a vehicle can travel the entire highway. You must place stations only at the given locations.

If it's impossible to cover the entire highway, return -1.

Constraints:
- 1 <= locations.length <= 1000
- 0 <= locations[i] <= 10^6
- 1 <= coverage <= 10^6`,
                    examples: [
                        {
                            input: 'locations = [1,2,3,4,5,6,7,8,9,10], highway_length = 25, coverage = 4',
                            output: '6'
                        }
                    ],
                    testCases: [
                        {
                            input: 'locations = [1,2,3,4,5,6,7,8,9,10], highway_length = 25, coverage = 4',
                            judgeInput: '10\n1 2 3 4 5 6 7 8 9 10\n25\n4',
                            output: '6'
                        },
                        {
                            input: 'locations = [10,20,30], highway_length = 100, coverage = 9',
                            judgeInput: '3\n10 20 30\n100\n9',
                            output: '-1'
                        },
                        {
                            input: 'locations = [5,10,15,20,25], highway_length = 30, coverage = 10',
                            judgeInput: '5\n5 10 15 20 25\n30\n10',
                            output: '3'
                        },
                        {
                            input: 'locations = [3,6,9], highway_length = 10, coverage = 3',
                            judgeInput: '3\n3 6 9\n10\n3',
                            output: '3'
                        },
                        {
                            input: 'locations = [1], highway_length = 5, coverage = 10',
                            judgeInput: '1\n1\n5\n10',
                            output: '1'
                        },
                        {
                            input: 'locations = [2,4,6,8,10,12,14], highway_length = 15, coverage = 3',
                            judgeInput: '7\n2 4 6 8 10 12 14\n15\n3',
                            output: '5'
                        },
                        {
                            input: 'locations = [1,5,10,15,20], highway_length = 50, coverage = 5',
                            judgeInput: '5\n1 5 10 15 20\n50\n5',
                            output: '-1'
                        },
                        {
                            input: 'locations = [100], highway_length = 100, coverage = 100',
                            judgeInput: '1\n100\n100\n100',
                            output: '1'
                        },
                        {
                            input: 'locations = [4,8,12,16,20], highway_length = 24, coverage = 4',
                            judgeInput: '5\n4 8 12 16 20\n24\n4',
                            output: '5'
                        },
                        {
                            input: 'locations = [5,10], highway_length = 15, coverage = 10',
                            judgeInput: '2\n5 10\n15\n10',
                            output: '2'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} locations
 * @param {number} highway_length
 * @param {number} coverage
 * @return {number}
 */
function minChargingStations(locations, highway_length, coverage) {
    // Your code here
}`,
                        python: `def min_charging_stations(locations, highway_length, coverage):
    """
    :type locations: List[int]
    :type highway_length: int
    :type coverage: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minChargingStations(vector<int>& locations, int highway_length, int coverage) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minChargingStations(int[] locations, int highway_length, int coverage) {
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
    const locations = lines[1].split(' ').map(Number);
    const highway_length = parseInt(lines[2]);
    const coverage = parseInt(lines[3]);
    console.log(minChargingStations(locations, highway_length, coverage));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
locations = list(map(int, lines[1].split()))
highway_length = int(lines[2])
coverage = int(lines[3])
print(min_charging_stations(locations, highway_length, coverage))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minChargingStations(vector<int>& locations, int highway_length, int coverage);

int main() {
    int n, highway_length, coverage;
    cin >> n;
    vector<int> locations(n);
    for(int i=0; i<n; ++i) cin >> locations[i];
    cin >> highway_length >> coverage;
    cout << minChargingStations(locations, highway_length, coverage) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] locations = new int[n];
        for(int i=0; i<n; i++) locations[i] = sc.nextInt();
        int highway_length = sc.nextInt();
        int coverage = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minChargingStations(locations, highway_length, coverage));
    }
}`
                    }
                },
                {
                    id: 'airtag-network',
                    title: 'AirTag Network Optimization',
                    difficulty: 'Hard',
                    description: `Apple's FindMy network uses AirTags to locate lost items. The team wants to optimize the relay network structure.

You're given 'n' AirTags and an array 'connections' where connections[i] = [tag_a, tag_b, signal_strength] indicates that tag_a and tag_b can relay data with the given signal strength.

Find the minimum total signal strength needed to connect all AirTags in a single network (Minimum Spanning Tree).

Return the total minimum signal strength. If it's impossible to connect all tags, return -1.

Constraints:
- 1 <= n <= 100
- 0 <= connections.length <= n*(n-1)/2
- 1 <= signal_strength <= 1000`,
                    examples: [
                        {
                            input: 'n = 4, connections = [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]]',
                            output: '19'
                        }
                    ],
                    testCases: [
                        {
                            input: 'n = 4, connections = [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]]',
                            judgeInput: '4\n5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4',
                            output: '19'
                        },
                        {
                            input: 'n = 3, connections = [[0,1,5],[1,2,10]]',
                            judgeInput: '3\n2\n0 1 5\n1 2 10',
                            output: '15'
                        },
                        {
                            input: 'n = 3, connections = [[0,1,1]]',
                            judgeInput: '3\n1\n0 1 1',
                            output: '-1'
                        },
                        {
                            input: 'n = 2, connections = [[0,1,100]]',
                            judgeInput: '2\n1\n0 1 100',
                            output: '100'
                        },
                        {
                            input: 'n = 5, connections = [[0,1,2],[1,2,3],[2,3,4],[3,4,5],[0,4,10]]',
                            judgeInput: '5\n5\n0 1 2\n1 2 3\n2 3 4\n3 4 5\n0 4 10',
                            output: '14'
                        },
                        {
                            input: 'n = 4, connections = [[0,1,1],[1,2,1],[2,3,1],[0,2,5],[1,3,5]]',
                            judgeInput: '4\n5\n0 1 1\n1 2 1\n2 3 1\n0 2 5\n1 3 5',
                            output: '3'
                        },
                        {
                            input: 'n = 6, connections = [[0,1,10],[1,2,10],[2,3,10],[3,4,10],[4,5,10]]',
                            judgeInput: '6\n5\n0 1 10\n1 2 10\n2 3 10\n3 4 10\n4 5 10',
                            output: '50'
                        },
                        {
                            input: 'n = 1, connections = []',
                            judgeInput: '1\n0',
                            output: '0'
                        },
                        {
                            input: 'n = 4, connections = [[0,1,5],[1,2,10],[2,3,15]]',
                            judgeInput: '4\n3\n0 1 5\n1 2 10\n2 3 15',
                            output: '30'
                        },
                        {
                            input: 'n = 3, connections = [[0,1,7],[0,2,8],[1,2,6]]',
                            judgeInput: '3\n3\n0 1 7\n0 2 8\n1 2 6',
                            output: '13'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function minNetworkStrength(n, connections) {
    // Your code here
}`,
                        python: `def min_network_strength(n, connections):
    """
    :type n: int
    :type connections: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minNetworkStrength(int n, vector<vector<int>>& connections) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int minNetworkStrength(int n, int[][] connections) {
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
    console.log(minNetworkStrength(n, connections));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
m = int(lines[1])
connections = []
for i in range(2, m+2):
    connections.append(list(map(int, lines[i].split())))
print(min_network_strength(n, connections))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minNetworkStrength(int n, vector<vector<int>>& connections);

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> connections(m, vector<int>(3));
    for(int i=0; i<m; ++i) {
        cin >> connections[i][0] >> connections[i][1] >> connections[i][2];
    }
    cout << minNetworkStrength(n, connections) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] connections = new int[m][3];
        for(int i=0; i<m; i++) {
            connections[i][0] = sc.nextInt();
            connections[i][1] = sc.nextInt();
            connections[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.minNetworkStrength(n, connections));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'apple-oa-2',
            title: 'Apple OA-2',
            duration: 75,
            problems: [
                {
                    id: 'app-store-ranking',
                    title: 'App Store Search Ranking',
                    difficulty: 'Medium',
                    description: `The App Store team needs to optimize search result rankings based on download velocity.

You're given an array 'downloads' where downloads[i] represents the number of downloads on day i, and an integer 'k' representing a sliding window of days.

Calculate the maximum average downloads over any k consecutive days. Return the result as an integer (rounded down).

Constraints:
- 1 <= k <= downloads.length <= 10^5
- 0 <= downloads[i] <= 10^6`,
                    examples: [
                        {
                            input: 'downloads = [1,12,-5,-6,50,3], k = 4',
                            output: '12'
                        }
                    ],
                    testCases: [
                        {
                            input: 'downloads = [1,12,-5,-6,50,3], k = 4',
                            judgeInput: '6\n1 12 -5 -6 50 3\n4',
                            output: '12'
                        },
                        {
                            input: 'downloads = [5,5,5,5,5], k = 1',
                            judgeInput: '5\n5 5 5 5 5\n1',
                            output: '5'
                        },
                        {
                            input: 'downloads = [0,1,1,3,3], k = 4',
                            judgeInput: '5\n0 1 1 3 3\n4',
                            output: '2'
                        },
                        {
                            input: 'downloads = [100,200,300], k = 2',
                            judgeInput: '3\n100 200 300\n2',
                            output: '250'
                        },
                        {
                            input: 'downloads = [10,20,30,40,50], k = 3',
                            judgeInput: '5\n10 20 30 40 50\n3',
                            output: '40'
                        },
                        {
                            input: 'downloads = [7,3,5,2,8,6,1], k = 3',
                            judgeInput: '7\n7 3 5 2 8 6 1',
                            output: '6'
                        },
                        {
                            input: 'downloads = [50,60,70,80,90], k = 4',
                            judgeInput: '5\n50 60 70 80 90\n4',
                            output: '75'
                        },
                        {
                            input: 'downloads = [3,3,3,3,3,3], k = 3',
                            judgeInput: '6\n3 3 3 3 3 3\n3',
                            output: '3'
                        },
                        {
                            input: 'downloads = [100], k = 1',
                            judgeInput: '1\n100\n1',
                            output: '100'
                        },
                        {
                            input: 'downloads = [20,40,10,30,50], k = 2',
                            judgeInput: '5\n20 40 10 30 50\n2',
                            output: '40'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} downloads
 * @param {number} k
 * @return {number}
 */
function maxAverageDownloads(downloads, k) {
    // Your code here
}`,
                        python: `def max_average_downloads(downloads, k):
    """
    :type downloads: List[int]
    :type k: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxAverageDownloads(vector<int>& downloads, int k) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxAverageDownloads(int[] downloads, int k) {
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
    const downloads = lines[1].split(' ').map(Number);
    const k = parseInt(lines[2]);
    console.log(maxAverageDownloads(downloads, k));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
downloads = list(map(int, lines[1].split()))
k = int(lines[2])
print(max_average_downloads(downloads, k))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxAverageDownloads(vector<int>& downloads, int k);

int main() {
    int n, k;
    cin >> n;
    vector<int> downloads(n);
    for(int i=0; i<n; ++i) cin >> downloads[i];
    cin >> k;
    cout << maxAverageDownloads(downloads, k) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] downloads = new int[n];
        for(int i=0; i<n; i++) downloads[i] = sc.nextInt();
        int k = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxAverageDownloads(downloads, k));
    }
}`
                    }
                }
            ]
        }
    ]
};
