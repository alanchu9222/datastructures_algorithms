const isValid = s => {
  const bracesHashMap = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (bracesHashMap[char]) {
      stack.push(char);
    } else if (bracesHashMap[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
