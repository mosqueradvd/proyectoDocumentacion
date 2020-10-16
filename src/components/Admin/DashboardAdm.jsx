import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Pagination from "../Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
    marginLeft: theme.spacing(4),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    marginBottom: theme.spacing(5),
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const DashboardAdm = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h4" color="primary" component="h1">
          Proyectos registrados
        </Typography>
      </Box>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Proyecto Panelero
            </Typography>
            <Typography variant="h6" component="h2">
              Agroindustrial
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              $ 300.000.000
            </Typography>
            <Typography variant="body2" component="p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Proyecto Panelero
            </Typography>
            <Typography variant="h6" component="h2">
              Agroindustrial
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              $ 300.000.000
            </Typography>
            <Typography variant="body2" component="p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Proyecto Panelero
            </Typography>
            <Typography variant="h6" component="h2">
              Agroindustrial
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              $ 300.000.000
            </Typography>
            <Typography variant="body2" component="p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
      </div>
      <Box className={classes.box}>
        <Pagination />
      </Box>
    </Container>
  );
};

export default DashboardAdm;
