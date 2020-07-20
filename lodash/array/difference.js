const difference = (array, diff) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let include = true;
    for (let j = 0; j < diff.length; j++) {
      if (array[i] === diff[j]) {
        include = false;
      }
    }
    if (include) {
      result.push(array[i]);
    }
  }

  return result;
};
