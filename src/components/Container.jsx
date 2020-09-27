import React, { useState } from "react";
import { makeStyles, CssBaseline, Hidden } from "@material-ui/core";
import Navbar from "./Navbar";
import Drawers from "../components/Drawers";
import UserRegistration from "../components/UserRegistration";
import StyckyFooter from "./StickyFooter";
const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
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
        <UserRegistration />
      </div>
      <StyckyFooter />
    </div>
  );
};

export default Container;
