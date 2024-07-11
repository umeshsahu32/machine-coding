import React from "react";
import { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./PasswordGenerator.module.css";
import usePasswordGenerator from "./PasswordGeneratorHook";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const Checkboxes = ({ title, onChange, state }) => {
  return (
    <Fragment>
      <div>
        <input id={title} type="checkbox" onChange={onChange} checked={state} />
        <label htmlFor={title}>{title}</label>
      </div>
    </Fragment>
  );
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { id: 1, title: "Include Uppercase Letters", state: false },
    { id: 2, title: "Include Lowercase Letters", state: false },
    { id: 3, title: "Include Numbers", state: false },
    { id: 4, title: "Include Symbols", state: false },
  ]);

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (id) => {
    const copyCheckbox = checkboxData.map((item) => {
      return item.id === id ? { ...item, state: !item.state } : item;
    });
    setCheckboxData(copyCheckbox);
  };

  // ? HANDLE COPY BUTTON
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Fragment>
      <HeadingComponent heading="Password Generator" />
      <div className={styles.parent}>
        <div className={styles.container}>
          {password && (
            <div className={styles.header}>
              <div className={styles.title}>{password}</div>
              <button className={styles.copyBtn} onClick={handleCopy}>
                {`${copied ? "Copied!" : "Copy"}`}
              </button>
            </div>
          )}
          <div className={styles.password_length}>
            <span>
              <label>Character Length</label>
              <label>{length}</label>
            </span>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className={styles.checkboxes}>
            {checkboxData.map((item, index) => {
              return (
                <Checkboxes
                  key={item.id}
                  title={item.title}
                  onChange={() => handleCheckboxChange(item.id)}
                  state={item.state}
                />
              );
            })}
          </div>
          <PasswordStrengthIndicator password={password} />
          <div className={styles.btn_container}>
            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}

            <button
              className={styles.generateBtn}
              onClick={() => generatePassword(checkboxData, length)}
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PasswordGenerator;
