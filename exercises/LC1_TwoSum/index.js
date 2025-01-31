// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]
//
// Use a hashmap to store the index and iterate only one pass.
// O(n) time complexity

function twoSum(nums, target) {
  console.log("INPUT:" + nums);

  let visited = {};
  for (let i = 0; i < nums.length; i++) {
    const j = target - nums[i];
    console.log(
      "i:" + i + " visited:" + Object.keys(visited) + " Searching for J = " + j
    );
    if (visited[j] || visited[j] === 0) {
      console.log(
        " Seeking for target " + target + " Found!" + i + ":" + visited[j]
      );
      return [i, visited[j]];
    } else {
      console.log("Not found");
    }
    if (!visited[i]) {
      visited[nums[i]] = i;
    }
  }
  return [];
}

module.exports = twoSum;
