"""
Problem: 238. Product of Array Except Self
Platform: LeetCode
Difficulty: Medium

Approach:
1. Store the prefix product for each index.
2. Traverse from right to left while maintaining a suffix product.
3. Multiply the prefix product with the suffix product.

Time Complexity: O(n)
Space Complexity: O(1) (excluding the output array)
"""

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)

        ans = [1] * n

        prefix = 1
        for i in range(n):
            ans[i] = prefix
            prefix *= nums[i]

        suffix = 1
        for i in range(n - 1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]

        return ans