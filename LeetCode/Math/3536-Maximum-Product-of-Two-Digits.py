"""
Problem: 3536. Maximum Product of Two Digits
Platform: LeetCode
Difficulty: Easy

Approach:
Traverse the digits of the number while keeping track of
the largest and second-largest digits.
Return their product.

Time Complexity: O(log10(n))
Space Complexity: O(1)
"""

class Solution:
    def maxProduct(self, n: int) -> int:
        first = 0
        second = 0

        while n > 0:
            digit = n % 10

            if digit >= first:
                second = first
                first = digit
            elif digit > second:
                second = digit

            n //= 10

        return first * second