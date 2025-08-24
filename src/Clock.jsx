import React, { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Clock</h1>
      <h2 style={{ color: color }}>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
