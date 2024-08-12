import React, { Fragment } from "react";
import styles from "./Section25.module.css";

const Section25 = () => {
  const sectionData = [
    {
      id: 1,
      heading: "Data Aggregation",
      overlay: " Collecting data from various sources",
    },
    {
      id: 2,
      heading: "AI-Driven Analysis",
      overlay: "Identifying trends and user interests",
    },
    {
      id: 3,
      heading: "Campaign Optimization",
      overlay: "Enhancing advertising across platforms",
    },
    {
      id: 4,
      heading: "Predictive Lead Scoring",
      overlay: "Prioritizing high-quality leads",
    },
    {
      id: 5,
      heading: "Continuous Learning",
      overlay: "Adapting and refining strategies",
    },
  ];

  return (
    <Fragment>
      <div className={styles.sectionWrapper}>
        <h3>Overview of the lead generation process</h3>
        <div className={styles.breadcrumb}>
          {sectionData.map((item) => {
            return (
              <div className={`${styles.section}`} key={item.id}>
                <span className={styles.text}>{item.heading}</span>
                <div className={styles.overlay}>{item.overlay}</div>
                <div className={styles.overlay_mob}>{item.overlay}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Section25;
