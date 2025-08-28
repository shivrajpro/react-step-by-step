import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>User Details Component</h1>
      <h2>User ID: {params.id}</h2>
    </div>
  );
};

export default UserDetails;
