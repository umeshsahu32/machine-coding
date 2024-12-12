// Given an unsorted array arr of size n that contains only non negative integers, find a sub-array (continuous elements) that has sum equal to s. You mainly need to return the left and right indexes of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. If no such subarray exists return an array consisting of element -1.

// Input: arr[] = [1,2,3,7,5], n = 5, s = 12
// Output: 1 3
// Explanation: The sum of elements from 1st to 3rd index position is 12.

// Input: arr[] = [1,2,3,4,5,6,7,8,9,10], n = 10, s = 15,
// Output: 0 4
// Explanation: The sum of elements from 0 to 4th index position is 15.

// Input: arr[] = [7,2,1], n = 3, s = 2
// Output: 1 1
// Explanation: The sum of elements from 1st to 1st index position is 2.

// Input: arr[] = [5,3,4], n = 3, s = 2
// Output: -1
// Explanation: There is no subarray with sum 2

function findSubarrayWithSum(arr, s) {
  if (arr.length === 0) return 0;

  let start = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > s && start <= i) {
      sum -= arr[start];
      start++;
    }

    if (sum === s) {
      return [start, i];
    }
  }

  return -1;
}

// Test case
const arr = [1, 2, 3, 7, 5];
const s = 12;
console.log(findSubarrayWithSum(arr, s)); // Output: [2, 4]
