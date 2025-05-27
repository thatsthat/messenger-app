import { useState, useEffect } from "react";
import styles from "../styles/MessageList.module.css";
import InputDialog from "./InputDialog";

type AppProps = {
  initialMessages: { content: string; senderId: number; receiverId: number }[];
  userId: number;
};

function MessageList({ initialMessages, userId }: AppProps) {
  const [messages, setMessages] =
    useState<{ content: string; senderId: number; receiverId: number }[]>(
      initialMessages
    );

  const addMessage = (message: {
    content: string;
    senderId: number;
    receiverId: number;
  }) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  return (
    <div className={styles.main}>
      {messages &&
        messages.map((message, i) => (
          <div
            key={i}
            className={`${styles.message} ${
              message.senderId === userId ? styles.tx : styles.rx
            }`}
          >
            {message.content}
          </div>
        ))}
      <div className={styles.dialog}>
        <InputDialog sendMessage={addMessage} id={userId} />
      </div>
    </div>
  );
}

export default MessageList;
