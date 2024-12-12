// BINARY SEARCH ONLY WORKS WITH SORTED ARRAY

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && left <= right) {
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === num ? middle : -1;
};

const result = binarySearch(
  [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19],
  155
);

console.log("result", result);
