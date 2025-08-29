import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const url = "http://localhost:3000/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    let response = await fetch(url);
    response = await response.json();

    setUserList(response);
  }

  async function deleteUser(userId) {
    if (confirm("Are you sure to delete the user with Id: " + userId)) {
      let response = await fetch(`${url}/${userId}`, { method: "delete" });
      response = await response.json();

      if (response) {
        alert(`User ${response.name} is deleted`);
        fetchUsers();
      }
    }
  }

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
                    <button>Edit</button> |{" "}
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
