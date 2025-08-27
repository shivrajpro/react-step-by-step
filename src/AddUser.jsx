import { useState } from "react";

const AddUser = ({ setUser }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="enter username"
        onChange={(evt) => setUser(evt.target.value)}
      />
    </div>
  );
};

export default AddUser;
