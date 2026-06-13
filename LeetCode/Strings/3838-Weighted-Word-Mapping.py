"""
Problem: 3838. Weighted Word Mapping
Platform: LeetCode
Difficulty: Easy

Approach:
1. For each word, calculate its total weight.
2. Take total_weight % 26.
3. Map:
      0 -> 'z'
      1 -> 'y'
      2 -> 'x'
      ...
      25 -> 'a'
4. Append the resulting character to the answer.

Time Complexity: O(total characters across all words)
Space Complexity: O(n)
"""

from typing import List

class Solution:
    def mapWordWeights(self, words: List[str], weights: List[int]) -> str:
        ans = []

        for word in words:
            total = 0

            for ch in word:
                idx = ord(ch) - ord('a')
                total += weights[idx]

            mod = total % 26
            ans.append(chr(ord('z') - mod))

        return "".join(ans)