import React, { Fragment } from "react";
import styles from "./SectionButtons.module.css";

const Buttons = ({ items, onClick, active }) => {
  const uniqueItems = items.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.section_id === item.section_id)
  );

  return (
    <div className={styles.button_container}>
      {uniqueItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.pill} ${
            active === item.section_id ? styles.active : ""
          }`}
          onClick={() => onClick(item.section_id)}
        >
          {item.section_name}
        </div>
      ))}
    </div>
  );
};

const SectionButtons = ({ categories, onClick, active }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Buttons items={categories} onClick={onClick} active={active} />
      </div>
    </Fragment>
  );
};

export default SectionButtons;
