"""
Problem: 1464. Maximum Product of Two Elements in an Array
Platform: LeetCode
Difficulty: Easy

Approach:
Traverse the array once while maintaining the largest and
second-largest elements.

The answer is:
(max1 - 1) * (max2 - 1)

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max1 = 0
        max2 = 0

        for num in nums:
            if num > max1:
                max2 = max1
                max1 = num
            elif num > max2:
                max2 = num

        return (max1 - 1) * (max2 - 1)