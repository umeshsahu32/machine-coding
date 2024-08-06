import React, { useEffect, useState } from "react";
import styles from "./Section21.module.css";
import handshakeIcon from "../../../assets/images/hand-image.png"; // Make sure to have this image

const PriceCard = ({ title, price, clients, isCenter }) => (
  <div className={`${styles.card} ${isCenter ? styles.centerCard : ""}`}>
    {isCenter && <div className={styles.featuredStrip}>Best Selling</div>}
    <h3>{title}</h3>
    <h2>₹{price}</h2>
    <img src={handshakeIcon} alt="Handshake" className={styles.handshakeIcon} />
    <p className={styles.clientsText}>{clients} Clients</p>
    <button className={styles.purchaseBtn}>PURCHASE</button>
  </div>
);

const Section21 = () => {
  const [showSideCards, setShowSideCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSideCards(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.section21}>
      <h2 className={styles.sectionTitle}>Price Packages</h2>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.sideCard} ${showSideCards ? styles.show : ""}`}
        >
          <PriceCard title="ACCELERATOR" price={25000} clients={200} />
        </div>
        <PriceCard
          title="DIAMOND"
          price={50000}
          clients={260}
          isCenter={true}
        />
        <div
          className={`${styles.sideCard} ${showSideCards ? styles.show : ""}`}
        >
          <PriceCard title="PLATINUM" price={75000} clients={350} />
        </div>
      </div>
    </section>
  );
};

export default Section21;
