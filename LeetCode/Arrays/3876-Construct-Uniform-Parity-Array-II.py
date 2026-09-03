"""
Problem: 3876. Construct Uniform Parity Array II
Approach: Minimum Odd Number

If all numbers have the same parity, the array is already uniform.

Otherwise, find the smallest odd number.
Every even number must be able to subtract a smaller odd number
to become odd.

If an even number is smaller than the smallest odd number,
it cannot become odd, so return False.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def uniformArray(self, nums1: list[int]) -> bool:
        min_odd = float("inf")

        for num in nums1:
            if num % 2 == 1:
                min_odd = min(min_odd, num)

        if min_odd == float("inf"):
            return True

        for num in nums1:
            if num % 2 == 0 and num < min_odd:
                return False

        return True