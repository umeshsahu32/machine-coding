//  Way to swap two integer in array

const swapFn1 = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};

const swapFn2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

const res = swapFn1([1, 2, 3, 4, 5, 6], 3, 4);

// console.log(res);

// @ SOLUTION 1

// const solutionBubbleSort1 = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swapFn1(arr, j, j + 1);
//       }
//     }
//     console.log("ONE PASS COMPLETE");
//   }

//   return arr;
// };

// const solutionOneRes = solutionBubbleSort1([37, 45, 29, 12, -3, 78, 15]);
// console.log("solutionOneRes", solutionOneRes);

// @ SOLUTION 2 (NEARLY SORTED ARRAY)
const solutionBubbleSort2 = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapFn1(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETE");
    if (noSwaps) break;
  }

  return arr;
};

const solutionOneRes = solutionBubbleSort2([45, 12, 17, 18, 36, 41]);
console.log("solutionOneRes", solutionOneRes);
