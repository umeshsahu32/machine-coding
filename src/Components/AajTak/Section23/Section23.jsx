import React, { Fragment, useState } from "react";
import { processData } from "./processData";
import styles from "./Section23.module.css";

const Section23 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.section_container}>
          {processData.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.progress_inner__step} ${
                  currentStep === index + 1 ? styles.active : ""
                }`}
              >
                <label
                  onClick={() => setCurrentStep(index + 1)}
                  className={styles.section_label}
                >
                  <span className={styles.step_number}>{index + 1}</span>
                  <span className={styles.label_item}> {item.label}</span>
                </label>
              </div>
            );
          })}
        </div>
        <div className={styles.progress_inner__tabs}>
          {processData.map((step, index) => {
            return (
              currentStep === index + 1 && (
                <div key={index} className={`${styles.tab} `}>
                  <h1>{step.label}</h1>
                  <p>{step.content}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Section23;
