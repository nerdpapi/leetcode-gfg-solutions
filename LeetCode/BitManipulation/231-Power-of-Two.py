"""
Problem: 231. Power of Two
Platform: LeetCode
Difficulty: Easy

Approach:
A power of two has exactly one bit set.

For n > 0:
n & (n - 1) removes the lowest set bit.

If the result is 0, there was only one set bit,
so n is a power of two.

Time Complexity: O(1)
Space Complexity: O(1)
"""

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0