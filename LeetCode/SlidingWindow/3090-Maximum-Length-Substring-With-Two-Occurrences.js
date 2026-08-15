/**
 * Problem: 3090. Maximum Length Substring With Two Occurrences
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Sliding Window + Hash Map
 *
 * Expand the window by moving the right pointer.
 * If the frequency of the current character exceeds 2,
 * shrink the window from the left until it becomes valid.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    const count = new Map();

    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) || 0) + 1);

        while (count.get(s[right]) > 2) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};