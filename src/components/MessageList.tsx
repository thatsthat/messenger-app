import { useState } from "react";
import styles from "../styles/MessageList.module.css";
import InputDialog from "./InputDialog";

type AppProps = {
  initialMessages: { content: string; subject: string }[];
};

function MessageList({ initialMessages }: AppProps) {
  const [messages, setMessages] =
    useState<{ content: string; subject: string }[]>(initialMessages);

  const addMessage = (message: { content: string; subject: string }) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.main}>
      {messages &&
        messages.map((message, i) => (
          <div key={i} className={styles.message}>
            {message.content}
          </div>
        ))}
      <div className={styles.dialog}>
        <InputDialog sendMessage={addMessage} />
      </div>
    </div>
  );
}

export default MessageList;
