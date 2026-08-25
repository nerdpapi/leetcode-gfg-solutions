"""
Problem: 3718. Smallest Missing Multiple of K
Platform: LeetCode
Difficulty: Easy

Approach:
Start from k and keep checking its multiples.
Return the first multiple that is not present in nums.

Time Complexity: O(n + m)
Space Complexity: O(n)

m = number of multiples checked
"""

from typing import List


class Solution:
    def missingMultiple(self, nums: List[int], k: int) -> int:
        seen = set(nums)

        multiple = k

        while multiple in seen:
            multiple += k

        return multiple