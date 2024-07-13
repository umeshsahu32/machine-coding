import React, { Fragment, useEffect, useState } from "react";
import styles from "./EmployeeDatabase.module.css";

const Input = ({ type, name, value, onChange, placeholder, error, max }) => {
  return (
    <Fragment>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        max={max}
        required={name === "imageUrl" ? false : true}
      />
      {error && <p>{error}</p>}
    </Fragment>
  );
};

const AddEmployeeModal = ({ onClose, onSave, employee, onUpdate }) => {
  console.log(employee);

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

  console.log("formData", formData);

  const handleEdit = (e) => {
    e.preventDefault();
    const updateEmployee = {
      ...formData,
      age: new Date().getFullYear() - parseInt(formData.dob.slice(0, 4), 10),
      imageUrl:
        formData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png",
    };
    onUpdate(updateEmployee);
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      contactNumber: "",
      dob: "",
      imageUrl: "",
    });
    onClose();
  };

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, []);

  return (
    <Fragment>
      <div
        className={styles.addEmployee}
        onClick={(e) => e.target.className === styles.addEmployee && onClose()}
      >
        <form className={styles.addEmployeeCreate}>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            max=""
            error={""}
          />

          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            max=""
            error={""}
          />

          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            max=""
            error={""}
          />

          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            max=""
            error={""}
          />

          <Input
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            max=""
            error={""}
          />

          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            max={`${new Date().getFullYear() - 18}-${new Date()
              .toISOString()
              .slice(5, 10)}`}
            error={""}
          />

          <Input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            max=""
            error={""}
          />
          <button onClick={employee ? handleEdit : handleSubmit}>
            <span>{employee ? "Update Employee" : "Add Employee"}</span>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEmployeeModal;
