import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  Card,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "initial",
  },
  form: {
    width: "100%",
  },
  formControl: {
    minWidth: "100%",
    marginTop: theme.spacing(1),
  },
  selectInput: {
    minWidth: 100,
  },
  titles: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  adminData: {
    display: "flex",
    flexGrow: 1,
  },
  adminButton: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },
  TextField: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: "2.5em",
    display: "flex",
    justifyContent: "center",
  },
}));

const UserRegistration = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Card raised className={classes.card}>
          <Grid container spacing={2}>
            <div className={classes.titles}>
              <Typography
                color="primary"
                component="h1"
                variant="h5"
                gutterBottom
              >
                Datos de la Organización
              </Typography>
            </div>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="company-name"
                label="Nombre de la Organización"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="dni"
                label="NIT o Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="legal-manager"
                label="Nombre del Representante Legal"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de Documento</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Cédula de Ciudadanía</MenuItem>
                  <MenuItem>T.I</MenuItem>
                  <MenuItem>Cédula de Extranjería</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="dni-number"
                label="Número de Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="cel-number"
                label="Número de Celular"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="email"
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Departamento</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Nariño</MenuItem>
                  <MenuItem>Nariño</MenuItem>
                  <MenuItem>Nariño</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Municipio</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Tangua</MenuItem>
                  <MenuItem>Tangua</MenuItem>
                  <MenuItem>Tangua</MenuItem>
                  <MenuItem>Tangua</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="safeguard-townhall"
                label="Resguardo y/o Cabildo"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.adminData}>
                <div className={classes.titles}>
                  <Typography
                    color="primary"
                    component="h1"
                    variant="h5"
                    gutterBottom
                  >
                    Datos del Administrador
                  </Typography>
                </div>
              </div>
            </Grid>
            <div className={classes.adminButton}>
              <Button color="default" variant="outlined" size="small" fullWidth>
                El administrador es el representante legal
              </Button>
            </div>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="admin-name"
                label="Nombre del Administrador"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel variant="standard">Tipo de Documento</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Cédula</MenuItem>
                  <MenuItem>T.I</MenuItem>
                  <MenuItem>Cédula de Extranjería</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="num-doc-edited"
                label="Número de Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="num-cel-edited"
                label="Número de Celular"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="email-edited"
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                label="Contraseña"
                id="standard-password-input"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <div className={classes.button}>
            <Button color="primary" variant="contained" size="medium">
              guardar
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserRegistration;
