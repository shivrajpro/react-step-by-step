import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();

    setUserList(response);
  }

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
