import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "shivraj",
    address: { city: "pune", state: "MH" },
  });

  const handleNameChange = (newName) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: newName,
    }));
  };

  const handleCityChange = (newCity) => {
    setUser((prevUser) => ({
      ...prevUser,
      address: { ...prevUser.address, city: newCity },
    }));
  };
  return (
    <>
      <h1>App Component</h1>
      <input
        type="text"
        placeholder="enter username"
        onChange={(evt) => handleNameChange(evt.target.value)}
      />
      <input
        type="text"
        placeholder="enter city"
        onChange={(evt) => handleCityChange(evt.target.value)}
      />
      <h3>Name: {user.name} </h3>
      <h3>City: {user.address.city} </h3>
      <h3>State: {user.address.state} </h3>
      {/* <AddUser setUser={setUser} />
      <hr />
      <DisplayUser user={user} /> */}
    </>
  );
}
export default App;
