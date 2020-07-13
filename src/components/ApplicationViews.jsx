import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail"
import LocationList from "./Location/LocationList";
import EmployeeList from "./Employee/EmployeeList";
import OwnerList from "./Owner/OwnerList";
import OwnerDetail from "./Owner/OwnerDetail";
import Login from "../components/auth/Login";

const ApplicationViews = () => {
  const isLoggedIn = () => {
    console.log(sessionStorage.credentials, "creds");
    let result = sessionStorage.credentials === undefined ? false : true;
   return result;
}
  return (
    <>
    {/* HOME */}
      <Route exact path="/" render={props => isLoggedIn() ? <Home {...props}/>: <Redirect to="/login" />}/>
    {/* ANIMALS */}
      <Route exact path="/animals" render={props =>  isLoggedIn() ? <AnimalList {...props}/> : <Redirect to="/login" />}/>
      <Route path="/animals/:animalId(\d+)" render={(props) => isLoggedIn() ? <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} /> : <Redirect to="/login" />} />
     {/* LOCATION */}
      <Route exact path="/location" render={props => isLoggedIn() ? <LocationList {...props}/> :  <Redirect to="/login" />}/>
      {/* EMPLOYEE */}
      <Route exact path="/employee" render={props => isLoggedIn() ? <EmployeeList {...props}/> :  <Redirect to="/login" />} />
      {/* OWNER */}
      <Route exact path="/owner" render={props => isLoggedIn() ? <OwnerList {...props}/> :  <Redirect to="/login" />} />
      <Route exact path="/owners/:ownerId(\d+)" render={(props) => isLoggedIn() ? <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}{...props}/> :  <Redirect to="/login"/>} />
      {/* LOGIN */}
      <Route path="/login" render={props=> isLoggedIn() ? <Home {...props}/> : <Login {...props}/>} />


    </>
  );
    
};

export default ApplicationViews;