import React from "react";
import RequireAuth from "../auth/RequireAuth";

const Home = () => {
  return (
    <address>
      Visit Us at the Nashville North Location
      <br />
      500 Puppy Way
    </address>
  );
};

export default RequireAuth(Home);