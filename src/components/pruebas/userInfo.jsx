import React from "react";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Card,
  Grid,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  box: {
    marginBottom: theme.spacing(5),
  },
  tipography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  btnSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const user = {
  id: 1,
  name: "Lennin Geovanny Ibarra Gonzalez",
  organizacion: "Montaña de Fuego",
  tipoDocumento: "Cedula de ciudadanía",
  numeroDocumento: "3154415599",
  email: "gerencia@allnexus.com.co",
  celular: "3154415599",
  estado: "Activo",
  rol: "Administrador",
};

const UserInfo = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.root}>
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
        <Card raised className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-user-name">
                  Nombres y apellidos
                </InputLabel>
                <Input id="user-name" value={user.name} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-organizacion">
                  Organización
                </InputLabel>
                <Input id="organizacion" value={user.organizacion} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-tipoDocumento">
                  Tipo de documento
                </InputLabel>
                <Input id="tipoDocumento" value={user.tipoDocumento} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-numeroDocumento">
                  Número de documento
                </InputLabel>
                <Input id="numeroDocumento" value={user.numeroDocumento} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-email">
                  Correo electrónico
                </InputLabel>
                <Input id="email" value={user.email} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-celular">Celular</InputLabel>
                <Input id="celular" value="3154415599" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-estado">Estado</InputLabel>
                <Input id="estado" value={user.estado} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl disabled>
                <InputLabel htmlFor="component-rol">Rol</InputLabel>
                <Input id="rol" value={user.rol} />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.btnSubmit}
          >
            Cerrar
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default UserInfo;
