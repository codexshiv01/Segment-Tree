export const airbnbData = {
    id: 'airbnb',
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png',
    description: 'Practice real Airbnb Online Assessment questions.',
    assessments: [
        {
            id: 'airbnb-oa-1',
            title: 'Airbnb OA-1',
            duration: 90,
            problems: [
                {
                    id: 'housing-availability',
                    title: 'Vacation Rental Availability Checker',
                    difficulty: 'Medium',
                    description: `Airbnb's booking system needs to determine if a property is available for a guest's requested dates.

You are given:
- 'bookings': An array of [start_date, end_date] representing existing bookings (dates are integers, 1-365)
- 'request_start' and 'request_end': The guest's requested booking dates

Return true if the property is available for the entire requested period, false otherwise.

Note: Checkout on day X and checkin on day X is allowed (no overlap).

Constraints:
- 1 <= bookings.length <= 1000
- 1 <= dates <= 365`,
                    examples: [
                        {
                            input: 'bookings = [[10,20],[25,30]], request = [21,24]',
                            output: 'true'
                        }
                    ],
                    testCases: [
                        {
                            input: 'bookings = [[10,20],[25,30]], request = [21,24]',
                            judgeInput: '2\n10 20\n25 30\n21 24',
                            output: 'true'
                        },
                        {
                            input: 'bookings = [[10,20],[25,30]], request = [15,25]',
                            judgeInput: '2\n10 20\n25 30\n15 25',
                            output: 'false'
                        },
                        {
                            input: 'bookings = [[5,10]], request = [10,15]',
                            judgeInput: '1\n5 10\n10 15',
                            output: 'true'
                        },
                        {
                            input: 'bookings = [[1,5],[10,15],[20,25]], request = [6,9]',
                            judgeInput: '3\n1 5\n10 15\n20 25\n6 9',
                            output: 'true'
                        },
                        {
                            input: 'bookings = [], request = [1,365]',
                            judgeInput: '0\n1 365',
                            output: 'true'
                        },
                        {
                            input: 'bookings = [[50,100],[150,200]], request = [90,160]',
                            judgeInput: '2\n50 100\n150 200\n90 160',
                            output: 'false'
                        },
                        {
                            input: 'bookings = [[100,200]], request = [50,99]',
                            judgeInput: '1\n100 200\n50 99',
                            output: 'true'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} bookings
 * @param {number} request_start
 * @param {number} request_end
 * @return {boolean}
 */
function isAvailable(bookings, request_start, request_end) {
    // Your code here
}`,
                        python: `def is_available(bookings, request_start, request_end):
    """
    :type bookings: List[List[int]]
    :type request_start: int
    :type request_end: int
    :rtype: bool
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

bool isAvailable(vector<vector<int>>& bookings, int request_start, int request_end) {
    // Your code here
}`,
                        java: `public class Solution {
    public boolean isAvailable(int[][] bookings, int request_start, int request_end) {
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
    const bookings = [];
    for(let i=1; i<=n; i++) {
        bookings.push(lines[i].split(' ').map(Number));
    }
    const [request_start, request_end] = lines[n+1].split(' ').map(Number);
    console.log(isAvailable(bookings, request_start, request_end));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
bookings = []
for i in range(1, n+1):
    bookings.append(list(map(int, lines[i].split())))
request_start, request_end = map(int, lines[n+1].split())
print(str(is_available(bookings, request_start, request_end)).lower())`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

bool isAvailable(vector<vector<int>>& bookings, int request_start, int request_end);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> bookings(n, vector<int>(2));
    for(int i=0; i<n; ++i) cin >> bookings[i][0] >> bookings[i][1];
    int request_start, request_end;
    cin >> request_start >> request_end;
    cout << (isAvailable(bookings, request_start, request_end) ? "true" : "false") << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] bookings = new int[n][2];
        for(int i=0; i<n; i++) {
            bookings[i][0] = sc.nextInt();
            bookings[i][1] = sc.nextInt();
        }
        int request_start = sc.nextInt();
        int request_end = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.isAvailable(bookings, request_start, request_end));
    }
}`
                    }
                },
                {
                    id: 'pricing-strategy',
                    title: 'Dynamic Pricing Optimizer',
                    difficulty: 'Hard',
                    description: `Airbnb's pricing team wants to optimize nightly rates to maximize revenue over a season.

You are given:
- 'demand': An array where demand[i] represents the expected bookings at price point i
- 'costs': Fixed costs per night

Find the price point that maximizes profit (revenue - costs). If multiple price points yield the same profit, return the lowest price.

Profit = (price * demand[price]) - costs

Constraints:
- 1 <= demand.length <= 500
- 0 <= demand[i] <= 1000
- 0 <= costs <= 10^6`,
                    examples: [
                        {
                            input: 'demand = [100,80,60,40,20], costs = 500',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'demand = [100,80,60,40,20], costs = 500',
                            judgeInput: '5\n100 80 60 40 20\n500',
                            output: '2'
                        },
                        {
                            input: 'demand = [50,50,50], costs = 0',
                            judgeInput: '3\n50 50 50\n0',
                            output: '2'
                        },
                        {
                            input: 'demand = [10,20,30,40,50], costs = 100',
                            judgeInput: '5\n10 20 30 40 50\n100',
                            output: '4'
                        },
                        {
                            input: 'demand = [100], costs = 50',
                            judgeInput: '1\n100\n50',
                            output: '0'
                        },
                        {
                            input: 'demand = [0,0,0,100], costs = 50',
                            judgeInput: '4\n0 0 0 100\n50',
                            output: '3'
                        },
                        {
                            input: 'demand = [90,80,70,60,50,40], costs = 300',
                            judgeInput: '6\n90 80 70 60 50 40\n300',
                            output: '3'
                        },
                        {
                            input: 'demand = [20,40,60,40,20], costs = 100',
                            judgeInput: '5\n20 40 60 40 20\n100',
                            output: '2'
                        },
                        {
                            input: 'demand = [5,10,15,20,25,30], costs = 50',
                            judgeInput: '6\n5 10 15 20 25 30\n50',
                            output: '5'
                        },
                        {
                            input: 'demand = [100,90,80,70,60], costs = 1000',
                            judgeInput: '5\n100 90 80 70 60\n1000',
                            output: '0'
                        },
                        {
                            input: 'demand = [10,15,18,19,18,15], costs = 70',
                            judgeInput: '6\n10 15 18 19 18 15\n70',
                            output: '3'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} demand
 * @param {number} costs
 * @return {number}
 */
function optimalPrice(demand, costs) {
    // Your code here
}`,
                        python: `def optimal_price(demand, costs):
    """
    :type demand: List[int]
    :type costs: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int optimalPrice(vector<int>& demand, int costs) {
    // Your code here
}`,
                        java: `public class Solution {
    public int optimalPrice(int[] demand, int costs) {
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
    const demand = lines[1].split(' ').map(Number);
    const costs = parseInt(lines[2]);
    console.log(optimalPrice(demand, costs));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
demand = list(map(int, lines[1].split()))
costs = int(lines[2])
print(optimal_price(demand, costs))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int optimalPrice(vector<int>& demand, int costs);

int main() {
    int n, costs;
    cin >> n;
    vector<int> demand(n);
    for(int i=0; i<n; ++i) cin >> demand[i];
    cin >> costs;
    cout << optimalPrice(demand, costs) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] demand = new int[n];
        for(int i=0; i<n; i++) demand[i] = sc.nextInt();
        int costs = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.optimalPrice(demand, costs));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'airbnb-oa-2',
            title: 'Airbnb OA-2',
            duration: 75,
            problems: [
                {
                    id: 'neighborhood-clusters',
                    title: 'Property Neighborhood Clustering',
                    difficulty: 'Medium',
                    description: `Airbnb wants to group properties by neighborhood proximity for better search results.

You are given an array 'distances' where distances[i][j] represents the distance between property i and property j.

Group properties into clusters where any two properties in the same cluster are within 'maxDistance' of each other (directly or transitively).

Return the number of distinct clusters.

Constraints:
- 1 <= n <= 100
- distances[i][j] == distances[j][i]
- distances[i][i] == 0
- 1 <= maxDistance <= 1000`,
                    examples: [
                        {
                            input: 'n = 4, distances = [[0,1,3,5],[1,0,2,4],[3,2,0,2],[5,4,2,0]], maxDistance = 2',
                            output: '2'
                        }
                    ],
                    testCases: [
                        {
                            input: 'n = 4, distances = [[0,1,3,5],[1,0,2,4],[3,2,0,2],[5,4,2,0]], maxDistance = 2',
                            judgeInput: '4\n0 1 3 5\n1 0 2 4\n3 2 0 2\n5 4 2 0\n2',
                            output: '2'
                        },
                        {
                            input: 'n = 3, distances = [[0,5,10],[5,0,5],[10,5,0]], maxDistance = 6',
                            judgeInput: '3\n0 5 10\n5 0 5\n10 5 0\n6',
                            output: '1'
                        },
                        {
                            input: 'n = 2, distances = [[0,10],[10,0]], maxDistance = 5',
                            judgeInput: '2\n0 10\n10 0\n5',
                            output: '2'
                        },
                        {
                            input: 'n = 5, distances = [[0,1,1,1,1],[1,0,1,1,1],[1,1,0,1,1],[1,1,1,0,1],[1,1,1,1,0]], maxDistance = 1',
                            judgeInput: '5\n0 1 1 1 1\n1 0 1 1 1\n1 1 0 1 1\n1 1 1 0 1\n1 1 1 1 0\n1',
                            output: '1'
                        },
                        {
                            input: 'n = 1, distances = [[0]], maxDistance = 100',
                            judgeInput: '1\n0\n100',
                            output: '1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number} n
 * @param {number[][]} distances
 * @param {number} maxDistance
 * @return {number}
 */
function countClusters(n, distances, maxDistance) {
    // Your code here
}`,
                        python: `def count_clusters(n, distances, max_distance):
    """
    :type n: int
    :type distances: List[List[int]]
    :type max_distance: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int countClusters(int n, vector<vector<int>>& distances, int maxDistance) {
    // Your code here
}`,
                        java: `public class Solution {
    public int countClusters(int n, int[][] distances, int maxDistance) {
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
    const distances = [];
    for(let i=1; i<=n; i++) {
        distances.push(lines[i].split(' ').map(Number));
    }
    const maxDistance = parseInt(lines[n+1]);
    console.log(countClusters(n, distances, maxDistance));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
distances = []
for i in range(1, n+1):
    distances.append(list(map(int, lines[i].split())))
max_distance = int(lines[n+1])
print(count_clusters(n, distances, max_distance))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int countClusters(int n, vector<vector<int>>& distances, int maxDistance);

int main() {
    int n, maxDistance;
    cin >> n;
    vector<vector<int>> distances(n, vector<int>(n));
    for(int i=0; i<n; ++i) {
        for(int j=0; j<n; ++j) {
            cin >> distances[i][j];
        }
    }
    cin >> maxDistance;
    cout << countClusters(n, distances, maxDistance) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] distances = new int[n][n];
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                distances[i][j] = sc.nextInt();
            }
        }
        int maxDistance = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.countClusters(n, distances, maxDistance));
    }
}`
                    }
                }
            ]
        }
    ]
};
