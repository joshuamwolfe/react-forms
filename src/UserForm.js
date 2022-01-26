import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Created User, ${username}`);
    setUsername("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <button>Submit</button>
    </form>
  );
};

export default UserForm;
