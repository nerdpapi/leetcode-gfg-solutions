"""
Problem: 3471. Find the Largest Almost Missing Integer
Platform: LeetCode
Difficulty: Easy

Approach:
There are three cases:

1. k == n:
   The only subarray is the entire array, so every element
   appears exactly once. Return the maximum element.

2. k == 1:
   Every element forms its own subarray.
   Return the largest element that appears exactly once.

3. Otherwise:
   Only the first and last elements can appear in exactly
   one subarray of size k.
   Check whether they occur exactly once in the array.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List
from collections import Counter


class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        n = len(nums)

        if k == n:
            return max(nums)

        count = Counter(nums)

        if k == 1:
            ans = -1
            for num in nums:
                if count[num] == 1:
                    ans = max(ans, num)
            return ans

        ans = -1

        if count[nums[0]] == 1:
            ans = nums[0]

        if count[nums[-1]] == 1:
            ans = max(ans, nums[-1])

        return ans