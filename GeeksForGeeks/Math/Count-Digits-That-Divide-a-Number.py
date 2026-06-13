"""
Problem: Count Digits That Divide a Number
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
Iterate through each digit of the number.
If the digit is non-zero and divides the original number,
increment the count.

Time Complexity: O(log10(n))
Space Complexity: O(1)
"""

class Solution:
    def evenlyDivides(self, n):
        original = n
        count = 0

        while n > 0:
            digit = n % 10

            if digit != 0 and original % digit == 0:
                count += 1

            n //= 10

        return count