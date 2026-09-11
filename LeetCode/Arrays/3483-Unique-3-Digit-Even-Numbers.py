"""
Problem: 3483. Unique 3-Digit Even Numbers
Approach: Brute Force + Set

Try every choice of hundreds, tens, and units digits.
The hundreds digit cannot be 0, and the units digit must be even.

Use a Set to avoid duplicate numbers when digits contain duplicates.

Time Complexity: O(n^3)
Space Complexity: O(1)
"""


class Solution:
    def totalNumbers(self, digits: list[int]) -> int:
        n = len(digits)
        numbers = set()

        for i in range(n):
            if digits[i] == 0:
                continue

            for j in range(n):
                if j == i:
                    continue

                for k in range(n):
                    if k == i or k == j:
                        continue

                    if digits[k] % 2 != 0:
                        continue

                    number = (
                        digits[i] * 100
                        + digits[j] * 10
                        + digits[k]
                    )

                    numbers.add(number)

        return len(numbers)