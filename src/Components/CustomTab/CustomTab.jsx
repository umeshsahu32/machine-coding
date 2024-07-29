import React, { Fragment } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./CustomTab.module.css";
import Tabs from "./Tabs";

const DummyButton = () => {
  return (
    <Fragment>
      <button>Click Me Button</button>
    </Fragment>
  );
};

const CustomTab = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Custom Tab" />
      <div className={styles.parent_container}>
        <Tabs>
          <div title="Home">
            <DummyButton />
          </div>
          <div title="About">Tab content for about</div>
          <div title="Contact">Tab content for contact</div>
          <div title="Career">Tab content for career</div>
        </Tabs>
      </div>
    </Fragment>
  );
};   

export default CustomTab;
