const bubbleSort = (arr) => {
  //arr = [32, 9, 51, 14, 7, 3, 10]
  let size = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j >= size) break;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      console.log(arr);
    }
    size--;
  }
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
