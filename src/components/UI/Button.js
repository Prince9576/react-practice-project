import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.button} ${
        props.buttonType === "dark"
          ? styles["button-hard"]
          : styles["button-danger"]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
