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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  subtitle: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const Navbar = ({ actionOpen }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <MenuIcon
          aria-label="Menu"
          className={classes.menuButton}
          onClick={() => actionOpen()}
        />
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
  );
};

export default Navbar;
