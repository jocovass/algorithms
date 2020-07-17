const mergeSort = (array) => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};
//[10,5,3,11,2]
// const mergeS = (array) => {
//   if (array.length < 2) return array;
//   const sortedArray = [];
//   const middleIndex = Math.floor(array.length / 2); // 2
//   const leftSide = mergeS(array.slice(0, middleIndex)); // [10,5] | L[10] R[5]
//   const rightSide = mergeS(array.slice(middleIndex)); // [3,11,2] | L[3] R[11,2] | L[11] R[2]
//   let i = 0, // L[]
//     // R[]
//     j = 0;
//   while (i < leftSide.length && j < rightSide.length) {
//     if (leftSide[i] < rightSide[j]) {
//       sortedArray.push(leftSide[i++]);
//     } else {
//       sortedArray.push(rightSide[j++]);
//     }
//   }

//   while (i < leftSide.length) sortedArray.push(leftSide[i++]);
//   while (j < rightSide.length) sortedArray.push(rightSide[j++]);

//   return sortedArray;
// };

// mergeS([100, 2, 4, 5, 6, 9, 254, 53]);
