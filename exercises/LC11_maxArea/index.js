function maxArea(nums) {
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
      lastIndex--;
    }
  }
  return Math.max(maxSize);
}

module.exports = maxArea;
