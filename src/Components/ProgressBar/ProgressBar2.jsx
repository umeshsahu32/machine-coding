import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./ProgressBar2.module.css";

const ProgressBarComponent = ({ progress, color = "lightgreen" }) => {
  const styleObject = {
    width: `${progress}%`,
    backgroundColor: color,
    height: 30,
    borderRadius: 20,
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.progress_bar}>
          <div style={styleObject}>{`${progress}%`}</div>
        </div>
      </div>
    </Fragment>
  );
};

const ProgressBar2 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 20);

    return () => {
      clearInterval(time);
    };
  }, [progress]);
  return (
    <Fragment>
      <HeadingComponent heading="Progress Bar 2" />
      <div className={styles.progress_container}>
        <ProgressBarComponent progress={progress} color="yellow" />
        <ProgressBarComponent progress={progress} color="orange" />
      </div>
    </Fragment>
  );
};

export default ProgressBar2;
