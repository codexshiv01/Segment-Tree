export const stripeData = {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png',
    description: 'Practice real Stripe Online Assessment questions.',
    assessments: [
        {
            id: 'stripe-oa-1',
            title: 'Stripe OA-1',
            duration: 90,
            problems: [
                {
                    id: 'transaction-validator',
                    title: 'Payment Transaction Validator',
                    difficulty: 'Medium',
                    description: `Stripe's fraud detection system needs to validate transaction sequences.

You are given an array 'transactions' where each transaction is [amount, timestamp, merchant_id]. A sequence is valid if:
1. Transactions are in chronological order
2. No two transactions from the same merchant occur within 'cooldown' seconds
3. Total amount doesn't exceed 'limit' in any 60-second window

Return true if the sequence is valid, false otherwise.

Constraints:
- 1 <= transactions.length <= 1000
- 1 <= amount <= 10^6
- 1 <= timestamp <= 10^9
- 1 <= merchant_id <= 1000
- 1 <= cooldown <= 3600
- 1 <= limit <= 10^9`,
                    examples: [
                        {
                            input: 'transactions = [[100,10,1],[200,20,2],[150,25,1]], cooldown = 10, limit = 500',
                            output: 'true'
                        }
                    ],
                    testCases: [
                        {
                            input: 'transactions = [[100,10,1],[200,20,2],[150,25,1]], cooldown = 10, limit = 500',
                            judgeInput: '3\n100 10 1\n200 20 2\n150 25 1\n10\n500',
                            output: 'true'
                        },
                        {
                            input: 'transactions = [[100,10,1],[200,15,1]], cooldown = 10, limit = 1000',
                            judgeInput: '2\n100 10 1\n200 15 1\n10\n1000',
                            output: 'false'
                        },
                        {
                            input: 'transactions = [[500,10,1],[600,80,2]], cooldown = 5, limit = 1000',
                            judgeInput: '2\n500 10 1\n600 80 2\n5\n1000',
                            output: 'true'
                        },
                        {
                            input: 'transactions = [[300,10,1],[400,20,2],[500,30,3]], cooldown = 5, limit = 600',
                            judgeInput: '3\n300 10 1\n400 20 2\n500 30 3\n5\n600',
                            output: 'false'
                        },
                        {
                            input: 'transactions = [[100,10,1]], cooldown = 5, limit = 200',
                            judgeInput: '1\n100 10 1\n5\n200',
                            output: 'true'
                        },
                        {
                            input: 'transactions = [[200,5,1],[300,10,2],[100,70,1]], cooldown = 60, limit = 1000',
                            judgeInput: '3\n200 5 1\n300 10 2\n100 70 1\n60\n1000',
                            output: 'true'
                        },
                        {
                            input: 'transactions = [[1000,100,5],[2000,150,5]], cooldown = 40, limit = 5000',
                            judgeInput: '2\n1000 100 5\n2000 150 5\n40\n5000',
                            output: 'false'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} transactions
 * @param {number} cooldown
 * @param {number} limit
 * @return {boolean}
 */
function validateTransactions(transactions, cooldown, limit) {
    // Your code here
}`,
                        python: `def validate_transactions(transactions, cooldown, limit):
    """
    :type transactions: List[List[int]]
    :type cooldown: int
    :type limit: int
    :rtype: bool
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

bool validateTransactions(vector<vector<int>>& transactions, int cooldown, int limit) {
    // Your code here
}`,
                        java: `public class Solution {
    public boolean validateTransactions(int[][] transactions, int cooldown, int limit) {
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
    const transactions = [];
    for(let i=1; i<=n; i++) {
        transactions.push(lines[i].split(' ').map(Number));
    }
    const cooldown = parseInt(lines[n+1]);
    const limit = parseInt(lines[n+2]);
    console.log(validateTransactions(transactions, cooldown, limit));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
transactions = []
for i in range(1, n+1):
    transactions.append(list(map(int, lines[i].split())))
cooldown = int(lines[n+1])
limit = int(lines[n+2])
print(str(validate_transactions(transactions, cooldown, limit)).lower())`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

bool validateTransactions(vector<vector<int>>& transactions, int cooldown, int limit);

int main() {
    int n, cooldown, limit;
    cin >> n;
    vector<vector<int>> transactions(n, vector<int>(3));
    for(int i=0; i<n; ++i) {
        for(int j=0; j<3; ++j) cin >> transactions[i][j];
    }
    cin >> cooldown >> limit;
    cout << (validateTransactions(transactions, cooldown, limit) ? "true" : "false") << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] transactions = new int[n][3];
        for(int i=0; i<n; i++) {
            for(int j=0; j<3; j++) {
                transactions[i][j] = sc.nextInt();
            }
        }
        int cooldown = sc.nextInt();
        int limit = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.validateTransactions(transactions, cooldown, limit));
    }
}`
                    }
                },
                {
                    id: 'currency-conversion',
                    title: 'Multi-Currency Conversion Path',
                    difficulty: 'Hard',
                    description: `Stripe supports multiple currencies. Find the optimal conversion path between two currencies.

You are given:
- 'rates': Array of [currency_from, currency_to, rate] representing conversion rates
- 'start_currency' and 'end_currency': The currencies to convert between
- 'amount': The amount to convert

Find the maximum amount you can get after conversion. If conversion is impossible, return -1.

Note: You can chain multiple conversions (e.g., USD -> EUR -> GBP).

Constraints:
- 1 <= rates.length <= 100
- 1 <= amount <= 10^6
- All rates > 0`,
                    examples: [
                        {
                            input: 'rates = [[0,1,0.9],[1,2,1.5],[0,2,1.2]], start = 0, end = 2, amount = 100',
                            output: '135'
                        }
                    ],
                    testCases: [
                        {
                            input: 'rates = [[0,1,0.9],[1,2,1.5],[0,2,1.2]], start = 0, end = 2, amount = 100',
                            judgeInput: '3\n0 1 0.9\n1 2 1.5\n0 2 1.2\n0 2\n100',
                            output: '135'
                        },
                        {
                            input: 'rates = [[0,1,2.0]], start = 1, end = 0, amount = 50',
                            judgeInput: '1\n0 1 2.0\n1 0\n50',
                            output: '-1'
                        },
                        {
                            input: 'rates = [[0,1,1.1],[1,0,0.9]], start = 0, end = 1, amount = 100',
                            judgeInput: '2\n0 1 1.1\n1 0 0.9\n0 1\n100',
                            output: '110'
                        },
                        {
                            input: 'rates = [[0,1,0.8],[1,2,1.25],[2,0,1.0]], start = 0, end = 2, amount = 200',
                            judgeInput: '3\n0 1 0.8\n1 2 1.25\n2 0 1.0\n0 2\n200',
                            output: '200'
                        },
                        {
                            input: 'rates = [[0,1,1.5],[1,2,2.0],[2,3,0.5]], start = 0, end = 3, amount = 100',
                            judgeInput: '3\n0 1 1.5\n1 2 2.0\n2 3 0.5\n0 3\n100',
                            output: '150'
                        },
                        {
                            input: 'rates = [[0,1,1.0]], start = 0, end = 0, amount = 500',
                            judgeInput: '1\n0 1 1.0\n0 0\n500',
                            output: '500'
                        },
                        {
                            input: 'rates = [[0,1,0.5],[1,2,2.0],[0,2,0.95]], start = 0, end = 2, amount = 1000',
                            judgeInput: '3\n0 1 0.5\n1 2 2.0\n0 2 0.95\n0 2\n1000',
                            output: '1000'
                        },
                        {
                            input: 'rates = [[0,1,1.2],[1,2,1.3],[2,3,1.4]], start = 0, end = 3, amount = 100',
                            judgeInput: '3\n0 1 1.2\n1 2 1.3\n2 3 1.4\n0 3\n100',
                            output: '218'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[][]} rates
 * @param {number} start
 * @param {number} end
 * @param {number} amount
 * @return {number}
 */
function maxConversion(rates, start, end, amount) {
    // Your code here
}`,
                        python: `def max_conversion(rates, start, end, amount):
    """
    :type rates: List[List[float]]
    :type start: int
    :type end: int
    :type amount: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int maxConversion(vector<vector<double>>& rates, int start, int end, int amount) {
    // Your code here
}`,
                        java: `public class Solution {
    public int maxConversion(double[][] rates, int start, int end, int amount) {
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
    const rates = [];
    for(let i=1; i<=n; i++) {
        const parts = lines[i].split(' ');
        rates.push([parseInt(parts[0]), parseInt(parts[1]), parseFloat(parts[2])]);
    }
    const [start, end] = lines[n+1].split(' ').map(Number);
    const amount = parseInt(lines[n+2]);
    console.log(maxConversion(rates, start, end, amount));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
rates = []
for i in range(1, n+1):
    parts = lines[i].split()
    rates.append([int(parts[0]), int(parts[1]), float(parts[2])])
start, end = map(int, lines[n+1].split())
amount = int(lines[n+2])
print(max_conversion(rates, start, end, amount))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int maxConversion(vector<vector<double>>& rates, int start, int end, int amount);

int main() {
    int n, start, end, amount;
    cin >> n;
    vector<vector<double>> rates(n, vector<double>(3));
    for(int i=0; i<n; ++i) {
        int from, to;
        double rate;
        cin >> from >> to >> rate;
        rates[i][0] = from;
        rates[i][1] = to;
        rates[i][2] = rate;
    }
    cin >> start >> end >> amount;
    cout << maxConversion(rates, start, end, amount) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double[][] rates = new double[n][3];
        for(int i=0; i<n; i++) {
            rates[i][0] = sc.nextInt();
            rates[i][1] = sc.nextInt();
            rates[i][2] = sc.nextDouble();
        }
        int start = sc.nextInt();
        int end = sc.nextInt();
        int amount = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.maxConversion(rates, start, end, amount));
    }
}`
                    }
                }
            ]
        }
    ]
};
