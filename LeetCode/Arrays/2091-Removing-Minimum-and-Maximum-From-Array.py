"""
Problem: 2091. Removing Minimum and Maximum From Array
Platform: LeetCode
Difficulty: Medium

Approach:
1. Find the indices of the minimum and maximum elements.
2. Let left = smaller index and right = larger index.
3. There are only three possibilities:
   - Remove both from the front.
   - Remove both from the back.
   - Remove one from each side.
4. Return the minimum of the three.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List


class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)

        min_idx = 0
        max_idx = 0

        for i in range(n):
            if nums[i] < nums[min_idx]:
                min_idx = i

            if nums[i] > nums[max_idx]:
                max_idx = i

        left = min(min_idx, max_idx)
        right = max(min_idx, max_idx)

        # Both from the front
        from_front = right + 1

        # Both from the back
        from_back = n - left

        # One from front and one from back
        from_both = left + 1 + n - right

        return min(from_front, from_back, from_both)