const User = ({ displayName, name, onClick }) => {
  return (
    <div>
      <button onClick={() => displayName(name)}>Display Name</button>
      <button onClick={() => onClick()}>Get User</button>
    </div>
  );
};

export default User;
