import React, { useState } from "react";
import { Link } from "react-router-dom"
import dog from "../../pitcures/dog.svg";
import "./Animal.css";

const AnimalCard = (props) => {
  let animalTemp = { name: props.animal.name, breed: props.animal.breed }
  const [edit, setEdit] = useState(false);
  const [animal, setAnimal] = useState(animalTemp);
  const deleteAnimal = () => {
    props.deleteAnimal(props.animal.id);
  }
  const editButton = () => {
    setEdit(!edit);
  }
  const saveEdit = () => {
    props.editAnimal(animal, props.animal.id);
    setEdit(!edit);
  }
  const onChange = (e) => {
    let target = e.target;
    let { name, value } = target;
    setAnimal((prevState) => {
      return {
        ...prevState, [name]: value
      }
    })

  }
  return (
    <>
      {!edit ? <div className="card">
        <div className="card-content">
          <picture>
            <img src={props.animal.file.file } alt="My Dog" />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.animal.name}</span>
          </h3>
          <p>{props.animal.breed}</p>
        </div>
        <button type="button" onClick={editButton}>Edit</button>
        <button type="button" onClick={deleteAnimal}>Discharge</button>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
      </div> :
        <div>
          <div className="card-content">
            <picture>
              <img src={dog} alt="My Dog" />
            </picture>
            <h3>
              Name:
        </h3>
            <input onChange={onChange} name="name" value={animal.name} type="text" />
            <h3>Breed</h3>
            <input onChange={onChange} name="breed" value={animal.breed} type="text" />
          </div>
          <button type="button" onClick={saveEdit}>Save</button>
        </div>
      }
    </>
  );
};

export default AnimalCard;