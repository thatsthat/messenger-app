import { useState } from "react";
import styles from "../styles/MessageList.module.css";
import InputDialog from "./InputDialog";

type AppProps = {
  initialMessages: string[];
};

function MessageList({ initialMessages }: AppProps) {
  const [messages, setMessages] = useState<string[]>(initialMessages);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.main}>
      {messages &&
        messages.map((message, i) => (
          <div key={i} className={styles.message}>
            {message}
          </div>
        ))}
      <InputDialog sendMessage={addMessage} />
    </div>
  );
}

export default MessageList;
