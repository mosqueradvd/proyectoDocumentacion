import React from "react";
import {
  CssBaseline,
  Container,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  footer: {
    padding: theme.spacing(2),
    margin: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright @"}
      <Link color="inherit" href="https://www.allnexus.com.co">
        All Nexus SAS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const StyckyFooter = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography>Todos los derechos reservados</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default StyckyFooter;
