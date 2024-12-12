// @ FUNCTION TO GET A DIGIT ON A SPECIFIC INDEX
const getDigit = (num, i) => {
  // console.log("1-->", Math.abs(num));
  // console.log("2-->", Math.pow(10, i));
  // console.log("3-->", Math.abs(num) / Math.pow(10, i));
  // console.log("4-->", Math.floor(Math.abs(num) / Math.pow(10, i)));
  // console.log("5-->", Math.floor(Math.abs(num) / Math.pow(10, i)) % 10);
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

console.log(getDigit(145874, 0));

// @ FUNCTION TO GET THE NUMBER OF DIGIT ON A GIVEN NUMBER
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

console.log(digitCount(145874));

// @ FUNCTION TO GET THE MOST NUMBER OF DIGIT FROM ARRAY OF NUMBERS

const mostDigits = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // let numCount = digitCount(arr[i]);
    // if (numCount > count) {
    //   count = numCount;
    // }

    count = Math.max(count, digitCount(arr[i]));
  }

  return count;
};

const result = mostDigits([1, 56, 11111, 1, 247]);
console.log("result", result);

// # RADIX SORT IMPLEMENTATION

const radixSort = (numArr) => {
  let maxDigitCount = mostDigits(numArr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numArr.length; i++) {
      let digit = getDigit(numArr[i], k);
      digitBuckets[digit].push(numArr[i]);
    }
    numArr = [].concat(...digitBuckets);
  }

  return numArr;
};

const res = radixSort([23, 41, 4578, 124, 2563, 8745, 12458, 14, 7]);
console.log("Res", res);
