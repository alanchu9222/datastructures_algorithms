/*
Search for the target value inside a rotated sorted array

(1) Find the Inflection index
(2) Perform binary search on segment below inflection index
(3) Perform binary search on segment above inflection index

1 2 3 4 5 6 7
6 7 1 2 3 4 5  inflection to the left
3 4 5 6 7 1 2  inflection to the right

Time complexity: O(log n)
Space complexity: O(1)
*/
findInflectionPoint = arr => {
  let start = 0;
  let end = arr.length - 1;
  if (arr[start] < arr[end] || arr.length === 1) {
    return start;
  }
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    console.log("start " + start + " mid " + mid + " end " + end);
    if (arr[mid - 1] > arr[mid]) {
      console.log("found1");
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      console.log("found2");
      return mid + 1;
    }
    if (arr[start] < arr[mid]) {
      start = mid;
    }
    if (arr[start] > arr[mid]) {
      end = mid;
    }
  }
  return -1;
};
binarySearch = (arr, target, start, end) => {
  let oldMid = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (oldMid === mid) {
      break;
    }
    console.log("start " + start + " mid " + mid + " end " + end);
    if (target === arr[mid]) {
      return mid;
    } else {
      if (arr[mid] < target) {
        start = mid - 1;
      } else {
        end = mid + 1;
      }
    }
    oldMid = mid;
  }
  return -1;
};

search = (nums, target) => {
  const i = findInflectionPoint(nums);
  // search below inflection point
  const result1 = binarySearch(nums, target, 0, i);
  // search above inflection point
  const result2 = binarySearch(nums, target, i, nums.length - 1);
  // Result is the one that does not return -1
  const result = Math.max(result1, result2);
  return result;
};

//console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
console.log(search([3, 5, 1], 1));
