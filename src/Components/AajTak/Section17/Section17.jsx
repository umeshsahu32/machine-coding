import React, { useState } from "react";
import styles from "./Section17.module.css";

const accordionData = [
  {
    question: "Item 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "Item 2",
    answer: "Answer for Item 2...",
  },
  {
    question: "Item 3",
    answer: "Answer for Item 3...",
  },
];

const Section17 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.accordion}>
        {accordionData.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span
                className={`${styles.arrow} ${
                  activeIndex === index ? styles.rotated : ""
                }`}
              >
                &#x25B6;
              </span>
            </button>
            <div
              className={`${styles.accordionContent} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div className={styles.accordionInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section17;
