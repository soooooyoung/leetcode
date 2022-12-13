class Solution
{
public:
    int reverse(int x)
    {
        int num = x;
        int result = 0;

        while (num != 0)
        {
            int current = num % 10;
            if (
                result > __INT32_MAX__ / 10 ||
                (result == __INT32_MAX__ / 10 && current > 7) ||
                result < (-__INT32_MAX__ - 1) / 10 ||
                (result == (-__INT32_MAX__ - 1) / 10 && current < -8))
            {
                return 0;
            }
            result = (result * 10) + current;
            num /= 10;
        }

        return result;
    }
};