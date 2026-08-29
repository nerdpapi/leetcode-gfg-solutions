"""
Problem: 1480. Running Sum of 1d Array
Platform: LeetCode
Difficulty: Easy

Approach:
Keep a running total and add each element to it.
Store the running total in the answer array.

Time Complexity: O(n)
Space Complexity: O(n) for the output array
"""

from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        ans = []
        total = 0

        for num in nums:
            total += num
            ans.append(total)

        return ans
