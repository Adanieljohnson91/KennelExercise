import React from "react";
import dog from "../../pitcures/dog.svg";
import "./Animal.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={dog} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
  <p>{props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;