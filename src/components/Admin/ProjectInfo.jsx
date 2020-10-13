import React from "react";
import {
  Card,
  Container,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import RadioButton from "../RadioButton";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

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
  container: {
    backgroundColor: "#F8F9FC",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
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
  checkWrapper: {
    width: "100%",
    margin: theme.spacing(1),
  },
  titles: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  downloadFile: {
    cursor: "pointer",
  },
  box: {
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
}));

const StyledTabletCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

function tableData(id, fileName, fileCategory, downloadFile) {
  return { id, fileName, fileCategory, downloadFile };
}

const rows = [
  tableData(1, "Formato MGA", "Formato MGA y Anexos", <CloudDownloadIcon />),
  tableData(2, "EBI", "Ficha EBI", <CloudDownloadIcon />),
  tableData(
    3,
    "Certificado de banco de proyectos",
    "Certificado de banco.",
    <CloudDownloadIcon />
  ),
  tableData(
    4,
    "Certificado de disponibilidad presupuestal",
    "Certificado de disponibilidad presupuestal. (Municipio, Depto, Nación)",
    <CloudDownloadIcon />
  ),
];

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
                component="h1"
                className={classes.tipography}
              >
                Información del Proyecto
              </Typography>
            </Box>
            <Typography variant="h4" color="primary" gutterBottom>
              Datos del Proyecto
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6}>
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h6"
                    color="primary"
                    gutterBottom
                    className={classes.typography}
                  >
                    Nombre del Proyecto
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    className={classes.userInfo}
                  >
                    Proyecto Panelero
                  </Typography>
                </ThemeProvider>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Tipo de Proyecto
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Productivo
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Ubicación del Proyecto
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Tangua
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Valor en letras del Proyecto
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Trescientos millones de Pesos
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Valor en Números del Proyecto
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  $ 300.000.000
                </Typography>
              </Grid>

              <div className={classes.titles}>
                <Typography variant="h5" color="primary" gutterBottom>
                  Datos del estructurador del proyecto
                </Typography>
              </div>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Nombre del estructurador
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Lennin Geovanny Ibarra González
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Teléfono del estructurador
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  314 441 5599
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Dirección del estructurador
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Administrador
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Email del estructurador
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  ing.lennin@gmail.com
                </Typography>
              </Grid>

              <div className={classes.titles}>
                <Typography variant="h5" color="primary" gutterBottom>
                  Datos de quien registró el proyecto
                </Typography>
              </div>
              <Typography variant="h6" color="initial">
                ¿Quien registró el proyecto es el dueño de esta cuenta?
              </Typography>

              <div className={classes.checkWrapper}>
                <RadioButton />
              </div>

              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Nombre de quien registra el proyecto
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  Lennin Geovanny Ibarra González
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Teléfono de quien registra
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  314 441 5599
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  className={classes.typography}
                >
                  Email de quien registra
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.userInfo}
                >
                  ing.lennin@gmail.com
                </Typography>
              </Grid>

              <div className={classes.titles}>
                <Typography variant="h4" color="primary" gutterBottom>
                  Archivos adjuntos del proyecto
                </Typography>
              </div>

              <TableContainer
                component={Paper}
                elevation={1}
                className={classes.tableContainer}
              >
                <Table className={classes.table} aria-label="docs">
                  <TableHead>
                    <TableRow>
                      <StyledTabletCell align="center">#</StyledTabletCell>
                      <StyledTabletCell align="center">
                        Nombre del Archivo
                      </StyledTabletCell>
                      <StyledTabletCell align="center">
                        Categoría del Archivo
                      </StyledTabletCell>
                      <StyledTabletCell align="center">
                        Descargar
                      </StyledTabletCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((files) => (
                      <TableRow key={files.id}>
                        <TableCell align="center">{files.id}</TableCell>
                        <TableCell align="center">{files.fileName}</TableCell>
                        <TableCell align="center">
                          {files.fileCategory}
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.downloadFile}
                        >
                          {files.downloadFile}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default UserInfo;
