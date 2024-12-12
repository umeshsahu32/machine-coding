const arr = [2, 4, 6, 8];

// @ HOW FOR EACH WORK
// const newArr = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log("newArray", newArr);

Array.prototype.myReduce = function (callbackFn, initialValue = 0) {
  if (!callbackFn) {
    throw new Error("myEvery: undefined is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callbackFn(initialValue, arr[i]);
    initialValue = result;
  }

  return initialValue;
};

const newArr = arr.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("newArray", newArr);
