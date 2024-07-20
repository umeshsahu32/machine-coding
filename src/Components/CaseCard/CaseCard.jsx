import React, { Fragment } from "react";
import styles from "./CaseCard.module.css";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    title: "Walter White",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    title: "Walter White",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    title: "Walter White",
  },
];

const Card = ({ image, title, result, solution, challenge }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={image} alt="Profile" className={styles.cardImage} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardContent}>
          <div className={styles.cardDetails}>
            <p>
              <strong>Challenge:</strong>
              {challenge}
            </p>
            <p>
              <strong>Solution:</strong>
              {solution}
            </p>
            <p>
              <strong>Result:</strong>
              {result}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const CaseCard = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        {data.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </Fragment>
  );
};

export default CaseCard;
