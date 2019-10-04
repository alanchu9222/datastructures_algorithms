longestSubstring = s => {
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
    console.log(
      "iteration " + i + " => " + subStart + ":" + subEnd + ":" + subLength
    );
    console.log(sub);
  }
  console.log(maxLength);
};
// longestSubstring("supercaliforniaaccellerator");
//longestSubstring("pwwkew");
longestSubstring("bbbbb");
