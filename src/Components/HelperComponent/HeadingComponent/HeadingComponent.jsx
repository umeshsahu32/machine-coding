import React from "react";
import { Fragment } from "react";
import styles from "./HeadingComponent.module.css";
import { Link } from "react-router-dom";

const HeadingComponent = ({ heading }) => {
  return (
    <Fragment>
      <div className={styles.head}>
        <h4>{heading}</h4>
        <Link to="/">Go Home</Link>
      </div>
    </Fragment>
  );
};

export default HeadingComponent;
