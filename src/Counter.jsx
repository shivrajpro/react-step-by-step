import React, { useState } from "react";
import { useEffect } from "react";

const Counter = ({ counter, data }) => {
  const [count, setCount] = useState(0);

  const getCounter = () => {
    console.log("call only");
  };

  const handleData = () => {
    console.log("handleData called");
  };

  useEffect(() => {
    handleData();
  }, [data]);

  getCounter();

  useEffect(() => {
    return () => {
      console.log("======ON DESTROY=====");
    };
  }, []);
  return (
    <div>
      <h1>Componen Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Counter : {counter} </h1>
      <h1>Data : {data} </h1>
    </div>
  );
};

export default Counter;
