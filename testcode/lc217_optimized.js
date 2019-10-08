/*
Given a set of numbers: find the pair of numbers that give the maximum area

Ratchet technique: two pointers, ratchet down the pointers and calculate the threesum
- Sort the array and increment the index evaluate the first of the three input values
*/

containsDuplicate = numbers => {
  const numSet = new Array(...new Set(numbers));
  console.log(numSet);
  return numSet.length == numbers.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
