import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const baseApiUrl = "http://localhost:3000/users";
const UserList = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    let response = await fetch(baseApiUrl);
    response = await response.json();

    setUserList(response);
  }

  async function deleteUser(userId) {
    if (confirm("Are you sure to delete the user with Id: " + userId)) {
      let response = await fetch(`${baseApiUrl}/${userId}`, {
        method: "delete",
      });
      response = await response.json();

      if (response) {
        alert(`User ${response.name} is deleted`);
        fetchUsers();
      }
    }
  }

  const editUser = (userId) => {
    navigate("edit-user/" + userId);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td> {user.id} </td>
                  <td> {user.name} </td>
                  <td> {user.age} </td>
                  <td>
                    {" "}
                    <button onClick={() => editUser(user.id)}>
                      Edit
                    </button> |{" "}
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
