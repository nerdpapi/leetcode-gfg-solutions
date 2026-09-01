/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 * Approach: Find Maximum Once
 *
 * 1. Find the maximum number of candies.
 * 2. Check every child against that maximum.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the output
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);

    const ans = [];

    for (const candy of candies) {
        ans.push(candy + extraCandies >= maxCandies);
    }

    return ans;
};