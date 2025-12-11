export const uberData = {
    id: 'uber',
    name: 'Uber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
    description: 'Practice real Uber Online Assessment questions.',
    assessments: [
        {
            id: 'uber-oa-1',
            title: 'Uber OA-1',
            duration: 90,
            problems: [
                {
                    id: 'surge-pricing-zones',
                    title: 'Dynamic Pricing Zone Optimizer',
                    difficulty: 'Hard',
                    description: `Uber's pricing algorithm team needs to optimize surge pricing zones during peak hours.

You're given a city grid represented as an m x n matrix where each cell contains the number of ride requests in that area. You need to identify rectangular "surge zones" where the total ride requests exceed a threshold.

Find the largest rectangular zone (by area) where the sum of all requests meets or exceeds the 'minRequests' threshold.

Return the maximum area of such a rectangle.

Constraints:
- 1 <= m, n <= 200
- 0 <= grid[i][j] <= 100
- 1 <= minRequests <= m * n * 100`,
                    examples: [
                        {
                            input: 'grid = [[1,0,1],[0,0,0],[1,0,1]], minRequests = 2',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'grid = [[1,0,1],[0,0,0],[1,0,1]], minRequests = 2',
                            judgeInput: '3 3\n1 0 1\n0 0 0\n1 0 1\n2',
                            output: '4'
                        },
                        {
                            input: 'grid = [[1,1],[1,1]], minRequests = 4',
                            judgeInput: '2 2\n1 1\n1 1\n4',
                            output: '4'
                        },
                        {
                            input: 'grid = [[5,5],[5,5]], minRequests = 15',
                            judgeInput: '2 2\n5 5\n5 5\n15',
                            output: '4'
                        },
                        {
                            input: 'grid = [[0,0,0],[0,1,0],[0,0,0]], minRequests = 1',
                            judgeInput: '3 3\n0 0 0\n0 1 0\n0 0 0\n1',
                            output: '1'
                        },
                        {
                            input: 'grid = [[10,20],[30,40]], minRequests = 100',
                            judgeInput: '2 2\n10 20\n30 40\n100',
                            output: '4'
                        },
                        {
                            input: 'grid = [[5,0,0],[0,5,0],[0,0,5]], minRequests = 15',
                            judgeInput: '3 3\n5 0 0\n0 5 0\n0 0 5\n15',
                            output: '9'
                        },
                        {
                            input: 'grid = [[2,2,2],[2,2,2]], minRequests = 6',
                            judgeInput: '2 3\n2 2 2\n2 2 2\n6',
                            output: '3'
                        },
                        {
                            input: 'grid = [[1,1,1,1],[1,1,1,1]], minRequests = 5',
                            judgeInput: '2 4\n1 1 1 1\n1 1 1 1\n5',
                            output: '6'
                        },
                        {
                            input: 'grid = [[3,3],[3,3],[3,3]], minRequests = 12',
                            judgeInput: '3 2\n3 3\n3 3\n3 3\n12',
                            output: '4'
                        },
                        {
                            input: 'grid = [[10]], minRequests = 10',
                            judgeInput: '1 1\n10\n10',
                            output: '1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} grid
 * @param {number} minRequests
 * @return {number}
 */
function maxSurgeZone(grid, minRequests) {
    // Your code here
}`,
                        python: `def max_surge_zone(grid, min_requests):
    """
    :type grid: List[List[int]]
    :type min_requests: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxSurgeZone(vector<vector<int>>& grid, int minRequests) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxSurgeZone(int[][] grid, int minRequests) {
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
    for(let i=1; i<=m; i++) {
        grid.push(lines[i].split(' ').map(Number));
    }
    const minRequests = parseInt(lines[m+1]);
    console.log(maxSurgeZone(grid, minRequests));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
m, n = map(int, lines[0].split())
grid = []
for i in range(1, m+1):
    grid.append(list(map(int, lines[i].split())))
min_requests = int(lines[m+1])
print(max_surge_zone(grid, min_requests))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxSurgeZone(vector<vector<int>>& grid, int minRequests);

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for(int i=0; i<m; ++i) {
        for(int j=0; j<n; ++j) {
            cin >> grid[i][j];
        }
    }
    int minRequests;
    cin >> minRequests;
    cout << maxSurgeZone(grid, minRequests) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] grid = new int[m][n];
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        int minRequests = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxSurgeZone(grid, minRequests));
    }
}`
                    }
                },
                {
                    id: 'driver-pool-assignment',
                    title: 'Driver Pool Balancing',
                    difficulty: 'Medium',
                    description: `Uber's supply optimization team wants to balance driver assignments across different vehicle categories.

You have 'numDrivers' total drivers and 'k' vehicle categories (UberX, Comfort, XL, etc.). You need to distribute drivers across categories such that:
1. Each category gets at least 'minPerCategory' drivers
2. The difference between the largest and smallest category is minimized

Return the minimum possible difference.

Constraints:
- 1 <= k <= 10
- k * minPerCategory <= numDrivers <= 10^6
- 1 <= minPerCategory <= 1000`,
                    examples: [
                        {
                            input: 'numDrivers = 10, k = 3, minPerCategory = 2',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'numDrivers = 10, k = 3, minPerCategory = 2',
                            judgeInput: '10\n3\n2',
                            output: '2'
                        },
                        {
                            input: 'numDrivers = 12, k = 4, minPerCategory = 2',
                            judgeInput: '12\n4\n2',
                            output: '1'
                        },
                        {
                            input: 'numDrivers = 15, k = 3, minPerCategory = 1',
                            judgeInput: '15\n3\n1',
                            output: '0'
                        },
                        {
                            input: 'numDrivers = 100, k = 5, minPerCategory = 10',
                            judgeInput: '100\n5\n10',
                            output: '0'
                        },
                        {
                            input: 'numDrivers = 7, k = 2, minPerCategory = 1',
                            judgeInput: '7\n2\n1',
                            output: '1'
                        },
                        {
                            input: 'numDrivers = 20, k = 4, minPerCategory = 3',
                            judgeInput: '20\n4\n3',
                            output: '2'
                        },
                        {
                            input: 'numDrivers = 50, k = 5, minPerCategory = 5',
                            judgeInput: '50\n5\n5',
                            output: '5'
                        },
                        {
                            input: 'numDrivers = 9, k = 3, minPerCategory = 2',
                            judgeInput: '9\n3\n2',
                            output: '1'
                        },
                        {
                            input: 'numDrivers = 25, k = 5, minPerCategory = 4',
                            judgeInput: '25\n5\n4',
                            output: '1'
                        },
                        {
                            input: 'numDrivers = 8, k = 4, minPerCategory = 2',
                            judgeInput: '8\n4\n2',
                            output: '0'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} numDrivers
 * @param {number} k
 * @param {number} minPerCategory
 * @return {number}
 */
function minCategoryDifference(numDrivers, k, minPerCategory) {
    // Your code here
}`,
                        python: `def min_category_difference(num_drivers, k, min_per_category):
    """
    :type num_drivers: int
    :type k: int
    :type min_per_category: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `int minCategoryDifference(int numDrivers, int k, int minPerCategory) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minCategoryDifference(int numDrivers, int k, int minPerCategory) {
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
    const numDrivers = parseInt(lines[0]);
    const k = parseInt(lines[1]);
    const minPerCategory = parseInt(lines[2]);
    console.log(minCategoryDifference(numDrivers, k, minPerCategory));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
num_drivers = int(lines[0])
k = int(lines[1])
min_per_category = int(lines[2])
print(min_category_difference(num_drivers, k, min_per_category))`,
                        cpp: `
#include <iostream>
using namespace std;

int minCategoryDifference(int numDrivers, int k, int minPerCategory);

int main() {
    int numDrivers, k, minPerCategory;
    cin >> numDrivers >> k >> minPerCategory;
    cout << minCategoryDifference(numDrivers, k, minPerCategory) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numDrivers = sc.nextInt();
        int k = sc.nextInt();
        int minPerCategory = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minCategoryDifference(numDrivers, k, minPerCategory));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'uber-oa-2',
            title: 'Uber OA-2',
            duration: 75,
            problems: [
                {
                    id: 'optimal-pickup-sequence',
                    title: 'Carpool Pickup Sequencing',
                    difficulty: 'Medium',
                    description: `Uber Pool needs to determine the optimal pickup sequence for multiple passengers.

You're given an array 'pickupTimes' where pickupTimes[i] is the time (in minutes from now) when passenger i requested a ride, and an array 'destinations' where destinations[i] is the travel time to their destination.

A driver can pick up passengers in any order, but each pickup adds 2 minutes of detour time (except the first). Find the minimum total time to complete all rides.

Return the minimum time in minutes.

Constraints:
- 1 <= pickupTimes.length <= 50
- pickupTimes.length == destinations.length
- 0 <= pickupTimes[i] <= 100
- 1 <= destinations[i] <= 100`,
                    examples: [
                        {
                            input: 'pickupTimes = [0,2,5], destinations = [10,8,6]',
                            output: '29'
                        }
                    ],
                    testCases: [
                        {
                            input: 'pickupTimes = [0,2,5], destinations = [10,8,6]',
                            judgeInput: '3\n0 2 5\n10 8 6',
                            output: '29'
                        },
                        {
                            input: 'pickupTimes = [0], destinations = [10]',
                            judgeInput: '1\n0\n10',
                            output: '10'
                        },
                        {
                            input: 'pickupTimes = [0,0], destinations = [5,5]',
                            judgeInput: '2\n0 0\n5 5',
                            output: '12'
                        },
                        {
                            input: 'pickupTimes = [0,1,2], destinations = [3,3,3]',
                            judgeInput: '3\n0 1 2\n3 3 3',
                            output: '13'
                        },
                        {
                            input: 'pickupTimes = [5,10], destinations = [20,15]',
                            judgeInput: '2\n5 10\n20 15',
                            output: '37'
                        },
                        {
                            input: 'pickupTimes = [0,5,10], destinations = [8,8,8]',
                            judgeInput: '3\n0 5 10\n8 8 8',
                            output: '34'
                        },
                        {
                            input: 'pickupTimes = [1,2,3,4], destinations = [5,5,5,5]',
                            judgeInput: '4\n1 2 3 4\n5 5 5 5',
                            output: '32'
                        },
                        {
                            input: 'pickupTimes = [10], destinations = [20]',
                            judgeInput: '1\n10\n20',
                            output: '20'
                        },
                        {
                            input: 'pickupTimes = [0,0,0], destinations = [10,10,10]',
                            judgeInput: '3\n0 0 0\n10 10 10',
                            output: '34'
                        },
                        {
                            input: 'pickupTimes = [2,4,6], destinations = [12,10,8]',
                            judgeInput: '3\n2 4 6\n12 10 8',
                            output: '36'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} pickupTimes
 * @param {number[]} destinations
 * @return {number}
 */
function minPoolTime(pickupTimes, destinations) {
    // Your code here
}`,
                        python: `def min_pool_time(pickup_times, destinations):
    """
    :type pickup_times: List[int]
    :type destinations: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minPoolTime(vector<int>& pickupTimes, vector<int>& destinations) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minPoolTime(int[] pickupTimes, int[] destinations) {
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
    const pickupTimes = lines[1].split(' ').map(Number);
    const destinations = lines[2].split(' ').map(Number);
    console.log(minPoolTime(pickupTimes, destinations));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
pickup_times = list(map(int, lines[1].split()))
destinations = list(map(int, lines[2].split()))
print(min_pool_time(pickup_times, destinations))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minPoolTime(vector<int>& pickupTimes, vector<int>& destinations);

int main() {
    int n;
    cin >> n;
    vector<int> pickupTimes(n), destinations(n);
    for(int i=0; i<n; ++i) cin >> pickupTimes[i];
    for(int i=0; i<n; ++i) cin >> destinations[i];
    cout << minPoolTime(pickupTimes, destinations) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] pickupTimes = new int[n];
        int[] destinations = new int[n];
        for(int i=0; i<n; i++) pickupTimes[i] = sc.nextInt();
        for(int i=0; i<n; i++) destinations[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minPoolTime(pickupTimes, destinations));
    }
}`
                    }
                }
            ]
        }
    ]
};
