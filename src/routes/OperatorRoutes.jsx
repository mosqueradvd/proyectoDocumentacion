import React from "react";
import { Route } from "react-router-dom";
import PageListCertificates from "../Pages/Operator/PageListCertificates";

const ClientRoutes = () => {
  return (
    <>
      <Route
        exact
        path="/operator/certificates"
        component={PageListCertificates}
        
      />
    </>
  );
};

export default ClientRoutes;
