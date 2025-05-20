import { useRef, type ReactEventHandler } from "react";
import styles from "../styles/InputDialog.module.css";

type AppProps = {
  sendMessage: (message: { content: string; subject: string }) => void;
};

function InputDialog({ sendMessage }: AppProps) {
  const textInput = useRef<HTMLInputElement>(null!);

  function sendMsg(e) {
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {
      sendMessage({ content: textInput.current.value, subject: "rx" });
      textInput.current.value = "";
    }
  }

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
