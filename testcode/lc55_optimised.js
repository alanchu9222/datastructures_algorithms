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
  console.log(dpArray);
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      // Set to dpArray[i] to true if we can get there from j
      console.log(" i = " + i + " j = " + j + " x=" + dpArray[j]);
      if (dpArray[j] && j + numbers[j] === i) {
        dpArray[i] = true;
      }
    }
    console.log("------------------------");
  }
  console.log(dpArray);
  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
