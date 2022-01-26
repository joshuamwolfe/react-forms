import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Created User, ${username}`);
  //   setUsername("");
  // };

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
};

export default UserForm;
