import React from "react";
import styles from "./Section10.module.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const ContactInfo = ({ icon, title, content }) => (
  <div className={styles.infoCard}>
    <div className={styles.iconWrapper}>{icon}</div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const Section10 = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.infoSection}>
        <ContactInfo
          icon={<IoLocationOutline />}
          title="Address"
          content="A108 Adam Street, New York, NY 535022"
        />
        <div className={styles.sub_info_section}>
          <ContactInfo
            icon={<IoCallOutline />}
            title="Call Us"
            content="+91 89765-45334"
          />
          <ContactInfo
            icon={<IoMailOutline />}
            title="Email Us"
            content="info@example.com"
          />
        </div>
      </div>
      <div className={styles.mapAndFormSection}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1613779768085!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Your Name" />
            <input type="number" placeholder="Your Phone" />
          </div>
          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className={styles.submitButton} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section10;
