// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

const compose = (arr, x) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    x = arr[i](x);
  }
  return x;
};

const res = compose([(x) => x + 1, (x) => 2 * x], 4);
console.log(res);
