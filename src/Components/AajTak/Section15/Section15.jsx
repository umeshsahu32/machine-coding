import React, { useState, useEffect, useRef } from "react";
import styles from "./Section15.module.css";
import useCountAnimation from "./useCountAnimation";
import { FaLongArrowAltRight } from "react-icons/fa";
import "animate.css";

const Section15 = () => {
  const { count, countRef } = useCountAnimation(55, 1000);

  return (
    <section className={styles.section15}>
      <h2 className={styles.title}>
        <span> Boosting Growth</span>
        <br />
        <span>Across Industries</span>
      </h2>
      <div className={styles.number_container}>
        <div className={styles.content}>
          <p className={styles.description}>
            Serving across a variety of industries and leaving our mark in every
            one of them
          </p>
          <button className={styles.submitButton}>
            <span>Let's Talk</span>
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
        <div className={`${styles.countContainer}`}>
          <span className={styles.count} ref={countRef}>
            {count}
          </span>
          {count === 55 && <span className={`${styles.plus}`}>+</span>}
        </div>
        <button className={`${styles.submitButton} ${styles.btnEnable}`}>
          <span>Let's Talk</span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Section15;
