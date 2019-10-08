/*
Find the best profit for a set of close prices in the stock market
[7, 1, 5, 3, 6, 4]

Each index is a day of trading
*/

maxProfit = nums => {
  let min = nums[0];
  let dpProfit = new Array(nums.length).fill(0);
  dpProfit[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    dpProfit[i] = nums[i] - min;
    min = Math.min(nums[i], min);
  }
  return Math.max(...dpProfit);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
