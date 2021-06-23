import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setUsername("");
    setAge("");
    console.log(username, age);
    props.onAddUser({
      name: username,
      age,
    });
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card className={styles["card-wrapper"]}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            className={!isValid ? styles.invalid : ""}
          />
        </div>
        <div className={`${styles["form-control"]} ${styles["margin-xl"]}`}>
          <label htmlFor="age">Age</label>
          <input
            value={age}
            type="text"
            id="age"
            onChange={ageChangeHandler}
            className={!isValid ? styles.invalid : ""}
          />
        </div>
        <Button buttonType="dark" type="submit">
          Add Data
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
