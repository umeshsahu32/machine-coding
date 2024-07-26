import React from "react";
import { Fragment, useState } from "react";
import styles from "./FormValidation.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const defaultValues = {
  firstName: {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name...",
    value: "",
    isError: false,
    errorMsg: "First Name can't be empty",
  },
  lastName: {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name...",
    value: "",
    isError: false,
    errorMsg: "Last Name can't be empty",
  },
  email: {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Email...",
    value: "",
    isError: false,
    errorMsg: "Email Name can't be empty",
  },
  password: {
    id: "password",
    label: "Password",
    type: "text",
    placeholder: "Password...",
    value: "",
    isError: false,
    errorMsg: "Password  can't be empty",
  },
  confirmPassword: {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "text",
    placeholder: "Confirm Password...",
    value: "",
    isError: false,
    errorMsg: "Confirm Password  can't be empty",
  },
};

const FormValidation = () => {
  const [formData, setFormData] = useState(defaultValues);
  const [isPassMatch, setIsPassMatch] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    const copyFormData = { ...formData };
    copyFormData[name].value = value;
    setFormData(copyFormData);
    isValidForm();
  };

  const passwordMatch = () => {
    const copyFormData = { ...formData };
    const pass = copyFormData["password"].value;
    const cPass = copyFormData["confirmPassword"].value;
    if (pass !== cPass) {
      setIsPassMatch(false);
    } else {
      setIsPassMatch(true);
    }
  };

  const isValidForm = () => {
    const copyFormData = { ...formData };
    Object.keys(copyFormData).forEach((key) => {
      const obj = copyFormData[key];
      obj.isError = !obj.value ? true : false;
      passwordMatch();
    });
    setFormData(copyFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isValidForm();
  };

  return (
    <Fragment>
      <HeadingComponent heading="Form Validation" />
      <div className={styles.container}>
        <form onSubmit={handleFormSubmit}>
          {Object.keys(formData).map((key) => {
            const { id, label, type, placeholder, value, isError, errorMsg } =
              formData[key];
            return (
              <div className={styles.form_item}>
                <label>{label}</label>
                <input
                  onChange={(e) => handleInput(e)}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  className={isError && styles.error_border}
                />
                {isError && <span className={styles.error}>{errorMsg}</span>}
                {key === "confirmPassword" && !isPassMatch && (
                  <span className={styles.error}>Password does not match</span>
                )}
              </div>
            );
          })}
          <div className={styles.form_item}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormValidation;
