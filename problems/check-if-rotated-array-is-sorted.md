---
Name: Check if Rotated Array is Sorted
Slug: check-if-rotated-array-is-sorted
Difficulty: easy
leetcode_link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
topics:
  - Array
signals:
  - {weight: 2, text: "A brute-force approach treats each index as a possible rotation starting point", feedback: "Mention that the brute-force method tries every index as a possible rotation."}

  - {weight: 2, text: "Brute-force traversal uses circular indexing with modulo arithmetic", feedback: "Explain that traversal is done circularly using modulo indexing."}

  - {weight: 2, text: "Brute-force checks whether the array remains non-decreasing during traversal", feedback: "Mention that the brute-force method validates sorted order while traversing."}

  - {weight: 1, text: "Brute-force has time complexity O(N^2) and space complexity O(1)", feedback: "State the correct time and space complexity of the brute-force approach."}

  - {weight: 3, text: "In a sorted and rotated array, there can be at most one violation where nums[i] > nums[i+1]", feedback: "Explain the key observation that only one order violation is allowed."}

  - {weight: 3, text: "The optimal approach counts the number of such order violations in a single traversal", feedback: "Mention that the optimal solution works by counting violations in one pass."}

  - {weight: 3, text: "Zero violations means the array is already sorted, one violation means sorted and rotated", feedback: "Explain how zero or one violation determines validity."}

  - {weight: 2, text: "More than one violation means the array is not sorted and rotated", feedback: "Mention that multiple violations invalidate the array."}

  - {weight: 2, text: "The optimal solution runs in O(N) time and O(1) space", feedback: "State the correct time and space complexity of the optimal approach."}
---


## Description
You are given an array of integers. Your task is to check if the given array can be formed by taking a sorted array in ascending fashion and rotating it any number of times (including 0), else return false.

## Examples
- Input: nums = [5, 1, 4, 2, 8]
  Output: false

- Input: nums = [7,2,4]  
  Output: true
  Explanation: Sorted array [2,4,7] rotated 2 times result in [7,2,4]

## Constraints
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- nums[i] may contain duplicate values.

## Perfect Explanations
- Brute:
Consider every index as a potential starting point of the original sorted (but not yet rotated) array.
For each index, simulate moving through the array in circular order using:
i = (i + 1) % n
While traversing, check if the array remains in non-decreasing order.
If we successfully return to the starting index without breaking the sorted condition, that index is a valid starting point hence return true.
If we find a violation (nums[i] > nums[(i+1) % n]), stop and try the next index.
If none of the indices work, return false.
Time Complexity: O(N^2)
Space Complexity: O(1)

Optimal:
In a sorted & rotated array, the pattern of numbers is almost sorted, except for at most one violation.
A violation is where:
nums[i] > nums[i+1]
Traverse the array and count the number of such violations.
If the number of violations is:
0: the array is already sorted (no rotation)
1: the array is sorted and rotated exactly once
greater than 1: the array cannot be a sorted rotated array → return false
Time Complexity: O(N)
Space Complexity: O(1)