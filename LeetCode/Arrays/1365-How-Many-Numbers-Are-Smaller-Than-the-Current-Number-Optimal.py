"""
Problem: 1365. How Many Numbers Are Smaller Than the Current Number
Approach: Frequency Array + Prefix Sum

Since nums[i] is between 0 and 100, use a frequency array.

1. Count the frequency of every number.
2. Build a prefix sum.
3. For each number x, count[x - 1] gives the
   number of elements smaller than x.

Time Complexity: O(n + 101) = O(n)
Space Complexity: O(101) = O(1)
"""

from typing import List


class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        count = [0] * 101

        # Frequency
        for num in nums:
            count[num] += 1

        # Prefix sum
        for i in range(1, 101):
            count[i] += count[i - 1]

        ans = []

        for num in nums:
            if num == 0:
                ans.append(0)
            else:
                ans.append(count[num - 1])

        return ans