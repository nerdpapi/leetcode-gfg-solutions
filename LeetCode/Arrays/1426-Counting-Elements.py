"""
Problem: 1426. Counting Elements

Approach: Hash Set

Store all elements in a set.
For every number x, check whether x + 1 exists.

Time Complexity: O(n)
Space Complexity: O(n)
"""


class Solution:
    def countElements(self, arr: list[int]) -> int:
        nums = set(arr)
        count = 0

        for num in arr:
            if num + 1 in nums:
                count += 1

        return count