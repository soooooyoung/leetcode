#include <vector>

class Solution {
public:

    int climbStairs1DDP(int n) {
        if (n == 1) {
            return 1;
        }
        vector<int> dp(n);
        dp[0] = 1;
        dp[1] = 2;
        for (int i = 2; i < n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n - 1];
    }

    int climbStairsBinetsFormula(int n) {
        return (int)(floor((pow((1 + sqrt(5)) / 2, n + 1) - pow((1 - sqrt(5)) / 2, n + 1)) / sqrt(5)))
    }

};
