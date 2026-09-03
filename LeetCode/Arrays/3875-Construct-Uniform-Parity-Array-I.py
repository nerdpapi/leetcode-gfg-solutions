"""
Problem: 3875. Construct Uniform Parity Array I
Approach: Brute Force
Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def uniformArray(self, nums1):
        n = len(nums1)

        # If all elements already have the same parity
        all_even = True
        all_odd = True

        for num in nums1:
            if num % 2 != 0:
                all_even = False
            if num % 2 == 0:
                all_odd = False

        if all_even or all_odd:
            return True

        # Mixed parity:
        # Every element can use an opposite-parity element.
        for i in range(n):
            found = False

            for j in range(n):
                if i != j and nums1[i] % 2 != nums1[j] % 2:
                    found = True
                    break

            if not found:
                return False

        return True