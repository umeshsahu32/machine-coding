// Given an array Arr consisting of N distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets:
//  1 + 2 = 3 and 3 +2 = 5

// @ NEW SET CONCEPT
// The new Set(arr) statement in JavaScript creates a new Set object from the array arr. A Set is a collection of unique values, meaning it automatically removes any duplicate values from the array.

// Here's a detailed explanation:

// What Does new Set(arr) Do?
// Creates a Set: The new Set(arr) creates a new Set object that holds the values from the array arr.
// Unique Values: Sets automatically ensure that all elements are unique. If there are duplicate elements in the array, only one instance of each element will be kept in the Set.
// Order of Elements: Sets maintain the insertion order of the elements.
const arr1 = [1, 5, 3, 2, 3, 5, 1];
const hashSet = new Set(arr1);
console.log(hashSet); // Output: Set { 1, 5, 3, 2 }

// Converting Set Back to Array
// If you need to convert the Set back to an array, you can use the Array.from method or the spread operator (...):

const uniqueArray1 = Array.from(hashSet);
// or
const uniqueArray2 = [...hashSet];

console.log(uniqueArray2); // Output: [1, 5, 3, 2]

// The has() method is a property of the Set object in JavaScript, not of arrays or generic objects.

// Set in JavaScript
// A Set is a collection of values where each value must be unique. The Set object lets you store unique values of any type, whether primitive values or object references.

// has() Method
// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.

const mySet = new Set([1, 2, 3, 4, 5]);

console.log(mySet.has(3)); // Output: true
console.log(mySet.has(6)); // Output: false

// # SOLUTION OF THE PROBLEM START FROM HERE
const countTriplets = (arr) => {
  let count = 0;

  // Create a hash set of the array elements
  const hashSet = new Set(arr);

  console.log("hashSet", hashSet);

  // Check for each pair (arr[i], arr[j]) if their sum exists in the hashSet
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      console.log(
        `Checking if sum of arr[${i}] (${arr[i]}) and arr[${j}] (${arr[j]}) = ${sum} exists in hashSet.`
      );
      if (hashSet.has(sum)) {
        console.log(`Found triplet: (${arr[i]}, ${arr[j]}, ${sum})`);
        count++;
      }
    }
  }

  return count;
};

// Test case
const arr = [1, 5, 3, 2];
console.log(countTriplets(arr)); // Output: 2
