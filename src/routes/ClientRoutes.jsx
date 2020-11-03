import React from "react";
import { Route } from "react-router-dom";
//Cliente
import PageClientDashboard from "../Pages/Client/PageClientDashboard";
import PageUserNew from "../Pages/Client/PageUserNew";
import PageListUsers from "../Pages/Client/PageListUsers;";
import PageListModifyUsers from "../Pages/Client/PageListModifyUsers";
import PageListEnableDisableUsers from "../Pages/Client/PageListEnableDisableUsers";
import PageNewProject from "../Pages/Client/PageNewProject";
import PageListProjects from "../Pages/Client/PageListProjects";
import PageListModifyProjects from "../Pages/Client/PageListModifyProjects";
import PageListEnableDisabledProjects from "../Pages/Client/PageListEnableDisabledProjects";
import PageListGenerateCertificate from "../Pages/Client/PageListGenerateCertificate";
import PageUploadLetterhead from "../Pages/Client/PageUploadLetterhead";

const ClientRoutes = () => {
  return (
    <>
      {/*usuarios */}
      <Route exact path="/client/dashboard" component={PageClientDashboard} />
      <Route exact path="/client/user/new" component={PageUserNew} />
      <Route exact path="/client/user/list" component={PageListUsers} />
      <Route exact path="/client/user/modify" component={PageListModifyUsers} />
      <Route
        exact
        path="/client/user/enabledidable"
        component={PageListEnableDisableUsers}
      />
      {/* proyectos */}
      <Route exact path="/client/project/new" component={PageNewProject} />
      <Route exact path="/client/project/list" component={PageListProjects} />
      <Route
        exact
        path="/client/project/modify"
        component={PageListModifyProjects}
      />
      <Route
        exact
        path="/client/project/enabledisable"
        component={PageListEnableDisabledProjects}
      />
      <Route
        exact
        path="/client/project/certificate"
        component={PageListGenerateCertificate}
      />
      <Route
        exact
        path="/client/uploadletterhead"
        component={PageUploadLetterhead}
      />
    </>
  );
};

export default ClientRoutes;
