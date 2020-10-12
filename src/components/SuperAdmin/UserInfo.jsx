import React from "react";
import { Card, Typography, Grid, Box, Container } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.typography.h5 = {
  fontSize: "2.2rem",
  "@media (max-width:360px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    textAlign: "initial",
    padding: theme.spacing(3),
  },
  typography: {
    marginBottom: theme.spacing(2),
  },
  userInfo: {
    color: "#818181",
  },
  fixmargin: {
    marginRight: "20px",
  },
  box: {
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.root}>
          <Card raised className={classes.card}>
            <Box className={classes.box}>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                className={classes.tipography}
              >
                Información del usuario
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6}>
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                    className={classes.typography}
                  >
                    Nombre
                  </Typography>
                  <Typography
                    variant="h5"
                    color="initial"
                    className={classes.userInfo}
                  >
                    Lennin Geovany Ibarra Gonzáles
                  </Typography>
                </ThemeProvider>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Organización
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  Tierra de Fuego
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Tipo de Documento
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  Cédula
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Número
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  1307111206
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Correo Electrónico
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  gerencia@allnexus.com.co
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Celular
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  315 441 5598
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Estado
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  Activo
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Rol
                </Typography>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.userInfo}
                >
                  Administrador
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default UserInfo;
