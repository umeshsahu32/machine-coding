import React from "react";
import { Fragment } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Tic Tac Toe" />
      <div></div>
    </Fragment>
  );
};

export default TicTacToe;
