"""
Problem: 28. Find the Index of the First Occurrence in a String
Platform: LeetCode
Difficulty: Easy

Approach:
Brute Force String Matching

Try every possible starting position in the haystack.
Compare the substring with the needle.
Return the first matching index.

Time Complexity: O((n - m + 1) × m)
Space Complexity: O(1)
"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n = len(haystack)
        m = len(needle)

        for i in range(n - m + 1):
            if haystack[i:i + m] == needle:
                return i

        return -1