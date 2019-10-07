/*
Notice that number of ways to climb the stairs correspond to the 
fibonacci series 

Number 
of 
steps (number of ways)
1     1 : (1)
2     2 : (1,1) (2) 
3     3 : (1,2) (2,1) (1,1,1)
4     5 : (1,1,1,1) (2,1,1) (1,2,1) (1,1,2) (2,2) 
5     8 : (1,1,1,1,1) (2,1,1,1) (1,2,1,1) (1,1,2,1) (1,1,1,2)
          (2,2,1) (1,2,2) (2,1,2) 

        Note:  Fibonacci sequence = 0,1,1,2,3,5,8...

NOT - Fibonacci sequence = 1,2,3,5,8...
*/

climbStairs = n => {
  if (n <= 3) {
    return n;
  }
  // for case n > 3
  let ways = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }
  console.log(ways);

  return ways[n];
};

console.log(climbStairs(5));
