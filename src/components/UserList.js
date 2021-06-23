import UserItem from "./UserItem";

const UserList = (props) => {
  const users = props.users;
  return users.map((user) => {
    return <UserItem key={user.id} item={user} />;
  });
};

export default UserList;
