"""
Problem: 3903. Smallest Stable Index I
Approach: Brute Force

For every index i:
- Find the maximum value in nums[0..i].
- Find the minimum value in nums[i+1..n-1].
- If maxVal - minVal <= k, return i.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""


class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)

        for i in range(n):
            maxVal = minVal = nums[i]

            # Find maximum on the left including nums[i]
            for j in range(i):
                maxVal = max(maxVal, nums[j])

            # Find minimum on the right
            for j in range(i + 1, n):
                minVal = min(minVal, nums[j])

            if maxVal - minVal <= k:
                return i

        return -1