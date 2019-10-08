/*
Get the two indexes that will sum to a given result

steps (number of ways)

*/

twoSum = (nums, target) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + nums[i] === target) {
        return [nums[j], nums[i]];
      }
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
