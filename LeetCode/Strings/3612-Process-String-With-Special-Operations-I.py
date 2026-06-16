"""
Problem: 3612. Process String with Special Operations I
Platform: LeetCode
Difficulty: Easy

Approach:
- Lowercase letter: append to result.
- '*': remove last character if present.
- '#': duplicate the current result.
- Otherwise ('%'): reverse the current result.

Time Complexity: O(n²) in the worst case
Space Complexity: O(n)
"""

class Solution:
    def processStr(self, s: str) -> str:
        result = []

        for ch in s:
            if 'a' <= ch <= 'z':
                result.append(ch)

            elif ch == '*':
                if result:
                    result.pop()

            elif ch == '#':
                result.extend(result)

            else:
                result.reverse()

        return ''.join(result)