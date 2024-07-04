import React, { Fragment } from "react";
import styles from "./UndoableCounter.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const UndoableCounter = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Undoable Counter" />
    </Fragment>
  );
};

export default UndoableCounter;
