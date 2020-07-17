const levDistance = (str1, str2) => {
  const matrix = new Array(str1.length + 1).fill().map(() => {
    return new Array(str2.length + 1).fill(0);
  });

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          1 +
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }
  }
  console.log(matrix);
  return matrix[str1.length - 1][str2.length - 1];
};

console.log(levDistance("jrok", "trek"));
