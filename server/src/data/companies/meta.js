export const metaData = {
    id: 'meta',
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png',
    description: 'Practice real Meta (Facebook) Online Assessment questions.',
    assessments: [
        {
            id: 'meta-oa-1',
            title: 'Meta OA-1',
            duration: 75,
            problems: [
                {
                    id: 'min-remove-valid',
                    title: 'Messenger Syntax Validator',
                    difficulty: 'Medium',
                    description: `Meta's Messenger team is building a new message parser that supports special command syntax enclosed in parentheses. However, users often type unbalanced parentheses.

Given a string 's' of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

Constraints:
- 1 <= s.length <= 10^5
- s[i] is either '(' , ')', or lowercase English letter`,
                    examples: [
                        {
                            input: 's = "lee(t(c)o)de)"',
                            output: '"lee(t(c)o)de"'
                        },
                        {
                            input: 's = "a)b(c)d"',
                            output: '"ab(c)d"'
                        }
                    ],
                    testCases: [
                        {
                            input: 's = "lee(t(c)o)de)"',
                            judgeInput: 'lee(t(c)o)de)',
                            output: 'lee(t(c)o)de'
                        },
                        {
                            input: 's = "a)b(c)d"',
                            judgeInput: 'a)b(c)d',
                            output: 'ab(c)d'
                        },
                        {
                            input: 's = "))(("',
                            judgeInput: '))((',
                            output: ''
                        },
                        {
                            input: 's = "(a(b(c)d)"',
                            judgeInput: '(a(b(c)d)',
                            output: 'a(b(c)d)'
                        },
                        {
                            input: 's = "abc"',
                            judgeInput: 'abc',
                            output: 'abc'
                        },
                        {
                            input: 's = ""',
                            judgeInput: '',
                            output: ''
                        },
                        {
                            input: 's = "(()"',
                            judgeInput: '(()',
                            output: '()'
                        },
                        {
                            input: 's = "())()((("',
                            judgeInput: '())()(((',
                            output: '()()'
                        },
                        {
                            input: 's = "(t(e)s)t)"',
                            judgeInput: '(t(e)s)t)',
                            output: '(t(e)s)t'
                        },
                        {
                            input: 's = "a(b)c(d)e(f)g"',
                            judgeInput: 'a(b)c(d)e(f)g',
                            output: 'a(b)c(d)e(f)g'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
    // Your code here
}`,
                        python: `def min_remove_to_make_valid(s):
    """
    :type s: str
    :rtype: str
    """
    # Your code here
    pass`,
                        cpp: `#include <string>
using namespace std;

string minRemoveToMakeValid(string s) {
    // Your code here
}`,
                        java: `public class Solution {
    public String minRemoveToMakeValid(String s) {
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
    const s = lines[0] || "";
    console.log(minRemoveToMakeValid(s));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
s = lines[0] if lines else ""
print(min_remove_to_make_valid(s))`,
                        cpp: `
#include <iostream>
#include <string>
using namespace std;

string minRemoveToMakeValid(string s);

int main() {
    string s;
    getline(cin, s);
    cout << minRemoveToMakeValid(s) << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNextLine() ? sc.nextLine() : "";
        Solution sol = new Solution();
        System.out.println(sol.minRemoveToMakeValid(s));
    }
}`
                    }
                },
                {
                    id: 'alien-dictionary',
                    title: 'Universal Translator',
                    difficulty: 'Easy',
                    description: `Meta's AI Research (FAIR) team is working on a universal translator for a newly discovered alien language.

Surprisingly, this language also uses English lowercase letters, but the alphabet order is different. You are given a sequence of words written in the alien language, and the order of the alphabet (a permutation of lowercase letters).

Your task is to verify if the given words are sorted lexicographically according to this alien alphabet rules.

Return true if they are sorted, false otherwise.

Constraints:
- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26`,
                    examples: [
                        {
                            input: 'words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"',
                            output: 'true'
                        }
                    ],
                    testCases: [
                        {
                            input: 'words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"',
                            judgeInput: '2\nhello\nleetcode\nhlabcdefgijkmnopqrstuvwxyz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"',
                            judgeInput: '3\nword\nworld\nrow\nworldabcefghijkmnpqstuvxyz',
                            output: 'false'
                        },
                        {
                            input: 'words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '2\napple\napp\nabcdefghijklmnopqrstuvwxyz',
                            output: 'false'
                        },
                        {
                            input: 'words = ["app","apple"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '2\napp\napple\nabcdefghijklmnopqrstuvwxyz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["kuvp","q"], order = "ngxlkthsjuoqcpavbfdermiywz"',
                            judgeInput: '2\nkuvp\nq\nngxlkthsjuoqcpavbfdermiywz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["hello","hello"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '2\nhello\nhello\nabcdefghijklmnopqrstuvwxyz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["a","b","c"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '3\na\nb\nc\nabcdefghijklmnopqrstuvwxyz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["c","b","a"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '3\nc\nb\na\nabcdefghijklmnopqrstuvwxyz',
                            output: 'false'
                        },
                        {
                            input: 'words = ["alpha","beta","gamma"], order = "abcdefghijklmnopqrstuvwxyz"',
                            judgeInput: '3\nalpha\nbeta\ngamma\nabcdefghijklmnopqrstuvwxyz',
                            output: 'true'
                        },
                        {
                            input: 'words = ["z","x","y"], order = "zyxwvutsrqponmlkjihgfedcba"',
                            judgeInput: '3\nz\nx\ny\nzyxwvutsrqponmlkjihgfedcba',
                            output: 'true'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
    // Your code here
}`,
                        python: `def is_alien_sorted(words, order):
    """
    :type words: List[str]
    :type order: str
    :rtype: bool
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <string>
using namespace std;

bool isAlienSorted(vector<string>& words, string order) {
    // Your code here
}`,
                        java: `public class Solution {
    public boolean isAlienSorted(String[] words, String order) {
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
    const words = [];
    for(let i=1; i<=n; i++) words.push(lines[i]);
    const order = lines[n+1];
    console.log(isAlienSorted(words, order));
});`,
                        python: `
import sys
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
words = lines[1:n+1]
order = lines[n+1]
print(str(is_alien_sorted(words, order)).lower())`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isAlienSorted(vector<string>& words, string order);

int main() {
    int n;
    cin >> n;
    vector<string> words(n);
    for(int i=0; i<n; ++i) cin >> words[i];
    string order;
    cin >> order;
    cout << (isAlienSorted(words, order) ? "true" : "false") << endl;
    return 0;
}`,
                        java: `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for(int i=0; i<n; i++) words[i] = sc.next();
        String order = sc.next();
        Solution sol = new Solution();
        System.out.println(sol.isAlienSorted(words, order));
    }
}`
                    }
                }
            ]
        },
        {
            id: 'meta-oa-2',
            title: 'Meta OA-2',
            duration: 75,
            problems: [
                {
                    id: 'ocean-view',
                    title: 'Horizon Workrooms Layout',
                    difficulty: 'Medium',
                    description: `Meta's Horizon Workrooms team is designing a virtual office space with a scenic ocean view.

There are 'n' buildings in a line. You are given an integer array 'heights' of size 'n' that represents the heights of the buildings.

The ocean is to the right of the buildings. A building has an ocean view if it can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a strictly smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

Constraints:
- 1 <= heights.length <= 10^5
- 1 <= heights[i] <= 10^9`,
                    examples: [
                        {
                            input: 'heights = [4,2,3,1]',
                            output: '[0,2,3]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'heights = [4,2,3,1]',
                            judgeInput: '4\n4 2 3 1',
                            output: '[0,2,3]'
                        },
                        {
                            input: 'heights = [4,3,2,1]',
                            judgeInput: '4\n4 3 2 1',
                            output: '[0,1,2,3]'
                        },
                        {
                            input: 'heights = [1,3,2,4]',
                            judgeInput: '4\n1 3 2 4',
                            output: '[3]'
                        },
                        {
                            input: 'heights = [2,2,2,2]',
                            judgeInput: '4\n2 2 2 2',
                            output: '[3]'
                        },
                        {
                            input: 'heights = [5]',
                            judgeInput: '1\n5',
                            output: '[0]'
                        },
                        {
                            input: 'heights = [1,10,1,10,1]',
                            judgeInput: '5\n1 10 1 10 1',
                            output: '[3,4]'
                        },
                        {
                            input: 'heights = [10,1,10,1]',
                            judgeInput: '4\n10 1 10 1',
                            output: '[2,3]'
                        },
                        {
                            input: 'heights = [5,4,3,2,1,0]',
                            judgeInput: '6\n5 4 3 2 1 0',
                            output: '[0,1,2,3,4,5]'
                        },
                        {
                            input: 'heights = [0,1,2,3,4,5]',
                            judgeInput: '6\n0 1 2 3 4 5',
                            output: '[5]'
                        },
                        {
                            input: 'heights = [100, 50, 20, 10, 5]',
                            judgeInput: '5\n100 50 20 10 5',
                            output: '[0,1,2,3,4]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {number[]} heights
 * @return {number[]}
 */
function findBuildings(heights) {
    // Your code here
}`,
                        python: `def find_buildings(heights):
    """
    :type heights: List[int]
    :rtype: List[int]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
using namespace std;

vector<int> findBuildings(vector<int>& heights) {
    // Your code here
}`,
                        java: `public class Solution {
    public int[] findBuildings(int[] heights) {
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
    const heights = lines[1].split(' ').map(Number);
    console.log(JSON.stringify(findBuildings(heights)));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
heights = list(map(int, lines[1].split()))
print(json.dumps(find_buildings(heights)))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> findBuildings(vector<int>& heights);

int main() {
    int n;
    cin >> n;
    vector<int> heights(n);
    for(int i=0; i<n; ++i) cin >> heights[i];
    vector<int> res = findBuildings(heights);
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
        int[] heights = new int[n];
        for(int i=0; i<n; i++) heights[i] = sc.nextInt();
        Solution sol = new Solution();
        int[] res = sol.findBuildings(heights);
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
                    id: 'account-merge',
                    title: 'Profile Merging System',
                    difficulty: 'Medium',
                    description: `Meta's User Identity team is working on merging duplicate user profiles.

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Constraints:
- 1 <= accounts.length <= 1000
- 2 <= accounts[i].length <= 10
- 1 <= accounts[i][j].length <= 30
- accounts[i][0] consists of English letters.
- accounts[i][j] (for j > 0) is a valid email.`,
                    examples: [
                        {
                            input: 'accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
                            output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]'
                        }
                    ],
                    testCases: [
                        {
                            input: 'accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
                            judgeInput: '4\n3 John johnsmith@mail.com john_newyork@mail.com\n3 John johnsmith@mail.com john00@mail.com\n2 Mary mary@mail.com\n2 John johnnybravo@mail.com',
                            output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["John","johnnybravo@mail.com"],["Mary","mary@mail.com"]]'
                        },
                        {
                            input: 'accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]',
                            judgeInput: '5\n4 Gabe Gabe0@m.co Gabe3@m.co Gabe1@m.co\n4 Kevin Kevin3@m.co Kevin5@m.co Kevin0@m.co\n4 Ethan Ethan5@m.co Ethan4@m.co Ethan0@m.co\n4 Hanzo Hanzo3@m.co Hanzo1@m.co Hanzo0@m.co\n4 Fern Fern5@m.co Fern1@m.co Fern0@m.co',
                            output: '[["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"]]'
                        },
                        {
                            input: 'accounts = [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]',
                            judgeInput: '5\n4 Alex Alex5@m.co Alex4@m.co Alex0@m.co\n4 Ethan Ethan3@m.co Ethan3@m.co Ethan0@m.co\n4 Kevin Kevin4@m.co Kevin2@m.co Kevin2@m.co\n4 Gabe Gabe0@m.co Gabe3@m.co Gabe2@m.co\n4 Gabe Gabe3@m.co Gabe4@m.co Gabe2@m.co',
                            output: '[["Alex","Alex0@m.co","Alex4@m.co","Alex5@m.co"],["Ethan","Ethan0@m.co","Ethan3@m.co"],["Gabe","Gabe0@m.co","Gabe2@m.co","Gabe3@m.co","Gabe4@m.co"],["Kevin","Kevin2@m.co","Kevin4@m.co"]]'
                        },
                        {
                            input: 'accounts = [["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]',
                            judgeInput: '5\n3 David David0@m.co David1@m.co\n3 David David3@m.co David4@m.co\n3 David David4@m.co David5@m.co\n3 David David2@m.co David3@m.co\n3 David David1@m.co David2@m.co',
                            output: '[["David","David0@m.co","David1@m.co","David2@m.co","David3@m.co","David4@m.co","David5@m.co"]]'
                        },
                        {
                            input: 'accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
                            judgeInput: '4\n3 John johnsmith@mail.com john_newyork@mail.com\n3 John johnsmith@mail.com john00@mail.com\n2 Mary mary@mail.com\n2 John johnnybravo@mail.com',
                            output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["John","johnnybravo@mail.com"],["Mary","mary@mail.com"]]'
                        },
                        {
                            input: 'accounts = [["a","b","c"],["a","c","d"],["a","d","e"]]',
                            judgeInput: '3\n3 a b c\n3 a c d\n3 a d e',
                            output: '[["a","b","c","d","e"]]'
                        },
                        {
                            input: 'accounts = [["a","b"],["b","c"],["c","d"],["d","e"]]',
                            judgeInput: '4\n2 a b\n2 b c\n2 c d\n2 d e',
                            output: '[["a","b"],["b","c"],["c","d"],["d","e"]]'
                        },
                        {
                            input: 'accounts = [["a","b"],["a","c"],["a","d"],["a","e"]]',
                            judgeInput: '4\n2 a b\n2 a c\n2 a d\n2 a e',
                            output: '[["a","b"],["a","c"],["a","d"],["a","e"]]'
                        },
                        {
                            input: 'accounts = [["a","b"],["b","c"],["c","d"],["d","e"],["e","f"]]',
                            judgeInput: '5\n2 a b\n2 b c\n2 c d\n2 d e\n2 e f',
                            output: '[["a","b"],["b","c"],["c","d"],["d","e"],["e","f"]]'
                        },
                        {
                            input: 'accounts = [["a","b"],["a","c"],["a","d"],["a","e"],["a","f"]]',
                            judgeInput: '5\n2 a b\n2 a c\n2 a d\n2 a e\n2 a f',
                            output: '[["a","b"],["a","c"],["a","d"],["a","e"],["a","f"]]'
                        }
                    ],
                    starterCode: {
                        javascript: `/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
    // Your code here
}`,
                        python: `def accounts_merge(accounts):
    """
    :type accounts: List[List[str]]
    :rtype: List[List[str]]
    """
    # Your code here
    pass`,
                        cpp: `#include <vector>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    // Your code here
}`,
                        java: `import java.util.*;

public class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
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
    const accounts = [];
    for(let i=1; i<=n; i++) {
        accounts.push(lines[i].split(' '));
    }
    const result = accountsMerge(accounts);
    // Sort for consistent output
    result.forEach(acc => {
        const name = acc[0];
        const emails = acc.slice(1).sort();
        acc.splice(0, acc.length, name, ...emails);
    });
    result.sort((a, b) => a[0].localeCompare(b[0]));
    console.log(JSON.stringify(result));
});`,
                        python: `
import sys
import json
lines = sys.stdin.read().strip().split('\n')
n = int(lines[0])
accounts = []
for i in range(1, n+1):
    accounts.append(lines[i].split())
result = accounts_merge(accounts)
# Sort for consistent output
for acc in result:
    acc[1:] = sorted(acc[1:])
result.sort(key=lambda x: x[0])
print(json.dumps(result))`,
                        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <map>

using namespace std;

// Solution placeholder
vector<vector<string>> accountsMerge(vector<vector<string>>& accounts);

int main() {
    int n;
    cin >> n;
    vector<vector<string>> accounts(n);
    string line, word;
    getline(cin, line); // consume newline
    for(int i=0; i<n; ++i) {
        getline(cin, line);
        stringstream ss(line);
        while(ss >> word) {
            accounts[i].push_back(word);
        }
    }
    
    vector<vector<string>> res = accountsMerge(accounts);
    
    // Sort for consistent output
    for(auto& acc : res) {
        sort(acc.begin() + 1, acc.end());
    }
    sort(res.begin(), res.end());
    
    cout << "[";
    for(int i=0; i<res.size(); ++i) {
        cout << "[";
        for(int j=0; j<res[i].size(); ++j) {
            cout << "\"" << res[i][j] << "\"";
            if(j < res[i].size()-1) cout << ",";
        }
        cout << "]";
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
        if(!sc.hasNext()) return;
        int n = Integer.parseInt(sc.nextLine().trim());
        List<List<String>> accounts = new ArrayList<>();
        for(int i=0; i<n; i++) {
            String line = sc.nextLine();
            String[] parts = line.split(" ");
            List<String> acc = new ArrayList<>(Arrays.asList(parts));
            accounts.add(acc);
        }
        
        Solution sol = new Solution();
        List<List<String>> res = sol.accountsMerge(accounts);
        
        // Sort for consistent output
        for(List<String> acc : res) {
            Collections.sort(acc.subList(1, acc.size()));
        }
        res.sort((a, b) -> a.get(0).compareTo(b.get(0)));
        
        System.out.print("[");
        for(int i=0; i<res.size(); i++) {
            System.out.print("[");
            for(int j=0; j<res.get(i).size(); j++) {
                System.out.print("\"" + res.get(i).get(j) + "\"");
                if(j < res.get(i).size()-1) System.out.print(",");
            }
            System.out.print("]");
            if(i < res.size()-1) System.out.print(",");
        }
        System.out.println("]");
    }
}`
                    }
                }
            ]
        }
    ]
};
