import { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const url = "http://localhost:3000/users";
    setLoading(true);
    let response = await fetch(url);
    response = await response.json();
    setUserList(response);
    setLoading(false);
  }

  return (
    <div>
      <h1>App Component</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
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
      )}
    </div>
  );
}
export default App;
