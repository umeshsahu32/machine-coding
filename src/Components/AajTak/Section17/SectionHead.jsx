import React, { Fragment } from "react";
import styles from "./SectionHead.module.css";
import { Link } from "react-router-dom";

const SectionHead = () => {
  return (
    <Fragment>
      <div className={styles.heading_container}>
        <h3>Frequently Asked Question</h3>
        <p>These Are the most commonly asked questions about Untitled UI.</p>
        <p>
          Can't find what you're looking for?{" "}
          <Link to="#">Contact Our Team</Link>{" "}
        </p>
      </div>
    </Fragment>
  );
};

export default SectionHead;
