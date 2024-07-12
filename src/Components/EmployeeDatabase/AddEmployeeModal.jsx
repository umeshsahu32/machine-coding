import React, { Fragment, useState } from "react";
import styles from "./EmployeeDatabase.module.css";

const AddEmployeeModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    contactNumber: "",
    dob: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      ...formData,
      id: Date.now(), // Simplified ID generation
      age: new Date().getFullYear() - parseInt(formData.dob.slice(0, 4), 10),
      imageUrl:
        formData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png",
    };
    onSave(newEmployee);
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      contactNumber: "",
      dob: "",
      imageUrl: "",
    });
  };

  return (
    <Fragment>
      <div
        className={styles.addEmployee}
        onClick={(e) => e.target.className === styles.addEmployee && onClose()}
      >
        <form className={styles.addEmployeeCreate} onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            max={`${new Date().getFullYear() - 18}-${new Date()
              .toISOString()
              .slice(5, 10)}`}
            required
          />
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL (optional)"
          />
          {/* <button type="submit">Add Employee</button> */}
          <button type="submit">
            <span>Add Employee</span>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEmployeeModal;
