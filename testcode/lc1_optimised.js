/*
Get the two indexes that will sum to a given result

Use a hashmap for each element visited
When iterating the array use the hashmap to check if target is found.
*/

twoSum = (nums, target) => {
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
};

console.log(twoSum([2, 7, 11, 15], 9));
