// Given an integer array arr[]. Find the contiguous sub-array(containing at least one number) that has the maximum sum and return its sum.
// A sub-array is a contiguous portion of an array. For example, in the array [1, 2, 3, 4, 5], the sub-arrays include [1, 2], [2, 3, 4], and [3, 4, 5], among others.
// Consider the array [1, -2, 3, 4, -1, 2, 1, -5, 4].
// Steps to Find the Solution
// Identify All Possible Sub-arrays:

// Sub-arrays of length 1: [1], [-2], [3], [4], [-1], [2], [1], [-5], [4].
// Sub-arrays of length 2: [1, -2], [-2, 3], [3, 4], [4, -1], [-1, 2], [2, 1], [1, -5], [-5, 4].
// And so on, up to the full length of the array.

// Calculate the Sum for Each Sub-array:
// Sum of [1] is 1.
// Sum of [1, -2] is -1.
// Sum of [3, 4] is 7.
// Sum of [3, 4, -1] is 6.
// And so on for other sub-arrays.
// Find the Maximum Sum:

// Among all sub-arrays, find the one with the highest sum.

// Input: arr[] = [1, 2, 3, -2, 5]
// Output: 9
// Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

function maxSubArraySum(arr) {
  let max_so_far = -Infinity;
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    max_ending_here = max_ending_here + arr[i];

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }

  return max_so_far;
}

// Test case
const arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr)); // Output: 9

function maxSubArraySum2(arr) {
  if (arr.length === 0) return { sum: 0, subArray: [] };

  let max_so_far = -Infinity;
  let max_ending_here = 0;
  let start = 0; // Starting index of the sub-array
  let end = 0; // Ending index of the sub-array
  let s = 0; // Temporary starting index of the current sub-array

  for (let i = 0; i < arr.length; i++) {
    console.group(start, end, s);
    max_ending_here += arr[i];

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
      start = s;
      end = i;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
      s = i + 1;
    }
  }

  // Extract the sub-array
  const subArray = arr.slice(start, end + 1);

  return { sum: max_so_far, subArray: subArray };
}

//   // Test case
const result = maxSubArraySum2(arr);
console.log("Maximum Sum:", result.sum); // Output: 9
console.log("Sub-array with Maximum Sum:", result.subArray); // Output: [3, 4, -1, 2, 1]
