import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

const Overlay = (props) => {
  return <div onClick={props.onClick} className={styles.overlay}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.header}>{props.title}</div>
      <hr></hr>
      <div className={styles.message}>{props.message}</div>
      <hr></hr>
      <Button onClick={props.onClick} type="button" buttonType="danger">
        Okay
      </Button>
    </Card>
  );
};
const ErrorModal = (props) => {
  const closeModal = () => {
    console.log("Modal Closed");
    props.onClose();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onClick={closeModal}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
