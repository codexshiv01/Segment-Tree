export const twitterData = {
    id: 'twitter',
    name: 'Twitter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png',
    description: 'Practice real Twitter/X Online Assessment questions.',
    assessments: [
        {
            id: 'twitter-oa-1',
            title: 'Twitter OA-1',
            duration: 90,
            problems: [
                {
                    id: 'tweet-thread-builder',
                    title: 'Tweet Thread Constructor',
                    difficulty: 'Medium',
                    description: `Twitter's threading feature needs to construct optimal tweet threads from long-form content.

You are given a string 'content' and need to split it into tweets of maximum 'maxLength' characters. Words cannot be split across tweets.

Return the minimum number of tweets needed. If impossible (a single word exceeds maxLength), return -1.

Constraints:
- 1 <= content.length <= 10^4
- 1 <= maxLength <= 280
- Words are separated by single spaces`,
                    examples: [
                        {
                            input: 'content = "Hello world this is a test", maxLength = 15',
                            output: '3'
                        }
                    ],
                    testCases: [
                        {
                            input: 'content = "Hello world this is a test", maxLength = 15',
                            judgeInput: 'Hello world this is a test\n15',
                            output: '3'
                        },
                        {
                            input: 'content = "Short", maxLength = 10',
                            judgeInput: 'Short\n10',
                            output: '1'
                        },
                        {
                            input: 'content = "This is impossible", maxLength = 3',
                            judgeInput: 'This is impossible\n3',
                            output: '-1'
                        },
                        {
                            input: 'content = "A B C D E", maxLength = 5',
                            judgeInput: 'A B C D E\n5',
                            output: '3'
                        },
                        {
                            input: 'content = "Testing the twitter thread algorithm", maxLength = 20',
                            judgeInput: 'Testing the twitter thread algorithm\n20',
                            output: '3'
                        },
                        {
                            input: 'content = "One Two Three Four Five Six", maxLength = 12',
                            judgeInput: 'One Two Three Four Five Six\n12',
                            output: '4'
                        },
                        {
                            input: 'content = "Perfect fit exactly", maxLength = 19',
                            judgeInput: 'Perfect fit exactly\n19',
                            output: '1'
                        },
                        {
                            input: 'content = "X Y Z", maxLength = 1',
                            judgeInput: 'X Y Z\n1',
                            output: '3'
                        },
                        {
                            input: 'content = "Longwordthatexceedslimit test", maxLength = 10',
                            judgeInput: 'Longwordthatexceedslimit test\n10',
                            output: '-1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string} content
 * @param {number} maxLength
 * @return {number}
 */
function minTweets(content, maxLength) {
    // Your code here
}`,
                        python: `def min_tweets(content, max_length):
    """
    :type content: str
    :type max_length: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <string>
using namespace std;

int minTweets(string content, int maxLength) {
    // Your code here
}`,
                        java: `public class Solution {
    public int minTweets(String content, int maxLength) {
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
    const content = lines[0];
    const maxLength = parseInt(lines[1]);
    console.log(minTweets(content, maxLength));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
content = lines[0]
max_length = int(lines[1])
print(min_tweets(content, max_length))`,
                        cpp: `
#include <iostream>
#include <string>
using namespace std;

int minTweets(string content, int maxLength);

int main() {
    string content;
    int maxLength;
    getline(cin, content);
    cin >> maxLength;
    cout << minTweets(content, maxLength) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String content = sc.nextLine();
        int maxLength = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.minTweets(content, maxLength));
    }
}`
                    }
                },
                {
                    id: 'viral-content-predictor',
                    title: 'Viral Content Predictor',
                    difficulty: 'Hard',
                    description: `Twitter's algorithm predicts viral tweets based on early engagement patterns.

You are given an array 'engagement' where engagement[i] represents likes/retweets at minute i. A tweet goes viral if there exists a window of size 'k' where the engagement growth rate exceeds 'threshold'.

Growth rate = (engagement[i] - engagement[i-1]) / engagement[i-1] * 100

Return the earliest minute when the tweet goes viral, or -1 if it never does.

Constraints:
- 1 <= engagement.length <= 10^4
- 1 <= engagement[i] <= 10^6
- 1 <= k <= engagement.length
- 0 <= threshold <= 1000`,
                    examples: [
                        {
                            input: 'engagement = [100,150,180,200,250], k = 2, threshold = 40',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'engagement = [100,150,180,200,250], k = 2, threshold = 40',
                            judgeInput: '5\n100 150 180 200 250\n2\n40',
                            output: '4'
                        },
                        {
                            input: 'engagement = [100,110,120,130], k = 2, threshold = 50',
                            judgeInput: '4\n100 110 120 130\n2\n50',
                            output: '-1'
                        },
                        {
                            input: 'engagement = [10,20,40,80], k = 1, threshold = 90',
                            judgeInput: '4\n10 20 40 80\n1\n90',
                            output: '2'
                        },
                        {
                            input: 'engagement = [50,100,200,400], k = 3, threshold = 80',
                            judgeInput: '4\n50 100 200 400\n3\n80',
                            output: '3'
                        },
                        {
                            input: 'engagement = [1000,1100,1200,1300], k = 1, threshold = 5',
                            judgeInput: '4\n1000 1100 1200 1300\n1\n5',
                            output: '1'
                        },
                        {
                            input: 'engagement = [500,550,600,650,700], k = 2, threshold = 20',
                            judgeInput: '5\n500 550 600 650 700\n2\n20',
                            output: '-1'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} engagement
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function predictViral(engagement, k, threshold) {
    // Your code here
}`,
                        python: `def predict_viral(engagement, k, threshold):
    """
    :type engagement: List[int]
    :type k: int
    :type threshold: int
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int predictViral(vector<int>& engagement, int k, int threshold) {
    // Your code here
}`,
                        java: `public class Solution {
    public int predictViral(int[] engagement, int k, int threshold) {
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
    const engagement = lines[1].split(' ').map(Number);
    const k = parseInt(lines[2]);
    const threshold = parseInt(lines[3]);
    console.log(predictViral(engagement, k, threshold));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
engagement = list(map(int, lines[1].split()))
k = int(lines[2])
threshold = int(lines[3])
print(predict_viral(engagement, k, threshold))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int predictViral(vector<int>& engagement, int k, int threshold);

int main() {
    int n, k, threshold;
    cin >> n;
    vector<int> engagement(n);
    for(int i=0; i<n; ++i) cin >> engagement[i];
    cin >> k >> threshold;
    cout << predictViral(engagement, k, threshold) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] engagement = new int[n];
        for(int i=0; i<n; i++) engagement[i] = sc.nextInt();
        int k = sc.nextInt();
        int threshold = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.predictViral(engagement, k, threshold));
    }
}`
                    }
                }
            ]
        }
    ]
};
