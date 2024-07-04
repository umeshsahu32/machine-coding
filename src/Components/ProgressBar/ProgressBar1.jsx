import React, { Fragment, useState, useEffect } from "react";
import styles from "./ProgressBar1.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const ProgressBarComponent = ({ value, onComplete }) => {
  const [percentage, setPercentage] = useState(value);
  const MAX = 100;
  const MIN = 0;

  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value, onComplete]);

  return (
    <Fragment>
      <div className={styles.progress}>
        <span
          style={{
            color: percentage > 49 ? "white" : "black",
          }}
        >
          {percentage?.toFixed()}%
        </span>
        <div
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage?.toFixed()}
        ></div>
      </div>
    </Fragment>
  );
};

const ProgressBar1 = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      if (value < 100) {
        setValue((p) => p + 1);
      }
    }, 100);

    return () => {
      clearInterval(time);
    };
  }, [value]);

  const resetBtnClickHandler = () => {
    setSuccess(false);
    setValue(0);
  };

  return (
    <Fragment>
      <HeadingComponent heading="Progress Bar 1" />
      <div className={styles.progress_bar_body}>
        <ProgressBarComponent
          value={value}
          onComplete={() => setSuccess(true)}
        />
        <span>{success ? "Complete!" : "Loading..."}</span>
        <button className={styles.reset_button} onClick={resetBtnClickHandler}>
          Reset
        </button>
      </div>
    </Fragment>
  );
};

export default ProgressBar1;
