"""
Problem: 3622. Check Divisibility by Digit Sum and Product
Platform: LeetCode
Difficulty: Easy

Approach:
1. Extract every digit.
2. Calculate the sum of digits.
3. Calculate the product of digits.
4. Check whether n is divisible by both.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def checkDivisibility(self, n: int) -> bool:
        num = n
        digit_sum = 0
        digit_product = 1

        while num > 0:
            digit = num % 10

            digit_sum += digit
            digit_product *= digit

            num //= 10

        return n % digit_sum == 0 and n % digit_product == 0