export const flipkartData = {
    id: 'flipkart',
    name: 'Flipkart',
    logo: 'https://logo.clearbit.com/flipkart.com',
    description: 'Practice real Flipkart Online Assessment questions.',
    assessments: [
        {
            id: 'flipkart-oa-1',
            title: 'Flipkart OA-1',
            duration: 90,
            problems: [
                {
                    id: 'warehouse-allocation',
                    title: 'Warehouse Inventory Allocation',
                    difficulty: 'Medium',
                    description: `### Problem Description
Flipkart's supply chain optimization involves minimizing logistics costs while ensuring customer satisfaction. In this problem, you are tasked with allocating inventory from multiple warehouses to various regional hubs to meet demand at the lowest possible shipping cost.

You are given:
- \`inventory\`: An array of size \`n\` where \`inventory[i]\` represents the available stock in warehouse \`i\`.
- \`demand\`: An array of size \`m\` where \`demand[j]\` represents the order demand for region \`j\`.
- \`costs\`: A 2D array of size \`n x m\` where \`costs[i][j]\` is the shipping cost per unit from warehouse \`i\` to region \`j\`.

**Goal:**
Allocate inventory to minimize the **total shipping cost** while meeting the demand for **all** regions. If it is impossible to meet the demand for all regions (i.e., total inventory < total demand), return \`-1\`.

### Input Format
- \`inventory\`: List of integers
- \`demand\`: List of integers
- \`costs\`: List of List of integers

### Output Format
- Return an integer representing the minimum total shipping cost. If impossible, return \`-1\`.

### Constraints
- \`1 <= n, m <= 50\`
- \`0 <= inventory[i], demand[j] <= 1000\`
- \`1 <= costs[i][j] <= 100\`
- Total complexity should be efficient enough for the given constraints.`,
                    examples: [
                        {
                            input: 'inventory = [10,15], demand = [8,12], costs = [[2,3],[4,1]]',
                            output: '40'
                        },
                        {
                            input: 'inventory = [20,30], demand = [15,15,10], costs = [[1,2,3],[2,1,2]]',
                            output: '60'
                        }
                    ],
                    testCases: [
                        {
                            input: 'inventory = [10,15], demand = [8,12], costs = [[2,3],[4,1]]',
                            judgeInput: '2\n10 15\n2\n8 12\n2 3\n4 1',
                            output: '40'
                        },
                        {
                            input: 'inventory = [5], demand = [10], costs = [[1]]',
                            judgeInput: '1\n5\n1\n10\n1',
                            output: '-1'
                        },
                        {
                            input: 'inventory = [20,30], demand = [15,15,10], costs = [[1,2,3],[2,1,2]]',
                            judgeInput: '2\n20 30\n3\n15 15 10\n1 2 3\n2 1 2',
                            output: '60'
                        },
                        {
                            input: 'inventory = [50], demand = [25,25], costs = [[5,5]]',
                            judgeInput: '1\n50\n2\n25 25\n5 5',
                            output: '250'
                        },
                        {
                            input: 'inventory = [10,10,10], demand = [15,10], costs = [[1,2],[2,1],[3,3]]',
                            judgeInput: '3\n10 10 10\n2\n15 10\n1 2\n2 1\n3 3',
                            output: '35'
                        },
                        {
                            input: 'inventory = [100], demand = [50], costs = [[2]]',
                            judgeInput: '1\n100\n1\n50\n2',
                            output: '100'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} inventory
 * @param {number[]} demand
 * @param {number[][]} costs
 * @return {number}
 */
function minShippingCost(inventory, demand, costs) {
    // Your code here
}`,
                        python: `def min_shipping_cost(inventory, demand, costs):
    """
    :type inventory: List[int]
    :type demand: List[int]
    :type costs: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minShippingCost(vector<int>& inventory, vector<int>& demand, vector<vector<int>>& costs) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minShippingCost(int[] inventory, int[] demand, int[][] costs) {
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
    const w = parseInt(lines[0]);
    const inventory = lines[1].split(' ').map(Number);
    const r = parseInt(lines[2]);
    const demand = lines[3].split(' ').map(Number);
    const costs = [];
    for(let i=4; i<4+w; i++) {
        costs.push(lines[i].split(' ').map(Number));
    }
    console.log(minShippingCost(inventory, demand, costs));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
w = int(lines[0])
inventory = list(map(int, lines[1].split()))
r = int(lines[2])
demand = list(map(int, lines[3].split()))
costs = []
for i in range(4, 4+w):
    costs.append(list(map(int, lines[i].split())))
print(min_shipping_cost(inventory, demand, costs))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minShippingCost(vector<int>& inventory, vector<int>& demand, vector<vector<int>>& costs);

int main() {
    int w, r;
    cin >> w;
    vector<int> inventory(w);
    for(int i=0; i<w; ++i) cin >> inventory[i];
    cin >> r;
    vector<int> demand(r);
    for(int i=0; i<r; ++i) cin >> demand[i];
    vector<vector<int>> costs(w, vector<int>(r));
    for(int i=0; i<w; ++i) {
        for(int j=0; j<r; ++j) {
            cin >> costs[i][j];
        }
    }
    cout << minShippingCost(inventory, demand, costs) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int w = sc.nextInt();
        int[] inventory = new int[w];
        for(int i=0; i<w; i++) inventory[i] = sc.nextInt();
        int r = sc.nextInt();
        int[] demand = new int[r];
        for(int i=0; i<r; i++) demand[i] = sc.nextInt();
        int[][] costs = new int[w][r];
        for(int i=0; i<w; i++) {
            for(int j=0; j<r; j++) {
                costs[i][j] = sc.nextInt();
            }
        }
        Solution sol = new Solution();
        System.out.println(sol.minShippingCost(inventory, demand, costs));
    }
}`
                    }
                },
                {
                    id: 'flash-sale-scheduler',
                    title: 'Flash Sale Priority Scheduler',
                    difficulty: 'Hard',
                    description: `### Problem Description
During the Big Billion Days sale, millions of transactions happen every second. We need to schedule "Flash Deals" to maximize profit without overlapping time slots.

You are given a list of \`deals\`, where \`deals[i] = [start_time, end_time, profit]\`.
- \`start_time\`: The time when the deal starts (inclusive).
- \`end_time\`: The time when the deal ends (exclusive).
- \`profit\`: The profit generated if this deal is scheduled.

**Goal:**
Find the **maximum total profit** achievable by scheduling a subset of non-overlapping deals. Two deals \`[s1, e1, p1]\` and \`[s2, e2, p2]\` are non-overlapping if \`e1 <= s2\` or \`e2 <= s1\`.

### Input Format
- \`deals\`: A list of lists, where each inner list contains three integers \`[start, end, profit]\`.

### Output Format
- Return an integer representing the maximum profit.

### Constraints
- \`1 <= deals.length <= 1000\`
- \`0 <= start_time < end_time <= 10^6\`
- \`1 <= profit <= 10^4\`
- The algorithm should handle the constraints efficiently (e.g., O(N log N)).`,
                    examples: [
                        {
                            input: 'deals = [[1,3,50],[2,5,40],[4,6,70]]',
                            output: '120'
                        },
                        {
                            input: 'deals = [[1,5,100],[3,7,80],[6,10,120]]',
                            output: '220'
                        }
                    ],
                    testCases: [
                        {
                            input: 'deals = [[1,3,50],[2,5,40],[4,6,70]]',
                            judgeInput: '3\n1 3 50\n2 5 40\n4 6 70',
                            output: '120'
                        },
                        {
                            input: 'deals = [[1,2,100]]',
                            judgeInput: '1\n1 2 100',
                            output: '100'
                        },
                        {
                            input: 'deals = [[1,10,50],[11,20,60],[21,30,70]]',
                            judgeInput: '3\n1 10 50\n11 20 60\n21 30 70',
                            output: '180'
                        },
                        {
                            input: 'deals = [[1,5,100],[3,7,80],[6,10,120]]',
                            judgeInput: '3\n1 5 100\n3 7 80\n6 10 120',
                            output: '220'
                        },
                        {
                            input: 'deals = [[0,2,30],[1,3,40],[2,4,50]]',
                            judgeInput: '3\n0 2 30\n1 3 40\n2 4 50',
                            output: '80'
                        },
                        {
                            input: 'deals = [[5,10,200],[1,6,150],[8,12,180]]',
                            judgeInput: '3\n5 10 200\n1 6 150\n8 12 180',
                            output: '380'
                        },
                        {
                            input: 'deals = [[1,4,100],[2,5,90],[3,6,80],[4,7,150]]',
                            judgeInput: '4\n1 4 100\n2 5 90\n3 6 80\n4 7 150',
                            output: '250'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} deals
 * @return {number}
 */
function maxProfit(deals) {
    // Your code here
}`,
                        python: `def max_profit(deals):
    """
    :type deals: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxProfit(vector<vector<int>>& deals) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxProfit(int[][] deals) {
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
    const deals = [];
    for(let i=1; i<=n; i++) {
        deals.push(lines[i].split(' ').map(Number));
    }
    console.log(maxProfit(deals));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
deals = []
for i in range(1, n+1):
    deals.append(list(map(int, lines[i].split())))
print(max_profit(deals))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<vector<int>>& deals);

int main() {
    int n;
    cin >> n;
    vector<vector<int>> deals(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        cin >> deals[i][0] >> deals[i][1] >> deals[i][2];
    }
    cout << maxProfit(deals) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] deals = new int[n][3];
        for(int i=0; i<n; i++) {
            deals[i][0] = sc.nextInt();
            deals[i][1] = sc.nextInt();
            deals[i][2] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.maxProfit(deals));
    }
}`
                    }
                }
            ]
        }
    ]
};
