import React, { useState } from "react";
import {
  TextField,
  Card,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Menu,
  Container,
  Box,
  Typography,
  Button,
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
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: "2.5em",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: theme.spacing(2),
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

const mainDept = {
  id: 1,
  name: "Department",
};

const departments = [
  {
    id: 1,
    name: "Nariño",
  },
  {
    id: 2,
    name: "Nariño",
  },
  {
    id: 3,
    name: "Nariño",
  },
];

const getDepIndex = (id, departments) => {
  for (let i = 0; i < departments.length; i++) {
    if (departments[i].id === id) {
      return i;
    }
  }
  return "";
};

const mainTown = {
  id: 1,
  name: "Department",
};

const towns = [
  {
    id: 1,
    name: "Tangua",
  },
  {
    id: 2,
    name: "Tangua",
  },
  {
    id: 3,
    name: "Tangua",
  },
];

const getTownIndex = (id, towns) => {
  for (let i = 0; i < towns.length; i++) {
    if (departments[i].id === id) {
      return i;
    }
  }
  return "";
};

const UserRegistration = () => {
  const classes = useStyles();
  const [dept, setDept] = useState(mainDept);
  const [doctype, setDoctype] = useState(mainDocType);
  const [town, setTown] = useState(mainTown);

  const handleDeptChange = (event) => {
    setDept(event.target.value);
  };

  const handleDocChange = (event) => {
    setDoctype(event.target.value);
  };

  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Box display="flex" justifyContent="center" className={classes.box}>
        <Typography variant="h4" color="primary">
          Registrar organización
        </Typography>
      </Box>

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
                <Select
                  id="doctype-input"
                  variant="outlined"
                  onChange={handleDocChange}
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
                <Select
                  id="company-dept"
                  variant="outlined"
                  value={departments[getDepIndex(dept.id, departments)]}
                  onChange={handleDeptChange}
                  className={classes.selectInput}
                >
                  {departments.map((dept) => {
                    return (
                      <MenuItem key={dept.id} value={dept}>
                        {dept.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Municipio</InputLabel>
                <Select
                  id="company-town"
                  variant="outlined"
                  value={towns[getTownIndex(town.id, towns)]}
                  onChange={handleTownChange}
                  className={classes.selectInput}
                >
                  {towns.map((town) => {
                    return (
                      <MenuItem key={town.id} value={town}>
                        {town.name}
                      </MenuItem>
                    );
                  })}
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
                <InputLabel>Tipo de Documento</InputLabel>
                <Select
                  id="doctype-input"
                  variant="outlined"
                  onChange={handleDocChange}
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
            <Button color="primary" variant="contained" fullWidth>
              guardar
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default UserRegistration;
