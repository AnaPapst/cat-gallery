import "./Button.scss";

const Button = (props) => {
  console.log(props);
  return (
    <button onClick={props.onToggle}>
      {props.show ? "Hide Details" : "Show Details"}
    </button>
  );
};

export default Button;
