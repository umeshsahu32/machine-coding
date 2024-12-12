const arr = [
  {
    employee_id: 1,
    name: "vikas gupta",
  },
  {
    employee_id: 2,
    name: "vishal soni",
  },
  {
    employee_id: 3,
    name: "umesh sahu",
  },
];

// @ HOW FOR EACH WORK
// const newArr = arr.find((item) => item.employee_id === 2);
// console.log("newArr", newArr);

Array.prototype.myFind = function (callbackFn) {
  if (!callbackFn) {
    throw new Error("myFind: undefined is not a function");
  }

  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callbackFn(arr[i]);
    if (result) {
      return arr[i];
    }
  }
};

const newArr = arr.myFind((item) => item.employee_id === 1);
console.log("newArr", newArr);
