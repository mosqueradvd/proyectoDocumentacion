import React from "react";
import { Route } from "react-router-dom";
//Super Admin
import PageDashboard from "../Pages/Admin/PageDashboard";
import PageNewOrganization from "../Pages/Admin/PageNewOrganization";
import PageListUsers from "../Pages/Admin/PageListUsers";
import PageListModifyUsers from "../Pages/Admin/PageListModifyUsers";
import PageListEnableDisableUsers from "../Pages/Admin/PageListEnableDisableUsers";
import PageUserInfo from "../Pages/Admin/PageUserInfo";
import PageModifyUser from "../Pages/Admin/PageModifyUser";
import PageListOrganizations from "../Pages/Admin/PageListOrganizations";
import PageModifyOrganization from "../Pages/Admin/PageModifyOrganization";

const AdminRoutes = () => {
  return (
    <>
      <Route exact path="/admin/dashboard" component={PageDashboard} />
      <Route
        exact
        path="/admin/organizations/new"
        component={PageNewOrganization}
      />
      <Route
        exact
        path="/admin/organizations/list/users"
        component={PageListUsers}
      />
      <Route
        exact
        path="/admin/organizations/list/users/:id"
        component={PageUserInfo}
      />
      <Route
        exact
        path="/admin/organizations/list"
        component={PageListOrganizations}
      />
      <Route
        exact
        path="/admin/organizations/list/545"
        component={PageModifyOrganization}
      />

      <Route
        exact
        path="/admin/organizations/modify/users"
        component={PageListModifyUsers}
      />
      <Route
        exact
        path="/admin/organizations/modify/users/:id"
        component={PageModifyUser}
      />
      <Route
        exact
        path="/admin/organizations/enabledisable/users"
        component={PageListEnableDisableUsers}
      />
    </>
  );
};

export default AdminRoutes;
