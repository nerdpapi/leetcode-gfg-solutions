"""
Problem: 940. Distinct Subsequences II
Approach: Dynamic Programming + Last Occurrence

For every character:
- Double the number of existing subsequences.
- If the character appeared before, subtract the duplicate
  subsequences created by its previous occurrence.

dp[i] = number of distinct subsequences using s[:i],
including the empty subsequence.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def distinctSubseqII(self, s: str) -> int:
        MOD = 10**9 + 7

        n = len(s)
        dp = [0] * (n + 1)
        last = [-1] * 26

        # Empty subsequence
        dp[0] = 1

        for i, ch in enumerate(s):
            index = ord(ch) - ord('a')

            # Every existing subsequence can either
            # include or exclude the current character
            dp[i + 1] = (2 * dp[i]) % MOD

            # Remove duplicates caused by previous occurrence
            if last[index] != -1:
                dp[i + 1] = (
                    dp[i + 1] - dp[last[index]] + MOD
                ) % MOD

            last[index] = i

        # Remove the empty subsequence
        return (dp[n] - 1) % MOD