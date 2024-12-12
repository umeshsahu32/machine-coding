function foo(age) {
  console.log(`hello ${this.name}, your age is ${age}`);
}

const p1 = {
  name: "shayam",
};

const p2 = {
  name: "akash",
};

// foo.call(p2, 12);

// Function.prototype.myCall = function (context, ...args) {
//   console.log("runtime function-->", this); //@ --> foo function
//   console.log("context-->", context); //# p1 or p2 objects
//   console.log("...args", ...args); //$ All other arguments
// };

Function.prototype.myCall = function (context, ...args) {
  // Check if the function is callable
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall called on non-function");
  }

  // Use the provided context or global object if null/undefined
  context = context ?? globalThis;

  // Create a unique property on the context to avoid naming conflicts
  const uniqueProp = Symbol("uniqueFunctionCall");

  // Assign this function to the unique property of the context
  context[uniqueProp] = this;

  // Call the function with the given context and arguments
  const result = context[uniqueProp](...args);

  // Remove the temporary property from the context
  delete context[uniqueProp];

  // Return the result
  return result;
};

foo.myCall(p2, 12, "agr");
