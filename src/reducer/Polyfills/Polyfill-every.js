const arr = [2, 4, 6, 12];

// @ HOW FOR EACH WORK
// const newArr = arr.every((item) => item % 2 === 0);
// console.log("newArray", newArr);

Array.prototype.myEvery = function (callbackFn) {
  if (this == null) {
    throw new TypeError("Array.prototype.myEvery called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callbackFn(arr[i]);
    if (!result) return false;
  }

  return true;
};

const newArr = arr.myEvery((item) => item % 2 === 0);
console.log("newArray", newArr);
