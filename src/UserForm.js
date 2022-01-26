import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("ChickenLady");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <button>Add me to List</button>
    </form>
  );
};

export default UserForm;
