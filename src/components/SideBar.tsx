import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "../styles/SideBar.module.css";
import { userLoggedIn, userLogOut, getUserId } from "../utils/userInfo";
import apiCall from "../utils/apiFunctions";

type AppProps = {
  showUser: (arg: string) => void;
};

const SideBar = ({ showUser }: AppProps) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const userList = await apiCall("get", "/private/user-list");
    console.log("fetching users");
    setUsers(userList);
  };

  useEffect(() => {
    if (userLoggedIn()) fetchUsers();
  }, []);

  return (
    <div className={styles.main}>
      {users &&
        users.map((user, index) => {
          return (
            <div
              className={styles.button}
              key={index}
              onClick={() => showUser(user.id)}
            >
              {user.name}
            </div>
          );
        })}
    </div>
  );
};

export default SideBar;
