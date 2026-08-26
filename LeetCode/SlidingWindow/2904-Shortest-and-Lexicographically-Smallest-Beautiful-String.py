"""
Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
Platform: LeetCode
Difficulty: Medium

Approach:
Use a sliding window.

A beautiful substring contains exactly k ones.

1. Expand the window with right.
2. Count the number of ones.
3. When the window contains k ones, try shrinking from the left.
4. Keep the shortest valid substring.
5. If two substrings have the same length, choose the
   lexicographically smaller one.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        left = 0
        ones = 0
        ans = ""

        for right in range(len(s)):
            if s[right] == "1":
                ones += 1

            while ones > k:
                if s[left] == "1":
                    ones -= 1
                left += 1

            if ones == k:
                while s[left] == "0":
                    left += 1

                current = s[left:right + 1]

                if (
                    ans == ""
                    or len(current) < len(ans)
                    or (len(current) == len(ans) and current < ans)
                ):
                    ans = current

        return ans