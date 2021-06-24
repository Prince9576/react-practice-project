import { useRef, useState } from "react";
import styles from "./AddUser.module.css";
import ErrorModal from "./modals/ErrorModal";
import Button from "./UI/Button";
import Card from "./UI/Card";
const AddUser = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(null);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userNameValue = userNameRef.current.value;
    const ageValue = ageRef.current.value;
    if (userNameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "Invalid",
        message: "Please enter the details to proceed",
      });
      setIsValid(false);
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: "Invalid",
        message: "Please enter age greater than 1",
      });
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(userNameValue, ageValue);
    props.onAddUser({
      name: userNameValue,
      age: ageValue,
    });
    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onClose={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles["card-wrapper"]}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userNameRef}
              className={!isValid ? styles.invalid : ""}
            />
          </div>
          <div className={`${styles["form-control"]} ${styles["margin-xl"]}`}>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              ref={ageRef}
              className={!isValid ? styles.invalid : ""}
            />
          </div>
          <Button buttonType="dark" type="submit">
            Add Data
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
