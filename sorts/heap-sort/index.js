const heapSort = (arr) => {
  arr = makeFirstMaxHeap(arr);
  let size = arr.length;
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    size--;
    makeMaxHeap(arr, 0, size);
  }
  return arr;
};

const makeFirstMaxHeap = (arr) => {
  const middle = Math.floor(arr.length / 2);
  for (let i = middle; i >= 0; i--) {
    makeMaxHeap(arr, i, arr.length);
  }
  return arr;
};

const makeMaxHeap = (arr, index, heapSize) => {
  const leftChild = index * 2 + 1;
  const rightChild = index * 2 + 2;
  let largestNum = index;

  if (leftChild < heapSize && arr[leftChild] > arr[largestNum]) {
    largestNum = leftChild;
  }

  if (rightChild < heapSize && arr[rightChild] > arr[largestNum]) {
    largestNum = rightChild;
  }

  if (largestNum !== index) {
    swap(arr, largestNum, index);
    makeMaxHeap(arr, largestNum, heapSize);
  }
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
