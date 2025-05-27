import styles from "../styles/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MainPage from "./MainPage";

function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
