import React, { Fragment, useState } from "react";
import styles from "./Section14.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import image1 from "../../../assets/images/browser.webp";
import samplePdf from "../../../assets/sample-pdf.pdf";
import { FaLongArrowAltRight } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Section14 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [error, setError] = useState();

  const FormValidation = (formData, setError) => {
    let newErrors = {};

    console.log("formData-->", formData);

    const isValidEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email);
    };

    function isValidPhoneNumber() {
      const numberRegex = /^\d{12}$/;
      return numberRegex.test(formData.phoneNumber);
    }

    if (!formData?.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData?.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData?.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitBtnHandler = (e) => {
    e.preventDefault();
    formData.phoneNumber = phone;
    const isValid = FormValidation(formData, setError);
    if (isValid) {
      console.log("formData", formData);
    }
  };

  console.log("formData", formData);

  // @  JSX START
  return (
    <div className={styles.section14}>
      <div className={styles.leftColumn}>
        <h1>
          Discover
          <br />
          Digital
          <br />
          Transformation
        </h1>
        <p>
          Please feel free to share your thoughts and we can discuss it over a
          cup of tea.
        </p>
        <a href={samplePdf} download className={styles.downloadButton}>
          <img src={image1} alt="Brochure" className={styles.brochureImage} />
          <div className={styles.downloadText}>
            <div className={styles.download_text}>Download Our Brochure</div>
            <div className={styles.fileInfo}>
              PDF 2.0 MB
              <span className={styles.downloadIcon}>
                <AiOutlineDownload />
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.get_quote}>Get A Quote</div>
        <div className={styles.form}>
          <div className={styles.name_container}>
            <div className={styles.input_container}>
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                id="firstName"
                onChange={handleInputChange}
                className={`${error?.firstName ? styles.error_border : ""}`}
              />
              {error?.firstName && (
                <p className={styles.error_text}>{error.firstName}</p>
              )}
            </div>
            <div className={styles.input_container}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                id="lastName"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.name_container}>
            <div className={styles.input_container}>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                placeholder="Enter First Name"
                id="email"
                name="email"
                onChange={handleInputChange}
                className={`${error?.email ? styles.error_border : ""}`}
              />
              {error?.email && (
                <p className={styles.error_text}>{error.email} </p>
              )}
            </div>
            <div className={styles.input_container}>
              <label htmlFor="phone">Phone Number*</label>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputClass={styles.phoneInput}
                buttonClass={styles.dropdownButton}
                dropdownClass={styles.dropdown}
                containerClass={`${styles.inputContainer} ${
                  error?.email ? styles.error_border : ""
                }`}
                id="phone"
              />
              {error?.phoneNumber && (
                <p className={styles.error_text}>{error.phoneNumber} </p>
              )}
            </div>
          </div>
          <div className={styles.textarea_container}>
            <div className={styles.input_container}>
              <label htmlFor="message" className={styles.textarea_label}>
                <span>Tell Us More</span>
                <span>{`${formData.message.length}/600`}</span>
              </label>
              <textarea
                rows={8}
                placeholder="Tell us more"
                id="message"
                name="message"
                onChange={(e) => {
                  console.log("euh", e.key);
                  if (formData.message.length === 600 && e.key == "Backspace") {
                    handleInputChange(e);
                  } else if (formData.message.length === 600) {
                    console.log("s");
                  }
                  e;
                }}
                value={formData.message}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={(e) => submitBtnHandler(e)}
          className={styles.submitButton}
        >
          <span>Submit</span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Section14;
