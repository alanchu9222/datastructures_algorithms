function isPalindrome(s) {
  const sanitized = s.toLowerCase().replace(/[^\w]|[_]/g, "");
  //  const sanitized = s.toLowerCase().replace(/[\W_]/g, "");

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
}

module.exports = isPalindrome;
