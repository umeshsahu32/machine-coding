// write a function which takes an array and a number and return index of that number in give array

const isNumberPresent = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
};

const res = isNumberPresent([41, 45, 1, 12, 87, 63, 25], 13);

console.log("res", res);

// TIME COMPLEXITY O(N)
