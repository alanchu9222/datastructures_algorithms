var maxProfit = nums => {
  let min = nums[0];
  let dpProfit = new Array(nums.length).fill(0);
  dpProfit[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    dpProfit[i] = nums[i] - min;
    min = Math.min(nums[i], min);
  }
  return Math.max(...dpProfit);
};

module.exports = maxProfit;
