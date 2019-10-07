function canJump(nums) {
  let dpArray = new Array(nums.length).fill(false);
  dpArray[0] = true;
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      const maxJump = nums[i];
      if (dpArray[i] && i + maxJump >= j) {
        dpArray[j] = true;
        break;
      }
    }
  }
  console.log(dpArray);
  return dpArray[nums.length - 1];
}

module.exports = canJump;
