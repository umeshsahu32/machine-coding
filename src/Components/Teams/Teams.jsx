import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./Teams.module.css";

const teamMembers = [
  {
    name: "Walter White",
    role: "Web Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
  },
  {
    name: "Sarah Jhinson",
    role: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
  },
  {
    name: "William Anderson",
    role: "Content",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
  },
];

const TeamsCard = ({ name, role, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardRole}>{role}</p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.icon}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className={styles.team_container}>
      {teamMembers.map((member, index) => (
        <TeamsCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      ))}
    </div>
  );
};

export default Teams;
