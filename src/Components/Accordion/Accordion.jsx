import React, { Fragment, useState } from "react";
import styles from "./Accordion.module.css";
import { questions } from "./Data";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  //   @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Accordion" />
      {/* <div className={styles.faqContainer}>
        {questions.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              {question.question}
              <span className={styles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div> */}

      <div className={styles.faqContainer}>
        {questions.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              {question.question}
              <span
                className={`${styles.icon} ${
                  activeIndex === index ? styles.rotated : styles.notRotated
                }`}
              >
                <IoIosArrowUp size={14} />
              </span>
            </div>

            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Accordion;
