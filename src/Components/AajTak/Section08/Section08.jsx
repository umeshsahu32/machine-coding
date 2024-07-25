import React, { Fragment } from "react";
import styles from "./Section08.module.css";

const Section08 = ({ onClick }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.playIconWrapper}>
          <div className={styles.playIcon} onClick={onClick}>
            <div className={styles.triangle}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section08;
