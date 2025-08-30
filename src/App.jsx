import { useState } from "react";
import "./styles.css";

function App() {
  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState();
  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState();

  const handleName = (evt) => {
    const enteredName = evt.target.value;
    if (enteredName.length > 5) {
      setNameErr("Only 5 characters are allowed in name");
    } else {
      setNameErr("");
    }
  };

  const handlePassword = (evt) => {
    const enteredPassword = evt.target.value;
    const regex = /^[a-zA-Z0-9]+$/i;
    if (regex.test(enteredPassword) || enteredPassword.length === 0) {
      setPasswordErr("");
    } else {
      setPasswordErr("Special characters are not allowed in password");
    }
  };

  return (
    <div>
      <h1>App Component</h1>
      <form>
        <input
          type="text"
          placeholder="enter username"
          onChange={handleName}
          className={nameErr ? "input-error" : ""}
        />
        <span style={{ color: "red" }}> {nameErr} </span> <br /> <br />
        <input
          type="text"
          placeholder="enter password"
          onChange={handlePassword}
          className={passwordErr ? "input-error" : ""}
        />
        <span style={{ color: "red" }}> {passwordErr} </span> <br /> <br />
        <button disabled={nameErr || passwordErr}>Login</button>
      </form>
    </div>
  );
}
export default App;
