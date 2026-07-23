"""
Problem: Computing Power
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Use Binary Exponentiation to compute x^n efficiently.

Time Complexity: O(log n)
Space Complexity: O(log n) (recursive)
"""

class Solution:
    def power(self, x, n):
        if n == 0:
            return 1

        half = self.power(x, n // 2)

        if n % 2 == 0:
            return half * half

        return x * half * half