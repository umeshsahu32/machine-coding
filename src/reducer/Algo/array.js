// Polyfill of array

// Map
Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw new Error("myMap: undefined is not  a function");
  }

  const arr = this;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i]);
    res.push(result);
  }

  return res;
};

let arr = [1, 4, 5, 66, 44];

// const result = arr.myMap((item) => item + 10);
// console.log("result", result);

// Filter
Array.prototype.myFilter = function (callback) {
  if (!callback) {
    throw new Error("myFilter: undefined is not a function ");
  }

  const arr = this;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i]);
    if (res) {
      result.push(arr[i]);
    }
  }

  return result;
};

// const result2 = arr.myFilter((item) => item % 2 === 0);
// console.log(result2);

//  Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  if (!callback) {
    throw new Error("myReduce: undefined is not a function");
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    initialValue = callback(arr[i], initialValue);
  }

  return initialValue;
};

// const resSum = arr.myReduce((acc, curr) => acc + curr, 0);
// console.log(resSum);

// Question 1: Find the longest word length

const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

const longestWord = (arr) => {
  let count = 0;
  let word = "";

  for (let i = 0; i < arr.length; i++) {
    let wordLength = arr[i].length;
    if (wordLength > count) {
      count = wordLength;
      word = arr[i];
    }
  }
  return [count, word];
};

// const resultLongestWord = longestWord(words);
// console.log(resultLongestWord);

// Question 2: Calculate the factorial of the largest number in the array

const findFactorial = (num) => {
  if (num === 1) return 1;
  return num * findFactorial(num - 1);
};

const findLargestNumFactorial = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return findFactorial(max);
};

// const resultFactorial = findLargestNumFactorial([5, 2, 8, 4, 3]);
// console.log("resultFactorial", resultFactorial);

// Question 3: Calculate the average score of students who scored above 90

const students = [
  { name: "John", score: 85 },
  { name: "Sarah", score: 92 },
  { name: "Michael", score: 88 },
  { name: "Emma", score: 95 },
  { name: "Daniel", score: 90 },
];

const avgScoreFn = (arr) => {
  const scoreAbove90 = arr.filter((item) => item.score > 90);

  let sum = 0;

  for (let i = 0; i < scoreAbove90.length; i++) {
    sum += scoreAbove90[i].score;
  }

  return sum / scoreAbove90.length;
};

const resAvgScore = avgScoreFn(students);
// console.log("resAvgScore", resAvgScore);

// Question 5: Filter out books published after the year 2000 and return their titles

const books = [
  { title: "Book 1", year: 1998 },
  { title: "Book 2", year: 2003 },
  { title: "Book 3", year: 1995 },
  { title: "Book 4", year: 2001 },
];

const findBookBefore2000 = (arr) => {
  const filArr = arr.filter((item) => item.year > 2000);
  return filArr.map((item) => item.title);
};

const bookResult = findBookBefore2000(books);
// console.log("bookResult", bookResult);

// Question 6: Capitalize the first letter of each word in the array
const strings = ["hello world", "i am openai", "welcome to javascript"];

const CapitalizeFirstLetter = (arr) => {
  let item = [];

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    item.push(a);
  }

  return item;
};

// console.log(CapitalizeFirstLetter(strings));

// @ QUESTION 7: TWO SOME
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (arr, target) => {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
};

// const res = twoSum([3, 3], 6);
// console.log("Res", res);

// @ QUESTION 8: MAJORITY ELEMENT

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const findMajorityElement = (arr) => {
  if (arr.length === 0) return false;

  let majority = Math.ceil(arr.length / 2);

  let count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }

  for (let item in count) {
    if (count[item] >= majority) {
      return item;
    }
  }

  return false;
};

// const resMajority = findMajorityElement([3, 2, 3]);
// console.log("resMajority", resMajority);

// @ QUESTION 8: REMOVE DUPLICATE FORM SORTED ARRAY
// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Output: 5, (nums = [0, 1, 2, 3, 4, _, _, _, _, _]);

const removeDuplicate = (arr) => {
  if (arr.length === 0) return false;

  let k = 1; // count of unique values

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[k - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return k;
};

// console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// @ QUESTION 9: SQUARE OF A SORTED ARRAY

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const squaresOfArr = (arr) => {
  let result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let index = arr.length - 1;

  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }

    index--;
  }

  return result;
};

// console.log(squaresOfArr([-4, -1, 0, 3, 10]));

// @ QUESTION: 10 FIND PIVOT INDEX
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const findPivotPointIndex = (arr) => {
  if (arr.length === 0) return null;

  let totalSum = arr.reduce((acc, cumm) => acc + cumm, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Right sum =>  totalSum - leftSum - arr[i]
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i; // Pivot index found
    }
    leftSum += arr[i]; // Update left sum for next iteration
  }

  return -1; // If no pivot index found, return -1
};

// console.log(findPivotPointIndex([1, 7, 3, 6, 5, 6]));

// @ QUESTIONS 11 : MOVE ZEROS
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeros = (arr) => {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }

  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};

// console.log(moveZeros([0, 1, 0, 3, 12]));

// @ QUESTIONS 12 :REMOVE ELEMENT
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Input: nums = [3, 2, 2, 3], val = 3;
// Output: 2, nums = [2, 2, _, _];

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

const removeElement = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// @ QUESTIONS 13 : MAX CONSECUTIVE ONE
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

const findMaxConsecutiveOnes = (arr) => {
  if (arr.length === 0) return null;

  let count = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max > count ? max : count;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
