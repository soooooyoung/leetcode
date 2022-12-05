class Solution {
    public int reverse(int x) {

        int num = x;
        int result = 0;

        while (num != 0) {
            int current = x % 10;
            if (result > Integer.MAX_VALUE / 10 || result == Integer.MAX_VALUE && current > 7 ||
                    result < Integer.MIN_VALUE / 10 || result == Integer.MIN_VALUE && current < -8) {
                return 0;
            }
            result = (result * 10) + num % 10;
            num = num / 10;
        }

        return result;
    }
}