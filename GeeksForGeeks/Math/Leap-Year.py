"""
Problem: Leap Year
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
A year is a leap year if:
1. It is divisible by 400, OR
2. It is divisible by 4 but not divisible by 100.

Time Complexity: O(1)
Space Complexity: O(1)
"""

class Solution:
    def isLeap(self, year):
        return year % 400 == 0 or (year%4 == 0 and year%100 != 0)