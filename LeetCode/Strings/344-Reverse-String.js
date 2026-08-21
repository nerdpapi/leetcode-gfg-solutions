/**
 * Problem: 344. Reverse String
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Use two pointers:
 * - left starts at the beginning.
 * - right starts at the end.
 * - Swap both characters and move inward.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }
};