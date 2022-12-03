function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    const x = Math.trunc(arr.length / 2);
    const y = x - 1;
    return (arr[x] + arr[y]) / 2;
  } else {
    return arr[Math.trunc(arr.length / 2)];
  }
}
