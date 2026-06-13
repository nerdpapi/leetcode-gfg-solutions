"""
Problem: Factorial of a Number
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Multiply all numbers from 1 to n.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def factorial(self, n):
        fact = 1

        for i in range(2, n + 1):
            fact *= i

        return fact