"""
Problem: 1365. How Many Numbers Are Smaller Than the Current Number
Approach: Brute Force

For every element, scan the complete array and count
how many numbers are smaller than it.

Time Complexity: O(n^2)
Space Complexity: O(n) for the output
"""

from typing import List


class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        ans = []

        for i in range(len(nums)):
            count = 0

            for j in range(len(nums)):
                if nums[j] < nums[i]:
                    count += 1

            ans.append(count)

        return ans