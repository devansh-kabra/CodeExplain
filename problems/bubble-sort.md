---
Name: Bubble Sort
Slug: bubble-sort
Difficulty: easy
topics:
  - Sorting
signals:
  - {weight: 2, text: "Bubble Sort is a comparison-based sorting algorithm", feedback: "State that Bubble Sort works by comparing elements."}

  - {weight: 3, text: "Uses two nested loops to repeatedly scan the array", feedback: "Mention that Bubble Sort uses two nested loops for multiple passes."}

  - {weight: 3, text: "Compares adjacent elements and swaps them if they are out of order", feedback: "Explain that adjacent elements are compared and swapped when needed."}

  - {weight: 3, text: "After each pass, the largest unsorted element moves to the end of the array", feedback: "Mention that each pass places the largest remaining element at its correct position."}

  - {weight: 2, text: "The range of comparison shrinks after each outer-loop pass", feedback: "Explain that the inner loop runs only up to the unsorted portion of the array."}

  - {weight: 2, text: "Bubble Sort sorts the array in-place", feedback: "Mention that the algorithm does not use extra memory."}

  - {weight: 2, text: "Time complexity is O(N^2) in the average and worst cases", feedback: "State the correct average and worst-case time complexity."}

  - {weight: 1, text: "Space complexity is O(1)", feedback: "Mention the constant space usage."}

  - {weight: 2, text: "An optimization stops the algorithm early if no swaps occur in a full pass", feedback: "Explain the early-termination optimization using a swap flag."}

  - {weight: 2, text: "With optimization, the best-case time complexity becomes O(N)", feedback: "Mention the improved best-case time complexity when the array is already sorted."}
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

Time Complexity: O(N^2) in the average and worst cases
Space Complexity: O(1)

Optimization:
Bubble Sort can be optimized by tracking whether any swap occurs during a full inner-loop pass.
If no swap happens, the array is already sorted, and the algorithm can terminate early.
This improves the best-case time complexity to O(N), although the worst-case remains O(N²).
