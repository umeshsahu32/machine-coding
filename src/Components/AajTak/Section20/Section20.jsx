import React, { Fragment, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Section20.module.css";

const Section20 = () => {
  const [phone, setPhone] = useState("");
  console.log(phone);

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
    </Fragment>
  );
};

export default Section20;
