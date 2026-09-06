"""
Problem: 1768. Merge Strings Alternately
Approach: Two Pointers

Take characters alternately from word1 and word2.
If one string is longer, append its remaining characters.

Time Complexity: O(n + m)
Space Complexity: O(n + m)
"""


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merge = ""
        for i in range(max(len(word1),len(word2))):
            if i < len(word1):
                merge += word1[i]
            if i <len(word2):
                merge += word2[i]
        return merge