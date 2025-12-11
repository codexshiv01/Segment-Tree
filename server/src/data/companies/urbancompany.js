export const urbanCompanyData = {
    id: 'urbancompany',
    name: 'Urban Company',
    logo: 'https://logo.clearbit.com/urbancompany.com',
    description: 'Practice real Urban Company Online Assessment questions.',
    assessments: [{
        id: 'uc-oa-1',
        title: 'Urban Company OA-1',
        duration: 90,
        problems: [{
            id: 'partner-matching',
            title: 'Service Partner Matching',
            difficulty: 'Hard',
            description: `Match a user request to the best available service partner.

You are given:
- user_loc: [x, y]
- partners: List of [id, x, y, rating, category]
- req_category: Required service category

Goal: Find partners in the required category.
Score = (rating * 10) - distance.
Distance = |x1-x2| + |y1-y2|.
Return the id of the partner with the highest score. If ties, return the smallest id. If no partner found, return -1.

Input Format:
- user_loc: List [x, y]
- partners: List of lists [id, x, y, rating, category]
- req_category: Integer

Output Format:
- Return an integer (partner_id)

Constraints:
- 1 <= partners.length <= 1000
- 1 <= rating <= 5`,
            examples: [
                { input: 'user=[0,0], partners=[[1,2,2,5,1],[2,1,1,4,1]], cat=1', output: '1' },
                { input: 'user=[0,0], partners=[[1,10,10,5,2]], cat=1', output: '-1' }
            ],
            testCases: [
                { input: 'user=[0,0], partners=[[1,2,2,5,1],[2,1,1,4,1]], cat=1', judgeInput: '0 0\n2\n1 2 2 5 1\n2 1 1 4 1\n1', output: '2' },
                { input: 'user=[0,0], partners=[[1,10,10,5,2]], cat=1', judgeInput: '0 0\n1\n1 10 10 5 2\n1', output: '-1' },
                { input: 'user=[10,10], partners=[[1,12,12,5,1],[2,11,11,4.5,1]], cat=1', judgeInput: '10 10\n2\n1 12 12 5 1\n2 11 11 4 1\n1', output: '1' },
                { input: 'user=[5,5], partners=[[1,5,6,5,1],[2,5,4,5,1]], cat=1', judgeInput: '5 5\n2\n1 5 6 5 1\n2 5 4 5 1\n1', output: '1' },
                { input: 'user=[0,0], partners=[[1,10,10,5,1],[2,5,5,3,1]], cat=1', judgeInput: '0 0\n2\n1 10 10 5 1\n2 5 5 3 1\n1', output: '1' },
                { input: 'user=[0,0], partners=[[1,1,1,1,1],[2,2,2,5,1]], cat=1', judgeInput: '0 0\n2\n1 1 1 1 1\n2 2 2 5 1\n1', output: '2' },
                { input: 'user=[20,20], partners=[[1,20,20,5,2],[2,20,20,5,1]], cat=1', judgeInput: '20 20\n2\n1 20 20 5 2\n2 20 20 5 1\n1', output: '2' },
                { input: 'user=[0,0], partners=[[1,100,100,5,1],[2,1,1,1,1]], cat=1', judgeInput: '0 0\n2\n1 100 100 5 1\n2 1 1 1 1\n1', output: '2' },
                { input: 'user=[10,10], partners=[[1,15,15,5,1],[2,12,12,4,1]], cat=1', judgeInput: '10 10\n2\n1 15 15 5 1\n2 12 12 4 1\n1', output: '1' },
                { input: 'user=[5,5], partners=[[1,5,5,5,1],[2,5,5,5,1]]', judgeInput: '5 5\n2\n1 5 5 5 1\n2 5 5 5 1\n1', output: '1' },
                { input: 'user=[0,0], partners=[[1,10,0,5,1],[2,0,10,5,1]]', judgeInput: '0 0\n2\n1 10 0 5 1\n2 0 10 5 1\n1', output: '1' },
                { input: 'user=[0,0], partners=[[1,2,2,4,1],[2,2,2,4,1],[3,2,2,4,1]]', judgeInput: '0 0\n3\n1 2 2 4 1\n2 2 2 4 1\n3 2 2 4 1\n1', output: '1' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} user_loc
 * @param {number[][]} partners
 * @param {number} req_category
 * @return {number}
 */
function matchPartner(user_loc, partners, req_category) {
    // Your code here
}`,
                python: `def match_partner(user_loc, partners, req_category):
    """
    :type user_loc: List[int]
    :type partners: List[List[int]]
    :type req_category: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int matchPartner(vector<int>& user_loc, vector<vector<int>>& partners, int req_category) {
    // Your code here
}`,
                java: `public class Solution {
    public int matchPartner(int[] user_loc, int[][] partners, int req_category) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const user_loc = lines[0].split(' ').map(Number);\n    const n = parseInt(lines[1]);\n    const partners = [];\n    for(let i=2; i<n+2; i++) partners.push(lines[i].split(' ').map(Number));\n    const req_category = parseInt(lines[n+2]);\n    console.log(matchPartner(user_loc, partners, req_category));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nuser_loc = list(map(int, lines[0].split()))\nn = int(lines[1])\npartners = []\nfor i in range(2, n+2):\n    partners.append(list(map(int, lines[i].split())))\nreq_category = int(lines[n+2])\nprint(match_partner(user_loc, partners, req_category))`,
                cpp: `#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\nint matchPartner(vector<int>& user_loc, vector<vector<int>>& partners, int req_category);\nint main() {\n    vector<int> user_loc(2);\n    cin >> user_loc[0] >> user_loc[1];\n    int n;\n    cin >> n;\n    vector<vector<int>> partners(n, vector<int>(5));\n    for(int i=0; i<n; ++i) cin >> partners[i][0] >> partners[i][1] >> partners[i][2] >> partners[i][3] >> partners[i][4];\n    int req_category;\n    cin >> req_category;\n    cout << matchPartner(user_loc, partners, req_category) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] user_loc = {sc.nextInt(), sc.nextInt()};\n        int n = sc.nextInt();\n        int[][] partners = new int[n][5];\n        for(int i=0; i<n; i++) {\n            partners[i][0] = sc.nextInt();\n            partners[i][1] = sc.nextInt();\n            partners[i][2] = sc.nextInt();\n            partners[i][3] = sc.nextInt();\n            partners[i][4] = sc.nextInt();\n        }\n        int req_category = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.matchPartner(user_loc, partners, req_category));\n    }\n}`
            }
        }, {
            id: 'slot-manager',
            title: 'Service Slot Manager',
            difficulty: 'Medium',
            description: `Find the first available time slot for a service.

You are given:
- booked_slots: List of [start, end] (sorted, non-overlapping)
- service_duration: Duration required
- work_start: Start of work day
- work_end: End of work day

Goal: Find the earliest start time 't' such that [t, t + service_duration] does not overlap with any booked slot and is within [work_start, work_end]. Return 't'. If no slot found, return -1.

Input Format:
- booked_slots: List of lists [start, end]
- service_duration: Integer
- work_start: Integer
- work_end: Integer

Output Format:
- Return an integer (start time)

Constraints:
- 0 <= booked_slots.length <= 1000
- 0 <= time <= 1440 (minutes in a day)`,
            examples: [
                { input: 'booked=[[900,1000],[1100,1200]], duration=60, start=900, end=1700', output: '1000' },
                { input: 'booked=[[900,1700]], duration=60, start=900, end=1700', output: '-1' }
            ],
            testCases: [
                { input: 'booked=[[900,1000],[1100,1200]], duration=60, start=900, end=1700', judgeInput: '2\n900 1000\n1100 1200\n60\n900\n1700', output: '1000' },
                { input: 'booked=[[900,1700]], duration=60, start=900, end=1700', judgeInput: '1\n900 1700\n60\n900\n1700', output: '-1' },
                { input: 'booked=[], duration=60, start=900, end=1700', judgeInput: '0\n60\n900\n1700', output: '900' },
                { input: 'booked=[[900,930]], duration=30, start=900, end=1700', judgeInput: '1\n900 930\n30\n900\n1700', output: '930' },
                { input: 'booked=[[900,1000],[1000,1100]], duration=60, start=900, end=1700', judgeInput: '2\n900 1000\n1000 1100\n60\n900\n1700', output: '1100' },
                { input: 'booked=[[900,1000],[1200,1300]], duration=120, start=900, end=1700', judgeInput: '2\n900 1000\n1200 1300\n120\n900\n1700', output: '1000' },
                { input: 'booked=[[900,1600]], duration=60, start=900, end=1700', judgeInput: '1\n900 1600\n60\n900\n1700', output: '1600' },
                { input: 'booked=[[900,1650]], duration=60, start=900, end=1700', judgeInput: '1\n900 1650\n60\n900\n1700', output: '-1' },
                { input: 'booked=[[910,1000]], duration=10, start=900, end=1700', judgeInput: '1\n910 1000\n10\n900\n1700', output: '900' },
                { input: 'booked=[[900,910],[920,930]], duration=10, start=900, end=1700', judgeInput: '2\n900 910\n920 930\n10\n900\n1700', output: '910' },
                { input: 'booked=[[900,1000]], duration=100, start=900, end=1000', judgeInput: '1\n900 1000\n100\n900\n1000', output: '-1' },
                { input: 'booked=[[1000,1100]], duration=100, start=900, end=1200', judgeInput: '1\n1000 1100\n100\n900\n1200', output: '900' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} booked_slots
 * @param {number} service_duration
 * @param {number} work_start
 * @param {number} work_end
 * @return {number}
 */
function findSlot(booked_slots, service_duration, work_start, work_end) {
    // Your code here
}`,
                python: `def find_slot(booked_slots, service_duration, work_start, work_end):
    """
    :type booked_slots: List[List[int]]
    :type service_duration: int
    :type work_start: int
    :type work_end: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int findSlot(vector<vector<int>>& booked_slots, int service_duration, int work_start, int work_end) {
    // Your code here
}`,
                java: `public class Solution {
    public int findSlot(int[][] booked_slots, int service_duration, int work_start, int work_end) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const booked_slots = [];\n    for(let i=1; i<=n; i++) booked_slots.push(lines[i].split(' ').map(Number));\n    const service_duration = parseInt(lines[n+1]);\n    const work_start = parseInt(lines[n+2]);\n    const work_end = parseInt(lines[n+3]);\n    console.log(findSlot(booked_slots, service_duration, work_start, work_end));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\nbooked_slots = []\nfor i in range(1, n+1):\n    booked_slots.append(list(map(int, lines[i].split())))\nservice_duration = int(lines[n+1])\nwork_start = int(lines[n+2])\nwork_end = int(lines[n+3])\nprint(find_slot(booked_slots, service_duration, work_start, work_end))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint findSlot(vector<vector<int>>& booked_slots, int service_duration, int work_start, int work_end);\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> booked_slots(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> booked_slots[i][0] >> booked_slots[i][1];\n    int service_duration, work_start, work_end;\n    cin >> service_duration >> work_start >> work_end;\n    cout << findSlot(booked_slots, service_duration, work_start, work_end) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] booked_slots = new int[n][2];\n        for(int i=0; i<n; i++) {\n            booked_slots[i][0] = sc.nextInt();\n            booked_slots[i][1] = sc.nextInt();\n        }\n        int service_duration = sc.nextInt();\n        int work_start = sc.nextInt();\n        int work_end = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.findSlot(booked_slots, service_duration, work_start, work_end));\n    }\n}`
            }
        }]
    }]
};
