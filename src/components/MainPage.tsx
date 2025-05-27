import { useState, useEffect } from "react";
import styles from "../styles/MainPage.module.css";
import stylesSignIn from "../styles/SignIn.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import apiCall from "../utils/apiFunctions";
import SignIn from "./SignIn";
import SideBar from "./SideBar";
import MessageList from "./MessageList";
import { Link, useParams } from "react-router";

const MainPage = () => {
  const [messages, setMessages] = useState();
  const [uId, setUId] = useState();

  const fetchMessages = async (userId: number) => {
    const msgs = await apiCall("get", "/private/" + userId);
    setMessages(msgs);
    setUId(userId);
  };

  if (!userLoggedIn())
    return (
      <div className={stylesSignIn.main}>
        <SignIn />
      </div>
    );

  return (
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <SideBar showUser={fetchMessages} />
      </div>
      <div className={styles.content}>
        {messages && <MessageList initialMessages={messages} userId={uId} />}
      </div>
    </div>
  );
};

export default MainPage;
