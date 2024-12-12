const arr = [2, 4, 6, 8];

// @ HOW FOR EACH WORK
// const newArr = arr.filter((item) => item >= 4);
// console.log("newArr", newArr);

// ! POLYFILL CODE START
Array.prototype.myFilter = function (callbackFn) {
  if (!callbackFn) {
    throw new Error("myFilter: undefined is not a function");
  }

  const arr = this;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const result = callbackFn(arr[i], i, arr);
    if (result) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const newArr = arr.myFilter((item) => item >= 4);
console.log("newArr", newArr);
