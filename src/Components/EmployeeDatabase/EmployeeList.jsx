import React, { Fragment } from "react";
import styles from "./EmployeeDatabase.module.css";

const EmployeeList = ({
  employees,
  selectedEmployeeId,
  onSelect,
  onDelete,
}) => {
  return (
    <Fragment>
      <div className={styles.list_container}>
        <h3>Employee List</h3>
        <div className={styles.employeeList}>
          {employees.map((emp) => (
            <div
              key={emp.id}
              className={`${styles.employeeItem} ${
                emp.id === selectedEmployeeId ? styles.selected : ""
              }`}
              onClick={() => onSelect(emp.id)}
            >
              {emp.firstName} {emp.lastName}
              <i
                className={styles.employeeDelete}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(emp.id);
                }}
              >
                ❌
              </i>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeList;
