const differenceBy = (array, values, iteratee) => {
  const result = [];
  if (typeof iteratee === "function") {
    for (let i = 0; i < array.length; i++) {
      let include = true;
      for (let j = 0; j < values.length; j++) {
        if (iteratee(array[i]) === iteratee(values[j])) {
          include = false;
        }
      }
      if (include) {
        result.push(array[i]);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      let include = true;
      for (let j = 0; j < values.length; j++) {
        if (array[i][iteratee] === values[j][iteratee]) {
          include = false;
        }
      }
      if (include) {
        result.push(array[i]);
      }
    }
  }

  return result;
};
