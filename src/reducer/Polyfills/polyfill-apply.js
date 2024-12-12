function foo(age, city) {
  console.log(`hello ${this.name}, your age is ${age} and city is ${city}`);
}

const p1 = {
  name: "Shayam",
};

const p2 = {
  name: "Akash",
};

// foo.apply(p2, [12, "Agra"]);

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall called on non-function");
  }

  context = context ?? globalThis;

  let unique = Symbol("uniqueFunctionCall");
  context[unique] = this;

  let result;

  if (args === null) {
    result = context[unique]();
  } else if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArray called on non-object");
  } else {
    result = context[unique](...args);
  }

  delete context[unique];

  return result;
};

foo.myApply(p2, [12, "agra"]);
