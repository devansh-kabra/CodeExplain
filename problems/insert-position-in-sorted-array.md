---
Name: Insert Position in Sorted Array
Slug: insert-position-in-sorted-array
Difficulty: easy
leetcode_link: https://leetcode.com/problems/search-insert-position/description/
topics:
  - Array
  - Binary Search
signals:
  - {weight: 2, text: "The brute-force approach scans the array linearly to find the first index where nums[i] >= target", feedback: "Mention that linear search is used to find the insert position."}

  - {weight: 1, text: "If no element is greater than or equal to the target, it is inserted at the end", feedback: "Explain the behavior when the target is larger than all elements."}

  - {weight: 1, text: "Brute-force approach runs in O(N) time and O(1) space", feedback: "State the correct time and space complexity of the brute-force solution."}

  - {weight: 3, text: "The optimal solution uses binary search to find the insert position", feedback: "Mention that binary search is used for efficient insertion."}

  - {weight: 3, text: "Maintain start and end pointers, and compute mid = (start + end) // 2 in each iteration", feedback: "Explain how the mid index is calculated in binary search."}

  - {weight: 3, text: "If nums[mid] < target, search the right half by setting start = mid + 1", feedback: "Describe the case when the target is larger than nums[mid]."}

  - {weight: 3, text: "If nums[mid] >= target, store mid as a potential answer and search left half by setting end = mid - 1", feedback: "Describe the case when the target could be inserted at mid or before."}

  - {weight: 2, text: "Return the stored answer as the insert position after the binary search completes", feedback: "Explain how the final insert index is determined."}

  - {weight: 2, text: "The binary search solution runs in O(log N) time and uses O(1) space", feedback: "State the correct time and space complexity of the optimal solution."}

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