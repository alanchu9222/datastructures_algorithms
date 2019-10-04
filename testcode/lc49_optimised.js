// Given a set of strings -organise them into an array
// of arrays : each array containing the strings of the same anagram
const groupAnagrams = strings => {
  let hashMap = {};

  // Key value pair: where key is the sorted string, and the value is the original string
  for (let i = 0; i < strings.length; i++) {
    key = strings[i]
      .split("")
      .sort()
      .join();
    if (!hashMap[key]) {
      hashMap[key] = [];
    }
    hashMap[key].push(strings[i]);
  }

  return Object.values(hashMap);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
