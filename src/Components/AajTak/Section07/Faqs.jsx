import React, { Fragment, useState } from "react";
import styles from "./Faqs.module.css";

const FaqPackage = () => {
  return (
    <Fragment>
      <p>We offer several pricing packages for QLead, including:</p>
      <p>
        Accelerator Package: Suitable for medium-sized businesses, offering a
        moderate number of leads with additional features.
      </p>
      <p>
        Expansion Package: Designed for larger businesses, providing a high
        volume of qualified leads and premium support.
      </p>
      <p>
        Enterprise Package: Customized solutions for large enterprises with
        extensive lead generation needs.",
      </p>
    </Fragment>
  );
};

const Faqs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  //   @ JSX START
  return (
    <Fragment>
      <div className={styles.faqContainer}>
        {data.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.faqQuestion} ${
                activeIndex === index ? styles.active_border : ""
              }`}
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
              {question.id === 33 ? <FaqPackage /> : question.answer}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Faqs;
