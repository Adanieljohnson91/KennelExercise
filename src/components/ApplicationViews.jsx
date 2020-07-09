import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./Location/LocationList";
import EmployeeList from "./Employee/EmployeeList";
import OwnerList from "./Owner/OwnerList";

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
          return <AnimalList props={props}/>;
        }}
      />
      <Route
      exact 
      path="/location"
      render={props =>{
        return <LocationList/>}}
        />
        <Route exact path="/employee" render={props=><EmployeeList/>}/>
        <Route exact path="/owner" render={props=><OwnerList/>}/>
        
    </>
  );
};

export default ApplicationViews;