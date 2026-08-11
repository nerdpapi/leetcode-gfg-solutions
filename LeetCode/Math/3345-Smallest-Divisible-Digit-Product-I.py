"""
Problem: 3345. Smallest Divisible Digit Product I
Platform: LeetCode
Difficulty: Easy

Approach:
Starting from n, repeatedly:
1. Compute the product of its digits.
2. If the product is divisible by t, return the number.
3. Otherwise, increment the number.

Time Complexity: O(k × d)
k = numbers checked
d = number of digits
Space Complexity: O(1)
"""

class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        while True:
            product = 1
            num = n

            while num > 0:
                product *= num % 10
                num //= 10

            if product % t == 0:
                return n

            n += 1