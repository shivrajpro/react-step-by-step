import { useState } from "react";

function App() {
  const [usernames, setUsernames] = useState(["Shivraj", "Aniket", "Sanket"]);
  const [users, setUsers] = useState([
    {
      name: "Shivraj",
      age: 21,
    },
    {
      name: "Aniket",
      age: 33,
    },
    {
      name: "Sanket",
      age: 45,
    },
  ]);

  const handleNameChange = (newName) => {
    usernames[usernames.length - 1] = newName;
    setUsernames([...usernames]);
  };

  const handleAgeChange = (newAge) => {
    users[users.length - 1].age = newAge;
    setUsers([...users]);
  };

  return (
    <>
      <h1>App Component</h1>
      <input
        type="text"
        placeholder="enter last username"
        onChange={(evt) => handleNameChange(evt.target.value)}
      />
      {usernames.map((name, index) => (
        <h2 key={index}>{name}</h2>
      ))}

      <hr />

      <h1>Updating Objects in React</h1>
      <input
        type="text"
        placeholder="enter last user age"
        onChange={(evt) => handleAgeChange(evt.target.value)}
      />

      {users.map((user, index) => {
        return (
          <h2 key={index}>
            {user.name} is {user.age} years old
          </h2>
        );
      })}
    </>
  );
}
export default App;
