const arr = [2, 4, 6, 8];

// @ HOW FOR EACH WORK
// const newArr = arr.map((item) => item * item);
// console.log("newArray", newArr);

// ! POLYFILL CODE START
Array.prototype.myMap = function (callbackFn) {
  if (!callbackFn) {
    throw new Error("myMap: undefined is not a function");
  }

  const arr = this;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const result = callbackFn(arr[i], i, arr);
    newArr.push(result);
  }

  return newArr;
};

const newArr = arr.myMap((item) => item * item);

console.log("newArray", newArr);
