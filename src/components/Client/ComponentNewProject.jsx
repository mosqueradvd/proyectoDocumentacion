import React, { useState } from "react";
import {
  TextField,
  Card,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
// import Checkbox from "../Checkbox";
import RadioButton from "../RadioButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
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
  checkWrapper: {
    width: "100%",
    margin: theme.spacing(2),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 700,
    borderRadius: "9px",
  },
}));

const StyledTabletCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

function tableData(id, fileName, fileCategory) {
  return { id, fileName, fileCategory };
}

const rows = [
  tableData(1, "Formato MGA", "Formato MGA y Anexos"),
  tableData(2, "EBI", "Ficha EBI"),
  tableData(3, "Certificado de banco de proyectos", "Certificado de banco."),
  tableData(
    4,
    "Certificado de disponibilidad presupuestal",
    "Certificado de disponibilidad presupuestal. (Municipio, Depto, Nación)"
  ),
];

const mainProjectType = {
  id: 1,
  name: "DNI",
};

const projectTypes = [
  {
    id: 1,
    name: "Infraestructura",
  },
  {
    id: 2,
    name: "Desarrollo",
  },
  {
    id: 3,
    name: "Construcción",
  },
];

const getProjIndex = (id, projecTypes) => {
  for (let i = 0; i < projectTypes.length; i++) {
    if (projectTypes[i].id === id) {
      return i;
    }
  }
  return "";
};

const ComponentNewProject = () => {
  const classes = useStyles();
  const [projectype, setProjecttype] = useState(mainProjectType);

  const handleProjChange = (event) => {
    setProjecttype(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Box display="flex" justifyContent="center" className={classes.box}>
        <Typography variant="h4" color="primary">
          Crear nuevo proyecto
        </Typography>
      </Box>

      <div className={classes.root}>
        <Card raised className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-name"
                label="Nombre del Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de Proyecto</InputLabel>
                <Select
                  id="projtype-input"
                  onChange={handleProjChange}
                  className={classes.selectInput}
                  variant="outlined"
                  value={
                    projectTypes[getProjIndex(projectype.id, projectTypes)]
                  }
                >
                  {projectTypes.map((proj) => {
                    return (
                      <MenuItem key={proj.id} value={proj}>
                        {proj.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-location"
                label="Ubicación del Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-amount"
                label="Valor en Letras del Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-value"
                label="Valor en Números del Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <div className={classes.titles}>
              <Typography
                color="primary"
                component="h1"
                variant="h5"
                gutterBottom
              >
                Datos del Estructurador del Proyecto
              </Typography>
            </div>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-admin-name"
                label="Nombre del Estructurador del Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-phone"
                label="Teléfono del Estructurador"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-address"
                label="Dirección del Estructurador"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-email"
                label="Email del Estructurador"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <div className={classes.titles}>
              <Typography
                color="primary"
                component="h1"
                variant="h5"
                gutterBottom
              >
                Datos de quien registra el Proyecto
              </Typography>
              <Typography variant="body1" color="initial">
                ¿Quien registra el proyecto es el dueño de esta cuenta?
              </Typography>
            </div>
            <div className={classes.checkWrapper}>
              <RadioButton />
            </div>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrators-name"
                label="Nombre de quien registra el Proyecto"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrators-phone"
                label="Teléfono de quien registra"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrants-address"
                label="Dirección de quien registra"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrants-email"
                label="Email de quien registra"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <div className={classes.titles}>
              <Typography
                color="primary"
                component="h1"
                variant="h5"
                gutterBottom
              >
                Archivos adjuntos del Proyecto
              </Typography>
            </div>
            <div className={classes.button}>
              <Button
                color="primary"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                adjuntar un documento
              </Button>
            </div>

            <TableContainer
              component={Paper}
              elevation={1}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="docs">
                <TableHead>
                  <TableRow>
                    <StyledTabletCell align="center">
                      Nombre del Archivo
                    </StyledTabletCell>
                    <StyledTabletCell align="center">
                      Categoría del Archivo
                    </StyledTabletCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((files) => (
                    <TableRow key={files.id}>
                      <TableCell align="center">{files.fileName}</TableCell>
                      <TableCell align="center">{files.fileCategory}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className={classes.titles}>
              <div className={classes.button}>
                <Button color="primary" variant="contained" fullWidth>
                  guardar
                </Button>
              </div>
            </div>
          </Grid>
        </Card>
      </div>
    </Container>
  );
};

export default ComponentNewProject;
