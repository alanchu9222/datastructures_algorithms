function maxProduct(nums) {
  let maxProduct = new Array(nums.length).fill(0);
  let minProduct = new Array(nums.length).fill(0);

  maxProduct[0] = nums[0];
  minProduct[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const lastMax = maxProduct[i - 1];
    const lastMin = minProduct[i - 1];

    maxProduct[i] = Math.max(nums[i], lastMax * nums[i], lastMin * nums[i]);
    minProduct[i] = Math.min(nums[i], lastMin * nums[i], lastMax * nums[i]);
  }
  console.log(maxProduct);
  console.log(minProduct);
  return Math.max(...maxProduct);
}

module.exports = maxProduct;
