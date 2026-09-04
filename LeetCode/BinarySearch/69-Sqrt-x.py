"""
Problem: 69. Sqrt(x)
Approach: Binary Search

Find the largest integer whose square is <= x.

Time Complexity: O(log x)
Space Complexity: O(1)
"""


class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 1, x

        while l <= r:
            mid = (l + r) // 2
            mid_squared = mid * mid

            if mid_squared == x:
                return mid

            elif mid_squared < x:
                l = mid + 1

            else:
                r = mid - 1

        return r