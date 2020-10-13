import React, { useState } from "react";
import { makeStyles, CssBaseline, Hidden, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import Drawers from "../components/Drawers";
import DashboarSuperAdmin from "../components/SuperAdmin/DashboardSuperAdm";
import ListUserSuperAdmin from "./SuperAdmin/ListUserSuperAdmin";
import ModUserInfo from "./SuperAdmin/ModUserInfo";
import UserRegistration from "./SuperAdmin/UserRegistration";
import ListModifyUserSA from "./SuperAdmin/ListModifyUserSA";
import ListEnableDisableUserSA from "./SuperAdmin/ListEnableDisableUserSA";
import UserInfo from "./SuperAdmin/UserInfo";

import CreateNewProject from "./Admin/CreateNewProject";
import ProjectInfo from "./Admin/ProjectInfo";

import EnableDisableUserA from "./Admin/EnableDisableUserA";
import ModifyProjectA from "./Admin/ModifyProjectA";

import ListUserAdmin from "./Admin/ListUserAdmin";
import UploadLetterhead from "./Admin/UploadLetterhead";
import ListRegisteredProjects from "./Admin/ListRegisteredProjects";
import ListEnableDisableprojectsAdmin from "./Admin/ListEnableDisabledprojectsAdmin";
import ListGenerateCertificate from "./Admin/ListGenerateCertificate";
import ListGenerateCertificateOperator from "./Operator/ListGenerateCertificateOperator";
import ModifyProyectInformation from "./Admin/ModifyProyectInformation";
import RegisterUserAdmin from "./Admin/RegisterUserAdmin";
import ModifyUserInfoAdmin from "./Admin/ModifyUserInfoAdmin";
import DashboardAdmin from "./Admin/DashboardAdmin";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
  mainTitle: {
    marginBottom: "1.5em",
  },
}));

const Container = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const actionOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar actionOpen={actionOpen} />
      <Hidden xsDown>
        <Drawers variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Drawers variant="temporary" open={open} onClose={actionOpen} />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <DashboardAdmin />
        <ModifyProyectInformation />
        <DashboarSuperAdmin />
        <ListUserSuperAdmin />
        <UserRegistration />
        <ListModifyUserSA />
        <ListEnableDisableUserSA />
        <ModUserInfo />
        <CreateNewProject />
        <ProjectInfo />

        <EnableDisableUserA />
        <ModifyProjectA />

        <UserInfo />

        <ListUserAdmin />
        <UploadLetterhead />
        <ListRegisteredProjects />
        <ListEnableDisableprojectsAdmin />
        <ListGenerateCertificate />
        <ListGenerateCertificateOperator />
        <RegisterUserAdmin />
        <ModifyUserInfoAdmin />
      </div>
    </div>
  );
};

export default Container;
