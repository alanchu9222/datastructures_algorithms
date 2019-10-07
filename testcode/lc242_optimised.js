// Given a set of strings -organise them into an array
// of arrays : each array containing the strings of the same anagram
const isAnagram = (a, b) => {
  const aa = a
    .split("")
    .sort()
    .join();
  const bb = b
    .split("")
    .sort()
    .join();

  return aa === bb;
};
console.log(isAnagram("abcdef", "cbafed"));
