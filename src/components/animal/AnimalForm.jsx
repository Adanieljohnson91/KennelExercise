import React, { useState } from 'react';

let animalTemp = {name:"", breed:""}

const AnimalForm = (props) =>{
    const [animal, setAnimal] = useState(animalTemp)
    const [file, setFile] = useState({file:null})
    const onChange = (e)=>{
        let target = e.target;
        let {name, value} = target;
        setAnimal({...animal, [name]:value})
    }
    const handleChange = (e) =>{
        setFile({file:URL.createObjectURL(e.target.files[0])})
    }
    const onClick = (e) =>{
        e.preventDefault();
        console.log(animal, "animal")
        props.add(animal, file);
        setAnimal(animalTemp);

    }
    
    return (
        <>
        <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Animal Name</label>
    <input
      type="text"
      className="form-control"
      id="animal-name"
      name="name"
      onChange={onChange}
      value={animal.name}
      placeholder="Animals Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Breed</label>
    <input
      type="text"
      className="form-control"
      name="breed"
      id="animal-dog"
      value={animal.breed}
      onChange={onChange}
      placeholder="Dogs Name"
    />
     <div>
        <input type="file" onChange={handleChange}/>
        <img src={file.file}/>
      </div>
  </div>
  <button type="button" onClick={onClick}>Add animal</button>
</form>

        </>
    )
}
export default AnimalForm;