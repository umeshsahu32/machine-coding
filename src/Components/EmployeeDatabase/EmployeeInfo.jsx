import React, { Fragment } from "react";
import styles from "./EmployeeDatabase.module.css";

const EmployeeInfo = ({ employee, onClick }) => {
  // if (!employee) {
  //   return (
  //     <div className={styles.employeeInfo}>
  //       Select an employee to see details
  //     </div>
  //   );
  // }

  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day, month, year;

    if (inputDate.includes("/")) {
      [day, month, year] = inputDate.split("/");
    } else if (inputDate.includes("-")) {
      [year, month, day] = inputDate.split("-");
    } else {
      throw new Error("Invalid date format. Use dd/mm/yyyy or yyyy-mm-dd.");
    }

    // Convert strings to integers
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    // Validate date components
    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12
    ) {
      throw new Error("Invalid date components.");
    }

    // Ensure day is two digits
    day = day.toString().padStart(2, "0");

    // Get month name
    const monthName = months[month - 1];

    return `${day} ${monthName} ${year}`;
  }

  return (
    <Fragment>
      <div className={styles.employeeInfo}>
        <div className={styles.employee_head}>
          <h3></h3>
          <h3>Employee Info</h3>
          <button onClick={onClick}>
            <span>Add Employee</span>
          </button>
        </div>
        {employee ? (
          <div className={styles.info_container}>
            <img
              src={employee?.imageUrl}
              alt={`${employee.firstName} ${employee.lastName}`}
            />
            <span className={styles.employeeHeading}>
              {employee.firstName} {employee.lastName} ({employee.age})
            </span>
            <span>{employee.address}</span>
            <span>{employee.email}</span>
            <span>Mobile - {employee.contactNumber}</span>
            <span>DOB - {formatDate(employee.dob)}</span>
          </div>
        ) : (
          <div className={styles.employeeInfo}>
            Select an employee to see details
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EmployeeInfo;
