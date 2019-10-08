/*
Given a set of numbers: find the pair of numbers that give the maximum area

Ratchet technique: two pointers, ratchet down the pointers and calculate the threesum
- Sort the array and increment the index evaluate the first of the three input values
*/

productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1);
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product * result[i];
    product = product * nums[i];
  }
  console.log(result);
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] = product * result[j];
    product = product * nums[j];
  }
  console.log(result);

  return result;
};

console.log(productExceptSelf([0, 0]));
