// @ EXAMPLE 1

const countNum = (n) => {
  if (n <= 0) {
    console.log("All Done");
    return;
  }

  console.log(n);
  n--;
  countNum(n);
};

countNum(5);

// @ EXAMPLE 2

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// console.log(sumRange(10));

// @ EXAMPLE 3

const getFactorial = (num) => {
  if (num === 1) return 1;
  return num * getFactorial(num - 1);
};

console.log(getFactorial(5));

// @ EXAMPLE 4

const collectOddValues = (arr) => {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
};

const res = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("res", res);

// @ EXAMPLE 5

const collectOddValuesPureRecursion = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
  return newArr;
};

const resPure = collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("resPure", resPure);
