import React, { useState } from "react";
import { makeStyles, CssBaseline, Hidden, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import Drawers from "../components/Drawers";
import UserRegistration from "../components/UserRegistration";
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
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          className={classes.mainTitle}
        >
          Registro de Usuarios
        </Typography>
        <UserRegistration />
      </div>
    </div>
  );
};

export default Container;
