const containsDuplicate = numbers => {
  //   const numSet = new Array(...new Set(numbers));
  //   console.log(numSet);
  //   return numSet.length != numbers.length;
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = true;
    }
  }
  return false;
};

module.exports = containsDuplicate;
