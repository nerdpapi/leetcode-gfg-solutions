"""
Problem: 3871. Count Commas in Range II
Approach: Math / Threshold Counting

For every comma position, find the first number that contains it:
1000, 1_000_000, 1_000_000_000, ...

For a threshold x, all numbers from x to n contain that comma,
so its contribution is n - x + 1.

Time Complexity: O(log_1000(n))
Space Complexity: O(1)
"""


class Solution:
    def countCommas(self, n: int) -> int:
        ans = 0
        x = 1000

        while x <= n:
            ans += n - x + 1
            x *= 1000

        return ans