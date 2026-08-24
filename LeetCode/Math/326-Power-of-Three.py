"""
Problem: 326. Power of Three
Platform: LeetCode
Difficulty: Easy

Approach:
Keep dividing n by 3 while it is divisible by 3.
If n eventually becomes 1, it is a power of three.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0:
            return False

        while n % 3 == 0:
            n //= 3

        return n == 1