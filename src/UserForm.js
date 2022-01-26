import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [username, setUsername] = useState("ChickenLady");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Created User, ${username}`);
    setUsername("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
