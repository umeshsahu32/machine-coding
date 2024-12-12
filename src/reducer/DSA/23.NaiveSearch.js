// write a function which will take long and short string and will return the count of times, short string appear in long string

// input  ->   wowomgzomg   omg
// output -> 2 // omg appear 2 times

const findStr = (str1, str2) => {
  let count = 0;

  for (let i = 0; i <= str1.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }

  return count;
};

// const result = findStr("wowomgzomg", "omg");
const result = findStr("lorie loled", "lol");
console.log("result", result);
