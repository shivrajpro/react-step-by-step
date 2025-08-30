import { useState } from "react";
import { useNavigate } from "react-router";
import { baseApiUrl } from "./UserList";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const onAddUser = async () => {
    await fetch(baseApiUrl, {
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
