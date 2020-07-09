import React, { useState } from 'react';

let ownerTemp = {name:"", dog:""}

const OwnerForm = (props) =>{
    const [owner, setOwner] = useState(ownerTemp)
    const onChange = (e)=>{
        let target = e.target;
        let {name, value} = target;
        setOwner({...owner, [name]:value})
    }
    const onClick = (e) =>{
        e.preventDefault();
        console.log(owner, "owner")
        props.add(owner);
        setOwner(ownerTemp);

    }
    return (
        <>
        <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Owner Name</label>
    <input
      type="text"
      className="form-control"
      id="owner-name"
      name="name"
      onChange={onChange}
      value={owner.name}
      placeholder="Owners Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Owner Dog's Name</label>
    <input
      type="text"
      className="form-control"
      name="dog"
      id="owner-dog"
      value={owner.dog}
      onChange={onChange}
      placeholder="Dogs Name"
    />
  </div>
  <button type="button" onClick={onClick}>Add Owner</button>
</form>

        </>
    )
}
export default OwnerForm;