"""
Problem: Iterative Version of Computing Power
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Use Binary Exponentiation iteratively.
Multiply the answer whenever the current bit of the exponent is 1,
then square the base and halve the exponent.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def power(self, x, n):
        ans = 1

        while n > 0:
            if n % 2 == 1:
                ans *= x

            x *= x
            n //= 2

        return ans