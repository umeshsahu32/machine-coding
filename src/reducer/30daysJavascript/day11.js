// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

const sleep = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, milliseconds);
  });
};

const res = async () => {
  const a = await sleep(200);
  console.log(a);
};

res();
