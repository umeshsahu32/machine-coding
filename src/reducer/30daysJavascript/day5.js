// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
let arr = [0, 10, 20, 30];
const fn = (num) => {
  return num > 10 ? true : false;
};

const filter = (arr, fn) => {
  let newArr = [];

  arr.forEach((item) => {
    if (fn(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const res = filter(arr, fn);
console.log(res);
