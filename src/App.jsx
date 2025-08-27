import { useId } from "react";

function App() {
  return (
    <>
      <h1>useId hook in RectJS</h1>
      <UserForm />
      <hr />
      <UserForm />
    </>
  );
}
export default App;

function UserForm() {
  const username = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();

  return (
    <form>
      <label htmlFor={username}>Enter Username</label>
      <input id={username} type="text" placeholder="enter username" />
      <br />
      <br />
      <label htmlFor={password}>Enter Password</label>
      <input id={password} type="password" placeholder="enter password" />
      <br />
      <br />
      <label htmlFor={skills}>Enter Skills</label>
      <input id={skills} type="text" placeholder="enter username" />
      <br />
      <br />
      <input id={terms} type="checkbox" placeholder="enter username" />
      <label htmlFor={terms}>Terms and Conditions</label>
      <br />
      <br />
    </form>
  );
}
