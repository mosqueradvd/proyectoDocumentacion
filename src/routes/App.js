import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layaout from "../components/Layaout";
import PageLogin from "../Pages/PageLogin";
import RememberPassword from "../Pages/RememberPassword";
import AdminRoutes from "../routes/AdminRoutes";
import ClientRoutes from "../routes/ClientRoutes";
import OperatorRoutes from "../routes/OperatorRoutes";
import NotFound from "../components/NotFound";

const App = () => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/rememberpassword" component={RememberPassword} />
        {/* <AdminRoutes /> */}
        <ClientRoutes />
        <OperatorRoutes />
        <Route component={NotFound} />
      </Switch>
    </Layaout>
  </BrowserRouter>
);

export default App;
