import React, { useState, useEffect } from 'react';
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";
import OwnerForm from './OwnerForm';




const OwnerList = ()=>{
    const [owners, setOwners] = useState([]);
    const getOwners = async () =>{
        setOwners(await OwnerManager.getAll());
    }
    const deleteOwner = async (id)=>{
        await OwnerManager.delete(id)
        setOwners(await OwnerManager.getAll());
    }
    const addOwner = async (data) =>{
        console.log(data);
        await OwnerManager.add(data);
        setOwners(await OwnerManager.getAll());
    }
    const updateOwner = async (data, id) =>{
        await OwnerManager.editOwner(data, id);
        setOwners(await OwnerManager.getAll());
    }
    useEffect(()=>{
            getOwners();
            console.log("useEffect") 
    },[]);
    return(
        <>
        <OwnerForm add={addOwner}/>
        {owners.map(owner =>{
            return <OwnerCard key={owner.id} owner={owner} deleteO={deleteOwner} update={updateOwner}/>
        })}
        </>
    )



}
export default OwnerList;