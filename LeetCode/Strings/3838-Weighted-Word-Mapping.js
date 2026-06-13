/**
 * Problem: 3838. Weighted Word Mapping
 * Platform: LeetCode
 *
 * Approach:
 * 1. Calculate the total weight of each word.
 * 2. Take totalWeight % 26.
 * 3. Map:
 *      0 -> 'z'
 *      1 -> 'y'
 *      2 -> 'x'
 *      ...
 *      25 -> 'a'
 * 4. Append the resulting character to the answer.
 *
 * Time Complexity: O(total characters across all words)
 * Space Complexity: O(n)
 */

var mapWordWeights = function(words, weights) {
    let ans = [];

    for (const word of words) {
        let total = 0;

        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            total += weights[idx];
        }

        const mod = total % 26;
        ans.push(String.fromCharCode('z'.charCodeAt(0) - mod));
    }

    return ans.join("");
};