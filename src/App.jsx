import { useActionState } from "react";
import "./styles.css";

function App() {
  const handleLogin = (prevData, form) => {
    const username = form.get("username");
    const password = form.get("password");
    const regex = /^[a-zA-Z0-9]+$/i;

    if (username.length && username.length > 5) {
      return {
        error: "Username cannot contain more than 5 characters",
        username,
        password,
      };
    } else if (password.length && !regex.test(password)) {
      return {
        error: "Special characters are not allowed in password",
        username,
        password,
      };
    } else {
      return { message: "Login done" };
    }
  };
  const [data, action, pending] = useActionState(handleLogin);

  console.log("data", data);

  return (
    <div>
      <h1>App Component</h1>
      <span style={{ color: "green" }}> {data?.message} </span>
      <span style={{ color: "red" }}> {data?.error} </span>
      <form action={action}>
        <input
          defaultValue={data?.username}
          type="text"
          placeholder="enter username"
          name="username"
        />

        <input
          defaultValue={data?.password}
          type="text"
          placeholder="enter password"
          name="password"
        />
        <button disabled={pending}>Login</button>
      </form>
    </div>
  );
}
export default App;
