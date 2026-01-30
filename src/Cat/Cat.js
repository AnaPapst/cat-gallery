import { useState } from "react";
import "./Cat.scss";

import Card from "../Card/Card";
import Button from "../Button/Button";

const Cat = (props) => {
  const [show, toggleShow] = useState(false);

  const toggleDetails = () => {
    toggleShow(!show);
  };

  return (
    <Card>
      <div className="image_container">
        <img src={props.imageUrl} alt="photo of a cat" />
      </div>
      <h2>{props.name}</h2>

      <Button show={show} onToggle={toggleDetails} />

      {show && (
        <div className="hide-container">
          <p>
            <strong>Idade:</strong> {props.age}
          </p>
          <p>
            <strong>Cor:</strong> {props.color}
          </p>
          <p>
            <strong>Tutores:</strong> {props.oweners}
          </p>
          <p>
            <strong>Curiosidades:</strong> {props.curiosity}
          </p>
        </div>
      )}
    </Card>
  );
};

export default Cat;
