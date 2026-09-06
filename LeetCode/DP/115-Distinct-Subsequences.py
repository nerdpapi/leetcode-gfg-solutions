"""
Problem: 115. Distinct Subsequences
Approach: Dynamic Programming

dp[i][j] = number of ways to form t[:j] using s[:i].

If s[i - 1] == t[j - 1]:
    We can either use s[i - 1] or skip it.

If they don't match:
    We must skip s[i - 1].

Time Complexity: O(m * n)
Space Complexity: O(m * n)
"""


class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m = len(s)
        n = len(t)

        dp = [[0] * (n + 1) for _ in range(m + 1)]

        # Empty t can be formed in exactly one way
        for i in range(m + 1):
            dp[i][0] = 1

        for i in range(1, m + 1):
            for j in range(1, n + 1):

                if s[i - 1] == t[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
                else:
                    dp[i][j] = dp[i - 1][j]

        return dp[m][n]