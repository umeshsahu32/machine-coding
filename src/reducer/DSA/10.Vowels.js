// Given a string of words or phrases, count the number of vowels.

// const countVowels = (str) => {
//   str = str.toLowerCase().split(" ").join("");
//   let count = 0;

//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// };

// const countVowels = (str) => {
//   str = str.toLowerCase().split(" ").join("");

//   const count = {};
//   for (let item of str) {
//     count[item] = (count[item] || 0) + 1;
//   }
//   const vowels = ["a", "e", "i", "o", "u"];

//   const result = {};

//   for (let i = 0; i < vowels.length; i++) {
//     let a = count[vowels[i]];
//     if (a) {
//       result[vowels[i]] = a;
//     }
//   }
//   return result;
// };

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = {};

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }

  return result;
};

const result = countVowels("Given a string of words you");
console.log("result", result);
