import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddUser;
