const test1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test 1 is success");
    }, 500);
  });
};

const test2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Test 2 is fail");
    }, 500);
  });
};

const test3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test 3 is success");
    }, 500);
  });
};

// Promise.all([test1(), test2(), test3()])
//   .then((res) => {
//     console.log("Promise.all", res);
//   })
//   .catch((error) => {
//     console.log("error-->", error);
//   });

Promise.newMyPromise = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("newMyPromise: undefined is not iterables"));
      return;
    }

    const n = promises.length;
    let result = [];

    if (n === 0) {
      resolve(result);
      return;
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        result[index] = res;
        if (index === n - 1) {
          resolve(result);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
    });
  });
};

Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("myPromiseAll: undefined is not iterables"));
      return;
    }
    const n = promises.length;
    let result = [];

    if (n === 0) {
      resolve(result);
      return;
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        result[index] = res;

        if (index === n - 1) {
          resolve(result);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
    });
  });
};

Promise.myPromiseAll([test1(), test2(), test3()])
  .then((res) => {
    console.log("Promise.all", res);
  })
  .catch((error) => {
    console.log("error-->", error);
  });
