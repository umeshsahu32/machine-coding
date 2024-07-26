import React, { Fragment } from "react";
import styles from "./SuccessCard.module.css";

const SuccessCard = ({ cardData }) => {
  return (
    <Fragment>
      <div className={styles.cardSection}>
        {cardData.map((item, index) => (
          <Fragment>
            <div
              className={`${styles.card}`}
              key={index}
              style={{ background: item.gradient }}
            >
              <div className={styles.logoContainer}>
                <img
                  src={item.image}
                  alt="Company Logo"
                  className={styles.logo}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.stats}>
                  <span className={styles.percentage}>{item.percentage}</span>
                  <span className={styles.description}>{item.description}</span>
                </div>
                <a href="#" className={styles.link}>
                  {item.caseStudy}
                </a>
              </div>
              {/* Hover card start */}
              <div className={styles.cardContent}>
                <div className={styles.cardDetails}>
                  <p>
                    <strong>Challenge: </strong>
                    {item.challenge}
                  </p>
                  <br />
                  <p>
                    <strong>Solution: </strong>
                    {item.solution}
                  </p>
                  <br />
                  <p>
                    <strong>Result: </strong>
                    {item.result}
                  </p>
                </div>
              </div>
              {/* Hover card end */}
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default SuccessCard;
