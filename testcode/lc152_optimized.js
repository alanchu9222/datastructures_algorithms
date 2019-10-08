/*
Maximum Product                  Evaluate at i
Sub Array          Max Sub       Better than last
                                 Result?

[2,3,-2,4]        {2}            2  (yes)      2
[2,3,-2,4]        {2,3}          6  (yes)      2  6
[2,3,-2,4]        {2,3,-2}      -12 (no)       2  6  6 
[2,3,-2,4]        {2,3,-2,4}    -12 (no)       2  6  6  6

 */

function maxProductSubArray(nums) {
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
console.log(maxProductSubArray([-2, 3, -4]));
