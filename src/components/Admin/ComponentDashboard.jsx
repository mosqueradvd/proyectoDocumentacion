import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  makeStyles,
  Divider,
  Box,
} from "@material-ui/core";
import logoAllnexus from "../../assets/static/allnexus.png";

const useStyles = makeStyles((theme) => ({
  tipography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: theme.spacing(5),
  },
}));

const ComponentDashboard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Box className={classes.box}>
        <Typography
          variant="h4"
          color="primary"
          component="h1"
          className={classes.tipography}
        >
          Tablero de comando
        </Typography>
      </Box>
      <Divider />
      <img src={logoAllnexus} alt="logo empresa all nexus" />
    </Container>
  );
};
export default ComponentDashboard;
