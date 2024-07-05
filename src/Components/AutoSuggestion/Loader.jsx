import React, { Fragment } from "react";
import styles from "./AutoSuggestion.module.css";

const Loader = () => {
  return (
    <Fragment>
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    </Fragment>
  );
};

export default Loader;
