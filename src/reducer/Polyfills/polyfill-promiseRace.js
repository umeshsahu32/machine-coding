const test1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test 1 is success");
      //   reject("Test 1 is fail");
    }, 500);
  });
};

const test2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Test 2 is success");
      reject("Test 2 is fail");
    }, 200);
  });
};

const test3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test 3 is success");
      //   reject("Test 3 is fail");
    }, 1500);
  });
};

// Promise.race([test1(), test2(), test3()])
//   .then((res) => {
//     console.log("Promise.race", res);
//   })
//   .catch((error) => {
//     console.log("error-->", error);
//   });

Promise.myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Promise.myPromiseRace called on non-iterable"));
      return;
    }

    if (promises.length === 0) {
      resolve();
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

Promise.myPromiseRace([test1(), test2(), test3()])
  .then((res) => {
    console.log("Promise.myPromiseRace", res);
  })
  .catch((error) => {
    console.log("error-->", error);
  });
