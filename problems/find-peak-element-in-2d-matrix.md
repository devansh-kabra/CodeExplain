---
Name: Find Peak Element in 2D Matrix
Slug: find-peak-element-in-2d-matrix
Difficulty: medium
leetcode_link: https://leetcode.com/problems/find-a-peak-element-ii/description/
topics:
  - Array
  - Binary Search
---

## Description
A peak element in a 2D matrix is a cell whose value is strictly greater than all of its adjacent neighbors:
left
right
top
bottom

Given a 0-indexed m × n matrix mat, where no two adjacent cells have the same value, return the coordinates [i, j] of any peak element.
You may assume the matrix is conceptually surrounded by a boundary of -1 values, ensuring all valid elements have defined comparisons

## Examples
- Input: mat = [
            [3,  8,  5],
            [4,  12, 7],
            [2,  6,  1]
        ]
  Output: [1, 1]
  Explanation: mat[1][1] = 12 is greater than its neighbors:
                left: 4
                right: 7
                top: 8
                bottom: 6
                So, (1,1) is a valid peak.

- Input: mat = [
                [10, 3,  6,  2],
                [5,  9,  1,  4],
                [7,  2,  8,  3]
            ]
  Output: [0, 0]
  Explanation: mat[0][0] = 10 is greater than its neighbors:
                right: 3
                bottom: 5
                (Left and top are the assumed -1 boundary.)
                So (0,0) qualifies as a peak.

## Constraints
- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 500
- 1 <= mat[i][j] <= 10^5
- No two adjacent cells are equal.

## Perfect Explanations
- Brute:
Scan the entire matrix cell by cell.
For each element mat[i][j], compare it with its valid neighbors (left, right, top, bottom).
If it is strictly greater than all of them, return [i, j] immediately, since any peak is acceptable.
Time Complexity: O(nm)
Space Complexity: O(1)

Optimal:
We perform a modified binary search over the column indices:
Pick the middle column.
Traverse that column to find the row index of its maximum element.
Check this element against its left and right neighbors (if they exist).
If both neighbors are smaller, this cell is a peak and return it.
If the left neighbor is larger, a peak must lie in the left half and search left side.
Otherwise, the right neighbor is larger and search right side.
Continue until a peak is found.
The same idea can be applied symmetrically by performing binary search on rows instead.
Time Complexity: O(mlogn)
Space Complexity: O(1)