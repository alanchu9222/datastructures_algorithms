function uniquePaths(m, n) {
  let dpArray = new Array(m);
  /// Set up initial values for col 1
  for (let i = 0; i < m; i++) {
    dpArray[i] = new Array(n);
    dpArray[i][0] = 1;
  }

  /// Set up initial values for row 1
  for (let j = 0; j < n; j++) {
    dpArray[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dpArray[i][j] = dpArray[i - 1][j] + dpArray[i][j - 1];
    }
  }
  console.log(dpArray);

  return dpArray[m - 1][n - 1];
}

module.exports = uniquePaths;
