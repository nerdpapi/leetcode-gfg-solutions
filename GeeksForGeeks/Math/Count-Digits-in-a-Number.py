"""
Problem: Count Digits in a Number
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Repeatedly divide the number by 10 and count how many times
we can do it before it becomes 0.

Time Complexity: O(log10(n))
Space Complexity: O(1)
"""

class Solution:
    def evenlyDivides(self, n):
        count = 0
        temp = n

        while temp > 0:
            count += 1
            temp //= 10

        return count