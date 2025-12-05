---
Name: Bubble Sort
Slug: bubble-sort
Difficulty: easy
topics:
  - Sorting
---

## Description
You are given an array of integers. Your task is to sort this array in-place using the Bubble Sort algorithm.
A sorted array is an array in which all the elements are greater or equal to its preceeding elements.

## Examples
- Input: nums = [5, 1, 4, 2, 8]
  Output: [1, 2, 4, 5, 8]

- Input: nums = [3,2,4]  
  Output: [2,3,4]

## Constraints
- 1 <= nums.length <= 1000
- -10^4 <= nums[i] <= 10^4
- nums[i] may contain duplicate values.

## Perfect Explanations
- Bubble Sort is a comparison-based sorting algorithm that repeatedly scans through the array and swaps adjacent elements that are out of order. It uses two nested loops:

Outer Loop: runs from the end of the array toward the beginning.
Inner Loop: runs from the start of the array up to the current outer loop boundary.
During each inner-loop pass, the algorithm compares the current element with the next one. If the current element is greater than the next, they are swapped. This process pushes the largest unsorted element to its correct position at the end of the array. After enough passes, the entire array becomes sorted in-place.

Time Complexity: O(N²) in the average and worst cases
Space Complexity: O(1)

Optimization:
Bubble Sort can be optimized by tracking whether any swap occurs during a full inner-loop pass.
If no swap happens, the array is already sorted, and the algorithm can terminate early.
This improves the best-case time complexity to O(N), although the worst-case remains O(N²).
