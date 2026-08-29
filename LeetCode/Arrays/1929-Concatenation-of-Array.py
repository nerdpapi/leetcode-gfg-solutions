"""
Problem: 1929. Concatenation of Array
Platform: LeetCode
Difficulty: Easy

Approach:
Concatenate nums with itself.

Time Complexity: O(n)
Space Complexity: O(n) for the output array
"""

from typing import List


class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums
