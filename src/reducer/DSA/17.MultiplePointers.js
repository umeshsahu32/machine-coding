// write a function called sumZero which accept a sorted array of integers. The function should find the first pair where the sum is 0
//  return an array that included both values that sum to zero or undefined if a pair does not exist'

// # ARRAY SHOULD BE SORTED

// const sumZero = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let sum = 0;

//   while (start < end) {
//     let sum = arr[start] + arr[end];
//     if (sum === 0) {
//       return [arr[start], arr[end]];
//     } else if (sum > 0) {
//       end--;
//     } else {
//       start++;
//     }
//   }
// };

// // const res = sumZero([-2, 1, 2, 3]);
// const res = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
// console.log(res);

// % COUNT UNIQUEvALUES
//  write a function countUniqueValues which accepts a sorted array, and count the unique values in the array

// const countUniqueValues = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr.length;
// };

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const res = countUniqueValues([-2, -1, -1, 0, 1]);
console.log(res);
