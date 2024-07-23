import { useState, Fragment } from "react";
import React from "react";
import styles from "./Section01.module.css";
import "animate.css";

const adTypes = [
  {
    id: 0,
    title: "Display Advertising",
    image:
      "https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz",
  },
  {
    id: 1,
    title: "Search Advertising",
    image:
      "https://images.unsplash.com/photo-1717137389747-d1d4ced6abc8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he .",
  },
  {
    id: 2,
    title: "Social Media Advertising",
    image:
      "https://images.unsplash.com/photo-1721635513019-4dd5f5c18042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.  ",
  },
  {
    id: 3,
    title: "Email Advertising",
    image:
      "https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure a hu must explain to you how all this mistaken idea of denouncing pleasure a hu",
  },
  {
    id: 4,
    title: "Affiliate Advertising",
    image:
      "https://images.unsplash.com/photo-1721296381825-426cfb4dc450?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula egensequat massa quis enim. Donec  massa quis enim. Donec..",
  },
  {
    id: 5,
    title: "Mobile Advertising",
    image:
      "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.  Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! g",
  },
];

const Section01 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };

  // @ JSX START
  return (
    <section className={styles.section}>
      <div className={styles.tabContainer}>
        {adTypes.map((adType) => (
          <button
            key={adType.id}
            className={`${styles.tabButton} ${
              adType.id === activeTab ? styles.active : ""
            }`}
            onClick={() => tabClickHandler(adType.id)}
          >
            {adType.title}
          </button>
        ))}
      </div>
      {/* IMAGE CONTAINER */}
      <div
        className={`${styles.contentContainer} animate__animated  animate__bounceInUp`}
      >
        <div className={`${styles.imageContainer} `}>
          <img
            src={adTypes[activeTab].image}
            alt={adTypes[activeTab].title}
            className={`${styles.image}`}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={`${styles.title} `}>{adTypes[activeTab].title}</h2>
          <p className={styles.description}>{adTypes[activeTab].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Section01;
