"""
Problem: 50. Pow(x, n)
Platform: LeetCode
Difficulty: Medium

Approach:
Use Binary Exponentiation.

x^n =
    (x^(n/2))²          if n is even
    x * (x^(n/2))²      if n is odd

Handle negative powers by:
x^(-n) = (1/x)^n

Time Complexity: O(log n)
Space Complexity: O(log n)
"""

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n

        if n == 0:
            return 1

        half = self.myPow(x, n // 2)

        if n % 2 == 0:
            return half * half
        else:
            return x * half * half