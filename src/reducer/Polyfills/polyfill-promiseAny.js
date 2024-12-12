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

// Promise.any([test1(), test2(), test3()])
//   .then((res) => {
//     console.log("Promise.all", res);
//   })
//   .catch((error) => {
//     console.log("error-->", error);
//   });

Promise.myPromiseAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promise.myPromiseAny called on non-iterable");
    }

    const n = promises.length;
    if (n === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    let rejectedCount = 0;
    const errors = new Array(n);

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          resolve(value);
        },
        (error) => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === n) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        }
      );
    });
  });
};

Promise.myPromiseAny([test1(), test2(), test3()])
  .then((res) => {
    console.log("Promise.any", res);
  })
  .catch((error) => {
    console.log("error-->", error);
  });
