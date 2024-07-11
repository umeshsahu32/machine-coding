import React, { Fragment } from "react";
import notFoundImage from "../../../assets/404_page_not_found.png";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <img src={notFoundImage} alt="Not Found" className={styles.image} />
        <Link to="/">Go Back</Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
