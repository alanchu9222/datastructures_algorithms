/*
The rule is : Cannot rob two adjacent houses
Define an array for the maximum loot for a given "house"

Input = 2,1,1,2 (max loot = 4)

House 
number Max Loot
1      2
2      2,2
3      2,2,2
4      2,2,2,4

Max loot is ml[i]+ml[i-2] or ml[i-1] whichever is greater

*/

rob = houses => {
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
};

console.log(rob([2, 1, 1, 2]));
