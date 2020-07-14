import React, { useEffect, useState } from 'react';
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from './AnimalCard';
import AnimalForm from './AnimalForm';
import RequireAuth from "../auth/RequireAuth";



const AnimalList = ()=>{
    const [animals, setAnimals] = useState([])
     const getAnimals = async () =>{
        setAnimals(await AnimalManager.getAll());   
    }

    useEffect(()=>{
    getAnimals()
}, []);
const addAnimal = async (data, file)=>{
    data.file = file
    await AnimalManager.add(data);
    getAnimals();
}
const deleteAnimal = async (id) =>{
    await AnimalManager.delete(id);
    getAnimals();
}
const editAnimal = async (data, id) =>{
    await AnimalManager.edit(data, id);
    getAnimals();
}


return (
    <>
    <AnimalForm add={addAnimal}/>
    <div className="container-cards">
     {animals.map(animal => <AnimalCard key={animal.id}animal={animal} deleteAnimal={deleteAnimal} editAnimal={editAnimal}/>)}
    </div>
    </>
  );

}

export default RequireAuth(AnimalList);

