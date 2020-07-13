import React, { useState, useEffect } from 'react';
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = () =>{
    //Use State is setting default
    const [locations, setLocation] = useState([]);
    const getLocations = async () =>{
        setLocation(await LocationManager.getAll());
    }
    useEffect(()=>{
        getLocations();
    }, []);
    return (
        <>
        <div>
            {locations.map(location =>{
                return <LocationCard key={location.id} location={location}/>
            })}
        </div>
        </>
    )
}
export default LocationList;