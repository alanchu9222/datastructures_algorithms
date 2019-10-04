// Palindrome function
// If string is palindrom, return i
const longestPalindrome = s => {
  let startIndex = 0;
  let maxLength = 0;

  // Input any part of a string, identify longest palindrome
  getLongestPalindrome = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;

      if (currentLength > maxLength) {
        startIndex = left;
        maxLength = currentLength;
      }
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    getLongestPalindrome(i, i + 1);
    getLongestPalindrome(i - 1, i + 1);
  }

  console.log(s.slice(startIndex, startIndex + maxLength));
};
longestPalindrome("bananarama");
