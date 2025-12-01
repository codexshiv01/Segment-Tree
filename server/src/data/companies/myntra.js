export const myntraData = {
    id: 'myntra',
    name: 'Myntra',
    logo: 'https://logo.clearbit.com/myntra.com',
    description: 'Practice real Myntra Online Assessment questions.',
    assessments: [{
        id: 'myntra-oa-1',
        title: 'Myntra OA-1',
        duration: 90,
        problems: [{
            id: 'size-recommendation',
            title: 'Smart Size Recommendation Engine',
            difficulty: 'Medium',
            description: `Recommend clothing size based on user measurements and product fit data.

You are given:
- user: [height_cm, weight_kg, chest_cm, waist_cm]
- product_sizes: List of [size_name, min_height, max_height, min_weight, max_weight]

Goal: Find the size where user's height and weight both fall within the range. Return the size_name (as integer id), or -1 if no match.

Input Format:
- user: List of 4 integers
- product_sizes: List of lists [size_id, min_h, max_h, min_w, max_w]

Output Format:
- Return an integer (size_id or -1)

Constraints:
- 100 <= height <= 250
- 30 <= weight <= 200
- 1 <= product_sizes.length <= 20`,
            examples: [
                { input: 'user = [170,70,95,80], product_sizes = [[1,160,175,60,80],[2,175,190,75,95]]', output: '1' },
                { input: 'user = [180,85,100,85], product_sizes = [[1,160,175,60,80]]', output: '-1' }
            ],
            testCases: [
                { input: 'user = [170,70,95,80], product_sizes = [[1,160,175,60,80],[2,175,190,75,95]]', judgeInput: '170 70 95 80\n2\n1 160 175 60 80\n2 175 190 75 95', output: '1' },
                { input: 'user = [180,85,100,85], product_sizes = [[1,160,175,60,80]]', judgeInput: '180 85 100 85\n1\n1 160 175 60 80', output: '-1' },
                { input: 'user = [165,65,90,75], product_sizes = [[1,150,170,50,70],[2,170,185,70,90]]', judgeInput: '165 65 90 75\n2\n1 150 170 50 70\n2 170 185 70 90', output: '1' },
                { input: 'user = [185,90,105,90], product_sizes = [[1,180,195,85,100],[2,195,210,100,120]]', judgeInput: '185 90 105 90\n2\n1 180 195 85 100\n2 195 210 100 120', output: '1' },
                { input: 'user = [175,80,98,82], product_sizes = [[3,170,180,75,85]]', judgeInput: '175 80 98 82\n1\n3 170 180 75 85', output: '3' },
                { input: 'user = [160,55,85,70], product_sizes = [[1,150,165,45,60],[2,165,180,60,75]]', judgeInput: '160 55 85 70\n2\n1 150 165 45 60\n2 165 180 60 75', output: '1' },
                { input: 'user = [190,95,110,95], product_sizes = [[5,185,200,90,105]]', judgeInput: '190 95 110 95\n1\n5 185 200 90 105', output: '5' },
                { input: 'user = [155,50,80,65], product_sizes = [[1,140,160,40,55],[2,160,175,55,70]]', judgeInput: '155 50 80 65\n2\n1 140 160 40 55\n2 160 175 55 70', output: '1' },
                { input: 'user = [200,110,120,100], product_sizes = [[1,160,180,70,90],[2,180,200,90,110]]', judgeInput: '200 110 120 100\n2\n1 160 180 70 90\n2 180 200 90 110', output: '2' },
                { input: 'user = [172,75,96,78], product_sizes = [[2,170,180,70,80],[3,180,190,80,95]]', judgeInput: '172 75 96 78\n2\n2 170 180 70 80\n3 180 190 80 95', output: '2' },
                { input: 'user = [168,72,92,76], product_sizes = [[1,160,170,65,75],[2,170,180,75,85]]', judgeInput: '168 72 92 76\n2\n1 160 170 65 75\n2 170 180 75 85', output: '1' },
                { input: 'user = [195,100,115,98], product_sizes = [[4,190,205,95,110],[5,205,220,110,130]]', judgeInput: '195 100 115 98\n2\n4 190 205 95 110\n5 205 220 110 130', output: '4' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[]} user
 * @param {number[][]} product_sizes
 * @return {number}
 */
function recommendSize(user, product_sizes) {
    // Your code here
}`,
                python: `def recommend_size(user, product_sizes):
    """
    :type user: List[int]
    :type product_sizes: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int recommendSize(vector<int>& user, vector<vector<int>>& product_sizes) {
    // Your code here
}`,
                java: `public class Solution {
    public int recommendSize(int[] user, int[][] product_sizes) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const user = lines[0].split(' ').map(Number);\n    const n = parseInt(lines[1]);\n    const product_sizes = [];\n    for(let i=2; i<2+n; i++) product_sizes.push(lines[i].split(' ').map(Number));\n    console.log(recommendSize(user, product_sizes));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nuser = list(map(int, lines[0].split()))\nn = int(lines[1])\nproduct_sizes = []\nfor i in range(2, 2+n):\n    product_sizes.append(list(map(int, lines[i].split())))\nprint(recommend_size(user, product_sizes))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint recommendSize(vector<int>& user, vector<vector<int>>& product_sizes);\nint main() {\n    vector<int> user(4);\n    for(int i=0; i<4; ++i) cin >> user[i];\n    int n;\n    cin >> n;\n    vector<vector<int>> product_sizes(n, vector<int>(5));\n    for(int i=0; i<n; ++i) {\n        for(int j=0; j<5; ++j) cin >> product_sizes[i][j];\n    }\n    cout << recommendSize(user, product_sizes) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] user = new int[4];\n        for(int i=0; i<4; i++) user[i] = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] product_sizes = new int[n][5];\n        for(int i=0; i<n; i++) {\n            for(int j=0; j<5; j++) product_sizes[i][j] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.println(sol.recommendSize(user, product_sizes));\n    }\n}`
            }
        }, {
            id: 'discount-optimizer',
            title: 'Flash Sale Discount Optimizer',
            difficulty: 'Easy',
            description: `Calculate final price after applying flash sale discounts and coupons.

You are given:
- original_price: Original product price
- flash_discount_percent: Flash sale discount percentage
- coupon_discount: Fixed coupon discount amount
- min_purchase: Minimum purchase for coupon (apply coupon only if price >= min_purchase)

Goal: First apply flash discount: price_after_flash = original_price * (1 - flash_discount_percent/100). Then if price_after_flash >= min_purchase, apply coupon: final = price_after_flash - coupon_discount. Return max(0, final) rounded to 2 decimals.

Input Format:
- original_price: Float
- flash_discount_percent: Float
- coupon_discount: Float
- min_purchase: Float

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= original_price <= 100000
- 0 <= flash_discount_percent <= 90
- 0 <= coupon_discount <= 10000
- 0 <= min_purchase <= 100000`,
            examples: [
                { input: 'original_price = 1000, flash_discount_percent = 20, coupon_discount = 100, min_purchase = 500', output: '700.00' },
                { input: 'original_price = 500, flash_discount_percent = 10, coupon_discount = 100, min_purchase = 600', output: '450.00' }
            ],
            testCases: [
                { input: 'original_price = 1000, flash_discount_percent = 20, coupon_discount = 100, min_purchase = 500', judgeInput: '1000\n20\n100\n500', output: '700.00' },
                { input: 'original_price = 500, flash_discount_percent = 10, coupon_discount = 100, min_purchase = 600', judgeInput: '500\n10\n100\n600', output: '450.00' },
                { input: 'original_price = 2000, flash_discount_percent = 30, coupon_discount = 200, min_purchase = 1000', judgeInput: '2000\n30\n200\n1000', output: '1200.00' },
                { input: 'original_price = 800, flash_discount_percent = 25, coupon_discount = 50, min_purchase = 500', judgeInput: '800\n25\n50\n500', output: '550.00' },
                { input: 'original_price = 1500, flash_discount_percent = 40, coupon_discount = 150, min_purchase = 800', judgeInput: '1500\n40\n150\n800', output: '750.00' },
                { input: 'original_price = 300, flash_discount_percent = 15, coupon_discount = 300, min_purchase = 200', judgeInput: '300\n15\n300\n200', output: '0.00' },
                { input: 'original_price = 5000, flash_discount_percent = 50, coupon_discount = 500, min_purchase = 2000', judgeInput: '5000\n50\n500\n2000', output: '2000.00' },
                { input: 'original_price = 1200, flash_discount_percent = 35, coupon_discount = 100, min_purchase = 1000', judgeInput: '1200\n35\n100\n1000', output: '680.00' },
                { input: 'original_price = 600, flash_discount_percent = 20, coupon_discount = 80, min_purchase = 400', judgeInput: '600\n20\n80\n400', output: '400.00' },
                { input: 'original_price = 3500, flash_discount_percent = 45, coupon_discount = 250, min_purchase = 1500', judgeInput: '3500\n45\n250\n1500', output: '1675.00' },
                { input: 'original_price = 900, flash_discount_percent = 10, coupon_discount = 120, min_purchase = 1000', judgeInput: '900\n10\n120\n1000', output: '810.00' },
                { input: 'original_price = 4000, flash_discount_percent = 60, coupon_discount = 400, min_purchase = 1000', judgeInput: '4000\n60\n400\n1000', output: '1200.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number} original_price
 * @param {number} flash_discount_percent
 * @param {number} coupon_discount
 * @param {number} min_purchase
 * @return {number}
 */
function finalPrice(original_price, flash_discount_percent, coupon_discount, min_purchase) {
    // Your code here
}`,
                python: `def final_price(original_price, flash_discount_percent, coupon_discount, min_purchase):
    """
    :type original_price: float
    :type flash_discount_percent: float
    :type coupon_discount: float
    :type min_purchase: float
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `double finalPrice(double original_price, double flash_discount_percent, double coupon_discount, double min_purchase) {
    // Your code here
}`,
                java: `public class Solution {
    public double finalPrice(double original_price, double flash_discount_percent, double coupon_discount, double min_purchase) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const original_price = parseFloat(lines[0]);\n    const flash_discount_percent = parseFloat(lines[1]);\n    const coupon_discount = parseFloat(lines[2]);\n    const min_purchase = parseFloat(lines[3]);\n    console.log(finalPrice(original_price, flash_discount_percent, coupon_discount, min_purchase).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\noriginal_price = float(lines[0])\nflash_discount_percent = float(lines[1])\ncoupon_discount = float(lines[2])\nmin_purchase = float(lines[3])\nprint(f'{final_price(original_price, flash_discount_percent, coupon_discount, min_purchase):.2f}')`,
                cpp: `#include <iostream>\n#include <iomanip>\n#include <algorithm>\nusing namespace std;\ndouble finalPrice(double original_price, double flash_discount_percent, double coupon_discount, double min_purchase);\nint main() {\n    double original_price, flash_discount_percent, coupon_discount, min_purchase;\n    cin >> original_price >> flash_discount_percent >> coupon_discount >> min_purchase;\n    cout << fixed << setprecision(2) << finalPrice(original_price, flash_discount_percent, coupon_discount, min_purchase) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double original_price = sc.nextDouble();\n        double flash_discount_percent = sc.nextDouble();\n        double coupon_discount = sc.nextDouble();\n        double min_purchase = sc.nextDouble();\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.finalPrice(original_price, flash_discount_percent, coupon_discount, min_purchase));\n    }\n}`
            }
        }]
    }]
};
