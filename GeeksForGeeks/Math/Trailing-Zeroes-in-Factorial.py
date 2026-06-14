"""
Problem: Trailing Zeroes in Factorial
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
A trailing zero is formed by a factor of 10 = 2 × 5.

Since factorials contain more 2s than 5s, we only need to count
the number of factors of 5.

Count:
n//5 + n//25 + n//125 + ...

Time Complexity: O(log₅(n))
Space Complexity: O(1)
"""

class Solution:
    def trailingZeroes(self, n):
        count = 0

        while n > 0:
            n //= 5
            count += n

        return count