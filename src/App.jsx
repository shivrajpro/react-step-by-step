import { useRef } from "react";
import User from "./User";
import UserInput from "./UserInput";

function App() {
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.focus();
    inputRef.current.value = 1000;
  };

  return (
    <>
      <h1>Froward ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={handleInput}>Update Input</button>
    </>
  );
}
export default App;
