export const spotifyData = {
    id: 'spotify',
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
    description: 'Practice real Spotify Online Assessment questions.',
    assessments: [
        {
            id: 'spotify-oa-1',
            title: 'Spotify OA-1',
            duration: 90,
            problems: [
                {
                    id: 'playlist-shuffle',
                    title: 'Smart Shuffle Algorithm',
                    difficulty: 'Medium',
                    description: `Spotify's shuffle feature needs improvement. Users complain about hearing the same artist too frequently.

You are given an array 'songs' where songs[i] represents the artist ID. Create a shuffle where no two songs from the same artist are adjacent.

Return any valid shuffled order. If impossible, return an empty array.

Constraints:
- 1 <= songs.length <= 1000
- 1 <= songs[i] <= 100`,
                    examples: [
                        {
                            input: 'songs = [1,1,2,2,3]',
                            output: '[1,2,1,3,2]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'songs = [1,1,2,2,3]',
                            judgeInput: '5\n1 1 2 2 3',
                            output: '[1,2,1,3,2]'
                        },
                        {
                            input: 'songs = [1,1,1,2]',
                            judgeInput: '4\n1 1 1 2',
                            output: '[]'
                        },
                        {
                            input: 'songs = [1,2,3,4,5]',
                            judgeInput: '5\n1 2 3 4 5',
                            output: '[1,2,3,4,5]'
                        },
                        {
                            input: 'songs = [1,1]',
                            judgeInput: '2\n1 1',
                            output: '[]'
                        },
                        {
                            input: 'songs = [1,2,1,2,1]',
                            judgeInput: '5\n1 2 1 2 1',
                            output: '[1,2,1,2,1]'
                        },
                        {
                            input: 'songs = [5,5,5,3,3,3,7]',
                            judgeInput: '7\n5 5 5 3 3 3 7',
                            output: '[5,3,5,3,5,7,3]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} songs
 * @return {number[]}
 */
function smartShuffle(songs) {
    // Your code here
}`,
                        python: `def smart_shuffle(songs):
    """
    :type songs: List[int]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<int> smartShuffle(vector<int>& songs) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public int[] smartShuffle(int[] songs) {
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
    const songs = lines[1].split(' ').map(Number);
    console.log(JSON.stringify(smartShuffle(songs)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
songs = list(map(int, lines[1].split()))
print(json.dumps(smart_shuffle(songs)))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> smartShuffle(vector<int>& songs);

int main() {
    int n;
    cin >> n;
    vector<int> songs(n);
    for(int i=0; i<n; ++i) cin >> songs[i];
    vector<int> res = smartShuffle(songs);
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
        int[] songs = new int[n];
        for(int i=0; i<n; i++) songs[i] = sc.nextInt();
        Solution sol = new Solution();
        int[] res = sol.smartShuffle(songs);
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
                    id: 'track-popularity',
                    title: 'Trending Track Detection',
                    difficulty: 'Easy',
                    description: `Spotify's discovery algorithm needs to identify trending tracks.

You are given an array 'streams' where streams[i] represents the stream count on day i.

A track is "trending" on day i if streams[i] is strictly greater than streams on all previous days.

Return the number of trending days.

Constraints:
- 1 <= streams.length <= 10^5
- 0 <= streams[i] <= 10^9`,
                    examples: [
                        {
                            input: 'streams = [100,200,150,300,250,400]',
                            output: '4'
                        }
                    ],
                    testCases: [
                        {
                            input: 'streams = [100,200,150,300,250,400]',
                            judgeInput: '6\n100 200 150 300 250 400',
                            output: '4'
                        },
                        {
                            input: 'streams = [5,4,3,2,1]',
                            judgeInput: '5\n5 4 3 2 1',
                            output: '1'
                        },
                        {
                            input: 'streams = [1,2,3,4,5]',
                            judgeInput: '5\n1 2 3 4 5',
                            output: '5'
                        },
                        {
                            input: 'streams = [100]',
                            judgeInput: '1\n100',
                            output: '1'
                        },
                        {
                            input: 'streams = [10,10,10,10]',
                            judgeInput: '4\n10 10 10 10',
                            output: '1'
                        },
                        {
                            input: 'streams = [50,100,50,150,50,200]',
                            judgeInput: '6\n50 100 50 150 50 200',
                            output: '4'
                        },
                        {
                            input: 'streams = [1000,500,750,250,900]',
                            judgeInput: '5\n1000 500 750 250 900',
                            output: '1'
                        },
                        {
                            input: 'streams = [0,1,0,2,0,3]',
                            judgeInput: '6\n0 1 0 2 0 3',
                            output: '4'
                        },
                        {
                            input: 'streams = [100,200,300,200,400,500]',
                            judgeInput: '6\n100 200 300 200 400 500',
                            output: '5'
                        },
                        {
                            input: 'streams = [999,1000,1001,1002,1003]',
                            judgeInput: '5\n999 1000 1001 1002 1003',
                            output: '5'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} streams
 * @return {number}
 */
function trendingDays(streams) {
    // Your code here
}`,
                        python: `def trending_days(streams):
    """
    :type streams: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

int trendingDays(vector<int>& streams) {
    // Your code here
}`,
                        java: `public class Solution {
    public int trendingDays(int[] streams) {
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
    const streams = lines[1].split(' ').map(Number);
    console.log(trendingDays(streams));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\\n')
n = int(lines[0])
streams = list(map(int, lines[1].split()))
print(trending_days(streams))`,
                        cpp: `
#include <iostream>
#include <vector>
using namespace std;

int trendingDays(vector<int>& streams);

int main() {
    int n;
    cin >> n;
    vector<int> streams(n);
    for(int i=0; i<n; ++i) cin >> streams[i];
    cout << trendingDays(streams) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] streams = new int[n];
        for(int i=0; i<n; i++) streams[i] = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.trendingDays(streams));
    }
}`
                    }
                }
            ]
        }
    ]
};
