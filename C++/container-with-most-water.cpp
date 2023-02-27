#include <vector>
using namespace std;

class Solution
{
public:
    int maxArea(vector<int> &height)
    {

        int maxWater = 0;

        for (int j = height.size() - 1; j < height.size(); j--)
        {
            for (int i = 0; i < height.size(); i++)
            {
                if (i == j)
                {
                    break;
                }
                int maxHeight = min(height[i], height[j]);
                int water = maxHeight * (j - i);
                if (water > maxWater)
                {
                    maxWater = water;
                }
            }
        }

        return maxWater;
    }
};
