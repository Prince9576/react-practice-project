import Card from "./UI/Card";
import styles from "./UserItem.module.css";
const UserItem = (props) => {
  const item = props.item;
  return (
    <Card className={styles["card-custom"]}>
      <div className={styles.wrapper}>
        <div>{item.name}</div>
        <div>{item.age}</div>
      </div>
    </Card>
  );
};

export default UserItem;
