import { useRef } from "react";
import styles from "../styles/InputDialog.module.css";

type AppProps = {
  sendMessage: (arg1: string) => void;
};

function InputDialog({ sendMessage }: AppProps) {
  const textInput = useRef<HTMLInputElement>(null!);
  function handleClick() {
    sendMessage(textInput.current.value);
  }
  return (
    <div className={styles.main}>
      <input type="text" ref={textInput} />
      <button className={styles.button} onClick={handleClick}>
        Send
      </button>
    </div>
  );
}

export default InputDialog;
