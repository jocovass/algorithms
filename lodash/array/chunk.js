const chunk = (array, size = 1) => {
  const originalArr = [...array];
  const result = [];

  while (originalArr.length) {
    result.push(originalArr.splice(0, size));
  }

  return result;
};

module.exports = chunk;
