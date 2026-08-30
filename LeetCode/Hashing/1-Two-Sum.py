"""
Problem: 1. Two Sum
Platform: LeetCode
Difficulty: Easy

Approach:
Use a hash map to store each number and its index.

For every number:
    complement = target - num

If the complement is already in the hash map,
we have found the required pair.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}

        for i, num in enumerate(nums):
            complement = target - num

            if complement in seen:
                return [seen[complement], i]

            seen[num] = i

        return []