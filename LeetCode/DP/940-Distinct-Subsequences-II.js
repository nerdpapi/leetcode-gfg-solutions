/**
 * Problem: 940. Distinct Subsequences II
 * Approach: Dynamic Programming + Last Occurrence
 *
 * For every character:
 * - Double the number of existing subsequences.
 * - If the character appeared before, subtract the duplicate
 *   subsequences created by its previous occurrence.
 *
 * dp[i] = number of distinct subsequences using s.slice(0, i),
 * including the empty subsequence.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */

var distinctSubseqII = function(s) {
    const MOD = 1000000007;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    const last = new Array(26).fill(-1);

    // Empty subsequence
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
        const index = s.charCodeAt(i) - 97;

        // Every existing subsequence can either
        // include or exclude the current character
        dp[i + 1] = (2 * dp[i]) % MOD;

        // Remove duplicates caused by previous occurrence
        if (last[index] !== -1) {
            dp[i + 1] =
                (dp[i + 1] - dp[last[index]] + MOD) % MOD;
        }

        last[index] = i;
    }

    // Remove the empty subsequence
    return (dp[n] - 1 + MOD) % MOD;
};