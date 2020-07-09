import React, { useState} from 'react';

const OwnerCard = (props) =>{
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState({name:props.owner.name, dog:props.owner.dog})
  const deleteCard = () =>{
    props.deleteO(props.owner.id)
    console.log(props.owner.id);
  }
  const editButton = (e) =>{
    e.preventDefault();
    setEdit(!edit);
  }
  const saveButton=(e)=>{
    e.preventDefault();
    props.update(current, props.owner.id);
    setEdit(!edit)
  }
  const onChange = (e) =>{
    let target = e.target;
    let {name, value} = target;
    setCurrent({...current, [name]:value})
  }
    return (
        <>
       {!edit ? <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Owner</h5>
      <p className="card-text">
        {current.name}
      </p>
      <p className="card-text">
        Dog: {current.dog}
      </p>
      <button type="button" onClick={deleteCard}>Delete</button>
      <button type="button" onClick={editButton}>Edit</button>
    </div>
  </div>

</div> 
:
<div className="card">
<img className="card-img-top" src="..." alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">Edit Owner</h5>
  <h3>Owner Name</h3>
  <input className="card-text" value={current.name} name="name" onChange={onChange}>
    
  </input>
  <h3>Dog Name</h3>
  <input className="card-text" value={current.dog} name="dog" onChange={onChange}>
  </input>
  <button type="button" onClick={deleteCard}>Delete</button>
  <button type="button" onClick={saveButton}>Save</button>
</div>
</div>

}
</>
        
    )
}
export default OwnerCard;