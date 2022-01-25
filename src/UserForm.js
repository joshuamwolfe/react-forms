import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState('ChickenLady')
  return (
    <form>
      <input type='text' placeholder='username'value={username}
      onChange={() => console.log('change')}/>
      <button>Add me to List</button>
    </form>
  );
}

export default UserForm;
