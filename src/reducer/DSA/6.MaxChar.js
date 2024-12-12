// Given a string of characters, return the character that appears the most often.
// str = "Given a string of characters return the character that appears the most often"

const MaxChar = (str) => {
  str = String(str).toLowerCase().split(" ").join("");

  const charCount = {};

  for (let key of str) {
    charCount[key] = (charCount[key] || 0) + 1;
  }

  console.log(charCount);

  let count = 0;
  let char = "";

  for (let item in charCount) {
    if (charCount[item] > count) {
      count = charCount[item];
      char = item;
    }
  }

  return {
    count,
    char,
  };
};

const res = MaxChar(
  "Given a string of characters return the character that appears the most often"
);

console.log("res", res);
