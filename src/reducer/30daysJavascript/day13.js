const promisePool = async function (functions, n) {};

const sleep = (t) => new Promises((res) => setTimeout(res, t));

promisePool([() => sleep(500), () => sleep(400)], 1).then((res) =>
  console.log(res)
);
