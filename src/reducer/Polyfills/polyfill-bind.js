function foo(age, city, phone) {
  console.log(
    `hello ${this.name}, your age is ${age}, city is ${city}. You can connect with me on ${phone}`
  );
}

const p1 = {
  name: "shayam",
};

const p2 = {
  name: "akash",
};

// const fn = foo.bind(p2, 12, "Delhi", 96);
// fn();

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind called on non-function");
  }

  const self = this;
  const boundArgs = args;

  return function (...otherArgs) {
    return self.apply(context ?? globalThis, [...boundArgs, ...otherArgs]);
  };
};

const fn = foo.myBind(p2, 12, "agra", 7474);
fn();
