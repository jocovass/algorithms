// const quickSort = (array) => {
//   if (array.length <= 1) return array;

//   const pivot = array[array.length - 1];
//   const leftSide = [];
//   const rightSide = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftSide.push(array[i]);
//     } else {
//       rightSide.push(array[i]);
//     }
//   }

//   return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
// };

const quickSort = (arr, start, end) => {
  //   const sortedArr = [...arr];
  if (start >= end) return;
  const index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};

const partition = (arr, start, end) => {
  let pivotIndex = start;
  const pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
