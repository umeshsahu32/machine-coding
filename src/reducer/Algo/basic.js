// Question 1: Sum of all natural numbers from 1 to n
const problem1 = (n) => {
  return (n * (n + 1)) / 2;
};

// console.log("problem1", problem1(4)); // 10
// console.log(problem1(5)); // 15
// console.log(problem1(10)); // 55

// Question 2: Sum of digits of a number

const problem2 = (num) => {
  //@  solution 1
  //   const a = String(num).split("");
  //   let sum = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     sum = sum + +a[i];
  //   }
  //   return sum;

  //@ solution 2
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

// console.log(problem2(1287)); // 18

// Question 3: Count the number of digits of a number

const problem3 = (num) => {
  // @ solution 1
  //   return String(Math.abs(num)).split("").length;

  // @ solution 2
  num = Math.abs(num);
  let count = 0;

  if (num === 0) return 1;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
};

// console.log("problem3", problem3(-1211413131));

// Question 4: Check if a number is palindrome
const problem4 = (num) => {
  let str = String(num).split("");

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++, right--;
  }

  return true;
};

// console.log("problem4", problem4(12143)); // false
// console.log("problem4", problem4(11611)); // true

// Question 5: Find nth Fibonacci number

const problem5 = (num) => {
  if (num <= 1) return num;

  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
};

// console.log(problem5(5)); // 5
// console.log(problem5(10)); // 55

// Question 6: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const problem6 = (arr) => {
  const arrSum = arr.reduce((acc, cum) => acc + cum, 0);

  let arrLength = arr.length;
  const sumLength = (arrLength * (arrLength + 1)) / 2;

  return sumLength - arrSum;
};

// console.log(problem6([3, 0, 1])); // 2
// console.log(problem6([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// Count Odd Numbers in an Interval Range
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
// INPUT = 3, 7, OUTPUT = 3  [3,5,7]
// INPUT = 8, 10, OUTPUT = 1  [9]

const problem7 = (low, high) => {
  //   @ SOLUTION 1

  let oddCount = 0;
  let count = low;

  while (count <= high) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    count++;
  }

  return oddCount;

  //   @ SOLUTION 2
  //   return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};

// console.log("problem7", problem7(3, 10));

// Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const problem8 = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// problem8(15);

//  Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

const problem9 = (n) => {
  if (n <= 0) return false;
  if (n == 1) return true;
  if (n % 2 !== 0) return false;
  return problem9(n / 2);
};

// console.log(problem9(32));

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

const problem10 = (n) => {
  if (n <= 0) return false;

  let left = 0;
  let right = n;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === n) {
      return mid;
    } else if (square < n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

console.log(problem10(15));
