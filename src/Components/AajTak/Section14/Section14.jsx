import React, { Fragment, useState } from "react";
import styles from "./Section14.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import image1 from "../../../assets/images/browser.webp";
import samplePdf from "../../../assets/sample-pdf.pdf";
import { FaLongArrowAltRight } from "react-icons/fa";

const InputField = ({
  type,
  label,
  id,
  name,
  formData,
  onChange,
  placeholder,
  error,
  required,
}) => {
  return (
    <Fragment>
      <div className={styles.input_container}>
        <div className={styles.label_container}>
          <label htmlFor={id}>{label}</label>
          <span>{required && "*"}</span>
        </div>
        <input
          id={id}
          type={type}
          name={name}
          value={formData[name]}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input}`}
        />
        {error && error[name] && (
          <p className={styles.errorText}>{error[name]}</p>
        )}
      </div>
    </Fragment>
  );
};
const TextareaField = ({
  label,
  id,
  name,
  formData,
  onChange,
  placeholder,
  rowCount,
}) => {
  return (
    <Fragment>
      <div className={styles.input_container}>
        <div className={styles.label_container}>
          <label htmlFor={id}>{label}</label>
        </div>
        <textarea
          name={name}
          id={id}
          value={formData[name]}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.textarea}`}
          rows={rowCount}
        />
      </div>
    </Fragment>
  );
};

const Section14 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [error, setError] = useState();

  const FormValidation = (formData, setError) => {
    let newErrors = {};

    const isValidEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email);
    };

    function isValidPhoneNumber() {
      const numberRegex = /^\d{10}$/;
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
    const isValid = FormValidation(formData, setError);
    if (isValid) {
      console.log("formData", formData);
    }
  };

  const arr = [
    {
      id: 1,
      type: "text",
      label: "First Name",
      element_id: "first-name",
      name: "firstName",
      placeholder: "Enter first name",
      require: true,
    },
    {
      id: 2,
      type: "text",
      label: "Last Name",
      element_id: "last-name",
      name: "lastName",
      placeholder: "Enter Last name",
      require: false,
    },
    {
      id: 3,
      type: "email",
      label: "Email",
      element_id: "email",
      name: "email",
      placeholder: "Enter Email",
      require: true,
    },
    {
      id: 4,
      type: "number",
      label: "Phone Number",
      element_id: "phoneNumber",
      name: "phoneNumber",
      placeholder: "Enter Phone Number",
      require: true,
    },
  ];

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
        <div className={styles.form}>
          {arr.map((item) => {
            return (
              <InputField
                key={item.id}
                type={item.type}
                label={item.label}
                id={item.element_id}
                name={item.name}
                formData={formData}
                onChange={handleInputChange}
                placeholder={item.placeholder}
                error={error}
                required={item.require}
              />
            );
          })}
          <TextareaField
            label="Message"
            id="message"
            name="message"
            placeholder="Message"
            rowCount="5"
            formData={formData}
            onChange={handleInputChange}
          />
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
    </div>
  );
};

export default Section14;
