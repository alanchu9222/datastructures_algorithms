/*
Create a dpArray to represent the minimum number of coins 
Amount = (1,2,3,4,5,6,...)
Input [5,2,1]


Step (Amount - min coins) [1,2,5]
      0, 1,  2,   3,  4,    5,   6,   7,   8,   9,  10,  11    CoinValue(amt)
1    (0, 1,  2, inf, inf, inf, inf, inf, inf, inf, inf, inf )    1 (2)
2    (0, 1,  1, inf, inf, inf, inf, inf, inf, inf, inf, inf )    2 (2)
3    (0, 1,  1,   3, inf, inf, inf, inf, inf, inf, inf, inf )    1 (3)
4    (0, 1,  1,   2, inf, inf, inf, inf, inf, inf, inf, inf )    2 (3)
5    (0, 1,  1,   2,   3, inf, inf, inf, inf, inf, inf, inf )    1 (4)
6    (0, 1,  1,   2,   2, inf, inf, inf, inf, inf, inf, inf )    2 (4)
7    (0, 1,  1,   2,   2,   3, inf, inf, inf, inf, inf, inf )    1 (5)
8    (0, 1,  1,   2,   2,   3, inf, inf, inf, inf, inf, inf )    2 (5)
9    (0, 1,  1,   2,   2,   1, inf, inf, inf, inf, inf, inf )    1 (5)


Example: for amount = 11

*/

lengthOfLIS = (coins, amt) => {
  minCoinsArray = new Array(1 + amt).fill(Infinity);
  minCoinsArray[0] = 0;
  for (let i = 1; i <= amt; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j];
      if (coinValue <= i) {
        minCoinsArray[i] = Math.min(
          minCoinsArray[i],
          1 + minCoinsArray[i - coinValue]
        );
      }
    }
  }
  console.log(minCoinsArray);
  return minCoinsArray[amt];
};

console.log(lengthOfLIS([1, 2, 5], 11));
