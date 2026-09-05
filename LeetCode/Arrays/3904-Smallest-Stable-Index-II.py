"""
Problem: 3904. Smallest Stable Index II
Approach: Suffix Minimum + Prefix Maximum

For every index i:
    instability = max(nums[0..i]) - min(nums[i..n-1])

Precompute the minimum from each index to the right.
Then maintain the maximum from the left while traversing.

Time Complexity: O(n)
Space Complexity: O(n)
"""


class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)

        # right[i] = minimum value from i to n - 1
        right = [nums[-1]] * n

        for i in range(n - 2, -1, -1):
            right[i] = min(right[i + 1], nums[i])

        # left = maximum value from 0 to i
        left = 0

        for i in range(n):
            left = max(left, nums[i])

            if left - right[i] <= k:
                return i

        return -1