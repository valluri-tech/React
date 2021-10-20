import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={function () {
        console.log("backdrop clicked");
        props.resetErrorCallback();
      }}
    ></div>
  );
};

const ErrorModal2 = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.resetErrorCallback}>OKAY</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop resetErrorCallback={props.resetErrorCallback} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal2
          title={props.title}
          message={props.message}
          resetErrorCallback={props.resetErrorCallback}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
