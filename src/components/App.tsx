import { useState } from "react";
import styles from "../styles/App.module.css";
import MessageList from "./MessageList";

function App() {
  const msgs = [
    "This is the first message",
    "A second message following the first one",
    "There is always a third message after a second",
    "Following the third message, here comes a forth one",
  ];

  return <MessageList initialMessages={msgs} />;
}

export default App;
