import { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Toggle in ReactJS</h2>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <Counter /> : null}
      {count === 0 ? (
        <h1>Condition 0</h1>
      ) : count === 1 ? (
        <h1>Condition 0</h1>
      ) : count === 2 ? (
        <h1>Condition 2</h1>
      ) : count === 3 ? (
        <h1>Condition 3</h1>
      ) : (
        <h1>Other Condition</h1>
      )}
    </div>
  );
}
