import React from "react";
import { Fragment } from "react";
import styles from "./ShoppingList.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const ShoppingList = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Shopping List" />
    </Fragment>
  );
};

export default ShoppingList;
