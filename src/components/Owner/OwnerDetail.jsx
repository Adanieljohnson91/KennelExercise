import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import { Link } from "react-router-dom";


const OwnerDetail = (props)=>{
    const [owner, setOwner] = useState({name:"", dog:""});
    const getOwner = async () =>{
        let result = await OwnerManager.get(props.ownerId);
        setOwner({name:result.name, dog:result.dog});
    }
    useEffect(()=>{
        getOwner()
    }, [])
    return (
        <>
        <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Owner</h5>
      <p className="card-text">
        {owner.name}
      </p>
      <p className="card-text">
        Dog: {owner.dog}
      </p>
      <Link to={`/owner/`}>
  <button>Back</button>
     </Link>
    </div>
  </div>

</div> 
        </>
    )
}
export default OwnerDetail;