import React, { useState } from "react";

import { makeStyles, CssBaseline, Hidden, Typography } from "@material-ui/core";

import Navbar from "../components/Navbar";
import Drawers from "../components/Drawers";

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

const Layout = ({ children }) => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const actionOpen = () => {
    setOpen(!open);
  };

  const { history } = children;

  console.log(history);
  return (
    <div className="App">
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
