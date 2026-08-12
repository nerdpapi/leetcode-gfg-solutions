"""
Problem: 1200. Minimum Absolute Difference
Platform: LeetCode
Difficulty: Easy

Approach:
1. Sort the array.
2. Find the minimum difference between adjacent elements.
3. Collect all adjacent pairs having that minimum difference.

Time Complexity: O(n log n)
Space Complexity: O(1) (excluding output)
"""

from typing import List

class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()

        min_diff = min(arr[i] - arr[i - 1] for i in range(1, len(arr)))

        ans = []

        for i in range(1, len(arr)):
            if arr[i] - arr[i - 1] == min_diff:
                ans.append([arr[i - 1], arr[i]])

        return ans