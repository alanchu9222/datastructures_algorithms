validPalindrome = s => {
  const sanitized = s.toLowerCase().replace(/[^(\w_)]/g, "");
  let start = 0;
  let end = sanitized.length - 1;
  while (end > start) {
    if (sanitized[start] !== sanitized[end]) {
      return false;
    }
    end--;
    start++;
  }
  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
