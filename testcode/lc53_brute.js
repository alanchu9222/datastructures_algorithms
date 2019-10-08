/*
Maximum Sub Array 

[-2, 1, -3, 4, -1, 2, 1, -5, 4]

 */

function maxSubArray(nums) {
  let results = [];
  let dpMax = new Array(nums.length).fill(0);
  dpMax[0] = nums[0];
  results.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    // determine the largest subarray at index i
    if (dpMax[i - 1] + nums[i] > nums[i]) {
      dpMax[i] = dpMax[i - 1] + nums[i];
      results.push(nums[i]);
    } else {
      dpMax[i] = nums[i];
      results = [nums[i]];
    }
  }
  console.log(dpMax);
  return Math.max(...dpMax);
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
