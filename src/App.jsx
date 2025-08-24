import { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  let message = "Hello world";
  // debugger
  console.log("test", message);

  const [fruit, setFruit] = useState("apple");

  function handleFruitChange() {
    setFruit("banana"); // component is re-rendered whenever a state variable is changed
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{fruit}</h3>
      <button onClick={handleFruitChange}> Change Fruit</button>
      <Counter />
    </div>
  );
}
