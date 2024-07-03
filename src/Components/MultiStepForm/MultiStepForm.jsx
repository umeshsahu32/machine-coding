import React, { Fragment, useState } from "react";
import styles from "./MultiStepForm.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const formType = [
  {
    inputType: "text",
    id: "name",
    name: "name",
    label: "Name:",
    buttonName: "Next",
    placeHolder: "Your Name...",
  },
  {
    inputType: "email",
    id: "email",
    name: "email",
    label: "Email:",
    buttonName: "Next",
    placeHolder: "Your Email...",
  },
  {
    inputType: "date",
    id: "dob",
    name: "dob",
    label: "Date of Birth:",
    buttonName: "Next",
    placeHolder: "",
  },
  {
    inputType: "password",
    id: "password",
    name: "password",
    label: "Password:",
    buttonName: "Submit",
    placeHolder: "Enter Password",
  },
];

const MultiStepForm = () => {
  const [forms, setForms] = useState(formType);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  // @ SUBMIT BUTTON HANDLER
  const handleSubmit = (e, name) => {
    e.preventDefault();

    if (formData[name] === "") {
      setError(`${name} is required`);
      return;
    }

    if (index === forms.length - 1) {
      console.log("Submitted Form Data", formData);
      setFormData({
        name: "",
        email: "",
        dob: "",
        password: "",
      });
      setIndex((prevIdx) => prevIdx - 3);
      setError();
      return;
    } else {
      setIndex((prevIdx) => prevIdx + 1);
      setError();
    }
  };

  // @ BACK BUTTON HANDLER
  const backBtnClickHandler = (e) => {
    e.preventDefault();
    setIndex((prevIdx) => prevIdx - 1);
    setError();
  };

  // @ INPUT CHANGE HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Multi Step Form" />
      <div className={styles.parent_container}>
        <div className={styles.input_container}>
          {index > 0 && (
            <span onClick={(e) => backBtnClickHandler(e)}>Back</span>
          )}
          <label htmlFor={forms[index].id}>{forms[index].label}</label>
          <input
            type={forms[index].inputType}
            id={forms[index].id}
            name={forms[index].name}
            placeholder={forms[index].placeHolder}
            onChange={(e) => handleChange(e)}
            value={formData[forms[index].name]}
          />
          {error && <p className={styles.error_text}>{error}</p>}
          <button onClick={(e) => handleSubmit(e, forms[index].name)}>
            {forms[index].buttonName}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default MultiStepForm;
