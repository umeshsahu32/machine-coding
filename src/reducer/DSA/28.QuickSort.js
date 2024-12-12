const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swapFn1 = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swapFn1(arr, swapIdx, i);
    }
  }
  swapFn1(arr, start, swapIdx);
  return swapIdx;
};

// const result = pivot([4, 8, 2, 1, 5, 7, 6, 3]);
// console.log("result", result);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //   left
    quickSort(arr, left, pivotIndex - 1);
    //   right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
