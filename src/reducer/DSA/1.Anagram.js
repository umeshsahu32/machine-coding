// Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

// listen" and "silent" are anagrams.
// "triangle" and "integral" are anagrams.
// "hello" and "world" are not anagrams.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const count1 = {};

  for (let key of str1) {
    count1[key] = (count1[key] || 0) + 1;
  }

  for (let item of str2) {
    console.log(count1);
    if (count1[item]) {
      count1[item]--;
    } else {
      return false;
    }
  }
  return true;
};

const res = isAnagram("listen", "silent");
console.group("res", res);
