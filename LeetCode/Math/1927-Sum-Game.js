/**
 * Problem: 1927. Sum Game
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Split the string into two halves.
 *
 * Track:
 * - Sum of known digits on the left and right.
 * - Number of '?' on the left and right.
 *
 * If the difference in '?' counts is odd,
 * Alice can always force a win.
 *
 * Otherwise, check whether the known sum difference
 * can be balanced by the '?' digits.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const half = num.length / 2;

    let leftSum = 0;
    let rightSum = 0;

    let leftQ = 0;
    let rightQ = 0;

    for (let i = 0; i < half; i++) {
        if (num[i] === "?") {
            leftQ++;
        } else {
            leftSum += Number(num[i]);
        }
    }

    for (let i = half; i < num.length; i++) {
        if (num[i] === "?") {
            rightQ++;
        } else {
            rightSum += Number(num[i]);
        }
    }

    const diffQ = rightQ - leftQ;
    const diffSum = leftSum - rightSum;

    if (diffQ % 2 !== 0) {
        return true;
    }

    return diffSum !== 9 * diffQ / 2;
};