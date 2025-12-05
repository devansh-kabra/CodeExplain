---
Name: Check if Rotated Array is Sorted
Slug: check-if-rotated-array-is-sorted
Difficulty: easy
leetcode_link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
topics:
  - Array
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