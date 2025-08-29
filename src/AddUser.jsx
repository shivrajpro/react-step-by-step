import { useState } from "react";
import { useNavigate } from "react-router";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const onAddUser = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: username, age }),
    });

    alert("New User Added");
    navigate("/");
  };

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="enter user name"
        onChange={(evt) => setUsername(evt.target.value)}
        value={username}
      />
      <input
        type="text"
        placeholder="enter user age"
        onChange={(evt) => setAge(evt.target.value)}
        value={age}
      />
      <button onClick={onAddUser}>Add</button>
    </div>
  );
};

export default AddUser;
