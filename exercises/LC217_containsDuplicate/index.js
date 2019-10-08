const containsDuplicate = numbers => {
  const numSet = new Array(...new Set(numbers));
  console.log(numSet);
  return numSet.length != numbers.length;
};

module.exports = containsDuplicate;
