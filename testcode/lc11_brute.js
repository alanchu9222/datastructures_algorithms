/*
Given a set of numbers: find the pair of numbers that give the maximum area

An array is used to contain the value with the biggest container match
Start with zero.
 
  iterate through the set: capacity = Math.min(this,other)*delta 
  where delta is the diff in index positions
*/

container = nums => {
  maxSize = new Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const containerSize = Math.min(nums[i], nums[j]) * (i - j);
      if (containerSize > maxSize[i]) {
        maxSize[i] = containerSize;
      }
    }
  }
  return Math.max(...maxSize);
};

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));
