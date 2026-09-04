/**
 * Problem: 119. Pascal's Triangle II
 * Approach: Generate Row Using Binomial Coefficient
 *
 * Generate the required row directly instead of generating
 * the complete Pascal's Triangle.
 *
 * Time Complexity: O(rowIndex)
 * Space Complexity: O(rowIndex) for the output
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    let row = [1];
    let result = 1;
    let n = rowIndex + 1;

    for (let i = 1; i < n; i++) {
        result = Math.floor(result * (n - i) / i);
        row.push(result);
    }

    return row;
};