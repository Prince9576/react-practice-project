import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userData) => {
    setUsers((prevState) => {
      return [
        {
          id: Math.random().toString(),
          name: userData.name,
          age: userData.age,
        },
        ...prevState,
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
