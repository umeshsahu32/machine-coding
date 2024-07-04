import React, { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  // The eval() function in JavaScript evaluates a string as JavaScript code and executes it.
  // Here is a detailed explanation of how eval() works, its usage, and examples:

  // Example 1
  // let expression = "2 + 2";
  // let result = eval(expression);
  // console.log(result); // Output: 4

  // Example 2
  // let code = "let x = 10; let y = 20; x + y;";
  // let result = eval(code);
  // console.log(result); // Output: 30

  // Example 3
  // let functionDefinition = "function greet(name) { return 'Hello, ' + name; }";
  // eval(functionDefinition);
  // console.log(greet("John")); // Output: Hello, John

  // Using eval() can be dangerous because it allows the execution of arbitrary code.
  // This can lead to security vulnerabilities, especially if eval() is used with untrusted input.

  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      handleSubmit(e);
    } else {
      setValue((val) => val + id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (err) {
      alert("Invalid Inputs");
    }
  };

  return (
    <Fragment>
      <HeadingComponent heading="Calculator" />
      <div className={styles.parent}>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={handleChange} type="text" />
        </form>
        <div className={styles.container} onClick={handleClick}>
          {arr.map((item, idx) => (
            <button id={item} key={idx} className={styles.cell}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
