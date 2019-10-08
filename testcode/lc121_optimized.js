/*
Given a set of numbers: find the pair of numbers that give the maximum area

Ratchet technique: two pointers, ratchet down the pointers and calculate the volume
- Choose the larger number every time - as we want the larget volume.

*/

container = nums => {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  let maxSize = 0;
  while (lastIndex > firstIndex) {
    const volume =
      Math.min(nums[lastIndex], nums[firstIndex]) * (lastIndex - firstIndex);
    maxSize = Math.max(volume, maxSize);
    if (nums[lastIndex] > nums[firstIndex]) {
      firstIndex++;
    } else {
      lastIndex;
    }
  }
  return Math.max(maxSize);
};

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));
