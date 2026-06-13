/**
 * Problem: Palindrome Number
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Reverse the number and compare it with the original.
 *
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 */

class Solution {
    isPalindrome(n) {
        const original = n;
        let reverse = 0;

        while (n > 0) {
            const digit = n % 10;
            reverse = reverse * 10 + digit;
            n = Math.floor(n / 10);
        }

        return original === reverse;
    }
}