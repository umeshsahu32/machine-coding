// //  Write a function same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array
// // 1. same([1,2,3], [4,1,9]) // true
// // 1. same([1,2,3], [1,9])   // false
// // 1. same([1,2,1], [4,1,4]) // false

// // const same = (arr1, arr2) => {
// //   if (arr1.length !== arr2.length) return false;

// //   for (let i = 0; i < arr1.length; i++) {
// //     let correctIndex = arr2.indexOf(arr1[i] ** 2);
// //     if (correctIndex === -1) {
// //       return false;
// //     }
// //     arr2.splice(correctIndex, 1);
// //   }

// //   return true;
// // };

// // @ BETTER SOLUTION
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let key of arr1) {
    count1[key] = (count1[key] || 0) + 1;
  }

  for (let key of arr2) {
    count2[key] = (count2[key] || 0) + 1;
  }

  for (let item in count1) {
    if (count2[item * item] !== count1[item]) return false;
  }

  return true;
};

const res = same([1, 2, 3, 2, 5], [4, 4, 1, 9, 11]);

console.log("result", res);
