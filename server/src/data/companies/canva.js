export const canvaData = {
    id: 'canva',
    name: 'Canva',
    logo: 'https://logo.clearbit.com/canva.com',
    description: 'Practice real Canva Online Assessment questions.',
    assessments: [{
        id: 'canva-oa-1',
        title: 'Canva OA-1',
        duration: 90,
        problems: [{
            id: 'template-matching',
            title: 'Design Template Similarity Matcher',
            difficulty: 'Hard',
            description: `Canva needs to match user designs to similar templates. Calculate similarity score based on element overlap and color scheme.

You are given:
- design: List of [element_type, color_id]
- template: List of [element_type, color_id]

Goal: Calculate similarity = (matching_elements / max(len(design), len(template))) * 100. Round to 2 decimal places. Elements match if both type and color match.

Input Format:
- design: List of lists [type, color]
- template: List of lists [type, color]

Output Format:
- Return a float rounded to 2 decimal places

Constraints:
- 1 <= design.length, template.length <= 100
- 1 <= element_type, color_id <= 1000`,
            examples: [
                { input: 'design = [[1,10],[2,20],[3,30]], template = [[1,10],[2,20],[4,40]]', output: '66.67' },
                { input: 'design = [[1,10]], template = [[1,10],[2,20]]', output: '50.00' }
            ],
            testCases: [
                { input: 'design = [[1,10],[2,20],[3,30]], template = [[1,10],[2,20],[4,40]]', judgeInput: '3\n1 10\n2 20\n3 30\n3\n1 10\n2 20\n4 40', output: '66.67' },
                { input: 'design = [[1,10]], template = [[1,10],[2,20]]', judgeInput: '1\n1 10\n2\n1 10\n2 20', output: '50.00' },
                { input: 'design = [[1,5],[2,10],[3,15]], template = [[1,5],[2,10],[3,15]]', judgeInput: '3\n1 5\n2 10\n3 15\n3\n1 5\n2 10\n3 15', output: '100.00' },
                { input: 'design = [[1,1]], template = [[2,2]]', judgeInput: '1\n1 1\n1\n2 2', output: '0.00' },
                { input: 'design = [[1,10],[2,20]], template = [[1,10]]', judgeInput: '2\n1 10\n2 20\n1\n1 10', output: '50.00' },
                { input: 'design = [[5,50],[6,60],[7,70],[8,80]], template = [[5,50],[6,60]]', judgeInput: '4\n5 50\n6 60\n7 70\n8 80\n2\n5 50\n6 60', output: '50.00' },
                { input: 'design = [[1,100],[2,200],[3,300]], template = [[4,400],[5,500],[6,600]]', judgeInput: '3\n1 100\n2 200\n3 300\n3\n4 400\n5 500\n6 600', output: '0.00' },
                { input: 'design = [[10,20]], template = [[10,20]]', judgeInput: '1\n10 20\n1\n10 20', output: '100.00' },
                { input: 'design = [[1,1],[1,1],[2,2]], template = [[1,1],[2,2],[3,3]]', judgeInput: '3\n1 1\n1 1\n2 2\n3\n1 1\n2 2\n3 3', output: '66.67' },
                { input: 'design = [[7,77],[8,88],[9,99]], template = [[7,77],[8,88],[9,99],[10,100]]', judgeInput: '3\n7 77\n8 88\n9 99\n4\n7 77\n8 88\n9 99\n10 100', output: '75.00' },
                { input: 'design = [[1,10],[2,10],[3,10]], template = [[1,20],[2,20],[3,20]]', judgeInput: '3\n1 10\n2 10\n3 10\n3\n1 20\n2 20\n3 20', output: '0.00' },
                { input: 'design = [[15,25],[16,26]], template = [[15,25],[16,26],[17,27],[18,28],[19,29]]', judgeInput: '2\n15 25\n16 26\n5\n15 25\n16 26\n17 27\n18 28\n19 29', output: '40.00' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} design
 * @param {number[][]} template
 * @return {number}
 */
function similarity(design, template) {
    // Your code here
}`,
                python: `def similarity(design, template):
    """
    :type design: List[List[int]]
    :type template: List[List[int]]
    :rtype: float
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

double similarity(vector<vector<int>>& design, vector<vector<int>>& tmp) {
    // Your code here
}`,
                java: `public class Solution {
    public double similarity(int[][] design, int[][] template) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const design = [];\n    for(let i=1; i<=n; i++) design.push(lines[i].split(' ').map(Number));\n    const m = parseInt(lines[n+1]);\n    const template = [];\n    for(let i=n+2; i<n+2+m; i++) template.push(lines[i].split(' ').map(Number));\n    console.log(similarity(design, template).toFixed(2));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn =  int(lines[0])\ndesign = []\nfor i in range(1, n+1):\n    design.append(list(map(int, lines[i].split())))\nm = int(lines[n+1])\ntemplate = []\nfor i in range(n+2, n+2+m):\n    template.append(list(map(int, lines[i].split())))\nprint(f'{similarity(design, template):.2f}')`,
                cpp: `#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble similarity(vector<vector<int>>& design, vector<vector<int>>& tmp);\nint main() {\n    int n, m;\n    cin >> n;\n    vector<vector<int>> design(n, vector<int>(2));\n    for(int i=0; i<n; ++i) cin >> design[i][0] >> design[i][1];\n    cin >> m;\n    vector<vector<int>> tmp(m, vector<int>(2));\n    for(int i=0; i<m; ++i) cin >> tmp[i][0] >> tmp[i][1];\n    cout << fixed << setprecision(2) << similarity(design, tmp) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] design = new int[n][2];\n        for(int i=0; i<n; i++) {\n            design[i][0] = sc.nextInt();\n            design[i][1] = sc.nextInt();\n        }\n        int m = sc.nextInt();\n        int[][] template = new int[m][2];\n        for(int i=0; i<m; i++) {\n            template[i][0] = sc.nextInt();\n            template[i][1] = sc.nextInt();\n        }\n        Solution sol = new Solution();\n        System.out.printf("%.2f\\n", sol.similarity(design, template));\n    }\n}`
            }
        }, {
            id: 'color-palette',
            title: 'Smart Color Palette Generator',
            difficulty: 'Medium',
            description: `Generate harmonious color palettes by selecting colors with good contrast and complementary relationships.

You are given:
- colors: List of [color_id, hue, saturation, lightness]
- min_contrast: Minimum lightness difference required
- palette_size: Number of colors to select

Goal: Select palette_size colors with maximum total contrast while ensuring each pair has lightness difference >= min_contrast. Return sum of all pairwise lightness differences, or -1 if impossible.

Input Format:
- colors: List of lists [id, hue, sat, light]
- min_contrast: Integer
- palette_size: Integer

Output Format:
- Return an integer

Constraints:
- 1 <= colors.length <= 50
- 1 <= color_id, hue <= 360
- 0 <= saturation, lightness <= 100
- 1 <= min_contrast <= 100
- 2 <= palette_size <= colors.length`,
            examples: [
                { input: 'colors = [[1,0,100,10],[2,120,100,50],[3,240,100,90]], min_contrast = 30, palette_size = 2', output: '80' },
                { input: 'colors = [[1,0,100,50],[2,120,100,55]], min_contrast = 10, palette_size = 2', output: '-1' }
            ],
            testCases: [
                { input: 'colors = [[1,0,100,10],[2,120,100,50],[3,240,100,90]], min_contrast = 30, palette_size = 2', judgeInput: '3\n1 0 100 10\n2 120 100 50\n3 240 100 90\n30\n2', output: '80' },
                { input: 'colors = [[1,0,100,50],[2,120,100,55]], min_contrast = 10, palette_size = 2', judgeInput: '2\n1 0 100 50\n2 120 100 55\n10\n2', output: '-1' },
                { input: 'colors = [[1,0,100,0],[2,120,100,50],[3,240,100,100]], min_contrast = 40, palette_size = 3', judgeInput: '3\n1 0 100 0\n2 120 100 50\n3 240 100 100\n40\n3', output: '200' },
                { input: 'colors = [[1,0,100,20],[2,60,100,80]], min_contrast = 50, palette_size = 2', judgeInput: '2\n1 0 100 20\n2 60 100 80\n50\n2', output: '60' },
                { input: 'colors = [[1,0,100,10],[2,90,100,20],[3,180,100,30]], min_contrast = 15, palette_size = 2', output: '-1', judgeInput: '3\n1 0 100 10\n2 90 100 20\n3 180 100 30\n15\n2' },
                { input: 'colors = [[1,0,100,0],[2,120,100,30],[3,240,100,60],[4,300,100,90]], min_contrast = 25, palette_size = 3', judgeInput: '4\n1 0 100 0\n2 120 100 30\n3 240 100 60\n4 300,100 90\n25\n3', output: '180' },
                { input: 'colors = [[1,0,100,50]], min_contrast = 10, palette_size = 2', judgeInput: '1\n1 0 100 50\n10\n2', output: '-1' },
                { input: 'colors = [[1,0,100,10],[2,120,100,40],[3,240,100,70]], min_contrast = 20, palette_size = 3', judgeInput: '3\n1 0 100 10\n2 120 100 40\n3 240 100 70\n20\n3', output: '120' },
                { input: 'colors = [[1,0,100,5],[2,60,100,35],[3,120,100,65],[4,180,100,95]], min_contrast = 28, palette_size = 2', judgeInput: '4\n1 0 100 5\n2 60 100 35\n3 120 100 65\n4 180 100 95\n28\n2', output: '90' },
                { input: 'colors = [[1,0,100,25],[2,180,100,75]], min_contrast = 50, palette_size = 2', judgeInput: '2\n1 0 100 25\n2 180 100 75\n50\n2', output: '50' },
                { input: 'colors = [[1,0,100,15],[2,90,100,45],[3,180,100,75]], min_contrast = 25, palette_size = 3', judgeInput: '3\n1 0 100 15\n2 90 100 45\n3 180 100 75\n25\n3', output: '120' },
                { input: 'colors = [[1,0,100,10],[2,60,100,20],[3,120,100,30],[4,180,100,40]], min_contrast = 5, palette_size = 4', judgeInput: '4\n1 0 100 10\n2 60 100 20\n3 120 100 30\n4 180 100 40\n5\n4', output: '120' }
            ],
            starterCode: {
                javascript: `/**
 * @param {number[][]} colors
 * @param {number} min_contrast
 * @param {number} palette_size
 * @return {number}
 */
function maxContrast(colors, min_contrast, palette_size) {
    // Your code here
}`,
                python: `def max_contrast(colors, min_contrast, palette_size):
    """
    :type colors: List[List[int]]
    :type min_contrast: int
    :type palette_size: int
    :rtype: int
    """
    # Your code here
    pass`,
                cpp: `#include <vector>
using namespace std;

int maxContrast(vector<vector<int>>& colors, int min_contrast, int palette_size) {
    // Your code here
}`,
                java: `public class Solution {
    public int maxContrast(int[][] colors, int min_contrast, int palette_size) {
        // Your code here
    }
}`
            },
            driverCode: {
                javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin });\nlet lines = [];\nrl.on('line', (line) => lines.push(line));\nrl.on('close', () => {\n    const n = parseInt(lines[0]);\n    const colors = [];\n    for(let i=1; i<=n; i++) colors.push(lines[i].split(' ').map(Number));\n    const min_contrast = parseInt(lines[n+1]);\n    const palette_size = parseInt(lines[n+2]);\n    console.log(maxContrast(colors, min_contrast, palette_size));\n});`,
                python: `import sys\nlines = sys.stdin.read().strip().split('\\n')\nn = int(lines[0])\ncolors = []\nfor i in range(1, n+1):\n    colors.append(list(map(int, lines[i].split())))\nmin_contrast = int(lines[n+1])\npalette_size = int(lines[n+2])\nprint(max_contrast(colors, min_contrast, palette_size))`,
                cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maxContrast(vector<vector<int>>& colors, int min_contrast, int palette_size);\nint main() {\n    int n, min_contrast, palette_size;\n    cin >> n;\n    vector<vector<int>> colors(n, vector<int>(4));\n    for(int i=0; i<n; ++i) cin >> colors[i][0] >> colors[i][1] >> colors[i][2] >> colors[i][3];\n    cin >> min_contrast >> palette_size;\n    cout << maxContrast(colors, min_contrast, palette_size) << endl;\n    return 0;\n}`,
                java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] colors = new int[n][4];\n        for(int i=0; i<n; i++) {\n            colors[i][0] = sc.nextInt();\n            colors[i][1] = sc.nextInt();\n            colors[i][2] = sc.nextInt();\n            colors[i][3] = sc.nextInt();\n        }\n        int min_contrast = sc.nextInt();\n        int palette_size = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.maxContrast(colors, min_contrast, palette_size));\n    }\n}`
            }
        }]
    }]
};
