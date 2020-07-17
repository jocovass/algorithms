const longCom = (str1, str2) => {
  const matrix = new Array(str1.length + 1).fill().map((el) => {
    return new Array(str2.length + 1).fill(0);
  });

  for (let i = 1; i <= str1.length; i += 1) {
    for (let j = 1; j <= str2.length; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  console.log(matrix);
  return matrix[str1.length][str2.length];
};

console.log(longCom("bacbedz", "bzzzac"));
