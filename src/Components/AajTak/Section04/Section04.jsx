import React, { Fragment, useState } from "react";
import styles from "./Section04.module.css";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Chaavi",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Vikas",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Shivam",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Umesh",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "James",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Tushar",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  // ... (include all the reviews from the original code)
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32">
    <path d="M8 5v14l11-7z" fill="#303030" />
  </svg>
);

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={styles.reviewCard}
      onMouseEnter={(e) => {
        e.currentTarget
          .closest(`.${styles.marquee}`)
          .classList.add(styles.paused);
      }}
      onMouseLeave={(e) => {
        e.currentTarget
          .closest(`.${styles.marquee}`)
          .classList.remove(styles.paused);
      }}
    >
      <div className={styles.cardHeader}>
        <img
          className={styles.avatar}
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className={styles.user_name}>
          <div className={styles.userInfo}>
            <figcaption className={styles.name}>{name}</figcaption>
            <p className={styles.username}>{username}</p>
          </div>
          <div className={styles.playIconWrapper}>
            <PlayIcon />
          </div>
        </div>
      </div>
      <blockquote className={styles.body}>{body}</blockquote>
    </figure>
  );
};

const Marquee = ({ children, reverse, className }) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div
      className={`${styles.marquee} ${
        reverse ? styles.reverse : ""
      } ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.marqueeContent}>{children}</div>
      <div className={styles.marqueeContent} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

const Section04 = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Marquee className={styles.customDuration}>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className={styles.customDuration}>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className={styles.gradientLeft}></div>
        <div className={styles.gradientRight}></div>
      </div>
    </Fragment>
  );
};

export default Section04;
