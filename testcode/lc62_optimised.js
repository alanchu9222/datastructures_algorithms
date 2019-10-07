/*
Use m * n dpmatrix to contain the numbers



*/

uniquePathsJump = (m, n) => {
  const init = 0;
  let dpMatrix = [];
  for (let x = 0; x < m; x++) {
    dpMatrix.push(new Array(n).fill(0));
  }
  // Initial values
  for (let x = 0; x < m; x++) {
    dpMatrix[x][0] = 1;
  }
  for (let y = 0; y < n; y++) {
    dpMatrix[0][y] = 1;
  }
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dpMatrix[row][col] = dpMatrix[row - 1][col] + dpMatrix[row][col - 1];
    }
  }
  return dpMatrix[m - 1][n - 1];
};

console.log(uniquePathsJump(7, 3));
