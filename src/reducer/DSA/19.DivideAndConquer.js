//  Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed to the function is located. if the value is not found return -1

const search = (arr, num) => {
  if (arr.length < num) return -1;

  //   @ SOLUTION 1
  //   return arr.indexOf(num);

  //   @ SOLUTION 2
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === num) {
  //       return i;
  //     }
  //   }
  //   return -1;

  //   @ SOLUTION 3

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log("middle", middle);
    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

const searchRes = search([1, 2, 3, 4, 5, 6], 4);
console.log("searchRes", searchRes);
