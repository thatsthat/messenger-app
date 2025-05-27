import { useRef, type ReactEventHandler } from "react";
import styles from "../styles/InputDialog.module.css";
import apiCall from "../utils/apiFunctions";

type AppProps = {
  sendMessage: (message: { content: string; senderId: number }) => void;
  id: number;
};

function InputDialog({ sendMessage, id }: AppProps) {
  const textInput = useRef<HTMLInputElement>(null!);

  const sendMsg = async (e) => {
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {
      console.log(textInput.current.value);
      const message = await apiCall(
        "post",
        "/private/" + id,
        JSON.stringify({
          content: textInput.current.value,
        })
      );
      sendMessage(message);
      textInput.current.value = "";
    }
  };

  return (
    <div className={styles.main}>
      <input
        className={styles.textBox}
        type="text"
        ref={textInput}
        onKeyUp={sendMsg}
      />
      <button className={styles.button} onClick={sendMsg}>
        Send
      </button>
    </div>
  );
}

export default InputDialog;
