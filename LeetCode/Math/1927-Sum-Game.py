"""
Problem: 1927. Sum Game
Platform: LeetCode
Difficulty: Medium

Approach:
Split the string into two halves.

Calculate:
- sum of known digits on the left
- sum of known digits on the right
- number of '?' on each side

Alice wins if the two sides cannot be made equal after optimal play.

The key condition is:
left_sum - right_sum != 9 * (right_question - left_question) / 2

Equivalently, after balancing the known sums:
if the question-mark difference is odd, Alice wins.
Otherwise, check whether the digit-sum difference can be balanced.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def sumGame(self, num: str) -> bool:
        n = len(num)
        half = n // 2

        left_sum = 0
        right_sum = 0

        left_q = 0
        right_q = 0

        for i in range(half):
            if num[i] == "?":
                left_q += 1
            else:
                left_sum += int(num[i])

        for i in range(half, n):
            if num[i] == "?":
                right_q += 1
            else:
                right_sum += int(num[i])

        diff_q = right_q - left_q
        diff_sum = left_sum - right_sum

        if diff_q % 2 != 0:
            return True

        return diff_sum != 9 * diff_q // 2