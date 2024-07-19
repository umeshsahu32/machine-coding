import React, { Fragment } from "react";
import styles from "./EmployeeDatabase.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const EmployeeList = ({
  employees,
  selectedEmployeeId,
  onSelect,
  onDelete,
  onEdit,
  onClick,
}) => {
  return (
    <Fragment>
      <div className={styles.list_container}>
        <div className={styles.employee_head}>
          <h5></h5>
          <h5>Employee Info</h5>
          <button onClick={onClick}>
            <span>Add Employee</span>
          </button>
        </div>
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
              <div className={styles.action_icons}>
                <i
                  className={styles.employeeEdit}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(emp.id);
                  }}
                >
                  <MdModeEditOutline />
                </i>
                <i
                  className={styles.employeeDelete}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(emp.id);
                  }}
                >
                  <MdDeleteOutline />
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeList;
