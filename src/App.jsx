import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUser = () => {
    setUsers([...users, user]);
    setUser("");
  };

  const totalUsers = users.length;
  const lastUser = users[totalUsers - 1] || "No users added yet";
  const uniqueUsers = [...new Set(users)];
  // above three variables are derived state

  return (
    <>
      <h1>Total Users: {totalUsers}</h1>
      <h1>Last User: {lastUser}</h1>
      <h1>Unique Users: {uniqueUsers.length}</h1>
      <input
        type="text"
        onChange={(evt) => setUser(evt.target.value)}
        placeholder="enter username"
        value={user}
      />
      <button onClick={handleAddUser}>Add User</button>
      {users.map((user, index) => (
        <h4 key={index}>{user}</h4>
      ))}
    </>
  );
}
export default App;
