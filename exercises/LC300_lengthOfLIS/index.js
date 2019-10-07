function lengthOfLIS(input) {
  if (input.length === 0) {
    return 0;
  }
  let maxSubSeqLength = new Array(input.length).fill(1);
  for (let i = 1; i < input.length; i++) {
    for (let j = 1; j < i; j++) {
      // Only update if the number pair is ascending order
      if (input[i] > input[j]) {
        // Pick the greater value between the number from preceding index (j)
        // plus one or use the existing value
        maxSubSeqLength[i] = Math.max(
          maxSubSeqLength[i],
          maxSubSeqLength[j] + 1
        );
      }
    }
  }
  return Math.max(...maxSubSeqLength);
}

module.exports = lengthOfLIS;
