/*
Case 1: [1]
Case 2: [1,2,3,4,5]
Case 3: [3,4,5,1,2]
Case 4: [4,5,1,2,3]
Case 5: [5,1,2,3,4]
 */

function findMin(nums) {
  if (nums.length === 1) {
    // Case 0
    return nums[0];
  }
  if (nums[0] < nums[nums.length - 1]) {
    // case 1
    return nums[0];
  }

  let numLast = nums.length - 1;
  let numFirst = 0;
  let oldMid = 0;
  while (1) {
    let mid = Math.floor((numLast + numFirst) / 2);
    console.log("last:" + numLast + "   first:" + numFirst + "   mid:" + mid);
    if (nums[mid] < nums[mid - 1]) {
      //case 4
      return nums[mid];
    } else {
      if (nums[mid + 1] < nums[mid]) {
        return nums[mid + 1];
      }
      if (nums[mid] > nums[numFirst]) {
        console.log("case3");
        numFirst = mid;
      } else {
        console.log("case2");
        numLast = mid;
      }
      oldMid = mid;
    }
  }
}
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
