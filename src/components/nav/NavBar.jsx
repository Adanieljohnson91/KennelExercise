import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



const NavBar = (props) => {
  const logOut = (e) =>{
    sessionStorage.credentials = null;
    console.log("clicked", sessionStorage.credentials)
    sessionStorage.clear();
    console.log(props, "nav props")
   
  }
  return (
    <header>
    {sessionStorage.credentials === null ? "" : 
    <Link className="nav-link" to="/">
    <button onClick={logOut}>Log Out</button>
    </Link>
    }
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/location">
              Locations
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employee">
              Employees
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/owner">
              Owners
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;