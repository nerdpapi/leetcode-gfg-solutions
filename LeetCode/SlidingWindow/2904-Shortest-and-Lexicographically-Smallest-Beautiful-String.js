/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Sliding Window
 *
 * A beautiful substring contains exactly k ones.
 *
 * 1. Expand the window using right.
 * 2. Count the number of ones.
 * 3. If there are more than k ones, move left forward.
 * 4. When there are exactly k ones, remove unnecessary zeros
 *    from the left.
 * 5. Compare the current substring with the best answer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let left = 0;
    let ones = 0;
    let ans = "";

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "1") {
            ones++;
        }

        while (ones > k) {
            if (s[left] === "1") {
                ones--;
            }

            left++;
        }

        if (ones === k) {
            while (s[left] === "0") {
                left++;
            }

            const current = s.substring(left, right + 1);

            if (
                ans === "" ||
                current.length < ans.length ||
                (current.length === ans.length && current < ans)
            ) {
                ans = current;
            }
        }
    }

    return ans;
};