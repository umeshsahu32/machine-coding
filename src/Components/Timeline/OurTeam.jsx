import React from "react";
import styles from "./OurTeam.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamMember = ({ name, role, image, description, socials }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.image} />
    </div>
    <div className={styles.infoContainer}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <div className={styles.separator}></div>
      <p className={styles.description}>{description}</p>
      <div className={styles.socials}>
        {socials.twitter && (
          <a href={socials.twitter}>
            <FaTwitter />
          </a>
        )}
        {socials.facebook && (
          <a href={socials.facebook}>
            <FaFacebook />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram}>
            <FaInstagram />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin}>
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  </div>
);

const OurTeam = () => {
  const team = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwNH4Ch0iV5GbcycFuso8r4igYeM96TK4Q&s",
      description:
        "Walter White is a visionary leader with over 20 years of experience in the technology industry. His innovative approach to business strategy and product development has been instrumental in driving our company's growth",
      socials: {
        twitter: "https://twitter.com/walterwhite",
        facebook: "https://facebook.com/walterwhite",
        instagram: "https://instagram.com/walterwhite",
        linkedin: "https://linkedin.com/in/walterwhite",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwNH4Ch0iV5GbcycFuso8r4igYeM96TK4Q&s",
      description:
        "Sarah Johnson is an accomplished product manager with a kee",
      socials: {
        twitter: "https://twitter.com/sarahjohnson",
        facebook: "https://facebook.com/sarahjohnson",
        instagram: "https://instagram.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.teamGrid}>
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
