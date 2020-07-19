const compact = (array) => {
  const length = array ? array.length : 0;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
};
