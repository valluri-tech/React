import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //   const [userName, SetUserName] = useState("");
  //   const [age1, SetAge] = useState("");
  const [error, setError] = useState();
  function addUserHandler(e) {
    e.preventDefault();
    const enteredUser = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUser.trim().length === 0 || enteredUser.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age which is greater than zero",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // SetUserName("");
    // SetAge("");
  }

  function resetErrorState() {
    setError(null);
  }
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          resetErrorCallback={resetErrorState}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input ref={nameInputRef} type="text" id="username"></input>
          <label htmlFor="age">Age</label>
          <input ref={ageInputRef} type="number" id="age"></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
