/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 * Approach: Brute Force
 *
 * For every child:
 * 1. Add extraCandies.
 * 2. Find the maximum candies among all children.
 * 3. Check whether the current child reaches that maximum.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n) for the output
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const ans = [];

    for (let i = 0; i < candies.length; i++) {
        const current = candies[i] + extraCandies;

        let maxCandies = candies[0];

        for (let j = 1; j < candies.length; j++) {
            maxCandies = Math.max(maxCandies, candies[j]);
        }

        ans.push(current >= maxCandies);
    }

    return ans;
};