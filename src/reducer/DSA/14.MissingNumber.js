// Given an array arr of size n−1 that contains distinct integers in the range of 1 to n (inclusive), find the missing element. The array is a permutation of size n with one element missing. Return the missing element.

// Input: n = 5, arr[] = [1,2,3,5]
// Output: 4
// Explanation : All the numbers from 1 to 5 are present except 4.

const findMissingNumber = (arr, n) => {
  let sum = (n * (n + 1)) / 2;
  const sumArr = arr.reduce((acc, cumm) => acc + cumm, 0);
  return sum - sumArr;
};

const arr = [1, 2, 3, 5];
const n = 5;
const result = findMissingNumber(arr, n);
console.log("result", result);
