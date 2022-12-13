/**
 * 26. Remove Duplicates from Sorted Array
 *
 * conditions
 * 1) nums must be altered to sorted array without duplicates
 * 2) return length of altered array.
 *
 */
function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
