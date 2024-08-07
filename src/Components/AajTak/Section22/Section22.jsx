import React, { useState } from "react";
import styles from "./Section22.module.css";
import { processData } from "./processData";

const Section22 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className={styles.progress}>
      <div className={styles.progress_inner}>
        {processData.map((step, index) => (
          <div
            key={index}
            className={`${styles.progress_inner__step} ${
              currentStep === index + 1 ? styles.active : ""
            }`}
          >
            <label onClick={() => setCurrentStep(index + 1)}>
              <span className={styles.step_number}>{index + 1}</span>
              <p className={styles.abc1}>{step.label}</p>
            </label>
          </div>
        ))}
        <div
          className={styles.progress_inner__bar}
          style={{ width: `${(currentStep - 1) * 20}%` }}
        ></div>
        <div className={styles.progress_inner__bar_set}></div>
        <div className={styles.progress_inner__tabs}>
          {processData.map((step, index) => (
            <div
              key={index}
              className={`${styles.tab} ${
                currentStep === index + 1 ? styles.active : ""
              }`}
            >
              <h1>{step.label}</h1>
              <p>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section22;
