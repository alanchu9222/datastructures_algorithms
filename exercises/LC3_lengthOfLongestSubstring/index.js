// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let subLength = 0;
  let subStart = 0;
  let subEnd = 0;
  let sub = {};
  for (let i = 0; i < s.length; i++) {
    subEnd = i + 1;
    if (sub[s[i]] || sub[s[i]] === 0) {
      console.log("found!");
      subStart = sub[s[i]] + 1;
    } else {
      console.log("not found!");
    }
    sub[s[i]] = i;
    subLength = subEnd - subStart;
    if (subLength > maxLength) {
      maxLength = subLength;
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
