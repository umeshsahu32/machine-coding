import React, { Fragment, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./SectionFaq.module.css";

const SectionFaq = ({ questions, activeTab }) => {
  const [activeIndex, setActiveIndex] = useState();

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    setActiveIndex();
  }, [activeTab]);

  return (
    <Fragment>
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

export default SectionFaq;
