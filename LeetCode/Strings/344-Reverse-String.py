"""
Problem: 344. Reverse String
Platform: LeetCode
Difficulty: Easy

Approach:
Use two pointers:
- left starts at the beginning.
- right starts at the end.
- Swap both characters and move inward.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
        left = 0
        right = len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]

            left += 1
            right -= 1