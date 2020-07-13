import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = (props) => {
  return (
    <>
      <NavBar {...props}/>
      <ApplicationViews />
    </>
  );
};

export default Kennel;