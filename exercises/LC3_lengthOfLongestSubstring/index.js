// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

const checkUnique = (s, start, end) => {
  const testString = s.slice(start, end);
  const l = testString.length;
  let dictionary = {};
  // If a repeat is found, then return false else return true
  for (let i = 0; i < l; i++) {
    if (dictionary[s[i]]) {
      return false;
    } else {
      dictionary[s[i]] = 1;
    }
  }
  return true;
};

function lengthOfLongestSubstring(s) {
  // BRUTE FORCE

  const l = s.length;
  let longest = "";
  let length = 0;

  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l + 1; j++) {
      if (checkUnique(s.slice(i, j))) {
        if (j - i > length) {
          length = j - i;
          longest = s.slice(i, j);
        }
      }
    }
  }
  return longest.length;
  //    console.log("The longest substring is = ", longest);
  //    console.log("The length = ", length);

  //   longestSubstring("supercaliforniaaccellerator");
}

module.exports = lengthOfLongestSubstring;
