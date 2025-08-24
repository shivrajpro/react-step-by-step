const User = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        margin: "10px",
        borderRadius: "4px",
      }}
    >
      <h2>Id: {user.id} </h2>
      <h2>Name: {user.name} </h2>
      <h2>Email: {user.email} </h2>
      <h2>Age: {user.age} </h2>
    </div>
  );
};

export default User;
