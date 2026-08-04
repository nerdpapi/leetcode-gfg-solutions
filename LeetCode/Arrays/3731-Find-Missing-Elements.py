"""
Problem: 3731. Find Missing Elements
Platform: LeetCode
Difficulty: Easy

Approach:
1. Find the minimum and maximum values.
2. Store all numbers in a hash set.
3. Traverse from min to max.
4. Add numbers that are not present in the set.

Time Complexity: O(n + range)
Space Complexity: O(n)
"""

from typing import List

class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        min_val = min(nums)
        max_val = max(nums)

        seen = set(nums)
        ans = []

        num = min_val

        while num <= max_val:
            if num not in seen:
                ans.append(num)
            num += 1

        return ans