const concat = (array, ...values) => {
  if (Object.prototype.toString.call(array) !== "[object Array]") {
    array = [array];
  }

  const result = [...array];
  let index = -1;

  while (++index < values.length) {
    if (Object.prototype.toString.call(values[index]) === "[object Array]") {
      let length = values[index].length;
      for (let i = 0; i < length; i++) {
        result.push(values[index][i]);
      }
    } else {
      result.push(values[index]);
    }
  }

  return result;
};
