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

// Promise.allSettled([test1(), test2(), test3()])
//   .then((res) => {
//     console.log("Promise.all", res);
//   })
//   .catch((error) => {
//     console.log("error-->", error);
//   });

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Promise.myAllSettled: function is not iterables"));
    }

    let n = promises.length;
    let result = [];
  });
};

Promise.myPromiseAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("myPromiseAllSettled: undefined is not iterables"));
      return;
    }
    const n = promises.length;
    let result = [];

    if (n === 0) {
      resolve({
        status: "fulfilled",
        value: "",
      });
      return;
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        const obj = { status: "fulfilled", value: res };
        result[index] = obj;

        if (index === n - 1) {
          resolve(result);
          return;
        }
      } catch (error) {
        const obj = { status: "rejected", reason: error };
        result[index] = obj;

        if (index === n - 1) {
          resolve(result);
          return;
        }
      }
    });
  });
};

Promise.myPromiseAllSettled([test1(), test2(), test3()])
  .then((res) => {
    console.log("Promise.allSettled", res);
  })
  .catch((error) => {
    console.log("error-->", error);
  });
