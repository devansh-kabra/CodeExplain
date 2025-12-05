---
Name: Insert Position in Sorted Array
Slug: insert-position-in-sorted-array
Difficulty: easy
leetcode_link: https://leetcode.com/problems/search-insert-position/description/
topics:
  - Array
  - Binary Search
---

## Description
Given a sorted array of distinct integers nums and a target value, return the index of the target if it exists in the array.
If the target is not present, return the index where it would be inserted to maintain the array’s sorted order.

## Examples
- Input: nums = [-2,3,4,5], target = 1
  Output: 1
  Explanation: The target 1 is not in the array. It would be inserted at index 1 to keep the array sorted: [-2,1,3,4,5]

- Input: nums = [-4,-1,0,3,5], target = 0 
  Output: 2
  Explanation: The target 0 is already present at index 2.

## Constraints
- 1 <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4
- array contains distinct values sorted in ascending order.
- -10^4 <= target <= 10^4

## Perfect Explanations
- Brute:
Iterate through the array linearly.
For each index i, check if nums[i] >= target
The first index where this condition is true is the insert position
If no such index is found, the target would be inserted at the end of the array
Time Complexity: O(N)
Space Complexity: O(1)

Optimal:
Use binary search to find the insert position efficiently.
Initialize start = 0, end = n-1
While start <= end:
Compute mid = (start + end) // 2
If nums[mid] < target, the target must be in the right half hence set start = mid + 1
Otherwise, nums[mid] >= target: this could be the insert position hence store mid as a potential answer and search left half i.e. set end = mid - 1
Return the stored answer
Time Complexity: O(logN)
Space Complexity: O(1)