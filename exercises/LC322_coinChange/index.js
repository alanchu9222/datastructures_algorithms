function coinChange(coins, amt) {
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
  return minCoinsArray[amt] === Infinity ? -1 : minCoinsArray[amt];
}

module.exports = coinChange;
