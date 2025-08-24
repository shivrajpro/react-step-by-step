import { useEffect, useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(4);

  function counterFunction() {
    console.log("counterFunction", count);
  }

  function dataFunction() {
    console.log("dataFunction", data);
  }

  useEffect(() => {
    counterFunction();
  }, [count]);

  useEffect(() => {
    dataFunction();
  }, [count, data]);

  function callOnce() {
    console.log("callOnce called");
  }

  // callOnce();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>

      {count < 5 ? <Counter counter={count} data={data} /> : null}
    </div>
  );
}
