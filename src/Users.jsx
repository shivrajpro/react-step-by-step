import React from "react";
import { NavLink } from "react-router";

const Users = () => {
  const userData = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Peter" },
    { id: 4, name: "Bruce" },
    { id: 5, name: "Tony" },
  ];
  return (
    <div>
      <h2>User List Page</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <NavLink to={"/users/" + user.id}> {user.name} </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Users;
