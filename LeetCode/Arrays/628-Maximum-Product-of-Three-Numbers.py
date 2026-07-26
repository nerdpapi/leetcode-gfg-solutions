"""
Problem: 628. Maximum Product of Three Numbers
Platform: LeetCode
Difficulty: Easy

Approach:
Sort the array.

The maximum product can come from:
1. The three largest numbers.
2. The two smallest (possibly negative) numbers and the largest number.

Return the maximum of the two products.

Time Complexity: O(n log n)
Space Complexity: O(1) (ignoring sorting space)
"""

from typing import List

class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()

        return max(
            nums[-1] * nums[-2] * nums[-3],
            nums[0] * nums[1] * nums[-1]
        )