import React from "react";
import { Fragment, useState, useEffect } from "react";
import styles from "./EmployeeDatabase.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import EmployeeList from "./EmployeeList";
import EmployeeInfo from "./EmployeeInfo";
import AddEmployeeModal from "./AddEmployeeModal";
import { data } from "./EmployeeData";

const EmployeeDatabase = () => {
  const [employees, setEmployees] = useState(data);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setIsModalOpen(false);
  };

  const updateEmployee = (updateEmployeeData) => {
    const copyArr = [...employees];
    const updatedArray = copyArr.map((item) =>
      item.id === updateEmployeeData.id ? updateEmployeeData : item
    );
    setEmployees(updatedArray);
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
    if (selectedEmployeeId === id) {
      setSelectedEmployeeId(employees[0]?.id || null);
    }
  };

  const editEmployee = (id) => {
    setEditEmployeeId(id);
    setIsModalOpen(true);
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Employee Database" />
      <div className={styles.container}>
        <EmployeeList
          employees={employees}
          selectedEmployeeId={selectedEmployeeId}
          onSelect={setSelectedEmployeeId}
          onDelete={deleteEmployee}
          onEdit={editEmployee}
          onClick={() => setIsModalOpen(true)}
        />
        <div>
          <EmployeeInfo
            onClick={() => setIsModalOpen(true)}
            employee={employees.find((emp) => emp.id === selectedEmployeeId)}
          />
        </div>

        {isModalOpen && (
          <AddEmployeeModal
            onClose={() => {
              setIsModalOpen(false), setEditEmployeeId(null);
            }}
            onSave={addEmployee}
            employee={employees.find((emp) => emp.id === editEmployeeId)}
            onUpdate={updateEmployee}
          />
        )}
      </div>
    </Fragment>
  );
};

export default EmployeeDatabase;
