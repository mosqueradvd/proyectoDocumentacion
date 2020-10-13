import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Card,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
  Container,
  Button,
  CssBaseline,
  Box,
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
  formControl: {
    minWidth: "100%",
  },
  selectInput: {
    minWidth: 100,
    marginTop: "1.6em",
  },
  TextField: {
    marginTop: "1.5em",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  btnSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
  tipography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  box: {
    marginBottom: theme.spacing(5),
  },
}));

const mainDocType = {
  id: 1,
  name: "DNI",
};

const docTypes = [
  {
    id: 1,
    name: "Cédula de Ciudadanía",
  },
  {
    id: 2,
    name: "Tarjeta de Identidad",
  },
  {
    id: 3,
    name: "Cedula de Extranjería",
  },
];

const getDocIndex = (id, docTypes) => {
  for (let i = 0; i < docTypes.length; i++) {
    if (docTypes[i].id === id) {
      return i;
    }
  }
  return "";
};

const mainRol = {
  id: 1,
  name: "Admin One",
};

const roles = [
  {
    id: 1,
    name: "Admin One",
  },
  {
    id: 2,
    name: "Admin Two",
  },
  {
    id: 3,
    name: "Admin Three",
  },
];

const getRolIndex = (id, roles) => {
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].id === id) {
      return i;
    }
  }
  return "";
};

const ModUserInfo = () => {
  const classes = useStyles();
  const [doctype, setDoctype] = useState(mainDocType);
  const [rol, setRol] = useState(mainRol);

  const handleDocChange = (event) => {
    setDoctype(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <>
      <Container className={classes.container}>
        <CssBaseline />
        <div className={classes.root}>
          <Box className={classes.box}>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              className={classes.tipography}
            >
              Modificar información usuario
            </Typography>
          </Box>
          <Card raised className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  className={classes.TextField}
                  id="user-name"
                  label="Nombres y apellidos"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  className={classes.TextField}
                  id="user-company"
                  label="Organización"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Tipo de Documento</InputLabel>
                  <Select
                    id="doctype-input"
                    onChange={handleDocChange}
                    variant="outlined"
                    className={classes.selectInput}
                    value={docTypes[getDocIndex(doctype.id, docTypes)]}
                  >
                    {docTypes.map((doc) => {
                      return (
                        <MenuItem key={doc.id} value={doc}>
                          {doc.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  className={classes.TextField}
                  id="user-doc-number"
                  label="Número de Documento"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  className={classes.TextField}
                  id="user-mail"
                  label="Correo"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Rol</InputLabel>
                  <Select
                    id="user-rol"
                    variant="outlined"
                    onChange={handleRolChange}
                    className={classes.selectInput}
                    value={roles[getRolIndex(rol.id, roles)]}
                  >
                    {roles.map((rol) => {
                      return (
                        <MenuItem key={rol.id} value={rol}>
                          {rol.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  className={classes.TextField}
                  id="user-pass"
                  type="password"
                  label="Actualiza Contraseña"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}></Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className={classes.btnSubmit}
            >
              Guardar
            </Button>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ModUserInfo;
