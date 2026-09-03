"""
Problem: 3875. Construct Uniform Parity Array I
Approach: Optimal - Always Possible
 *
 * If all numbers have the same parity, keep them unchanged.
 * If there are both odd and even numbers, subtract an
 * opposite-parity number to make every result odd.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
"""

class Solution:
    def uniformArray(self, nums1):
        return True