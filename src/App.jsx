import { useState } from "react";
import Clock from "./Clock";
import "./styles.css";
import User from "./User";
import College from "./College";

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
  const collegeData = [
    {
      name: "IET Alwer",
      city: "Alwer",
      website: "https://www.iet.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "https://www.iit.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "https://www.kciet.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
  ];

  const [color, setColor] = useState("green");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h2>College Details</h2>
      {collegeData.map((clg, index) => {
        return <College key={index} college={clg} />;
      })}
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
