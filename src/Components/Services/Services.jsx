import React from "react";
import styles from "./Services.module.css";
import { FaSearch, FaCog, FaTh, FaGlobe, FaLightbulb } from "react-icons/fa";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Far far away, behind the word mountains,
          <br />
          far from the countries Vokalia
        </p>
        <p className={styles.description}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p className={styles.additional}>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.serviceGrid}>
          <ServiceItem icon={<FaSearch />} title="Square" />
          <ServiceItem icon={<FaCog />} title="Technology" />
          <ServiceItem icon={<FaTh />} title="Brilliant Ideas" />
          <ServiceItem icon={<FaGlobe />} title="Blueprint" />
          {/* <ServiceItem icon={<FaLightbulb />} title="Innovation" /> */}
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>
        Separated they live in Bookmarksgrove right at the coast
      </p>
    </div>
  );
};

export default Services;
