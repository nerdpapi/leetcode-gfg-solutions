"""
Problem: 1342. Number of Steps to Reduce a Number to Zero
Platform: LeetCode
Difficulty: Easy

Approach:
While the number is greater than zero:
1. If it is even, divide it by 2.
2. Otherwise, subtract 1.
3. Count the number of operations.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def numberOfSteps(self, num: int) -> int:
        steps = 0

        while num > 0:
            if num % 2 == 0:
                num //= 2
            else:
                num -= 1

            steps += 1

        return steps