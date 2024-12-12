// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(3);

// let multiplyBy5 = multiply.bind(this, 90);
// multiplyBy5(5, 89);

let curry = function (fn) {
  // let nums = [];
  // return function curried(...args) {
  //   nums = [...nums, ...args];
  //   if (fn.length === nums.length) {
  //     const res = fn(...nums);
  //     nums = [];
  //     return res;
  //   } else {
  //     return curried;
  //   }
  // };

  return function curried(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
};

function sum(a, b, c) {
  return a + b + c;
}

const currySum = curry(sum);
console.log(currySum(1)(2)(15));
