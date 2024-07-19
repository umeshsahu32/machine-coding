import React, { useState } from "react";
import styles from "./Achievement.module.css";
import { FaLightbulb, FaFlag } from "react-icons/fa";

const Achievement = ({
  expertiseImage,
  milestonesImage,
  expertise,
  milestones,
}) => {
  const [activeTab, setActiveTab] = useState("expertise");

  return (
    <div className={styles.container}>
      <div className={styles.imageColumn}>
        <img
          src={activeTab === "expertise" ? expertiseImage : milestonesImage}
          alt="Achievement"
          className={styles.image}
        />
      </div>
      <div className={styles.contentColumn}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "expertise" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("expertise")}
          >
            <FaLightbulb /> <span>Our Expertise</span>
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "milestones" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("milestones")}
          >
            <FaFlag /> <span>Our Milestones</span>
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === "expertise" ? (
            <>
              <h2>{expertise.title}</h2>
              <ul>
                {expertise.list.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2>{milestones.title}</h2>
              <ul>
                {milestones.list.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
