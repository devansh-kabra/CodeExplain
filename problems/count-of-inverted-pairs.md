---
Name: Count of Inverted Pairs
Slug: count-of-inverted-pairs
Difficulty: hard
leetcode_link: https://leetcode.com/problems/reverse-pairs/description/
topics:
  - Array
  - Sorting
  - Binary Search
signals:
  - {weight: 2, text: "The brute-force approach checks every possible pair of indices (i, j) with i < j", feedback: "Mention that the brute-force solution examines all index pairs."}

  - {weight: 2, text: "A brute-force pair is counted when nums[i] > 2 * nums[j]", feedback: "Clearly state the condition used to count an inverted pair."}

  - {weight: 1, text: "Brute-force uses two nested loops and runs in O(N^2) time with O(1) space", feedback: "State the correct time and space complexity of the brute-force approach."}

  - {weight: 3, text: "The optimal solution is based on merge sort to reduce comparisons", feedback: "Mention that merge sort is used to optimize the counting process."}

  - {weight: 3, text: "During merge sort, inverted pairs are counted between two sorted halves", feedback: "Explain that counting happens while merging the sorted subarrays."}

  - {weight: 3, text: "Because both halves are sorted, counting valid pairs can be done in linear time per merge", feedback: "Explain why sorted halves allow efficient linear-time counting."}

  - {weight: 2, text: "The total count is accumulated from all merge steps", feedback: "Mention that counts from each merge step are added to form the final result."}

  - {weight: 2, text: "The optimal approach runs in O(N log N) time and uses O(N) extra space", feedback: "State the correct time and space complexity of the optimized solution."}

---

## Description
You are given an array of integers. Your task is to count the number of pairs such that for (i,j) 
0 < i < j < n and nums[i] > 2*nums[j]

## Examples
- Input: nums = [5, 1, 4, 2, 8]
  Output: 3
  Explanation: The valid pairs (i, j) are:
            (0, 1) → 5 > 2*1
            (2, 3) → 4 > 2*2
            (4, 3) → 8 > 2*2

- Input: nums = [7,2,4]  
  Output: 1
  Explanation: The valid pairs (i, j) are:
            (0, 1) → 7 > 2*2
            (0, 2) → 7 > 2*4 (false, 7 ≤ 8, so not counted)
            (1, 2) → 2 > 2*4 (false)

## Constraints
- 1 <= nums.length <= 5 * 10^4
- -2^31 <= nums[i] <= 2^31 - 1

## Perfect Explanations
- Brute:
Check every possible pair (i, j) in the array:
Outer loop: i = 0 to n-1
Inner loop: j = i+1 to n-1
If nums[i] > 2 * nums[j], increment a counter
Return the counter after iterating through all pairs
Time Complexity: O(N^2)
Space Complexity: O(1)

Optimal:
Use merge sort to reduce the number of pairs checked:
While performing the merge function, you have two sorted halves to merge
Before merging, iterate through the two halves to count the number of pairs satisfying nums[i] > 2 * nums[j]
Because the halves are sorted, counting can be done in linear time for each merge step
Add up counts from all merge steps and return the total
Time Complexity: O(NlogN + N) ~ O(NlogN)
Space Complexity: O(N)