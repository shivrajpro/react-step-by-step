import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { baseApiUrl } from "./UserList";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  async function getUserById() {
    let response = await fetch(`${baseApiUrl}/${params.id}`);
    response = await response.json();
    // console.log(">> response", response);
    setUsername(response.name);
    setAge(response.age);
  }

  const updateUser = async () => {
    let response = await fetch(`${baseApiUrl}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name: username, age: age }),
    });

    response = await response.json();
    alert("User updated successfully");
    navigate("/");
  };

  //   console.log("params", params);

  return (
    <div>
      <br />
      <h1>Edit User</h1>
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
      <button onClick={updateUser}>Update</button>
    </div>
  );
};

export default EditUser;
