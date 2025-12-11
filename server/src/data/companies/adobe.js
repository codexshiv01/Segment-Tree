export const adobeData = {
    id: 'adobe',
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1920px-Adobe_Corporate_Logo.png',
    description: 'Practice real Adobe Online Assessment questions.',
    assessments: [
        {
            id: 'adobe-oa-1',
            title: 'Adobe OA-1',
            duration: 90,
            problems: [
                {
                    id: 'color-palette-generation',
                    title: 'Photoshop Color Palette Optimizer',
                    difficulty: 'Medium',
                    description: `Adobe Photoshop's AI team is building a feature to generate optimal color palettes from images.

You're given an array 'colors' where each color is represented by an RGB value (as an integer), and an integer 'k' representing the desired palette size.

Group similar colors together and return the k most representative colors. Use the frequency of each unique color to determine which colors to keep.

Return an array of the k most frequent colors, sorted by frequency (descending). If there's a tie, maintain the original order.

Constraints:
- 1 <= k <= colors.length <= 10^4
- 0 <= colors[i] <= 16777215 (valid RGB integer)`,
                    examples: [
                        {
                            input: 'colors = [1,1,1,2,2,3], k = 2',
                            output: '[1,2]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'colors = [1,1,1,2,2,3], k = 2',
                            judgeInput: '6\n1 1 1 2 2 3\n2',
                            output: '[1,2]'
                        },
                        {
                            input: 'colors = [1], k = 1',
                            judgeInput: '1\n1\n1',
                            output: '[1]'
                        },
                        {
                            input: 'colors = [4,1,1,1,2,2,3], k = 2',
                            judgeInput: '7\n4 1 1 1 2 2 3\n2',
                            output: '[1,2]'
                        },
                        {
                            input: 'colors = [100,200,100,300,200,100], k = 3',
                            judgeInput: '6\n100 200 100 300 200 100\n3',
                            output: '[100,200,300]'
                        },
                        {
                            input: 'colors = [5,5,5,5,10,10,10,15,15], k = 2',
                            judgeInput: '9\n5 5 5 5 10 10 10 15 15\n2',
                            output: '[5,10]'
                        },
                        {
                            input: 'colors = [3,1,3,4,3,4,4], k = 2',
                            judgeInput: '7\n3 1 3 4 3 4 4\n2',
                            output: '[3,4]'
                        },
                        {
                            input: 'colors = [7,7,8,8,0,8,8,7], k = 3',
                            judgeInput: '8\n7 7 8 8 0 8 8 7\n3',
                            output: '[8,7,0]'
                        },
                        {
                            input: 'colors = [10,10,10,20,20,30], k = 2',
                            judgeInput: '6\n10 10 10 20 20 30\n2',
                            output: '[10,20]'
                        },
                        {
                            input: 'colors = [5,4,3,2,1,1,2,3,4,5], k = 4',
                            judgeInput: '10\n5 4 3 2 1 1 2 3 4 5\n4',
                            output: '[1,2,3,4]'
                        },
                        {
                            input: 'colors = [99,99,99,99,99], k = 1',
                            judgeInput: '5\n99 99 99 99 99\n1',
                            output: '[99]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number[]}
 */
function topKColors(colors, k) {
    // Your code here
}`,
                        python: `def top_k_colors(colors, k):
    """
    :type colors: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<int> topKColors(vector<int>& colors, int k) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[] topKColors(int[] colors, int k) {
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
    const colors = lines[1].split(' ').map(Number);
    const k = parseInt(lines[2]);
    console.log(JSON.stringify(topKColors(colors, k)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
colors = list(map(int, lines[1].split()))
k = int(lines[2])
print(json.dumps(top_k_colors(colors, k)))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> topKColors(vector<int>& colors, int k);

int main() {
    int n, k;
    cin >> n;
    vector<int> colors(n);
    for(int i=0; i<n; ++i) cin >> colors[i];
    cin >> k;
    vector<int> res = topKColors(colors, k);
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << res[i];
        if(i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] colors = new int[n];
        for(int i=0; i<n; i++) colors[i] = sc.nextInt();
        int k = sc.nextInt();
        Solution sol = new Solution();
        int[] res = sol.topKColors(colors, k);
        System.out.print("[");
        for(int i=0; i<res.length; i++) {
            System.out.print(res[i]);
            if(i < res.length-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                },
                {
                    id: 'layer-merge-optimization',
                    title: 'Photoshop Layer Flattening',
                    difficulty: 'Hard',
                    description: `Adobe Photoshop needs to optimize the layer flattening process for large documents.

You're given 'n' layers numbered from 0 to n-1, and an array 'mergeOrder' where mergeOrder[i] = [layer_a, layer_b] means layer_a should be merged into layer_b.

Each merge has a cost equal to the current number of pixels in both layers combined. Find the minimum total cost to merge all layers into a single layer.

You can choose the order of merges, but must respect dependencies (if A must merge into B, you can't merge B elsewhere first).

Constraints:
- 2 <= n <= 50
- mergeOrder.length == n - 1
- All layers will eventually form a single layer`,
                    examples: [
                        {
                            input: 'pixels = [20,30,40], mergeOrder = [[0,1],[1,2]]',
                            output: '140'
                        }
                    ],
                    testCases: [
                        {
                            input: 'pixels = [20,30,40], mergeOrder = [[0,1],[1,2]]',
                            judgeInput: '3\n20 30 40\n2\n0 1\n1 2',
                            output: '140'
                        },
                        {
                            input: 'pixels = [10,20], mergeOrder = [[0,1]]',
                            judgeInput: '2\n10 20\n1\n0 1',
                            output: '30'
                        },
                        {
                            input: 'pixels = [5,10,15,20], mergeOrder = [[0,1],[1,2],[2,3]]',
                            judgeInput: '4\n5 10 15 20\n3\n0 1\n1 2\n2 3',
                            output: '130'
                        },
                        {
                            input: 'pixels = [100,200], mergeOrder = [[1,0]]',
                            judgeInput: '2\n100 200\n1\n1 0',
                            output: '300'
                        },
                        {
                            input: 'pixels = [1,2,3,4,5], mergeOrder = [[0,1],[1,2],[2,3],[3,4]]',
                            judgeInput: '5\n1 2 3 4 5\n4\n0 1\n1 2\n2 3\n3 4',
                            output: '45'
                        },
                        {
                            input: 'pixels = [10,10,10], mergeOrder = [[0,1],[1,2]]',
                            judgeInput: '3\n10 10 10\n2\n0 1\n1 2',
                            output: '50'
                        },
                        {
                            input: 'pixels = [5,15,25], mergeOrder = [[2,1],[1,0]]',
                            judgeInput: '3\n5 15 25\n2\n2 1\n1 0',
                            output: '85'
                        },
                        {
                            input: 'pixels = [50,50], mergeOrder = [[0,1]]',
                            judgeInput: '2\n50 50\n1\n0 1',
                            output: '100'
                        },
                        {
                            input: 'pixels = [3,6,9,12], mergeOrder = [[0,1],[2,3],[1,3]]',
                            judgeInput: '4\n3 6 9 12\n3\n0 1\n2 3\n1 3',
                            output: '60'
                        },
                        {
                            input: 'pixels = [8,16,24,32,40], mergeOrder = [[1,2],[0,1],[2,3],[3,4]]',
                            judgeInput: '5\n8 16 24 32 40\n4\n1 2\n0 1\n2 3\n3 4',
                            output: '288'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} pixels
 * @param {number[][]} mergeOrder
 * @return {number}
 */
function minMergeCost(pixels, mergeOrder) {
    // Your code here
}`,
                        python: `def min_merge_cost(pixels, merge_order):
    """
    :type pixels: List[int]
    :type merge_order: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int minMergeCost(vector<int>& pixels, vector<vector<int>>& mergeOrder) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int minMergeCost(int[] pixels, int[][] mergeOrder) {
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
    const pixels = lines[1].split(' ').map(Number);
    const m = parseInt(lines[2]);
    const mergeOrder = [];
    for(let i=3; i<m+3; i++) {
        mergeOrder.push(lines[i].split(' ').map(Number));
    }
    console.log(minMergeCost(pixels, mergeOrder));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
pixels = list(map(int, lines[1].split()))
m = int(lines[2])
merge_order = []
for i in range(3, m+3):
    merge_order.append(list(map(int, lines[i].split())))
print(min_merge_cost(pixels, merge_order))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int minMergeCost(vector<int>& pixels, vector<vector<int>>& mergeOrder);

int main() {
    int n, m;
    cin >> n;
    vector<int> pixels(n);
    for(int i=0; i<n; ++i) cin >> pixels[i];
    cin >> m;
    vector<vector<int>> mergeOrder(m, vector<int>(2));
    for(int i=0; i<m; ++i) cin >> mergeOrder[i][0] >> mergeOrder[i][1];
    cout << minMergeCost(pixels, mergeOrder) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] pixels = new int[n];
        for(int i=0; i<n; i++) pixels[i] = sc.nextInt();
        int m = sc.nextInt();
        int[][] mergeOrder = new int[m][2];
        for(int i=0; i<m; i++) {
            mergeOrder[i][0] = sc.nextInt();
            mergeOrder[i][1] = sc.nextInt();
        }
        Solution sol = new Solution();
        System.out.println(sol.minMergeCost(pixels, mergeOrder));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'adobe-oa-2',
            title: 'Adobe OA-2',
            duration: 75,
            problems: [
                {
                    id: 'font-matching',
                    title: 'InDesign Font Similarity Matcher',
                    difficulty: 'Medium',
                    description: `Adobe InDesign's font management system needs to find similar fonts based on character patterns.

You're given two arrays:
- 'font1': Character widths for font A (array of integers)
- 'font2': Character widths for font B (array of integers)

Calculate the "similarity score" which is the sum of absolute differences between corresponding character widths.

Lower scores indicate more similar fonts.

Constraints:
- font1.length == font2.length
- 1 <= font1.length <= 1000
- 1 <= font1[i], font2[i] <= 100`,
                    examples: [
                        {
                            input: 'font1 = [5,10,15,20], font2 = [6,9,16,19]',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'font1 = [5,10,15,20], font2 = [6,9,16,19]',
                            judgeInput: '4\n5 10 15 20\n6 9 16 19',
                            output: '4'
                        },
                        {
                            input: 'font1 = [1,2,3], font2 = [1,2,3]',
                            judgeInput: '3\n1 2 3\n1 2 3',
                            output: '0'
                        },
                        {
                            input: 'font1 = [10,20,30], font2 = [30,20,10]',
                            judgeInput: '3\n10 20 30\n30 20 10',
                            output: '40'
                        },
                        {
                            input: 'font1 = [5,5,5,5], font2 = [10,10,10,10]',
                            judgeInput: '4\n5 5 5 5\n10 10 10 10',
                            output: '20'
                        },
                        {
                            input: 'font1 = [1,100], font2 = [100,1]',
                            judgeInput: '2\n1 100\n100 1',
                            output: '198'
                        },
                        {
                            input: 'font1 = [50,50,50], font2 = [45,55,50]',
                            judgeInput: '3\n50 50 50\n45 55 50',
                            output: '10'
                        },
                        {
                            input: 'font1 = [1,2,3,4,5,6,7,8,9,10], font2 = [10,9,8,7,6,5,4,3,2,1]',
                            judgeInput: '10\n1 2 3 4 5 6 7 8 9 10\n10 9 8 7 6 5 4 3 2 1',
                            output: '50'
                        },
                        {
                            input: 'font1 = [25,25,25,25], font2 = [25,25,25,25]',
                            judgeInput: '4\n25 25 25 25\n25 25 25 25',
                            output: '0'
                        },
                        {
                            input: 'font1 = [15,20,25], font2 = [20,25,30]',
                            judgeInput: '3\n15 20 25\n20 25 30',
                            output: '15'
                        },
                        {
                            input: 'font1 = [100], font2 = [1]',
                            judgeInput: '1\n100\n1',
                            output: '99'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} font1
 * @param {number[]} font2
 * @return {number}
 */
function fontSimilarity(font1, font2) {
    // Your code here
}`,
                        python: `def font_similarity(font1, font2):
    """
    :type font1: List[int]
    :type font2: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int fontSimilarity(vector<int>& font1, vector<int>& font2) {
    // Your code here
}`,
                        java: `public class Solution {
    public int fontSimilarity(int[] font1, int[] font2) {
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
    const font1 = lines[1].split(' ').map(Number);
    const font2 = lines[2].split(' ').map(Number);
    console.log(fontSimilarity(font1, font2));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
font1 = list(map(int, lines[1].split()))
font2 = list(map(int, lines[2].split()))
print(font_similarity(font1, font2))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int fontSimilarity(vector<int>& font1, vector<int>& font2);

int main() {
    int n;
    cin >> n;
    vector<int> font1(n), font2(n);
    for(int i=0; i<n; ++i) cin >> font1[i];
    for(int i=0; i<n; ++i) cin >> font2[i];
    cout << fontSimilarity(font1, font2) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] font1 = new int[n];
        int[] font2 = new int[n];
        for(int i=0; i<n; i++) font1[i] = sc.nextInt();
        for(int i=0; i<n; i++) font2[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.fontSimilarity(font1, font2));
    }
}`
                    }
                }
            ]
        }
    ]
};
