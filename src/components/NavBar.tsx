import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";
import styles from "../styles/NavBar.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const NavBar = () => {
  function HeaderButton({ loggedIn }) {
    if (!loggedIn) {
      return <Link to="/signin">Sign in</Link>;
    }
    return (
      <>
        <div onClick={userLogOut}>Logout</div>
      </>
    );
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.button}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.button}>
          <HeaderButton loggedIn={userLoggedIn()}></HeaderButton>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
