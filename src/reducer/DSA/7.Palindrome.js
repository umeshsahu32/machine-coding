// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization.
// Words: "radar", "level", "deified" are example of palindrome
// Was it a car or a cat I saw is palindrome
// 12321, 45654, 11611 are palindrome

const isPalindrome = (str) => {
  str = String(str).toLowerCase().split(" ").join("");

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
};

const res = isPalindrome(121);
console.log("res", res);
