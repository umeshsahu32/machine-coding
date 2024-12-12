// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

const Once = (fn) => {
  let called = false;

  console.log("1", fn);

  return function (...args) {
    console.log("2", ...args);
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;

let onceFn = Once(fn);

const res = onceFn(1, 2, 3);
const res2 = onceFn(1, 2, 3);
console.log("Res-->", res, res2);
