const arr = ["Apple", "Banana", "Mango", "Pineapple", "Cherry"];

// @ HOW FOR EACH WORK
// arr.forEach((item, index, arr) => {
//   console.log(`item-> ${item}, index-> ${index}, arr-> ${arr}`);
// });

// ! POLYFILL CODE START
Array.prototype.myForeach = function (callbackFn) {
  if (!callbackFn) {
    throw new Error(`myForeach: undefined is not a function`);
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i], i, arr);
  }
};

arr.myForeach((item, index, arr) => {
  console.log(`item-> ${item}, index-> ${index}, arr-> ${arr}`);
});
