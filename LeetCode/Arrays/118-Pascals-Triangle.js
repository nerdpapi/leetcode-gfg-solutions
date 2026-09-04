/**
 * Problem: 118. Pascal's Triangle
 * Approach: Generate Each Row Using Binomial Coefficient
 *
 * Generate each row directly using the previous element
 * instead of calculating every element from scratch.
 *
 * Time Complexity: O(numRows^2)
 * Space Complexity: O(numRows^2) for the output
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

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    let ans = [];

    for (let i = 0; i < numRows; i++) {
        ans.push(getRow(i));
    }

    return ans;
};