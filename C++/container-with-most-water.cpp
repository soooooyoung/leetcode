#include <vector>
using namespace std;

class Solution
{
public:
    int maxArea(vector<int> &height)
    {

        int maxWater = 0;

        int i = 0;
        int j = height.size() - 1;

        while (i < j)
        {
            int maxHeight = min(height[i], height[j]);
            int water = maxHeight * (j - i);
            if (water > maxWater)
            {
                maxWater = water;
            }
            while (height[i] <= maxHeight && i < j)
            {
                i++;
            }
            while (height[j] <= maxHeight && i < j)
            {
                j--;
            }
        }

        return maxWater;
    }
};
