import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layaout from "../components/Layaout";
import PageLogin from "../Pages/PageLogin";
import RememberPassword from "../Pages/RememberPassword";
import NotFound from "../components/NotFound";

//Super Admin
import PageDashboardSA from "../Pages/SuperAdmin/PageDashboardSA";
import PageCreateUserRegistrationSA from "../Pages/SuperAdmin/PageCreateUserRegistrationSA";
import PageListUserSA from "../Pages/SuperAdmin/PageListUserSA";
import PageListModifyUserSA from "../Pages/SuperAdmin/PageListModifyUserSA";
import PageListEnableDisableUserSA from "../Pages/SuperAdmin/PageListEnableDisableUserSA";

import PageDashboardAdm from "../Pages/Admin/PageDashboardAdm";
import PageCreateNewUserAdm from "../Pages/Admin/PageCreateNewUserAdm";
import PageListUserAdm from "../Pages/Admin/PageListUserAdm";
import PageListModifyUserAdm from "../Pages/Admin/PageListModifyUserAdm";
import PageListEnableDisableUserAdm from "../Pages/Admin/PageListEnableDisableUserAdm";
import PageCreateNewProjectAdm from "../Pages/Admin/PageCreateNewProjectAdm";
import PageRegisteredProjectAdm from "../Pages/Admin/PageListRegisteredProjectsAdm";
import PageListModifyProjectAdm from "../Pages/Admin/PageListModifyProjectAdm";
import PageListEnableDisabledProjectsAdm from "../Pages/Admin/PageListEnableDisabledProjectsAdm";
import PageListGenerateCertificateAdm from "../Pages/Admin/PageListGenerateCertificateAdm";
import PageUploadLetterheadAdm from "../Pages/Admin/PageUploadLetterheadAdm";

import PageListGenerateCertificateOperator from "../Pages/Operator/PageListGenerateCertificateOperator";

const App = () => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/rememberpassword" component={RememberPassword} />

        <Route exact path="/dashboardsa" component={PageDashboardSA} />
        <Route
          exact
          path="/createuserregistrationsa"
          component={PageCreateUserRegistrationSA}
        />
        <Route exact path="/listusersa" component={PageListUserSA} />
        <Route
          exact
          path="/listmodifyusersa"
          component={PageListModifyUserSA}
        />
        <Route
          exact
          path="/listenabledisableusersa"
          component={PageListEnableDisableUserSA}
        />

        <Route exact path="/dashboardadm" component={PageDashboardAdm} />
        <Route
          exact
          path="/createnewuseradm"
          component={PageCreateNewUserAdm}
        />
        <Route exact path="/listuseradm" component={PageListUserAdm} />
        <Route
          exact
          path="/listmodifyuseradm"
          component={PageListModifyUserAdm}
        />
        <Route
          exact
          path="/listenabledisableuseradm"
          component={PageListEnableDisableUserAdm}
        />
        <Route
          exact
          path="/createnewprojectadm"
          component={PageCreateNewProjectAdm}
        />
        <Route
          exact
          path="/listregisteredprojectsadm"
          component={PageRegisteredProjectAdm}
        />
        <Route
          exact
          path="/listmodifyprojectadm"
          component={PageListModifyProjectAdm}
        />
        <Route
          exact
          path="/listenabledisabledprojectsadm"
          component={PageListEnableDisabledProjectsAdm}
        />
        <Route
          exact
          path="/listgeneratecertificateadm"
          component={PageListGenerateCertificateAdm}
        />
        <Route
          exact
          path="/uploadletterheadadm"
          component={PageUploadLetterheadAdm}
        />
        <Route exact path="/listgeneratecertificateoperator" component={PageListGenerateCertificateOperator} />
        <Route component={NotFound} />
      </Switch>
    </Layaout>
  </BrowserRouter>
);

export default App;
