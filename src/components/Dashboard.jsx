import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import logoAllnexus from "../assets/static/allnexus.png";

const useStyles = makeStyles((theme) => ({
  tipography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h2" component="h1" className={classes.tipography}>
        Tablero de comando
        <Divider />
      </Typography>
      <img src={logoAllnexus} alt="logo empresa all nexus" />
    </Container>
  );
};
export default Dashboard;
