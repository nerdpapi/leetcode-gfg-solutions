"""
Problem: Modular Multiplication
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Use Binary Multiplication (Russian Peasant Multiplication).

Instead of calculating (a * b) directly,
keep adding 'a' whenever the current bit of 'b' is 1.

Time Complexity: O(log b)
Space Complexity: O(1)
"""

class Solution:
    def modmul(self, a, b, M):
        ans = 0

        a %= M

        while b > 0:
            if b % 2 == 1:
                ans = (ans + a) % M

            a = (a * 2) % M
            b //= 2

        return ans