import styles from "../styles/App.module.css";
import MessageList from "./MessageList";

function App() {
  const messages = [
    { content: "How are you?", subject: "rx" },
    { content: "What are you doing?", subject: "rx" },
    { content: "What kind of code?", subject: "rx" },
    { content: "That's interesting", subject: "rx" },
    { content: "I'm fine thanks", subject: "tx" },
    { content: "I'm writing some code", subject: "tx" },
    { content: "A messenger App", subject: "tx" },
    { content: "I think so too", subject: "tx" },
  ];

  return <MessageList initialMessages={messages} />;
}

export default App;
