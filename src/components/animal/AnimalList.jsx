import React, { useEffect, useState } from 'react';
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from './AnimalCard';



const AnimalList = ()=>{
    const [animals, setAnimals] = useState([])
     const getAnimals = async () =>{
        setAnimals(await AnimalManager.getAll());   
    }

    useEffect(()=>{
    getAnimals()
}, []);

return (
    <div className="container-cards">
     {animals.map(animal => <AnimalCard name={animal.name} breed={animal.breed}/>)}
    </div>
  );

}
export default AnimalList;

