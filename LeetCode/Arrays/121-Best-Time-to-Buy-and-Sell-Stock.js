/**
 * Problem: 121. Best Time to Buy and Sell Stock
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Keep track of the minimum price seen so far.
 * At each price, calculate the profit if sold today
 * and update the maximum profit.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};