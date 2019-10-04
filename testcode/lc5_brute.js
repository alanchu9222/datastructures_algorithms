// Palindrome function
// If string is palindrom, return it. Else return "".
const palindrome = (s, i, j) => {
  const sub = s.slice(i, j + 1);
  let pal = true;
  if (i === j) {
    return sub[0];
  }
  for (let k = 0; k < sub.length / 2; k++) {
    if (sub[k] !== sub[sub.length - 1 - k]) {
      pal = false;
    }
  }

  if (pal) {
    return sub;
  } else {
    return "";
  }
};

const longestPalindrome = s => {
  let maxPal = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const p = palindrome(s, i, j);
      if (p.length > maxPal.length) {
        maxPal = p;
      }
    }
  }

  console.log(maxPal);
};
longestPalindrome("bananarama");
