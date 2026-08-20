"""
Problem: 1281. Subtract the Product and Sum of Digits of an Integer
Platform: LeetCode
Difficulty: Easy

Approach:
Traverse each digit of the number.
Maintain:
1. Product of digits.
2. Sum of digits.

Return product - sum.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        product = 1
        total = 0

        while n > 0:
            digit = n % 10
            product *= digit
            total += digit
            n //= 10

        return product - total