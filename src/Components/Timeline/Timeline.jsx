import React, { Fragment } from "react";
import styles from "./Timeline.module.css";
import OurTeam from "./OurTeam.jsx";
import Achievement from "./Achievement.jsx";

const Timeline = () => {
  const events = [
    {
      title: "First Year",
      subtitle: "Some work experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Second Year",
      subtitle: "Some work experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Third Year",
      subtitle: "Some work experience",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Fourth Year",
      subtitle: "Some work experience",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const achievementData = {
    expertiseImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    milestonesImage:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    expertise: {
      title: "Our Areas of Expertise",
      list: [
        "Web Development",
        "Mobile App Development",
        "Cloud Computing",
        "Artificial Intelligence",
      ],
    },
    milestones: {
      title: "Our Key Milestones",
      list: [
        "Launched our first product in 2010",
        "Reached 1 million users in 2015",
        "Expanded to 10 countries by 2020",
        "Achieved $100 million in revenue in 2023",
      ],
    },
  };

  return (
    <Fragment>
      <div className={styles.timeline}>
        <h2 className={styles.title}>Pure CSS Responsive Timeline</h2>
        <div className={styles.timelineContainer}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p className={styles.subtitle}>{event.subtitle}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurTeam />
      <Achievement {...achievementData} />
    </Fragment>
  );
};

export default Timeline;
