// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const fn = (a, b) => a + b;
const memoizedFn = memoize(fn);
const res1 = memoizedFn(2, 3); // 5
const res2 = memoizedFn(2, 3); // 5

console.log(res1, res2);

// Pure function in react

// if a function always give same value on same arguments then that function is called pure function. for example any calculation
// They produce the same output for the same arguments every time they are called.
// No dependency on external state: They only use the data passed to them as arguments.
const sum = (a, b) => a + b; // pure function

console.log(Date.now()); // not a pure function
