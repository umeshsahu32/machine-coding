import React, { Fragment } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./TreeViewFolder.module.css";
import Folder from "./Folder";
import { files } from "./data";

const TreeViewFolder = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Tree View Folder" />
      <div className={styles.parent}>
        <Folder files={files} />
      </div>
    </Fragment>
  );
};

export default TreeViewFolder;
