import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  const closeModal = () => {
    console.log("Modal Closed");
    props.onClose();
  };
  return (
    <div className={styles.overlay}>
      <Card className={styles.modal}>
        <div className={styles.header}>{props.title}</div>
        <hr></hr>
        <div className={styles.message}>{props.message}</div>
        <hr></hr>
        <Button onClick={closeModal} type="button" buttonType="danger">
          Okay
        </Button>
      </Card>
    </div>
  );
};
export default ErrorModal;
