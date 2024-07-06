import React, { Fragment } from "react";
import notFoundImage from "../../../assets/404_page_not_found.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <img src={notFoundImage} alt="Not Found" className={styles.image} />
      </div>
    </Fragment>
  );
};

export default NotFound;
