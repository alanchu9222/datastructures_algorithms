function isAnagram(s, t) {
  const aa = s
    .split("")
    .sort()
    .join();
  const bb = t
    .split("")
    .sort()
    .join();

  return aa === bb;
}

module.exports = isAnagram;
