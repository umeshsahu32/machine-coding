import React, { Fragment } from "react";
import styles from "./PlayIconSmall.module.css";

const PlayIconSmall = ({ onClick }) => {
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

export default PlayIconSmall;
