---
Name: Subarray with maximum sum
Slug: subarray-with-maximum-sum
Difficulty: medium
leetcode_link: https://leetcode.com/problems/maximum-subarray/description/
topics:
  - Array
  - Dynamic Programming
---

## Description
A subarray is a contiguous non-empty subsequence of the array elements.
Find the subarray with maximum sum and return its sum.

## Examples
- Input: nums = [-2,3,1,5]
  Output: 9
  Explanation: The subarray [3,1,5] has the maximum sum, which is 3 + 1 + 5 = 9

- Input: nums = [-4,2,1,0,5,2,-1] 
  Output: 10
  Explanation: The subarray [2,1,0,5,2] has the maximum sum, which is 2 + 1 + 0 + 5 + 2 = 10.

## Constraints
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

## Perfect Explanations
- Brute:
Check all possible subarrays using three nested loops.
Outer loop: from index 0 to n-1
Middle loop: from outer_index to n-1
Inner loop: sum the elements from outer_index to middle_index
Keep track of the maximum sum encountered.
Return the maximum sum at the end.
Time Complexity: O(N^3)
Space Complexity: O(1)

Better:
Use two loops to examine subarrays, but calculate the sum dynamically:
Outer loop: iterate from index 0 to n-1
Initialize a running sum with the element at the outer index
Update the maximum sum if sum is greater
Inner loop: iterate from outer_index + 1 to n-1
Add the current element to sum
Update the maximum sum if needed
Eliminates the third loop while still checking all subarrays.
Time Complexity: O(N^2)
Space Complexity: O(1)

Optimal:
Iterate through the array, maintaining a running sum:
Add the current element to the running sum
Update the maximum sum if the running sum is greater
If the running sum drops below 0, reset it to 0 (start a new subarray)
This efficiently finds the maximum subarray sum in a single pass.
Time Complexity: O(N)
Space Complexity: O(1)