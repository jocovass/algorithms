//[9, 10,39, 105, 2, 33]
const radixSort = (array) => {
  const longestNum = longestNumber(array);
  const bucket = new Array(10).fill().map(() => []);
  for (let i = longestNum - 1; i >= 0; i--) {
    while (array.length) {
      const firstElement = array.shift();
      bucket[getLocation(firstElement, i, longestNum)].push(firstElement);
    }

    for (let j = 0; j < bucket.length; j++) {
      while (bucket[j].length) {
        array.push(bucket[j].shift());
      }
    }
  }
  return array;
};

const longestNumber = (arr) => {
  let longestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].toString().length;
    if (current > longestNum) longestNum = current;
  }
  return longestNum;
};

const getLocation = (num, index, longestNum) => {
  const stringNum = num.toString();
  const size = stringNum.length;
  const difference = longestNum - size;

  return stringNum[index - difference] || 0;
};
