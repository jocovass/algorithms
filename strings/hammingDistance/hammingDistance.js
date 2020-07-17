const hammingDistance = (str1, str2) => {
  let diff = 0;
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) {
      diff += 1;
    }
  }
  return diff;
};
