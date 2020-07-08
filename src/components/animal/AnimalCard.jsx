import React from "react";
import dog from "../../pitcures/dog.svg"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={dog} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.name}</span>
        </h3>
  <p>{props.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;