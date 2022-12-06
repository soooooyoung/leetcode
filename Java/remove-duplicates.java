/**
 * 26. Remove Duplicates from Sorted Array
 *
 * conditions
 * 1) nums must be altered to sorted array without duplicates
 * 2) return length of altered array.
 *
 */
class Solution {
    public int removeDuplicates(int[] nums) {
        int count = 0;
        for (int i = 1; i < nums.length - count; i++) {
            if (nums[i] == nums[i - 1]) {

                for (int j = i; j < nums.length - 1; j++) {
                    nums[j] = nums[j + 1];
                }
                i--;
                count++;
            }
        }
        return nums.length - count;
    }
}