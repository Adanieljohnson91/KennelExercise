import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./Location/LocationCard";
import EmployeeCard from "./Employee/EmployeeCard";
import OwnerCard from "./Owner/OwnerCard";

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Route
      exact 
      path="/location"
      render={props =>{
        return <LocationCard/>}}
        />
        <Route exact path="/employee" render={props=><EmployeeCard/>}/>
        <Route exact path="/owner" render={props=><OwnerCard/>}/>
      
    </>
  );
};

export default ApplicationViews;