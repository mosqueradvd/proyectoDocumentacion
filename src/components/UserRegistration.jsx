import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  Paper,
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
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    width: "100%",
  },
  formControl: {
    minWidth: "100%",
  },
  selectInput: {
    minWidth: 100,
  },
  titles: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  TextField: {
    margin: "normal",
  },
}));

const UserRegistration = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
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
                id="outlined-basic"
                label="Organización"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Representante Legal"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Número de Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
              />
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
                id="outlined-basic"
                label="NIT o Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de Documento</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Cédula</MenuItem>
                  <MenuItem>T.I</MenuItem>
                  <MenuItem>Cédula de Extranjería</MenuItem>
                </Select>
              </FormControl>
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

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                placeholder="El admin es el representante legal"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Nombre del Administrador"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Número de Documento"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel variant="standard">Cédula</InputLabel>
                <Select className={classes.selectInput}>
                  <MenuItem>Cédula</MenuItem>
                  <MenuItem>T.I</MenuItem>
                  <MenuItem>Cédula de Extranjería</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Número de Celular"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Contraseña"
                id="standard-password-input"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Button color="primary" variant="contained" fullWidth>
              guardar
            </Button>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default UserRegistration;
