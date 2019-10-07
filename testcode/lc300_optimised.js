/*
Create a dpArry to represen the length of the Longest Substring for each element
in the input array

Input [10,9,2,5,3,7,101,18]


Step (Maximum Length of Substring)
1    (1,1,1,1,1,1,1,1) - 10
2    (1,1,1,1,1,1,1,1) - 10, 9
3    (1,1,1,1,1,1,1,1) - 10, 9, 2
4    (1,1,1,2,1,1,1,1) - 10, 9, 2, 5 
5    (1,1,1,[2],2,1,1,1) - 10, 9, 2, [5], 3
6    (1,1,1,2,2,[3],1,1) - 10, 9, 2, 5, 3, [7] 
7    (1,1,1,2,2,3,4,1) - 10, 9, 2, 5, 3, 7, 101
8    (1,1,1,2,2,3,4,4) - 10, 9, 2, 5, 3, 7, 101, 
*/

lengthOfLIS = input => {
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
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
