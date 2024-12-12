const arr = [2, 4, 6, 8];

// @ HOW FOR EACH WORK
// const newArr = arr.some((item) => item > 7);
// console.log("newArray", newArr);

// ! POLYFILL CODE START
Array.prototype.mySome = function (callbackFn) {
  if (!callbackFn) {
    throw new Error("mySome: undefined is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    const result = callbackFn(arr[i]);
    if (result) return true;
  }
  return false;
};

const newArr = arr.mySome((item) => item > 17);
console.log("newArray", newArr);
