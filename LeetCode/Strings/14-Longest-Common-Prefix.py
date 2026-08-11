"""
Problem: 14. Longest Common Prefix
Platform: LeetCode
Difficulty: Easy

Approach:
1. Assume the first string is the common prefix.
2. Compare it with every other string.
3. Shrink the prefix until the current string starts with it.
4. Return the final prefix.

Time Complexity: O(n × m)
n = number of strings
m = length of the shortest string

Space Complexity: O(1)
"""

from typing import List
"""
Problem: 14. Longest Common Prefix
Platform: LeetCode
Difficulty: Easy

Approach:
Vertical Scanning

Compare characters column by column.
If any string ends or a mismatch is found,
return the prefix collected so far.

Time Complexity: O(n × m)
n = number of strings
m = length of the shortest string

Space Complexity: O(1)
"""

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        for i in range(len(strs[0])):
            ch = strs[0][i]

            for j in range(1, len(strs)):
                if i == len(strs[j]) or strs[j][i] != ch:
                    return strs[0][:i]

        return strs[0]