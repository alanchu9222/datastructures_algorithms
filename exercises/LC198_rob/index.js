function rob(houses) {
  if (houses.length == 0) {
    return 0;
  }

  if (houses.length == 1) {
    return houses[0];
  }
  if (houses.length == 2) {
    return Math.max(houses[0], houses[1]);
  }
  let ml = [houses[0], Math.max(houses[0], houses[1])];
  let maxLoot = 0;
  for (let i = 2; i < houses.length; i++) {
    maxLoot =
      houses[i] + ml[i - 2] > ml[i - 1] ? houses[i] + ml[i - 2] : ml[i - 1];
    ml.push(maxLoot);
  }
  return ml[houses.length - 1];
}

module.exports = rob;
