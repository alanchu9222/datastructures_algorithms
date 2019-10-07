/*
[2,    3,     1,    1,    4  ]
false false false false false
true false false false false (by default we can get to index=0)
true true false false false (From index=0, one step to index=1)
true true true false false  (From index 0, 2 steps to get to index=2)
true true true true false   (From index 2, 1 steps to get to index=3)
true true true true true   (From index 2, 1 steps to get to index=4)

Algorithm
i=origin index
j=target index

if dpArray[i]=true and i can get to j then set dpArray[j]=true
dpArray[] represents whether it is possible to get to an index in the array

loop (i=0 to j) for (j=0 to array.length)
*/

canJump = numbers => {
  let dpArray = new Array(numbers.length).fill(false);
  dpArray[0] = true;
  for (let j = 1; j < numbers.length; j++) {
    for (let i = 0; i < j; i++) {
      const maxJump = numbers[i];
      if (dpArray[i] && i + maxJump >= j) {
        dpArray[j] = true;
        break;
      }
    }
  }
  console.log(dpArray);
  return dpArray[numbers.length - 1];
};

console.log(canJump([2, 3, 1, 1, 4]));
