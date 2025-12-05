const data = [
    {
        id: 1,
        slug: "two-sum",
        name: "Two Sum ",
        saved: false,
        status: true,
        difficulty: "easy",
        topics: ["Array"],
        description: "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input has exactly one solution, and you may not use the same element twice.",
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Exactly one valid answer exists",
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Exactly one valid answer exists",
        ],
        examples: [
            {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            }
        ]
    },
    {
        id: 2,
        slug: "add-two-numbers",
        name: "Add Two Numbers",
        difficulty: "medium",
        topics: ["Linked List"],
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",
        constraints: [
            "The number of nodes in each list is in the range [1, 100]",
            "0 <= Node.val <= 9",
            "The numbers do not contain leading zeros unless the number is 0"
        ],
        examples: [
            {
            input: "l1 = [2,4,3], l2 = [5,6,4]",
            output: "[7,0,8]",
            explanation: "342 + 465 = 807"
            }
        ]
    },
    {
        id: 3,
        slug: "longest-substring-without-repeating-characters",
        name: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        topics: ["Sliding Window", "Dynamic Programming"],
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        constraints: [
            "0 <= s.length <= 5 * 10^4",
            "s consists of English letters, digits, symbols and spaces"
        ],
        examples: [
            {
            input: "s = 'abcabcbb'",
            output: "3",
            explanation: "The answer is 'abc', with the length of 3."
            }
        ]
    },
    {
        id: 4,
        slug: "median-of-two-sorted-arrays",
        name: "Median of Two Sorted Arrays",
        difficulty: "hard",
        topics: ["Binary Search", "Array"],
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        constraints: [
            "nums1.length == m",
            "nums2.length == n",
            "0 <= m, n <= 1000",
            "-10^6 <= nums[i] <= 10^6",
            "At least one array is non-empty"
        ],
        examples: [
            {
            input: "nums1 = [1,3], nums2 = [2]",
            output: "2.0",
            explanation: "The merged array = [1,2,3] and the median is 2."
            }
        ]
    }
]

function findData(slug) {
    return data.find(problem => problem.slug === slug) 
}

export default findData;