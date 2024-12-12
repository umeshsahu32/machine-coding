const arr = [2, 4, [6, 8, 2, [5, 6]]];

// @ HOW FOR EACH WORK
// console.log("arr", arr.flat());

// ! POLYFILL CODE START
Array.prototype.myFlat = function () {
  const arr = this;
  const result = [];

  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }

  flat(arr);
  return result;
};

console.log(arr.myFlat());
