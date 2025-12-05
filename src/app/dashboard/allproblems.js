//delete me
const all_problems = [
  {
    id: 1,
    name: "Two Sum",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/two-sum/",
    codeExplainLink: "/problems/1",
    difficulty: "easy",
    topics: ["Array"]
  },
  {
    id: 2,
    name: "Add Two Numbers",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/add-two-numbers/",
    codeExplainLink: "/problems/2",
    difficulty: "medium",
    topics: ["Linked List"]
  },
  {
    id: 3,
    name: "Longest Substring Without Repeating Characters",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    codeExplainLink: "/problems/3",
    difficulty: "medium",
    topics: ["Sliding Window", "Dynamic Programming"]
  },
  {
    id: 4,
    name: "Median of Two Sorted Arrays",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    codeExplainLink: "/problems/4",
    difficulty: "hard",
    topics: ["Binary Search", "Array"]
  },
  {
    id: 5,
    name: "Longest Palindromic Substring",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/longest-palindromic-substring/",
    codeExplainLink: "/problems/5",
    difficulty: "medium",
    topics: ["Dynamic Programming", "Strings"]
  },
  {
    id: 6,
    name: "Zigzag Conversion",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/zigzag-conversion/",
    codeExplainLink: "/problems/6",
    difficulty: "medium",
    topics: ["Strings"]
  },
  {
    id: 7,
    name: "Reverse Integer",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/reverse-integer/",
    codeExplainLink: "/problems/7",
    difficulty: "easy",
    topics: ["Bit Manipulation"]
  },
  {
    id: 8,
    name: "String to Integer (atoi)",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/string-to-integer-atoi/",
    codeExplainLink: "/problems/8",
    difficulty: "medium",
    topics: ["Strings"]
  },
  {
    id: 9,
    name: "Palindrome Number",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/palindrome-number/",
    codeExplainLink: "/problems/9",
    difficulty: "easy",
    topics: ["Bit Manipulation"]
  },
  {
    id: 10,
    name: "Regular Expression Matching",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/regular-expression-matching/",
    codeExplainLink: "/problems/10",
    difficulty: "hard",
    topics: ["Dynamic Programming", "Strings"]
  },
  {
    id: 11,
    name: "Container With Most Water",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
    codeExplainLink: "/problems/11",
    difficulty: "medium",
    topics: ["Two Pointer", "Greedy"]
  },
  {
    id: 12,
    name: "Integer to Roman",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/integer-to-roman/",
    codeExplainLink: "/problems/12",
    difficulty: "medium",
    topics: ["Strings"]
  },
  {
    id: 13,
    name: "Roman to Integer",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/roman-to-integer/",
    codeExplainLink: "/problems/13",
    difficulty: "easy",
    topics: ["Dynamic Programming", "Strings"]
  },
  {
    id: 14,
    name: "Longest Common Prefix",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/longest-common-prefix/",
    codeExplainLink: "/problems/14",
    difficulty: "easy",
    topics: ["Strings"]
  },
  {
    id: 15,
    name: "3Sum",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/3sum/",
    codeExplainLink: "/problems/15",
    difficulty: "medium",
    topics: ["Two Pointer", "Sorting"]
  },
  {
    id: 16,
    name: "3Sum Closest",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/3sum-closest/",
    codeExplainLink: "/problems/16",
    difficulty: "medium",
    topics: ["Two Pointer"]
  },
  {
    id: 17,
    name: "Letter Combinations of a Phone Number",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    codeExplainLink: "/problems/17",
    difficulty: "medium",
    topics: ["Recursion", "Strings"]
  },
  {
    id: 18,
    name: "4Sum",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/4sum/",
    codeExplainLink: "/problems/18",
    difficulty: "medium",
    topics: ["Two Pointer", "Sorting"]
  },
  {
    id: 19,
    name: "Remove Nth Node From End of List",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    codeExplainLink: "/problems/19",
    difficulty: "medium",
    topics: ["Linked List", "Two Pointer"]
  },
  {
    id: 20,
    name: "Valid Parentheses",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/valid-parentheses/",
    codeExplainLink: "/problems/20",
    difficulty: "easy",
    topics: ["Stack & Queue", "Strings"]
  },
  {
    id: 21,
    name: "Merge Two Sorted Lists",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
    codeExplainLink: "/problems/21",
    difficulty: "easy",
    topics: ["Linked List"]
  },
  {
    id: 22,
    name: "Generate Parentheses",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/generate-parentheses/",
    codeExplainLink: "/problems/22",
    difficulty: "medium",
    topics: ["Recursion"]
  },
  {
    id: 23,
    name: "Merge k Sorted Lists",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
    codeExplainLink: "/problems/23",
    difficulty: "hard",
    topics: ["Heaps", "Linked List"]
  },
  {
    id: 24,
    name: "Swap Nodes in Pairs",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/swap-nodes-in-pairs/",
    codeExplainLink: "/problems/24",
    difficulty: "medium",
    topics: ["Linked List"]
  },
  {
    id: 25,
    name: "Reverse Nodes in k-Group",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    codeExplainLink: "/problems/25",
    difficulty: "hard",
    topics: ["Linked List"]
  },
  {
    id: 26,
    name: "Remove Duplicates from Sorted Array",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    codeExplainLink: "/problems/26",
    difficulty: "easy",
    topics: ["Two Pointer", "Array"]
  },
  {
    id: 27,
    name: "Remove Element",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/remove-element/",
    codeExplainLink: "/problems/27",
    difficulty: "easy",
    topics: ["Two Pointer", "Array"]
  },
  {
    id: 28,
    name: "Find the Index of the First Occurrence in a String",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    codeExplainLink: "/problems/28",
    difficulty: "easy",
    topics: ["Strings"]
  },
  {
    id: 29,
    name: "Divide Two Integers",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/divide-two-integers/",
    codeExplainLink: "/problems/29",
    difficulty: "medium",
    topics: ["Bit Manipulation"]
  },
  {
    id: 30,
    name: "Substring with Concatenation of All Words",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    codeExplainLink: "/problems/30",
    difficulty: "hard",
    topics: ["Sliding Window", "Dynamic Programming"]
  },
  {
    id: 31,
    name: "Next Permutation",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/next-permutation/",
    codeExplainLink: "/problems/31",
    difficulty: "medium",
    topics: ["Array", "Bit Manipulation"]
  },
  {
    id: 32,
    name: "Longest Valid Parentheses",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/longest-valid-parentheses/",
    codeExplainLink: "/problems/32",
    difficulty: "hard",
    topics: ["Stack & Queue", "Dynamic Programming"]
  },
  {
    id: 33,
    name: "Search in Rotated Sorted Array",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    codeExplainLink: "/problems/33",
    difficulty: "medium",
    topics: ["Binary Search", "Array"]
  },
  {
    id: 34,
    name: "Find First and Last Position of Element in Sorted Array",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    codeExplainLink: "/problems/34",
    difficulty: "medium",
    topics: ["Binary Search"]
  },
  {
    id: 35,
    name: "Search Insert Position",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/search-insert-position/",
    codeExplainLink: "/problems/35",
    difficulty: "easy",
    topics: ["Binary Search"]
  },
  {
    id: 36,
    name: "Valid Sudoku",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/valid-sudoku/",
    codeExplainLink: "/problems/36",
    difficulty: "medium",
    topics: ["Dynamic Programming", "Array"]
  },
  {
    id: 37,
    name: "Sudoku Solver",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/sudoku-solver/",
    codeExplainLink: "/problems/37",
    difficulty: "hard",
    topics: ["Recursion"]
  },
  {
    id: 38,
    name: "Count and Say",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/count-and-say/",
    codeExplainLink: "/problems/38",
    difficulty: "medium",
    topics: ["Strings"]
  },
  {
    id: 39,
    name: "Combination Sum",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/combination-sum/",
    codeExplainLink: "/problems/39",
    difficulty: "medium",
    topics: ["Recursion"]
  },
  {
    id: 40,
    name: "Combination Sum II",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/combination-sum-ii/",
    codeExplainLink: "/problems/40",
    difficulty: "medium",
    topics: ["Recursion"]
  },
  {
    id: 41,
    name: "First Missing Positive",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/first-missing-positive/",
    codeExplainLink: "/problems/41",
    difficulty: "hard",
    topics: ["Array"]
  },
  {
    id: 42,
    name: "Trapping Rain Water",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/",
    codeExplainLink: "/problems/42",
    difficulty: "hard",
    topics: ["Two Pointer", "Dynamic Programming", "Stack & Queue"]
  },
  {
    id: 43,
    name: "Multiply Strings",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/multiply-strings/",
    codeExplainLink: "/problems/43",
    difficulty: "medium",
    topics: ["Strings", "Bit Manipulation"]
  },
  {
    id: 44,
    name: "Wildcard Matching",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/wildcard-matching/",
    codeExplainLink: "/problems/44",
    difficulty: "hard",
    topics: ["Dynamic Programming"]
  },
  {
    id: 45,
    name: "Jump Game II",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/jump-game-ii/",
    codeExplainLink: "/problems/45",
    difficulty: "medium",
    topics: ["Greedy"]
  },
  {
    id: 46,
    name: "Permutations",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/permutations/",
    codeExplainLink: "/problems/46",
    difficulty: "medium",
    topics: ["Recursion"]
  },
  {
    id: 47,
    name: "Permutations II",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/permutations-ii/",
    codeExplainLink: "/problems/47",
    difficulty: "medium",
    topics: ["Recursion"]
  },
  {
    id: 48,
    name: "Rotate Image",
    saved: true,
    status: "solved",
    leetcodeLink: "https://leetcode.com/problems/rotate-image/",
    codeExplainLink: "/problems/48",
    difficulty: "medium",
    topics: ["Array"]
  },
  {
    id: 49,
    name: "Group Anagrams",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/group-anagrams/",
    codeExplainLink: "/problems/49",
    difficulty: "medium",
    topics: ["Dynamic Programming", "Strings"]
  },
  {
    id: 50,
    name: "Pow(x, n)",
    saved: false,
    status: "unsolved",
    leetcodeLink: "https://leetcode.com/problems/powx-n/",
    codeExplainLink: "/problems/50",
    difficulty: "medium",
    topics: ["Bit Manipulation"]
  }
];

export default all_problems;