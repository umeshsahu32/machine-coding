// const swapFn1 = (arr, idx1, idx2) => {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
//   return arr;
// };

// const res1 = swapFn1([2, 3, 4, 5, 67, 3], 0, 4);
// console.log(res1);

// const swapFn2 = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   return arr;
// };

// const res2 = swapFn2([96, 41, 75, 25, 84, 36], 0, 4);
// console.log(res2);

const SelectionSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
};

const resSort = SelectionSort1([96, 41, 75, 12, 84, 49, 13, 16]);
console.log("resSort", resSort);
