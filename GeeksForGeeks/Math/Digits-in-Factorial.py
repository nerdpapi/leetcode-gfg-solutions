"""
Problem: Digits in Factorial
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Instead of computing n!, use Kamenetsky's formula:

Digits = floor(log10(1) + log10(2) + ... + log10(n)) + 1

Time Complexity: O(n)
Space Complexity: O(1)
"""

import math

class Solution:
    def digitsInFactorial(self, n):
        if n <= 1:
            return 1

        digits = 0

        for i in range(2, n + 1):
            digits += math.log10(i)

        return math.floor(digits) + 1