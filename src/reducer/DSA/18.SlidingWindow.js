// write a function called maxSubArraySum which accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array.

// const maxSubArraySum = (arr, num) => {
//   if (num > arr.length) return null;

//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     console.log("OuterLoop--->", i, maxSum);
//     let sum = 0;

//     for (let j = 0; j < num; j++) {
//       console.log("InnerLoop--->", arr[j], arr[i + j]);
//       sum += arr[i + j];
//     }

//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }

//   return maxSum;
// };

// @ BETTER SOLUTION
const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    console.log("2nd loop-->", tempSum - arr[i - num] + arr[i]);
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log("maxSum", maxSum, "temp", tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

const res = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);
console.log(res);

// const res = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);
// console.log(res);
