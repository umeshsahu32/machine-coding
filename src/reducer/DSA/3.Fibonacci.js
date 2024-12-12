const fibonacciIterative = (n) => {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Example usage:
const number = 5;
console.log(fibonacciIterative(number)); // Output: 5
