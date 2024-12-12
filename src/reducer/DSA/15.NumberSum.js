//  write a function that calculate the sum of all numbers from 1 up tpo some number n

// @ BEST  SOLUTION
// const sumNumber = (num) => {
//   return (num * (num + 1)) / 2;
// };

// @ NAIVE SOLUTION
// const sumNumber = (num) => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// @ RECURSIVE SOLUTION (FOR SMALL NUM VALUE ONLY)
const sumNumber = (num) => {
  if (num === 1) return 1;

  return num + sumNumber(num - 1);
};

const res = sumNumber(100);
console.log(res);
