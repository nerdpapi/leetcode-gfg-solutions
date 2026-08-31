"""
Problem: 560. Subarray Sum Equals K
Approach: Brute Force

Try every possible starting index.
For each starting index, keep adding elements
and check whether the current sum equals k.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0

        for i in range(len(nums)):
            total = 0

            for j in range(i, len(nums)):
                total += nums[j]

                if total == k:
                    count += 1

        return count