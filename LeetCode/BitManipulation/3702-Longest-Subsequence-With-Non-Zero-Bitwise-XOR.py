"""
Problem: 3702. Longest Subsequence With Non-Zero Bitwise XOR
Platform: LeetCode
Difficulty: Easy

Approach:
Compute the XOR of all elements.

Case 1:
If the total XOR is non-zero, we can take every element.

Case 2:
If the total XOR is zero:
- If there exists a non-zero element, removing one element
  makes the XOR non-zero.
- Otherwise, every element is zero, so no valid subsequence exists.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def longestSubsequence(self, nums: List[int]) -> int:
        total_xor = 0

        for num in nums:
            total_xor ^= num

        if total_xor != 0:
            return len(nums)

        for num in nums:
            if num != 0:
                return len(nums) - 1

        return 0