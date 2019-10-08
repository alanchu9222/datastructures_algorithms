const productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1);
  let product = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = product * result[i];
    product = product * nums[i];
  }
  // console.log(result);
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] = product * result[j];
    product = product * nums[j];
  }
  // console.log(result);

  return result;
};

module.exports = productExceptSelf;
