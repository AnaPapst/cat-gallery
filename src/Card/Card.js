import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__container">{props.children}</div>
    </div>
  );
};

export default Card;
