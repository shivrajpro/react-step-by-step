import { useState } from "react";
import Clock from "./Clock";
import "./styles.css";
import User from "./User";

export default function App() {
  const userData = [
    {
      name: "Anil",
      age: 29,
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "Sam",
      age: 36,
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "Peter",
      age: 20,
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "Bruce",
      age: 50,
      email: "bruce@test.com",
      id: 4,
    },
  ];

  const [color, setColor] = useState("green");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select value={color} onChange={(evt) => setColor(evt.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <Clock color={color} />
      {/* <FormControls /> */}
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {userData.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
