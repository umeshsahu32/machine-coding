// Given a string of characters or numbers as input, write a function that returns it with the characters reversed.

// hello  --> olleh
// given  --> nevig
// 87654  --> 45678

// const reverseChar = (char) => {
//   let res = String(char).toLowerCase().split("").reverse().join("");
//   return typeof char === "string" ? res : Number(res);
// };

const reverseChar = (char) => {
  let res = "";
  let str = String(char);

  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }

  return typeof char === "string" ? res : Number(res);
};

const res = reverseChar(14578);
console.log("res", res);
