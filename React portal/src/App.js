import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  function AddUserHandler(userName, userAge) {
    setUsersList((oldState) => [...oldState, { name: userName, age: userAge }]);
  }
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
