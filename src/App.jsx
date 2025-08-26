import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter email";
  };

  const handleForm = (evt) => {
    evt.preventDefault();
    const user = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    console.log("user", user, "password", password);
  };

  const handleFormRef = (evt) => {
    evt.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log("username=", username, "password=", password);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <h1>Add Bootstrap in React.js</h1>
      <input ref={inputRef} type="text" placeholder="enter username" />
      <button onClick={inputHandler}>Focus Input</button>
      <br />
      <br />
      <h1>Uncontrolled component</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
        />{" "}
        <br /> <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h1>Uncontrolled component with useRef</h1>
      <form onSubmit={handleFormRef}>
        <input
          type="text"
          name="usernameRef"
          id="usernameRef"
          placeholder="enter username"
          ref={usernameRef}
        />{" "}
        <br /> <br />
        <input
          type="password"
          name="passwordRef"
          id="passwordRef"
          placeholder="enter password"
          ref={passwordRef}
        />
        <br /> <br />
        <button type="submit">Submit with ref</button>
      </form>
    </>
  );
}
export default App;
