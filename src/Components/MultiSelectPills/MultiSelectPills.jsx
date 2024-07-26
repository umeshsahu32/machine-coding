import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./MultiSelectPills.module.css";
import axios from "axios";

// const Pill = ({ image, text, onClick }) => {
//   return (
//     <span className={styles.user_pill} onClick={onClick}>
//       <img src={image} alt={text} />
//       <span>{text} &times;</span>
//     </span>
//   );
// };

const MultiSelectPills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const [selectedUsers, setSelectedUsers] = useState([]);
  // const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  // const [activeSuggestion, setActiveSuggestion] = useState(0);

  // const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      // setActiveSuggestion(0);
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      const result = await axios.get(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );

      if (result.status === 200) {
        setSuggestions(result.data.users);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  // const handleRemoveUser = (user) => {
  //   const updatedUsers = selectedUsers.filter(
  //     (selectedUser) => selectedUser.id !== user.id
  //   );
  //   setSelectedUsers(updatedUsers);

  //   const updatedEmails = new Set(selectedUserSet);
  //   updatedEmails.delete(user.email);
  //   setSelectedUserSet(updatedEmails);
  // };

  // const handleKeyDown = (e) => {
  //   if (
  //     e.key === "Backspace" &&
  //     e.target.value === "" &&
  //     selectedUsers.length > 0
  //   ) {
  //     const lastUser = selectedUsers[selectedUsers.length - 1];
  //     handleRemoveUser(lastUser);
  //     setSuggestions([]);
  //   } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
  //     e.preventDefault();
  //     setActiveSuggestion((prevIndex) =>
  //       prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
  //     );
  //   } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
  //     e.preventDefault();
  //     setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  //   } else if (
  //     e.key === "Enter" &&
  //     activeSuggestion >= 0 &&
  //     activeSuggestion < suggestions.users.length
  //   ) {
  //     handleSelectUser(suggestions.users[activeSuggestion]);
  //   }
  // };

  //   @ JSX START
  return (
    <Fragment>
      {/* <div className={styles.user_search_container}>
        <div className={styles.user_search_input}>
          {selectedUsers.map((user) => {
            return (
              <Pill
                key={user.email}
                image={user.image}
                text={`${user.firstName} ${user.lastName}`}
                onClick={() => handleRemoveUser(user)}
              />
            );
          })}
          <div>
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search For a User..."
              onKeyDown={handleKeyDown}
            />
            <ul className={styles.suggestions_list}>
              {suggestions?.users?.map((user, index) => {
                return !selectedUserSet.has(user.email) ? (
                  <li
                    className={index === activeSuggestion ? styles.active : ""}
                    key={user.email}
                    onClick={() => handleSelectUser(user)}
                  >
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
      <div className={styles.user_search_container}>
        <div className={styles.user_search_input}>
          <div>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a user..."
            />
            <ul className={styles.suggestions_list}>
              {suggestions?.map((user, index) => {
                return (
                  <li key={user.id}>
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MultiSelectPills;
