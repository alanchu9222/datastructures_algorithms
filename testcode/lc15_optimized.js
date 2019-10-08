/*
Given a set of numbers: find the pair of numbers that give the maximum area

Ratchet technique: two pointers, ratchet down the pointers and calculate the threesum
- Sort the array and increment the index evaluate the first of the three input values
*/

threeSum = numsInput => {
  let lastResult = [];
  let resultSet = [];
  let firstIndex = 1;
  let lastIndex = numsInput.length;
  let nums = numsInput.sort();
  for (let i = 0; i < nums.length - 2; i++) {
    firstIndex = i + 1;
    lastIndex = nums.length - 1;
    while (firstIndex < lastIndex) {
      console.log(
        "Iteration i=" +
          i +
          " Evaluating : " +
          nums[i] +
          "," +
          nums[firstIndex] +
          "," +
          nums[lastIndex]
      );
      const sum = nums[i] + nums[firstIndex] + nums[lastIndex];
      if (sum === 0) {
        const thisResult = [nums[i], nums[firstIndex], nums[lastIndex]];
        console.log("This " + thisResult + " Last " + lastResult);
        if (JSON.stringify(thisResult) !== JSON.stringify(lastResult)) {
          console.log("not the same");
          resultSet.push(thisResult);
          lastResult = thisResult;
        }
      }
      if (nums[i] > nums[firstIndex] + nums[lastIndex]) {
        firstIndex++;
      } else {
        lastIndex--;
      }
    }
  }
  return resultSet;
};

console.log(threeSum([0, 0, 0, 0]));
