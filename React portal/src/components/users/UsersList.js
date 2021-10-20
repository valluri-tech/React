import React from "react";
import Card from "../ui/Card";
import classes from "./UserList.module.css";
function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random()}>
              {user.name} is {user.age} years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UsersList;
