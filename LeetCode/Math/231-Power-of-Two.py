"""
Problem: 231. Power of Two
Platform: LeetCode
Difficulty: Easy

Approach:
Keep dividing n by 2 while it is divisible by 2.
If we eventually reach 1, n is a power of two.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False

        while n % 2 == 0:
            n //= 2

        return n == 1