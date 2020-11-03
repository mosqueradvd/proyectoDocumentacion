import {
  Typography,
  Container,
  Box,
  Card,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Paper,
  TableRow,
  Table,
  TableCell,
  TableHead,
  TableBody,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import RadioButton from "../RadioButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    textAling: "initial",
  },
  box: {
    marginBottom: theme.spacing(2),
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
  },
  formControl: {
    minWidth: "100%",
    marginTop: theme.spacing(1),
  },
  titles: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  checkWrapper: {
    width: "100%",
    margin: theme.spacing(2),
    display: "flex",
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 700,
    borderRadius: "9px",
  },
  selectInput: {
    minWidth: 100,
  },
  downloadFile: {
    cursor: "pointer",
  },
}));

const StyledTabletCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

function tableData(id, fileName, fileCategory, downloadFile, deleteFile) {
  return { id, fileName, fileCategory, downloadFile, deleteFile };
}

const rows = [
  tableData(
    1,
    "Formato MGA",
    "Formato MGA y Anexos",
    <CloudDownloadIcon />,
    <DeleteForeverIcon />
  ),
  tableData(
    2,
    "EBI",
    "Ficha EBI",
    <CloudDownloadIcon />,
    <DeleteForeverIcon />
  ),
  tableData(
    3,
    "Certificado de banco de proyectos",
    "Certificado de banco.",
    <CloudDownloadIcon />,
    <DeleteForeverIcon />
  ),
  tableData(
    4,
    "Certificado de disponibilidad presupuestal",
    "Certificado de disponibilidad presupuestal. (Municipio, Depto, Nación)",
    <CloudDownloadIcon />,
    <DeleteForeverIcon />
  ),
];

const projectInfo = {
  projectName: "Cultivo de café",
  projectType: "Desarrollo",
  projectUbication: "Consaca",
  valueInLetter: "Trescientos millones",
  valueInNumber: "300.000.000",
  nameEstructure: "Ciro Meneses",
  telephoneEstructure: "3202302121",
  directionEstructure: "calle 25 36 98 Tamasagra",
  emailEstructure: "ciro@abogado.com.co",
  ownerOfTheAccount: "Si",
  nameRegister: "Ciro Meneses",
  telephoneRegister: "3202302121",
  directionRegister: "calle 25 36 98 Tamasagra",
  emailRegister: "ciro@abogado.com.co",
};

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

const ModifyProyectInformation = () => {
  const classes = useStyles();
  const [projectype, setProjecttype] = useState(mainProjectType);

  const handleProjChange = (event) => {
    setProjecttype(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Box display="flex" justifyContent="center" className={classes.box}>
        <Typography variant="h4" color="primary">
          Modificar información del proyecto
        </Typography>
      </Box>
      <div className={classes.root}>
        <Card className={classes.card} raised>
          <Box display="flex" justifyContent="right" className={classes.box}>
            <Typography variant="h6" color="primary">
              Datos del proyecto
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="project-name-modify"
                label="Nombre del proyecto"
                className={classes.textField}
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.projectName}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de proyecto</InputLabel>
                <Select
                  id="projtype-input-modify"
                  className={classes.selectInput}
                  onChange={handleProjChange}
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
                id="project-location-modify"
                label="Ubicación del proyecto"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.projectUbication}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-amount-modify"
                label="Valor en letras del proyecto"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.valueInLetter}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-value-modify"
                label="Valor en números del proyecto"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.valueInNumber}
              />
            </Grid>
            <div className={classes.titles}>
              <Box
                display="flex"
                justifyContent="right"
                className={classes.box}
              >
                <Typography
                  color="primary"
                  component="h1"
                  variant="h5"
                  gutterBottom
                >
                  Datos del estructurador del proyecto
                </Typography>
              </Box>
            </div>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="project-admin-name-modify"
                label="Nombre del estructurador del proyecto"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.nameEstructure}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-phone-modify"
                label="Teléfono del estructurador"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.telephoneEstructure}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-address-modify"
                label="Dirección del estructurador"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.directionEstructure}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="structurator-email-modify"
                label="Email del estructurador"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.emailEstructure}
              />
            </Grid>
            <div className={classes.titles}>
              <Typography
                color="primary"
                component="h1"
                variant="h5"
                gutterBottom
                align="left"
              >
                Datos de quien registra el Proyecto
              </Typography>
              <Typography variant="body1" color="initial" align="left">
                ¿Quien registra el proyecto es el dueño de esta cuenta?
              </Typography>
            </div>
            <div className={classes.checkWrapper}>
              <RadioButton />
            </div>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrators-name-modify"
                label="Nombre de quien registra el proyecto"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.nameRegister}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrators-phone-modify"
                label="Teléfono de quien registra"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.telephoneRegister}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrants-address-modify"
                label="Dirección de quien registra"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.directionRegister}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className={classes.TextField}
                id="registrants-email-modify"
                label="Email de quien registra"
                variant="outlined"
                fullWidth
                defaultValue={projectInfo.emailRegister}
              />
            </Grid>
            <div className={classes.titles}>
              <Box display="flex" justifyContent="left" className={classes.box}>
                <Typography
                  color="primary"
                  component="h1"
                  variant="h5"
                  gutterBottom
                >
                  Archivos adjuntos del Proyecto
                </Typography>
              </Box>
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
                  <StyledTabletCell align="center">#</StyledTabletCell>
                  <StyledTabletCell align="center">
                    Nombre del Archivo
                  </StyledTabletCell>
                  <StyledTabletCell align="center">
                    Categoría del Archivo
                  </StyledTabletCell>
                  <StyledTabletCell align="center">Descargar</StyledTabletCell>
                  <StyledTabletCell align="center">Eliminar</StyledTabletCell>
                </TableHead>
                <TableBody>
                  {rows.map((files) => (
                    <TableRow key={files.id}>
                      <TableCell align="center">{files.id}</TableCell>
                      <TableCell align="center">{files.fileName}</TableCell>
                      <TableCell align="center">{files.fileCategory}</TableCell>
                      <TableCell
                        align="center"
                        className={classes.downloadFile}
                      >
                        {files.downloadFile}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.downloadFile}
                      >
                        {files.deleteFile}
                      </TableCell>
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

export default ModifyProyectInformation;
