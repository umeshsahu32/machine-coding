// Given an array and a size, split the array items into a list of arrays of the given size.?
// Array chunking is a process where an array is split into multiple smaller arrays (chunks) of a specified size. Each chunk contains elements from the original array in the same order, and the last chunk may contain fewer elements if the total number of elements in the original array is not evenly divisible by the chunk size.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Size: 3;
// Output: [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Size: 3

// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

const ArrChunking = (arr, size) => {
  const result = [];

  const loop = Math.ceil(arr.length / size);

  for (let i = 0; i < loop; i++) {
    let res = arr.splice(0, size); // splice will muted the original array
    result.push(res);
  }

  return result;
};

const result = ArrChunking([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
console.log(result);
