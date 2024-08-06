import React, { Fragment, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Section20.module.css";
import { useNotification } from "../../NotificationToaster/NotificationContext.jsx";

const Section20 = () => {
  const [phone, setPhone] = useState("");
  console.log(phone);

  const { addNotification } = useNotification();

  const handleClick = () => {
    addNotification("This is a success messagegdh bau !", "info", 3000); // 5 seconds duration
  };

  return (
    <Fragment>
      <div className={styles.phoneInputContainer}>
        <label className={styles.label}>Phone Number*</label>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputClass={styles.phoneInput}
          buttonClass={styles.dropdownButton}
          dropdownClass={styles.dropdown}
          containerClass={styles.inputContainer}
          // enableSearch={true}
          // disableSearchIcon={true}
          // searchPlaceholder="Search countries"
        />
      </div>
      <button onClick={handleClick}>Show Notification</button>;
    </Fragment>
  );
};

export default Section20;
