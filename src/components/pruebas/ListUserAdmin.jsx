import React from "react";
import {
  Typography,
  TextField,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  makeStyles,
  Container,
  CssBaseline,
  Box,
  TableContainer,
  Paper,
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

//datos quemados search
const organizations = [
  { title: "Montaña de fuego" },
  { title: "Modep" },
  { title: "Polo" },
  { title: "Tierra de todos" },
  { title: "udenar" },
];

//datos quemados tabla

const rows = [
  createData(1, "Lennin Ibarra", "udenar", "Administrador"),
  createData(2, "Valentina Martinez", "Montaña de Fuego", "Administrador"),
  createData(3, "Deisy Rosero", "Tierra de todos", "Administrador"),
  createData(4, "Marta Melo", "Modep", "Administrador"),
  createData(5, "Diego Ojeda", "udenar", "Operador"),
  createData(6, "Leidy Burbano", "Polo", "Administrador"),
  createData(7, "Ciro Meneses", "udenar", "Administrador"),
  createData(8, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(9, "Marta Melo", "Modep", "Administrador"),
  createData(10, "Diego Ojeda", "udenar", "Operador"),
  createData(11, "Leidy Burbano", "Polo", "Administrador"),
  createData(12, "Ciro Meneses", "udenar", "Administrador"),
  createData(13, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(14, "Lennin Ibarra", "udenar", "Administrador"),
  createData(15, "Valentina Martinez", "Montaña de Fuego", "Administrador"),
  createData(16, "Deisy Rosero", "Tierra de todos", "Administrador"),
  createData(17, "Marta Melo", "Modep", "Administrador"),
  createData(18, "Diego Ojeda", "udenar", "Operador"),
  createData(19, "Leidy Burbano", "Polo", "Administrador"),
  createData(20, "Ciro Meneses", "udenar", "Administrador"),
  createData(21, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(22, "Marta Melo", "Modep", "Administrador"),
  createData(23, "Diego Ojeda", "udenar", "Operador"),
  createData(24, "Leidy Burbano", "Polo", "Administrador"),
  createData(25, "Ciro Meneses", "udenar", "Administrador"),
  createData(26, "Hilda Gonzalez", "udenar", "Administrador"),
];

// Generate Order Data
function createData(id, names, organization, rol) {
  return { id, names, organization, rol };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  search: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    maxWidth: 400,
  },
}));

const ListUserAdmin = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <CssBaseline />
        <Box display="flex" justifyContent="center">
          <Typography variant="h4">Listar usuarios</Typography>
        </Box>

        <Autocomplete
          className={classes.search}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={organizations.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar organización"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nombres y apellidos</TableCell>
                <TableCell>Organización</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell align="right">Ver</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.names}</TableCell>
                  <TableCell>{row.organization}</TableCell>
                  <TableCell>{row.rol}</TableCell>
                  <TableCell align="right">
                    <SearchIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListUserAdmin;
