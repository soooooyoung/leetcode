class Solution {
    public int reverse(int x) {

        int num = x;
        int result = 0;

        while (num != 0) {
            int current = x % 10;
            if (result > Integer.MAX_VALUE / 10 ||
                    (result == Integer.MAX_VALUE / 10 && current > 7) ||
                    result < Integer.MIN_VALUE / 10 ||
                    (result == Integer.MIN_VALUE / 10 && current < -8)) {
                return 0;
            }
            result = (result * 10) + current;
            num /= 10;
        }

        return result;
    }
}