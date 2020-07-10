import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import img from "../../pitcures/dog.svg"
const AnimalDetails = (props) =>{
    const [animal, setAnimal] = useState({name:"", breed:""});

    const getAnimal = async() =>{
        let result = await AnimalManager.get(props.animalId);
        setAnimal({id:result.id, name:result.name, breed:result.breed})
    }
    useEffect(()=>{
        getAnimal();
    }, []);
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={img} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
            <p>Breed: {animal.breed}</p>
          </div>
        </div>
      );
}
export default AnimalDetails;