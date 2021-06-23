import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <div className="overlay">
      <Card className="modal">
        <div className="header">Invalid</div>
        <div className="message">{props.message}</div>
        <Button type="button" buttonType="dark"></Button>
      </Card>
    </div>
  );
};
