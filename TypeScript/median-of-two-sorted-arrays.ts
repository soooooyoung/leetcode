function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);

  const x = Math.trunc(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[x] + arr[x - 1]) / 2 : arr[x];
}
