"""
Problem: 3090. Maximum Length Substring With Two Occurrences
Platform: LeetCode
Difficulty: Easy

Approach:
Use a sliding window with a frequency map.

Expand the window by moving the right pointer.
If any character appears more than twice,
shrink the window from the left until it becomes valid.

Track the maximum window size.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        count = {}

        left = 0
        ans = 0

        for right in range(len(s)):
            count[s[right]] = count.get(s[right], 0) + 1

            while count[s[right]] > 2:
                count[s[left]] -= 1
                left += 1

            ans = max(ans, right - left + 1)

        return ans