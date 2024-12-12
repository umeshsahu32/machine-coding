// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.
// The Ransom Note problem involves determining whether a given ransom note can be constructed using words from a given magazine. In other words, we need to check if every word in the ransom note can be found in the magazine with the required frequency.
// Input:

// Magazine: "this is a simple magazine example for a ransom note"
// Ransom Note: "a simple ransom note"
// Output: true

// const RansomNote = (magazine, note) => {
//   const charCountMagazine = {};
//   const charCountNote = {};

//   for (let key of magazine.toLowerCase().split(" ").join("")) {
//     charCountMagazine[key] = (charCountMagazine[key] || 0) + 1;
//   }

//   for (let key of note.toLowerCase().split(" ").join("")) {
//     charCountNote[key] = (charCountNote[key] || 0) + 1;
//   }

//   for (let item in charCountNote) {
//     if (charCountMagazine[item] < charCountNote[item]) return false;
//   }

//   return true;
// };

const RansomNote = (magazine, note) => {
  const charCount = {};

  for (let char of magazine.toLowerCase().split("").join("")) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of note.toLowerCase().split("").join("")) {
    if (!charCount[char] || charCount[char] <= 0) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

const result = RansomNote(
  "this is a simple magazine example for a ransom note",
  "simple ransom note"
);

console.log("result", result);
