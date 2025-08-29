import { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let response = await fetch("https://dummyjson.com/users");
    response = await response.json();
    setUserList(response.users);
  }

  return (
    <div>
      <h1>App Component</h1>
      {userList.length && (
        <table border={1}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default App;
