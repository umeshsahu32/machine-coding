// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => {
  let a = "hello World";

  return () => {
    return a;
  };
};

const b = createHelloWorld();

console.log(b());
