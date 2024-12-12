// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

const arr = [1, 2, 3];
const plusOne = (n) => {
  return n + 1;
};

const newArrFn = (arr, plusOne) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const res = plusOne(arr[i], i);
    newArr.push(res);
  }

  return newArr;
};

const newArr = newArrFn(arr, plusOne);
console.log("newArr", newArr);
