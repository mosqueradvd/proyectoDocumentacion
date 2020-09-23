import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subtitle: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <MenuIcon aria-label="Menu" className={classes.menuButton} />
          <Typography variant="h6" color="initial" className={classes.title}>
            Banco de proyectos
          </Typography>
          <Typography
            variant="subtitle2"
            color="initial"
            className={classes.subtitle}
          >
            Nombre de usuario
          </Typography>
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
