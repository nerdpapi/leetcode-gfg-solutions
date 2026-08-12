"""
Problem: 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
Platform: LeetCode
Difficulty: Easy

Approach:
1. Find the longest sequential prefix where each element differs by 1.
2. Compute the sum of this prefix.
3. Store all numbers in a hash set.
4. Starting from the prefix sum, find the first missing integer.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List

class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        prefix_sum = nums[0]

        i = 1
        while i < len(nums) and nums[i] == nums[i - 1] + 1:
            prefix_sum += nums[i]
            i += 1

        present = set(nums)

        while prefix_sum in present:
            prefix_sum += 1

        return prefix_sum