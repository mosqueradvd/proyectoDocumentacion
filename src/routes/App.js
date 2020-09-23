import React from "react";
import Login from "../components/Login";
import RememberPassword from "../components/RememberPassword";
import Navbar from "../components/Navbar";
import ListSuperadmin from "../components/ListsSuperadmin";

const App = () => {
  return (
    <>
      <Navbar />
      <ListSuperadmin />
    </>
  );
};

export default App;
