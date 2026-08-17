"""
Problem: 896. Monotonic Array
Platform: LeetCode
Difficulty: Easy

Approach:
Track whether the array can still be:
1. Non-decreasing
2. Non-increasing

If we ever find:
- nums[i] > nums[i-1], it cannot be non-increasing.
- nums[i] < nums[i-1], it cannot be non-decreasing.

If either condition remains true, the array is monotonic.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        is_increasing = True
        is_decreasing = True

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                is_decreasing = False

            if nums[i] < nums[i - 1]:
                is_increasing = False

        return is_increasing or is_decreasing